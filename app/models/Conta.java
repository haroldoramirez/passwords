package models;

import javax.persistence.Entity;

@Entity
public class Conta extends BaseModel {

    private static final long serialVersionUID = 1L;

    private String nomeConta;
    private String senha;
    private String url;

    public String getNomeConta() {
        return nomeConta;
    }

    public void setNomeConta(String nomeConta) {
        this.nomeConta = nomeConta;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }
}
