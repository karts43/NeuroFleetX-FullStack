package com.neurofleetx.backend.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "vehicles")
public class Vehicle {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String model;

  @Column(unique = true, nullable = false)
  private String licensePlate;

  private String status; // AVAILABLE / IN_USE / MAINTENANCE
  private int battery; // %
  private int fuel; // %
  private int speed; // km/h

  private double latitude;
  private double longitude;

  // ===== Getters =====
  public Long getId() {
    return id;
  }

  public String getModel() {
    return model;
  }

  public String getLicensePlate() {
    return licensePlate;
  }

  public String getStatus() {
    return status;
  }

  public int getBattery() {
    return battery;
  }

  public int getFuel() {
    return fuel;
  }

  public int getSpeed() {
    return speed;
  }

  public double getLatitude() {
    return latitude;
  }

  public double getLongitude() {
    return longitude;
  }

  // ===== Setters =====
  public void setId(Long id) {
    this.id = id;
  }

  public void setModel(String model) {
    this.model = model;
  }

  public void setLicensePlate(String licensePlate) {
    this.licensePlate = licensePlate;
  }

  public void setStatus(String status) {
    this.status = status;
  }

  public void setBattery(int battery) {
    this.battery = battery;
  }

  public void setFuel(int fuel) {
    this.fuel = fuel;
  }

  public void setSpeed(int speed) {
    this.speed = speed;
  }

  public void setLatitude(double latitude) {
    this.latitude = latitude;
  }

  public void setLongitude(double longitude) {
    this.longitude = longitude;
  }
}
