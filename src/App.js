import React from "react";
import profil from "./image.png";
import "./App.css";
import Layout from "./components/layout/layout";
import Welcome from "./components/welcome";
import About from "./components/about";
import Projects from "./components/projects";

function App() {
  return (
    <div className="App">
      <Layout />

      <Welcome nom="Chaumont" prenom="Romain" poste="développeur fullstack" />

      <About title="À mon propos" picture={profil} name="CHAUMONT" firstname="Romain" poste="développeur fullstack" />
        
      <Projects title="Mes projets" />
    </div>
  );
}

export default App;
