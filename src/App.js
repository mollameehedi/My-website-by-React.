import 'bootstrap/dist/css/bootstrap.min.css';
import useLocalStorage from 'use-local-storage'
import Main from "./components/Main";
import './App.css';

function App() {


const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light'? 'dark': 'light';
    setTheme(newTheme);
  } 
  return (
    <div data-theme={theme} className='main'>
      <Main colorTheme={switchTheme}/>
    </div>
  );
}

export default App;
