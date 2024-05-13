package com.lowfi.articlesservice.sso.configuration;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpHeaders;
import org.springframework.web.client.RestTemplate;

import java.nio.charset.StandardCharsets;
import java.util.Base64;

@Configuration
public class SSOConfig {
    @Value("${sso.domain}")
    String domain;

    @Value("${sso.realm}")
    String realm;

    @Value("${sso.secret}")
    String secret;

    @Value("${sso.protocol}")
    String protocol;

    RestTemplateBuilder builder = new RestTemplateBuilder();

    private String authHeader(){
        String pass = realm + ":" + secret;
        pass = Base64.getEncoder().encodeToString(pass.getBytes(StandardCharsets.UTF_8));
        System.out.println(pass);
        return "Basic " + pass;
    }
    private String rootUri(){
        System.out.println(String.format("%s://%s", protocol, domain));
        return String.format("%s://%s", protocol, domain);
    }

    @Bean
    @Qualifier("ssoTemplate")
    RestTemplate getSsoTemplate(){
        return builder.defaultHeader(HttpHeaders.AUTHORIZATION, authHeader())
                .rootUri(rootUri())
                .build();
    }
}
