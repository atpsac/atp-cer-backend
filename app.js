// Requires

let express = require( 'express' );
let mongoose = require( 'mongoose' );

// Conexión a la base de datos

mongoose.connection.openUri( 'mongodb://localhost:27017/atpdb', ( err, res ) => {
    if ( err ) {
        throw err;
    } else {
        console.log( 'Base de datos Online' );
    }
}
);

// Inicializar variables

let app = express();

// Rutas

app.get( '/', ( req, res ) => {
    res.status( 200 ).json({
        
        ok: true,
        mensaje: 'Peticion realizada correctamente'

    });
} );

// Escuchar peticiones

app.listen( 3000, () => {
    console.log( 'Ejecutandose en el puerto 3000 online' );
});