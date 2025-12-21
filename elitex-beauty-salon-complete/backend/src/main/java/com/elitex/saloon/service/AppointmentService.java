package com.elitex.saloon.service;

import com.elitex.saloon.dto.BookingRequest;
import com.elitex.saloon.entity.Appointment;
import com.elitex.saloon.entity.Service;
import com.elitex.saloon.entity.Stylist;
import com.elitex.saloon.repository.AppointmentRepository;
import com.elitex.saloon.repository.ServiceRepository;
import com.elitex.saloon.repository.StylistRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import java.util.List;

@Component
@RequiredArgsConstructor
public class AppointmentService {

    private final AppointmentRepository appointmentRepository;
    private final ServiceRepository serviceRepository;
    private final StylistRepository stylistRepository;

    public Appointment bookAppointment(BookingRequest request) {
        // Find service by name
        Service service = serviceRepository.findByNameIgnoreCase(request.getServiceName())
                .orElseThrow(() -> new RuntimeException("Service not found: " + request.getServiceName()));

        // Use default stylist if not specified
        Stylist stylist = null;
        if (request.getStylistId() != null) {
            stylist = stylistRepository.findById(request.getStylistId())
                    .orElseGet(() -> stylistRepository.findById(1L).orElse(null));
        } else {
            stylist = stylistRepository.findById(1L).orElse(null);
        }

        Double finalPrice = service.getPrice();

        // Apply promo code logic if provided
        if (request.getPromoCode() != null && !request.getPromoCode().isEmpty()) {
            // Promo code logic can be added later
        }

        Appointment appointment = Appointment.builder()
                .user(null) // NULL for guest bookings
                .service(service)
                .stylist(stylist)
                .appointmentDate(request.getAppointmentDate())
                .timeSlot(request.getTimeSlot())
                .notes(request.getNotes())
                .promoCode(request.getPromoCode())
                .finalPrice(finalPrice)
                .customerName(request.getCustomerName())
                .customerEmail(request.getCustomerEmail())
                .customerPhone(request.getCustomerPhone())
                .build();

        return appointmentRepository.save(appointment);
    }

    public List<Appointment> getAllAppointments() {
        return appointmentRepository.findAll();
    }

    public Appointment getAppointmentById(Long id) {
        return appointmentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Appointment not found"));
    }
}


