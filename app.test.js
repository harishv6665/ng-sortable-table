
describe('Fetch data and show', function () {

    var scope, ctrl, httpService;
    beforeEach(module('sortApp'));

    beforeEach(inject(function ($rootScope, $controller, $injector) {
        scope = $rootScope.$new();
        ctrl = $controller;
        httpService = $injector.get('$http');

        ctrl('mainController', {$http: httpService});
    }));

    it('Getting data from server on success', function() {
        var respData = {data:{id:1}};
        var responseObj = {
            then: function (success, error) {
                if (respData.data) {
                    success(respData);
                } else {
                    error(respData);
                }
            }
        };

        var httpwrapStub = sinon.stub(httpService, 'get');
        httpwrapStub.returns(responseObj);
        scope.getTableData();
        expect(scope.tableBodyData).to.equal(respData.data);
        expect(httpwrapStub.calledOnce).to.be.ok;
        httpwrapStub.restore();
    });

    it('Display error msg if failed to fetch data', function() {
        var respData = {};
        var responseObj = {
            then: function (success, error) {
                if (respData.data) {
                    success(respData);
                } else {
                    error(respData);
                }
            }
        };

        var httpwrapStub = sinon.stub(httpService, 'get');
        httpwrapStub.returns(responseObj);
        scope.getTableData();
        expect(scope.tableBodyData).to.equal(undefined);
        expect(httpwrapStub.calledOnce).to.be.ok;
        httpwrapStub.restore();
    });

    it('Checking initial sortType and data', function(){
        scope.sortReverse = false;
        scope.sortType = 'id';
        scope.headItem('id');
        expect(scope.sortReverse).to.equal(true);
    });

});