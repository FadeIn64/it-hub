package com.lowfi.simplesso.daos;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

@Table("users")
@Data
public class UserDao {
    @Id
    private String login;
    private String password;
}
