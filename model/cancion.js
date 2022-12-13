
module.exports = {
    obtener: function(conexion, funcion){
        conexion.query("SELECT * FROM canciones", funcion);
    },

    insertar: function(conexion, datos, funcion){
        conexion.query("INSERT INTO canciones ( nombre, grupo) VALUES (?,?) ", [datos.nombre, datos.grupo], funcion);
    },

    borrar: function(conexion, id, funcion) {
        conexion.query("DELETE FROM canciones WHERE id =? ", [id], funcion);
    },

    retornarDatosID: function(conexion, id, funcion) {
        conexion.query("SELECT * FROM canciones WHERE id =? ", [id], funcion);

    },

    actualizar: function(conexion, datos, funcion){
        conexion.query("UPDATE canciones SET nombre=?, grupo=? WHERE id=? ", [datos.nombre, datos.grupo, datos.id], funcion);
    }
}