function AssignmentCard(assignment) {
  console.log(assignment.assignment.assignmentTitle);

  return (
    <div className="card mt-3 ">
      <div className="card-title bg-secondary text-white m-0 p-1 ">
        {assignment.assignment.assignmentTitle + " ... "}
        Posted By: 
        {assignment.assignment.user.name}
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
        Files:
        {assignment.assignment.fileUrl}
        <img src={assignment.assignment.fileUrl} alt="" className="s"/>
        <a key={assignment.assignment.id} href={assignment.assignment.fileUrl} className="href" target="_blank">Uploaded File</a>
      
      </div>
    </div>
  );
}

export default AssignmentCard;
