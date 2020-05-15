/**
 * @return {Any}
 */
(function () {
	var Class = System.getModule("com.vmware.pscoe.library.class").Class();
	var CmdbBase = Class.load("com.vmware.hackathon.jms.cmdb", "CmdbBase");

	return Class.define(function PlatypusCmdb(){
		CmdbBase.call(this);
		this.urlBase = "http://platypus.cba.com/";
		this.urlOperation = "api/transaction/create";
		this.url = this.urlBase + this.urlOperation;
		this.restHost = RestHostFactory.newHostWithBasicAuth(this.url, this.endpointName, this.username, this.password);
	
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