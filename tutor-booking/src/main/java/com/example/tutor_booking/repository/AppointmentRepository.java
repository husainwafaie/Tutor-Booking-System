package com.example.tutor_booking.repository;

import com.example.tutor_booking.model.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface AppointmentRepository extends JpaRepository<Appointment, Long> {
    // find appointments by student ID
    List<Appointment> findByStudentId(Long studentId);

    // find appointments by tutor ID
    List<Appointment> findByTutorId(Long tutorId);
}
