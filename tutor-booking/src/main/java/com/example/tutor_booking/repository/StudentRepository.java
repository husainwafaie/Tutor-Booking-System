package com.example.tutor_booking.repository;

import com.example.tutor_booking.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student, Long> {
    // Custom query methods can be defined here, if needed
}