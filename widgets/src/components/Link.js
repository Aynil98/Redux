import React from 'react'

const Link = ({className, href, children})=>{
  //controlador de eventos para que no haga una carga completa de la pagina
  /*queremos cambiar la url sin full page refresh
  usaremos una funcion del navegador wuindow.hiatory.pushState({}, '','/translate')
  que los componentes detecten el cambio navigation event (detecting navigation) decirle a los componentes desplegablesqu ealgunos datos o todo a cambiadourl
  ahora queremos que el componente correcto se actualice y el componnete raiz se procese (udating the route)
  */
  const onClick =(event)=>{
    //para abrir en una pestaña nueva usando control y click
    if (event.metaKey || event.ctrlKey){
      return;
    }

    event.preventDefault();
    window.history.pushState({}, '', href);

    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  };

  return(
     <a onClick={onClick} className={className} href={href} >
        {children}
     </a>
   );
};

export default Link;
