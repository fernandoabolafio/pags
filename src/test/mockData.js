const itauUsers = [
  {
    id: '15000005205200584716453',
    first_name: 'Marcela',
    thumb: 'img/persons/marcela.jpg',
    pagsAcessorios: [
      { id: 0, text: 'Cadastre-se', isConquered: true, selected: false },
      { id: 1, text: 'Faça o tutorial', isConquered: true, selected: false },
      { id: 2, text: 'Crie seu primeiro objetivo', isConquered: true, selected: false },
      { id: 3, text: 'Realize seu primeiro investimento com Pasg$', isConquered: false, selected: false },
      { id: 4, text: 'Invista por 3 meses', isConquered: false, selected: false },
      { id: 5, text: 'Invista por 6 meses', isConquered: false, selected: false },
      { id: 6, text: 'Invista por 1 ano', isConquered: false, selected: false },
      { id: 7, text: 'Invista em ações', isConquered: false, selected: false },
      { id: 8, text: 'Assista sua primeira aula', isConquered: true, selected: true },
      { id: 9, text: 'Complete todas as aulas', isConquered: false, selected: false },
      { id: 10, text: 'Torne-se um Money Maker', isConquered: false, selected: false }
    ],
    completedActions: {
      verDica: true,
      addObjetivo: true
    },
    objetivos: [
      {
        id: 1,
        nome: 'Emergência',
        criado: '10/10/2016',
        conclusaoEstimada: '10/10/2017',
        valor: 5000,
        descricao: 'Dinherio sempre disponível em caso de emergência',
      },
      {
        id: 2,
        nome: 'Cirurgia',
        criado: '10/6/2017',
        valor: 30000,
        conclusaoEstimada: '10/6/2020',
        descricao: 'Cirurgia de joelho da mamis'
      },
      {
        id: 3,
        nome: 'Novos Móveis',
        criado: '10/5/2017',
        valor: 20000,
        conclusaoEstimada: '10/10/2019',
        descricao: 'Moveis sob encomenda para o novo AP'
      }
    ],
    novaRecompensa: {
      active: false,
      acessorioId: undefined,
      motivo: ''
    },
    dica: {
      greeting: 'Quase lá!',
      mensagem: 'Para completar todos seus sonhos economize R$5mil por 3 anos e invista em:',
      investimentos: [
        {
          name: 'Multifundos MM',
          id: 1007
        }
      ]
    }
  },
  {
    id: '15000005201200486916443',
    first_name: 'Júlia',
    thumb: 'img/persons/julia.jpg',
    pagsAcessorios: [
      { id: 0, text: 'Cadastre-se', isConquered: true, selected: false },
      { id: 1, text: 'Faça o tutorial', isConquered: true, selected: false },
      { id: 2, text: 'Crie seu primeiro objetivo', isConquered: true, selected: true },
      { id: 3, text: 'Realize seu primeiro investimento com Pasg$', isConquered: false, selected: false },
      { id: 4, text: 'Invista por 3 meses', isConquered: false, selected: false },
      { id: 5, text: 'Invista por 6 meses', isConquered: false, selected: false },
      { id: 6, text: 'Invista por 1 ano', isConquered: false, selected: false },
      { id: 7, text: 'Invista em ações', isConquered: false, selected: false },
      { id: 8, text: 'Assista sua primeira aula', isConquered: true, selected: false },
      { id: 9, text: 'Complete todas as aulas', isConquered: false, selected: false },
      { id: 10, text: 'Torne-se um Money Maker', isConquered: false, selected: false }
    ],
    completedActions: {
      verDica: true,
      addObjetivo: true
    },
    objetivos: [
      {
        id: 1,
        nome: 'Planos futuros',
        criado: '10/8/2016',
        conclusaoEstimada: '10/8/2017',
        valor: 18000,
        descricao: 'Talvez viajar, talvez comprar um carro. O tempo dirá.'
      },
      {
        id: 2,
        nome: 'Bicileta',
        criado: '10/6/2016',
        conclusaoEstimada: '10/6/2017',
        valor: 2000,
        descricao: 'Bike para trilha'
      },
      {
        id: 3,
        nome: 'Computador',
        criado: '10/6/2016',
        conclusaoEstimada: '10/6/2017',
        valor: 5000,
        descricao: 'Notebook Asus 73765 viper *-*'
      },
      {
        id: 4,
        nome: 'Casa',
        criado: '10/8/2017',
        conclusaoEstimada: '10/8/2021',
        valor: 100000,
        descricao: 'Casa com varanda em Minas Gerais'
      }
    ],
    novaRecompensa: {
      active: false,
      acessorioId: undefined,
      motivo: ''
    },
    dica: {
      greeting: 'Quase lá!',
      mensagem: 'Para completar todos os seus sonhos economize R$17mil por 4 anos ou invista R$10mil por ano em',
      investimentos: [
        {
          name: 'Excellence DI',
          id: 1009
        }
      ]
    }
  },
  {
    id: '15000005204200286316453',
    first_name: 'Ivan',
    thumb:  'img/persons/ivan.jpg',
    pagsAcessorios: [
      { id: 0, text: 'Cadastre-se', isConquered: true, selected: true },
      { id: 1, text: 'Faça o tutorial', isConquered: false, selected: false },
      { id: 2, text: 'Crie seu primeiro objetivo', isConquered: true, selected: false },
      { id: 3, text: 'Realize seu primeiro investimento com Pasg$', isConquered: false, selected: false },
      { id: 4, text: 'Invista por 3 meses', isConquered: false, selected: false },
      { id: 5, text: 'Invista por 6 meses', isConquered: false, selected: false },
      { id: 6, text: 'Invista por 1 ano', isConquered: false, selected: false },
      { id: 7, text: 'Invista em ações', isConquered: false, selected: false },
      { id: 8, text: 'Assista sua primeira aula', isConquered: true, selected: false },
      { id: 9, text: 'Complete todas as aulas', isConquered: false, selected: false },
      { id: 10, text: 'Torne-se um Money Maker', isConquered: false, selected: false }
    ],
    completedActions: {
      verDica: true,
      addObjetivo: true
    },
    objetivos: [
      {
        id: 1,
        nome: 'Emergência',
        criado: '10/8/2017',
        conclusaoEstimada: '_sempre_',
        valor: 20000,
        descricao: 'Dinheiro sempre disponivel para emergências'
      },
      {
        id: 2,
        nome: 'Notebook',
        criado: '10/8/2017',
        conclusaoEstimada: '10/8/2018',
        valor: 5000,
        descricao: 'Notebook Dell Rolanga Ross 73xWow'
      },
      {
        id: 3,
        nome: 'Anel de noivado',
        criado: '10/8/2017',
        conclusaoEstimada: '10/08/2019',
        valor: 20000,
        descricao: 'Dinheiro sempre disponivel para emergências'
      },
      {
        id: 4,
        nome: 'Carro',
        criado: '10/8/2017',
        conclusaoEstimada: '10/08/2020',
        valor: 60000,
        descricao: 'Carro 4x4 off Road que eu tanto quero'
      },
      {
        id: 5,
        nome: 'Casamento',
        criado: '10/08/2017',
        conclusaoEstimada: '10/08/2021',
        valor: 30000,
        descricao: 'Casamento na praia (Maresias) com minha amada'
      }
    ],
    novaRecompensa: {
      active: false,
      acessorioId: undefined,
      motivo: ''
    },
    dica: {
      greeting: 'Quase lá!',
      mensagem: 'Para completar todos seus sonhos Economize R$9mil por 4 anos e invista em:',
      investimentos: [
        {
          name: 'Maxime DI',
          id: 1011
        },
        {
          name: 'Personnalité Pre Longo Prazo RF',
          id: 1006
        }
      ]
    }
  },
  {
    id: '15000005203200586716443',
    first_name: 'Ana Carolina',
    thumb: 'img/persons/anacarolina.jpg',
    pagsAcessorios: [
      { id: 0, text: 'Cadastre-se', isConquered: true, selected: false },
      { id: 1, text: 'Faça o tutorial', isConquered: true, selected: false },
      { id: 2, text: 'Crie seu primeiro objetivo', isConquered: true, selected: false },
      { id: 3, text: 'Realize seu primeiro investimento com Pasg$', isConquered: false, selected: false },
      { id: 4, text: 'Invista por 3 meses', isConquered: false, selected: false },
      { id: 5, text: 'Invista por 6 meses', isConquered: false, selected: false },
      { id: 6, text: 'Invista por 1 ano', isConquered: false, selected: false },
      { id: 7, text: 'Invista em ações', isConquered: false, selected: false },
      { id: 8, text: 'Assista sua primeira aula', isConquered: true, selected: true },
      { id: 9, text: 'Complete todas as aulas', isConquered: false, selected: false },
      { id: 10, text: 'Torne-se um Money Maker', isConquered: false, selected: false }
    ],
    completedActions: {
      verDica: true,
      addObjetivo: true
    },
    objetivos: [
      {
        id: 1,
        nome: 'Cofrinho',
        criado: '10/8/2017',
        conclusaoEstimada: '_sempre_',
        valor: 3000,
        descricao: 'Dinheiro sempre disponível'
      },
      {
        id: 2,
        nome: 'Faculdade',
        criado: '10/8/2017',
        conclusaoEstimada: '10/08/2021',
        valor: 40000,
        descricao: 'Faculdade de Ciências Sociais na Unip'
      },
      {
        id: 3,
        nome: 'Renovar roupas',
        criado: '10/08/2017',
        conclusaoEstimada: '10/08/2019',
        valor: 5000,
        descricao: 'Comprar roupas e acessorios novos'
      },
      {
        id: 4,
        nome: 'Beleza',
        criado: '10/8/2017',
        conclusaoEstimada: '10/8/2018',
        valor: 600,
        descricao: 'Limpeza de pele, clareamento de dente e botox no queixo'
      }
    ],
    novaRecompensa: {
      active: false,
      acessorioId: undefined,
      motivo: ''
    },
    dica: {
      greeting: 'Parabens!',
      mensagem: 'Com essa carteira você realiza seus sonhos e ainda terá R$50mil a mais'
    }
  },
  {
    id: '15000005203200586716443',
    first_name: 'Joaquim',
    thumb: 'img/persons/joaquim.jpg',
    completedActions: {
      addObjetivo: false,
      verDica: true
    },
    pagsAcessorios: [
      { id: 0, text: 'Cadastre-se', isConquered: false, selected: false },
      { id: 1, text: 'Faça o tutorial', isConquered: false, selected: false },
      { id: 2, text: 'Crie seu primeiro objetivo', isConquered: false, selected: false },
      { id: 3, text: 'Realize seu primeiro investimento com Pasg$', isConquered: false, selected: false },
      { id: 4, text: 'Invista por 3 meses', isConquered: false, selected: false },
      { id: 5, text: 'Invista por 6 meses', isConquered: false, selected: false },
      { id: 6, text: 'Invista por 1 ano', isConquered: false, selected: false },
      { id: 7, text: 'Invista em ações', isConquered: false, selected: false },
      { id: 8, text: 'Assista sua primeira aula', isConquered: false, selected: false },
      { id: 9, text: 'Complete todas as aulas', isConquered: false, selected: false },
      { id: 10, text: 'Torne-se um Money Maker', isConquered: false, selected: false }
    ],
    dica: {
      mensagem: "Adicione um objetivo para começar a receber dicas!"
    },
    objetivos: [],
    novaRecompensa: {
      active: false,
      acessorioId: undefined,
      motivo: ''
    }
  }
];


const banks = [
  {
    id: 1,
    first_name: 'Itaú',
    thumb: 'img/logoitau.png'
  }
];

 export {
   itauUsers,
   banks
 };
