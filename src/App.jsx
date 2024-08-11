import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Header from "./Header";
import Content from "./Content";
import GroupTeamMembers from "./GroupTeamMembers";
import NotFound from "./NotFound";
import Footer from "./Footer";
import "./App.css";

export default function App() {
  const [selectedTeam, setTeam] = useState(
    JSON.parse(localStorage.getItem("selectedTeam")) || "TeamA",
  );

  const [employees, setEmployees] = useState(
    JSON.parse(localStorage.getItem("employeesList")) || [
      {
        id: 1,
        fullName: "Bob Jones",
        designation: "JavaScript Developer",
        gender: "male",
        teamName: "TeamA",
      },
      {
        id: 2,
        fullName: "Jill Bailey",
        designation: "Node Developer",
        gender: "female",
        teamName: "TeamA",
      },
      {
        id: 3,
        fullName: "Gail Shepherd",
        designation: "Java Developer",
        gender: "female",
        teamName: "TeamA",
      },
      {
        id: 4,
        fullName: "Sam Reynolds",
        designation: "React Developer",
        gender: "male",
        teamName: "TeamB",
      },
      {
        id: 5,
        fullName: "David Henry",
        designation: "DotNet Developer",
        gender: "male",
        teamName: "TeamB",
      },
      {
        id: 6,
        fullName: "Sarah Blake",
        designation: "SQL Server DBA",
        gender: "female",
        teamName: "TeamB",
      },
      {
        id: 7,
        fullName: "James Bennet",
        designation: "Angular Developer",
        gender: "male",
        teamName: "TeamC",
      },
      {
        id: 8,
        fullName: "Jessica Faye",
        designation: "API Developer",
        gender: "female",
        teamName: "TeamC",
      },
      {
        id: 9,
        fullName: "Lita Stone",
        designation: "C++ Developer",
        gender: "female",
        teamName: "TeamC",
      },
      {
        id: 10,
        fullName: "Daniel Young",
        designation: "Python Developer",
        gender: "male",
        teamName: "TeamD",
      },
      {
        id: 11,
        fullName: "Adrian Jacobs",
        designation: "Vue Developer",
        gender: "male",
        teamName: "TeamD",
      },
      {
        id: 12,
        fullName: "Devin Monroe",
        designation: "Graphic Designer",
        gender: "male",
        teamName: "TeamD",
      },
    ],
  );

  useEffect(() => {
    localStorage.setItem("employeesList", JSON.stringify(employees));
  }, [employees]);

  useEffect(() => {
    localStorage.setItem("selectedTeam", JSON.stringify(selectedTeam));
  }, [selectedTeam]);

  function handleSelectedTeam(event) {
    setTeam(event.target.value);
  }

  function handleCardClickEvent(event) {
    const transformedEmployee = employees.map((employee) =>
      employee.id === parseInt(event.currentTarget.id)
        ? employee.teamName === selectedTeam
          ? { ...employee, teamName: "" }
          : { ...employee, teamName: selectedTeam }
        : employee,
    );

    setEmployees(transformedEmployee);
  }

  return (
    <Router>
      <Nav />

      <Header
        selectedTeam={selectedTeam}
        countSelectedTeam={
          employees.filter((employee) => employee.teamName === selectedTeam)
            .length
        }
      />

      <Routes>
        <Route
          path="/"
          element={
            <Content
              employees={employees}
              selectedTeam={selectedTeam}
              handleSelectedTeam={handleSelectedTeam}
              handleCardClickEvent={handleCardClickEvent}
            />
          }
        ></Route>

        <Route
          path="/GroupedTeamMembers"
          element={
            <GroupTeamMembers
              employees={employees}
              selectedTeam={selectedTeam}
              setTeam={setTeam}
            />
          }
        ></Route>

        <Route path="/*" element={<NotFound />}></Route>
      </Routes>

      <Footer />
    </Router>
  );
}
