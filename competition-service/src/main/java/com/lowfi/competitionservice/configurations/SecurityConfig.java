package com.lowfi.competitionservice.configurations;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@RequiredArgsConstructor
public class SecurityConfig {

    UserDetailsService userDetailsService;

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .csrf().disable()
                .cors().disable()
                .securityMatcher("/**")
                .authorizeHttpRequests(auth ->
                        auth.anyRequest().authenticated())
                .httpBasic()
                .realmName("Users")
                ;
        ;

        return http.build();
    }

    @Bean
    PasswordEncoder passwordEncoder(){
        return NoOpPasswordEncoder.getInstance();
    }

}
