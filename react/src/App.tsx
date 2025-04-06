import  { useState } from 'react';
import Welcome from './pages/Welcome';
import Questions from './pages/Questions';
import './assets/styles/main.scss';

function App() {
  const [currentPage, setCurrentPage] = useState<'welcome' | 'questions'>('welcome');

  const navigateToQuestions = () => {
    setCurrentPage('questions');
  };

  const navigateToWelcome = () => {
    setCurrentPage('welcome');
  };

  return (
    <>
      {currentPage === 'welcome' && <Welcome onStartSurvey={navigateToQuestions} />}
      {currentPage === 'questions' && <Questions onGoBack={navigateToWelcome} />}
    </>
  );
}

export default App;
