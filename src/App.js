import { useState } from "react";
import {DynamicTable} from "./dynamic-table";


function App() {
  const [rowData] = useState([
    {
      make: "Toyota", 
      model: "Celica", 
      price: 35000
    },
    {
      make: "Ford", 
      model: "Mondeo", 
      price: 32000
    },
    {
      make: "Porsche", 
      model: "Boxster", 
      price: 72000
    }
  ]);

  const [columnDefs] = useState([
    { 
      field: 'make',
      label: "Make" 
    },
    { 
      field: 'model',
      label: "Model"
    },
    { 
      field: 'price',
      label: "Price" 
    }
  ])

  return (
    <div className="App">
      <DynamicTable 
        columnDefs = {columnDefs}
        rowData={rowData}
      />
    </div>
  );
}

export default App;
