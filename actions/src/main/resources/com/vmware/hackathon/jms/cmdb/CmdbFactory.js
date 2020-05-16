/**
 * @param {string} cmdbType
 *
 * @return {Any}
 */
(function (cmdbType) {
	var Class = System.getModule("com.vmware.pscoe.library.class").Class();
	var KangarooCmdb = Class.load("com.vmware.hackathon.jms.cmdb.kangaroo", "KangarooCmdb");
	var PlatypusCmdb = Class.load("com.vmware.hackathon.jms.cmdb.platypus", "PlatypusCmdb");
	var WombatCmdb = Class.load("com.vmware.hackathon.jms.cmdb.wombat", "WombatCmdb");

	System.log("CmdbFactory");

	return Class.define(function CmdbFactory() {
		this.getCmdb = function(cmdbType, endpointName, username, password) {
			if(cmdbType.toLowerCase() === "platypus") {
				return new PlatypusCmdb(endpointName, username, password);
			} else if(cmdbType.toLowerCase() === "kangaroo") {
				return new KangarooCmdb(endpointName, username, password);
			} else if(cmdbType.toLowerCase() === "wombat") {
				return new WombatCmdb(endpointName, username, password);
			}

			throw "Unknown cmdbType " + cmdbType + "!";
		}
	});
});
