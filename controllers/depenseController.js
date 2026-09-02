const depenses = require("../models/depenseModel")

const createDepenses = async (req, res) => {
    try {
        const {montant, description, categorie, date_depense} = req.body
        const user_id = req.user.id

        if(!montant || !description || !categorie || !date_depense){
            return res.status(400).json({message: "Les champs sont obligatoires"})
        }

        const depense = await depenses.createDepense(montant, description, categorie, date_depense, user_id)

        res.status(201).json({message: "Dépenses créer avec succcés", depense: depense})
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Erreur Serveur"})
        
    }
}

const getAllDepense = async (req, res) => {
    try {
        const user_id = req.user.id
        const depense = await depenses.getAllDepense(user_id);
        res.status(200).json({message: "Tous les dépenses", depense: depense})
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Erreur Serveur"})
        
    }
}

const getOneDepense = async (req, res) => {
    try {
        const user_id = req.user.id
        const {id} = req.params

        const depense = await depenses.getOneDepense(id, user_id);

        if(!depense){
            return res.status(404).json({message: "Produit introuvableou vous n'etes pas le proporiétaire"})
        }

        res.status(200).json({message: "Votre dépense est", depense: depense})
    } catch (error) {
        
    }
}

const updateDepense = async (req, res) => {
    try {
        const {montant, description, categorie, date_depense} = req.body
        const {id} = req.params
        const user_id = req.user.id

        if(!montant || !description || !categorie || !date_depense){
            return res.status(400).json({message: "Tous les champs sont obligatoires"})
        }

        const depense = await depenses.updateDepense(montant, description, categorie, date_depense, id, user_id)

        if(!depense){
            return res.status(404).json({message: "Depense introuvable ou vous n'etes pas le propriétaire"})
        }

        res.status(200).json({message: "Depense Modifié avec Succés", depense: depense})
        } catch (error) {
        console.error(error);
        res.status(500).json({message: "Erreur Serveur"})
        
    }
}

const deleteDepense = async (req, res) => {
    try {
        const {id} = req.params
        const user_id = req.user.id
        const result = await depenses.deleteDepense(id, user_id)
        
        
        if(!result){
            return res.status(404).json({message: "Tache introuvable sinin vous n'êtes pas propriétaire"})
        }

        res.status(200).json({message: "Dépense supprimé avec succés", depense: result})
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Erreur Serveur"})
        
    }
}

const getCategorie = async (req, res) => {
    try {
        const {categorie} = req.params
        const user_id = req.user.id

        const result = await depenses.getCategorie(categorie, user_id)

        if(result.length === 0){
            return res.status(404).json({message: "Vous ne disposez pas d'une dépense de ce catégorie"})
        }

        res.status(200).json({message: "Les depenses appartenant a cette catégorie",depense: result })
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Erreur Serveur"})
        
    }
}

const getTotal = async (req, res) => {
    try {
        const user_id = req.user.id

        const result = await depenses.getTotal(user_id)

        res.status(200).json({message: "Le total est de", total: result})
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Erreur Serveur"})
        
    }
}
module.exports = {createDepenses, getAllDepense, getOneDepense, updateDepense, deleteDepense, getCategorie, getTotal}