package android;


import org.apache.cordova.api.CallbackContext;
import org.apache.cordova.api.CordovaPlugin;
import org.apache.cordova.api.PluginResult;
import org.json.JSONArray;

import android.content.Context;
import android.telephony.TelephonyManager;

public class IMEIplugin extends CordovaPlugin {

	@Override
	public boolean execute(String action, JSONArray args,
			CallbackContext callbackContext) {
		PluginResult.Status status = PluginResult.Status.NO_RESULT;

		String result = null;

		TelephonyManager telephonyManager = (TelephonyManager) this.cordova
				.getActivity().getSystemService(Context.TELEPHONY_SERVICE);

		result = telephonyManager.getDeviceId();

		if (result != null) {
			status = PluginResult.Status.OK;
		}

		callbackContext.sendPluginResult(new PluginResult(status, result));
		return true;
	}
}

