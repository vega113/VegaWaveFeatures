package com.vegalabs.features.client.request.rpc;

import com.google.gwt.json.client.JSONValue;
import com.google.gwt.user.client.rpc.RemoteService;
import com.google.gwt.user.client.rpc.RemoteServiceRelativePath;

/**
 * A Sample RPC Interface to demonstrate RPC usage with Gadgets.
 */
@RemoteServiceRelativePath("gadgetRPC")
public interface GadgetService extends RemoteService {
	String makeRpcRequest(String params);
}
