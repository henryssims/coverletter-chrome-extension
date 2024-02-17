import React, { useState, useEffect } from 'react';
import Generator from './components/Generator';
import Profile from './components/Profile';
import { ROUTES } from './utils/routes';
import { loadData } from './utils/localStorage';

function App() {
  const [page, setPage] = useState();
  const [resume, setResume] = useState();
  const [openAIKey, setOpenAIKey] = useState();

  useEffect(() => {
    const getLocalData = async () => {
      const resume = await loadData('resume');
      const openAIKey = await loadData('openAIKey');
      
      setResume(resume);
      setOpenAIKey(openAIKey);
    };

    getLocalData();
  }, []);

  switch (page) {
    case ROUTES.GENERATOR:
      return <Generator setPage={setPage} resume={resume} openAIKey={openAIKey} />
    case ROUTES.PROFILE:
      return (
        <Profile 
          setPage={setPage} 
          resume={resume} 
          setResume={setResume} 
          openAIKey={openAIKey}
          setOpenAIKey={setOpenAIKey}
        />  
      );
    default:
      return <Generator setPage={setPage} resume={resume} openAIKey={openAIKey} />
  }
}

export default App;
