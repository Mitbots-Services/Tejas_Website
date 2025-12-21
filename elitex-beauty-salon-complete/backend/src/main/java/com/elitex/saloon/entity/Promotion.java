package com.elitex.saloon.entity;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDate;

@Entity
@Table(name = "promotion")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Promotion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String code;

    private String description;

    private String discountType; // PERCENTAGE or FIXED

    private Double discountValue;

    private LocalDate startDate;

    private LocalDate endDate;

    @Column(nullable = false)
    private Boolean active = true;

    private Double minPurchase;

    private Integer maxUses;
}

