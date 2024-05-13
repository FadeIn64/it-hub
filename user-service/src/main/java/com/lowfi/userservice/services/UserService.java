package com.lowfi.userservice.services;

import com.lowfi.userservice.models.UserDAO;
import com.lowfi.userservice.repos.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class UserService implements ServiceAble<UserDAO>{
    @Autowired
    UserRepo userRepo;

    @Override
    public Iterable<UserDAO> findAll() {
        var users = userRepo.findAll();
        return users;
    }

    @Override
    public UserDAO findByLogin(String login) {
        var user = userRepo.findById(login);
        return user.get();
    }

    @Override
    public Iterable<UserDAO> findAllById(Iterable<String> logins) {
        var users = userRepo.findAllById(logins);
        return users;
    }

    @Override
    public void insert(UserDAO obj) {
        userRepo.save(obj);
    }

    @Override
    public void delete(UserDAO obj) {userRepo.delete(obj);
    }

    @Override
    public void update(UserDAO obj) {
        userRepo.save(obj);
    }
}
