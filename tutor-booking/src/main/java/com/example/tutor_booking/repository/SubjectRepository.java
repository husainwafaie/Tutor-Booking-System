package com.example.tutor_booking.repository;

import com.example.tutor_booking.model.Subject;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SubjectRepository extends JpaRepository<Subject, Long> {
    // e.g., findBySubjectName
}
