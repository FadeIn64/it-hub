package com.lowfi.simplesso.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController {
    @GetMapping("/auth")
    public ResponseEntity test( Authentication authentication){
        return ResponseEntity.ok(authentication.getPrincipal());
    }
}
