'use strict';
app.controller('FlightCrewController', ['$scope', '$location', '$routeParams', '$rootScope', '$route', function ($scope, $location, $routeParams, $rootScope, $route) {
    $scope.btn_new = function () {
        $scope.popup_new_visible = true;

    }

    $scope.visiblePopup = false;

    $scope.popup_new = {
        shading: true,
        fullScreen: true,
        showTitle: true,
        dragEnabled: true,

        visible: false,

        closeOnOutsideClick: false,
        onTitleRendered: function (e) {

        },
        onShowing: function (e) {

        },
        onShown: function (e) {


        },
        onHiding: function () {


            $scope.popup_new_visible = false;

        },
        bindingOptions: {
            visible: 'popup_new_visible',


        }
    };
}]);