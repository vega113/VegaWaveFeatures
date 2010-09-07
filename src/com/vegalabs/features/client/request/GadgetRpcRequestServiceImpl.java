package com.vegalabs.features.client.request;

import com.allen_sauer.gwt.log.client.Log;
import com.google.gwt.core.client.GWT;
import com.google.gwt.core.client.JavaScriptObject;
import com.google.gwt.gadgets.client.gwtrpc.GadgetsGwtRpc;
import com.google.gwt.http.client.RequestException;
import com.google.gwt.json.client.JSONObject;
import com.google.gwt.json.client.JSONParser;
import com.google.gwt.json.client.JSONValue;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.rpc.ServiceDefTarget;
import com.google.inject.Inject;
import com.vegalabs.features.client.request.rpc.GadgetService;
import com.vegalabs.features.client.request.rpc.GadgetServiceAsync;
import com.vegalabs.general.client.objects.AppDomainId;
import com.vegalabs.general.client.request.RequestCallbackImpl;
import com.vegalabs.general.client.request.RequestService;

public class GadgetRpcRequestServiceImpl implements RequestService {

	private GadgetServiceAsync gadgetService  = GWT.create(GadgetService.class);
	
	private AppDomainId appDomainId = null;
	
	@Inject
	public GadgetRpcRequestServiceImpl(AppDomainId id){
		appDomainId = id;
	}
	
	@Override
	public void makeRequest(String url, final AsyncCallback<JSONValue> callback,
			JavaScriptObject params) throws RequestException {
		 String paramsStr = (new JSONObject(params)).toString();
		Log.info("entering GadgetRpcRequestServiceImpl.makeRequest: " + paramsStr);
		
	    ServiceDefTarget serviceDef = (ServiceDefTarget) gadgetService;
	    serviceDef.setServiceEntryPoint("http://" + appDomainId.getId() + ".appspot.com");
	    
	 // Uses Gadgets container as proxy for GWT RPC requests
	    GadgetsGwtRpc.redirectThroughProxy(serviceDef);
	    
	   
	    
	    gadgetService.makeRpcRequest(paramsStr, new AsyncCallback<String>() {
			
			@Override
			public void onSuccess(String result) {
				JSONValue json = JSONParser.parse(result);
				callback.onSuccess(json);
			}
			
			@Override
			public void onFailure(Throwable caught) {
				callback.onFailure(caught);
			}
		});
	    Log.info("exiting GadgetRpcRequestServiceImpl.makeRequest");
	}
}
