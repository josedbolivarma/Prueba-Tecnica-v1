export const obtenerLocalStorage = () => {
    const producto = localStorage.getItem('travelsCountries')
    if (producto === null) {
        return undefined
    }
    return JSON.parse(producto)
}

export const guardarLocalStorage = (state) => {
    const productoState = JSON.stringify(state)
    if(state.length >= 9) {
        console.log('Mayora a 9', state.length);
    }
    localStorage.setItem('travelsCountries', productoState)
}
