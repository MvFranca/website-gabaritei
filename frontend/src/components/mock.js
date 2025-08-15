// Mock data para o Gabaritei - App de estudos para vestibular

export const heroCharacters = [
  {
    id: 1,
    name: "Ana",
    image: "https://customer-assets.emergentagent.com/job_gabaritei-app/artifacts/5aj2l6on_Minha_imagem_do_ChatGPT-removebg-preview.png",
    subject: "Matemática",
    level: 95,
    position: { x: 15, y: 20 }
  },
  {
    id: 2,
    name: "Carlos",
    image: "https://customer-assets.emergentagent.com/job_gabaritei-app/artifacts/2zblq7sg_Group.png", 
    subject: "Física",
    level: 87,
    position: { x: 70, y: 35 }
  },
  {
    id: 3,
    name: "Beatriz",
    image: "https://customer-assets.emergentagent.com/job_gabaritei-app/artifacts/hockfd8r_7191139_3568950%201%282%29.png",
    subject: "Português",
    level: 92,
    position: { x: 40, y: 60 }
  },
  {
    id: 4,
    name: "Diego",
    image: "https://customer-assets.emergentagent.com/job_gabaritei-app/artifacts/5gyidks9_7010858_3254895%201%281%29.png",
    subject: "Química",
    level: 89,
    position: { x: 80, y: 15 }
  }
];

export const subjects = [
  {
    id: 1,
    name: "Matemática",
    icon: "Calculator",
    color: "from-[#407BFF] to-[#00D7DB]",
    progress: 75,
    description: "Álgebra, Geometria, Funções e mais",
    totalQuestions: 2847,
    completedQuestions: 2135
  },
  {
    id: 2,
    name: "Português",
    icon: "BookOpen",
    color: "from-[#00D7DB] to-[#407BFF]",
    progress: 82,
    description: "Gramática, Literatura, Redação",
    totalQuestions: 1923,
    completedQuestions: 1577
  },
  {
    id: 3,
    name: "Física",
    icon: "Zap",
    color: "from-[#407BFF] to-[#00D7DB]",
    progress: 68,
    description: "Mecânica, Termodinâmica, Óptica",
    totalQuestions: 1654,
    completedQuestions: 1125
  },
  {
    id: 4,
    name: "Química",
    icon: "Beaker",
    color: "from-[#00D7DB] to-[#407BFF]",
    progress: 71,
    description: "Orgânica, Inorgânica, Físico-química",
    totalQuestions: 1432,
    completedQuestions: 1017
  },
  {
    id: 5,
    name: "Biologia",
    icon: "Leaf",
    color: "from-[#407BFF] to-[#00D7DB]",
    progress: 79,
    description: "Citologia, Genética, Ecologia",
    totalQuestions: 1876,
    completedQuestions: 1482
  },
  {
    id: 6,
    name: "História",
    icon: "Clock",
    color: "from-[#00D7DB] to-[#407BFF]",
    progress: 85,
    description: "Brasil, Mundo, Contemporânea",
    totalQuestions: 1234,
    completedQuestions: 1049
  }
];

export const achievements = [
  {
    id: 1,
    name: "Primeira Vitória",
    description: "Complete sua primeira questão",
    icon: "Trophy",
    unlocked: true,
    rarity: "common"
  },
  {
    id: 2,
    name: "Estudioso",
    description: "Estude por 7 dias seguidos",
    icon: "Target",
    unlocked: true,
    rarity: "rare"
  },
  {
    id: 3,
    name: "Matemático",
    description: "Acerte 100 questões de matemática",
    icon: "Award",
    unlocked: false,
    rarity: "epic"
  },
  {
    id: 4,
    name: "Mestre dos Vestibulares",
    description: "Simule 10 provas completas",
    icon: "Crown",
    unlocked: false,
    rarity: "legendary"
  }
];

export const chatMessages = [
  {
    id: 1,
    sender: "user",
    message: "Oi Professor! Como funciona a regra de três composta?",
    timestamp: "14:30"
  },
  {
    id: 2,
    sender: "ai",
    message: "Oi! A regra de três composta é usada quando temos mais de duas grandezas relacionadas. Vou te explicar com um exemplo prático:",
    timestamp: "14:31"
  },
  {
    id: 3,
    sender: "ai", 
    message: "Se 8 operários constroem 12 casas em 15 dias, quantos operários são necessários para construir 18 casas em 10 dias?",
    timestamp: "14:31"
  },
  {
    id: 4,
    sender: "user",
    message: "Hmm, parece complexo. Como eu monto a proporção?",
    timestamp: "14:33"
  },
  {
    id: 5,
    sender: "ai",
    message: "Vamos organizar assim:\nOperários | Casas | Dias\n8         | 12    | 15\nx         | 18    | 10\n\nAgora analisamos: mais casas = mais operários (direta), menos dias = mais operários (inversa)",
    timestamp: "14:34"
  }
];

export const studyPlan = {
  currentWeek: 3,
  totalWeeks: 12,
  weeklyGoal: {
    questionsToSolve: 150,
    questionsSolved: 87,
    studyHours: 20,
    hoursStudied: 14.5
  },
  subjects: [
    { name: "Matemática", questionsLeft: 23, priority: "high" },
    { name: "Português", questionsLeft: 18, priority: "medium" },
    { name: "Física", questionsLeft: 22, priority: "high" }
  ]
};

export const leaderboard = [
  { position: 1, name: "Ana Silva", points: 2847, avatar: "https://customer-assets.emergentagent.com/job_gabaritei-app/artifacts/5aj2l6on_Minha_imagem_do_ChatGPT-removebg-preview.png" },
  { position: 2, name: "Carlos Santos", points: 2651, avatar: "https://customer-assets.emergentagent.com/job_gabaritei-app/artifacts/2zblq7sg_Group.png" },
  { position: 3, name: "Você", points: 2234, avatar: "https://customer-assets.emergentagent.com/job_gabaritei-app/artifacts/hockfd8r_7191139_3568950%201%282%29.png" },
  { position: 4, name: "Beatriz Lima", points: 2187, avatar: "https://customer-assets.emergentagent.com/job_gabaritei-app/artifacts/5gyidks9_7010858_3254895%201%281%29.png" },
  { position: 5, name: "Diego Costa", points: 2098, avatar: "https://customer-assets.emergentagent.com/job_gabaritei-app/artifacts/5aj2l6on_Minha_imagem_do_ChatGPT-removebg-preview.png" }
];

export const examStats = {
  simulatedExams: 15,
  averageScore: 78.5,
  bestScore: 92,
  improvementRate: 12.3,
  strongSubjects: ["Português", "História", "Biologia"],
  weakSubjects: ["Física", "Química"]
};

export const dailyChallenge = {
  question: "Qual é o resultado de 2x + 3 = 15?",
  options: ["x = 6", "x = 9", "x = 12", "x = 15"],
  correctAnswer: 0,
  subject: "Matemática",
  difficulty: "Médio",
  points: 50
};

export const recentActivities = [
  {
    id: 1,
    type: "question_solved",
    description: "Resolveu 15 questões de Matemática",
    points: 150,
    timestamp: "2 horas atrás"
  },
  {
    id: 2,
    type: "achievement_unlocked",
    description: "Desbloqueou conquista 'Estudioso'",
    points: 500,
    timestamp: "1 dia atrás"
  },
  {
    id: 3,
    type: "exam_completed",
    description: "Completou simulado ENEM 2023",
    points: 300,
    timestamp: "2 dias atrás"
  }
];

export const universities = [
  {
    name: "USP",
    logo: "🏛️",
    cutoffScore: 850,
    yourScore: 734,
    probability: 45
  },
  {
    name: "UNICAMP", 
    logo: "🎓",
    cutoffScore: 820,
    yourScore: 734,
    probability: 62
  },
  {
    name: "UFRJ",
    logo: "🏫",
    cutoffScore: 780,
    yourScore: 734,
    probability: 78
  }
];