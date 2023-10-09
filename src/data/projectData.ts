export type ProjectType = {
  id: number;
  thumbnail: string;
  title: string;
  description: string;
  technologies: string[];
  urlOnline: string;
  urlGithub: string;
};

export const projectData: ProjectType[] = [
  {
    id: 7,
    thumbnail: 'compraswa.png',
    title: 'Lista de Compras',
    description:
      'Lista de Compras é um WEB APP (aplicação web mobile). Com ela você pode criar uma lista de compras. Tem como funcionalidades: adicionar, editar, remover e gerenciar item. O gerenciamento é realizado através do status "Produto no Carrinho". Os dados são armazenados no Local Storage (funcionalidade do navegador da sua máquina, ou seja, os dados são armazenados localmente na máquina do usuário).',
    technologies: [
      'Tailwind (CSS)',
      'Javascript',
      'Typescript',
      'React',
      'Vite',
    ],
    urlOnline: 'https://shoppingwa.vercel.app/',
    urlGithub: 'https://github.com/patricklimax/shoplistwa',
  },

  {
    id: 1,
    thumbnail: 'tarefaswa.png',
    title: 'Lista de Tarefas',
    description:
      'Lista de Tarefas é um projeto de gerenciamento de tarefas. Tem como funcionalidades: adicionar tarefa, remover tarefa. Além disso, permite o gerenciamento através do status "Tarefa realizada". Os dados são armazenados no Local Storage (funcionalidade do navegador da sua máquina, ou seja, os dados são armazenados localmente na máquina do usuário).',
    technologies: [
      'Tailwind (CSS)',
      'Javascript',
      'Typescript',
      'React',
      'Vite',
    ],
    urlOnline: 'https://taskswa.vercel.app/',
    urlGithub: 'https://github.com/patricklimax/todolistwa',
  },

  {
    id: 2,
    thumbnail: 'calculadoraImc.png',
    title: 'Calculadora IMC',
    description:
      'Este projeto permite ao usuário calcular IMC, que é o Índice de Massa Corporal. É um cálculo simples que permite medir se alguém está ou não com o peso ideal. Ele aponta se o peso está adequado ou se está abaixo ou acima do peso.',
    technologies: ['Tailwind', 'Javascript', 'Typescript', 'React'],
    urlOnline: 'https://imccalculatorwa.vercel.app/',
    urlGithub: 'https://github.com/patricklimax/calculadoraImc',
  },

  {
    id: 3,
    thumbnail: 'gerarSenha.png',
    title: 'Gerador de Senha',
    description:
      'Projeto voltado para pessoas que desejam garantir uma senha segura, com números, letras e caracteres especiais.',
    technologies: ['HTML', 'CSS', 'Javascript'],
    urlOnline: 'https://passwordswa.vercel.app/',
    urlGithub: 'https://github.com/patricklimax/gerarSenha',
  },

  {
    id: 4,
    thumbnail: 'alyssandraCard.png',
    title: 'Cartão Virtual',
    description:
      'Cartão de visita virtual para apresentação profissional. É uma alternativa que traz modernidade. Ele permite o compartilhamento das suas informações mais importantes com apenas alguns cliques, tais como: redes sociais, serviço prestado, contato, etc. Além disso, pode ser acessado tanto em smartphones, como em computadores ou tablets',
    technologies: ['HTML', 'CSS', 'Javascript'],
    urlOnline: 'https://alyssandra.vercel.app/',
    urlGithub: 'https://github.com/patricklimax/alyssandraassis-personal',
  },

  {
    id: 5,
    thumbnail: 'awaxSite.png',
    title: 'Awax Site',
    description:
      'Projeto desenvolvido para fins de aprendizagem e consolidação de conhecimento.',
    technologies: ['HTML', 'CSS'],
    urlOnline: 'https://awaxsitewa.vercel.app/',
    urlGithub: 'https://github.com/patricklimax/awax',
  },

  {
    id: 6,
    thumbnail: 'starbucksClone.png',
    title: 'Clone do Starbucks',
    description:
      'Projeto desenvolvido para fins de aprendizagem e consolidação de conhecimento.',
    technologies: ['HTML', 'CSS'],
    urlOnline: 'https://starbucksclonewa.vercel.app/',
    urlGithub: 'https://github.com/patricklimax/cloneStarbucks',
  },
];

// import alyssandraCard from '../../public/assets/projectCover/alyssandraCard.png';
// import awaxSite from '../../public/assets/projectCover/awaxSite.png';
// import calculadoraImc from '../../public/assets/projectCover/calculadoraImc.png';
// import gerarSenha from '../../public/assets/projectCover/gerarSenha.png';
// import starbucksClone from '../../public/assets/projectCover/starbucksClone.png';
