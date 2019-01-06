package com.wohnungshelden.controller;

import com.wohnungshelden.model.SearchRequest;
import com.wohnungshelden.repo.SearchRequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin("http://localhost:4200")
@RestController()
public class SearchRequestController {

    @Autowired
    SearchRequestRepository repo;

    @GetMapping("/findAll")
    public List<SearchRequest> findAll() {
        List<SearchRequest> searchRequests = new ArrayList<>();
        this.repo.findAll().forEach(searchRequests::add);
        return searchRequests;
    }

    @GetMapping("/searchrequest/{id}")
    public SearchRequest findById(@PathVariable Long id) {

        SearchRequest searchRequest= repo.findById(id).get();
        return searchRequest;
    }

    @PostMapping("/create")
    public SearchRequest create(@RequestBody SearchRequest searchRequest) {
        return repo.save(searchRequest);
    }
}
