import React, { useState, useEffect } from 'react';
import { Star, Sparkles, Trophy, Target, Zap, BookOpen } from 'lucide-react';
import { heroCharacters } from './mock';

const HeroSection = () => {
  const [floatingElements, setFloatingElements] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Gerar elementos flutuantes (estrelas, sparkles) com mais variedade
    const elements = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 24 + 8,
      delay: Math.random() * 4,
      duration: Math.random() * 4 + 3,
      type: Math.random() > 0.6 ? 'star' : 'sparkle',
      moveSpeed: Math.random() * 20 + 10,
      direction: Math.random() * 360
    }));
    setFloatingElements(elements);

    // Mouse tracking para parallax
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-[#407BFF]/20 to-slate-900 overflow-hidden">
      {/* Background animated elements */}
      <div className="absolute inset-0">
        {floatingElements.map((element) => (
          <div
            key={element.id}
            className={`absolute transition-transform duration-1000 ease-out animate-float`}
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              transform: `translate(${(mousePosition.x - 50) * 0.03}px, ${(mousePosition.y - 50) * 0.03}px)`,
              animationDelay: `${element.delay}s`,
              animationDuration: `${element.duration}s`,
            }}
          >
            {element.type === 'star' ? (
              <Star 
                size={element.size} 
                className="text-[#00D7DB] opacity-70 hover:opacity-100 transition-opacity animate-spin-slow"
                fill="currentColor"
              />
            ) : (
              <Sparkles 
                size={element.size} 
                className="text-[#407BFF] opacity-60 hover:opacity-100 transition-opacity animate-pulse"
              />
            )}
          </div>
        ))}
      </div>

      {/* Additional moving stars background */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 15 }, (_, i) => (
          <div
            key={`moving-star-${i}`}
            className="absolute animate-move-diagonal"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 10 + 15}s`,
              animationDelay: `${Math.random() * 5}s`
            }}
          >
            <Star 
              size={12 + Math.random() * 8} 
              className="text-[#00D7DB] opacity-50"
              fill="currentColor"
            />
          </div>
        ))}
      </div>

      {/* Animated characters */}
      <div className="absolute inset-0">
        {heroCharacters.map((character, index) => (
          <div
            key={character.id}
            className="absolute animate-bounce transition-all duration-500 hover:scale-110"
            style={{
              left: `${character.position.x}%`,
              top: `${character.position.y}%`,
              animationDelay: `${index * 0.5}s`,
              animationDuration: '4s'
            }}
          >
            <div className="relative group">
              <img
                src={character.image}
                alt={character.name}
                className="w-28 h-28 rounded-full border-4 border-[#407BFF] shadow-2xl hover:border-[#00D7DB] transition-all duration-300 hover:shadow-[#00D7DB]/50"
              />
              {/* Character tooltip */}
              <div className="absolute -top-18 left-1/2 transform -translate-x-1/2 bg-slate-800/90 backdrop-blur-sm text-white px-4 py-3 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10 border border-[#407BFF]/30">
                <div className="text-sm font-bold">{character.name}</div>
                <div className="text-xs text-[#00D7DB]">{character.subject} - Nível {character.level}</div>
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-slate-800"></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Logo and main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
        <div className="mb-8 animate-fade-in">
          <img 
            src="https://customer-assets.emergentagent.com/job_1f2c4d1a-7284-40fb-a049-8c85f3387131/artifacts/dwv19t5e_gradiente.png"
            alt="Gabaritei Logo"
            className="w-72 h-36 object-contain mx-auto mb-6 hover:scale-105 transition-transform duration-300 drop-shadow-2xl"
          />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#407BFF] via-[#00D7DB] to-[#407BFF] mb-8 animate-pulse">
          Desperte seu
          <br />
          <span className="text-6xl md:text-8xl bg-gradient-to-r from-[#00D7DB] via-[#407BFF] to-[#00D7DB] bg-clip-text text-transparent">
            Potencial Acadêmico
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-4xl leading-relaxed">
          Transforme seus estudos para o vestibular em uma jornada épica com gamificação! 
          <br />
          <span className="text-[#00D7DB] font-semibold">IA personalizada, conquistas e muito mais te esperam.</span>
        </p>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <button className="group relative px-10 py-5 bg-gradient-to-r from-[#407BFF] to-[#00D7DB] text-white rounded-full font-bold text-xl hover:from-[#00D7DB] hover:to-[#407BFF] transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-[#00D7DB]/50">
            <span className="relative z-10 flex items-center gap-3">
              <Trophy size={28} />
              Começar Jornada!
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#00D7DB] to-[#407BFF] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          <button className="px-10 py-5 border-2 border-[#407BFF] text-[#407BFF] rounded-full font-bold text-xl hover:bg-gradient-to-r hover:from-[#407BFF] hover:to-[#00D7DB] hover:text-white hover:border-transparent transition-all duration-300 shadow-xl">
            <span className="flex items-center gap-3">
              <Target size={28} />
              Ver Simulados
            </span>
          </button>
        </div>

        {/* Stats preview with new colors */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-5xl">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-[#407BFF]/30 hover:border-[#00D7DB] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#407BFF]/20">
            <div className="text-3xl font-bold text-[#407BFF]">47.832</div>
            <div className="text-sm text-slate-400">Questões Resolvidas</div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-[#407BFF]/30 hover:border-[#00D7DB] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#00D7DB]/20">
            <div className="text-3xl font-bold text-[#00D7DB]">12.567</div>
            <div className="text-sm text-slate-400">Estudantes Ativos</div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-[#407BFF]/30 hover:border-[#00D7DB] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-400/20">
            <div className="text-3xl font-bold text-green-400">98%</div>
            <div className="text-sm text-slate-400">Taxa de Aprovação</div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-[#407BFF]/30 hover:border-[#00D7DB] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/20">
            <div className="text-3xl font-bold text-yellow-400">156</div>
            <div className="text-sm text-slate-400">Universidades</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#00D7DB] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#00D7DB] rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;