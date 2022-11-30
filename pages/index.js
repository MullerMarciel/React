import { useState } from 'react';

function Home() {
    return (
        <div>
            <h1>Home 3</h1>
            <h2>Agora deu certo, só ver como vai ficar daqui pra frente o site</h2>
            <Contador />
        </div>
    )
}
    
function Contador() {
    const [contador, setContador] = useState(1);

    function adicionarContador() {
        setContador(contador + 1);
    }

    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar</button>
        </div>
    )
}


export default Home