const express = require('express');
const path = require('path');
const app = express();
app.use(express.json());

// 1. Servir le frontend
app.use(express.static(path.join(__dirname, '../frontend')));

// 2. API Login (démo sécurisée)
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  if(!email || !password) return res.status(400).json({error:'Manquant'});
  // En prod : vérifier en BDD avec bcrypt + JWT
  return res.json({ success: true, token: 'demo-jwt-token', role: 'super_admin' });
});

// 3. API Paiement
app.post('/api/payer', (req, res) => {
  const { montant, phone, methode } = req.body;
  console.log(`Paiement ${montant} via ${methode} pour ${phone}`);
  return res.json({ success: true, message: 'Demande envoyée, vérifie ton SMS' });
});

// 4. Pour toutes les autres routes, renvoyer index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Otaku Legal sur port ' + PORT));
