var IMEIplugin = function() { alert("1")};

IMEIplugin.prototype.getIMEI = function(success, fail) { 
			alert("2");
          var platform = device.platform;
		  alert("3");
    	if(platform == 'Android'){
		alert("4");
    	 	return cordova.exec( success, fail, 
                         	  'com.GSMstock.IMEIplugin', 
                         	  '', []); 
         }  else if(platform == 'BlackBerry'){
             	return blackberry.identity.IMEI;
    	}
		return 0;
}; 


if(!window.plugins) {

    window.plugins = {};

}

if (!window.plugins.imei) {

    window.plugins.imei = new IMEIplugin();

} 