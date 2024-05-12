package com.lowfi.competitionservice;

import com.lowfi.competitionservice.repos.CompetitionRepo;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class CompetitionServiceApplication {

    public static void main(String[] args) {

       var ctx = SpringApplication.run(CompetitionServiceApplication.class, args);
       var repo = ctx.getBean(CompetitionRepo.class);
        System.out.println(repo.findByIdWithThemes(1));
    }

}
