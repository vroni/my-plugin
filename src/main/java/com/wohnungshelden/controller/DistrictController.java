package com.wohnungshelden.controller;

import com.wohnungshelden.model.District;
import com.wohnungshelden.repo.DistrictRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin("http://localhost:4200")
@RestController
public class DistrictController {

    @Autowired
    private DistrictRepository repo;

    @CrossOrigin
    @GetMapping("/allDistricts")
    public List<District> findAll() {
        List<District> districts = new ArrayList<>();
        this.repo.findAll().forEach(districts::add);
        return districts;
    }
}
