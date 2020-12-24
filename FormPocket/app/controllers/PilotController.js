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
        title: 'Pilot Forms',
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
        title: "ASR Form",
        dragEnabled: true,
        visible: true,
        closeOnOutsideClick: false,
        toolbarItems: [


            {
                widget: 'dxButton', location: 'after', options: {
                    type: 'success', text: 'Save', icon: 'check', validationGroup: 'asr', onClick: function (arg) {

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
        width: '100%',
        onClick: function (e) {
            $scope.popup_ASR_visible = true;

        }
    };

    $scope.entityASR = {
        eventTypeId: null,
        flightPhaseId: null
    };
    $scope.ds_eventType = [
        { id: 1, title: 'SECURITY EVENT' },
        { id: 2, title: 'AIRPROX/ATC' },
        { id: 3, title: 'TCAS RA' },
        { id: 4, title: 'WAKE TURBULENCE' },
        { id: 5, title: 'BIRD STRIKE' },
        { id: 6, title: 'OTHERS' },
    ];
    $scope.sb_eventType = {

        showClearButton: false,
        searchEnabled: false,
        dataSource: $scope.ds_eventType,
        displayExpr: 'title',
        valueExpr: 'id',
        onSelectionChanged: function (e) {

        },
        bindingOptions: {
            value: 'entityASR.eventTypeId',

        }
    };


    $scope.ds_flightPhase = [
        { id: 1, title: 'TOWING' },
        { id: 2, title: 'PARKING' },
        { id: 3, title: 'PUSHBACK' },
        { id: 4, title: 'TAXI OUT' },
        { id: 5, title: 'TAKE OFF' },
        { id: 6, title: 'INITIAL CLIMB' },
        { id: 7, title: 'CLIMB' },
        { id: 8, title: 'CRUISE' },
        { id: 9, title: 'DESCENT' },
        { id: 10, title: 'HOLDING' },
        { id: 11, title: 'APPROACH' },
        { id: 12, title: 'LANDING' },
    ]
    $scope.sb_flightPhase = {

        showClearButton: false,
        searchEnabled: false,
        dataSource: $scope.ds_flightPhase,
        displayExpr: 'title',
        valueExpr: 'id',
        onSelectionChanged: function (e) {

        },
        bindingOptions: {
            value: 'entityASR.flightPhaseId',

        }
    };


    $scope.ds_runwayCondition = [
        { id: 1, title: 'DRY' },
        { id: 2, title: 'WET' },
        { id: 3, title: 'ICE' },
        { id: 4, title: 'SNOW' },
        { id: 5, title: 'SLUSH' }
    ]
    $scope.sb_runwayCondition = {

        showClearButton: false,
        searchEnabled: false,
        dataSource: $scope.ds_runwayCondition,
        displayExpr: 'title',
        valueExpr: 'id',
        onSelectionChanged: function (e) {

        },
        bindingOptions: {
            value: 'entityASR.runwayConditionID',

        }
    };

    $scope.ds_significantWx = [
        { id: 1, title: 'RAIN' },
        { id: 2, title: 'SNOW' },
        { id: 3, title: 'ICING' },
        { id: 4, title: 'TURBULENCE' },
        { id: 5, title: 'HAIL' },
        { id: 6, title: 'STANDING WATER' },
        { id: 7, title: 'WINDSHEAR' },
    ]
    $scope.sb_significantWx = {

        showClearButton: false,
        searchEnabled: false,
        dataSource: $scope.ds_significantWx,
        displayExpr: 'title',
        valueExpr: 'id',
        onSelectionChanged: function (e) {

        },
        bindingOptions: {
            value: 'entityASR.significantWxID',

        }
    };
    ////////////////////////////



}]);