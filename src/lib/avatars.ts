import type { Language, Avatar } from './types'

export const AVATARS: Record<Language, Avatar[]> = {
  spanish: [
    {
      name: 'Diego',
      imageUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=diego',
      difficulty: 'beginner',
      description: 'Diego enjoys playing football during weekends.',
    },
    {
      name: 'Lola',
      imageUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=lola',
      difficulty: 'intermediate',
      description: 'Lola loves painting and visits the art gallery often.',
    },
    {
      name: 'Juan',
      imageUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=juan',
      difficulty: 'advanced',
      description: 'Juan is a culinary enthusiast who loves exploring new cuisines.',
    },
  ],
  japanese: [
    {
      name: 'Haruto',
      imageUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=haruto',
      difficulty: 'beginner',
      description:
        'Haruto enjoys watching anime and will often reference them during lessons!',
    },
    {
      name: 'Yui',
      imageUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=yui',
      difficulty: 'intermediate',
      description: 'Yui loves playing the piano and sometimes composes her own music.',
    },
    {
      name: 'Daichi',
      imageUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=daichi',
      difficulty: 'advanced',
      description:
        'Daichi is a nature enthusiast and often goes hiking during his free time.',
    },
  ],
  french: [
    {
      name: 'Lucas',
      imageUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=lucas',
      difficulty: 'beginner',
      description:
        'Lucas is a cyclist and frequently explores the French countryside on his bike.',
    },
    {
      name: 'Amelie',
      imageUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=amelie',
      difficulty: 'intermediate',
      description:
        'Amelie, a gourmet chef, loves to explore the nuances of French cuisine.',
    },
    {
      name: 'Pierre',
      imageUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=pierre',
      difficulty: 'advanced',
      description:
        'Pierre, an avid historian, enjoys discussing French history and culture.',
    },
  ],
  german: [
    {
      name: 'Hans',
      imageUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=hans',
      difficulty: 'beginner',
      description:
        'Hans loves reading about history and often shares interesting facts.',
    },
    {
      name: 'Sofia',
      imageUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sofia',
      difficulty: 'intermediate',
      description: 'Sofia is an animal lover and volunteers at local shelters.',
    },
    {
      name: 'Lukas',
      imageUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=lukas',
      difficulty: 'advanced',
      description: 'Lukas enjoys playing chess and attends local tournaments.',
    },
  ],
  dutch: [
    {
      name: 'Finn',
      imageUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=finn',
      difficulty: 'beginner',
      description: 'Finn loves sailing and often spends weekends on his boat.',
    },
    {
      name: 'Lotte',
      imageUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=lotte',
      difficulty: 'intermediate',
      description: 'Lotte, a librarian, always has a new book recommendation ready.',
    },
    {
      name: 'Bram',
      imageUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=bram',
      difficulty: 'advanced',
      description: 'Bram, an ecologist, enjoys exploring the Dutch countryside.',
    },
  ],
  italian: [
    {
      name: 'Giovanni',
      imageUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=giovanni',
      difficulty: 'beginner',
      description: 'Giovanni is a food blogger who explores various Italian cuisines.',
    },
    {
      name: 'Maria',
      imageUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=maria',
      difficulty: 'intermediate',
      description:
        'Maria, a fashion designer, finds inspiration in Italian culture and style.',
    },
    {
      name: 'Luca',
      imageUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=luca',
      difficulty: 'advanced',
      description: 'Luca, a historian, loves uncovering the secrets of Ancient Rome.',
    },
  ],
  portuguese: [
    {
      name: 'Miguel',
      imageUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=miguel',
      difficulty: 'beginner',
      description: 'Miguel loves playing the guitar and enjoys Fado music.',
    },
    {
      name: 'Ana',
      imageUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ana',
      difficulty: 'intermediate',
      description:
        'Ana, a botanist, loves exploring the rich biodiversity of the Amazon.',
    },
    {
      name: 'Carlos',
      imageUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=carlos',
      difficulty: 'advanced',
      description:
        'Carlos, a football coach, enjoys discussing tactics and game strategies.',
    },
  ],
  russian: [
    {
      name: 'Anastasia',
      imageUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=anastasia',
      difficulty: 'beginner',
      description: 'Anastasia enjoys ballet and often attends performances.',
    },
    {
      name: 'Nikolai',
      imageUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=nikolai',
      difficulty: 'intermediate',
      description:
        'Nikolai, an engineer, is fascinated by Russian architecture and design.',
    },
    {
      name: 'Elena',
      imageUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=elena',
      difficulty: 'advanced',
      description: 'Elena, an art critic, loves exploring Russian art and literature.',
    },
  ],
  esperanto: [
    {
      name: 'Zamenhof',
      imageUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=zamenhof',
      difficulty: 'beginner',
      description:
        'Zamenhof is passionate about promoting global communication and unity.',
    },
    {
      name: 'Klara',
      imageUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=klara',
      difficulty: 'intermediate',
      description:
        'Klara loves travelling and uses Esperanto to make friends globally.',
    },
    {
      name: 'Leo',
      imageUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=leo',
      difficulty: 'advanced',
      description:
        'Leo, a linguist, enjoys discussing the grammatical simplicity of Esperanto.',
    },
  ],
  korean: [
    {
      name: 'Minji',
      imageUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=minji',
      difficulty: 'beginner',
      description: 'Minji is passionate about K-dramas and enjoys discussing them.',
    },
    {
      name: 'Joon',
      imageUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=joon',
      difficulty: 'intermediate',
      description:
        'Joon loves hiking and often organizes trips to explore South Korea’s mountains.',
    },
    {
      name: 'Hana',
      imageUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=hana',
      difficulty: 'advanced',
      description:
        'Hana, a chef, loves exploring the varied and rich flavors of Korean cuisine.',
    },
  ],
  mandarin: [
    {
      name: 'Li',
      imageUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=li',
      difficulty: 'beginner',
      description:
        'Li practices Tai Chi and enjoys its meditative and calming effects.',
    },
    {
      name: 'Xia',
      imageUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=xia',
      difficulty: 'intermediate',
      description:
        'Xia, an avid reader, often discusses Chinese literature and poetry.',
    },
    {
      name: 'Jun',
      imageUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=jun',
      difficulty: 'advanced',
      description:
        'Jun, an artist, finds inspiration in the rich history and culture of China.',
    },
  ],
  arabic: [
    {
      name: 'Yasmin',
      imageUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=yasmin',
      difficulty: 'beginner',
      description:
        'Yasmin is fascinated by astronomy and enjoys stargazing in the desert.',
    },
    {
      name: 'Omar',
      imageUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=omar',
      difficulty: 'intermediate',
      description:
        'Omar, a photographer, is passionate about capturing the beauty of the Middle East.',
    },
    {
      name: 'Amina',
      imageUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=amina',
      difficulty: 'advanced',
      description:
        'Amina, a researcher, enjoys exploring the rich history and diversity of Arabic nations.',
    },
  ],
}
