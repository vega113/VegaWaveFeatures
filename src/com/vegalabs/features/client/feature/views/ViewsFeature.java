package com.vegalabs.features.client.feature.views;

import com.google.gwt.gadgets.client.GadgetFeature;


public class ViewsFeature implements GadgetFeature {
	Views views;

	private native Views initViews() /*-{
		return gadgets.views;
	}-*/;

	public void initViewsFeature(){
		try{
			views = initViews();
			if(views == null){
			}else{
			}
		}catch (Exception e) {
		}
	}

	public  void requestNavigateTo(String view, String optParams) {
		try{
			views.requestNavigateTo(view,optParams);
		}catch (Exception e) {
		}
	}

}
