/**
 * 
 */
(function () {
	var Class = System.getModule("com.vmware.pscoe.library.class").Class();
	var RestHostFactory = {};	
	RestHostFactory.newHostWithBasicAuth = function(url,endpointName,username,password)	{return {};	}
	RestClient = function(restHost){this.restHost = restHost;};
	RestClient.prototype.delete = function(urlTemplate,params,content){return "200:"+urlTemplate;}
	//RestClient.prototype.post = function(urlTemplate,params,content){return "200:"+urlTemplate+":"+JSON.stringify(content);}
	RestClient.prototype.post = function(urlTemplate,params,content){return "200:"+urlTemplate+":"+content.toString();}
	
	return Class.define(function CmdbBase(urlBase,urlOperation){
		// Private
		
		// Public 
		this.username = "myusername";
		this.password = "mypassword";
		this.endpointName = "endpointName";
		this.urlBase = urlBase;
		this.urlOperation = urlOperation;
		this.url = "Default URL";

		this.Init = function(){
			this.url = this.urlBase + this.urlOperation;
			this.restHost = RestHostFactory.newHostWithBasicAuth(this.url, this.endpointName, this.username, this.password);
		}
			
		this.Add = function(name,size){
			var data = new XML('<CreateRecord><Name>'+name+'</Name><Size>'+size+'</Size></CreateRecord>');
			var restClient = new RestClient(this.restHost);
			return restClient.post(this.url, [], data);
		}

		this.Delete = function(id){
			var data = new XML('<DeleteRecord><Id>'+id+'</Id></DeleteRecord>');
			var restClient = new RestClient(this.restHost);
			return restClient.post(this.url, [], data);
		}		
	}, null, null);
});
