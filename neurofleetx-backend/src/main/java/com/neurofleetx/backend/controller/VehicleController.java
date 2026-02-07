package com.neurofleetx.backend.controller;

import com.neurofleetx.backend.entity.Vehicle;
import com.neurofleetx.backend.repository.VehicleRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Random;

@RestController
@RequestMapping("/api/vehicles")
@CrossOrigin(origins = "http://localhost:5173")
public class VehicleController {

  private final VehicleRepository repo;
  private final Random random = new Random();

  public VehicleController(VehicleRepository repo) {
    this.repo = repo;
  }

  // ✅ ADD VEHICLE
  @PostMapping
  public Vehicle addVehicle(@RequestBody Vehicle v) {
    v.setStatus("AVAILABLE");
    v.setBattery(70 + random.nextInt(20));
    v.setFuel(70 + random.nextInt(20));
    v.setSpeed(0);
    v.setLatitude(18.5204);
    v.setLongitude(73.8567);
    return repo.save(v);
  }

  // ✅ GET VEHICLES (Dynamic Telemetry)
  @GetMapping
  public List<Vehicle> getVehicles() {
    List<Vehicle> vehicles = repo.findAll();

    vehicles.forEach(v -> {
      if ("IN_USE".equals(v.getStatus())) {
        v.setSpeed(30 + random.nextInt(40));
        v.setBattery(Math.max(5, v.getBattery() - 1));
        v.setFuel(Math.max(5, v.getFuel() - 1));
        v.setLatitude(v.getLatitude() + random.nextDouble() / 1000);
        v.setLongitude(v.getLongitude() + random.nextDouble() / 1000);
      } else {
        v.setSpeed(0);
      }
      repo.save(v);
    });

    return vehicles;
  }
}
