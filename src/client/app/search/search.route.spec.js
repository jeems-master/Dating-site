/* jshint -W117, -W030 */
describe('search routes', function() {
  describe('state', function() {
    var view = 'app/search/search.html';

    beforeEach(function() {
      module('app.search', bard.fakeToastr);
      bard.inject('$httpBackend', '$location', '$rootScope', '$state', '$templateCache');
    });

    beforeEach(function() {
      $templateCache.put(view, '');
    });

    it('should map state admin to url /search ', function() {
      expect($state.href('search', {})).to.equal('/search');
    });

    it('should map /search route to search View template', function() {
      expect($state.get('search').templateUrl).to.equal(view);
    });

    it('of search should work with $state.go', function() {
      $state.go('search');
       expect($state.is('search'));
    });
  });
});
