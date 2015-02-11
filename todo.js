angular.module('todoApp', [])
  .controller('TodoController', ['$scope', function($scope) {
    $scope.todos = [
      {text:'learn angular', done:true},
      {text:'build an angular app', done:false}];

    $scope.archivedTodos = [];

    $scope.addTodo = function() {
      
        var textBuffer = $scope.todoText;
        var replacedBuffer = textBuffer.replace("James", "Needs TP for his bunghole" );
        
        $scope.todos.push({text:replacedBuffer, done:false});
      $scope.todoText = '';
    };

    $scope.remaining = function() {
      var count = 0;
      angular.forEach($scope.todos, function(todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };

    $scope.archive = function() {
      var oldTodos = $scope.todos;
      $scope.todos = [];
      angular.forEach(oldTodos, function(todo) {
        if (!todo.done) 
        { 
          $scope.todos.push(todo);
        }
        else
        {
          $scope.archivedTodos.push({text:todo.text, done:false});
        }
      });
    };

    $scope.unarchive = function() {
      var oldArchivedTodos = $scope.archivedTodos;

      $scope.archivedTodos = [];

      angular.forEach(oldArchivedTodos, function(todo) {
        if(todo.done) $scope.todos.push({text:todo.text, done:false});
        else $scope.archivedTodos.push(todo)
      });

    };
  }]);
