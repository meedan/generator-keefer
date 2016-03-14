package com.<%= machine_name %>;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;

import java.util.Arrays;
import java.util.List;

import com.<%= machine_name %>.modules.share.SharePackage;

import android.content.Intent;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript.
   * This is used to schedule rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "<%= name %>";
  }

  /**
   * Returns whether dev mode should be enabled.
   * This enables e.g. the dev menu.
   */
  @Override
  protected boolean getUseDeveloperSupport() {
    return BuildConfig.DEBUG;
  }

  /**
   * A list of packages used by the app. If the app uses additional views
   * or modules besides the default ones, add more packages here.
   */
  @Override
  protected List<ReactPackage> getPackages() {
    Intent intent = getIntent();
    String action = intent.getAction();
    String type = intent.getType();
    String inputText = intent.getStringExtra(Intent.EXTRA_TEXT);

    return Arrays.<ReactPackage>asList(
      new MainReactPackage(),
      new SharePackage(inputText)
    );
  }
}