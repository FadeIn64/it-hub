package com.lowfi.articlesservice.sso;

import com.lowfi.articlesservice.sso.details.User;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;

@Service
public class SSOUserDetailsService implements UserDetailsService {
    RestTemplate ssoTemplate;

    public SSOUserDetailsService(RestTemplate ssoTemplate) {
        this.ssoTemplate = ssoTemplate;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        ResponseEntity<User> response;
        try {
            response = ssoTemplate.getForEntity("/auth/"+username, User.class);
        }
        catch (HttpClientErrorException e){
            System.out.println(e.getMessage()); //TODO: убрать дебаг
            throw new UsernameNotFoundException(e.getMessage());
        }
        catch (Exception e){
            System.out.println(e.getMessage());
            throw new UsernameNotFoundException(e.getMessage());
        }
        var user = response.getBody();
        if (user == null){
            System.out.println("USER IS NULL");
            throw new UsernameNotFoundException("user is null");
        }
        return user;
    }
}
