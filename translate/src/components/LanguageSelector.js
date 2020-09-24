import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
//vamos a pasarle un accesorio llamado onLanguageChange que permita al selector de idioma cuando el usuario haga click en una bandera
// class LanguageSlector extends React.Component{
//   static contextType = LanguageContext;
//   render(){
//     // console.log(this.constext);
//     return(
//       <div>
//         Select a language:
//         <i
//           className="flag us"
//           onClick={() => this.props.onLanguageChange('english')}
//         />
//         <i
//           className="flag nl"
//           onClick={() => this.props.onLanguageChange('dutch')}
//         />
//       </div>
//
//     );
//   }
// }
//
// export default LanguageSlector;

class LanguageSlector extends React.Component{
  static contextType = LanguageContext;
  render(){
    //lo que obtenemos de la store
    console.log(this.context);
    return(
      <div>
        Select a language:
        <i
          className="flag us"
          onClick={() => this.context.onLanguageChange('english')}
        />
        <i
          className="flag nl"
          onClick={() => this.context.onLanguageChange('dutch')}
        />
      </div>

    );
  }
}

export default LanguageSlector;
