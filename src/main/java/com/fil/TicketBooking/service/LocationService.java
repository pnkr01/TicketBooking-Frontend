package com.fil.TicketBooking.service;

import com.fil.TicketBooking.model.Location;

import java.util.List;

public interface LocationService {
    Location createLocation(Location location);
    Location updateLocation(Long id, Location location);
    void deleteLocation(Long id);
    Location getLocationById(Long id);
    List<Location> getAllLocations();
    List<Location> getLocationsByCity(String city);
}