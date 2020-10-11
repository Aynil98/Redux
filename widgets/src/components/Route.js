import React, {useEffect, useState} from 'react';
//la pripuedad children es porque tiene un obejto dentro y es especial
const Route = ({path, children}) =>{
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  //first render
  useEffect(()=>{
    const onLocationChange =()=>{
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', onLocationChange);

    return () =>{
      window.removeEventListener('popstate', onLocationChange);
    };
   }, []);

  return currentPath === path ?children : null;
};

export default Route;
