var expect = chai.expect;

describe("DataAccess", function() {
	describe("#get", function(){
		it("should get result without error", function(done){
			S.dataAccess
			.get("http://localhost:21214")
			.then(function(data){
				expect(data.hello.length > 0).to.be.true;
				done();
			})
			.catch(function(error){
				throw error;
				done();
			});
		});
	});
});