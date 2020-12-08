import Api from "./Api";

class AssignmentSubmissionApi {

    getAllAssignmentsSubmitted() {
        return Api.get('/assignmentSubmittedByStudents');
    }

    getAllSubmittedByAssignmentId(assignmentPostId) {
        return Api.get(`/assignmentSubmittedByStudents/assignmentPostId?assignmentPostId=${assignmentPostId}`);
    }

    getAllAssignmentsByGradeAndSubject(grade,subject){
            return Api.get(`/assignmentSubmittedByStudents/grade/${grade}/${subject}`);
    }

    getAssignmentsById(id){
        return Api.get('/assignmentSubmittedByStudents/'+id);
    }

    createAssignment(assignment) {
        return Api.post('/assignmentSubmittedByStudents/new', assignment);
    }

    updateAssignment(assignment) {
        return Api.put('/assignmentSubmittedByStudents/update', assignment);
    }

    deleteAssignment(id) {
        return Api.delete('/assignmentSubmittedByStudents/'+id);
    } 
}

export default new AssignmentSubmissionApi();