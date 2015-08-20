'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytodoApp
 */
angular.module('mytodoApp')
  .controller('MainCtrl', function (localStorageService) {

    var todoInStore = localStorageService.get('todos');

    this.todos = todoInStore || [];

    this.addTodo = function () {
      this.todos.push(this.todo);
      this.todo = '';
      this.updateLocalStorage();
    };

    this.removeTodo = function (index) {
      this.todos.splice(index, 1);
      this.updateLocalStorage();
    };

    this.updateLocalStorage = function(){
      localStorageService.set('todos', this.todos);
    };

  });
