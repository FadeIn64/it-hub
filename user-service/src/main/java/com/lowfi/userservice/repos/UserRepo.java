package com.lowfi.userservice.repos;

import com.lowfi.userservice.models.UserDAO;
import com.lowfi.userservice.sso.details.User;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
public interface UserRepo extends CrudRepository<UserDAO, String> {
}

