package com.example.tutor_booking.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.ManyToOne;
import java.time.LocalDateTime;

@Entity
public class Appointment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private Student student;

    @ManyToOne
    private Tutor tutor;

    private LocalDateTime appointmentTime;

    public Appointment(Long id, Student student, Tutor tutor, LocalDateTime appointmentTime) {
        this.id = id;
        this.student = student;
        this.tutor = tutor;
        this.appointmentTime = appointmentTime;
    }

    public Long getId() {
        return id;
    }   

    public Student getStudent() {
        return student;
    }

    public Tutor getTutor() {
        return tutor;
    }

    public LocalDateTime getAppointmentTime() {
        return appointmentTime;
    }
}
