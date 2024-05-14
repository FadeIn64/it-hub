package com.lowfi.competitionservice.controllers;

import com.lowfi.competitionservice.models.Competition;
import com.lowfi.competitionservice.models.Pretender;
import com.lowfi.competitionservice.services.PretenderService;
import lombok.AllArgsConstructor;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/competition")
@AllArgsConstructor
public class PretenderController {
    PretenderService pretenderService;
    @PostMapping("/subToComp")
    ResponseEntity subToComp(@RequestParam Integer id, @RequestParam String login){
        Pretender pretender = pretenderService.insertPretender(id, login);
        if (pretender == null)
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        return ResponseEntity.ok(pretender);
    }
}
