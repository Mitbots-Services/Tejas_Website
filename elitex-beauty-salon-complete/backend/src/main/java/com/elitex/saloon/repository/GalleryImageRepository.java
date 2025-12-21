package com.elitex.saloon.repository;

import com.elitex.saloon.entity.GalleryImage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface GalleryImageRepository extends JpaRepository<GalleryImage, Long>, JpaSpecificationExecutor<GalleryImage> {
}
