var IMEIplugin = function() {};

IMEIplugin.prototype.getIMEI = function(success, fail) { 
        var platform = device.platform;
    	
		if(platform == 'Android'){
    	 	return cordova.exec( success, fail, 
                         	  'IMEIplugin', 
                         	  'get', []); 
         } else if(platform == 'BlackBerry'){
             return blackberry.identity.IMEI;
		 }
		return 'no_imei';
}; 


if(!window.plugins) {
    window.plugins = {};
}

if (!window.plugins.imei) {
    window.plugins.imei = new IMEIplugin();
} 