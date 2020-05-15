/**
 * @return {Any}
 */
(function () {
	var Class = System.getModule("com.vmware.pscoe.library.class").Class();
	var CmdbBase = Class.load("com.vmware.hackathon.jms.cmdb", "CmdbBase");

	return Class.define(function WombatCmdb(){
		CmdbBase.call(this);
		this.url = "http://wombat.cba.com/cmdb/v1/record";
		
	}, null, CmdbBase);
});