const express = require('express');
const router = express.Router();

// importar el modelo usuario
let userInicioSesion = require('../models/iniciarSesion');
// Agregar una nota
router.post('/nuevo-usuario', async(req, res) => {
    const body = req.body;
    try {
        const usuarioDB = await userInicioSesion.create(body);
        res.status(200).json(usuarioDB);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
});

// Consulta usuario con id

router.get('/user/:id', async(req, res) => { 
    const _id = req.params.id; 
    try { 
        const usuarioDB = await userInicioSesion.findOne({_id}); 
        res.json(usuarioDB); 
    } catch (error) { 
        return res.status(400).json({ mensaje: 'Ocurrio un error', error })
    } 
});

// Get con todos los usuarios 
router.get('/users', async(req, res) => { 
    try { 

        const usuarioDB = await userInicioSesion.find(); 
        res.json(usuarioDB); 
    
    } catch (error) { 
        return res.status(400).json({ mensaje: 'Ocurrio un error', error }) 
    } 

});

// Delete eliminar un usuario
router.delete('/user/:id', async(req, res) => { 
    const _id = req.params.id; 
    try { 
        
        const usuarioDB = await userInicioSesion.findByIdAndDelete({_id}); 
        if(!usuarioDB){ 
            return res.status(400).json({ mensaje: 'No se encontró el id indicado' }) 
        } 
            res.json(usuarioDB); 
    } 
    catch (error) { 
            return res.status(400).json({ mensaje: 'Ocurrio un error', error }) 
    } 
});

// Put actualizar un usuario 
router.put('/user/:id', async(req, res) => { 
    const _id = req.params.id; 
    const body = req.body; 
    try { 
        const usuarioDB = await userInicioSesion.findByIdAndUpdate(_id, body, {new: true}); 
        res.json(usuarioDB); 
    } catch (error) { 
        return res.status(400).json({ mensaje: 'Ocurrio un error', error }) 
    } 
});


// Exportamos la configuración de express app
module.exports = router;