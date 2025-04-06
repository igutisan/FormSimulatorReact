import React from 'react';
import '../assets/styles/components/Questions.scss';

type MultipleSelectionsProps = {
  question: string;
  options: string[];
  selectedOptions: string[];
  onChange: (option: string) => void;
  minSelections?: number;
};

const MultipleSelections: React.FC<MultipleSelectionsProps> = ({
  question,
  options,
  selectedOptions,
  onChange,
  minSelections
}) => {
  return (
    <div className="question-multiple-selection">
      <h2>
        {question} 
        {minSelections && <span className="min-selections">* Seleccione al menos {minSelections}</span>}
      </h2>
      
      <div className="checkboxes-container">
        {options.map((option, index) => (
          <div 
            key={index} 
            className={`checkbox-option ${selectedOptions.includes(option) ? 'selected' : ''}`}
            onClick={() => onChange(option)}
          >
            <input 
              type="checkbox" 
              id={`option-${index}`} 
              checked={selectedOptions.includes(option)} 
              onChange={() => onChange(option)} 
            />
            <label htmlFor={`option-${index}`}>{option}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultipleSelections;
