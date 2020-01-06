angular.module('password')
    .controller('conta.listar.controller', function ($scope) {

        console.log('conta.listar.controller');

    })  .controller('conta.criar.controller', function ($scope, Conta) {

       $scope.conta = {};

        $scope.save = function(){
            console.log($scope.categoria);
            Conta.save($scope.conta, function(data) {
                console.log('Conta salva com sucesso');
                //$state.go($state.listarconta, {}, {reload: false});
            }, function(data){
                console.log(data);
            });
        };

    });