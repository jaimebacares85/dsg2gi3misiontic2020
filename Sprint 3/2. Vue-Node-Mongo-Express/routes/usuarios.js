import express from 'express'; 
const router = express.Router(); 

// importar el modelo usuarios 
import Usuarios from '../models/usuarios'; 

// Agregar un registro  
router.post('/nuevo-registro', async(req, res) => { 
    const body = req.body; 
    try { 
        const usuariosDB = await Usuarios.create(body); 
        res.status(200).json(usuariosDB); 
    } catch (error) { 
        return res.status(500).json({ 
            mensaje: 'Ocurrio un error', 
            error }) 
        } 
    }); 

// Get con parámetros 
router.get('/usuarios/:id', async(req, res) => { 
    const _id = req.params.id; 
    try { 
        const usuariosDB = await Usuarios.findOne({_id}); 
        res.json(usuariosDB); 
    } catch (error) { 
        return res.status(400).json({ 
            mensaje: 'Ocurrio un error', 
            error 
        })
    } 
});

// Get con todos los documentos 
router.get('/usuarios', async(req, res) => { 
    try { 
        const usuariosDB = await Usuarios.find(); 
        res.json(usuariosDB); 
    } catch (error) { 
        return res.status(400).json({ 
            mensaje: 'Ocurrio un error', 
            error 
        }) 
    } 
});

// Delete eliminar un usuarios 
router.delete('/usuarios/:id', async(req, res) => { 
    const _id = req.params.id; 
    try { 
        const usuariosDB = await Usuarios.findByIdAndDelete({_id}); 
        if(!usuariosDB){ 
            return res.status(400).json({ 
                mensaje: 'No se encontró el id indicado', 
                error 
            }) 
        } 
        res.json(usuariosDB); 
    } catch (error) { 
        return res.status(400).json({ 
            mensaje: 'Ocurrio un error', 
            error 
        }) 
    } 
});


// Put actualizar un usuarios 
router.put('/usuarios/:id', async(req, res) => { 
    const _id = req.params.id; 
    const body = req.body; 
    try { 
        const usuariosDB = await Usuarios.findByIdAndUpdate(
            _id, 
            body, 
            {new: true}); 
        res.json(usuariosDB); 
        }   catch (error) { 
            return res.status(400).json({ 
                mensaje: 'Ocurrio un error', 
                error 
            }) 
        } 
    });

// Exportamos la configuración de express app 
module.exports = router;