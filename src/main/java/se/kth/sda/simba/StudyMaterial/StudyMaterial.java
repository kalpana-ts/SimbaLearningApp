package se.kth.sda.simba.StudyMaterial;

import se.kth.sda.simba.user.User;

import javax.persistence.*;

@Entity
public class StudyMaterial {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private long id;
        private String Title;
        @Column(columnDefinition = "TEXT")
        private String Description;
        private String fileUrl;
        private String grade;
        private String subject;
        private String postDate;

        @ManyToOne
        private User user;


        public StudyMaterial(long id, String Title, String Description, String fileUrl, String grade, String subject, String postDate,  User user) {
            this.id = id;
            this.Title = Title;
            this.Description = Description;
            this.fileUrl = fileUrl;
            this.grade = grade;
            this.subject = subject;
            this.postDate = postDate;

            this.user = user;
        }

        public StudyMaterial() {

        }

        public long getId() {
            return id;
        }

        public void setId(long id) {
            this.id = id;
        }

        public String getAssignmentTitle() {
            return Title;
        }

        public void setAssignmentTitle(String Title) {
            this.Title = Title;
        }

        public String getAssignmentDescription() {
            return Description;
        }

        public void setAssignmentDescription(String Description) {
            this.Description = Description;
        }

        public String getFileUrl() {
            return fileUrl;
        }

        public void setFileUrl(String fileUrl) {
            this.fileUrl = fileUrl;
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

        public User getUser() {
            return user;
        }

        public void setUser(User user) {
            this.user = user;
        }

        public String getPostDate() {
            return postDate;
        }

        public void setPostDate(String postDate) {
            this.postDate = postDate;
        }



    }

