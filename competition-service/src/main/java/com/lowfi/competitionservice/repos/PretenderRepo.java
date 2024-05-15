package com.lowfi.competitionservice.repos;

import com.lowfi.competitionservice.models.CompetitionDao;
import com.lowfi.competitionservice.models.Pretender;
import org.springframework.data.jdbc.repository.query.Modifying;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface PretenderRepo extends CrudRepository<Pretender, Integer> {

    @Modifying
    @Query("""
       insert into pretender
       values (:competition, :login, false)
       on conflict (competition, login)
       do nothing
       returning true as val;
    """)
    void insert(Integer competition, String login);
}
