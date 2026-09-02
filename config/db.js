const {Pool} = require("pg")

const pool = new Pool({
    host: process.env.HOST,
    database: process.env.database,
    user: process.env.username,
    password: process.env.password,
    port: parseInt(process.env.port)
})

pool.connect()
.then(() => {
    console.log("La base de donnée est connecté avec succés");
    
})
.catch((error) => {
    console.log("Erreur de connexion de la base de donnée", error);
    
})

module.exports = pool