package com.wohnungshelden.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Set;

@Entity
@Table(name = "district")
public class District implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "name")
    private String name;

    @JsonManagedReference
    @ManyToOne
    @JoinColumn(name = "city_id", nullable = false)
    private City city;

    @JsonBackReference
    @ManyToMany(mappedBy = "districts")
    private Set<SearchRequest> searchRequests;

    protected District() {
    }

    public District(Long id, String name, City city, Set<SearchRequest> searchRequests) {
        this.id = id;
        this.name = name;
        this.city = city;
        this.searchRequests = searchRequests;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public City getCity() {
        return city;
    }

    public Set<SearchRequest> getSearchRequests() {
        return searchRequests;
    }
}
