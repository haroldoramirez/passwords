package models;

public enum Papel {
    USUARIO(1), GERENTE(2), SUPERVISOR(3), ADMINISTRADOR(4);

    public int valorPapel;

    Papel(int valor) {
        valorPapel = valor;
    }
}
