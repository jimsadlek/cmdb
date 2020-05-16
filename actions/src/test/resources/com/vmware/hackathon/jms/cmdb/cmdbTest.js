describe("CMDB Tests", function() {
	var Class = System.getModule("com.vmware.pscoe.library.class").Class();
	var CmdbFactory = Class.load("com.vmware.hackathon.jms.cmdb","CmdbFactory");

	var name = "jms";
	var size = "28"
	var id = "99";
	var data = new XML('<CreateRecord><Name>'+name+'</Name><Size>'+size+'</Size></CreateRecord>');
	var expectedXml = data.toString();
	data = new XML('<DeleteRecord><Id>'+id+'</Id></DeleteRecord>');
	var expectedXml2 = data.toString();


	it("Kangaroo test",function(){
		var factory = new CmdbFactory();
		var cmdb = factory.getCmdb("kangaroo","http://kangaroo.cba.com","/api/record");
		
		expect(cmdb.Add(name,size)).toBe('200:http://kangaroo.cba.com/api/record:{"name":"jms","size":"28"}');
		expect(cmdb.Delete(id)).toBe('200:http://kangaroo.cba.com/api/record/99');
	});

	it("Platypus test",function(){
		var factory = new CmdbFactory();
		var cmdb = factory.getCmdb("Platypus","http://platypus.cba.com/","api/transaction/create");

		expect(cmdb.Add(name,size)).toBe('200:http://platypus.cba.com/api/transaction/create:{"name":"jms","size":"28"}');
	});

	it("Wombat test",function(){
		var factory = new CmdbFactory();
		var cmdb = factory.getCmdb("wombat", "http://wombat.cba.com/","cmdb/v1/record");

		expect(cmdb.Add(name,size)).toBe("200:http://wombat.cba.com/cmdb/v1/record:"+expectedXml);
		expect(cmdb.Delete(id)).toBe('200:http://wombat.cba.com/cmdb/v1/record:'+expectedXml2);
	});
});
