package com.elitex.saloon.dto;

import lombok.*;
import jakarta.validation.constraints.*;
import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BookingRequest {
    
    @NotBlank(message = "Service name is required")
    private String serviceName;
    
    @NotNull(message = "Appointment date is required")
    private LocalDate appointmentDate;
    
    @NotBlank(message = "Time slot is required")
    private String timeSlot;
    
    private Long stylistId;
    
    private String notes;
    
    private String promoCode;
    
    @NotBlank(message = "Customer name is required")
    private String customerName;
    
    @NotBlank(message = "Customer email is required")
    @Email(message = "Email should be valid")
    private String customerEmail;
    
    @NotBlank(message = "Customer phone is required")
    private String customerPhone;
}

