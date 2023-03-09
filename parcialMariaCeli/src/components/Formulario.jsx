import React, { useState } from 'react';
import Card from './Card'

function Formulario(props) {
    const [personaje, setPersonaje] = useState('');
    const [rol, setRol] = useState('');

    const handleSubmit = (event) => {
    event.preventDefault();
    if (personaje.length > 3 && rol.length >= 6) {
        alert(`Nombre personaje: ${personaje}, Rol: ${rol}`);
    } else {
        alert('El personaje y rol deben tener al menos 3 o al menos 6 caracteres respectivamente');
    }
}

    const handlePersonajeChange = (event) => {
    const inputValue = event.target.value.trim();
    if (inputValue.length > 3) {
        setPersonaje(inputValue);
    }
    else{
        <h1>"El personaje debe tener 3 caracteres o más :D. Pd: no puedes poner a Vi como tu pj fav D:"</h1>
    }
}

const handleRolChange = (event) => {
    const inputValue = event.target.value;
    if (inputValue.length >= 6) {
        setRol(inputValue);
    }
    else{
        <h1>"El rol debe tener al menos 6 caracteres :D. Ej: "midlaner, adcarry" etc" </h1>
    }
}

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <label>
                Nombre del personaje de LoL favorito:
                <input type="text" value={personaje} onChange={handlePersonajeChange} />
                </label>
                <label>
                Rol:
                <input type="text" value={rol} onChange={handleRolChange} />
                </label>
                <button type="submit">Enviar</button>
            </form>
        </Card>
);
}

export default Formulario;