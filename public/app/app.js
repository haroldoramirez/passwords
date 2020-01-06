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
            .state('criarconta', {
                url: "/conta/novo",
                templateUrl: 'assets/app/views/contas/criar.html',
                controller: 'conta.criar.controller',
                  ncyBreadcrumb: {
                    label: 'Create'
                  },
                activetab: 'conta-criar',
                collapsedtab: 'conta'
            })
            .state('listarconta', {
                url: "/contas",
                templateUrl: 'assets/app/views/contas/listar.html',
                controller: 'conta.listar.controller',
                  ncyBreadcrumb: {
                    label: 'List'
                  },
                activetab: 'conta-listar',
                collapsedtab: 'conta'
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