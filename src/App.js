import { useEffect, useState } from "react";
import { LoginService } from "./Services"

function App() {
  const [veriler, setVeriler] = useState(false)

  useEffect(() => {
    LoginService.getPostDetail('5')
     .then(res => {return res})
     .then(data => setVeriler(data))
     .catch(err => console.log(err))

  },[])

  return (
    <div>
        <ul>
          {veriler &&  (
              <li key={veriler.id}>{veriler.title}</li>  
          )}
        </ul>  
    </div>
  );
}

export default App;
