import React, { useState } from 'react';
import { Smartphone, Download, Star, Play, Apple } from 'lucide-react';
import { dailyChallenge } from './mock';

const AppDownloadSection = () => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerSelect = (index) => {
    setSelectedAnswer(index);
    setShowResult(true);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-green-500 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-6">
            Baixe o Gabaritei e Conquiste 
            <br />
            Sua Aprovação!
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Leve seus estudos para o próximo nível com nosso app mobile. 
            Estude onde e quando quiser!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* App Preview */}
          <div className="relative">
            {/* Phone mockup */}
            <div className="relative mx-auto w-80 h-[600px] bg-slate-800 rounded-[3rem] p-4 border-8 border-slate-700 shadow-2xl">
              {/* Screen */}
              <div className="w-full h-full bg-slate-900 rounded-[2rem] overflow-hidden relative">
                {/* Status bar */}
                <div className="flex justify-between items-center px-6 py-2 bg-slate-800">
                  <span className="text-white text-sm font-bold">9:41</span>
                  <div className="flex items-center gap-1">
                    <div className="w-4 h-2 bg-white rounded-sm"></div>
                    <div className="w-4 h-2 bg-white rounded-sm"></div>
                    <div className="w-6 h-3 bg-white rounded-sm"></div>
                  </div>
                </div>
                
                {/* App content */}
                <div className="p-6 h-full">
                  {/* Header */}
                  <div className="text-center mb-6">
                    <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-2">
                      Desafio Diário
                    </div>
                    <div className="flex items-center justify-center gap-2 text-yellow-400">
                      <Star size={16} fill="currentColor" />
                      <span className="text-sm">{dailyChallenge.points} pontos</span>
                    </div>
                  </div>
                  
                  {/* Question */}
                  <div className="bg-slate-800 rounded-xl p-4 mb-6">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-blue-400 text-sm font-bold">{dailyChallenge.subject}</span>
                      <span className="text-slate-400 text-sm">{dailyChallenge.difficulty}</span>
                    </div>
                    <p className="text-white font-bold">{dailyChallenge.question}</p>
                  </div>
                  
                  {/* Options */}
                  <div className="space-y-3 mb-6">
                    {dailyChallenge.options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleAnswerSelect(index)}
                        disabled={showResult}
                        className={`w-full p-3 rounded-xl text-left transition-all duration-300 border-2 ${
                          showResult
                            ? index === dailyChallenge.correctAnswer
                              ? 'border-green-400 bg-green-500/20 text-green-400'
                              : selectedAnswer === index
                              ? 'border-red-400 bg-red-500/20 text-red-400'
                              : 'border-slate-600 bg-slate-700 text-slate-300'
                            : selectedAnswer === index
                            ? 'border-blue-400 bg-blue-500/20 text-blue-400'
                            : 'border-slate-600 bg-slate-700 text-white hover:border-slate-500'
                        }`}
                      >
                        <span className="font-bold mr-3">{String.fromCharCode(65 + index)})</span>
                        {option}
                      </button>
                    ))}
                  </div>
                  
                  {/* Action button */}
                  <button 
                    className={`w-full py-3 rounded-xl font-bold transition-all duration-300 ${
                      showResult
                        ? 'bg-green-500 text-white'
                        : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700'
                    }`}
                  >
                    {showResult ? '✅ Parabéns! +50 pontos' : 'Responder'}
                  </button>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-10 -left-10 w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
              <Star size={24} className="text-yellow-800" fill="currentColor" />
            </div>
            <div className="absolute -bottom-10 -right-10 w-16 h-16 bg-green-400 rounded-full flex items-center justify-center animate-pulse">
              <Play size={20} className="text-green-800" fill="currentColor" />
            </div>
          </div>
          
          {/* Download content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Leve o Gabaritei 
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  no seu Bolso!
                </span>
              </h3>
              
              <div className="space-y-4 text-slate-300 text-lg">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <span>Estude offline com questões baixadas</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <span>Receba notificações personalizadas de estudo</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <span>Sincronize seu progresso em todos os dispositivos</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <span>Desafios diários exclusivos do app</span>
                </div>
              </div>
            </div>
            
            {/* Download buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center gap-4 bg-slate-800 hover:bg-slate-700 transition-all duration-300 rounded-2xl p-4 border border-slate-600 hover:border-slate-500 hover:scale-105 shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <Play size={24} className="text-white" fill="currentColor" />
                </div>
                <div className="text-left">
                  <div className="text-slate-400 text-sm">Baixar no</div>
                  <div className="text-white font-bold text-lg">Google Play</div>
                </div>
              </button>
              
              <button className="flex items-center gap-4 bg-slate-800 hover:bg-slate-700 transition-all duration-300 rounded-2xl p-4 border border-slate-600 hover:border-slate-500 hover:scale-105 shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-r from-gray-600 to-gray-800 rounded-xl flex items-center justify-center">
                  <Apple size={24} className="text-white" />
                </div>
                <div className="text-left">
                  <div className="text-slate-400 text-sm">Baixar na</div>
                  <div className="text-white font-bold text-lg">App Store</div>
                </div>
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-700">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">4.9</div>
                <div className="text-slate-400 text-sm">Avaliação</div>
                <div className="flex justify-center gap-1 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} className="text-yellow-400" fill="currentColor" />
                  ))}
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">100K+</div>
                <div className="text-slate-400 text-sm">Downloads</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">50K+</div>
                <div className="text-slate-400 text-sm">Avaliações</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownloadSection;