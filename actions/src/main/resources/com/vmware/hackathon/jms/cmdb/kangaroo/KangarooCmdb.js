/**
 * @return {Any}
 */
(function () {	
	var Class = System.getModule("com.vmware.pscoe.library.class").Class();
	var CmdbBase = Class.load("com.vmware.hackathon.jms.cmdb", "CmdbBase");
	//System = System.getModule("com.vmware.hackathon.jms.cmdb.mocks").SystemExtender().mockSystem();
	//System.getContext = function() { return undefined; }
	//var RestHostFactory = System.getModule("com.vmware.pscoe.library.rest").RestHostFactory();
	//var RestClient = System.getModule("com.vmware.pscoe.library.rest").RestClient();
	var RestHostFactory = {};	
	RestHostFactory.newHostWithBasicAuth = function(url,endpointName,username,password)	{return {};	}
	RestClient = function(restHost){this.restHost = restHost;};
	RestClient.prototype.put = function(urlTemplate,params,content){return "200:"+urlTemplate+":"+JSON.stringify(content);}
	RestClient.prototype.delete = function(urlTemplate,params,content){return "200:"+urlTemplate;}

	return Class.define(function KangarooCmdb(urlBase){
		CmdbBase.call(this,urlBase);
		//this.urlBase = "http://kangaroo.cba.com";
		this.urlOperation = "/api/record";
		this.Init();
		
		this.Add = function(name,size){
			var data = { "name":name,"size":size };
			var restClient = new RestClient(this.restHost);
			return restClient.put(this.url, [], data);
			//return "Add: "+this.url;
			//return JSON.stringify(data);
		}

		this.Delete = function(id){
			this.url += "/"+id;
			var restClient = new RestClient(this.restHost);
			return restClient.delete(this.url, [], null);
		}
	}, null, CmdbBase);
});
