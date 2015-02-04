/*global angular */

/**
 * The main TodoMVC app module
 *
 * @type {angular.Module}
 */
angular.module('todomvc', ['ngRoute'])
	.config(function ($routeProvider) {
		'use strict';

		var routeConfig = {
			controller: 'TodoCtrl',
			templateUrl: 'todomvc-index.html',
			resolve: {
				store: function (todoStorage) {
					// Get the correct module (API or localStorage).
					return todoStorage.then(function (module) {
						module.get(); // Fetch the todo records in the background.
						return module;
					});
				}
			}
		};

		$routeProvider
			.when('/', routeConfig)
			.when('/:status', routeConfig)
			.otherwise({
				redirectTo: '/'
			});
	}).run(function connectToOutside() {
		console.log('connecting to the outside');

		function getScope() {
			return angular.element(document.getElementById('todoapp')).scope();
		}

		var todoApi = {
			add: function (name) {
				console.log('api: adding todo', name);
				getScope().addTodo(name);
				getScope().$apply();
			},
			removeAll: function () {
				console.log('api: removing all todos');
				getScope().removeAll();
				getScope().$apply();
			},
			returnAll: function () {
				console.log('api: returning all todos');
				return getScope().todos;
			}
		};
		iframeApi(todoApi).then(function () {
			console.log('sent api to external site');
		});
	});
