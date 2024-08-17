import { useState } from "react";
import { IProject } from "../models/Project";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

function ProjectAdder() {
    const navigate = useNavigate();
    const [formIsValid, setFormIsValid] = useState(true);
    const [newProject, setNewProject] = useState<IProject>({
        projectName: "",
        description: "",
        startDate: new Date(),
        category: "",
        imageUrl: "",
      });

      const validateForm = () => {
        if (
          !newProject.projectName ||
          !newProject.description ||
          !newProject.startDate ||
          !newProject.category ||
          !newProject.imageUrl.match(/^https?:\/\/.*\.(jpg|jpeg|png|gif)$/i)
        ) {
          setFormIsValid(false);
          return false;
        }
        setFormIsValid(true);
        return true;
      };
    
      const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          if (!validateForm()) return;
          const id = uuidv4()
    
        setNewProject((prevState) => ({
            ...prevState,
            projectName: newProject.projectName,
            description: newProject.description,
            startDate: newProject.startDate,
            category: newProject.category,
            id,
        }));
          
          navigate(`/projects/${id}`, { state: { newProject } });
      }

    return (
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

            <label htmlFor="image_url">Image URL</label>
            <input
                className="border border-green rounded-[4px] p-1 mb-3"
                id="image_url"
                type="text"
                placeholder="Image URL"
                onChange={(e) =>
                    setNewProject((newProject) => {
                    return { ...newProject, imageUrl: e.target.value };
                    })
                }
                required
            ></input>

            { !formIsValid && (<p className="text-[10px] text-red-600">Please fill in all the required fields.</p>) } 

            <button
                type="submit"
                className="mt-5 py-2 px-4 border rounded-full border-green bg-light-green w-fit hover:text-white hover:bg-green transition-colors shadow-md disabled:opacity-50 disabled:hover:bg-light-green disabled:hover:text-black"
                disabled={!formIsValid}
            >
                Submit
            </button>
      </form>
    )
}

export default ProjectAdder;