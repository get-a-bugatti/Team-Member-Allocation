import Teams from './Teams';
import TeamMemberCards from './TeamMemberCards';
import maleProfile from './images/maleProfile.jpg';
import femaleProfile from './images/femaleProfile.jpg';
import './App.css';


function Content({ employees, selectedTeam, handleSelectedTeam, handleCardClickEvent }) {

  return(
    <main className="container">

        <Teams selectedTeam={selectedTeam} handleSelectedTeam={handleSelectedTeam}/> 

        <TeamMemberCards employees={employees} selectedTeam={selectedTeam} handleCardClickEvent={handleCardClickEvent} maleProfile={maleProfile} femaleProfile={femaleProfile} />
      
    </main>
  )
}

export default Content;
