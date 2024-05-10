package com.lowfi.simplesso.repos;

import com.lowfi.simplesso.daos.Role;
import com.lowfi.simplesso.daos.UserDao;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface UserRepo extends CrudRepository<UserDao, String>{
    @Query("""
        select role as name from users_w_roles
        where login = :login
    """)
    List<Role> findUserRoles(String login);
}
