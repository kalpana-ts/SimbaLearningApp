import Api from "./Api";

class AssignmentPostApi {

    getAllAssignmentsPosts() {
        return Api.get('/assignmentPost');
    }

    getAssignmentsById(id){
        return Api.get('/assignmentPost/'+id);
    }

    createAssignment(assignment) {
        return Api.post('/assignmentPost/new', assignment);
    }

    updateAssignment(assignment) {
        return Api.put('/assignmentPost', assignment);
    }

    deleteAssignment(id) {
        return Api.delete('/assignmentPost/'+id);
    } 
}

export default new AssignmentPostApi();