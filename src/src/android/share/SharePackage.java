package com.<%= machine_name %>.modules.share;

import android.app.Activity;

import java.util.*;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.JavaScriptModule;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import com.<%= machine_name %>.modules.share.ShareModule;

public class SharePackage implements ReactPackage {
  private String inputText;

  public SharePackage(String _inputText) {
    super();
    this.inputText = _inputText;
  }

  @Override
  public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
    List<NativeModule> modules = new ArrayList<>();
    modules.add(new ShareModule(reactContext, getInputText()));
    return modules;
  }

  @Override
  public List<Class<? extends JavaScriptModule>> createJSModules() {
    return Collections.emptyList();
  }

  @Override
  public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
    return Collections.emptyList();
  }

  public String getInputText() {
    return inputText;
  }
}
