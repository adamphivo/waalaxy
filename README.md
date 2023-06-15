# Waalaxy

```sh
# Install dependencies
npm i

# Start project
# Launch compilation and watch mode for all three packages
npm run start

# Launch compilation and watch for a specific package
npm run start:client
npm run start:server
npm run start:common
```

## Consignes

Nous avons un système de queue FIFO.
La queue est une liste d'action en attente d'execution.Chaque type d'action possède un nombre de crédits d'exécution.
Les crédits d'exécution ont une valeur maximale définie par le développeur.
Ils seront calculés de manière aléatoire entre 80% et 100% cette valeur maximale.
Et sont recalculés pour l'utilisateur si au moins 24 heures sont passées depuis le dernier calcul.Ajouter une action à la queue ne coûte pas de crédit, l'exécution en consomme un.
Via une interface, l'utilisateur peut ajouter autant d'actions qu'il souhaite dans sa queue. (Même s’il n’a plus de crédits).
Toutes les 2 minutes la première action disponible est executée.Exemple :
Je suis dans un système avec 3 types d'action, A, B, C ayant respectivement 20, 20, 30 en valeur maximale de crédits.
L'utilisateur, après le premier calcul, possède en crédits pour les types d'actions A, B, C, dans l'ordre, 18, 20, 29.
Il ajoute 2 actions de type A, puis 5 de B puis 2 de C puis 2 de A.
Il aura donc une queue IN->[A, A, C, C, B, B, B, B, B, A, A]->OUT
2 minutes plus tard, la première action de type A s'exécute et consomme un crédit.
La queue sera donc devenue ->[ A, C, C, B, B, B, B, B, A], et les crédits seront passés à 17, 20, 29 (A, B, C)Objectif :
Tu devras rendre un code mettant en place le système décrit ci-dessus.
Il devra comporter un frontend (React) et un backend (Express, Node).
L'architecture devra être scalable.
Il faudra utiliser TypeScript.
Des tests backends devront être écrits.
Le code devra être exécutable via un npm run start.
Les tests devront être exécutables via un npm run test.
Aucune limite de temps.
Une review du code avec des questions pourra avoir lieu.
L’énoncé peut cacher des subtilités.
