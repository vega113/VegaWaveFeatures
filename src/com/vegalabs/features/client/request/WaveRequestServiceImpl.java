package com.vegalabs.features.client.request;

import java.util.Date;
import java.util.HashMap;
import org.cobogw.gwt.waveapi.gadget.client.StateUpdateEvent;
import org.cobogw.gwt.waveapi.gadget.client.StateUpdateEventHandler;
import org.cobogw.gwt.waveapi.gadget.client.WaveFeature;

import com.vegalabs.general.client.request.RequestService;
import com.vegalabs.general.client.utils.VegaUtils;
import com.google.gwt.core.client.JavaScriptException;
import com.google.gwt.core.client.JavaScriptObject;
import com.google.gwt.core.client.JsArrayString;
import com.google.gwt.http.client.RequestException;
import com.google.gwt.json.client.JSONObject;
import com.google.gwt.json.client.JSONParser;
import com.google.gwt.json.client.JSONValue;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.inject.Inject;


public class WaveRequestServiceImpl implements RequestService {
	private VegaUtils utils;
	private WaveFeature wave;
	
	@Inject
	public WaveRequestServiceImpl(VegaUtils utils, WaveFeature wave){
		this.utils = utils;
		this.wave = wave;
		wave.addStateUpdateEventHandler(stateUpdateEventHandler);
	}
	
	StateUpdateEventHandler stateUpdateEventHandler = new StateUpdateEventHandler() {
		@Override
		public void onUpdate(StateUpdateEvent event) {
			JsArrayString keys =  event.getState().getKeys();
			AsyncCallback<JSONValue> callback = null;
			try{
				HashMap<String,String> delKeyDelta = new HashMap<String, String>(1);
				for(int i = 0; i < keys.length(); i++){
					if(keys.get(i).toLowerCase().startsWith("response") &&  callbacksMap.containsKey(keys.get(i).toLowerCase())){
						try{
							callback = callbacksMap.remove(keys.get(i));
							String responseStr = event.getState().get(keys.get(i));
							try{
								JSONValue jsonVal = JSONParser.parse(responseStr);
								if(jsonVal.isObject() != null){
									if(jsonVal.isObject().containsKey("error")){
										throw new Exception(jsonVal.isObject().get("error").isString().stringValue());
									}else if(jsonVal.isObject().containsKey("result")){
										callback.onSuccess(jsonVal.isObject().get("result"));

									}else if(jsonVal.isObject().containsKey("success")){
										callback.onSuccess(jsonVal.isObject().get("success"));

									}
								}
								
							}catch(Exception e){
								callback.onFailure(e);
								delKeyDelta.put(keys.get(i), null);//consume
							}
							delKeyDelta.put(keys.get(i), null);//consume
						}catch (Exception e) {
							if(callback != null){
								callback.onFailure(e);
							}
						}
					}else if(keys.get(i).startsWith("response")){
//						delKeyDelta.put(keys.get(i), null); //TODO if older than say TIME_OUT - dismiss
					}
				}
				event.getState().submitDelta(delKeyDelta); // update state
			}catch (Exception e) {
			}
		}
	};
	
	private static HashMap<String, AsyncCallback<JSONValue>> callbacksMap = new HashMap<String, AsyncCallback<JSONValue>>();
	
	@Override
	public void makeRequest(String url, AsyncCallback<JSONValue> callback,
			JavaScriptObject params) throws RequestException {
		try{
			if(url == null || callback == null){
				throw new IllegalArgumentException("URL OR CALLBACK OR BOTH IS NULL: " + url + " : " + callback.toString());
			}
			String user = null;
			try{
				user = utils.retrUserId();
				if("".equals(user)){
					return;
				}
			}catch (Exception e) {
				return;
			}
			long timestamp = (new Date()).getTime();
			String callbackResponseKey = "response#" + user +"#" + timestamp;
			String callbackRequestKey = "request#" + user +"#" + timestamp;
			callbacksMap.put(callbackResponseKey, callback);
			HashMap<String,String> delta = new HashMap<String, String>();
			String paramsStr = (new JSONObject(params)).toString();
			delta.put(callbackRequestKey, paramsStr);
			wave.getState().submitDelta(delta);
		}catch(JavaScriptException e){
			callback.onFailure(e);
		}catch(Exception e){
			callback.onFailure(e);
		}
	}

}
