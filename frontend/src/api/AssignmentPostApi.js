import Api from "./Api";

class AssignmentPostApi {
    getAllAssignmentsPosts() {
        return Api.get('/assignemntsPost')
    }
}