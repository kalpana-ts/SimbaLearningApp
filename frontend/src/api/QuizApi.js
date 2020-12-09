import Api from './Api';
class QuizApi {

    getAllQuizs() {
        return Api.get('/Quizs');
    }
    getQuizById(id) {
        return Api.get('/Quizs/'+id);
    }
    getQuizBySubject(subject) {
        return Api.get('/Quizs/'+subject);
    }
    createQuiz(Quiz) {
        return Api.post('/Quizs/new/', Quiz);
    }


   
    updateQuiz(Quiz) {
        return Api.put('/Quizs', Quiz);
    }
    deleteQuiz(id) {
        return Api.delete('/Quizs/'+id);
    }
}
export default new QuizApi();
