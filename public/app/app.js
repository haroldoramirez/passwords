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
            .state('passcreate', {
                url: "/password/new",
                templateUrl: 'assets/app/views/passwords/create.html',
                controller: 'password.create.controller',
                  ncyBreadcrumb: {
                    label: 'Create'
                  },
                activetab: 'password-create',
                collapsedtab: 'password'
            })
            .state('passlist', {
                url: "/passwords",
                templateUrl: 'assets/app/views/passwords/list.html',
                controller: 'password.list.controller',
                  ncyBreadcrumb: {
                    label: 'List'
                  },
                activetab: 'password-list',
                collapsedtab: 'password'
            })
    //Deixa o link ativado quando estiver em um determinado estado - utilizado no menu gaveta
    }).run(function($rootScope, $state) {
        $rootScope.$state = $state;
    //Muda de titulo apos a troca de pagina
    }).config(function($breadcrumbProvider) {
        $breadcrumbProvider.setOptions({
            template: '<a class="navbar-brand" ng-repeat="step in steps">{{step.ncyBreadcrumbLabel}}</a>'
        });
    })