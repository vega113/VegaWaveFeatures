package com.vegalabs.features.client.utils;

import org.cobogw.gwt.waveapi.gadget.client.WaveFeature;

import com.vegalabs.features.client.feature.minimessages.MiniMessagesFeature;
import com.vegalabs.features.client.feature.views.ViewsFeature;
import com.vegalabs.general.client.objects.GoogleAnalyticsId;
import com.vegalabs.general.client.utils.VegaUtils;
import com.google.gwt.gadgets.client.DynamicHeightFeature;
import com.google.gwt.gadgets.client.GoogleAnalyticsFeature;
import com.google.gwt.gadgets.client.GoogleAnalyticsFeature.Tracker;

import java.util.HashMap;
import com.google.inject.Inject;


public class WaveVegaUtilsImpl implements VegaUtils {
	private WaveFeature wave;
	private DynamicHeightFeature height;
	private MiniMessagesFeature messages;
	private Tracker tracker;
	private ViewsFeature views;
	
	@Inject
	public WaveVegaUtilsImpl(WaveFeature wave, DynamicHeightFeature height,
			MiniMessagesFeature messages, GoogleAnalyticsFeature analytics,GoogleAnalyticsId analyticsId, ViewsFeature views) {
		this.wave = wave;
		this.height = height;
		this.messages = messages;
		this.tracker = analytics.createTracker(analyticsId.getAnalyticsId());
		this.views = views;
		views.initViewsFeature();
		messages.initMiniMessagesFeature();
	}
	@Override
	public void adjustHeight(){
		if(height != null){
			height.adjustHeight();
		}
	}
	
	@Override
	public String retrUserId() {
		if(wave != null && wave.getViewer() != null){
			return wave.getViewer().getId();
		}else{
			return "";
		}
		
	}
	@Override
	public String retrUserName() {
		if(wave != null && wave.getViewer() != null){
			return wave.getViewer().getDisplayName();
		}else{
			return "";
		}
		
	}
	@Override
	public String retrUserThumbnailUrl() {
		if(wave != null && wave.getViewer() != null){
			return wave.getViewer().getThumbnailUrl();
		}else{
			return "";
		}
		
	}
	
	@Override
	public String retrHostId(){
		if(wave != null && wave.getHost() != null){
			return wave.getHost().getId();
		}else{
			return "";
		}
	}
	@Override
	public void alert(String msg) {
		if("empty argument".equals(msg)){
			alert("Timeout! Please retry the request.");
		}else{
			if(msg.length() > 200){
				msg = msg.substring(0,200);
			}
			messages.alert(msg);
		}
		height.adjustHeight();
	}	
	@Override
	public void showStaticMessage(String msg) {
		messages.createStaticMessage(msg);
		height.adjustHeight();
	}	
	@Override
	public void dismissStaticMessage() {
		messages.dismissStaticMessage();
		height.adjustHeight();
	}
	@Override
	public void dismissAllStaticMessages() {
		messages.dismissAllStaticMessages();
		height.adjustHeight();
	}
	@Override
	public void showSuccessMessage(String msg, int seconds) {
		messages.showSuccessMessage(msg, seconds);
		height.adjustHeight();
	}
	@Override
	public void dismissAlert(){
		messages.dismissAlert();
		height.adjustHeight();
	}

	@Override
	public void showTimerMessage(String msg, int seconds) {
		messages.createTimerMessage(msg, seconds);
		
	}

	
	@Override
	public void reportPageview(String typeOfrecord) {
		tracker.reportPageview(typeOfrecord);
	}
	@Override
	public void putToPrivateSate(String key, String value){
		HashMap<String,String> delta = new HashMap<String, String>();
		delta.put(key, value);
		if(wave != null && wave.getPrivateState() != null){
			wave.getPrivateState().submitDelta(delta);
		}
	}
	@Override
	public void putToState(String key, String value){
		HashMap<String,String> delta = new HashMap<String, String>();
		delta.put(key, value);
		if(wave != null && wave.getState() != null){
			wave.getPrivateState().submitDelta(delta);
		}
	}
	@Override
	public String retrFromPrivateSate(String key){
		if(wave != null && wave.getPrivateState() != null){
			return wave.getPrivateState().get(key);
		}else{
			return "";
		}
	}
	@Override
	public void requestNavigateTo(String view,String optParams){
		views.requestNavigateTo(view, optParams);
	}
	@Override
	public String retrFromState(String key) {
		if(wave != null && wave.getState() != null){
			return wave.getState().get(key);
		}else{
			return "";
		}
	}
	@Override
	public void reportEvent(String eventName, String action, String label, int value) {
		tracker.reportEvent(eventName, action, label, value);
		
	}
	
	
}
