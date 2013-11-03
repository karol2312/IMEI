var IMEIplugin = function() { 
     alert("1");
}

IMEIplugin.prototype.getIMEI = function(success, fail) { 
alert("2");
          var platform = device.platform;
		  alert("3");
    	if(platform == 'Android'){
    	 	return PhoneGap.exec( success, fail, 
                         	  'com.GSMstock.IMEIplugin', 
                         	  '', []); 
         }  else if(platform == 'BlackBerry'){
             	return blackberry.identity.IMEI;
    	}
		return 0;
}; 


PhoneGap.addConstructor(function() { 
  PhoneGap.addPlugin('com.GSMstock.IMEIplugin', new IMEIplugin()); 
}); 