import React, { useState, useEffect } from 'react';
import { Calculator, BookOpen, Zap, Beaker, Leaf, Clock, ChevronRight, Star, Lock } from 'lucide-react';
import { subjects } from './mock';

const iconMap = {
  Calculator,
  BookOpen,
  Zap,
  Beaker,
  Leaf,
  Clock
};

const SubjectsSection = () => {
  const [hoveredSubject, setHoveredSubject] = useState(null);
  const [visibleSubjects, setVisibleSubjects] = useState([]);

  useEffect(() => {
    // Animação sequencial de entrada
    subjects.forEach((_, index) => {
      setTimeout(() => {
        setVisibleSubjects(prev => [...prev, index]);
      }, index * 200);
    });
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#407BFF] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#00D7DB] rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#407BFF] to-[#00D7DB] mb-6">
            Domine Todas as Matérias
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Cada matéria é uma nova aventura! Explore conteúdos interativos, 
            resolva desafios épicos e colete recompensas enquanto se prepara para o vestibular.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {subjects.map((subject, index) => {
            const IconComponent = iconMap[subject.icon];
            const isVisible = visibleSubjects.includes(index);
            const isHovered = hoveredSubject === subject.id;
            
            return (
              <div
                key={subject.id}
                onMouseEnter={() => setHoveredSubject(subject.id)}
                onMouseLeave={() => setHoveredSubject(null)}
                className={`relative group cursor-pointer transform transition-all duration-500 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                } ${
                  isHovered ? 'scale-105 -translate-y-2' : ''
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Card background with gradient border */}
                <div className={`relative bg-slate-800 rounded-2xl p-6 border-2 transition-all duration-300 ${
                  isHovered ? 'border-transparent' : 'border-slate-700'
                }`}>
                  {isHovered && (
                    <div className={`absolute inset-0 bg-gradient-to-r ${subject.color} rounded-2xl opacity-20 transition-opacity duration-300`}></div>
                  )}
                  
                  {/* Subject icon */}
                  <div className={`relative z-10 w-16 h-16 rounded-full bg-gradient-to-r ${subject.color} flex items-center justify-center mb-4 transition-transform duration-300 ${
                    isHovered ? 'scale-110 rotate-12' : ''
                  }`}>
                    <IconComponent size={32} className="text-white" />
                  </div>

                  {/* Subject info */}
                  <h3 className="text-2xl font-bold text-white mb-2 relative z-10">
                    {subject.name}
                  </h3>
                  <p className="text-slate-400 mb-4 relative z-10">
                    {subject.description}
                  </p>

                  {/* Progress bar */}
                  <div className="relative z-10 mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-slate-300">Progresso</span>
                      <span className="text-sm font-bold text-white">{subject.progress}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${subject.color} transition-all duration-1000 ease-out rounded-full relative`}
                        style={{ width: `${isVisible ? subject.progress : 0}%` }}
                      >
                        {/* Glowing effect */}
                        <div className="absolute inset-0 bg-white opacity-30 animate-pulse"></div>
                      </div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="relative z-10 grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-slate-700/50 rounded-lg p-3">
                      <div className="text-lg font-bold text-[#407BFF]">
                        {subject.completedQuestions.toLocaleString()}
                      </div>
                      <div className="text-xs text-slate-400">Resolvidas</div>
                    </div>
                    <div className="bg-slate-700/50 rounded-lg p-3">
                      <div className="text-lg font-bold text-[#00D7DB]">
                        {subject.totalQuestions.toLocaleString()}
                      </div>
                      <div className="text-xs text-slate-400">Total</div>
                    </div>
                  </div>

                  {/* Action button */}
                  <button className={`relative z-10 w-full py-3 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
                    isHovered 
                      ? `bg-gradient-to-r ${subject.color} text-white transform scale-105` 
                      : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                  }`}>
                    Continuar Estudos
                    <ChevronRight size={20} className={`transition-transform duration-300 ${
                      isHovered ? 'translate-x-1' : ''
                    }`} />
                  </button>
                </div>

                {/* Floating stars on hover */}
                {isHovered && (
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(6)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={`absolute text-[#00D7DB] animate-ping`}
                        style={{
                          top: `${Math.random() * 100}%`,
                          left: `${Math.random() * 100}%`,
                          animationDelay: `${i * 0.2}s`,
                          animationDuration: '1s'
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Coming soon teaser */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-slate-800 rounded-full px-6 py-3 border border-slate-600">
            <Lock size={20} className="text-[#00D7DB]" />
            <span className="text-slate-300">
              <span className="text-[#00D7DB] font-bold">+12 matérias</span> chegando em breve!
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubjectsSection;