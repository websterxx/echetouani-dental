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
  Layers,
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
    title: 'Traitement Parodontaux',
    description:
      'Protégez vos gencives et prévenez les maladies parodontales grâce à nos soins spécialisés et personnalisés.',
    longDescription:
      "Nos traitements parodontaux visent à prévenir et traiter les maladies des gencives, telles que la gingivite et la parodontite. Grâce à un diagnostic précis et à des techniques avancées de nettoyage sous-gingival, notre équipe aide à réduire l'inflammation, à stopper la perte osseuse et à préserver vos dents naturelles. Nous proposons également un suivi régulier et des conseils personnalisés pour maintenir des gencives saines à long terme.",
    image: 'https://placehold.co/600x400.png',
    imageHint: 'orthodontics braces',
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
    icon: Layers,
    title: 'Onlay Overlay',
    description:
      'Réparez et renforcez vos dents avec nos onlays et overlays sur mesure pour restaurer leur fonction et esthétique.',
    longDescription:
      'Les onlays et overlays sont des restaurations dentaires partielles utilisées pour réparer des dents endommagées ou affaiblies. Elles sont fabriquées sur mesure pour s’adapter parfaitement à la dent, en préservant le maximum de tissu dentaire sain. Ce traitement permet de restaurer la fonction masticatoire, d’améliorer l’esthétique et de prolonger la durée de vie des dents affectées, offrant une solution durable et naturelle.',
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
