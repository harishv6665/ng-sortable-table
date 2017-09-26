angular.module('sortApp', [])

    .controller('mainController', function($scope, $http) {

        // Initial values
        $scope.tableHeadData = [];
        $scope.tableBodyData = [];
        $scope.sortType = 'title';
        $scope.sortReverse = false;

        // onSuccess for         
        var ongetTableDataSuccess = function(success) {
            $scope.tableHeadData = Object.keys(success.data[0]);
            $scope.tableBodyData = success.data;
            $scope.sortType = $scope.tableHeadData[2];
            console.log('default sort', $scope.sortType);
        };
        
        var ongetTableDataError =  function(error) {
            console.log("in error", error);
            alert('Failed to fetch data!' + error);
        };

        $scope.getTableData = function() {
            $http.get('http://jsonplaceholder.typicode.com/posts').then(ongetTableDataSuccess, ongetTableDataError);
        };

        $scope.getTableData()

    });