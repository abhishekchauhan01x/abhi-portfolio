import './App.css'
import Profile from './components/Profile';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 py-6 sm:py-8 md:py-12 px-2 sm:px-4 flex flex-col items-center">
      <div className="w-full max-w-3xl mb-4 sm:mb-6 md:mb-8">
        <Profile/>
      </div>
      <div className="w-full max-w-3xl mb-4 sm:mb-6 md:mb-8">
        <Skills/>
      </div>
      <div className="w-full max-w-3xl mt-4 sm:mt-6 md:mt-8">
        <Projects/>
      </div>
    </div>
  );
}

export default App;
