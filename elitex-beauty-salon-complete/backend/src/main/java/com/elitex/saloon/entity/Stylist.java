package com.elitex.saloon.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "stylist")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Stylist {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    private String specialization;

    private Integer experience;

    private Double rating;

    @Column(nullable = false)
    private Boolean available = true;

    private String imageUrl;

    @Lob
    private String bio;
}

