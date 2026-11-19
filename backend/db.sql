CREATE TABLE users (id SERIAL PRIMARY KEY, email VARCHAR UNIQUE, password_hash TEXT, role VARCHAR DEFAULT 'user', plan VARCHAR DEFAULT 'gratuit');
CREATE TABLE animes (id SERIAL PRIMARY KEY, titre VARCHAR, licence VARCHAR, createur_id INT, url_video TEXT, is_legal BOOLEAN DEFAULT true);
CREATE TABLE abonnements (id SERIAL PRIMARY KEY, user_id INT, type VARCHAR, montant_fcfa INT, debut DATE, fin DATE, statut VARCHAR);
