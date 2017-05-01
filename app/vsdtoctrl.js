(function() {
  'use strict';
// This is the controller for the VSTDA project.
  angular
    .module('vstdaApp')
    .controller('VSTDAController', VSTDAController);

  VSTDAController.$inject = [];

  /* @ngInject */
  function VSTDAController() {
    var vm = this;
    vm.priority; //Select element
    vm.taskText; //Task text
    vm.items = [];


    //Sorting properties.
    vm.predicate = 'priority';
    vm.reverse = true;
// These are for the select dropown
    vm.selectOptions = [{
        value: 1,
        label: "High Priority"
      },
      {
        value: 2,
        label: "Medium Priority"
      },
      {
        value: 3,
        label: "Low Priority"
      }
    ];

    activate(); //Run on ready.
    function activate() {
      vm.priority = vm.selectOptions[0]
    }
// Add items reads the task text properties and sets the selected priority.
    vm.AddItem = function() {
      var itemString;
      var newNode = {
        taskText: vm.taskText,
        priority: vm.priority.value
      };
      vm.items.push(newNode);
      vm.taskText = "";
    }

// These are for the sorting predicates in HTML code.
    vm.order = function(predicate) {
      vm.reverse = (vm.predicate === predicate) ? !vm.reverse : false;
      vm.predicate = predicate;
    }

// I am just returning these classes to each item so they show the right color.
    vm.getClassInfo = function(index) {
      switch (index) {
        case 1:
          return "list-group-item-danger";
          break;
        case 2:
          return "list-group-item-warning";
          break;
        case 3:
          return "list-group-item-info";
          break;
       default:
          return "None";
          break;
      }
    }
  }
})();
