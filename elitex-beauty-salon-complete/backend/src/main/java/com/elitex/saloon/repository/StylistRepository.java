package com.elitex.saloon.repository;

import com.elitex.saloon.entity.Stylist;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StylistRepository extends JpaRepository<Stylist, Long> {
}


