import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { SkillsList } from './components/SkillsList';


function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("renderizou")
  }, [loading])

  return (
    <div className="App">
      <Header firstName={"Jefferson"} />
      <SkillsList skills={["css", "html", "javascript", "react"]} />

      <button onClick={() => setLoading(!loading)}>{loading ? "Loading ..." : "Salvar"}</button>
    </div>
  );
}

export default App;
