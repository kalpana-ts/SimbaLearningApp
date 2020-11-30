package se.kth.sda.simba.Announcement;

import se.kth.sda.simba.comment.Comment;
import se.kth.sda.simba.user.User;

import javax.persistence.*;
import java.util.List;


@Table(name = "announce")
@Entity
public class Announcement {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "announce_generator")
    @SequenceGenerator(name = "announce_generator", sequenceName = "announce_seq")
    private Long id;

    @Column(name = "title")
    private String title;

    @Column(name = "body", columnDefinition = "TEXT")
    private String body;


    @Column(name = "date")
    private String date;

    @Column(name = "email")
    private String email;


   /*@OneToMany
    private List<Comment>comment;

    */
    @OneToMany(cascade = {CascadeType.ALL})
    private List<Comment> comments;

    @ManyToOne
    private User user;
    public Announcement() {
    }

    public Announcement(Long id, String title, String body, String date, String email) {
        this.id = id;
        this.title = title;
        this.body = body;
        this.date = date;
        this.email = email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getEmail() {
        return email;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }


    public List<Comment> getComments() {
        return comments;
    }

    public void setComments(List<Comment> comments) {
        this.comments = comments;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
