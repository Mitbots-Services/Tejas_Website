package com.elitex.saloon.controller;

import com.elitex.saloon.dto.ApiResponse;
import com.elitex.saloon.entity.Stylist;
import com.elitex.saloon.repository.StylistRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/stylists")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
public class StylistController {

    private final StylistRepository stylistRepository;

    @GetMapping
    public ResponseEntity<ApiResponse<?>> getAllStylists() {
        return ResponseEntity.ok(ApiResponse.builder()
                .success(true)
                .message("Stylists retrieved")
                .data(stylistRepository.findAll())
                .build());
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<Stylist>> getStylistById(@PathVariable Long id) {
        Stylist stylist = stylistRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Stylist not found"));
        return ResponseEntity.ok(ApiResponse.<Stylist>builder()
                .success(true)
                .message("Stylist retrieved")
                .data(stylist)
                .build());
    }
}

