package com.elitex.saloon.dto;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class AppointmentBookingDto {
    private Long serviceId;
    private Long stylistId;
    private LocalDateTime dateTime;
}
