package com.vegalabs.features.client.request;

import com.allen_sauer.gwt.log.client.Log;
import com.google.gwt.core.client.JavaScriptObject;
import com.google.gwt.gadgets.client.io.GadgetsIo;
import com.google.gwt.gadgets.client.io.IoProvider;
import com.google.gwt.gadgets.client.io.MethodType;
import com.google.gwt.gadgets.client.io.RequestOptions;
import com.google.gwt.gadgets.client.io.ResponseReceivedHandler;
import com.google.gwt.http.client.RequestException;
import com.google.gwt.json.client.JSONObject;
import com.google.gwt.json.client.JSONParser;
import com.google.gwt.json.client.JSONValue;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.inject.Inject;
import com.vegalabs.general.client.objects.AppDomainId;
import com.vegalabs.general.client.request.RequestService;

public class GadgetRequestServiceImpl implements RequestService {

	
	private AppDomainId appDomainId = null;
	@Inject
	public GadgetRequestServiceImpl(AppDomainId id){
		appDomainId = id;
		io = IoProvider.get();
	}
	GadgetsIo io = null;
	
	@Override
	public void makeRequest(String url, final AsyncCallback<JSONValue> callback, JavaScriptObject params) throws RequestException {
		url = "http://" + appDomainId.getId() + ".appspot.com" + url;
		String paramsStr = (new JSONObject(params)).toString();
		Log.info("entering GadgetRequestServiceImpl.makeRequest url: " +url + ", postData: " +  paramsStr);
		RequestOptions requestOptions = RequestOptions.newInstance();
		requestOptions.setPostData(paramsStr);
		requestOptions.setMethodType(MethodType.POST);
		requestOptions.setRefreshInterval(0);
		io.makeRequestAsText(url, new ResponseReceivedHandler<String>() {
			
			@Override
			public void onResponseReceived(ResponseReceivedEvent<String> event) {
				String responseStr = null;
				try{
					
					int statusCode = event.getResponse().getStatusCode();
					if(statusCode != 200){
						throw new IllegalArgumentException("Request Failed! Response status code is: " + statusCode + "! Please retry the request.");//TODO need to localize the message
					}
					String contentType = event.getResponse().getHeader("Content-Type");
					Log.info("entering GadgetRequestServiceImpl.onResponseReceived statusCode: " +statusCode + ", contentType: " + contentType);
					responseStr = event.getResponse().getText();
					Log.info("entering GadgetRequestServiceImpl.onResponseReceived Response: " +responseStr);
					JSONValue jsonVal = JSONParser.parse(responseStr);
					if(jsonVal.isObject().containsKey("error")){
						String errorMsg = jsonVal.isObject().get("error").isString().stringValue();
						throw new Exception(errorMsg);
					}else if(jsonVal.isObject().containsKey("result")){
							callback.onSuccess(jsonVal.isObject().get("result"));
							
					}else if(jsonVal.isObject().containsKey("success")){
							callback.onSuccess(jsonVal.isObject().get("success"));
							
					}
				}catch(Exception e){
					callback.onFailure(e);
				}
			
			}
		}, requestOptions);
	}
}
