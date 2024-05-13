package com.lowfi.articlesservice.controllers;

import com.lowfi.competitionservice.models.Competition;
import com.lowfi.competitionservice.services.CompetitionService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/competition")
@AllArgsConstructor
public class CompetitionController {
    CompetitionService competitionService;
    @GetMapping("/{id}")
    ResponseEntity getById(@PathVariable int id){
        Competition com = competitionService.findById(id);
        if (com == null)
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        return ResponseEntity.ok(com);
    }
    @GetMapping("/all")
    ResponseEntity getAll(){
        return ResponseEntity.ok(competitionService.findAll());
    }
}
