app.controller("FooterController", function ($scope, $rootScope, $routeParams, $location) {

    //$('.' + $scope.type).show();
    $('.' + $scope.type).addClass('active');
    if ($scope.type == 'appHome') {
        $('.footernew').width('20%').show();
        $('.footerflightcrew').width('20%').show();
        $('.footerpilot').width('20%').show();
        $('.footersecurity').width('20%').show();
        $('.footerstation').width('20%').show();
        $('.footerdispatch').width('20%').show();
    }

    if ($scope.type == 'appPilot') {
        $('.footernew').width('50%').show();
        $('.footerhome').width('50%').show();
        $('.footerpilot').width('16.66%').hide();
        $('.footerflightcrew').width('16.66%').hide();
        $('.footersecurity').width('16.66%').hide();
        $('.footerstation').width('16.66%').hide();
        $('.footerdispatch').width('16.66%').hide();

    }

    if ($scope.type == 'appSecurity') {
        $('.footernew').width('50%').show();
        $('.footerhome').width('50%').show();
        $('.footerpilot').width('16.66%').hide();
        $('.footerflightcrew').width('16.66%').hide();
        $('.footersecurity').width('16.66%').hide();
        $('.footerstation').width('16.66%').hide();
        $('.footerdispatch').width('16.66%').hide();


    }

    if ($scope.type == 'appStation') {
        $('.footernew').width('50%').show();
        $('.footerhome').width('50%').show();
        $('.footerpilot').width('16.66%').hide();
        $('.footerflightcrew').width('16.66%').hide();
        $('.footersecurity').width('16.66%').hide();
        $('.footerstation').width('16.66%').hide();
        $('.footerdispatch').width('16.66%').hide();


    }

    if ($scope.type == 'appFlightCrew') {
        $('.footernew').width('50%').show();
        $('.footerhome').width('50%').show();
        $('.footerpilot').width('16.66%').hide();
        $('.footerflightcrew').width('16.66%').hide();
        $('.footersecurity').width('16.66%').hide();
        $('.footerstation').width('16.66%').hide();
        $('.footerdispatch').width('16.66%').hide();
    }

    if ($scope.type == 'appDispatch') {
        $('.footernew').width('50%').show();
        $('.footerhome').width('50%').show();
        $('.footerpilot').width('16.66%').hide();
        $('.footerflightcrew').width('16.66%').hide();
        $('.footersecurity').width('16.66%').hide();
        $('.footerstation').width('16.66%').hide();
        $('.footerdispatch').width('16.66%').hide();
    }

    //$scope.$on('ShowFooterItems', function (event, prms) {
    //    //footerbook
    //    if (prms == '84') {
    //        $('.footerhome').width('33.3333%').show();
    //    }
    //    if (prms == '83') {
    //        $('.footerhome').width('33.3333%').show();
    //    }
    //    if (prms == '85') {
    //        $('.footerhome').width('33.3333%').show();
    //    }


    //});
    //$rootScope.$broadcast('PageLoaded', 'footer');
    //end scope
});