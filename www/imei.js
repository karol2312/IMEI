var IMEIplugin = { 
    getIMEI: function (success, fail, resultType) {
    
    var platform = device.platform;
    	if(platform == 'Android'){
    	 	return cordova.exec( success, fail, 
                         	  "org.apache.cordova.GSMstock.Imei", 
                         	  "", [resultType]); 
         }  else if(platform == 'BlackBerry'){
             	return blackberry.identity.IMEI;
    	}
    }
     
};