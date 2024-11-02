package com.example.tutor_booking.controller;

import com.example.tutor_booking.model.Appointment;
import com.example.tutor_booking.repository.AppointmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/appointments")
public class AppointmentController {

    private final AppointmentRepository appointmentRepository;

    @Autowired
    public AppointmentController(AppointmentRepository appointmentRepository) {
        this.appointmentRepository = appointmentRepository;
    }

    // GET all appointments
    @GetMapping
    public List<Appointment> getAllAppointments() {
        return appointmentRepository.findAll();
    }

    // POST a new appointment
    @PostMapping
    public Appointment createAppointment(@RequestBody Appointment appointment) {
        return appointmentRepository.save(appointment);
    }

    // GET appointments by student ID
    @GetMapping("/student/{studentId}")
    public List<Appointment> getAppointmentsByStudent(@PathVariable Long studentId) {
        return appointmentRepository.findByStudentId(studentId);
    }

    // GET appointments by tutor ID
    @GetMapping("/tutor/{tutorId}")
    public List<Appointment> getAppointmentsByTutor(@PathVariable Long tutorId) {
        return appointmentRepository.findByTutorId(tutorId);
    }
}
