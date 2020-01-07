package controllers;

import play.mvc.Controller;
import play.mvc.Result;

public class ContaController extends Controller {

    public Result cadastrar() {
        System.out.println("Criar conta");
        return ok();
    }
}
