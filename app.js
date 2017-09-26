angular.module('sortApp', [])

    .controller('mainController', function($http) {
        const self = this;
        // Initial values
        self.tableHeadData = [];
        self.tableBodyData = [];
        self.sortType = '';
        self.sortReverse = false;

        //
        var onGetTableDataSuccess = function(success) {
            self.tableHeadData = Object.keys(success.data[0]);
            self.tableBodyData = success.data;
            self.sortType = self.tableHeadData[0];
        };
        
        var onGetTableDataError =  function(error) {
            alert('Failed to fetch data!' + error);
        };

        self.getTableData = function() {
            $http.get('http://jsonplaceholder.typicode.com/posts').then(onGetTableDataSuccess, onGetTableDataError);
        };

        self.getTableData()

    });