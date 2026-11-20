const express = require('express');
const app = express();
app.use(express.json());

// Route login sécurisée
app.post('/api/login', (req, res) => {
  const { email, password, code } = req.body;
  // ICI : on vérifie dans la BDD avec bcrypt + 2FA
  // Jamais de if(email === "xxx" && password === "123")
  // On renvoie un token JWT si OK
  if(!email || !password) return res.status(400).json({error:'Manquant'});
  // Exemple démo - à remplacer par vraie vérif BDD
  return res.json({ token: 'JWT_TOKEN_ICI', role: 'super_admin' });
});

app.listen(3000, () => console.log('Backend Otaku Legal sur port 3000'));
