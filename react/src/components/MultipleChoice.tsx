import React from 'react';
import '../assets/styles/components/Questions.scss';

type MultipleChoiceProps = {
  question: string;
  options: string[];
  selectedOption: string;
  onChange: (option: string) => void;
  required?: boolean;
};

const MultipleChoice: React.FC<MultipleChoiceProps> = ({
  question,
  options,
  selectedOption,
  onChange,
  required = false
}) => {
  return (
    <div className="question-multiple-choice">
      <h2>
        {question}
        {required && <span className="required-mark">*</span>}
      </h2>
      
      <div className="options-container">
        {options.map((option, index) => (
          <div 
            key={index} 
            className={`option ${selectedOption === option ? 'selected' : ''}`}
            onClick={() => onChange(option)}
          >
            <input 
              type="radio" 
              id={`option-${index}`} 
              name="option" 
              checked={selectedOption === option} 
              onChange={() => onChange(option)} 
            />
            <label htmlFor={`option-${index}`}>{option}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultipleChoice;
