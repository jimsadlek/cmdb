/**
 * @return {Any}
 */
(function () {
	var Class = System.getModule("com.vmware.pscoe.library.class").Class();
	var CmdbBase = Class.load("com.vmware.hackathon.jms.cmdb", "CmdbBase");
	var RestHostFactory = {};	
	RestHostFactory.newHostWithBasicAuth = function(url,endpointName,username,password)	{return {};	}
	RestClient = function(restHost){this.restHost = restHost;};
	RestClient.prototype.post = function(urlTemplate,params,content){return "200:"+urlTemplate+":"+content;}
	RestClient.prototype.put = function(urlTemplate,params,content){return "200:"+urlTemplate+":"+JSON.stringify(content);}
	RestClient.prototype.delete = function(urlTemplate,params,content){return "200:"+urlTemplate;}

	System.log("PlatypusCmdb");

	return Class.define(function PlatypusCmdb(endpointName, username, password){
		CmdbBase.call(this,endpointName, username, password);
		this.urlBase = "http://platypus.cba.com/";
		this.urlOperation = "api/transaction/create";
		this.Init();

		this.restClient = new RestClient(this.restHost);

		this.Commit = function(transactionId){
			this.url = this.url.replace("create","commit");
			var data = {"transactionId" : transactionId	};
			return this.restClient.post(this.url, [], JSON.stringify(data));
		}

		this.Add = function(name,size){
			var data = { "name":name,"size":size };
			this.restClient.post(this.url, [], data);

			var transactionId = 1;

			return this.Commit(1);
		}

		this.Delete = function(id){
			var restClient = new RestClient(this.restHost);
			this.url = this.url.replace("create","delete");
			var data = {"id":id};
			restClient.post(this.url, [], data);

			return this.Commit(5);
		}

	}, null, CmdbBase);
});
