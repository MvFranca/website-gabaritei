import React, { useState, useEffect } from 'react';
import { Trophy, Target, Crown, Award, Sparkles, TrendingUp, Users, Star } from 'lucide-react';
import { achievements, leaderboard, studyPlan } from './mock';

const GameSection = () => {
  const [activeTab, setActiveTab] = useState('achievements');
  const [animatedAchievements, setAnimatedAchievements] = useState([]);

  useEffect(() => {
    // Animar conquistas quando entrarem na view
    achievements.forEach((_, index) => {
      setTimeout(() => {
        setAnimatedAchievements(prev => [...prev, index]);
      }, index * 150);
    });
  }, []);

  const getRarityColor = (rarity) => {
    switch (rarity) {
      case 'common': return 'from-gray-500 to-gray-600';
      case 'rare': return 'from-blue-500 to-blue-600';  
      case 'epic': return 'from-purple-500 to-purple-600';
      case 'legendary': return 'from-yellow-500 to-orange-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getRarityBorder = (rarity) => {
    switch (rarity) {
      case 'common': return 'border-gray-400';
      case 'rare': return 'border-blue-400';
      case 'epic': return 'border-purple-400';
      case 'legendary': return 'border-yellow-400';
      default: return 'border-gray-400';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full px-6 py-3 mb-6">
            <Trophy size={24} className="text-white" />
            <span className="text-white font-bold">Sistema de Conquistas</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 mb-6">
            Transforme Estudos em Jogos
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Desbloqueie conquistas épicas, suba no ranking e prove que você é o verdadeiro 
            campeão dos vestibulares!
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-start sm:justify-center mb-12">
          <div className="max-w-max bg-slate-800/50 backdrop-blur-sm rounded-2xl p-2 border border-slate-700 overflow-x-scroll">
            <div className="flex gap-2 min-w-[534px]">
              {[
                { id: 'achievements', label: 'Conquistas', icon: Trophy },
                { id: 'leaderboard', label: 'Ranking', icon: Crown },
                { id: 'plan', label: 'Plano de Estudos', icon: Target }
              ].map((tab) => {
                const IconComponent = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg scale-105'
                        : 'text-slate-400 hover:text-white hover:bg-slate-700'
                    }`}
                  >
                    <IconComponent size={20} />
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto">
          {activeTab === 'achievements' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {achievements.map((achievement, index) => (
                <div
                  key={achievement.id}
                  className={`relative group transition-all duration-500 ${
                    animatedAchievements.includes(index) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className={`bg-slate-800 rounded-2xl p-6 border-2 transition-all duration-300 ${
                    achievement.unlocked 
                      ? `${getRarityBorder(achievement.rarity)} shadow-lg hover:shadow-2xl hover:scale-105` 
                      : 'border-slate-700 opacity-60'
                  }`}>
                    {/* Rarity glow effect */}
                    {achievement.unlocked && (
                      <div className={`absolute inset-0 bg-gradient-to-r ${getRarityColor(achievement.rarity)} rounded-2xl opacity-10 animate-pulse`}></div>
                    )}
                    
                    <div className="relative z-10">
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${
                          achievement.unlocked ? getRarityColor(achievement.rarity) : 'from-gray-600 to-gray-700'
                        } flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
                          {achievement.icon === 'Trophy' && <Trophy size={32} className="text-white" />}
                          {achievement.icon === 'Target' && <Target size={32} className="text-white" />}
                          {achievement.icon === 'Award' && <Award size={32} className="text-white" />}
                          {achievement.icon === 'Crown' && <Crown size={32} className="text-white" />}
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-xl font-bold text-white">{achievement.name}</h3>
                            <span className={`px-2 py-1 rounded-full text-xs font-bold uppercase ${
                              achievement.rarity === 'legendary' ? 'bg-yellow-500 text-black' :
                              achievement.rarity === 'epic' ? 'bg-purple-500 text-white' :
                              achievement.rarity === 'rare' ? 'bg-blue-500 text-white' :
                              'bg-gray-500 text-white'
                            }`}>
                              {achievement.rarity}
                            </span>
                          </div>
                          <p className="text-slate-400">{achievement.description}</p>
                        </div>
                        
                        {achievement.unlocked && (
                          <div className="text-green-400">
                            <Sparkles size={24} className="animate-pulse" />
                          </div>
                        )}
                      </div>
                      
                      {/* Progress bar for locked achievements */}
                      {!achievement.unlocked && (
                        <div className="mt-4">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm text-slate-400">Progresso</span>
                            <span className="text-sm font-bold text-slate-300">67%</span>
                          </div>
                          <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full w-2/3 animate-pulse"></div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'leaderboard' && (
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl border border-slate-700 overflow-hidden">
              <div className="bg-gradient-to-r from-yellow-600 to-orange-600 p-6">
                <div className="flex items-center gap-3">
                  <Crown size={32} className="text-white" />
                  <div>
                    <h3 className="text-2xl font-bold text-white">Ranking Semanal</h3>
                    <p className="text-yellow-100">Compete com os melhores estudantes do Brasil!</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                {leaderboard.map((player, index) => (
                  <div
                    key={player.position}
                    className={`flex items-center gap-4 p-4 rounded-xl mb-4 transition-all duration-300 hover:scale-102 ${
                      player.name === 'Você' 
                        ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30' 
                        : 'bg-slate-700/50 hover:bg-slate-700'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                      player.position === 1 ? 'bg-yellow-500 text-black' :
                      player.position === 2 ? 'bg-gray-400 text-black' :
                      player.position === 3 ? 'bg-orange-600 text-white' :
                      'bg-slate-600 text-white'
                    }`}>
                      #{player.position}
                    </div>
                    
                    <img
                      src={player.avatar}
                      alt={player.name}
                      className="w-12 h-12 rounded-full border-2 border-slate-600"
                    />
                    
                    <div className="flex-1">
                      <h4 className="font-bold text-white">{player.name}</h4>
                      <div className="flex items-center gap-2 text-slate-400 text-sm">
                        <Star size={14} className="text-yellow-400" />
                        {player.points.toLocaleString()} pontos
                      </div>
                    </div>
                    
                    {player.name === 'Você' && (
                      <div className="text-blue-400 font-bold">
                        <TrendingUp size={20} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'plan' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Progresso Semanal */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl border border-slate-700 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Target size={32} className="text-blue-400" />
                  <div>
                    <h3 className="text-2xl font-bold text-white">Progresso Semanal</h3>
                    <p className="text-slate-400">Semana {studyPlan.currentWeek} de {studyPlan.totalWeeks}</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  {/* Questões */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-300">Questões Resolvidas</span>
                      <span className="text-blue-400 font-bold">
                        {studyPlan.weeklyGoal.questionsSolved}/{studyPlan.weeklyGoal.questionsToSolve}
                      </span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000"
                        style={{ 
                          width: `${(studyPlan.weeklyGoal.questionsSolved / studyPlan.weeklyGoal.questionsToSolve) * 100}%` 
                        }}
                      ></div>
                    </div>
                  </div>
                  
                  {/* Horas de Estudo */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-300">Horas de Estudo</span>
                      <span className="text-green-400 font-bold">
                        {studyPlan.weeklyGoal.hoursStudied}h/{studyPlan.weeklyGoal.studyHours}h
                      </span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-green-500 to-emerald-600 rounded-full transition-all duration-1000"
                        style={{ 
                          width: `${(studyPlan.weeklyGoal.hoursStudied / studyPlan.weeklyGoal.studyHours) * 100}%` 
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Matérias Prioritárias */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl border border-slate-700 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Users size={32} className="text-purple-400" />
                  <div>
                    <h3 className="text-2xl font-bold text-white">Matérias Prioritárias</h3>
                    <p className="text-slate-400">Foque nestas matérias esta semana</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {studyPlan.subjects.map((subject, index) => (
                    <div
                      key={subject.name}
                      className="flex items-center justify-between p-4 bg-slate-700/50 rounded-xl border border-slate-600"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full ${
                          subject.priority === 'high' ? 'bg-red-500' :
                          subject.priority === 'medium' ? 'bg-yellow-500' :
                          'bg-green-500'
                        }`}></div>
                        <span className="font-bold text-white">{subject.name}</span>
                      </div>
                      <div className="text-slate-400">
                        {subject.questionsLeft} questões restantes
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default GameSection;