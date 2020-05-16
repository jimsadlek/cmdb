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

	System.log("KangarooCmdb");

	return Class.define(function KangarooCmdb(endpointName, username, password){
		CmdbBase.call(this,endpointName, username, password);
		this.urlBase = "http://kangaroo.cba.com";
		this.urlOperation = "/api/record";
		this.Init();
	
		this.Add = function(name,size){
			var data = { "name":name,"size":size };
			var restClient = new RestClient(this.restHost);
			return restClient.put(this.url, [], data);
		}

		this.Delete = function(id){
			this.url += "/"+id;
			var restClient = new RestClient(this.restHost);
			return restClient.delete(this.url, [], null);
		}
	}, null, CmdbBase);
});
