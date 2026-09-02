const express = require("express");
const router = express.Router();
const { authMiddleware } = require("../middleware/middleware");
const { createDepenses, getAllDepense, getOneDepense, updateDepense, deleteDepense, getCategorie, getTotal } = require("../controllers/depenseController");


router.post("/depense", authMiddleware, createDepenses);
router.get("/depense", authMiddleware, getAllDepense)
router.get("/depense/total", authMiddleware, getTotal)
router.get("/depense/:id", authMiddleware, getOneDepense)
router.get("/depense/categorie/:categorie", authMiddleware, getCategorie)
router.put("/depense/:id", authMiddleware, updateDepense )
router.delete("/depense/:id", authMiddleware, deleteDepense )

module.exports = router;