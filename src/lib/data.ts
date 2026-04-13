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
      'Maintenez une santé bucco-dentaire optimale grâce à nos contrôles dentaires complets.',
    longDescription:
      "Des examens réguliers sont la pierre angulaire de la santé dentaire. Nos contrôles complets comprennent un nettoyage professionnel pour éliminer la plaque et le tartre, un examen approfondi des dents et des gencives pour détecter les premiers signes de caries ou de maladies des gencives, et des radiographies si nécessaire. Nous vous fournissons également des conseils personnalisés sur l'hygiène bucco-dentaire afin que vous puissiez conserver un sourire éclatant et sain entre les visites.",
    image: '/ControleGeneImg.png',
    imageHint: 'general treatments',
  },
  {
    icon: Smile,
    title: 'Traitement Parodontaux',
    description:
      'Protégez vos gencives et prévenez les maladies parodontales grâce à nos soins spécialisés et personnalisés.',
    longDescription:
      "Nos traitements parodontaux visent à prévenir et traiter les maladies des gencives, telles que la gingivite et la parodontite. Grâce à un diagnostic précis et à des techniques avancées de nettoyage sous-gingival, notre équipe aide à réduire l'inflammation, à stopper la perte osseuse et à préserver vos dents naturelles. Nous proposons également un suivi régulier et des conseils personnalisés pour maintenir des gencives saines à long terme.",
    image: '/TraitementParaImg.png',
    imageHint: 'orthodontics braces',
  },
  {
    icon: ShieldCheck,
    title: 'Soins des Caries',
    description:
      'Traitez efficacement les caries et protégez vos dents grâce à des soins conservateurs modernes et indolores.',
    longDescription:
      'Les caries dentaires sont l’une des affections les plus courantes, mais elles peuvent être traitées efficacement lorsqu’elles sont détectées à temps. Le traitement de la carie consiste à retirer les tissus dentaires atteints puis à restaurer la dent afin de stopper l’évolution de la lésion et préserver la santé de la dent.',
    image: '/CarieImg.png',
    imageHint: 'dental filling procedure',
  },
  {
    icon: Anchor,
    title: 'Implants Dentaires',
    description:
      'Restaurez votre sourire avec des implants dentaires durables et d`apparence naturelle, la référence pour les dents manquantes.',
    longDescription:
      "Les implants dentaires sont la solution la plus avancée et la plus durable pour remplacer les dents manquantes. Un petit tenon en titane est placé chirurgicalement dans l'os de la mâchoire, agissant comme une racine artificielle. Une fois guéri, il est surmonté d'une couronne sur mesure qui ressemble et fonctionne comme une dent naturelle. Les implants vous permettent de manger, de parler et de sourire en toute confiance, tout en préservant l'os de la mâchoire.",
    image: '/ImplantImg.png',
    imageHint: 'dental implant model',
  },
  {
    icon: ShieldCheck,
    title: 'Couronnes Dentaires',
    description:
      'Protégez et restaurez les dents endommagées avec nos couronnes dentaires de haute qualité, fabriquées sur mesure.',
    longDescription:
      "Une couronne dentaire est une coiffe sur mesure qui recouvre toute la dent, restaurant sa forme, sa taille, sa force et son apparence. Les couronnes sont idéales pour protéger une dent affaiblie par la carie, pour restaurer une dent déjà cassée ou pour recouvrir un implant dentaire. Nous utilisons des matériaux de haute qualité comme la porcelaine et la zircone pour créer des couronnes durables et d'apparence naturelle.",
    image: '/CouronneImg.png',
    imageHint: 'dental crown',
  },
  {
    icon: Layers,
    title: 'Onlay Overlay',
    description:
      'Réparez et renforcez vos dents avec nos onlays et overlays sur mesure pour restaurer leur fonction et esthétique.',
    longDescription:
      'Les onlays et overlays sont des restaurations dentaires partielles utilisées pour réparer des dents endommagées ou affaiblies. Elles sont fabriquées sur mesure pour s’adapter parfaitement à la dent, en préservant le maximum de tissu dentaire sain. Ce traitement permet de restaurer la fonction masticatoire, d’améliorer l’esthétique et de prolonger la durée de vie des dents affectées, offrant une solution durable et naturelle.',
    image: '/OnlayImg.png',
    imageHint: 'Onlay Overlay',
  },
];

export const doctors = [
  {
    firstName: 'Marouane',
    lastName: 'Echetouani',
    bio1: 'Chirurgien-dentiste diplômé de la Faculté de Reims et titulaire d’un Diplôme Universitaire d’Implantologie de l’Université Paris XII, il exerce une activité omnipratique orientée vers la réhabilitation globale, notamment dans la prise en charge des pertes de dimension verticale et des usures dentaires.',
    bio2: 'Son activité clinique couvre l’ensemble des soins dentaires, de la prévention aux traitements conservateurs, avec une expertise particulière en chirurgie orale. Il intervient aussi bien pour des actes d’extraction que pour des chirurgies endodontiques.',
    bio3: 'Il pratique également l’implantologie, de la pose d’implants à la gestion des volumes osseux, incluant les greffes osseuses, ainsi que la chirurgie parodontale, dans une approche globale et personnalisée de la prise en charge de ses patients.',
    image: '/MarouaneImage.png',
    dataAiHint: 'professional dentist man',
    email: 'ismailkadiri3@gmail.com',
    doctolibUrl: 'https://www.doctolib.fr/dentiste/chateau-thierry/marouane-echetouani',
  },
  {
    firstName: 'Ahmed',
    lastName: 'Echetouani',
    bio1: 'Formé à la Faculté de Reims puis spécialisé en implantologie à travers un Diplôme Universitaire délivré à Troyes, il exerce une omnipratique moderne, avec une attention particulière portée aux prises en charge complexes nécessitant une réhabilitation globale.',
    bio2: 'Il assure l’ensemble des soins dentaires au quotidien et réalise des actes de chirurgie orale allant de l’extraction aux traitements endodontiques chirurgicaux.',
    bio3: 'Son activité comprend également la chirurgie implantaire, de la mise en place des implants aux techniques de greffes osseuses, ainsi que la chirurgie parodontale, afin de proposer des plans de traitement complets et personnalisés, adaptés à chaque patient.',
    image: '/AhmedImage.png',
    dataAiHint: 'professional dentist portrait',
    email: 'ismailkadiri31@gmail.com',
    doctolibUrl: 'https://www.doctolib.fr/dentiste/chateau-thierry/ahmed-echetouani',
  },
  {
    firstName: 'Mélanie',
    lastName: 'Charron',
    bio1: 'Diplômée de la faculté de Reims et titulaire d’un CES de parodontologie, elle exerce une activité omnipratique avec une orientation particulière vers les restaurations adhésives et les réhabilitations globales à visée esthétique.',
    bio2: 'Son approche vise à restaurer durablement la fonction et l’harmonie du sourire, en tenant compte des attentes esthétiques de chaque patient.',
    bio3: 'Elle prend également en charge les pathologies parodontales, tant dans le cadre des traitements d’assainissement parodontal que par la réalisation d’actes de chirurgie mucogingivale. Cette double approche lui permet de proposer des plans de traitement complets, alliant santé parodontale et exigence esthétique.',
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
      'La meilleure expérience dentaire que j’aie jamais eue. L’équipe est incroyablement professionnelle et attentionnée. Mon sourire n’a jamais été aussi beau !',
    name: 'Claire D.',
  },
  {
    quote:
      'Le Dr Ahmed Echetouani est un vrai expert. Il a transformé mon sourire avec des implants dentaires, et le résultat est au-delà de mes attentes.',
    name: 'Julien M.',
  },
  {
    quote:
      'Mélanie Charron est exceptionnelle ! Douce, à l’écoute et très professionnelle. Elle m’a vraiment rassurée tout au long du soin.',
    name: 'Sophie L.',
  },
  {
    quote:
      'Un cabinet moderne et impeccable. Mélanie Charron a pris le temps de tout m’expliquer, je me suis senti en totale confiance.',
    name: 'Thomas R.',
  },
  {
    quote:
      'Mes enfants adorent venir ici. Le Dr Ahmed est fantastique avec eux, et toute l’équipe est bienveillante.',
    name: 'Nicolas P.',
  },
  {
    quote:
      'Une prise en charge parfaite du début à la fin. Le Dr Marouane Echetouani a été très professionnel, à l’écoute et rassurant.',
    name: 'Fatima Z.',
  },
];

export const cases = [
  {
    title: 'Réhabilitation Esthétique',
    beforeImage: '/ReAvant.png',
    afterImage: '/ReApres.png',
    beforeImageHint: 'yellow teeth',
    afterImageHint: 'white smile',
  },
  {
    title: 'Chirurgie Muccogingivale',
    beforeImage: '/CmAvant.png',
    afterImage: '/CmApres.png',
    beforeImageHint: 'crooked teeth',
    afterImageHint: 'straight teeth',
  },
  {
    title: 'Implant',
    beforeImage: '/ImAvant.png',
    afterImage: '/ImApres.png',
    beforeImageHint: 'missing teeth',
    afterImageHint: 'dental implants',
  },
  {
    title: 'Blanchiment des Dents',
    beforeImage: '/blanchimentAvant.png',
    afterImage: '/blanchimentApres.png',
    beforeImageHint: 'stained teeth',
    afterImageHint: 'bright smile',
  },
];
