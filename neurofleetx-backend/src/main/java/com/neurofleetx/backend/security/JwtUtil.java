package com.neurofleetx.backend.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;

import java.security.Key;
import java.util.Date;

public class JwtUtil {

  private static final String SECRET_KEY = "neurofleetx_neurofleetx_neurofleetx_123456"; // min 32 chars

  private static final long EXPIRATION_TIME = 1000 * 60 * 60; // 1 hour

  private static Key getSigningKey() {
    return Keys.hmacShaKeyFor(SECRET_KEY.getBytes());
  }

  // CREATE TOKEN
  public static String generateToken(String email, String role) {
    return Jwts.builder()
        .setSubject(email)
        .claim("role", role)
        .setIssuedAt(new Date())
        .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
        .signWith(getSigningKey())
        .compact();
  }

  // VALIDATE TOKEN
  public static boolean validateToken(String token) {
    try {
      getClaims(token);
      return true;
    } catch (Exception e) {
      return false;
    }
  }

  // GET EMAIL FROM TOKEN
  public static String getEmailFromToken(String token) {
    return getClaims(token).getSubject();
  }

  // INTERNAL
  public static Claims getClaims(String token) {
    return Jwts.parserBuilder()
        .setSigningKey(getSigningKey())
        .build()
        .parseClaimsJws(token)
        .getBody();
  }

}
