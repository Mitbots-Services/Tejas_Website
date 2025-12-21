package com.elitex.saloon.controller;

import com.elitex.saloon.entity.Service;
import com.elitex.saloon.entity.User;
import com.elitex.saloon.entity.Appointment;
import com.elitex.saloon.repository.AppointmentRepository;
import com.elitex.saloon.repository.UserRepository;
import com.elitex.saloon.repository.ServiceRepository;
import com.elitex.saloon.repository.GalleryImageRepository;
import com.elitex.saloon.entity.GalleryImage;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.HashMap;
import java.util.Map;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;

@RestController
@RequestMapping("/api/admin")
@AllArgsConstructor
@PreAuthorize("hasRole('ADMIN')")
public class AdminController {

    private final AppointmentRepository appointmentRepository;
    private final UserRepository userRepository;
    private final ServiceRepository serviceRepository;
    private final GalleryImageRepository galleryImageRepository;

    @GetMapping("/stats")
    public ResponseEntity<Map<String, Object>> getStats() {
        Map<String, Object> stats = new HashMap<>();
        stats.put("totalBookings", appointmentRepository.count());
        stats.put("totalUsers", userRepository.count());
        stats.put("totalServices", serviceRepository.count());
        stats.put("todayAppointments", appointmentRepository.findAll().stream()
                .filter(a -> a.getAppointmentDate().equals(java.time.LocalDate.now()))
                .count());
        stats.put("revenue", appointmentRepository.findAll().stream()
                .filter(a -> a.getFinalPrice() != null)
                .mapToDouble(a -> a.getFinalPrice())
                .sum());
        return ResponseEntity.ok(stats);
    }

    @GetMapping("/users")
    public Page<User> getUsers(Pageable pageable) {
        return userRepository.findAll(pageable);
    }

    @GetMapping("/bookings")
    public Page<Appointment> getBookings(Pageable pageable) {
        return appointmentRepository.findAll(pageable);
    }

    @PutMapping("/services/{id}")
    public ResponseEntity<Service> updateService(@PathVariable Long id, @RequestBody Service service) {
        return serviceRepository.findById(id)
                .map(existing -> {
                    existing.setName(service.getName());
                    existing.setDescription(service.getDescription());
                    existing.setDuration(service.getDuration());
                    existing.setPrice(service.getPrice());
                    existing.setCategory(service.getCategory());
                    existing.setImageUrl(service.getImageUrl());
                    return ResponseEntity.ok(serviceRepository.save(existing));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/services/{id}")
    public ResponseEntity<Void> deleteService(@PathVariable Long id) {
        if (serviceRepository.existsById(id)) {
            serviceRepository.deleteById(id);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }

    @PostMapping("/gallery/upload")
    public ResponseEntity<GalleryImage> uploadGalleryImage(@RequestParam("file") MultipartFile file,
                                                           @RequestParam("category") String category,
                                                           @RequestParam("caption") String caption) {
        try {
            // Save file to disk (simplified — in production use S3/cloud storage)
            String filename = System.currentTimeMillis() + "_" + file.getOriginalFilename();
            String uploadDir = "uploads/gallery/";
            Files.createDirectories(Paths.get(uploadDir));
            Files.write(Paths.get(uploadDir, filename), file.getBytes());

            // Save to database
            GalleryImage galleryImage = new GalleryImage();
            galleryImage.setImageUrl("/uploads/gallery/" + filename);
            galleryImage.setTitle(caption);
            galleryImage.setCategory(category);
            GalleryImage saved = galleryImageRepository.save(galleryImage);

            return ResponseEntity.ok(saved);
        } catch (IOException e) {
            return ResponseEntity.internalServerError().build();
        }
    }
}
