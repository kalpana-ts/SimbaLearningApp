function AssignmentCard(assignment) {
  console.log(assignment.assignment.assignmentTitle);

  return (
    <div className="card mt-3 ">
      <div className="card-title bg-secondary text-white m-0 p-1 ">
        {assignment.assignment.assignmentTitle + " ... "}
      </div>
      <div className="card-body">
        Description: 
        {assignment.assignment.assignmentDescription} <br />
        Grade:
        {assignment.assignment.grade}
        <br />
       Subject: 
        {assignment.assignment.subject}
        <br />
      </div>
    </div>
  );
}

export default AssignmentCard;
