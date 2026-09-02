const pool = require("../config/db")

const createDepense = async (montant, description, categorie, date_depenses, user_id) => {
    const result = await pool.query("INSERT INTO depenses (montant, description, categorie, date_depenses, user_id) VALUES ($1, $2, $3, $4, $5) RETURNING *", 
        [montant, description, categorie, date_depenses, user_id]
    )

    return result.rows[0]
}

const getAllDepense = async (user_id) => {
    const result = await pool.query ("SELECT  * FROM depenses WHERE user_id = $1",
        [user_id]
    )
   return result.rows 
}

const getOneDepense = async (id, user_id) => {
    const result = await pool.query("SELECT *  FROM depenses WHERE id = $1 AND user_id = $2",
        [id, user_id]
    )

    return result.rows[0]
}

const updateDepense = async ( montant, description, categorie, date_depense, id, user_id) => {
    const result = await pool.query("UPDATE depenses SET montant = $1, description = $2, categorie = $3, date_depenses = $4 WHERE id = $5 AND user_id = $6 RETURNING *",
        [montant, description, categorie, date_depense, id, user_id]
    )

    return result.rows[0]
}

const deleteDepense = async (id, user_id) => {
    const result = await pool.query("DELETE FROM depenses WHERE id = $1 AND user_id = $2",
        [id, user_id]
    )
    return result.rows[0]
}

const getCategorie =  async (categorie, user_id) => {
    const result = await pool.query("SELECT * FROM depenses WHERE categorie = $1 AND user_id = $2",
        [categorie, user_id]
    )

    return result.rows
} 

const getTotal =  async (user_id) => {
    const result = await pool.query("SELECT SUM(montant) AS total FROM depenses WHERE user_id = $1",
        [user_id]
    )

    return result.rows[0]
}
module.exports = {createDepense, getAllDepense, getOneDepense, updateDepense, deleteDepense, getCategorie, getTotal}