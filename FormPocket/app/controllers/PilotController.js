'use strict';
app.controller('PilotController', ['$scope', '$location', '$routeParams', '$rootScope', '$route', function ($scope, $location, $routeParams, $rootScope, $route) {

    
    $scope.$on('new_popup', function (event, prms) {
        $scope.popup_new_visible = true;
    });

    


    $scope.popup_new_visible = false;
    $scope.popup_new = {
        shading: false,
        fullScreen: true,
        showTitle: true,
        dragEnabled: true,
        title:'Pilot Forms',
        visible: false,

        closeOnOutsideClick: false,
        toolbarItems: [
 
            { widget: 'dxButton', location: 'after', options: { type: 'danger', text: 'Close', icon: 'remove', onClick: function (e) { $scope.popup_new_visible = false; } }, toolbar: 'bottom' }
        ],
        bindingOptions: {
            visible: 'popup_new_visible',

          
        }
    };


    $scope.popup_ASR_visible = false;
    $scope.popup_ASR = {
        fullScreen: true,
        showTitle: true,
        title:"ASR Form",
        dragEnabled: true,
        visible: true,
        closeOnOutsideClick: false,
        toolbarItems: [


            {
                widget: 'dxButton', location: 'after', options: {
                    type: 'success', text: 'Save', icon: 'check', validationGroup: 'asr',   onClick: function (arg) {
                        
                        //var result = arg.validationGroup.validate();

                        //if (!result.isValid) {
                        //    General.ShowNotify(Config.Text_FillRequired, 'error');
                        //    return;
                        //}
                        
                    },


                }, toolbar: 'bottom'
            },

            { widget: 'dxButton', location: 'after', options: { type: 'danger', text: 'Close', icon: 'remove', onClick: function (e) { $scope.popup_ASR_visible = false; } }, toolbar: 'bottom' }
        ],
        bindingOptions: {
            visible: 'popup_ASR_visible',
        }
    };

    

    $scope.btn_asr = {
        text: 'ASR',
        type: 'normal',
        width:'100%',
        onClick: function (e) {
            $scope.popup_ASR_visible = true;
            
        }
    };

    

}]);