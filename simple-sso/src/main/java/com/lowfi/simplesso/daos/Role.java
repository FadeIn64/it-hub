package com.lowfi.simplesso.daos;

import lombok.Data;
import org.springframework.data.relational.core.mapping.Table;
import org.springframework.security.core.GrantedAuthority;


@Data
@Table("users_w_roles")
public class Role implements GrantedAuthority {
    private String name;
    @Override
    public String getAuthority() {
        return name;
    }
}
