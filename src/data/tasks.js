export default [
  {
    id: 1,
    label: 'Sortir marcher',
    time: 1000, // un temps en seconde
    timer: 1000, // un temps en seconde restant
    chrono: false, // false pour arrêter, true pour en cours
    interval: -1, // stockage de l'existance d'un interval (-1, s'il n'existe pas)
    description: "bar de progression (pê en forme d'horloge)" /* TODO :  video a voir 'https://www.youtube.com/watch?v=MdKvSJOWm_U' */,
    done: false, // si la focntion est finie
    taskWIP: false,
  },
  {
    id: 13,
    label: 'Coder !!!',
    time: 12318, // un temps en seconde
    timer: 12318, // un temps en seconde restant
    chrono: false, // false pour arrêter, true pour en cours
    interval: -1,
    description: "bar de progression (pê en forme d'horloge)",
    done: false,
    taskWIP: false,
  },
  {
    id: 4,
    label: 'Payer Nounou',
    time: 900, // un temps en seconde
    timer: 900, // un temps en seconde restant
    chrono: false, // false pour arrêter, true pour en cours
    interval: -1,
    description: "bar de progression (pê en forme d'horloge)",
    done: true,
    taskWIP: false,
  },
  {
    id: 8,
    label: 'Prévoir un resto',
    time: 600, // un temps en seconde
    timer: 600, // un temps en seconde restant
    chrono: false, // false pour arrêter, true pour en cours
    interval: -1,
    description: 'Toutes les 2 semaines',
    done: true,
    taskWIP: false,
  },
  {
    id: 10,
    label: 'Prevoir nos prochaine vacance',
    time: 20654, // un temps en seconde
    timer: 20654, // un temps en seconde restant
    chrono: false, // false pour arrêter, true pour en cours
    interval: -1,
    description: 'Toutes les 3 mois',
    done: false,
    taskWIP: false,
  },
  {
    id: 2,
    label: 'test',
    time: 3, // un temps en seconde
    timer: 3, // un temps en seconde restant
    chrono: false, // false pour arrêter, true pour en cours
    interval: -1,
    description: 'Toutes les 3 mois',
    done: false,
    taskWIP: false,
  },
];
