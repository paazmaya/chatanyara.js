describe('Chatanyara', function() {

  var results = Chatanyara.parse();

	describe('Memory', function() {

		it('perhaps it should be false if not supported', function() {
			chai.assert.equal(results.memory, false);
		});

	});

	describe('Navigation', function() {

    it('should have quite many items', function() {
			chai.assert.equal(results.navigation.length, 8);
		});

	});

});