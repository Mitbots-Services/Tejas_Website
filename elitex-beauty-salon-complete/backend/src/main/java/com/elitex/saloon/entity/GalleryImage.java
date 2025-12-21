package com.elitex.saloon.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "gallery_image")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class GalleryImage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    private String description;

    private String category;

    @Column(nullable = false)
    private String imageUrl;

    @Column(nullable = false)
    private Boolean featured = false;

    private Integer displayOrder;
}

