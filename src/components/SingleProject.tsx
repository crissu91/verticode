import { useLocation } from 'react-router-dom';

function SingleProject() {
    const location = useLocation();
    const { newProject } = location.state || {};
    const formattedDate = new Date(newProject.startDate).toLocaleString();

    return (
    <div className='flex gap-10 mx-auto border border-green rounded-[12px] shadow-md py-10 px-8 mt-10'>
        <img src={newProject.imageUrl} alt="Project image" className='object-cover '/>
            
        <div className='flex flex-col space-y-4 w-[23em]'>
            <h1 className='text-[24px] font-medium'>Project name: {newProject.projectName}</h1>

            <p>Category: {newProject.category}</p>
            
            <p>Start date: { formattedDate}</p>

            <p>Description: {newProject.description}</p>
            
            <div className='flex gap-4'>
                <label htmlFor='completed'>Mark as completed</label>
                <input type="checkbox" id="completed" name="completed" value="completed"></input>
            </div>
        </div>
    </div>
    )
}
export default SingleProject;