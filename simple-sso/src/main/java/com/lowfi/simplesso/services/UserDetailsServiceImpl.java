package com.lowfi.simplesso.services;

import com.lowfi.simplesso.daos.User;
import com.lowfi.simplesso.repos.UserRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.core.annotation.Order;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@Order(1)
public class UserDetailsServiceImpl implements UserDetailsService{
    private UserRepo repo;

    public UserDetailsServiceImpl(UserRepo repo) {
        this.repo = repo;
        System.out.println("----------------------");
    }

    @Override
    public UserDetails loadUserByUsername(String login) throws UsernameNotFoundException {

        var user_dao = repo.findById(login);
        if(user_dao.isEmpty())
            throw new UsernameNotFoundException("user not found");
        return new User(user_dao.get().getLogin(), user_dao.get().getPassword(), repo.findUserRoles(login));
    }
}
