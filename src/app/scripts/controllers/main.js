'use strict';

/**
 * @ngdoc function
 * @name pruebasApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pruebasApp
 */
angular.module('pruebasApp')
  .controller('MainCtrl', function ($scope) {

    $scope.print = function(f1){
      if (f1) {
        console.log('Hola');
        return;
      }
      console.log('Adios');
    };
  });
