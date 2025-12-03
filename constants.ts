import { Episode, NavLink } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'INICIO', path: '/' },
  { label: 'CAPÍTULOS', path: '/season' },
  { label: 'CONTACTO', path: '/contact' },
];

export const EPISODES: Episode[] = [
  {
    id: 'ep-1',
    number: 1,
    title: "El Comienzo del Fin",
    description: "Todo cambia en un instante cuando el sistema colapsa. Los protagonistas deben tomar una decisión irreversible.",
    thumbnailUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1925&auto=format&fit=crop", // Dark Cinema
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    duration: "45m"
  },
  {
    id: 'ep-2',
    number: 2,
    title: "Sombras en la Red",
    description: "Una pista digital lleva al equipo a un búnker subterráneo donde nada es lo que parece.",
    thumbnailUrl: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=2070&auto=format&fit=crop", // Dark Monitoring
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    duration: "42m"
  },
  {
    id: 'ep-3',
    number: 3,
    title: "Protocolo Cero",
    description: "Con el tiempo agotándose, se activa el protocolo de emergencia. La lealtad es puesta a prueba.",
    thumbnailUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop", // Tech Dark
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    duration: "48m"
  },
  {
    id: 'ep-4',
    number: 4,
    title: "Renacimiento",
    description: "El desenlace de la primera parte de la temporada. Un sacrificio necesario cambia el rumbo de la historia.",
    thumbnailUrl: "https://images.unsplash.com/photo-1478720568477-152d9b164e63?q=80&w=2098&auto=format&fit=crop", // Cinematic Light
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    duration: "50m"
  }
];