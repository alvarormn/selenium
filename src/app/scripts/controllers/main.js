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

    $scope.response = function(f1){
      if (f1 === 1) {
        $scope.data = 'Adios';
        $scope.show = 0;
        return;
      }
      $scope.data = 'Primero se dice hola y luego adios';
      $scope.show = 1;
    };
  });
