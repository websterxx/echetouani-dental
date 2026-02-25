import type { LucideIcon } from 'lucide-react';
import {
  Ambulance,
  Smile,
  Sparkles,
  Anchor,
  Briefcase,
  ShieldCheck,
  HeartHandshake,
  Accessibility,
} from 'lucide-react';

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  imageHint: string;
};

export const services: Service[] = [
  {
    icon: Ambulance,
    title: 'Contrôles Généraux',
    description:
      'Maintenez une santé bucco-dentaire optimale grâce à nos contrôles dentaires complets et à nos services de nettoyage.',
    longDescription:
      "Des examens réguliers sont la pierre angulaire de la santé dentaire. Nos contrôles complets comprennent un nettoyage professionnel pour éliminer la plaque et le tartre, un examen approfondi des dents et des gencives pour détecter les premiers signes de caries ou de maladies des gencives, et des radiographies si nécessaire. Nous vous fournissons également des conseils personnalisés sur l'hygiène bucco-dentaire afin que vous puissiez conserver un sourire éclatant et sain entre les visites.",
    image: 'https://placehold.co/600x400.png',
    imageHint: 'dental tools',
  },
  {
    icon: Smile,
    title: 'Appareils & Orthodontie',
    description:
      'Obtenez un sourire parfaitement aligné avec nos traitements orthodontiques modernes, y compris les appareils dentaires et les aligneurs transparents.',
    longDescription:
      "Un sourire droit n'est pas seulement une question d'esthétique, c'est aussi une question de santé. Nous proposons une variété de solutions orthodontiques pour les enfants et les adultes, y compris des appareils traditionnels et des aligneurs transparents quasi invisibles. Le Dr Ahmed Echetouani évaluera votre cas et vous recommandera le meilleur plan de traitement pour corriger l'alignement, améliorer votre occlusion et vous donner le sourire confiant que vous méritez les appareils dentaires et les aligneurs transparentsles appareils dentaires et les aligneurs transparentsles appareils dentaires et les aligneurs transparentsles appareils dentaires et les aligneurs transparentsles appareils dentaires et les aligneurs transparentsles appareils dentaires et les aligneurs transparentsles appareils dentaires et les aligneurs transparentsles appareils dentaires et les aligneurs transparentsles appareils dentaires et les aligneurs transparentsles appareils dentaires et les aligneurs transparentsles appareils dentaires et les aligneurs transparents.",
    image: 'https://placehold.co/600x400.png',
    imageHint: 'orthodontics braces',
  },
  {
    icon: Anchor,
    title: 'Implants Dentaires',
    description:
      'Restaurez votre sourire avec des implants dentaires durables et d`apparence naturelle, la référence pour les dents manquantes.',
    longDescription:
      "Les implants dentaires sont la solution la plus avancée et la plus durable pour remplacer les dents manquantes. Un petit tenon en titane est placé chirurgicalement dans l'os de la mâchoire, agissant comme une racine artificielle. Une fois guéri, il est surmonté d'une couronne sur mesure qui ressemble et fonctionne comme une dent naturelle. Les implants vous permettent de manger, de parler et de sourire en toute confiance, tout en préservant l'os de la mâchoire.",
    image: 'https://placehold.co/600x400.png',
    imageHint: 'dental implant model',
  },
  {
    icon: Sparkles,
    title: 'Blanchiment des Dents',
    description:
      'Éclaircissez votre sourire avec nos services de blanchiment des dents professionnels pour un look éblouissant et confiant.',
    longDescription:
      "Avec le temps, le café, le thé et d'autres aliments peuvent tacher vos dents. Notre traitement de blanchiment professionnel est un moyen sûr et efficace d'éliminer ces taches et d'éclaircir considérablement votre sourire. Nous proposons des options de blanchiment en cabinet pour des résultats immédiats ainsi que des kits à emporter pour un entretien pratique à domicile, vous aidant à obtenir un sourire visiblement plus blanc.",
    image: 'https://placehold.co/600x400.png',
    imageHint: 'teeth whitening chart',
  },
  {
    icon: ShieldCheck,
    title: 'Couronnes Dentaires',
    description:
      'Protégez et restaurez les dents endommagées avec nos couronnes dentaires de haute qualité, fabriquées sur mesure.',
    longDescription:
      "Une couronne dentaire est une coiffe sur mesure qui recouvre toute la dent, restaurant sa forme, sa taille, sa force et son apparence. Les couronnes sont idéales pour protéger une dent affaiblie par la carie, pour restaurer une dent déjà cassée ou pour recouvrir un implant dentaire. Nous utilisons des matériaux de haute qualité comme la porcelaine et la zircone pour créer des couronnes durables et d'apparence naturelle.",
    image: 'https://placehold.co/600x400.png',
    imageHint: 'dental crown',
  },
  {
    icon: HeartHandshake,
    title: 'Dentisterie Pédiatrique',
    description:
      'Des soins dentaires doux et amicaux pour les enfants afin d`assurer une vie de sourires sains.',
    longDescription:
      "Nous nous engageons à offrir une expérience dentaire positive à nos plus jeunes patients. Le Dr Ahmed Echetouani et notre équipe sont spécialement formés pour fournir des soins doux et préventifs aux enfants, des tout-petits aux adolescents. Nous nous concentrons sur l'éducation, la prévention des caries et la création d'un environnement amusant et sans stress pour jeter les bases d'une vie de bonne santé bucco-dentaire.",
    image: 'https://placehold.co/600x400.png',
    imageHint: 'child dentist',
  },
];

export const doctors = [
  {
    firstName: 'Marouane',
    lastName: 'Echetouani',
    bio: 'Le Dr. Marouane est un dentiste compatissant et hautement qualifié avec plus de 15 ans d`expérience en dentisterie esthétique et restauratrice. Il se consacre à fournir des soins personnalisés et à créer de beaux sourires sains pour ses patients.',
    image: '/MarouaneImage.png',
    dataAiHint: 'professional dentist man',
    email: 'ismailkadiri3@gmail.com',
    doctolibUrl: 'https://www.doctolib.fr/dentiste/chateau-thierry/marouane-echetouani',
  },
  {
    firstName: 'Ahmed',
    lastName: 'Echetouani',
    bio: 'Le Dr. Ahmed est spécialisé en orthodontie et en dentisterie pédiatrique. Avec une approche douce et une passion pour la création d`expériences dentaires positives, il aide les patients de tous âges à obtenir le sourire dont ils ont toujours rêvé.',
    image: '/AhmedImage.png',
    dataAiHint: 'professional dentist portrait',
    email: 'ismailkadiri31@gmail.com',
    doctolibUrl: 'https://www.doctolib.fr/dentiste/chateau-thierry/ahmed-echetouani',
  },
  {
    firstName: 'Mélanie',
    lastName: 'Charon',
    bio: 'Le Dr. Mélanie est spécialisé en orthodontie et en dentisterie pédiatrique. Avec une approche douce et une passion pour la création d`expériences dentaires positives, il aide les patients de tous âges à obtenir le sourire dont ils ont toujours rêvé.',
    image: '/MelanieImage.png',
    dataAiHint: 'professional dentist portrait',
    email: 'ismailkadiri32@gmail.com',
    doctolibUrl: 'https://www.doctolib.fr/dentiste/vincennes/melanie-charron',
  },
];

export const values = [
  {
    icon: Briefcase,
    title: 'Professionnalisme',
    description:
      'Nous adhérons aux normes les plus élevées de conduite professionnelle et d`excellence clinique.',
  },
  {
    icon: ShieldCheck,
    title: 'Hygiène',
    description:
      'Votre sécurité est notre priorité. Nous maintenons des protocoles de stérilisation et d`hygiène stricts.',
  },
  {
    icon: HeartHandshake,
    title: 'Soins Personnalisés',
    description:
      'Chaque patient est unique. Nous proposons des plans de traitement sur mesure pour répondre à vos besoins individuels.',
  },
  {
    icon: Accessibility,
    title: 'Accessibilité',
    description:
      'Notre cabinet est équipé pour accueillir les personnes à mobilité réduite afin de garantir l`accès aux soins pour tous.',
  },
];

export const testimonials = [
  {
    quote:
      "La meilleure expérience dentaire que j'aie jamais eue. L'équipe est incroyablement professionnelle et attentionne. Mon sourire n'a jamais été aussi beau !",
    name: 'Amina K.',
    location: 'Paris, France',
  },
  {
    quote:
      'Les docteurs Echetouani sont de vrais artistes. Ils ont transformé mon sourire avec des implants dentaires, et je ne pourrais pas être plus heureux du résultat.',
    name: 'Youssef B.',
    location: 'Lyon, France',
  },
  {
    quote:
      'Un cabinet magnifique et propre. Le personnel m`a mis à l`aise dès mon arrivée. Fortement recommandé !',
    name: 'Fatima Z.',
    location: 'Marseille, France',
  },
  {
    quote:
      'Mes enfants ont hâte de leurs rendez-vous chez le dentiste ici. Le Dr. Ahmed est fantastique avec les enfants !',
    name: 'David L.',
    location: 'Paris, France',
  },
];

export const cases = [
  {
    title: 'Réhabilitation Esthétique',
    description:
      'Relooking complet du sourire à l`aide de facettes en porcelaine sur mesure pour corriger la décoloration et le mauvais alignement.',
    beforeImage: '/ReAvant.png',
    afterImage: '/ReApres.png',
    beforeImageHint: 'yellow teeth',
    afterImageHint: 'white smile',
  },
  {
    title: 'Chirurgie Muccogingivale',
    description:
      'Six mois de traitement orthodontique pour redresser les dents et améliorer la fonction de morsure.',
    beforeImage: '/CmAvant.png',
    afterImage: '/CmApres.png',
    beforeImageHint: 'crooked teeth',
    afterImageHint: 'straight teeth',
  },
  {
    title: 'Implant',
    description:
      'Restauration d`une arcade complète avec des implants dentaires, offrant une solution stable et esthétique.',
    beforeImage: '/ImAvant.png',
    afterImage: '/ImApres.png',
    beforeImageHint: 'missing teeth',
    afterImageHint: 'dental implants',
  },
  {
    title: 'Blanchiment des Dents',
    description:
      'Traitement de blanchiment des dents professionnel en cabinet pour un sourire considérablement plus éclatant.',
    beforeImage: '/blanchimentAvant.png',
    afterImage: '/blanchimentApres.png',
    beforeImageHint: 'stained teeth',
    afterImageHint: 'bright smile',
  },
];
