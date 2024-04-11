
import {
  mancircle1,
  mancircle2,
  mancircle3,
  mancircle4,
  car1,
  car2,
  car3,
  car4,
  car5,
  car6,
  car7,
  vcRu,
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  gameCard,

} from "../assets"


export const THEME_TYPE = {
  DARK: "DARK",
  LIGHT: "LIGHT",
};


const signUpData = [
  {
    title: 'name',
    type: 'text',
    label: 'Full Name',
  },
  {
    title: 'email',
    type: 'email',
    label: 'Email Address',
  },
  {
    title: 'password',
    type: 'password',
    label: 'Password',
  },
  {
    title: 'verify',
    type: 'password',
    label: 'Verify',
  },
]

const signInData = [
  {
    title: 'email',
    type: 'email',
    label: 'Email Address',
  },
  {
    title: 'password',
    type: 'password',
    label: 'Password',
  },
]

const navLinks = [
  {
    id: 'welcome',
    title: 'Welcome',
  },
  {
    id: 'myPublications',
    title: 'My Publications',
  },
  {
    id: 'customerReviews',
    title: 'Customer Reviews',
  },
  {
    id: 'events',
    title: 'Events',
  },
]

const linkUrls = [
  'VC', 'Telegram', 'Habr'
]

const topicTitles = [
  'Lorem ipsum', 'Dolor amet', 'Sit amet', 'Consectetuer', 'Donec quam', 'ullamcorper'
]

const publications = [
  {
    purpleText: 'Lorem ipsum dolor',
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit',
    title: '5 dolor',
    content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit Aenean commodo ligula eget',
  },
  {
    purpleText: 'Lorem ipsum dolor sit',
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit',
    title: 'amet',
    content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit Aenean commodo',
  },
  {
    purpleText: 'Lorem ipsum dolor',
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit Aenean commodo',
    title: '13 sit',
    content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit',
  },
  {
    purpleText: 'опишите задачу',
    text: 'Отправляя форму, вы соглашаетесь  на обработку персоналных',
    title: 'a 7 adipiscing',
    content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit Aenean commodo eget',
  },
]

const publicationUsers = [
  {
    url: mancircle1,
    title: 'mancircle1',
  },
  {
    url: mancircle2,
    title: 'mancircle2',
  },
  {
    url: mancircle3,
    title: 'mancircle3',
  },
  {
    url: mancircle4,
    title: 'mancircle4',
  },
]

const userDescriptioDatas = [
  {
    title: '20+',
    content: ['Lorem', 'Ipsum Dolor'],
  },
  {
    title: '50+',
    content: ['Consectetuer', 'adipiscing'],
  },
  {
    title: '187 + sit',
    content: ['Lorem', 'Ipsum Dolor'],
  },
  {
    title: '5 amet',
    content: ['Consectetuer', 'adipiscing'],
  },
  {
    title: '30+',
    content: ['Lorem', 'Ipsum Dolor'],
  },
]

const projects = [
  {
    date: '1 April 2024',
    siteName: 'VC',
    title: 'Ferrari',
    content: 'Free to use under the Unsplash License',
    imgUrl: car1,
    count: {
      view: '16K',
      favourite: '48',
      message: '16',
      pin: '110',
    }
  },
  {
    date: '2 April 2024',
    siteName: 'VC',
    title: 'Ferrari',
    content: 'Free to use under the Unsplash License',
    imgUrl: car2,
    count: {
      view: '16K',
      favourite: '48',
      message: '16',
      pin: '110',
    }
  },
  {
    date: '3 April 2024',
    siteName: 'VC',
    title: 'Ferrari',
    content: 'Free to use under the Unsplash License',
    imgUrl: car3,
    count: {
      view: '16K',
      favourite: '48',
      message: '16',
      pin: '110',
    }
  },
  {
    date: '4 April 2024',
    siteName: 'VC',
    title: 'Ferrari',
    content: 'Free to use under the Unsplash License',
    imgUrl: car4,
    count: {
      view: '16K',
      favourite: '48',
      message: '16',
      pin: '110',
    }
  },
  // {
  //   date: '5 April 2024',
  //   siteName: 'Amazon',
  //   title: 'Ferrari',
  //   content: 'Free to use under the Unsplash License',
  //   imgUrl: car5,
  //   count: {
  //     view: '16K',
  //     favourite: '48',
  //     message: '16',
  //     pin: '110',
  //   }
  // },
  // {
  //   date: '6 April 2024',
  //   siteName: 'Amazon',
  //   title: 'Ferrari',
  //   content: 'Free to use under the Unsplash License',
  //   imgUrl: car6,
  //   count: {
  //     view: '16K',
  //     favourite: '48',
  //     message: '16',
  //     pin: '110',
  //   }
  // },
  // {
  //   date: '7 April 2024',
  //   siteName: 'YouTube',
  //   title: 'Ferrari',
  //   content: 'Free to use under the Unsplash License',
  //   imgUrl: car7,
  //   count: {
  //     view: '16K',
  //     favourite: '48',
  //     message: '16',
  //     pin: '110',
  //   }
  // },
]

const customerCardData = [
  {
    type: 'video',
    name: 'Makaroba Alexandra',
    job: 'Manager Company Partner',
    content: '',
    url: avatar1,
  },
  {
    type: 'video',
    name: 'Petroba Irina',
    job: 'Director OOO Company',
    content: '',
    url: avatar2,
  },
  {
    type: 'image',
    name: 'Cameron Williamson',
    job: 'Manager Company Partner',
    content: 'Use the scaling classes for larger or smaller rounded corners. Sizes range from 0 to 3, and can be configured by modifying the utilities API.',
    url: avatar3,
  },
  {
    type: 'video',
    name: 'Gregorib Philp',
    job: 'Manager Company Partner',
    content: '',
    url: avatar4,
  },
]

const messageData = [
  {
    title: 'Understanding color theory: the color whell and finding',
    description: 'In the eighteenth century the German philosopher immanuel Kant developed a theory of knowledge in wh',
    date: '27 January 2024',
    time: '10:00',
    location: 'ONLINE SCHOOL',
  },
  {
    title: 'Understanding color theory: the color wheel and finding complementary',
    description: 'Physiological respiration involves the mechanisms that ensure that the composition of the functional',
    date: '12 February 2024',
    time: '19:00',
    location: 'London',
  },
]


const reviewsCardData = [
  {
    content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget',
    imgUrl: '',
    date: '22.02.2024',
  },
  {
    content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget',
    imgUrl: '',
    date: '22.02.2024',
  },
  {
    content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget',
    imgUrl: gameCard,
    date: '22.02.2024',
  },
  {
    content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget',
    imgUrl: '',
    date: '22.02.2024',
  },
  {
    content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget',
    imgUrl: '',
    date: '22.02.2024',
  },
]



export { signUpData, signInData, navLinks, linkUrls, topicTitles, publications, publicationUsers, userDescriptioDatas, projects, customerCardData, messageData, reviewsCardData }