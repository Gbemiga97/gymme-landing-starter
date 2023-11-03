import { images } from ".";

export const header = {
  logo: Logo,
  btnLoginText: 'Log in',
  btnSignupText: 'Sign Up',
};

export const nav = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/' },
  { name: 'Workouts', href: '/' },
  { name: 'Pricing', href: '/' },
  { name: 'Community', href: '/' },
  { name: 'FAQ', href: '/' },
];

export const banner = {
  titlePart1: 'Get the best part of your day',
  titlePart2: '– you fit here.',
  subtitle:
    'We provide serious fitness but within a fun and friendly, safe space.',
  textBtn: 'Join Now',
  img: '',
};

export const about = {
  icon: images.UsersIcn,
  title: 'Our misson',
  subtitle1:
    'We are distinguished by our unsurpassed motivating atmosphere, knowledgeable staff, and premier exercise equipment, which supports our members in meeting their individual fitness goals.',
  subtitle2:
    'The strength of our heart-felt identity is utilized to inspire every person that steps foot into our gyms to better themselves.',
  link: 'Join Now',
};

export const workouts = {
  icon: images.CalendarIcn,
  title: 'Training programs',
  programs: [
    {
      image: images.ResistanceImg,
      name: 'Resistance',
    },
    {
      image: images.BoxingImg,
      name: 'Boxing',
    },
    {
      image: images.BodyPumpImg,
      name: 'Body Pump',
    },
    {
      image: images.YogaImg,
      name: 'Yoga',
    },
    {
      image: images.FullBodyImg,
      name: 'Full Body',
    },
    {
      image: images.FitnessImg,
      name: 'Fitness',
    },
    {
      image: images.BattleRopeImg,
      name: 'Battle Rope',
    },
  ],
};

export const pricing = {
  icon: images.PriceIcn,
  title: 'Pricing plan',
  plans: [
    {
      name: 'Basic',
      price: '20',
      list: [
        { name: 'unlimited gym access' },
        { name: '1 training programs' },
        { name: 'free fitness consultation' },
      ],
      delay: 600,
    },
    {
      name: 'Premium',
      price: '35',
      list: [
        { name: 'unlimited gym access' },
        { name: '5 training programs' },
        { name: 'free fitness consultation' },
        { name: 'personal trainer' },
      ],
      delay: 800,
    },
    {
      name: 'Elite',
      price: '49',
      list: [
        { name: 'unlimited gym access' },
        { name: 'all training programs' },
        { name: 'free fitness consultation' },
        { name: 'personal trainer' },
        { name: '50% off drinks' },
      ],
      delay: 1000,
    },
  ],
};

export const community = {
  icon: images.CommunityIcn,
  title: 'Community',
  testimonials: [
    {
      image: images.CommunityImg1,
      name: 'Mark A.',
      message:
        '“Great location, great price and great, helpful people. What to want more?”',
    },
    {
      image: images.CommunityImg2,
      name: 'Lauren K.',
      message:
        '“Gymme changed my life. Not only physically but mentally as well. I’m a better mother, and all around better human being because of this gym.”',
    },
    {
      image: images.CommunityImg3,
      name: 'Jhon D.',
      message:
        '“Love these workouts! Trainers are knowledgeable and motivating. Gymme is wonderful!”',
    },
    {
      image: images.CommunityImg4,
      name: 'Anne R.',
      message:
        '“Love these workouts! Trainers are knowledgeable and motivating. Gymme is wonderful!”',
    },
  ],
};

export const faq = {
  icon: images.QuestionMarkIcn,
  title: 'FAQ',
  accordions: [
    {
      question: 'How can I book a workout class?',
      answer:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.',
    },
    {
      question: 'Can I pay by cash for my membership?',
      answer:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.',
    },
    {
      question: 'What age do I need to be to join?',
      answer:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.',
    },
    {
      question: 'Are there any lockers?',
      answer:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.',
    },
    {
      question: 'How do I cancel my membership?',
      answer:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.',
    },
    {
      question: 'Is there water available at the gym?',
      answer:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.',
    },
  ],
};

export const join = {
  image: images.JoinImg,
  title: 'Wanna join & have fun?',
  subtitle:
    'We’ll keep you updated on the things you need to know about Gymme. Nothing more, nothing less.',
  btnText: 'Join now',
};

export const footer = {
  logo: Logo,
  copyrightText: 'All rights reserved. Gymme 2022.',
};
