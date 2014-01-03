describe('Chatanyara', function() {

  var expect = chai.expect;
  var results = Chatanyara.parse();
  
  it('should have all the keys defined and only them', function() {
    var keys = ['url', 'userAgent', 'navigation', 'resource', 'memory'];
    expect(results).to.have.keys(keys);
  });

	describe('Memory', function() {
    if (window.navigator.userAgent.indexOf('Chrome') === -1) {
      it('should be false in a browser other than Chrome', function() {
        expect(results.memory).to.be.false;
      });
    }
    else {
      it('should be false in a browser other than Chrome', function() {
        expect(results.memory).to.be.instanceof(Object);
      });
    }
	});

	describe('Navigation', function() {

    it('should have at least 20 items', function() {
      var i = 0;
      for (var key in results.navigation) {
        if (results.navigation.hasOwnProperty(key)) {
          ++i;
        }
      }
			expect(i).to.be.at.least(20);
		});

    it('navigationStart should be zero', function() {
			expect(results.navigation.navigationStart).to.be.equal(0);
		});
    
	});
  
	describe('Resource', function() {

    it('should have plenty of items', function() {
			expect(results.resource.length).to.be.at.least(4);
		});

	});
  
	describe('Window', function() {

    it('URL should be of test page', function() {
      expect(results.url).to.have.string('tests/index.html');
		});

    it('should have a meaningful user agent', function() {
      expect(results.userAgent).to.have.string('Mozilla');
		});
    
	});
  
	describe('Speed', function() {
    var start = Date.now();
    for (var i = 0; i < 1000; ++i) {
      var res = Chatanyara.parse();
    }
    var timeUsed = Date.now() - start;
    
    it('should not be slow (over 100 ms is slow for 1000 repetition)', function() {
      expect(timeUsed).to.be.below(100);
		});
   
	});
});