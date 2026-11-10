export const company = {
  name: 'Métal Gaïa',
  tagline:
    'Société commerciale industrielle de pièces fabriquées à partir de métal coulé, au service des clients au Canada.',
  mission:
    'Fournir des pièces de qualité équivalentes ou supérieures selon les spécifications des clients à des coûts moindres dans le but d’augmenter leurs bénéfices.',
  leadership:
    'Métal Gaïa est dirigée par Guy Turgeon — une entreprise au service de l’industrie canadienne.',
  video: {
    youtubeId: 'vKHj394io3g',
    title: 'Métal Gaïa — présentation',
    sourceUrl: 'https://www.youtube.com/watch?v=vKHj394io3g',
  },
  addressLines: ['2435 route Lagueux', 'Lévis (Québec) G6J 1Z2'],
  phone: '1 (418) 836-7878',
  phoneHref: 'tel:+14188367878',
  email: 'admin@metalgaia.com',
  people: [
    {
      role: 'Direction',
      name: 'Guy Turgeon',
      detail: 'Direction',
      email: 'guy@metalgaia.com',
      phone: '418-806-3472',
      phoneHref: 'tel:+14188063472',
    },
  ],
}

export const advantages = [
  {
    title: 'Vos bénéfices',
    desc: 'Fournir des pièces de qualité équivalentes ou supérieures selon les spécifications des clients à des coûts moindres dans le but d’augmenter leurs bénéfices.',
  },
  {
    title: 'Expérience',
    desc: "Dévouée et harmonieuse, notre équipe incarne l'excellence forgée par des années de collaboration. Forte d'une compréhension profonde, elle navigue avec aisance à travers les défis, tirant parti de son expertise collective.",
  },
  {
    title: 'Avantages',
    desc: 'Nous sommes votre passerelle vers des solutions sur mesure. Accessibles et réactifs, nous sommes toujours à portée de main pour répondre à vos besoins uniques. Avec nous, la personnalisation est la norme.',
  },
  {
    title: 'Toujours prêts à vous aider',
    desc: 'Une facilité d’approche incroyable et une équipe dédiée pour vous accompagner et trouver la solution idéale à chaque défi industriel.',
  },
]

export const steps = [
  {
    n: 1,
    title: 'Injection de cire',
    desc: "Le processus commence par l'injection de cire dans les moules faits préalablement. Le moule peut être très simple, tout comme il peut être très compliqué, en fonction des quantités souhaitées. Un modèle de cire est nécessaire pour chaque coulée. Ces modèles sont des répliques exactes de la partie requise.",
    image: '/images/step2.png',
  },
  {
    n: 2,
    title: "Assemblage de l'arbre",
    desc: "Enlever les maquettes en cire du moule et les assembler pour former un 'arbre'. Celui-ci est conçu pour améliorer la vitesse de fabrication des pièces, sans en sacrifier la qualité.",
    image: '/images/step3.png',
  },
  {
    n: 3,
    title: "Préparation de l'arbre",
    desc: "L'arbre est maintenant plongé dans une solution de céramique liquide et ensuite recouverte d'une couche de stuc. Ce processus est répété de six à sept fois pour rendre la coquille de céramique suffisament solide pour les étapes à suivre.",
    image: '/images/step4.png',
  },
  {
    n: 4,
    title: 'Nettoyage de la cire',
    desc: "L'arbre recouvert de céramique qui a durcie est désormais placé dans un four pour faire fondre la cire et ainsi laisser le moule de céramique vide avec l'intérieur de celle-ci ayant la forme des pièces voulues.",
    image: '/images/step6.png',
  },
  {
    n: 5,
    title: 'Coulée des métaux',
    desc: 'Une fois la coquille parfaitement vide, les métaux nécessaires pour les pièces sont fondus et ensuite versés dans le moule une fois liquide.',
    image: '/images/step7.png',
  },
  {
    n: 6,
    title: 'Retrait du moule',
    desc: "Une fois le métal redevenu solide, le moule est retiré par vibrations et/ou par nettoyage chimique pour nous laisser l'arbre avec les pièces voulues.",
    image: '/images/step9.png',
  },
  {
    n: 7,
    title: 'Séparation des pièces',
    desc: "Les pièces sont enlevées de l'arbre à l'aide d'une roue de coupure ou une scie à ruban.",
    image: '/images/step8.png',
  },
  {
    n: 8,
    title: 'Nettoyage des pièces',
    desc: "C'est maintenant le temps de la finition. Les résidus de l'arbre rattaché aux pièces ainsi que toute imperfection sont enlevées pour enfin devenir la pièce souhaitée.",
    image: '/images/step10.png',
  },
  {
    n: 9,
    title: 'Expédition',
    desc: 'Une fois le produit finit, il est expédié chez le client en quantité voulue.',
    image: '/images/step6.png',
  },
]

export const finishes = [
  { name: 'Zinc', detail: 'Jaune ou blanc' },
  { name: 'Galvanisé', detail: 'À chaud ou à froid' },
  { name: 'Nitruration', detail: 'Gaz ou bain de sel' },
  { name: 'Peinturé', detail: 'Émail ou poudre' },
  { name: 'Anodisé', detail: '' },
  { name: 'Chromé', detail: '' },
]

export const categories = [
  {
    id: 'dents',
    title: "Dents d'excavatrice",
    blurb: 'Pièces d’usure pour excavatrice — compatibles avec les principales marques.',
  },
  {
    id: 'caoutchouc',
    title: 'Caoutchouc',
    blurb: 'Composants et pièces associées pour usages industriels.',
  },
  {
    id: 'quincaillerie',
    title: 'Quincaillerie',
    blurb: 'Quincaillerie et éléments de fixation adaptés à vos projets.',
  },
  {
    id: 'verins',
    title: 'Vérins pneumatiques',
    blurb: 'Solutions pneumatiques pour l’équipement industriel.',
  },
]

export const products = [
  { name: 'CATERPILLAR (1U3352RC)', image: '/images/product-cat.png', cat: 'dents' },
  { name: 'CATERPILLAR (3G8250)', image: '/images/CATERPILLAR_3G8250_.png', cat: 'dents' },
  { name: 'CATERPILLAR (7T3402RC)', image: '/images/CATERPILLAR_7T3402RC_.png', cat: 'dents' },
  { name: 'HITACHI (EX200)', image: '/images/HITACHI_EX200_.png', cat: 'dents' },
  { name: 'HYUNDAI (R200)', image: '/images/HYUNDAI_R200_.png', cat: 'dents' },
  { name: 'DAEWOO (DH220)', image: '/images/DAEWOO_DH220_.png', cat: 'dents' },
  { name: 'KOBELCO (SK230RC)', image: '/images/KOBELCO_SK230RC_.png', cat: 'dents' },
]

export const projects = [
  { image: '/images/piece1.png', caption: 'Transformation de pièce usinée' },
  { image: '/images/piece2.png', caption: 'Remplacement de composant usé' },
  { image: '/images/piece3.png', caption: 'Support et ferrure industrialisés' },
  { image: '/images/piece4.png', caption: 'Pièce coulée sur mesure' },
  { image: '/images/piece5.png', caption: 'Finition et géométrie optimisées' },
]

export const nav = [
  { to: '/', label: 'Accueil' },
  { to: '/produits', label: 'Produits' },
  { to: '/procede', label: 'Procédé' },
  { to: '/realisations', label: 'Réalisations' },
  { to: '/equipe', label: 'Notre équipe' },
  { to: '/contact', label: 'Contact' },
]
