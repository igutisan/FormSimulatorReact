import React, { useState } from 'react';
import Button from '../components/Button/Button';
import MultipleChoice from '../components/MultipleChoice';
import MultipleSelections from '../components/MultipleSelections';
import OpenQuestions from '../components/OpenQuestions';
import Answers from './Answers';
import { QuestionItem, getAllQuestions } from '../data/AllQuestions';
import '../assets/styles/pages/Questions.scss';

type QuestionsProps = {
  onGoBack: () => void;
}

// Selección aleatoria de 10 preguntas
let surveyQuestions: QuestionItem[];
const allQuestions: QuestionItem[] = getAllQuestions();
surveyQuestions = [];
let randomNumbers: number[] = [];
let i = 0;
while (i < 10) {
  let num = Math.floor(Math.random() * allQuestions.length);
  let numRep = randomNumbers.find((n) => n === num);
  if (!numRep) {
    randomNumbers.push(num);
    surveyQuestions.push(allQuestions[num]); 
    i++;
  }
}

const Questions: React.FC<QuestionsProps> = ({ onGoBack }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, any>>({});
  const [showError, setShowError] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const handleNext = () => {
    const currentQuestion = surveyQuestions[currentStep];
    
    if (currentQuestion.required) {
      if (currentQuestion.type === 'multiple-selection') {
        const selections = answers[currentQuestion.id] || [];
        const minSelections = currentQuestion.minSelections || 1;
        if (selections.length < minSelections) {
          setShowError(true);
          return;
        }
      } else if (!answers[currentQuestion.id]) {
        setShowError(true);
        return;
      }
    }
    
    if (currentStep < surveyQuestions.length - 1) {
      setCurrentStep(currentStep + 1);
      setShowError(false);
    } else {
      handleSubmit();
    }
  };
  
  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setShowError(false);
    } else {
      onGoBack();
    }
  };
 
  const handleSubmit = () => {
    const allRequiredAnswered = surveyQuestions
      .filter(q => q.required)
      .every(q => {
        if (q.type === 'multiple-selection') {
          const selections = answers[q.id] || [];
          const minSelections = q.minSelections || 1;
          return selections.length >= minSelections;
        }
        return answers[q.id];
      });
    
    if (!allRequiredAnswered) {
      setShowError(true);
      return;
    }
    
    console.log('Respuestas enviadas:', answers);
    setIsComplete(true);
  };

  const renderCurrentQuestion = () => {
    const currentQuestion = surveyQuestions[currentStep];
    
    if (!currentQuestion) return null;
    
    return (
      <div className="question-card">
        {renderQuestion(currentQuestion, answers, setAnswers)}
        
        <div className="navigation-buttons">
          <Button 
            variant="outline" 
            onClick={handlePrevious}
          >
            {currentStep === 0 ? 'Volver al inicio' : 'Anterior'}
          </Button>
          <Button 
            variant="primary" 
            onClick={handleNext}
          >
            {currentStep === surveyQuestions.length - 1 ? 'Finalizar' : 'Siguiente'}
          </Button>
        </div>
      </div>
    );
  };

  if (isComplete) {
    return (
      <Answers
        questions={surveyQuestions}
        answers={answers}
        onGoBack={onGoBack}
      />
    );
  }

  const progress = ((currentStep + 1) / surveyQuestions.length) * 100;

  return (
    <div className="questions-page">
      <div className="questions-container">
        <div className="progress-container">
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
        
        <div className="progress-text">
          Pregunta {currentStep + 1} de {surveyQuestions.length}
        </div>

        {renderCurrentQuestion()}
      </div>
    </div>
  );
};

const renderQuestion = (
  currentQuestion: QuestionItem,
  answers: Record<number, any>,
  setAnswers: React.Dispatch<React.SetStateAction<Record<number, any>>>
) => {
  const currentAnswer = answers[currentQuestion.id] || '';

  switch (currentQuestion.type) {
    case 'multiple-choice':
      return (
        <MultipleChoice
          question={currentQuestion.question}
          options={currentQuestion.options || []}
          selectedOption={currentAnswer || ''}
          onChange={(option) => 
            setAnswers((prev) => ({ ...prev, [currentQuestion.id]: option }))
          }
          required={currentQuestion.required}
        />
      );
    case 'multiple-selection':
      return (
        <MultipleSelections
          question={currentQuestion.question}
          options={currentQuestion.options || []}
          selectedOptions={currentAnswer || []}
          onChange={(option) => {
            const prevSelected = answers[currentQuestion.id] || [];
            const newSelected = prevSelected.includes(option)
              ? prevSelected.filter((item: string) => item !== option)
              : [...prevSelected, option];
            setAnswers((prev) => ({ ...prev, [currentQuestion.id]: newSelected }));
          }}
          minSelections={currentQuestion.minSelections}
        />
      );
    case 'open-question':
      return (
        <OpenQuestions
          question={currentQuestion.question}
          value={currentAnswer || ''}
          onChange={(value) =>
            setAnswers((prev) => ({ ...prev, [currentQuestion.id]: value }))
          }
          required={currentQuestion.required}
        />
      );
    default:
      return null;
  }
};

export default Questions;
