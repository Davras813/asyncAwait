// setTimeout(() => console.log('Se prendió esta vaina!'), 5000);

const getUsuarioById = (id, callback) => {
    const usuario = {
        id,
        nombre: 'David'
    }
    setTimeout(() => {
        callback(usuario);
    }, 1500);
}

getUsuarioById(10, (usuario) => {
    console.log(usuario);
    console.log(`${usuario.nombre.toUpperCase()} dice: Hola mundo inmundo!`);
});