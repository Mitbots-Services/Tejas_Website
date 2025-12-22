package com.elitex.saloon.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Map;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "http://localhost:4200")
public class ContactController {

    @Autowired
    private JavaMailSender mailSender;

    @Value("${spring.mail.username}")
    private String adminEmail;

    @PostMapping
    public ResponseEntity<?> sendContactEmail(@RequestBody Map<String, String> data) {
        try {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setFrom(adminEmail);
            message.setTo(adminEmail); // Sends the message to YOUR inbox
            message.setSubject("New Inquiry from " + data.get("name"));
            message.setText("Customer: " + data.get("name") + "\n" +
                          "Email: " + data.get("email") + "\n\n" +
                          "Message: " + data.get("message"));

            mailSender.send(message);
            return ResponseEntity.ok().body("{\"message\": \"Email sent successfully\"}");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("{\"error\": \"" + e.getMessage() + "\"}");
        }
    }
}