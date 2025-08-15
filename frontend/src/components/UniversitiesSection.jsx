import React, { useState } from 'react';
import { TrendingUp, MapPin, Users, BookOpen, Award, Target } from 'lucide-react';
import { universities, examStats } from './mock';

const UniversitiesSection = () => {
  const [selectedUniversity, setSelectedUniversity] = useState(0);

  return (
    <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-1/3 w-96 h-96 bg-green-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/3 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full px-6 py-3 mb-6">
            <Award size={24} className="text-white" />
            <span className="text-white font-bold">Seu Futuro Acadêmico</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 mb-6">
            Monitore suas Chances nas 
            <br />
            Melhores Universidades
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Veja em tempo real suas chances de aprovação nas universidades dos seus sonhos 
            e receba dicas personalizadas para melhorar sua performance!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Stats Cards */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-blue-400 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <Target size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Simulados Realizados</h3>
                  <p className="text-slate-400">Prática constante</p>
                </div>
              </div>
              <div className="text-3xl font-bold text-blue-400">{examStats.simulatedExams}</div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-green-400 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                  <TrendingUp size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Nota Média</h3>
                  <p className="text-slate-400">Nos simulados</p>
                </div>
              </div>
              <div className="text-3xl font-bold text-green-400">{examStats.averageScore}</div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-yellow-400 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center">
                  <Award size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Melhor Nota</h3>
                  <p className="text-slate-400">Recorde pessoal</p>
                </div>
              </div>
              <div className="text-3xl font-bold text-yellow-400">{examStats.bestScore}</div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-purple-400 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                  <TrendingUp size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Melhoria</h3>
                  <p className="text-slate-400">Últimas 4 semanas</p>
                </div>
              </div>
              <div className="text-3xl font-bold text-purple-400">+{examStats.improvementRate}%</div>
            </div>
          </div>

          {/* Strong/Weak Subjects */}
          <div className="space-y-6">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <TrendingUp size={24} className="text-green-400" />
                Matérias Fortes
              </h3>
              <div className="space-y-3">
                {examStats.strongSubjects.map((subject, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-slate-300">{subject}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Target size={24} className="text-red-400" />
                Focar Mais Em
              </h3>
              <div className="space-y-3">
                {examStats.weakSubjects.map((subject, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <span className="text-slate-300">{subject}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Universities */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl border border-slate-700 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6">
            <h3 className="text-2xl font-bold text-white flex items-center gap-3">
              <BookOpen size={32} />
              Suas Chances de Aprovação
            </h3>
            <p className="text-blue-100 mt-2">
              Baseado em seu desempenho atual e notas de corte históricas
            </p>
          </div>
          
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {universities.map((university, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedUniversity(index)}
                  className={`relative group cursor-pointer transition-all duration-300 ${
                    selectedUniversity === index ? 'scale-105' : 'hover:scale-102'
                  }`}
                >
                  <div className={`bg-slate-700 rounded-2xl p-6 border-2 transition-all duration-300 ${
                    selectedUniversity === index 
                      ? 'border-blue-400 shadow-lg shadow-blue-500/20' 
                      : 'border-slate-600 hover:border-slate-500'
                  }`}>
                    <div className="text-center mb-6">
                      <div className="text-4xl mb-3">{university.logo}</div>
                      <h4 className="text-xl font-bold text-white">{university.name}</h4>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-400">Nota de Corte</span>
                        <span className="text-white font-bold">{university.cutoffScore}</span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-slate-400">Sua Nota</span>
                        <span className="text-blue-400 font-bold">{university.yourScore}</span>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-slate-400">Chance de Aprovação</span>
                          <span className={`font-bold ${
                            university.probability >= 70 ? 'text-green-400' :
                            university.probability >= 50 ? 'text-yellow-400' :
                            'text-red-400'
                          }`}>
                            {university.probability}%
                          </span>
                        </div>
                        
                        <div className="w-full bg-slate-600 rounded-full h-2 overflow-hidden">
                          <div 
                            className={`h-full rounded-full transition-all duration-1000 ${
                              university.probability >= 70 ? 'bg-gradient-to-r from-green-500 to-emerald-600' :
                              university.probability >= 50 ? 'bg-gradient-to-r from-yellow-500 to-orange-600' :
                              'bg-gradient-to-r from-red-500 to-red-600'
                            }`}
                            style={{ width: `${university.probability}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Animated ring for selected */}
                    {selectedUniversity === index && (
                      <div className="absolute inset-0 border-2 border-blue-400 rounded-2xl animate-ping opacity-75"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg">
                Ver Mais Universidades
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniversitiesSection;