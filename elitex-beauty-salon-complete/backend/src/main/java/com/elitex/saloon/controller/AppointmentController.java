package com.elitex.saloon.controller;

import com.elitex.saloon.dto.ApiResponse;
import com.elitex.saloon.dto.BookingRequest;
import com.elitex.saloon.entity.Appointment;
import com.elitex.saloon.service.AppointmentService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/appointments")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
public class AppointmentController {

    private final AppointmentService appointmentService;

    /**
     * Endpoint to book a new appointment.
     * Accessible publicly as defined in SecurityConfig.
     */
    @PostMapping("/book")
    public ResponseEntity<ApiResponse<Appointment>> bookAppointment(@Valid @RequestBody BookingRequest request) {
        try {
            Appointment appointment = appointmentService.bookAppointment(request);
            return ResponseEntity.status(HttpStatus.CREATED)
                    .body(ApiResponse.<Appointment>builder()
                            .success(true)
                            .message("Appointment booked successfully")
                            .data(appointment)
                            .build());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(ApiResponse.<Appointment>builder()
                            .success(false)
                            .message("Failed to book appointment: " + e.getMessage())
                            .build());
        }
    }

    /**
     * Retrieve all appointments. 
     * Note: Typically restricted to ADMIN in a production app.
     */
    @GetMapping
    public ResponseEntity<ApiResponse<List<Appointment>>> getAllAppointments() {
        try {
            List<Appointment> appointments = appointmentService.getAllAppointments();
            return ResponseEntity.ok(ApiResponse.<List<Appointment>>builder()
                    .success(true)
                    .message("Appointments retrieved successfully")
                    .data(appointments)
                    .build());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(ApiResponse.<List<Appointment>>builder()
                            .success(false)
                            .message("Error retrieving appointments")
                            .build());
        }
    }

    /**
     * Retrieve a specific appointment by ID.
     */
    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<Appointment>> getAppointmentById(@PathVariable Long id) {
        try {
            Appointment appointment = appointmentService.getAppointmentById(id);
            return ResponseEntity.ok(ApiResponse.<Appointment>builder()
                    .success(true)
                    .message("Appointment found")
                    .data(appointment)
                    .build());
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(ApiResponse.<Appointment>builder()
                            .success(false)
                            .message(e.getMessage())
                            .build());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(ApiResponse.<Appointment>builder()
                            .success(false)
                            .message("An unexpected error occurred")
                            .build());
        }
    }
}