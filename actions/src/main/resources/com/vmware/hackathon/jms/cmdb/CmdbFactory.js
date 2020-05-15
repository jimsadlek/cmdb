/**
 * @param {string} cmdbType
 * @return {Any}
 */
(function (cmdbType) {
	var Class = System.getModule("com.vmware.pscoe.library.class").Class();
	var KangarooCmdb = Class.load("com.vmware.hackathon.jms.cmdb.kangaroo", "KangarooCmdb");
	var PlatypusCmdb = Class.load("com.vmware.hackathon.jms.cmdb.platypus", "PlatypusCmdb");
	var WombatCmdb = Class.load("com.vmware.hackathon.jms.cmdb.wombat", "WombatCmdb");

	return Class.define(function CmdbFactory() {
		this.getCmdb = function(cmdbType, urlBase) {
			if(cmdbType.toLowerCase() === "platypus") {
				return new PlatypusCmdb(urlBase);
			} else if(cmdbType.toLowerCase() === "kangaroo") {
				return new KangarooCmdb(urlBase);
			} else if(cmdbType.toLowerCase() === "wombat") {
				return new WombatCmdb(urlBase);
			}

			throw "Unknown cmdbType " + cmdbType + "!";
		}
	});
});
