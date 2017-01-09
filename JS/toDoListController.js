angular.module("myApp",[]).controller("toDoListController",function($scope) {

    var listArray = [
      {name:'John', description:'Build module'},
      {name:'Paul', description:'Build Controller'},
      {name:'Mick', description:'Build Form'}
    ];

    $scope.listArray = listArray;

    $scope.addListItem = function(){
    $scope.listArray.push(

        {
            name: $scope.listName,
            description: $scope.listDescription
        }
      );
    $scope.listName = "";
    $scope.listDescription = "";
  }
  // below code to remove table row was sourced from http://vitalflux.com/angularjs-addingremoving-table-rows-dynamically/
  $scope.remove = function(name){
          var index = -1;
          var comArr = eval( $scope.listArray );
          for( var i = 0; i < comArr.length; i++ ) {
                if( comArr[i].name === name ) {
                    index = i;
                    break;
                 }
          }
          if( index === -1 ) {
               alert( "Something gone wrong" );
          }
          $scope.listArray.splice( index, 1 );
       };
  console.log(listArray);
  });
