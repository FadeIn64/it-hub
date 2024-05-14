package com.lowfi.competitionservice.repos;

import com.lowfi.competitionservice.models.CompetitionDao;
import com.lowfi.competitionservice.models.Pretender;
import org.springframework.data.jdbc.repository.query.Modifying;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface PretenderRepo extends CrudRepository<Pretender, Integer> {
}
