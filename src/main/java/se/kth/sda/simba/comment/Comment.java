package se.kth.sda.simba.comment;

import se.kth.sda.simba.Announcement.Announcement;

import javax.persistence.*;

@Entity
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY )
    private Long id;
    @Column(columnDefinition = "TEXT")
    private String body;
    private String authorName;

    @ManyToOne
    private Announcement announcement;

    public Comment() {
    }

    public Comment(Long id, String body, String authorName) {
        this.id = id;
        this.body = body;
        this.authorName = authorName;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    public String getAuthorName() {
        return authorName;
    }

    public void setAuthorName(String authorName) {
        this.authorName = authorName;
    }

  /*  public Post getPost() {
        return post;
    }

    public void setPost(Post post) {
        this.post = post;
    }
*/
}

