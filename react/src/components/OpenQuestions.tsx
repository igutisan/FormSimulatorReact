import React from 'react';
import '../assets/styles/components/Questions.scss';

type OpenQuestionsProps = {
  question: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
};

const OpenQuestions: React.FC<OpenQuestionsProps> = ({
  question,
  value,
  onChange,
  required = false
}) => {
  return (
    <div className="question-open">
      <h2>
        {question}
        {required && <span className="required-mark">*</span>}
      </h2>
      
      <div className="textarea-container">
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Escriba su respuesta aquí..."
        />
      </div>
    </div>
  );
};

export default OpenQuestions;
