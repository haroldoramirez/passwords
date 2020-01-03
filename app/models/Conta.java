package models;

import javax.persistence.Entity;

@Entity
public class Senha extends BaseModel {

    public String nomeConta;
    public String senha;
    public String url;
}
