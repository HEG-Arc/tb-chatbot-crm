## Middleware
_**Cette démonstration repose sur l'utilisation du framework Botkit. Pour configurer à bien ce middleware il nest nécessaire d'avoir récupéré certaines informations d'authentification au près des services tiers qui sont utilisé**_

### Deploiement middleware
1) Si ce n'est pas déjà fait cloner le dépôt du projet
```bash
git clone https://gitlab.com/JoCharlet/TB-ChatBot-CRM.git
```
2) Aller dans le dossier `middleware`
```bash
cd middleware
```

3) Installer toutes les dépendances
```bash
mpm install
```

4) Configurer le fichier `.env` avec les valeurs d'authenficications des différents services tiers

**Valeurs de connexion au schéma mySQL déployé:**
```bash
# SQL
SQL_host=your_SQL_hostname
SQL_user=your_SQL_user
SQL_password=your_SQL_password
```

**Valeurs de connexion à la plateforme IBM WATSON Assistant:**
```bash
#WATSON
ASSISTANT_URL=https://gateway.watsonplatform.net/assistant/api
ASSISTANT_USERNAME=your_IBMBluemix_username
ASSISTANT_PASSWORD=your_IBMBluemix_password
WORKSPACE_ID=your_IBMBluemix_workspace_id
```

**Valeurs de connexion à Microsoft pour accéder au canal de communication Skype:**
```bash
#Microsoft Bot Info
MICROSOFT_APP_ID=your_Microsoft_app_id
MICROSOFT_APP_PASSWORD=your_Microsoft_app_password
```

**Quel type de chat bot est utilisé dans ce projet:**
```bash
#WHAT-TO-USE
USE_SKYPE=true
```

4) Démarrer le serveur node
```bash
node server.js
```

5) Tester le chat bot à travers Skype. Il devrait être à même de répondre à un "bonjour" et effectuer une recherche dans la base de donnée sur une question du type "Affiche moi la liste des entreprises"

---
[Jonathan Charlet](mailto:jonathan.charlet@bluewin.ch) 4IGTPart - 2018
