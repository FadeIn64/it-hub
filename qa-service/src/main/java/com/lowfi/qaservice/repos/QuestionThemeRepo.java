package com.lowfi.qaservice.repos;

import com.lowfi.qaservice.models.Question;
import com.lowfi.qaservice.models.QuestionTheme;
import org.springframework.data.repository.CrudRepository;

public interface QuestionThemeRepo extends CrudRepository<QuestionTheme, Integer> {
}
