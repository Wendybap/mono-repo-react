import { useEffect, useState } from 'react';

function App() {
  
    const [enabled, setEnabled] = useState(false);
const [position, setPosition] = useState({x: 0, y: 0});

var casa    ;
var name = 'wen';


              useEffect(() =>{
console.log('effect enabled', {enabled});
const handleMove = (event) =>{
  // posición del puntero en la pantalla
const {clientX, clientY} = event;
console.log('handleMove', {clientX, clientY});
setPosition({x: clientX, y: clientY});
};

if(enabled){
  window.addEventListener('pointermove', handleMove);
}
return() => {
  window.removeEventListener('pointermove', handleMove);
};
  },[enabled]);

  return (
    <>
    <main >
    <div style={{
      position: 'absolute',
      background: '#09f',
      borderRadius: '50%',
      opacity: '0.8',
      pointerEvents: 'none',
      left: -25,
      top: -25,
      width: 40,
      height: 40,
      transform: `translate(${position.x}px, ${position.y}px)`
    }}></div> 
    <button onClick={() => setEnabled(!enabled)}> {enabled ? 'Desactivar ' : 'Activar '}seguir puntero</button>
    </main>
    </>
  );
}

export default App;
