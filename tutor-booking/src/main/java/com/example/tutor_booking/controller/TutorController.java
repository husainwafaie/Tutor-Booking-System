package com.example.tutor_booking.controller;

import com.example.tutor_booking.model.Tutor;
import com.example.tutor_booking.repository.TutorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tutors")
public class TutorController {

    private final TutorRepository tutorRepository;

    @Autowired
    public TutorController(TutorRepository tutorRepository) {
        this.tutorRepository = tutorRepository;
    }

    // GET all tutors
    @GetMapping
    public List<Tutor> getAllTutors() {
        return tutorRepository.findAll();
    }

    // POST a new tutor
    @PostMapping
    public Tutor createTutor(@RequestBody Tutor tutor) {
        return tutorRepository.save(tutor);
    }

    // GET a tutor by ID
    @GetMapping("/{id}")
    public Tutor getTutorById(@PathVariable Long id) {
        return tutorRepository.findById(id).orElse(null);
    }
}
