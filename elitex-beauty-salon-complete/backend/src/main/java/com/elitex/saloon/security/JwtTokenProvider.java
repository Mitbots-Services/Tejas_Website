package com.elitex.saloon.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtParser;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.nio.charset.StandardCharsets;
import java.util.Date;

@Component
public class JwtTokenProvider {

    @Value("${jwt.secret}")
    private String jwtSecret;

    private SecretKey getSigningKey() {
        return Keys.hmacShaKeyFor(jwtSecret.getBytes(StandardCharsets.UTF_8));
    }

    public String generateToken(Authentication authentication) {
        String username = authentication.getName();
        Date now = new Date();
        long jwtExpirationInMs = 86400000L;
        Date expiryDate = new Date(now.getTime() + jwtExpirationInMs);

        return Jwts.builder()
                .subject(username)
                .issuedAt(now)
                .expiration(expiryDate)
                .signWith(getSigningKey(), SignatureAlgorithm.HS512)
                .compact();
    }

    public String getUsernameFromJWT(String token) {
        JwtParser jwtParser = Jwts.parser()
                .verifyWith(getSigningKey())
                .build();
        Claims claims = jwtParser.parseSignedClaims(token).getPayload();
        return claims.getSubject();
    }

    public boolean validateToken(String authToken) {
        try {
            JwtParser jwtParser = Jwts.parser()
                    .verifyWith(getSigningKey())
                    .build();
            jwtParser.parseSignedClaims(authToken);
            return true;
        } catch (Exception ex) {
            // In a real app, log this exception. e.g. MalformedJwtException, ExpiredJwtException, etc.
        }
        return false;
    }
}
