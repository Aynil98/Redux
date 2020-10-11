import React, {useState} from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

/*vamos a coger el texto y la eleccion para hacer el componente de conversion
languahe (label y value) y text haremos una request a la api de google con ambsa cosas
en la respuesta tendremos la traduccion

key: AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM
*/

const options = [
    {
      label:'Afrikaans',
      value: 'af'
    },
    {
      label:'Arabic',
      value: 'ar'
    },
    {
      label:'Hindi',
      value: 'hi'
    },
    {
      label:'Dutch',
      value: 'nl'
    }
];

const Translate = ()=>{
  const [language, setlanguage]= useState(options[0]);
  const [text, setText] = useState ('');

  return(
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input value={text} onChange={(e)=>setText(e.target.value)} />
        </div>
      </div>
      <Dropdown
        label ="Select a language"
        selected = {language}
        onSelectedChange={setlanguage}
        options={options}
      />
      <hr />
      <h3 className="ui header">Output</h3>
      <Convert text={text} language={language} />
    </div>
  );
};

export default Translate;
