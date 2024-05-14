package com.lowfi.qaservice.repos;

import com.lowfi.articlesservice.models.ArticleTheme;
import org.springframework.data.repository.CrudRepository;

public interface ArticleThemeRepo extends CrudRepository<ArticleTheme, Integer> {
}
