package com.elitex.saloon.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "service")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Service {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Lob
    private String description;

    private String category;

    private Integer duration;

    @Column(nullable = false)
    private Double price;

    @Column(nullable = false)
    private Boolean featured = false;

    @Column(nullable = false)
    private Boolean available = true;

    private String imageUrl;
}

