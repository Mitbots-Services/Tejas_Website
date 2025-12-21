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

@RestController
@RequestMapping("/api/appointments")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
public class AppointmentController {

    private final AppointmentService appointmentService;

    @PostMapping("/book")
    public ResponseEntity<ApiResponse<Appointment>> bookAppointment(@Valid @RequestBody BookingRequest request) {
        try {
            Appointment appointment = appointmentService.bookAppointment(request);
            return ResponseEntity.ok(ApiResponse.<Appointment>builder()
                    .success(true)
                    .message("Appointment booked successfully")
                    .data(appointment)
                    .build());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(ApiResponse.<Appointment>builder()
                            .success(false)
                            .message(e.getMessage())
                            .build());
        }
    }

    @GetMapping
    public ResponseEntity<ApiResponse<?>> getAllAppointments() {
        return ResponseEntity.ok(ApiResponse.builder()
                .success(true)
                .message("Appointments retrieved")
                .data(appointmentService.getAllAppointments())
                .build());
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<Appointment>> getAppointmentById(@PathVariable Long id) {
        try {
            Appointment appointment = appointmentService.getAppointmentById(id);
            return ResponseEntity.ok(ApiResponse.<Appointment>builder()
                    .success(true)
                    .message("Appointment retrieved")
                    .data(appointment)
                    .build());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(ApiResponse.<Appointment>builder()
                            .success(false)
                            .message(e.getMessage())
                            .build());
        }
    }
}

