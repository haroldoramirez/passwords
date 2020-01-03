package models;

import javax.persistence.Entity;

@Entity
public class Usuario extends BaseModel {

    private static final long serialVersionUID = 1L;

    public String name;
    public String password;

}
