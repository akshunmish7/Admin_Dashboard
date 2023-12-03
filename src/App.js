import './App.css';
import Search from "./Components/Search";
import Table from "./Components/Table";
import {useGlobalContext} from "./Context/Context";

function App() {
 const data  = useGlobalContext();
  return (
    <>
    <h1>Admin UI Dashboard</h1>
    <Search/>
    <Table/>
    </>    
  );
}

export default App;
