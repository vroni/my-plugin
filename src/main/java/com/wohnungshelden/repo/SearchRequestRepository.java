package com.wohnungshelden.repo;

import com.wohnungshelden.model.SearchRequest;
import org.springframework.data.repository.CrudRepository;

public interface SearchRequestRepository extends CrudRepository<SearchRequest, Long> {
}
