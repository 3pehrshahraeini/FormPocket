app.controller("FooterController", function ($scope, $rootScope, $routeParams, $location) {

    // $('.' + $scope.type).show();
    $('.' + $scope.type).addClass('active');
    if ($scope.type == 'appPilot') {
        $('.footerflightcrew').width('16.66%').show();
        $('.footerpilot').width('16.66%').show();
        $('.footersecurity').width('16.66%').show();
        $('.footerstation').width('16.66%').show();
        $('.footerdispatch').width('16.66%').show();

    }
    if ($scope.type == 'appSecurity') {
        $('.footerflightcrew').width('16.66%').show();
        $('.footerpilot').width('16.66%').show();
        $('.footersecurity').width('16.66%').show();
        $('.footerstation').width('16.66%').show();
        $('.footerdispatch').width('16.66%').show();


    }
    if ($scope.type == 'appStation') {
        $('.footerflightcrew').width('16.66%').show();
        $('.footerpilot').width('16.66%').show();
        $('.footersecurity').width('16.66%').show();
        $('.footerstation').width('16.66%').show();
        $('.footerdispatch').width('16.66%').show();


    }
    if ($scope.type == 'appFlightCrew') {
        $('.footerflightcrew').width('16.66%').show();
        $('.footerpilot').width('16.66%').show();
        $('.footersecurity').width('16.66%').show();
        $('.footerstation').width('16.66%').show();
        $('.footerdispatch').width('16.66%').show();
    }
    if ($scope.type == 'appDispatch') {
        $('.footerflightcrew').width('16.66%').show();
        $('.footerpilot').width('16.66%').show();
        $('.footersecurity').width('16.66%').show();
        $('.footerstation').width('16.66%').show();
        $('.footerdispatch').width('16.66%').show();
    }

    $scope.$on('ShowFooterItems', function (event, prms) {
        //footerbook
        if (prms == '84') {
            $('.footerhome').width('33.3333%').show();
            $('.footerlibrary').width('33.3333%').show();
            $('.footerpaper').width('33.3333%').show();
        }
        if (prms == '83') {
            $('.footerhome').width('33.3333%').show();
            $('.footerlibrary').width('33.3333%').show();
            $('.footerbook').width('33.3333%').show();
        }
        if (prms == '85') {
            $('.footerhome').width('33.3333%').show();
            $('.footerlibrary').width('33.3333%').show();
            $('.footervideo').width('33.3333%').show();
        }


    });
    $rootScope.$broadcast('PageLoaded', 'footer');
    //end scope
});