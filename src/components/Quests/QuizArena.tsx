"use client";

import React, { useState, useEffect, useRef } from "react";
import { 
  QUIZ_QUESTIONS, 
  QUIZ_CATEGORIES, 
  QuizQuestion, 
  QuizCategory, 
  QuizDifficulty, 
  getRankByScore 
} from "@/data/quizQuestions";
import { Language } from "@/types/chemistry";
import { soundEffects } from "@/lib/soundEffects";
import { 
  Trophy, 
  Zap, 
  Clock, 
  Heart, 
  Sparkles, 
  RotateCcw, 
  Lightbulb, 
  Scissors, 
  HelpCircle, 
  CheckCircle2, 
  XCircle, 
  Flame, 
  ArrowRight, 
  Award,
  BookOpen,
  Filter,
  Play
} from "lucide-react";

interface QuizArenaProps {
  language: Language;
  onEarnXP?: (amount: number) => void;
  onGoToLab?: () => void;
}

type QuizGameMode = 'blitz' | 'olympiad' | 'category';

export const QuizArena: React.FC<QuizArenaProps> = ({ language, onEarnXP, onGoToLab }) => {
  // Game Setup State
  const [gameMode, setGameMode] = useState<QuizGameMode>('olympiad');
  const [selectedCategory, setSelectedCategory] = useState<QuizCategory | 'all'>('all');
  const [gameState, setGameState] = useState<'lobby' | 'playing' | 'answered' | 'finished'>('lobby');

  // Active Game Session State
  const [questionsQueue, setQuestionsQueue] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [highestStreak, setHighestStreak] = useState(0);
  const [lives, setLives] = useState(3);
  const [timeLeft, setTimeLeft] = useState(60);

  // Lifelines (1 per game)
  const [usedFiftyFifty, setUsedFiftyFifty] = useState(false);
  const [usedHint, setUsedHint] = useState(false);
  const [showHintModal, setShowHintModal] = useState(false);
  const [eliminatedOptions, setEliminatedOptions] = useState<string[]>([]);

  // Review log
  const [answersLog, setAnswersLog] = useState<{ question: QuizQuestion; chosenId: string; isCorrect: boolean }[]>([]);

  // High score in localStorage
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("chemistry_quiz_high_score");
      if (saved) setHighScore(parseInt(saved, 10));
    } catch {
      // ignore
    }
  }, []);

  // Timer loop for Blitz and Olympiad
  useEffect(() => {
    if (gameState !== 'playing') return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          handleTimeOut();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [gameState, currentIndex]);

  const handleTimeOut = () => {
    soundEffects.playAtomRemove();
    if (gameMode === 'blitz') {
      finishGame();
    } else {
      // Olympiad mode: lose a life
      const nextLives = lives - 1;
      setLives(nextLives);
      if (nextLives <= 0) {
        finishGame();
      } else {
        nextQuestion();
      }
    }
  };

  const startNewGame = (mode: QuizGameMode, category: QuizCategory | 'all' = selectedCategory) => {
    soundEffects.playReaction();
    setGameMode(mode);
    setSelectedCategory(category);

    // Filter questions
    let pool = [...QUIZ_QUESTIONS];
    if (category !== 'all') {
      pool = pool.filter(q => q.category === category);
    }
    // Shuffle questions
    pool = pool.sort(() => Math.random() - 0.5);

    // Limit count depending on mode
    const count = mode === 'olympiad' ? 10 : mode === 'blitz' ? 15 : 8;
    const finalQueue = pool.slice(0, count);

    setQuestionsQueue(finalQueue);
    setCurrentIndex(0);
    setScore(0);
    setStreak(0);
    setHighestStreak(0);
    setLives(mode === 'olympiad' ? 3 : 1);
    setTimeLeft(mode === 'blitz' ? 60 : 25);
    setUsedFiftyFifty(false);
    setUsedHint(false);
    setShowHintModal(false);
    setEliminatedOptions([]);
    setAnswersLog([]);
    setSelectedOptionId(null);
    setGameState('playing');
  };

  const currentQuestion = questionsQueue[currentIndex] || QUIZ_QUESTIONS[0];

  const handleSelectOption = (optionId: string) => {
    if (gameState !== 'playing' || selectedOptionId !== null) return;

    setSelectedOptionId(optionId);
    setGameState('answered');

    const isCorrect = optionId === currentQuestion.correctOptionId;

    if (isCorrect) {
      soundEffects.playDiscovery();
      const comboMultiplier = streak >= 4 ? 2.5 : streak >= 2 ? 1.8 : 1.0;
      const earned = Math.round(currentQuestion.xpReward * comboMultiplier);
      const newScore = score + earned;
      setScore(newScore);

      const newStreak = streak + 1;
      setStreak(newStreak);
      if (newStreak > highestStreak) setHighestStreak(newStreak);

      if (onEarnXP) onEarnXP(earned);

      // Save high score
      if (newScore > highScore) {
        setHighScore(newScore);
        try {
          localStorage.setItem("chemistry_quiz_high_score", newScore.toString());
        } catch {
          // ignore
        }
      }
    } else {
      soundEffects.playAtomRemove();
      setStreak(0);
      if (gameMode === 'olympiad') {
        setLives(prev => Math.max(0, prev - 1));
      }
    }

    setAnswersLog(prev => [
      ...prev,
      { question: currentQuestion, chosenId: optionId, isCorrect }
    ]);
  };

  const nextQuestion = () => {
    soundEffects.playAtomAdd();
    setEliminatedOptions([]);
    setSelectedOptionId(null);
    setShowHintModal(false);

    if (gameMode === 'olympiad' && lives <= 0) {
      finishGame();
      return;
    }

    if (currentIndex + 1 >= questionsQueue.length) {
      finishGame();
    } else {
      setCurrentIndex(prev => prev + 1);
      setTimeLeft(gameMode === 'blitz' ? timeLeft : 25);
      setGameState('playing');
    }
  };

  const finishGame = () => {
    soundEffects.playDiscovery();
    setGameState('finished');
  };

  // 50/50 Lifeline
  const handleUseFiftyFifty = () => {
    if (usedFiftyFifty || gameState !== 'playing') return;
    soundEffects.playExperiment();
    setUsedFiftyFifty(true);

    const incorrectOptions = currentQuestion.options
      .filter(o => o.id !== currentQuestion.correctOptionId)
      .map(o => o.id);
    
    // Pick 2 random incorrect to eliminate
    const shuffled = incorrectOptions.sort(() => Math.random() - 0.5);
    setEliminatedOptions(shuffled.slice(0, 2));
  };

  // Hint Lifeline
  const handleUseHint = () => {
    if (usedHint || gameState !== 'playing') return;
    soundEffects.playBubble();
    setUsedHint(true);
    setShowHintModal(true);
  };

  // Keyboard shortcut listener (1, 2, 3, 4)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (gameState !== 'playing') return;
      const keyMap: Record<string, string> = { "1": "a", "2": "b", "3": "c", "4": "d" };
      const optionId = keyMap[e.key];
      if (optionId && !eliminatedOptions.includes(optionId)) {
        handleSelectOption(optionId);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [gameState, eliminatedOptions, currentQuestion]);

  const userRank = getRankByScore(score);

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      
      {/* 1. LOBBY VIEW */}
      {gameState === 'lobby' && (
        <div className="space-y-6">
          {/* Hero Banner */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-500/15 via-[#7c6ff6]/15 to-indigo-500/15 dark:from-amber-950/30 dark:via-[#1c183b] dark:to-indigo-950/30 border border-slate-200/80 dark:border-white/[0.1] p-6 sm:p-8 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30 mb-3">
                  <Flame className="w-4 h-4 text-amber-500" />
                  <span>{language === 'kk' ? 'Химиялық Олимпиада & Турнир' : language === 'en' ? 'Chemistry Olympiad & Battle Arena' : 'Химическая Олимпиада & Турнир'}</span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                  {language === 'kk' ? 'Үздік Химия Квиз-Аренасы' : language === 'en' ? 'Ultimate Chemistry Quiz Arena' : 'Арена Химических Знаний & Квиз'}
                </h1>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 max-w-xl leading-relaxed">
                  {language === 'kk'
                    ? 'Теория, реакциялар, бейорганика мен органика бойынша олимпиадалық сұрақтарға жауап беріңіз. Комбо жинап, ұпай жинаңыз және Ғылым Академигі атағын жеңіп алыңыз!'
                    : language === 'en'
                    ? 'Test your chemistry mastery across periodic laws, redox reactions, organic mechanisms, and pH analysis. Chain combos and climb to Grand Chemist rank!'
                    : 'Проверьте силу своих знаний в неорганике, органике, pH и качественных реакциях. Выбивайте комбо-серии и заслужите высшее звание Академика Химии!'}
                </p>
              </div>

              {/* High Score Badge */}
              <div className="p-4 rounded-2xl bg-white/80 dark:bg-white/[0.05] border border-slate-200 dark:border-white/[0.1] backdrop-blur-md text-center shrink-0 min-w-[140px]">
                <div className="text-2xl mb-1">{userRank.badge}</div>
                <div className="text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  {language === 'kk' ? 'Үздік Нәтиже' : language === 'en' ? 'Personal Best' : 'Рекорд'}
                </div>
                <div className="text-xl font-black font-mono text-amber-600 dark:text-amber-400">
                  {highScore} XP
                </div>
              </div>
            </div>
          </div>

          {/* Game Modes Selection */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Mode 1: Olympiad Exam */}
            <div 
              onClick={() => startNewGame('olympiad')}
              className="p-6 rounded-3xl bg-white dark:bg-[#121424] border-2 border-amber-500/40 hover:border-amber-500 hover:shadow-xl hover:shadow-amber-500/10 transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-500 mb-4 group-hover:scale-110 transition-transform">
                  <Trophy className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                  {language === 'kk' ? 'Олимпиадалық режим' : language === 'en' ? 'Olympiad Exam' : 'Олимпиадный экзамен'}
                </span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1">
                  {language === 'kk' ? '10 Күрделі Сұрақ' : language === 'en' ? '10 Deep Questions' : '10 Академических вопросов'}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                  {language === 'kk' ? '3 өмір ❤️❤️❤️. Терең сұрақтар мен формулалар. Әр сұраққа 25 секунд беріледі.' : language === 'en' ? '3 Lives ❤️❤️❤️. Balanced difficulty with detailed explanations. 25 seconds per question.' : '3 жизни ❤️❤️❤️. Сбалансированная сложность и подробнейшие объяснения формул. 25 секунд на вопрос.'}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/[0.06] flex items-center justify-between text-xs font-mono font-bold text-amber-600 dark:text-amber-400">
                <span>{language === 'kk' ? 'Бастау' : language === 'en' ? 'Start Exam' : 'Начать Экзамен'}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Mode 2: Speed Blitz */}
            <div 
              onClick={() => startNewGame('blitz')}
              className="p-6 rounded-3xl bg-white dark:bg-[#121424] border-2 border-rose-500/30 hover:border-rose-500 hover:shadow-xl hover:shadow-rose-500/10 transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-rose-500/15 border border-rose-500/30 flex items-center justify-center text-rose-500 mb-4 group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">
                  {language === 'kk' ? 'Жылдамдық режимі' : language === 'en' ? 'Speed Blitz' : 'Блиц-Турнир'}
                </span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1">
                  {language === 'kk' ? '60 Секунд Блиц' : language === 'en' ? '60-Second Rush' : '60 Секунд на Максимум'}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                  {language === 'kk' ? 'Уақыт біткенше барынша көп жауап беріңіз! Әр дұрыс жауап сериясы комбо көбейткішін береді.' : language === 'en' ? 'Race the clock! Answer as many questions as possible in 60s with fire combo multipliers.' : 'Отвечайте на скорость! Серии побед дают огненные множители очков x1.8 и x2.5.'}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/[0.06] flex items-center justify-between text-xs font-mono font-bold text-rose-600 dark:text-rose-400">
                <span>{language === 'kk' ? 'Блицті бастау' : language === 'en' ? 'Start Blitz' : 'Начать Блиц'}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Mode 3: Topic Practice */}
            <div 
              onClick={() => startNewGame('category', 'periodic_table')}
              className="p-6 rounded-3xl bg-white dark:bg-[#121424] border-2 border-[#7c6ff6]/30 hover:border-[#7c6ff6] hover:shadow-xl hover:shadow-[#7c6ff6]/10 transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#7c6ff6]/15 border border-[#7c6ff6]/30 flex items-center justify-center text-[#7c6ff6] mb-4 group-hover:scale-110 transition-transform">
                  <BookOpen className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#7c6ff6] dark:text-[#a59bfb]">
                  {language === 'kk' ? 'Тақырыптық жаттығу' : language === 'en' ? 'Topic Practice' : 'Тематический тренажер'}
                </span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1">
                  {language === 'kk' ? 'Тақырыпты Таңдау' : language === 'en' ? 'Select Topic' : 'Выбор Конкретной Темы'}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                  {language === 'kk' ? 'Кесте, Органика, pH немесе Қазақстан ғылымы бойынша арнайы мақсатты дайындық.' : language === 'en' ? 'Targeted training on specific subjects: Organic, Acids & pH, or Science in Kazakhstan.' : 'Целенаправленная тренировка по разделам: Органика, Таблица, Осадки или Наука Казахстана.'}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/[0.06] flex items-center justify-between text-xs font-mono font-bold text-[#7c6ff6] dark:text-[#a59bfb]">
                <span>{language === 'kk' ? 'Тақырып таңдау' : language === 'en' ? 'Choose Topic' : 'Выбрать Тему'}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

          {/* Category Chips Bar */}
          <div className="p-6 rounded-3xl bg-white dark:bg-[#121424] border border-slate-200/80 dark:border-white/[0.08] space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase text-slate-500 dark:text-slate-400 tracking-wider flex items-center gap-2">
              <Filter className="w-3.5 h-3.5" />
              {language === 'kk' ? 'Жылдам санат бойынша ойнау:' : language === 'en' ? 'Quick Play by Subject:' : 'Быстрый запуск по темам:'}
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {QUIZ_CATEGORIES.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => startNewGame('category', cat.id)}
                  className="p-3 rounded-2xl bg-slate-50 dark:bg-white/[0.03] hover:bg-slate-100 dark:hover:bg-white/[0.08] border border-slate-200 dark:border-white/[0.08] transition flex items-center gap-2.5 text-left cursor-pointer group"
                >
                  <span className="text-xl group-hover:scale-125 transition-transform">{cat.icon}</span>
                  <div className="min-w-0">
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-200 block truncate">
                      {cat.name[language]}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">
                      {QUIZ_QUESTIONS.filter(q => q.category === cat.id).length} {language === 'kk' ? 'сұрақ' : language === 'en' ? 'questions' : 'вопросов'}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 2. PLAYING / ANSWERED ACTIVE GAME VIEW */}
      {(gameState === 'playing' || gameState === 'answered') && (
        <div className="space-y-4 animate-in fade-in">
          
          {/* Active Game Telemetry Header */}
          <div className="p-4 sm:p-5 rounded-3xl bg-white dark:bg-[#121424] border border-slate-200/80 dark:border-white/[0.08] shadow-sm flex items-center justify-between gap-4">
            {/* Progress counter */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-white/[0.08] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/[0.08]">
                {currentIndex + 1} / {questionsQueue.length}
              </span>
              <span className="text-xs font-mono font-bold text-[#7c6ff6] dark:text-[#a59bfb] hidden sm:inline">
                {QUIZ_CATEGORIES.find(c => c.id === currentQuestion.category)?.name[language]}
              </span>
            </div>

            {/* Timer Display */}
            <div className={`flex items-center gap-2 px-3 py-1.5 rounded-xl font-mono text-xs font-black ${
              timeLeft <= 5 ? 'bg-rose-500/20 text-rose-500 animate-pulse ring-2 ring-rose-500' : 'bg-slate-100 dark:bg-white/[0.08] text-slate-800 dark:text-slate-200'
            }`}>
              <Clock className="w-4 h-4" />
              <span>{timeLeft}s</span>
            </div>

            {/* Lives (Olympiad) or Score (Blitz) */}
            <div className="flex items-center gap-3">
              {gameMode === 'olympiad' && (
                <div className="flex items-center gap-1">
                  {[1, 2, 3].map(heartIndex => (
                    <Heart 
                      key={heartIndex} 
                      className={`w-4 h-4 ${heartIndex <= lives ? 'fill-rose-500 text-rose-500' : 'text-slate-300 dark:text-slate-700'}`} 
                    />
                  ))}
                </div>
              )}

              {/* Combo Streak */}
              {streak >= 2 && (
                <div className="px-2.5 py-1 rounded-xl bg-gradient-to-r from-amber-500 to-rose-500 text-white font-mono text-xs font-black flex items-center gap-1 shadow-sm animate-bounce">
                  <Flame className="w-3.5 h-3.5" />
                  <span>x{streak >= 4 ? '2.5' : '1.8'} STREAK</span>
                </div>
              )}

              {/* Score Counter */}
              <div className="text-right">
                <span className="text-sm sm:text-base font-mono font-black text-amber-500 dark:text-amber-400">
                  {score} XP
                </span>
              </div>
            </div>
          </div>

          {/* Question Card Stage */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#121424] border border-slate-200/80 dark:border-white/[0.08] shadow-sm space-y-6">
            
            {/* Lifelines Toolbar */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-white/[0.06]">
              <span className="text-xs font-mono font-bold text-slate-400">
                +{currentQuestion.xpReward} XP Base
              </span>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleUseFiftyFifty}
                  disabled={usedFiftyFifty || gameState !== 'playing'}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold flex items-center gap-1.5 transition ${
                    usedFiftyFifty
                      ? 'opacity-40 cursor-not-allowed bg-slate-100 dark:bg-white/[0.03] text-slate-400'
                      : 'bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 border border-indigo-200/60 dark:border-indigo-500/30 cursor-pointer'
                  }`}
                  title="Убрать 2 неверных ответа"
                >
                  <Scissors className="w-3.5 h-3.5" />
                  <span>50 / 50</span>
                </button>

                <button
                  onClick={handleUseHint}
                  disabled={usedHint || gameState !== 'playing'}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold flex items-center gap-1.5 transition ${
                    usedHint
                      ? 'opacity-40 cursor-not-allowed bg-slate-100 dark:bg-white/[0.03] text-slate-400'
                      : 'bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 hover:bg-amber-100 border border-amber-200/60 dark:border-amber-500/30 cursor-pointer'
                  }`}
                  title="Получить подсказку ИИ"
                >
                  <Lightbulb className="w-3.5 h-3.5" />
                  <span>{language === 'kk' ? 'Көмек' : language === 'en' ? 'Hint' : 'Подсказка'}</span>
                </button>
              </div>
            </div>

            {/* Question Text */}
            <div className="py-2">
              <h2 className="text-lg sm:text-2xl font-bold text-slate-900 dark:text-white leading-snug tracking-tight">
                {currentQuestion.question[language]}
              </h2>
            </div>

            {/* Answer Options Grid (4 options) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {currentQuestion.options.map((opt, idx) => {
                const isEliminated = eliminatedOptions.includes(opt.id);
                const isSelected = selectedOptionId === opt.id;
                const isCorrect = opt.id === currentQuestion.correctOptionId;

                let cardStyle = "bg-slate-50 dark:bg-white/[0.03] border-slate-200 dark:border-white/[0.08] hover:border-[#7c6ff6] hover:bg-slate-100 dark:hover:bg-white/[0.06]";

                if (gameState === 'answered') {
                  if (isCorrect) {
                    cardStyle = "bg-emerald-500/15 border-emerald-500 text-emerald-800 dark:text-emerald-300 ring-2 ring-emerald-500/40 shadow-lg shadow-emerald-500/10";
                  } else if (isSelected) {
                    cardStyle = "bg-rose-500/15 border-rose-500 text-rose-800 dark:text-rose-300 ring-2 ring-rose-500/40";
                  } else {
                    cardStyle = "opacity-40 border-slate-200 dark:border-white/[0.05]";
                  }
                }

                if (isEliminated) {
                  return (
                    <div 
                      key={opt.id}
                      className="p-4 rounded-2xl border border-dashed border-slate-200 dark:border-white/[0.05] opacity-25 select-none text-center font-mono text-xs"
                    >
                      ✕ {language === 'kk' ? 'Жойылды' : language === 'en' ? 'Eliminated' : 'Исключено'}
                    </div>
                  );
                }

                return (
                  <button
                    key={opt.id}
                    onClick={() => handleSelectOption(opt.id)}
                    disabled={gameState === 'answered'}
                    className={`p-4 sm:p-5 rounded-2xl border-2 transition-all cursor-pointer flex items-center gap-3.5 text-left active:scale-[0.98] ${cardStyle}`}
                  >
                    <span className="w-8 h-8 rounded-xl bg-white dark:bg-white/[0.08] border border-slate-200 dark:border-white/[0.1] flex items-center justify-center text-xs font-mono font-black text-slate-700 dark:text-slate-300 shrink-0 shadow-sm">
                      {idx + 1}
                    </span>
                    <span className="text-sm font-semibold text-slate-900 dark:text-slate-100 flex-1">
                      {opt.text[language]}
                    </span>
                    {gameState === 'answered' && isCorrect && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                    )}
                    {gameState === 'answered' && isSelected && !isCorrect && (
                      <XCircle className="w-5 h-5 text-rose-500 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Hint Box (if lifeline activated) */}
            {showHintModal && (
              <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3 animate-in fade-in">
                <Lightbulb className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div className="text-xs text-amber-900 dark:text-amber-200 leading-relaxed">
                  <strong className="font-bold">{language === 'kk' ? 'ИИ Көмегі: ' : language === 'en' ? 'AI Hint: ' : 'Подсказка ИИ: '}</strong>
                  {currentQuestion.hint[language]}
                </div>
              </div>
            )}

            {/* Scientific Explanation & Next Question Button */}
            {gameState === 'answered' && (
              <div className="pt-4 border-t border-slate-100 dark:border-white/[0.06] space-y-4 animate-in fade-in slide-in-from-bottom-2">
                <div className="p-4 rounded-2xl bg-[#7c6ff6]/10 border border-[#7c6ff6]/20">
                  <span className="text-[10px] font-mono font-bold uppercase text-[#7c6ff6] dark:text-[#a59bfb] tracking-wider block mb-1">
                    {language === 'kk' ? 'Ғылыми дәлелдеме:' : language === 'en' ? 'Scientific Explanation:' : 'Научное обоснование:'}
                  </span>
                  <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
                    {currentQuestion.explanation[language]}
                  </p>
                </div>

                <div className="flex items-center justify-end">
                  <button
                    onClick={nextQuestion}
                    className="px-6 py-3 rounded-2xl bg-[#7c6ff6] hover:bg-[#6b5ce7] text-white font-mono text-xs font-bold flex items-center gap-2 shadow-lg shadow-[#7c6ff6]/30 cursor-pointer transition"
                  >
                    <span>{currentIndex + 1 >= questionsQueue.length ? (language === 'kk' ? 'Нәтижені көру' : language === 'en' ? 'See Results' : 'Завершить и увидеть итог') : (language === 'kk' ? 'Келесі сұрақ' : language === 'en' ? 'Next Question' : 'Следующий вопрос')}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 3. FINISHED / VICTORY VIEW */}
      {gameState === 'finished' && (
        <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-[#121424] border border-slate-200/80 dark:border-white/[0.08] shadow-2xl text-center space-y-6 animate-in zoom-in-95">
          
          <div className="relative inline-block">
            <div className="w-24 h-24 rounded-3xl bg-amber-500/20 border-2 border-amber-500/40 flex items-center justify-center text-5xl mx-auto shadow-inner">
              {userRank.badge}
            </div>
            <div className="absolute -bottom-2 -right-2 p-2 rounded-full bg-[#7c6ff6] text-white shadow-md">
              <Sparkles className="w-4 h-4" />
            </div>
          </div>

          <div>
            <span className="text-xs font-mono font-bold uppercase text-amber-600 dark:text-amber-400 tracking-wider">
              {language === 'kk' ? 'Турнир аяқталды!' : language === 'en' ? 'Tournament Complete!' : 'Турнир Завершен!'}
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white mt-1">
              {userRank.title[language]}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-md mx-auto">
              {score >= highScore && score > 0 
                ? (language === 'kk' ? 'Жаңа абсолютті рекорд орнатылды! Құттықтаймыз!' : language === 'en' ? 'New All-Time High Score! Congratulations!' : 'Установлен новый личный рекорд! Поздравляем!')
                : (language === 'kk' ? 'Керемет нәтиже! Біліміңізді одан әрі шыңдаңыз.' : language === 'en' ? 'Great performance! Continue refining your chemical intuition.' : 'Отличный результат! Продолжайте совершенствовать химические знания.')}
            </p>
          </div>

          {/* Stats Badges Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl mx-auto">
            <div className="p-3 rounded-2xl bg-slate-50 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.06]">
              <span className="text-[10px] font-mono uppercase text-slate-400">Total Score</span>
              <div className="text-xl font-black font-mono text-amber-500">{score} XP</div>
            </div>
            <div className="p-3 rounded-2xl bg-slate-50 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.06]">
              <span className="text-[10px] font-mono uppercase text-slate-400">Accuracy</span>
              <div className="text-xl font-black font-mono text-emerald-500">
                {answersLog.length > 0 ? Math.round((answersLog.filter(a => a.isCorrect).length / answersLog.length) * 100) : 0}%
              </div>
            </div>
            <div className="p-3 rounded-2xl bg-slate-50 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.06]">
              <span className="text-[10px] font-mono uppercase text-slate-400">Max Combo</span>
              <div className="text-xl font-black font-mono text-rose-500">x{highestStreak}</div>
            </div>
            <div className="p-3 rounded-2xl bg-slate-50 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.06]">
              <span className="text-[10px] font-mono uppercase text-slate-400">All-Time Best</span>
              <div className="text-xl font-black font-mono text-[#7c6ff6]">{highScore} XP</div>
            </div>
          </div>

          {/* Answers Review Accordion */}
          <div className="pt-4 border-t border-slate-100 dark:border-white/[0.06] text-left max-w-2xl mx-auto space-y-2">
            <h4 className="text-xs font-mono font-bold uppercase text-slate-400">
              {language === 'kk' ? 'Сұрақтарға жауаптарды талдау:' : language === 'en' ? 'Review Answers:' : 'Разбор ответов:'}
            </h4>
            <div className="space-y-2 max-h-60 overflow-y-auto no-scrollbar pr-1">
              {answersLog.map((log, i) => (
                <div
                  key={i}
                  className={`p-3 rounded-xl border text-xs flex items-start gap-2.5 ${
                    log.isCorrect 
                      ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-900 dark:text-emerald-200' 
                      : 'bg-rose-500/10 border-rose-500/30 text-rose-900 dark:text-rose-200'
                  }`}
                >
                  {log.isCorrect ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  ) : (
                    <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  )}
                  <div className="min-w-0">
                    <p className="font-bold truncate">{log.question.question[language]}</p>
                    <p className="text-[11px] opacity-80 mt-0.5">{log.question.explanation[language]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            <button
              onClick={() => startNewGame(gameMode)}
              className="px-6 py-3 rounded-2xl bg-[#7c6ff6] hover:bg-[#6b5ce7] text-white font-mono text-xs font-bold flex items-center gap-2 shadow-lg shadow-[#7c6ff6]/30 cursor-pointer transition"
            >
              <RotateCcw className="w-4 h-4" />
              <span>{language === 'kk' ? 'Қайта ойнау' : language === 'en' ? 'Play Again' : 'Сыграть ещё раз'}</span>
            </button>

            <button
              onClick={() => setGameState('lobby')}
              className="px-6 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 dark:bg-white/[0.08] dark:hover:bg-white/[0.15] text-slate-700 dark:text-slate-200 font-mono text-xs font-bold cursor-pointer transition border border-slate-200 dark:border-white/[0.1]"
            >
              <span>{language === 'kk' ? 'Басты мәзір' : language === 'en' ? 'Quiz Lobby' : 'В меню квизов'}</span>
            </button>

            {onGoToLab && (
              <button
                onClick={onGoToLab}
                className="px-6 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 dark:bg-white/[0.08] dark:hover:bg-white/[0.15] text-slate-700 dark:text-slate-200 font-mono text-xs font-bold cursor-pointer transition border border-slate-200 dark:border-white/[0.1]"
              >
                <span>{language === 'kk' ? 'Реакторға өту' : language === 'en' ? 'Go to Lab' : 'Перейти в Лабораторию'}</span>
              </button>
            )}
          </div>
        </div>
      )}

    </div>
  );
};
