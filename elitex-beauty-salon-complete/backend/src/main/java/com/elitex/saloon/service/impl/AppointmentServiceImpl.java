package com.elitex.saloon.service.impl;

import com.elitex.saloon.dto.AppointmentBookingDto;
import com.elitex.saloon.entity.*;
import com.elitex.saloon.repository.AppointmentRepository;
import com.elitex.saloon.repository.ServiceRepository;
import com.elitex.saloon.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@Component
@AllArgsConstructor
public class AppointmentServiceImpl {

    private final AppointmentRepository appointmentRepository;
    private final UserRepository userRepository;
    private final ServiceRepository serviceRepository;

    public Appointment book(Long userId, AppointmentBookingDto bookingDto) {
        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
        Service service = serviceRepository.findById(bookingDto.getServiceId()).orElseThrow(() -> new RuntimeException("Service not found"));

        Appointment appointment = new Appointment();
        appointment.setUser(user);
        appointment.setService(service);
        appointment.setAppointmentDate(bookingDto.getDateTime().toLocalDate());
        appointment.setTimeSlot(String.format("%02d:%02d", bookingDto.getDateTime().getHour(), bookingDto.getDateTime().getMinute()));
        appointment.setStatus(AppointmentStatus.PENDING);

        return appointmentRepository.save(appointment);
    }

    public List<Appointment> findByUserId(Long userId) {
        return appointmentRepository.findAll().stream()
                .filter(a -> a.getUser() != null && a.getUser().getId().equals(userId))
                .collect(Collectors.toList());
    }

    public void cancel(Long appointmentId) {
        Appointment appointment = appointmentRepository.findById(appointmentId).orElseThrow(() -> new RuntimeException("Appointment not found"));
        appointment.setStatus(AppointmentStatus.CANCELLED);
        appointmentRepository.save(appointment);
    }

    public List<Appointment> getTodayAppointments() {
        LocalDate today = LocalDate.now();
        return appointmentRepository.findAll().stream()
                .filter(a -> a.getAppointmentDate().equals(today))
                .collect(Collectors.toList());
    }
}
