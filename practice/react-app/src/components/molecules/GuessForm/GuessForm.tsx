import { useState } from 'react';
import { Input } from '../../atoms/Input';
import { Button } from '../../atoms/Button';
import { UseCountriesContext } from '../../../context/CountriesApiContext';
import Title from '../../atoms/Title';
import { fetchCountryData } from '../../../utils/api';
import { API_URL } from '../../../static/url';

// type SearchFormType = {};

export const GuessForm = () => {
  const [answer, setAnswer] = useState('');
  const [showMessage, setShowMessage] = useState("");

  const { countries, setCountries } = UseCountriesContext();

  const checkUserAnswer = (answer: string) => {
    if(!answer) return setShowMessage("Your input cannot be empty")  
    
    const [country] = countries

    const res = country.name.toLowerCase() === answer.toLowerCase();
     if(!res) return setShowMessage("try Again")

     return setShowMessage("Congratulations")
     
  };

  const drawNewCountry = async () => {
    setAnswer('');
    setCountries(await fetchCountryData(`${API_URL}/all`, 'GUESS'));
  };


  return (
    <div className="flex flex-col items-center align-items justify-center">
      <Input
        label="What is your answer ?"
        type="text"
        placeholder="Country"
        name={answer}
        setName={setAnswer}
      />
      <Button name="Check" onClick={() => checkUserAnswer(answer)} />
      <Button name="Draw again" onClick={async () => drawNewCountry()} />
      <Title
        title={showMessage ? showMessage : 'What is the name of the country ?'}
      />
    </div>
  );
};
