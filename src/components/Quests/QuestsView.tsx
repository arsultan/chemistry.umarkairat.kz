"use client";

import React from "react";
import { Language } from "@/types/chemistry";
import { QUESTS_DATA } from "@/data/quests";
import { ACHIEVEMENTS_DATA } from "@/data/achievements";
import { MOLECULES_BY_ID } from "@/data/molecules";
import { getTranslation } from "@/data/i18n";
import { soundEffects } from "@/lib/soundEffects";
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

  // Calculate total points
  const totalPoints = QUESTS_DATA
    .filter(q => completedSet.has(q.id))
    .reduce((sum, q) => sum + q.rewardPoints, 0);

  return (
    <div className="space-y-8 max-w-7xl mx-auto px-4 py-4">
      {/* Quests Header & Score Banner */}
      <div className="p-6 rounded-3xl bg-[#10141a] border border-white/10 shadow-2xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase text-[#f59e0b] bg-[#f59e0b]/15 border border-[#f59e0b]/40 shadow-sm mb-2">
            <Trophy className="w-3.5 h-3.5" />
            <span>{t("questsTitle")}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            School Laboratory Curriculum Quests
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            {t("questsSubtitle")}
          </p>
        </div>

        {/* Total Points Badge */}
        <div className="flex items-center gap-4 bg-[#181c22] p-4 rounded-2xl border border-white/10 shadow-inner">
          <div className="w-12 h-12 rounded-xl bg-[#f59e0b]/20 border border-[#f59e0b]/40 flex items-center justify-center text-[#fbbf24] shadow-[0_0_15px_rgba(245,158,11,0.3)]">
            <Star className="w-6 h-6 fill-[#fbbf24]" />
          </div>
          <div>
            <div className="text-[10px] font-mono uppercase text-slate-400">Total Science Score</div>
            <div className="text-2xl font-black font-mono text-white">
              {totalPoints} <span className="text-sm font-normal text-[#fbbf24]">{t("pointsReward")}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quests Grid */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-white font-mono flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#00d2ff]" />
          <span>Active Quests ({QUESTS_DATA.filter(q => completedSet.has(q.id)).length} / {QUESTS_DATA.length})</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {QUESTS_DATA.map(quest => {
            const isDone = completedSet.has(quest.id);
            const reqCount = quest.requiredMolecules.length;
            const metCount = quest.requiredMolecules.filter(id => discoveredSet.has(id)).length;
            const progressPercent = Math.round((metCount / reqCount) * 100);

            return (
              <div
                key={quest.id}
                className={`p-5 rounded-2xl border transition-all relative overflow-hidden flex flex-col justify-between gap-4 ${
                  isDone
                    ? "bg-[#10141a] border-[#10b981]/50 shadow-[0_0_20px_rgba(16,185,129,0.15)]"
                    : "bg-[#10141a] border-white/10 hover:border-white/20"
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl p-2 rounded-xl bg-[#181c22] border border-white/5">
                        {quest.badge}
                      </span>
                      <div>
                        <h3 className="text-base font-bold text-white tracking-tight">
                          {quest.title[language]}
                        </h3>
                        <span className="text-xs font-mono font-bold text-[#fbbf24] mt-0.5 inline-block">
                          +{quest.rewardPoints} XP
                        </span>
                      </div>
                    </div>

                    {isDone ? (
                      <span className="flex items-center gap-1 text-xs font-mono font-bold text-[#10b981] bg-[#10b981]/15 px-2.5 py-1 rounded-full border border-[#10b981]/40 shadow-sm">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>{t("completed")}</span>
                      </span>
                    ) : (
                      <span className="text-xs font-mono text-slate-400 bg-[#181c22] px-2.5 py-1 rounded-full border border-white/5">
                        {metCount}/{reqCount}
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                    {quest.description[language]}
                  </p>

                  {/* Required Molecules Checklist */}
                  <div className="mt-3 flex flex-wrap gap-2">
                    {quest.requiredMolecules.map(molId => {
                      const mol = MOLECULES_BY_ID.get(molId);
                      const isUn = discoveredSet.has(molId);
                      return (
                        <div
                          key={molId}
                          className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono border transition-colors ${
                            isUn
                              ? "bg-[#10b981]/15 text-[#34d399] border-[#10b981]/30"
                              : "bg-[#181c22] text-slate-400 border-white/5"
                          }`}
                        >
                          {isUn ? <CheckCircle2 className="w-3 h-3" /> : <Circle className="w-3 h-3" />}
                          <span>{mol?.formula || molId} ({mol?.name[language] || molId})</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Progress bar and button */}
                <div className="space-y-2 pt-2 border-t border-white/5">
                  <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#00d2ff] to-[#10b981] transition-all duration-500"
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>

                  {!isDone && (
                    <button
                      onClick={onGoToLab}
                      className="text-xs font-mono text-[#00d2ff] hover:underline flex items-center gap-1"
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
      <div className="space-y-4 pt-4">
        <h2 className="text-lg font-bold text-white font-mono flex items-center gap-2">
          <Award className="w-4 h-4 text-[#edb1ff]" />
          <span>{t("achievementsTitle")} ({ACHIEVEMENTS_DATA.filter(a => unlockedSet.has(a.id)).length} / {ACHIEVEMENTS_DATA.length})</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {ACHIEVEMENTS_DATA.map(ach => {
            const isUnlocked = unlockedSet.has(ach.id);
            return (
              <div
                key={ach.id}
                className={`p-4 rounded-2xl border text-center flex flex-col items-center justify-between gap-2 transition-all ${
                  isUnlocked
                    ? "bg-[#10141a] border-[#edb1ff]/40 shadow-[0_0_20px_rgba(237,177,255,0.15)]"
                    : "bg-[#10141a]/40 border-white/5 opacity-50 grayscale"
                }`}
              >
                <div className="w-14 h-14 rounded-2xl bg-[#181c22] border border-white/10 flex items-center justify-center text-3xl shadow-inner my-1">
                  {ach.icon}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white tracking-tight">
                    {ach.title[language]}
                  </h4>
                  <p className="text-[11px] text-slate-400 mt-1 leading-snug">
                    {ach.description[language]}
                  </p>
                </div>
                <div className="pt-2 text-[10px] font-mono">
                  {isUnlocked ? (
                    <span className="text-[#34d399] font-bold uppercase tracking-wider">Unlocked!</span>
                  ) : (
                    <span className="text-slate-500 uppercase tracking-wider">Locked</span>
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
