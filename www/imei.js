var IMEIplugin = function() { 
     
}

IMEIplugin.prototype.getIMEI = function(success, fail) { 
          var platform = device.platform;
    	if(platform == 'Android'){
    	 	return PhoneGap.exec( success, fail, 
                         	  'com.GSMstock.IMEIplugin', 
                         	  '', []); 
         }  else if(platform == 'BlackBerry'){
             	return blackberry.identity.IMEI;
    	}
}; 


PhoneGap.addConstructor(function() { 
  PhoneGap.addPlugin('com.GSMstock.IMEIplugin', new IMEIplugin()); 
}); 