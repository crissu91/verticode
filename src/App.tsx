import { useState } from "react";
import { IProject } from "./models/Project";

export default function App() {
  const [newProject, setNewProject] = useState<IProject>({
    projectName: "",
    description: "",
    startDate: new Date(),
    category: "",
  });
  const formHasErrors =  Object.values(newProject).some((items: keyof IProject) => items.length ===0) 

  const handleSubmit = async (e) => {
    e.preventDefault();

    setNewProject((prevState) => ({
      ...prevState,
      projectName: newProject.projectName,
      description: newProject.description,
      startDate: newProject.startDate,
      category: newProject.category,
    }));
  };

  return (
    <main className="flex flex-col">
      <header className="flex h-24 bg-light-green">
        <img src="/logo.png" height={64} className="h-16 m-auto" />
      </header>

      <Routes>
        <Route path="/" element={<ProjectAdder />} />
        <Route path="/projects/:project" element={<SingleProject />} />
      </Routes>
    </main>
  );
}
