"use client"

import React, { useState, useEffect } from 'react';

interface Props {
  projectName: string;
  onComplete: () => void;
}

const TerminalOverlay: React.FC<Props> = ({ projectName, onComplete }) => {
  const [text, setText] = useState('');
  const [phase, setPhase] = useState(0);
  const fullCommand = `cat ${projectName.toLowerCase().replace(/\s+/g, '_')}.md`;

  useEffect(() => {
    let timeout: number;
    if (phase === 0) {
      timeout = window.setTimeout(() => setPhase(1), 100);
    } else if (phase === 1) {
      if (text.length < fullCommand.length) {
        timeout = window.setTimeout(() => {
          setText(fullCommand.slice(0, text.length + 1));
        }, 10 + Math.random() * 20);
      } else {
        timeout = window.setTimeout(() => setPhase(2), 150);
      }
    } else if (phase === 2) {
      timeout = window.setTimeout(() => {
        onComplete();
      }, 200);
    }
    return () => clearTimeout(timeout);
  }, [text, phase, fullCommand, onComplete]);

  return (
    <div
      className="absolute inset-0 bg-[#0c0c0c] z-[50] overflow-hidden font-mono text-primary flex flex-col animate-fade-in-up"
    >
      <div className="bg-white/5 px-3 py-1.5 border-b border-white/5 flex items-center justify-between shrink-0">
        <div className="flex space-x-1.5">
          <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
          <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
          <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
        </div>
        <span className="text-[8px] text-muted-foreground uppercase font-bold tracking-tighter">Secure Link Established</span>
      </div>
      <div className="p-4 text-[10px] sm:text-xs overflow-y-auto">
        <div className="flex items-start">
          <span className="text-secondary mr-1.5 shrink-0">$</span>
          <span className="break-all text-primary">{text}</span>
          <span className="cursor !w-1 !h-3 bg-primary"></span>
        </div>
        {phase >= 1 && (
          <div className="mt-2 text-primary/80 text-[8px] font-bold uppercase tracking-tighter leading-tight">
            <p>Accessing node v18.12.0...</p>
            <p>Requesting project manifest...</p>
            {phase === 2 && (
              <p className="animate-pulse mt-1 text-secondary">Opening secure tunnel...</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TerminalOverlay;
