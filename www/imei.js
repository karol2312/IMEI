var IMEIplugin = { 
    getIMEI: function (success, fail, resultType) {
    
    var platform = device.platform;
    	if(platform == 'Android'){
    	 	return cordova.exec( success, fail, 
                         	  "com.GSMstock.IMEI", 
                         	  "", [resultType]); 
         }  else if(platform == 'BlackBerry'){
             	return blackberry.identity.IMEI;
    	}
    }
     
};