export interface Transaction {
  id: string;
  amount: number;
  date: string;
  type: 'debit' | 'credit';
  description: string;
  category: string;
  icon: string;
}

interface Card {
  id: string;
  type: string;
  last4: string;
  name: string;
  expiry: string;
  balance: number;
  color: string;
}

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  memberSince: string;
  avatar: string;
  walletBalance: number;
  lastUpdated: string;
}

const mockData = {
  user: {
    id: '1',
    name: 'Kostas Chitos',
    email: 'kostas.chitos@gmail.com',
    phone: '+30 111 222 333',
    address: 'Athens, Greece',
    memberSince: '2022-02-15',
    avatar: 'https://i.pravatar.cc/150?img=1',
    walletBalance: 9345.67,
    lastUpdated: new Date().toISOString(),
  },
  cards: [
    {
      id: '1',
      type: 'credit',
      last4: '4242',
      name: 'Kostas Chitos',
      expiry: '02/26',
      balance: 3250.50,
      color: '#6366f1'
    },
    {
      id: '2',
      type: 'debit',
      last4: '7890',
      name: 'Kostas Chitos',
      expiry: '11/27',
      balance: 1200.75,
      color: '#10b981'
    }
  ],
  transactions: [
    {
      id: '1',
      amount: 2500,
      date: '2025-06-15T10:30:00.000Z',
      type: 'credit',
      description: 'Salary Payment',
      category: 'income',
      icon: 'attach-money'
    },
    {
      id: '2',
      amount: 45,
      date: '2025-06-14T14:20:00.000Z',
      type: 'debit',
      description: 'Grocery Store',
      category: 'food',
      icon: 'restaurant'
    },
    {
      id: '3',
      amount: 120,
      date: '2025-06-13T09:15:00.000Z',
      type: 'debit',
      description: 'Coffee Shop',
      category: 'food',
      icon: 'restaurant'
    },
    {
      id: '4',
      amount: 1500,
      date: '2025-06-12T16:45:00.000Z',
      type: 'credit',
      description: 'Freelance Payment',
      category: 'income',
      icon: 'attach-money'
    },
    {
      id: '5',
      amount: 89.99,
      date: '2025-06-11T11:00:00.000Z',
      type: 'debit',
      description: 'Supermarket',
      category: 'food',
      icon: 'restaurant'
    },
    {
      id: '6',
      amount: 15.50,
      date: '2025-06-10T08:30:00.000Z',
      type: 'debit',
      description: 'Coffee Shop',
      category: 'food',
      icon: 'restaurant'
    },
    {
      id: '7',
      amount: 200,
      date: '2025-06-09T12:00:00.000Z',
      type: 'credit',
      description: 'Bonus Payment',
      category: 'income',
      icon: 'attach-money'
    },
    {
      id: '8',
      amount: 75.25,
      date: '2025-06-08T15:45:00.000Z',
      type: 'debit',
      description: 'Restaurant',
      category: 'food',
      icon: 'restaurant'
    },
    {
      id: '9',
      amount: 30,
      date: '2025-06-07T10:10:00.000Z',
      type: 'debit',
      description: 'Grocery Store',
      category: 'food',
      icon: 'restaurant'
    },
    {
      id: '10',
      amount: 800,
      date: '2025-06-06T14:20:00.000Z',
      type: 'credit',
      description: 'Freelance Payment',
      category: 'income',
      icon: 'attach-money'
    },
    {
      id: '11',
      amount: 65.80,
      date: '2025-06-05T09:00:00.000Z',
      type: 'debit',
      description: 'Supermarket',
      category: 'food',
      icon: 'restaurant'
    },
    {
      id: '12',
      amount: 22.10,
      date: '2025-06-04T13:30:00.000Z',
      type: 'debit',
      description: 'Coffee Shop',
      category: 'food',
      icon: 'restaurant'
    },
    {
      id: '13',
      amount: 300,
      date: '2025-06-03T11:15:00.000Z',
      type: 'credit',
      description: 'Refund',
      category: 'income',
      icon: 'attach-money'
    },
    {
      id: '14',
      amount: 50,
      date: '2025-06-02T16:50:00.000Z',
      type: 'debit',
      description: 'Restaurant',
      category: 'food',
      icon: 'restaurant'
    },
    {
      id: '15',
      amount: 95.60,
      date: '2025-06-01T10:25:00.000Z',
      type: 'debit',
      description: 'Grocery Store',
      category: 'food',
      icon: 'restaurant'
    },
    {
      id: '16',
      amount: 1200,
      date: '2025-05-31T14:00:00.000Z',
      type: 'credit',
      description: 'Salary Payment',
      category: 'income',
      icon: 'attach-money'
    },
    {
      id: '17',
      amount: 18.75,
      date: '2025-05-30T08:45:00.000Z',
      type: 'debit',
      description: 'Coffee Shop',
      category: 'food',
      icon: 'restaurant'
    },
    {
      id: '18',
      amount: 85.30,
      date: '2025-05-29T12:30:00.000Z',
      type: 'debit',
      description: 'Supermarket',
      category: 'food',
      icon: 'restaurant'
    },
    {
      id: '19',
      amount: 40,
      date: '2025-05-28T15:10:00.000Z',
      type: 'debit',
      description: 'Restaurant',
      category: 'food',
      icon: 'restaurant'
    },
    {
      id: '20',
      amount: 500,
      date: '2025-05-27T09:50:00.000Z',
      type: 'credit',
      description: 'Freelance Payment',
      category: 'income',
      icon: 'attach-money'
    },
    {
      id: '21',
      amount: 25.90,
      date: '2025-05-26T11:20:00.000Z',
      type: 'debit',
      description: 'Coffee Shop',
      category: 'food',
      icon: 'restaurant'
    },
    {
      id: '22',
      amount: 110.45,
      date: '2025-05-25T14:40:00.000Z',
      type: 'debit',
      description: 'Grocery Store',
      category: 'food',
      icon: 'restaurant'
    },
    {
      id: '23',
      amount: 195,
      date: '2025-05-24T10:05:00.000Z',
      type: 'debit',
      description: 'Restaurant',
      category: 'food',
      icon: 'restaurant'
    },
    {
      id: '24',
      amount: 250,
      date: '2025-05-23T13:25:00.000Z',
      type: 'credit',
      description: 'Bonus Payment',
      category: 'income',
      icon: 'attach-money'
    },
    {
      id: '25',
      amount: 53.20,
      date: '2025-05-22T08:55:00.000Z',
      type: 'debit',
      description: 'Coffee Shop',
      category: 'food',
      icon: 'restaurant'
    },
    {
      id: '26',
      amount: 90.10,
      date: '2025-05-21T12:15:00.000Z',
      type: 'debit',
      description: 'Supermarket',
      category: 'food',
      icon: 'restaurant'
    },
    {
      id: '27',
      amount: 55,
      date: '2025-05-20T16:30:00.000Z',
      type: 'debit',
      description: 'Restaurant',
      category: 'food',
      icon: 'restaurant'
    },
    {
      id: '28',
      amount: 300,
      date: '2025-05-19T10:45:00.000Z',
      type: 'credit',
      description: 'Freelance Payment',
      category: 'income',
      icon: 'attach-money'
    },
    {
      id: '29',
      amount: 20.50,
      date: '2025-05-18T09:30:00.000Z',
      type: 'debit',
      description: 'Coffee Shop',
      category: 'food',
      icon: 'restaurant'
    },
    {
      id: '30',
      amount: 105.75,
      date: '2025-05-17T14:00:00.000Z',
      type: 'debit',
      description: 'Grocery Store',
      category: 'food',
      icon: 'restaurant'
    }
  ]
};

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchWalletBalance = async () => {
  await delay(800);
  return {
    balance: mockData.user.walletBalance,
    lastUpdated: mockData.user.lastUpdated
  };
};

export const fetchTransactions = async (filter: string = 'all', limit?: number) => {
  await delay(600);
  let data = mockData.transactions;
  if (filter !== 'all') data = data.filter(tx => tx.type === filter);
  if (limit) data = data.slice(0, limit);
  return data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const fetchCards = async () => {
  await delay(500);
  return mockData.cards;
};

export const fetchUserProfile = async () => {
  await delay(400);
  return mockData.user;
};

export const refreshWallet = async () => {
  await delay(1000);
  return {
    balance: mockData.user.walletBalance,
    recentTransactions: mockData.transactions.slice(0, 5),
    lastUpdated: mockData.user.lastUpdated
  };
};
