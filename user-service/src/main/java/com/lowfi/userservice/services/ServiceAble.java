package com.lowfi.userservice.services;

import java.util.List;

public interface ServiceAble<T> {
    Iterable<T> findAll();
    T findByLogin(String login);
    Iterable<T> findAllById(Iterable<String> logins);
    void insert(T obj);
    void delete(T obj);
    void update(T obj);
}
