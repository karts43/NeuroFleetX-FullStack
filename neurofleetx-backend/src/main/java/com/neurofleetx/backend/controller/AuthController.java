package com.neurofleetx.backend.controller;

import com.neurofleetx.backend.entity.User;
import com.neurofleetx.backend.repository.UserRepository;
import com.neurofleetx.backend.security.JwtUtil;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "*")
public class AuthController {

  private final UserRepository userRepository;
  private final PasswordEncoder passwordEncoder;

  public AuthController(UserRepository userRepository,
      PasswordEncoder passwordEncoder) {
    this.userRepository = userRepository;
    this.passwordEncoder = passwordEncoder;
  }

  // REGISTER
  @PostMapping("/register")
  public String register(@RequestBody User user) {
    user.setPassword(passwordEncoder.encode(user.getPassword()));
    userRepository.save(user);
    return "User registered successfully";
  }

  // LOGIN
  @PostMapping("/login")
  public ResponseEntity<?> login(@RequestBody User user) {

    User dbUser = userRepository.findByEmail(user.getEmail())
        .orElse(null);

    if (dbUser == null ||
        !passwordEncoder.matches(user.getPassword(), dbUser.getPassword())) {

      return ResponseEntity
          .status(HttpStatus.UNAUTHORIZED)
          .body("Invalid credentials");
    }

    String token = JwtUtil.generateToken(
        dbUser.getEmail(),
        dbUser.getRole());

    return ResponseEntity.ok(
        Map.of(
            "token", token,
            "role", dbUser.getRole()));
  }

}
