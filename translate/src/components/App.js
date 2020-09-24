import React from 'react';
import UserCreate from './UserCreate';
// import LanguageContext from '../contexts/LanguageContext';
import {LanguageStore} from '../contexts/LanguageContext';

import ColorContext from '../contexts/ColorContext';
import LanguageSelector from './LanguageSelector';

// class App extends React.Component {
//   state = { language: 'english' };
//
//   onLanguageChange = language => {
//     this.setState({ language });
//   };
//
//   render() {
//     return (
//       <div className="ui container">
//         <LanguageSelector onLanguageChange={this.onLanguageChange} />
//
//         <ColorContext.Provider value="red">
//           <LanguageContext.Provider value={this.state.language}>
//             <UserCreate />
//           </LanguageContext.Provider>
//         </ColorContext.Provider>
//       </div>
//     );
//   }
// }

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <LanguageStore>
          <LanguageSelector />
          <ColorContext.Provider value="red">
              <UserCreate />
          </ColorContext.Provider>
        </LanguageStore>
      </div>
    );
  }
}

export default App;
