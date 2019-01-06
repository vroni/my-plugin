package com.wohnungshelden.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
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
    @JoinColumn(name = "city_id")
    private City city;

    @JsonBackReference
    @ManyToMany(mappedBy = "districts")
    private Set<SearchRequest> searchRequests = new HashSet<>();

    protected District() {
    }

    public District(@JsonProperty(value = "name") String name,
                    @JsonProperty(value = "city") City city,
                    @JsonProperty(value = "searchRequests") Set<SearchRequest> searchRequests) {
        this.name = name;
        this.city = city;
        this.searchRequests = searchRequests;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public City getCity() {
        return city;
    }

    public void setCity(City city) {
        this.city = city;
    }

    public Set<SearchRequest> getSearchRequests() {
        return searchRequests;
    }

    public void setSearchRequests(Set<SearchRequest> searchRequests) {
        this.searchRequests = searchRequests;
    }
}
