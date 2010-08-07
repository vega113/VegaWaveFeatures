package com.vegalabs.features.client.feature.minimessages;

import com.google.gwt.gadgets.client.GadgetFeature;


public class MiniMessagesFeature implements GadgetFeature {
	MiniMessages messages;

	private native MiniMessages initMessages() /*-{
		$wnd.msgCounter = 0;
		$wnd.gwtHtmlMsg = {};
		$wnd.msgAlertCounter = 0;
		$wnd.gwtAlertHtmlMsg = {};
		return new gadgets.MiniMessage("portfoliogadget");
	}-*/;

	public void initMiniMessagesFeature(){
		try{
			messages = initMessages();
		}catch (Exception e) {
		}
	}


	public  void createDismissibleMessage(String message) {
		try{
			messages.createDismissibleMessage(message);
		}catch (Exception e) {
			
		}
	}

	public void createStaticMessage(String message){
		try{
			messages.createStaticMessage(message);
		}catch (Exception e) {
			
		}
	}

	public  void createTimerMessage(String message, int seconds) {
		try{
			messages.createTimerMessage(message,seconds);
		}catch (Exception e) {
			
		}
	}

	public  void dismissStaticMessage() {
		try{
			messages.dismissStaticMessage();
		}catch (Exception e) {
			
		}
	}
	
	public void dismissAllStaticMessages(){
		messages.dismissAllStaticMessages();
	}
	
	public  void alert(String message) {
		try{
			messages.alert(message);
		}catch (Exception e) {
			
		}
	}

	public void showSuccessMessage(String msg, int seconds) {
		messages.success(msg, seconds);
	}
	
	public void dismissAlert(){
		messages.dismissAlert();
	}
}
