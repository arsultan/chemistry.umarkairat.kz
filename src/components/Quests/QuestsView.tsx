"use client";

import React from "react";
import { Language } from "@/types/chemistry";
import { QUESTS_DATA } from "@/data/quests";
import { ACHIEVEMENTS_DATA } from "@/data/achievements";
import { MOLECULES_BY_ID } from "@/data/molecules";
import { getTranslation } from "@/data/i18n";
import { Trophy, CheckCircle2, Circle, Sparkles, Star, Award, Beaker } from "lucide-react";

interface QuestsViewProps {
  language: Language;
  discoveredIds: string[];
  completedQuests: string[];
  unlockedAchievements: string[];
  onGoToLab: () => void;
}

export const QuestsView: React.FC<QuestsViewProps> = ({
  language,
  discoveredIds,
  completedQuests,
  unlockedAchievements,
  onGoToLab
}) => {
  const t = (k: string) => getTranslation(language, k);
  const discoveredSet = new Set(discoveredIds);
  const completedSet = new Set(completedQuests);
  const unlockedSet = new Set(unlockedAchievements);

  const totalPoints = QUESTS_DATA
    .filter(q => completedSet.has(q.id))
    .reduce((sum, q) => sum + q.rewardPoints, 0);

  return (
    <div className="space-y-6 max-w-7xl mx-auto px-4 py-3">
      {/* Quests Header & Score Banner */}
      <div className="p-6 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-white/[0.08] shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider uppercase text-amber-700 dark:text-amber-400 bg-amber-500/10 border border-amber-500/25 mb-2">
            <Trophy className="w-3.5 h-3.5" />
            <span>{t("questsTitle")}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
            School Laboratory Curriculum Quests
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
            {t("questsSubtitle")}
          </p>
        </div>

        {/* Total Points Badge */}
        <div className="flex items-center gap-3.5 bg-slate-50 dark:bg-slate-950/60 p-3.5 rounded-2xl border border-slate-200 dark:border-white/[0.08]">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-500 dark:text-amber-400">
            <Star className="w-5 h-5 fill-amber-400" />
          </div>
          <div>
            <div className="text-[10px] font-mono uppercase text-slate-500 dark:text-slate-400">Total Science Score</div>
            <div className="text-xl font-bold font-mono text-slate-900 dark:text-white">
              {totalPoints} <span className="text-xs font-normal text-amber-600 dark:text-amber-400">{t("pointsReward")}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quests Grid */}
      <div className="space-y-3.5">
        <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white font-mono flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
          <span>Active Quests ({QUESTS_DATA.filter(q => completedSet.has(q.id)).length} / {QUESTS_DATA.length})</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {QUESTS_DATA.map(quest => {
            const isDone = completedSet.has(quest.id);
            const reqCount = quest.requiredMolecules.length;
            const metCount = quest.requiredMolecules.filter(id => discoveredSet.has(id)).length;
            const progressPercent = Math.round((metCount / reqCount) * 100);

            return (
              <div
                key={quest.id}
                className={`p-5 rounded-2xl border transition-all relative overflow-hidden flex flex-col justify-between gap-3.5 ${
                  isDone
                    ? "bg-white dark:bg-slate-900/90 border-emerald-500/40 shadow-sm"
                    : "bg-white dark:bg-slate-900/80 border-slate-200/80 dark:border-white/[0.08] hover:border-slate-400 dark:hover:border-white/[0.15]"
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl p-2 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-white/[0.06]">
                        {quest.badge}
                      </span>
                      <div>
                        <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white tracking-tight">
                          {quest.title[language]}
                        </h3>
                        <span className="text-xs font-mono font-semibold text-amber-600 dark:text-amber-400 mt-0.5 inline-block">
                          +{quest.rewardPoints} XP
                        </span>
                      </div>
                    </div>

                    {isDone ? (
                      <span className="flex items-center gap-1 text-xs font-mono font-medium text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/25">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>{t("completed")}</span>
                      </span>
                    ) : (
                      <span className="text-xs font-mono text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-950/60 px-2.5 py-1 rounded-full border border-slate-200 dark:border-white/[0.06]">
                        {metCount}/{reqCount}
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-2.5 leading-relaxed">
                    {quest.description[language]}
                  </p>

                  {/* Required Molecules Checklist */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {quest.requiredMolecules.map(molId => {
                      const mol = MOLECULES_BY_ID.get(molId);
                      const isUn = discoveredSet.has(molId);
                      return (
                        <div
                          key={molId}
                          className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono border transition-colors ${
                            isUn
                              ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/25 font-semibold"
                              : "bg-slate-50 dark:bg-slate-950/50 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-white/[0.06]"
                          }`}
                        >
                          {isUn ? <CheckCircle2 className="w-3 h-3 text-emerald-600 dark:text-emerald-400" /> : <Circle className="w-3 h-3 text-slate-400 dark:text-slate-500" />}
                          <span>{mol?.formula || molId} ({mol?.name[language] || molId})</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Progress bar and button */}
                <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-white/[0.06]">
                  <div className="w-full h-1.5 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-emerald-500 transition-all duration-500"
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>

                  {!isDone && (
                    <button
                      onClick={onGoToLab}
                      className="text-xs font-mono text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 hover:underline flex items-center gap-1 cursor-pointer font-medium"
                    >
                      <Beaker className="w-3 h-3" />
                      <span>Synthesize in Reaction Lab →</span>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Achievements / Badges Gallery */}
      <div className="space-y-3.5 pt-3">
        <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white font-mono flex items-center gap-2">
          <Award className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
          <span>{t("achievementsTitle")} ({ACHIEVEMENTS_DATA.filter(a => unlockedSet.has(a.id)).length} / {ACHIEVEMENTS_DATA.length})</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {ACHIEVEMENTS_DATA.map(ach => {
            const isUnlocked = unlockedSet.has(ach.id);
            return (
              <div
                key={ach.id}
                className={`p-4 rounded-2xl border text-center flex flex-col items-center justify-between gap-2 transition-all shadow-sm ${
                  isUnlocked
                    ? "bg-white dark:bg-slate-900/90 border-indigo-500/30"
                    : "bg-slate-50 dark:bg-slate-950/40 border-slate-200/80 dark:border-white/[0.05] opacity-60 grayscale"
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-950/60 border border-slate-200 dark:border-white/[0.08] flex items-center justify-center text-2xl my-1">
                  {ach.icon}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white tracking-tight">
                    {ach.title[language]}
                  </h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">
                    {ach.description[language]}
                  </p>
                </div>
                <div className="pt-1 text-[10px] font-mono">
                  {isUnlocked ? (
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wider">Unlocked!</span>
                  ) : (
                    <span className="text-slate-400 dark:text-slate-500 uppercase tracking-wider">Locked</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
