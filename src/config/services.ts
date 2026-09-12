export interface ServiceInfo {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  services: string[];
  image: string;
  imageAlt: string;
  route: string;
}

export const services: ServiceInfo[] = [
  {
    slug: 'gas',
    title: 'Gas',
    shortDescription:
      'Installation, Wartung, Reparatur und technische Überprüfung von Gasanlagen.',
    description:
      'Arbeiten an Gasanlagen erfordern technisches Verständnis, Sorgfalt und präzise Ausführung.',
    services: [
      'Gasinstallationen',
      'Gasleitungen',
      'Gasgeräte',
      'Gasthermen',
      'Wartung',
      'Reparatur',
      'Störungssuche',
      'Dichtheitsprüfungen',
      'Technische Überprüfung',
    ],
    image:
      'https://images.pexels.com/photos/7859953/pexels-photo-7859953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    imageAlt: 'Techniker wartet eine Gastherme mit präzisen Instrumenten',
    route: '/gas',
  },
  {
    slug: 'sanitaer',
    title: 'Wasser / Sanitär',
    shortDescription:
      'Professionelle Sanitär- und Trinkwasserinstallationen für Wohn- und Gewerbeobjekte.',
    description:
      'Von der Trinkwasserinstallation bis zur Reparatur von Armaturen und Sanitäranlagen stehen fachgerechte Ausführung und zuverlässige Technik im Mittelpunkt.',
    services: [
      'Trinkwasserinstallationen',
      'Rohrleitungen',
      'Armaturen',
      'WC-Anlagen',
      'Waschtische',
      'Küchenanschlüsse',
      'Badezimmertechnik',
      'Reparaturen',
      'Undichtheiten',
      'Gebrechensbehebung',
      'Sanitärinstallationen',
    ],
    image:
      'https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    imageAlt: 'Installateur montiert Stahlrohre mit fachgerechten Werkzeugen',
    route: '/sanitaer',
  },
  {
    slug: 'heizung',
    title: 'Heizung',
    shortDescription:
      'Service, Wartung und technische Lösungen rund um moderne Heizungs- und Wärmetechnik.',
    description:
      'Eine zuverlässig funktionierende Heizungsanlage ist ein wesentlicher Bestbestandteil moderner Gebäudetechnik.',
    services: [
      'Heizungsanlagen',
      'Gasthermen',
      'Fernwärmeanlagen',
      'Wohnungsstationen',
      'Heizzentralen',
      'Pumpentechnik',
      'Heizkörper',
      'Regelungstechnik',
      'Wartung',
      'Reparatur',
      'Fehlerdiagnose',
      'Störungsbehebung',
    ],
    image:
      'https://images.pexels.com/photos/34938442/pexels-photo-34938442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    imageAlt: 'Techniker inspiziert und repariert eine Heizungsanlage',
    route: '/heizung',
  },
  {
    slug: 'service',
    title: 'Service & Wartung',
    shortDescription:
      'Systematische Fehlersuche, Wartung und Reparatur für einen zuverlässigen Anlagenbetrieb.',
    description:
      'Professioneller Service beginnt mit einer systematischen Fehlerdiagnose und endet mit einer fachgerechten Lösung.',
    services: [
      'Wartungen',
      'Inspektionen',
      'Kundendienst',
      'Reparaturen',
      'Fehlerdiagnose',
      'Störungsbehebung',
      'Technische Überprüfungen',
      'Dokumentation',
      'Austausch defekter Bauteile',
    ],
    image:
      'https://images.pexels.com/photos/7937300/pexels-photo-7937300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    imageAlt: 'Industrielle Rohrleitungsanlage mit Druckmanometer',
    route: '/service',
  },
];

export const heroImage =
  'https://images.pexels.com/photos/7937300/pexels-photo-7937300.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1';

export const heroImageAlt =
  'Modernes Rohrleitungssystem mit Druckmanometer in einem Technikraum';
