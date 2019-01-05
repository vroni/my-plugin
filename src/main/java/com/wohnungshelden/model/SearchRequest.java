package com.wohnungshelden.model;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Set;

@Entity
@Table(name="search_request")
public class SearchRequest implements Serializable {

    private static final long serialVersionUID = -3009157732242241606L;
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "email")
    private String email;

    @Column(name = "appartment_size")
    private Double appartmentSize;

    @Column(name = "appartment_rent")
    private Double appartmentRent;

    @JsonManagedReference
    @ManyToMany(cascade = {CascadeType.ALL})
    @JoinTable(
            name = "search_request_district_mapping",
            joinColumns = {@JoinColumn(name = "district_id")},
            inverseJoinColumns   = {@JoinColumn(name = "search_request_id")}
    )
    private Set<District> districts;

    protected SearchRequest() {
    }

    @JsonCreator
    public SearchRequest(long id,
                         String firstName,
                         String lastName,
                         String email,
                         Double appartmentSize,
                         Double appartmentRent,
                         Set<District> districts) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.appartmentSize = appartmentSize;
        this.appartmentRent = appartmentRent;
        this.districts = districts;
    }

    public long getId() {
        return id;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getEmail() {
        return email;
    }

    public Double getAppartmentSize() {
        return appartmentSize;
    }

    public Double getAppartmentRent() {
        return appartmentRent;
    }

    public Set<District> getDistricts() {
        return districts;
    }

    @Override
    public String toString() {
        return "SearchRequest{" +
                "id=" + id +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", email='" + email + '\'' +
                ", appartmentSize=" + appartmentSize +
                ", appartmentRent=" + appartmentRent +
                '}';
    }
}
