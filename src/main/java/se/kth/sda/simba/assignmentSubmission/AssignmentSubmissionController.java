package se.kth.sda.simba.assignmentSubmission;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import se.kth.sda.simba.assignmentSubmission.AssignmentSubmissionService;

import java.util.List;
@RestController
@RequestMapping("/assignmentSubmission")
public class AssignmentSubmissionController {

    @Autowired
    private AssignmentSubmissionService assignmentSubmissionService;

    @GetMapping("")
    public List<AssignmentSubmission> getAll(){
        return assignmentSubmissionService.getAll();
    }
    @GetMapping("/assignmentpostid")
    public List<AssignmentSubmission> getAllByAssignmentPostId(@RequestParam(required = false) Long assignmentPostId) {
        if (assignmentPostId == null) {
            return assignmentSubmissionService.getAll();
        } else {
            return assignmentSubmissionService.getAllByAssignmentPostId(assignmentPostId);
        }
    }


    @GetMapping("/userid")
    public List<AssignmentSubmission> getAllByUserId(@RequestParam(required = false) Long userId) {
        if (userId == null) {
            return assignmentSubmissionService.getAll();
        } else {
            return assignmentSubmissionService.getAllByUserId(userId);
        }
    }

    //Get a specific assignment by its id
    @GetMapping("/{id}")
    public AssignmentSubmission getById(@PathVariable Long id) {
        return assignmentSubmissionService.getById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @GetMapping("/grade/{grade}")
    public List<AssignmentSubmission> getAllByGrade(@PathVariable String grade) {
        return assignmentSubmissionService.getAllByGrade(grade);
    }

    @GetMapping("/subject/{subject}")
    public List<AssignmentSubmission> getAllBySubject(@PathVariable String subject) {
        return assignmentSubmissionService.getAllBySubject(subject);
    }

    //Create a assignment
    @PostMapping("")
    public AssignmentSubmission create(@RequestBody AssignmentSubmission newAssignmentSubmission) {
        return assignmentSubmissionService.create(newAssignmentSubmission);
    }

    //Create a task
    @PutMapping("")
    public AssignmentSubmission update(@RequestBody AssignmentSubmission newAssignmentSubmission) {
        return assignmentSubmissionService.update(newAssignmentSubmission);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        assignmentSubmissionService.delete(id);
    }
}

