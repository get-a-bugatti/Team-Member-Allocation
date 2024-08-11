function TeamMemberCards({
  employees,
  selectedTeam,
  handleCardClickEvent,
  maleProfile,
  femaleProfile,
}) {
  return (
    <div className="cards-container">
      {employees.map((employee) => {
        return (
          <div
            key={employee.id}
            id={employee.id}
            className={
              employee.teamName === selectedTeam ? "card standout" : "card"
            }
            onClick={handleCardClickEvent}
          >
            <img
              src={employee.gender === "male" ? maleProfile : femaleProfile}
              style={{ objectFit: "cover" }}
            />

            <div className="card-body">
              <h4>Name: {employee.fullName}</h4>
              <p>Role: {employee.designation}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TeamMemberCards;
