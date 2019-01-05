package com.wohnungshelden.model;

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

    @OneToMany(mappedBy = "id")
    private Set<District> districts;

    protected City() {}

    public City(Long id, String name, Set<District> districts) {
        this.id = id;
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
