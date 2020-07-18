import React from 'react';
import { GET_ALL_FONTS } from './queries';
import {Fonts} from './generated/Fonts'
import { useQuery } from "@apollo/react-hooks";

 
const App:React.FC = () => {

  const {data, loading} = useQuery<Fonts>(GET_ALL_FONTS, {})

  if(loading || !data) return <div>Loading</div>

  return (
    <div className="App">
      <h1>Fonts</h1>
      <ul>
        {
          data && data.fonts && data.fonts.map(font => (
          <li>
            {font?.name}
          </li>
          ))
        }
      </ul>
    </div>
  );
}

export default App;
