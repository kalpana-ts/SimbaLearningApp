package se.kth.sda.simba.assignmentPost;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping("/assignmentPost")
public class AssignmentPostController {
    @Autowired
    private AssignmentPostService assignmentPostService;


    @GetMapping("")
    public List<AssignmentPost> getAll(@RequestParam(required = false) Long userId) {
        if (userId == null) {
            return assignmentPostService.getAll();
        } else {
            return assignmentPostService.getAllByUserId(userId);
        }
    }

    //Get a specific assignment by its id
    @GetMapping("/{id}")
    public AssignmentPost getById(@PathVariable Long id) {
        return assignmentPostService.getById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @GetMapping("/grade/{grade}")
    public List<AssignmentPost> getAllByGrade(@PathVariable String grade) {
        return assignmentPostService.getAllByGrade(grade);
    }

    @GetMapping("/subject/{subject}")
    public List<AssignmentPost> getAllBySubject(@PathVariable String subject) {
        return assignmentPostService.getAllBySubject(subject);
    }

    //Create a assignment
    @PostMapping("/new")
    public AssignmentPost create(@RequestBody AssignmentPost newAssignmentPost) {
        return assignmentPostService.create(newAssignmentPost);
    }

    //Create a task
    @PutMapping("")
    public AssignmentPost update(@RequestBody AssignmentPost newAssignmentPost) {
        return assignmentPostService.update(newAssignmentPost);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        assignmentPostService.delete(id);
    }
}
