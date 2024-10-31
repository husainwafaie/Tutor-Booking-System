package com.example.tutor_booking.model;

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
