import { arrayQuestions as multipleChoiceQuestions } from './MultipleChoiceQuestions';
import { arrayMultipleSelections as multipleSelectionQuestions } from './MultipleSelectionQuestions';
import { arrayOpenQuestions as openQuestions } from './OpenQuestions';


export type QuestionItem = {
  id: number;
  type: 'multiple-choice' | 'multiple-selection' | 'open-question';
  question: string;
  options?: string[];
  minSelections?: number;
  placeholder?: string;
  maxLength?: number;
  required: boolean;
}

const convertMultipleChoice = (): QuestionItem[] => {
  return multipleChoiceQuestions.map((q, index) => ({
    id: index + 1,
    type: 'multiple-choice',
    question: q.question,
    options: [q.option1, q.option2, q.option3, q.option4, q.option5].filter(Boolean) as string[],
    required: q.required
  }));
};


const convertMultipleSelection = (): QuestionItem[] => {
  return multipleSelectionQuestions.map((q, index) => ({
    id: index + 101,  
    type: 'multiple-selection',
    question: q.question,
    options: [q.option1, q.option2, q.option3, q.option4, q.option5, q.option6].filter(Boolean) as string[],
    minSelections: q.minSelections || 1,
    required: q.required
  }));
};


const convertOpenQuestions = (): QuestionItem[] => {
  return openQuestions.map((q, index) => ({
    id: index + 201,  
    type: 'open-question',
    question: q.question,
    placeholder: q.placeholder,
    maxLength: q.maxLength,
    required: q.required
  }));
};


export const allQuestions: QuestionItem[] = [
  ...convertMultipleChoice(),
  ...convertMultipleSelection(),
  ...convertOpenQuestions()
];


export const getMultipleChoiceQuestions = (): QuestionItem[] => {
  return allQuestions.filter(q => q.type === 'multiple-choice');
};


export const getMultipleSelectionQuestions = (): QuestionItem[] => {
  return allQuestions.filter(q => q.type === 'multiple-selection');
};


export const getOpenQuestions = (): QuestionItem[] => {
  return allQuestions.filter(q => q.type === 'open-question');
};


export const getAllQuestions = (): QuestionItem[] => {
  return allQuestions;
}; 