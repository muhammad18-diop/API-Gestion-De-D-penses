#  API de gestion de dépenses

API REST permettant de gérer et suivre les dépenses d'un utilisateur.
Le projet a été développé avec **Node.js, Express.js et PostgreSQL**, en suivant une architecture **MVC**.

##  Fonctionnalités

*  Gestion des utilisateurs
*  Création de dépenses
*  Liste des dépenses
*  Consultation d'une dépense par son ID
*  Modification d'une dépense
*  Suppression d'une dépense
*  Gestion des catégories de dépenses
*  Authentification des utilisateurs
*  Protection des routes avec JWT
* Hashage des mots de passe avec bcrypt
*  Gestion des erreurs
*  Persistance des données avec PostgreSQL

##  Technologies utilisées

* **Node.js**
* **Express.js**
* **PostgreSQL**
* **JWT**
* **bcrypt**
* **JavaScript**
* **REST API**

##  Architecture du projet


src/
 controllers/
 models/
 routes/
 middlewares/
 config/
 server.js


L'application suit une architecture **MVC** afin de séparer les responsabilités entre les différentes parties de l'application.

## Exemples de routes

### Utilisateurs

http
POST /api/auth/register
POST /api/auth/login


### Dépenses

```http
GET    /api/depense
GET    /api/depense/:id
POST   /api/depense
PUT    /api/depense/:id
DELETE /api/depense/:id
```

##  Installation

### 1. Cloner le projet

```bash
git clone <URL_DU_REPOSITORY>
cd <NOM_DU_PROJET>
```

### 2. Installer les dépendances

```bash
npm install
```

### 3. Configurer les variables d'environnement

Créer un fichier `.env` :

```env
PORT=3000
DATABASE_URL=your_database_url
JWT_SECRET=your_secret_key
```

### 4. Démarrer le serveur

En développement :



```bash
nodemon server.js
```

L'API sera accessible sur :

```text
http://localhost:3000
```

##  Objectif du projet

Ce projet a été réalisé afin de mettre en pratique le développement d'une **API REST avec Express.js et PostgreSQL**, notamment :

* la création d'API REST ;
* l'architecture MVC ;
* les opérations CRUD ;
* les requêtes SQL ;
* les relations entre les tables ;
* l'authentification JWT ;
* les middlewares Express ;
* la gestion des erreurs ;
* la connexion entre une application Node.js et PostgreSQL.

##  Améliorations possibles

* Ajouter une validation avancée des données
* Ajouter des statistiques sur les dépenses
* Ajouter une pagination
* Ajouter des filtres par date et catégorie
* Ajouter des tests automatisés
* Ajouter une documentation Swagger
* Ajouter un système de refresh token

##  Auteur

**Mouhamed Diop**

Projet réalisé dans le cadre de mon apprentissage du développement backend avec **Node.js, Express.js et PostgreSQL**.
