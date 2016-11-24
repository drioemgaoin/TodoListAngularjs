'use strict';

angular.module('app')
  .controller('mainController', ['$scope', function($scope) {
    $scope.todos = $scope.todos || [];

    this.create = function() {
      var todo = {
        title: "",
        content: "",
        visible: true
      };

      $scope.todos.push(todo);
    };

    this.resize = function() {
      var element = this;
      setTimeout(function(){
        element.style.cssText = 'height:auto; padding:0';
        element.style.cssText = 'height:' + element.scrollHeight + 'px';
      },0);
    };

    this.close = function(todo) {
      todo.visible = false;
    }
}]);
