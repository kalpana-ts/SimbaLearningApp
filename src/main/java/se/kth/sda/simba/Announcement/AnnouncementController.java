package se.kth.sda.simba.Announcement;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import se.kth.sda.simba.auth.AuthService;

import java.util.List;
@RestController
@RequestMapping("/announce")
public class AnnouncementController {




    private final AnnouncementService service;
    private final AuthService authService;

    @Autowired
    public AnnouncementController(AnnouncementService service, AuthService authService) {
        this.service = service;
        this.authService = authService;
    }

    @GetMapping("")
    public List<Announcement> getAll() {
        return service.getAll();
    }

    @GetMapping("/{id}")
    public Announcement getById(@PathVariable Long id) {
        return service.getById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @PostMapping("/new")
    public Announcement create(@RequestBody Announcement newAnnouncement) {
        newAnnouncement.setEmail(authService.getLoggedInUserEmail());
        return service.create(newAnnouncement);
    }

    @PutMapping("")
    public Announcement update(@RequestBody Announcement updatedAnnouncement) {
        return service.update(updatedAnnouncement);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }
}
