

function Header({selectedTeam, countSelectedTeam}) {
  return(
    <header style={{ fontFamily: 'Arial', textAlign: "center" }}>
      <h2 className="document-title">Team Member Allocation Tool</h2>
      <p> {selectedTeam} has {countSelectedTeam} {countSelectedTeam === 1 ? "member" : "members"}</p>
    </header>
  )
}

export default Header;