angular
    .module
        ('password',
            ['ui.router',
             'ngResource',
             'ngAnimate',
             'ncy-angular-breadcrumb'
            ]
        )
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

        $locationProvider.html5Mode({enabled: false, requireBase: false, rewriteLinks: false});

        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state('home', {
                url: "/",
                templateUrl: 'assets/app/views/home.html',
                controller: 'home.controller',
                  ncyBreadcrumb: {
                    label: 'Home'
                  },
                activetab: 'home'
            })

    });