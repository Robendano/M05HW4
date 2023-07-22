import React, { useState } from 'react';

const InputFields = ({ onCalculate }) => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');

  const handleCalculate = (operator) => {
    if (num1 === '' || num2 === '') {
      alert('Заполните все поля!');
      return;
    }

    onCalculate(operator, parseInt(num1), parseInt(num2));
  };

  return (
    <div>
      <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} />
      <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} />
      <button onClick={() => handleCalculate('+')}>Сложение</button>
      <button onClick={() => handleCalculate('-')}>Вычитание</button>
      <button onClick={() => handleCalculate('*')}>Умножение</button>
      <button onClick={() => handleCalculate('/')}>Деление</button>
    </div>
  );
};

export default InputFields;
