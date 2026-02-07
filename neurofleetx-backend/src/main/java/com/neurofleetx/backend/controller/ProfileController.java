package com.neurofleetx.backend.controller;

import com.neurofleetx.backend.entity.User;
import com.neurofleetx.backend.repository.UserRepository;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class ProfileController {

  private final UserRepository userRepository;

  public ProfileController(UserRepository userRepository) {
    this.userRepository = userRepository;
  }

  @GetMapping("/profile")
  public User getProfile() {

    Authentication auth = SecurityContextHolder
        .getContext()
        .getAuthentication();

    String email = auth.getName();

    User user = userRepository
        .findByEmail(email)
        .orElseThrow(() -> new RuntimeException("User not found"));

    // 🔥 VERY IMPORTANT
    user.setPassword(null);

    return user;
  }

}
