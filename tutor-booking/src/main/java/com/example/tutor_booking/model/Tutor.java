package com.example.tutor_booking.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.JoinTable;
import jakarta.persistence.JoinColumn;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Tutor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String email;

    @ManyToMany
    @JoinTable(
        name = "tutor_subject",
        joinColumns = @JoinColumn(name = "tutor_id"),
        inverseJoinColumns = @JoinColumn(name = "subject_id")
    )
    private Set<Subject> subjects = new HashSet<>();

    public Tutor(Long id, String name, String email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }   

    public String getEmail() {
        return email;
    }   

    public Set<Subject> getSubjects() {
        return subjects;
    }   

    public void setSubjects(Set<Subject> subjects) {
        this.subjects = subjects;
    }   

    @Override
    public String toString() {
        return "Tutor [id=" + id + ", name=" + name + ", email=" + email + ", subjects=" + subjects + "]";
    }
}
