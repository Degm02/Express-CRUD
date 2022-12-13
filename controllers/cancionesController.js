var conexion=require('../config/conexion');
var cancion=require("../model/cancion");
var borrar= require("fs");


module.exports={

    index:function(req, res) {

        cancion.obtener(conexion, function(err,datos){

            console.log(datos);

            res.render('canciones/index', { title: 'Aplicacion', canciones:datos});
        });

        },

        crear: function (req, res,){
            res.render('canciones/crear');
        },
        
        guardar: function (req, res) {
            console.log(req.body);

            cancion.insertar(conexion, req.body, function(err){
                 res.redirect('/canciones');
            });
        },

        eliminar: function(req, res){
            console.log("Recepcion de datos");
            console.log(req.params.id);

            cancion.borrar(conexion, req.params.id, function(err,){
                res.redirect('/canciones');
            });

        },

        editar: function(req, res){

            cancion.retornarDatosID(conexion, req.params.id, function(err, registros){
                console.log(registros[0]);
                res.render('canciones/editar', {cancion:registros[0]});
            });
        },

        actualizar: function(req, res){

            console.log(req.body.nombre);
            console.log(req.body.grupo);

            if(req.body.nombre){
                cancion.actualizar(conexion, req.body,function(err){
            });
        }

            if(req.body.grupo){
                cancion.actualizar(conexion, req.body,function(err){
            });
            
        }
        res.redirect('/canciones');
    }

}