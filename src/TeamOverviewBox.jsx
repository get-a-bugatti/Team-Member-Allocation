function TeamOverviewBox({ groupedEmployees, handleTeamClick }) {
  return (
    <main className="container">
      {groupedEmployees.map((item, index) => {
        return (
          <div key={index} id={item.team} className="card">
            <h4
              id={item.team}
              className="card-header"
              onClick={handleTeamClick}
            >
              Team Name : {item.team}
            </h4>

            <div
              id={"collapse_" + item.team}
              className={item.collapsed === true ? "collapse" : "content"}
            >
              {item.members.map((member) => {
                return (
                  <div key={member.id} id={member.id} className="content-box">
                    <span className="member-name">Name : {member.id}</span>
                    <p>Designation : {member.designation}</p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </main>
  );
}

export default TeamOverviewBox;
