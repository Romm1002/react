import React from "react";
import profil from "../assets/img/image.png";
import "../assets/styles/home.css";
import Layout from "../components/layout/layout";
import Welcome from "../components/welcome";
import About from "../components/about";
import Projects from "../components/projects";

function App() {
  return (
    <>
      <Layout />

      <Welcome nom="Chaumont" prenom="Romain" poste="développeur fullstack" />

      <About
        title="À mon propos"
        picture={profil}
        name="CHAUMONT"
        firstname="Romain"
        poste="développeur fullstack"
      />

      <Projects title="Mes projets" />
    </>
  );
}

export default App;
