import React, { useState, useEffect } from 'react';
import { Star, Sparkles, Trophy, Target, Zap, BookOpen } from 'lucide-react';
import { heroCharacters } from './mock';

const HeroSection = () => {
  const [floatingElements, setFloatingElements] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Gerar elementos flutuantes (estrelas, sparkles)
    const elements = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 20 + 10,
      delay: Math.random() * 2,
      duration: Math.random() * 3 + 2,
      type: Math.random() > 0.5 ? 'star' : 'sparkle'
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
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Background animated elements */}
      <div className="absolute inset-0">
        {floatingElements.map((element) => (
          <div
            key={element.id}
            className={`absolute animate-pulse transition-transform duration-1000 ease-out`}
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              transform: `translate(${(mousePosition.x - 50) * 0.02}px, ${(mousePosition.y - 50) * 0.02}px)`,
              animationDelay: `${element.delay}s`,
              animationDuration: `${element.duration}s`,
            }}
          >
            {element.type === 'star' ? (
              <Star 
                size={element.size} 
                className="text-blue-400 opacity-70 hover:opacity-100 transition-opacity"
              />
            ) : (
              <Sparkles 
                size={element.size} 
                className="text-purple-400 opacity-60 hover:opacity-100 transition-opacity"
              />
            )}
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
              animationDuration: '3s'
            }}
          >
            <div className="relative group">
              <img
                src={character.image}
                alt={character.name}
                className="w-24 h-24 rounded-full border-4 border-blue-400 shadow-2xl hover:border-purple-400 transition-all duration-300"
              />
              {/* Character tooltip */}
              <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                <div className="text-sm font-bold">{character.name}</div>
                <div className="text-xs text-blue-300">{character.subject} - Nível {character.level}</div>
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
            className="w-64 h-32 object-contain mx-auto mb-4 hover:scale-105 transition-transform duration-300"
          />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 mb-6 animate-pulse">
          Desperte seu
          <br />
          <span className="text-6xl md:text-8xl">Potencial Acadêmico</span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl leading-relaxed">
          Transforme seus estudos para o vestibular em uma jornada épica! 
          <br />
          Gamificação, IA personalizada e muito mais te esperam.
        </p>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-bold text-lg hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-2xl">
            <span className="relative z-10 flex items-center gap-2">
              <Trophy size={24} />
              Começar Jornada!
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          <button className="px-8 py-4 border-2 border-blue-400 text-blue-400 rounded-full font-bold text-lg hover:bg-blue-400 hover:text-slate-900 transition-all duration-300 shadow-xl">
            <span className="flex items-center gap-2">
              <Target size={24} />
              Ver Simulados
            </span>
          </button>
        </div>

        {/* Stats preview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 border border-slate-700 hover:border-blue-400 transition-all duration-300 hover:scale-105">
            <div className="text-2xl font-bold text-blue-400">47.832</div>
            <div className="text-sm text-slate-400">Questões Resolvidas</div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 border border-slate-700 hover:border-purple-400 transition-all duration-300 hover:scale-105">
            <div className="text-2xl font-bold text-purple-400">12.567</div>
            <div className="text-sm text-slate-400">Estudantes Ativos</div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 border border-slate-700 hover:border-green-400 transition-all duration-300 hover:scale-105">
            <div className="text-2xl font-bold text-green-400">98%</div>
            <div className="text-sm text-slate-400">Taxa de Aprovação</div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 border border-slate-700 hover:border-yellow-400 transition-all duration-300 hover:scale-105">
            <div className="text-2xl font-bold text-yellow-400">156</div>
            <div className="text-sm text-slate-400">Universidades</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;