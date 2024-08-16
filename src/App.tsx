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

      <form onSubmit={handleSubmit} className="grid mx-auto p-20 text-[14px]">
        <label htmlFor="project-name">Project Name</label>
        <input
          className="border border-green rounded-[4px] p-1 mb-3"
          id="project-name"
          type="text"
          placeholder="Project Name"
          value={newProject.projectName}
          onChange={(e) =>
            setNewProject((newProject) => {
              return { ...newProject, projectName: e.target.value };
            })
          }
          required
        ></input>

        <label htmlFor="description">Description</label>
        <textarea
          className="border border-green rounded-[4px] p-1 mb-3"
          id="description"
          placeholder="Description"
          value={newProject.description}
          onChange={(e) =>
            setNewProject((newProject) => {
              return { ...newProject, description: e.target.value };
            })
          }
          required
        ></textarea>

        <label htmlFor="startDate">Start Date</label>
        <input
          className="border border-green rounded-[4px] p-1 mb-3"
          id="startDate"
          type="date"
          placeholder="Start Date"
          onChange={(e) =>
            setNewProject((newProject) => {
              return { ...newProject, startDate: new Date(e.target.value) };
            })
          }
          required
        ></input>

        <label htmlFor="category">Category:</label>
        <select
          name="category"
          id="category"
          className="border border-green rounded-[4px] p-1 mb-3"
          required
          defaultValue="Select"
          onChange={(e) =>
            setNewProject((newProject) => {
              return { ...newProject, category: e.target.value };
            })
          }
        >
          <option disabled>Select</option>
          <option value="travel">Travel</option>
          <option value="high-tech">High Tech</option>
          <option value="music">Music</option>
          <option value="construction">Construction</option>
        </select>

       <p className="text-[10px] text-gray-600">Please fill in all the required fields.</p> 

        <button
          type="submit"
          className="mt-5 py-2 px-4 border rounded-full border-green bg-light-green w-fit hover:text-white hover:bg-green transition-colors shadow-md disabled:opacity-50 disabled:hover:bg-light-green disabled:hover:text-black"
          disabled={formHasErrors}
        >
          Submit
        </button>
      </form>

    </main>
  );
}
