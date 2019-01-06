package com.wohnungshelden.model;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
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
    @ManyToMany
    @JoinTable(
            name = "search_request_district_mapping",
            joinColumns = {@JoinColumn(name = "search_request_id")},
            inverseJoinColumns   = {@JoinColumn(name = "district_id")}
    )
    private Set<District> districts = new HashSet<>();

    protected SearchRequest() {
    }

    @JsonCreator
    public SearchRequest(@JsonProperty("firstName") String firstName,
                         @JsonProperty("lastName") String lastName,
                         @JsonProperty("email") String email,
                         @JsonProperty("appartmentSize") Double appartmentSize,
                         @JsonProperty("appartmentRent") Double appartmentRent,
                         @JsonProperty("districts") Set<District> districts) {
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

    public void setId(long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Double getAppartmentSize() {
        return appartmentSize;
    }

    public void setAppartmentSize(Double appartmentSize) {
        this.appartmentSize = appartmentSize;
    }

    public Double getAppartmentRent() {
        return appartmentRent;
    }

    public void setAppartmentRent(Double appartmentRent) {
        this.appartmentRent = appartmentRent;
    }

    public Set<District> getDistricts() {
        return districts;
    }

    public void setDistricts(Set<District> districts) {
        this.districts = districts;
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
