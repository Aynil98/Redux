import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

// class Field extends React.Component {
//   static contextType = LanguageContext;
//
//   render() {
//     const text = this.context === 'english' ? 'Name' : 'Naam';
//
//     return (
//       <div className="ui field">
//         <label>{text}</label>
//         <input />
//       </div>
//     );
//   }
// }

class Field extends React.Component {
  static contextType = LanguageContext;

  render() {
        // ahora context es un objeto con todo
    const text = this.context.language === 'english' ? 'Name' : 'Naam';

    return (
      <div className="ui field">
        <label>{text}</label>
        <input />
      </div>
    );
  }
}

export default Field;
