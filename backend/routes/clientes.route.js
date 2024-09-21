const express = require('express');
const connection = require('../database'); // Asegúrate de que la ruta es correcta
const router = express.Router();

// Método GET: Obtener todos los registro
router.get('/', (req, res) => {
    const query = 'SELECT * FROM registro';
    connection.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Error al obtener registro' });
        }
        res.json({ status: 'API REST funcionando', registro: results });
    });
});

// Método POST: Crear un nuevo cliente
router.post('/', (req, res) => {
    const { nombre, apellido, documento, contrasena } = req.body;

    // Validar datos de entrada
    if (!nombre || !apellido || !documento || !contrasena) {
        return res.status(400).json({ error: 'Faltan datos requeridos' });
    }

    // Hashear la contraseña si es necesario (opcional)
    // const hashedPassword = await bcrypt.hash(contrasena, salt); // Si usas bcrypt

    const query = 'INSERT INTO registro (nombre, apellido, documento, contrasena) VALUES (?, ?, ?, ?)';
    connection.query(query, [nombre, apellido, documento, contrasena], (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Error al guardar el cliente en la base de datos' });
        }
        res.status(201).json({ status: 'Cliente creado', cliente: { id: results.insertId, nombre, apellido, documento } });
    });
});

// Método GET: Obtener un cliente por ID
router.get('/:id', (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM registro WHERE id = ?';

    connection.query(query, [id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Error al obtener el cliente' });
        }
        if (results.length === 0) {
            return res.status(404).json({ message: 'Cliente no encontrado' });
        }
        res.json(results[0]);
    });
});

// Método PUT: Actualizar un cliente por ID
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, apellido, documento, contrasena } = req.body;

    const query = 'UPDATE registro SET nombre = ?, apellido = ?, documento = ?, contrasena = ? WHERE id = ?';
    connection.query(query, [nombre, apellido, documento, contrasena, id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Error al actualizar el cliente' });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ message: 'Cliente no encontrado' });
        }
        res.json({ status: 'Cliente actualizado' });
    });
});

// Método DELETE: Eliminar un cliente por ID
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM registro WHERE id = ?';

    connection.query(query, [id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Error al eliminar el cliente' });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ message: 'Cliente no encontrado' });
        }
        res.json({ status: 'Cliente eliminado' });
    });
});

module.exports = router;