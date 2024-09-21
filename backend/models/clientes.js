const mysql = require('mysql');
const bcrypt = require('bcrypt');



// Promisify para usar async/await
const query = (sql, params) => {
    return new Promise((resolve, reject) => {
        db.query(sql, params, (err, results) => {
            if (err) {
                return reject(err);
            }
            resolve(results);
        });
    });
};

// Función para crear un nuevo cliente
const createclientes = async (nombre, apellido, documento, contrasena) => { 
    const hashedPassword = await bcrypt.hash(contrasena, 10); // Encriptar la contraseña

    const mysql = 'INSERT INTO registro (nombre, apellido, documento, contrasena) VALUES (?, ?, ?, ?)';
    return query(mysql, [nombre, apellido, documento, hashedPassword]);
};

module.exports = { createclientes };