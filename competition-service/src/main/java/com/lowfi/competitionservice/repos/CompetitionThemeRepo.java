package com.lowfi.competitionservice.repos;

import com.lowfi.competitionservice.models.CompetitionTheme;
import org.springframework.data.repository.CrudRepository;

public interface CompetitionThemeRepo extends CrudRepository<CompetitionTheme, Integer> {
}
