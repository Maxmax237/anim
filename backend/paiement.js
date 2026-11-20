const express = require('express');
const router = express.Router();

// POST /api/payer
router.post('/api/payer', async (req, res) => {
  const { montant, phone, methode } = req.body;
  // ICI : tu branches la VRAIE API Orange Money ou MTN MoMo
  // Pour l'instant, on simule pour tester
  console.log(`Demande paiement ${montant} FCFA via ${methode} pour ${phone}`);

  // Exemple logique :
  // 1. Créer abonnement en BDD
  // 2. Appeler API Orange Money -> envoie SMS au user
  // 3. Quand user confirme, on active son plan
  // 4. Répartition : 70% créateur / 30% plateforme si c'est un achat créateur

  return res.json({ success: true, message: 'Demande envoyée, en attente de confirmation SMS' });
});

module.exports = router;
