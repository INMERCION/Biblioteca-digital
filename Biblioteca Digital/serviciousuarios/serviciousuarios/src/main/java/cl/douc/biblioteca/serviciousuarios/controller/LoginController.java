package cl.douc.biblioteca.serviciousuarios.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class LoginController {

    @GetMapping("/login")
    public String mostrarLogin() {
        return "login";
    }

    @GetMapping("/invited")
    public String loginComoInvitado() {
        return "redirect:/libros"; // Redireccionar a página pública o lista de libros
    }
}
// Este controlador maneja la lógica de inicio de sesión y redirige a los usuarios a la página correspondiente