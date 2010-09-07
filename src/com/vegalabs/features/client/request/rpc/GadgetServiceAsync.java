package com.vegalabs.features.client.request.rpc;

import com.google.gwt.json.client.JSONValue;
import com.google.gwt.user.client.rpc.AsyncCallback;

/**
 * An asynchronous counterpart to the {@link GadgetService} interface methods.
 */
public interface GadgetServiceAsync {
  void makeRpcRequest(String params, AsyncCallback<String> callback);
}
