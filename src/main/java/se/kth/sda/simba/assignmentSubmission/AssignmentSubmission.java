package se.kth.sda.simba.assignmentSubmission;
import se.kth.sda.simba.assignmentPost.AssignmentPost;
import se.kth.sda.simba.user.User;
import javax.persistence.*;

@Entity
public class AssignmentSubmission {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String assignmentTitle;
    @Column(columnDefinition = "TEXT")
    private String assignmentDescription;
    private String file;
    private String grade;
    private String subject;

    @ManyToOne
    private AssignmentPost assignmentPost;

    @ManyToOne
    private User user;

    public AssignmentSubmission(long id, String assignmentTitle, String assignmentDescription, String file, String grade, String subject, AssignmentPost assignmentPost, User user) {
        this.id = id;
        this.assignmentTitle = assignmentTitle;
        this.assignmentDescription = assignmentDescription;
        this.file = file;
        this.grade = grade;
        this.subject = subject;
        this.assignmentPost = assignmentPost;
        this.user = user;
    }

    public AssignmentSubmission() {

    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getAssignmentTitle() {
        return assignmentTitle;
    }

    public void setAssignmentTitle(String assignmentTitle) {
        this.assignmentTitle = assignmentTitle;
    }

    public String getAssignmentDescription() {
        return assignmentDescription;
    }

    public void setAssignmentDescription(String assignmentDescription) {
        this.assignmentDescription = assignmentDescription;
    }

    public String getFile() {
        return file;
    }

    public void setFile(String file) {
        this.file = file;
    }

    public String getGrade() {
        return grade;
    }

    public void setGrade(String grade) {
        this.grade = grade;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public AssignmentPost getAssignmentPost() {
        return assignmentPost;
    }

    public void setAssignmentPost(AssignmentPost assignmentPost) {
        this.assignmentPost = assignmentPost;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
