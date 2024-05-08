import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [records, setRecords] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    fetch('https://jsonplaceholder.typicode.com/todos')
            .then((loadedData) => loadedData.json())
            .then((loadedRecords) => {
                setRecords(loadedRecords);
            })
            .finally(() => setIsLoading(false));
    }, []);
  

  return (
    <div className="App">
      <header className="App-header">
        <h1>To Do List</h1>
        <table>
          <tr>
            
              <th scope='col'>id</th>
              <th scope='col'>Title</th>
              <th scope='col'>Completed</th>
          </tr>
       
        {isLoading ? (
                <div className="loader"></div>
            ) : (
               
                records.map(({ id, title, completed }) => (
                  <tr>                    
                    <td>{id}</td>  
                    <td>{title}</td>     
                    <td>{String(completed)}</td>
                  </tr>
  
                ))
            )}
        </table>    
      </header>
    </div>
  );
}

export default App;
