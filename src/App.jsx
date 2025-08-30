import './App.css'
import Profile from './components/Profile';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 py-12 px-4 flex flex-col items-center">
      <div className="w-full max-w-3xl mb-8">
        <Profile/>
      </div>
      <div className="w-full max-w-3xl mb-8">
        <Skills/>
      </div>
      <div className="w-full max-w-3xl mt-8">
        <Projects/>
      </div>
    </div>
  );
}

export default App;
