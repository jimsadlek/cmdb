describe("CMDB Tests", function() {
	var Class = System.getModule("com.vmware.pscoe.library.class").Class();
	var CmdbFactory = Class.load("com.vmware.hackathon.jms.cmdb","CmdbFactory");

	var name = "jms";
	var size = "28"
	var id = "99";
	it("Kangaroo test",function(){
		var factory = new CmdbFactory();
		var cmdb = factory.getCmdb("kangaroo","http://kangaroo.cba.com");
		
		expect(cmdb.Add(name,size)).toBe('200:http://kangaroo.cba.com/api/record:{"name":"jms","size":"28"}');
		expect(cmdb.Delete(id)).toBe('200:http://kangaroo.cba.com/api/record/99');
	});

	it("Platypus test",function(){
		var factory = new CmdbFactory();
		var cmdb = factory.getCmdb("Platypus");

		expect(cmdb.Add(name,size)).toBe("Add: http://platypus.cba.com/api/transaction/create");
	});

	it("Wombat test",function(){
		var factory = new CmdbFactory();
		var cmdb = factory.getCmdb("wombat");

		expect(cmdb.Add(name,size)).toBe("Add: http://wombat.cba.com/cmdb/v1/record");
	});
});
