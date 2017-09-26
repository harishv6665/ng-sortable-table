angular.module('sortApp', [])

    .controller('mainController', function($http) {

        var self = this;

        // Initial values
        self.tableHeadData = [];
        self.tableBodyData = [];
        self.sortType = '';
        self.sortReverse = false;

        // onSuccess promise
        var onGetTableDataSuccess = function(success) {
            self.tableHeadData = Object.keys(success.data[0]);
            self.tableBodyData = success.data;
            self.sortType = self.tableHeadData[0];
        };

        // onError promise
        var onGetTableDataError =  function(error) {
            alert('Failed to fetch data!' + error);
        };

        // getData
        self.getTableData = function() {
            $http.get('http://jsonplaceholder.typicode.com/posts').then(onGetTableDataSuccess, onGetTableDataError);
        }(); // self calling without having to write another like to call the function

    });