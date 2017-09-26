angular.module('sortApp', [])

    .controller('mainController', function($http) {
        const self = this;
        // Initial values
        self.tableHeadData = [];
        self.tableBodyData = [];
        self.sortType = 'title';
        self.sortReverse = false;

        // onSuccess for         
        var ongetTableDataSuccess = function(success) {
            self.tableHeadData = Object.keys(success.data[0]);
            self.tableBodyData = success.data;
            self.sortType = self.tableHeadData[2];
            console.log('default sort', self.sortType);
        };
        
        var ongetTableDataError =  function(error) {
            console.log("in error", error);
            alert('Failed to fetch data!' + error);
        };

        self.getTableData = function() {
            $http.get('http://jsonplaceholder.typicode.com/posts').then(ongetTableDataSuccess, ongetTableDataError);
        };

        self.getTableData()

    });