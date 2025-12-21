package com.elitex.saloon.service;

import com.elitex.saloon.dto.LoginDto;
import com.elitex.saloon.dto.RegisterDto;

public interface AuthService {
    String login(LoginDto loginDto);
    void register(RegisterDto registerDto);
}
