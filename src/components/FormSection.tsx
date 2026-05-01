'use client';

import { ReactNode } from 'react';
import { Info } from 'lucide-react';

interface FormSectionProps {
  id: string;
  title: string;
  purpose?: string;
  children: ReactNode;
  className?: string;
}

export default function FormSection({ 
  id, 
  title, 
  purpose, 
  children, 
  className = '' 
}: FormSectionProps) {
  return (
    <div id={id} className={`bg-white border border-slate-200 rounded-lg p-6 ${className}`}>
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-slate-900 mb-2">{title}</h2>
        {purpose && (
          <div className="flex items-start space-x-2">
            <Info className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-slate-600">{purpose}</p>
          </div>
        )}
      </div>
      <div className="space-y-4">
        {children}
      </div>
    </div>
  );
}

// Form field components
export function FormField({ 
  label, 
  required = false, 
  children 
}: { 
  label: string; 
  required?: boolean; 
  children: ReactNode;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-700 mb-2">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {children}
    </div>
  );
}

export function TextAreaField({
  value,
  onChange,
  placeholder,
  required = false,
  rows = 4,
  className = '',
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  required?: boolean;
  rows?: number;
  className?: string;
}) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      required={required}
      rows={rows}
      className={`w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-vertical ${className}`}
    />
  );
}

export function SelectField({
  value,
  onChange,
  placeholder,
  required = false,
  children,
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      required={required}
      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    >
      <option value="">{placeholder}</option>
      {children}
    </select>
  );
}

export function CheckboxGroup({
  label,
  options,
  values,
  onChange,
  required = false,
}: {
  label: string;
  options: { value: string; label: string }[];
  values: string[];
  onChange: (values: string[]) => void;
  required?: boolean;
}) {
  const handleCheckboxChange = (optionValue: string, checked: boolean) => {
    if (checked) {
      onChange([...values, optionValue]);
    } else {
      onChange(values.filter(v => v !== optionValue));
    }
  };

  return (
    <div>
      <label className="block text-sm font-medium text-slate-700 mb-2">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <div className="space-y-2">
        {options.map((option) => (
          <label key={option.value} className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              checked={values.includes(option.value)}
              onChange={(e) => handleCheckboxChange(option.value, e.target.checked)}
              className="w-4 h-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500"
            />
            <span className="text-sm text-slate-700">{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

export function RadioGroup({
  label,
  options,
  value,
  onChange,
  required = false,
}: {
  label: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-700 mb-2">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <div className="space-y-2">
        {options.map((option) => (
          <label key={option.value} className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name={label}
              value={option.value}
              checked={value === option.value}
              onChange={(e) => onChange(e.target.value)}
              required={required}
              className="w-4 h-4 text-blue-600 border-slate-300 focus:ring-blue-500"
            />
            <span className="text-sm text-slate-700">{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
