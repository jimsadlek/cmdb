/**
 * 
 */
(function () {
	var Class = System.getModule("com.vmware.pscoe.library.class").Class();
	//System = System.getModule("com.vmware.hackathon.jms.cmdb.mocks").SystemExtender().mockSystem();
	//System.getContext = function() { return undefined; }
	

	return Class.define(function CmdbBase(urlBase){
		// Private
		//var RestHostFactory = System.getModule("com.vmware.pscoe.library.rest").RestHostFactory();
		//var RestClient = System.getModule("com.vmware.pscoe.library.rest").RestClient();
		
		// Public 
		this.username = "myusername";
		this.password = "mypassword";
		this.endpointName = "endpointName";
		this.urlBase = urlBase;
		this.url = "Default URL";
		this.Init = function(){
			this.url = this.urlBase + this.urlOperation;
			this.restHost = RestHostFactory.newHostWithBasicAuth(this.url, this.endpointName, this.username, this.password);
		}
			
		this.Add = function(name,size) {
			//restClient = new RestClient(this.restHost);
			
			//restClient.put(this.url, [], this.data);
			return "Add: "+this.url;
		}
		this.Delete = function(id) {
			return "Delete: "+this.url; 
		}
	}, null, null);
});
