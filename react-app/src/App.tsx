import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { ProjectProvider } from "./context/ProjectContext";
import Home from "./pages/Home";
import CreateProject from "./pages/CreateProject";
import DonationPage from "./pages/DonationPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import Project from "./pages/Project";
import Donation from "./pages/Donation";
import PaymentPage from "./pages/PaymentPage";
import "./styles.css";
import ProjectList from "./pages/ProjectList";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <ProjectProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<Project />} />
            <Route path="/project/all" element={<ProjectList />} />
            <Route path="/donation/:id" element={<Donation />} />
            <Route path="/payment/:id" element={<PaymentPage />} />
            <Route path="/create" element={<CreateProject />} />
            <Route path="/donate/:id" element={<DonationPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
          </Routes>
        </Router>
      </ProjectProvider>
    </AuthProvider>
  );
};

export default App;
