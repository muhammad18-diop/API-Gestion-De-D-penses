const users = require("../models/userModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const register = async (req, res) => {
   try {
     const {nom, email, password} = req.body

    if(!nom || !email || !password){
        return res.status(400).json({message: "Tout les champs sont obligatoires"})
    }

    const userExiste = await users.findByEmail(email)

    if(userExiste){
        return res.status(409).json({message: "Cet utilisateur existe déja"})
    }

    const passwordHasher = await bcrypt.hash(password, 10)

    const user = await users.register(nom, email, passwordHasher)
    res.status(201).json({message: "Utilisateur crée avec succés", utilisateur: user})
   } catch (error) {
    console.error(error);
    res.status(500).json({message: "Erreur Serveur"})
   }
}

const login = async (req, res) => {
    try {
        const {email, password} = req.body

    if(!email || !password){
        return res.status(400).json({message: "Les champs sont obligatoires"})
    }

    const userExiste = await users.findByEmail(email)

    if(!userExiste){
        return res.status(401).json({message: "Email ou mot de passe incorrecte"})
    }

    const verifierMdp = await bcrypt.compare(password, userExiste.password)

    if(!verifierMdp){
        return res.status(401).json({message: "Email ou mot de passe incorrecte"})
    }

    const token = jwt.sign(
        {
            id: userExiste.id,
            email: userExiste.email,
            role: userExiste.role
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "7d"
        }
    )

    res.status(200).json({message: "Connexion réussi", token: token})
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Erreur Serveur"})
        
    }
}

module.exports = {register, login}