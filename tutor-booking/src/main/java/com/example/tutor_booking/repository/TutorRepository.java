package com.example.tutor_booking.repository;

import com.example.tutor_booking.model.Tutor;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TutorRepository extends JpaRepository<Tutor, Long> {
    // add customs
}
