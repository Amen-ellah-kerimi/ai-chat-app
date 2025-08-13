# 🤖 Assistant de Chat IA

Un assistant de chat IA prêt pour la production, construit avec Next.js 15 et le SDK IA de Vercel. Propose des réponses en streaming en temps réel, une gestion d'erreurs complète et une interface propre et responsive.

> 🇺🇸 **English version available** : [README.md](README.md)

## ✨ Fonctionnalités

- **🚀 Streaming en Temps Réel** : Réponses IA instantanées avec streaming
- **🎨 Interface Moderne** : Design propre et responsive avec Tailwind CSS
- **⚡ Performance Rapide** : Construit avec Next.js 15 et React 19
- **🛡️ Gestion d'Erreurs** : Gestion d'erreurs complète avec messages conviviaux
- **🔧 Prêt pour la Production** : Optimisé pour le déploiement avec configuration appropriée
- **📱 Compatible Mobile** : Design responsive qui fonctionne sur tous les appareils

## 🚀 Démarrage Rapide

### Prérequis

- Node.js 18+ 
- npm ou yarn
- Clé API OpenAI ([Obtenez-en une ici](https://platform.openai.com/api-keys))

### Installation

1. **Cloner le dépôt**
   ```bash
   git clone <url-de-votre-depot>
   cd ai-chat-app
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Configurer les variables d'environnement**
   ```bash
   cp .env.example .env.local
   ```
   
   Modifiez `.env.local` et ajoutez votre clé API OpenAI :
   ```env
   OPENAI_API_KEY=sk-votre-vraie-cle-api-openai-ici
   ```

4. **Lancer le serveur de développement**
   ```bash
   npm run dev
   ```

5. **Ouvrir votre navigateur**
   Naviguez vers [http://localhost:3000](http://localhost:3000)

## 🔧 Configuration

### Variables d'Environnement

| Variable | Description | Défaut | Requis |
|----------|-------------|---------|---------|
| `OPENAI_API_KEY` | Votre clé API OpenAI | - | ✅ Oui |
| `OPENAI_MODEL` | Modèle IA à utiliser | `gpt-3.5-turbo` | ❌ Non |
| `MAX_TOKENS` | Tokens max par réponse | `500` | ❌ Non |
| `TEMPERATURE` | Créativité des réponses (0-1) | `0.7` | ❌ Non |

### Configuration OpenAI

1. **Créer un Compte OpenAI** : Visitez [OpenAI Platform](https://platform.openai.com)
2. **Générer une Clé API** : Allez sur [Clés API](https://platform.openai.com/api-keys)
3. **Ajouter la Facturation** : Ajoutez un moyen de paiement dans [Paramètres de Facturation](https://platform.openai.com/settings/organization/billing)
4. **Définir les Limites d'Usage** : Configurez des limites d'usage appropriées

## 🚀 Déploiement

### Déployer sur Vercel (Recommandé)

1. **Pousser vers GitHub**
   ```bash
   git add .
   git commit -m "Commit initial"
   git push origin main
   ```

2. **Déployer sur Vercel**
   - Visitez [Vercel](https://vercel.com)
   - Importez votre dépôt GitHub
   - Ajoutez les variables d'environnement :
     - `OPENAI_API_KEY` : Votre clé API OpenAI
   - Déployez !

3. **Domaine Personnalisé** (Optionnel)
   - Ajoutez votre domaine personnalisé dans le tableau de bord Vercel
   - Configurez les paramètres DNS

### Déployer sur d'Autres Plateformes

L'application peut être déployée sur toute plateforme qui supporte Next.js :

- **Netlify** : Utilisez `npm run build` et déployez le dossier `out`
- **Railway** : Connectez votre dépôt GitHub et ajoutez les variables d'environnement
- **DigitalOcean** : Utilisez App Platform avec intégration GitHub automatique

## 🛠️ Développement

### Structure du Projet

```
src/
├── app/
│   ├── api/chat/          # Route API pour la fonctionnalité de chat
│   ├── globals.css        # Styles globaux
│   ├── layout.tsx         # Layout racine
│   └── page.tsx           # Interface de chat principale
├── components/
│   └── Message.tsx        # Composant de message
└── lib/                   # Fonctions utilitaires (le cas échéant)
```

### Scripts

```bash
npm run dev          # Démarrer le serveur de développement
npm run build        # Construire pour la production
npm run start        # Démarrer le serveur de production
npm run lint         # Exécuter ESLint
```

## 🐛 Dépannage

### Problèmes Courants

#### "La clé API OpenAI n'est pas configurée"
- **Solution** : Ajoutez votre clé API à `.env.local` ou aux variables d'environnement Vercel
- **Vérifiez** : Assurez-vous que la clé commence par `sk-`

#### "Vous avez dépassé votre quota actuel"
- **Solution** : Ajoutez des informations de facturation à votre compte OpenAI
- **Vérifiez** : Visitez [Facturation OpenAI](https://platform.openai.com/settings/organization/billing)

#### "Trop de requêtes"
- **Solution** : Attendez un moment et réessayez
- **Vérifiez** : Examinez vos limites d'usage dans le tableau de bord OpenAI

#### Les messages ne sont pas en streaming
- **Solution** : Vérifiez la console du navigateur pour les erreurs
- **Vérifiez** : Vérifiez que la clé API est valide et a un quota suffisant

## 🔒 Sécurité et Performance

- **Protection de la Clé API** : Ne jamais commiter les clés API dans le contrôle de version
- **Variables d'Environnement** : Utilisez `.env.local` pour le développement, tableau de bord Vercel pour la production
- **Streaming** : Streaming de réponses en temps réel pour une meilleure UX
- **Optimisé Mobile** : Design responsive avec interface tactile conviviale

## 📄 Licence

Licence MIT - voir le fichier [LICENSE](LICENSE) pour les détails

---

**Construit avec ❤️ en utilisant Next.js 15, React 19, et le SDK IA de Vercel**
