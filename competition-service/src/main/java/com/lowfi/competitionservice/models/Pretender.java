package com.lowfi.competitionservice.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;
@Table("pretender")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Pretender {
    @Id
    Integer competition;
    String login;
    Boolean in_team;
}
