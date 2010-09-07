
package com.vegalabs.features.server;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gwt.user.server.rpc.RPCServletUtils;
import com.google.gwt.user.server.rpc.RemoteServiceServlet;
import com.google.inject.Inject;
import com.google.inject.Injector;
import com.google.inject.Singleton;
import com.vegalabs.features.client.request.rpc.GadgetService;
import com.vegalabs.general.server.command.Command;
import com.vegalabs.general.server.command.CommandFetcher;
import com.vegalabs.general.server.rpc.JsonExceptionHandler;
import com.vegalabs.general.server.rpc.JsonRpcRequest;
import com.vegalabs.general.server.rpc.util.Util;
import java.io.IOException;
import java.util.logging.Logger;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import org.json.JSONException;
import org.json.JSONObject;

/**
 * A sample servlet that returns information about the server.
 */
@Singleton
public class GadgetRPCServlet extends RemoteServiceServlet implements
    GadgetService {

	Logger LOG = Logger.getLogger(GadgetRPCServlet.class.getName());
	
	private Injector injector = null;

	@Inject
	public GadgetRPCServlet(Injector injector, Util util, JsonExceptionHandler jsonExceptionHandler) {
		this.injector = injector;
	}

  /**
   * Do not validate HTTP headers - iGoogle munges them.
   */
  @Override
  protected String readContent(HttpServletRequest request)
      throws ServletException, IOException {
    return RPCServletUtils.readContentAsUtf8(request, false);
  }


	@Override
	public String makeRpcRequest(String postBody) {
		LOG.info("Entering GadgetRPCServlet.makeRpcRequest input: " + postBody);
		JSONObject json = null;
		 Gson gson = new GsonBuilder().excludeFieldsWithoutExposeAnnotation().create();
		  JsonRpcRequest jsonRpcRequest = gson.fromJson(postBody, JsonRpcRequest.class);
		  if (jsonRpcRequest != null) {
				String method = jsonRpcRequest.getMethod();
				if (method != null) {
					LOG.info("processing method " + method);
					CommandFetcher fetcher = injector.getInstance(CommandFetcher.class);//each app should provide implementation for the CommandFetcher and bind it with guice to the interface
					Command command = fetcher.fetchCommand(method);
					command.setParams(jsonRpcRequest.getParams());
					try {
						json = command.execute();
					} catch (JSONException e) {
						return handleException(e);
					} catch (IllegalArgumentException e) {
						return handleException(e);
					}
				}
			}
		return json.toString();
	}
	
	private String handleException(Exception e){
		JSONObject error = new JSONObject();
		try {
			error.put("error", e.getMessage());
		} catch (JSONException e1) {
		}
		return error.toString();
	}
}
