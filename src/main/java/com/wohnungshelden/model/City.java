package com.wohnungshelden.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Set;

@Entity
@Table(name = "city")
public class City implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "name")
    private String name;

    @JsonBackReference
    @OneToMany(mappedBy = "city")
    private Set<District> districts;

    protected City() {}

    public City(String name, Set<District> districts) {
        this.name = name;
        this.districts = districts;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public Set<District> getDistricts() {
        return districts;
    }
}
