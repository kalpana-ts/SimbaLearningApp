import Api from "./Api";

class AnnounceApi {
       getAllAnnouncement() {
           return Api.get('/announce');

       }

       getAnnouncementById(id){
           return Api.get('/announce/'+id)
       }

       createAnnouncement(announcement) {
           return Api.post('/announce/new/', announcement);
           }

       updateAnnouncement(announcement) {
           return Api.put('/announce', announcement);
              }
            
        deleteAnnouncement(id) {
            return Api.delete('/announce/'+id);
                } 
             }

             
            


//     getAllPosts() {
//         return Api.get('/posts');
//     }

//     getPostById(id) {
//         return Api.get('/posts/'+id);
//     }

//     createPost(post) {
//         return Api.post('/posts', post);
//     }

//     updatePost(post) {
//         return Api.put('/posts', post);
//     }

//     deletePost(id) {
//         return Api.delete('/posts/'+id);
//     } 
// }

export default new AnnounceApi();