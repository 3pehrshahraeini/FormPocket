'use strict';
app.controller('PilotController', ['$scope', '$location', '$routeParams', '$rootScope', '$route', function ($scope, $location, $routeParams, $rootScope, $route) {

    
    $scope.$on('new_popup', function (event, prms) {
        $scope.popup_new_visible = true;
    });

    $scope.visiblePopup = false;
    $scope.popup_new = {
        shading: false,
        fullScreen: true,
        showTitle: true,
        dragEnabled: true,
  
        visible: false,

        closeOnOutsideClick: false,
        
        bindingOptions: {
            visible: 'popup_new_visible',

          
        }
    };


    $scope.visiblePopup = false;
    $scope.popup_ASR = {
        shading: false,
        fullScreen: true,
        showTitle: true,
        dragEnabled: true,

        visible: false,

        closeOnOutsideClick: false,
       
        bindingOptions: {
            visible: 'popup_ASR_visible',
        }
    };

    $scope.btn_save = {
        text: 'save',
        rtlEnabled: false,
        onClick: function (e) {
            console.log("saved")
        }
    };

    $scope.btn_asr = {
        text: 'ASR',
        onClick: function (e) {
            $scope.popup_ASR_visible = true;
            $scope.popup_new_visible = false;
        }
    };

    $scope.btn_close = {
        text: 'close',
        rtlEnabled: false,
        onClick: function (e) {
            $scope.popup_ASR_visible = false;
        }
    };

}]);