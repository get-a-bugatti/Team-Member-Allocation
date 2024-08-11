
function Teams ({ selectedTeam, handleSelectedTeam}) {
  return(
    <select value={selectedTeam} onChange={handleSelectedTeam}>
      <option value="TeamA">Team A</option>
      <option value="TeamB">Team B</option>
      <option value="TeamC">Team C</option>
      <option value="TeamD">Team D</option>
    </select>
  )  
}

 export default Teams;