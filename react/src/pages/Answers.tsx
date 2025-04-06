import React from 'react';
import { QuestionItem } from '../data/AllQuestions';
import '../assets/styles/pages/Answers.scss';

type AnswersProps = {
  questions: QuestionItem[];
  answers: Record<number, any>;
  onGoBack: () => void;
}

const Answers: React.FC<AnswersProps> = ({ questions, answers, onGoBack }) => {
  const renderAnswer = (question: QuestionItem) => {
    const answer = answers[question.id];
    
    if (!answer) {
      return <span className="no-answer">Sin respuesta</span>;
    }

    switch (question.type) {
      case 'multiple-choice':
        return <span className="answer">{answer}</span>;
      
      case 'multiple-selection':
        return (
          <div className="answer-list">
            {Array.isArray(answer) && answer.map((option, index) => (
              <span key={index} className="answer-tag">{option}</span>
            ))}
          </div>
        );
      
      case 'open-question':
        return <p className="answer-text">{answer}</p>;
      
      default:
        return null;
    }
  };

  return (
    <div className="answers-page">
      <div className="answers-container">
        <h1>Resumen de Respuestas</h1>
        
        <div className="answers-list">
          {questions.map((question, index) => (
            <div key={question.id} className="answer-card">
              <div className="question-header">
                <span className="question-number">Pregunta {index + 1}</span>
                <span className={`question-type ${question.type}`}>
                  {question.type === 'multiple-choice' && 'Opción única'}
                  {question.type === 'multiple-selection' && 'Selección múltiple'}
                  {question.type === 'open-question' && 'Respuesta abierta'}
                </span>
              </div>
              
              <h3 className="question-text">{question.question}</h3>
              
              <div className="answer-content">
                {renderAnswer(question)}
              </div>
            </div>
          ))}
        </div>

        <button className="back-button" onClick={onGoBack}>
          Volver al inicio
        </button>
      </div>
    </div>
  );
};

export default Answers;
