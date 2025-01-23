import CreateNote from "./components/CreateNote";
import Header from "./components/Header";

import "./components/Header.css";
import Notes from "./components/Notes";


function App() {
  return (
    <>
      <Header />
      <CreateNote />
      <Notes/>
    </>
  );
}

export default App;