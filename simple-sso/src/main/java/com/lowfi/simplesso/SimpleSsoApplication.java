package com.lowfi.simplesso;

import com.lowfi.simplesso.repos.UserRepo;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;

@EnableWebSecurity
@EnableMethodSecurity
@SpringBootApplication
public class SimpleSsoApplication {

    public static void main(String[] args) {
       var ctx = SpringApplication.run(SimpleSsoApplication.class, args);
       var repo = ctx.getBean(UserRepo.class);
        System.out.println(repo.findById("admin"));
    }

}
