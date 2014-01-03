describe('Chatanyara', function() {

  var results = Chatanyara.parse();

	describe('Memory', function() {

		it('perhaps it should be false if not supported', function() {
			chai.expect(results.memory).to.be.false;
		});

	});

	describe('Navigation', function() {

    it('should have quite many items', function() {
			chai.expect(results.navigation).length(8);
		});

	});
  
	describe('Resource', function() {

    it('should have plenty of items', function() {
			chai.expect(results.resource).to.be.at.least(8);
		});

	});
  
	describe('Window', function() {

    it('URL should be of test page', function() {
      chai.expect(results.url).to.contain('index.html');
		});

    it('should have a meaningful user agent', function() {
      chai.expect(results.userAgent).to.contain('Mozilla');
		});
    
	});
  
});