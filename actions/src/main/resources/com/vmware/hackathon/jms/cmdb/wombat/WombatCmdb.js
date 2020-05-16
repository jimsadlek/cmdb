/**
 * @return {Any}
 */
(function () {
	var Class = System.getModule("com.vmware.pscoe.library.class").Class();
	var CmdbBase = Class.load("com.vmware.hackathon.jms.cmdb", "CmdbBase");
	var RestHostFactory = {};	
	RestHostFactory.newHostWithBasicAuth = function(url,endpointName,username,password)	{return {};	}
	RestClient = function(restHost){this.restHost = restHost;};
	RestClient.prototype.put = function(urlTemplate,params,content){return "200:"+urlTemplate+":"+JSON.stringify(content);}
	RestClient.prototype.delete = function(urlTemplate,params,content){return "200:"+urlTemplate;}
	RestClient.prototype.post = function(urlTemplate,params,content){return "200:"+urlTemplate+":"+content.toString();}

	return Class.define(function WombatCmdb(urlBase,urlOperation){
		CmdbBase.call(this,urlBase,urlOperation);
		this.Init();

	}, null, CmdbBase);
});