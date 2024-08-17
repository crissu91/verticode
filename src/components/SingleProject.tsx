import { useLocation } from 'react-router-dom';

function SingleProject() {
    const location = useLocation();
    const { newProject } = location.state || {};
    const formattedDate = new Date(newProject.startDate).toLocaleString();

    return (
        <div className='flex flex-col mx-auto space-y-4 py-10 w-[23em] border border-green rounded-[12px] shadow-md mt-10 px-8'>
            <h1 className='text-[24px] font-medium'>Project name: {newProject.projectName}</h1>

            <p>Category: {newProject.category}</p>
            
            <p>Start date: { formattedDate}</p>

            <p>Description: { newProject.description}</p>
        </div>
    )
}
export default SingleProject;