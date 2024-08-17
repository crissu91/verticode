import { Route, Routes } from 'react-router-dom';
import ProjectAdder from './components/ProjectAdder';
import SingleProject from './components/SingleProject';

export default function App() {
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
