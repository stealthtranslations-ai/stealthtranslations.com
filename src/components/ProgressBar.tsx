'use client';

import { CheckCircle, Circle } from 'lucide-react';

interface ProgressStep {
  id: string;
  title: string;
  isCompleted: boolean;
  isActive: boolean;
}

interface ProgressBarProps {
  steps: ProgressStep[];
  onStepClick?: (stepId: string) => void;
}

export default function ProgressBar({ steps, onStepClick }: ProgressBarProps) {
  return (
    <div className="bg-white border-b border-slate-200 px-6 py-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="flex items-center flex-1"
            >
              <button
                onClick={() => onStepClick?.(step.id)}
                className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
                disabled={!onStepClick}
              >
                <div className={`
                  flex items-center justify-center w-8 h-8 rounded-full border-2 transition-colors
                  ${step.isCompleted 
                    ? 'bg-green-600 border-green-600 text-white' 
                    : step.isActive 
                    ? 'bg-blue-600 border-blue-600 text-white'
                    : 'bg-white border-slate-300 text-slate-400'
                  }
                `}>
                  {step.isCompleted ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    <Circle className="w-5 h-5" />
                  )}
                </div>
                <span className={`
                  text-sm font-medium hidden sm:block
                  ${step.isCompleted || step.isActive ? 'text-slate-900' : 'text-slate-500'}
                `}>
                  {step.title}
                </span>
              </button>
              
              {index < steps.length - 1 && (
                <div className={`
                  flex-1 h-0.5 mx-4 transition-colors
                  ${step.isCompleted ? 'bg-green-600' : 'bg-slate-200'}
                `} />
              )}
            </div>
          ))}
        </div>
        
        {/* Mobile progress indicator */}
        <div className="mt-4 sm:hidden">
          <div className="flex items-center justify-between text-xs text-slate-600">
            <span>Step {steps.findIndex(s => s.isActive) + 1} of {steps.length}</span>
            <span>{Math.round((steps.filter(s => s.isCompleted).length / steps.length) * 100)}% Complete</span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-1 mt-2">
            <div 
              className="bg-blue-600 h-1 rounded-full transition-all duration-300"
              style={{ width: `${(steps.filter(s => s.isCompleted).length / steps.length) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
