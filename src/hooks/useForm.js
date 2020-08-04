import { useState } from 'react';

function useForm(valoresIniciais) {
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    // chave: nome, descricao e cor
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function escutarInput(event) {
    setValue(
      event.target.getAttribute('name'),
      event.target.value,
    );
  }

  function clearForm() {
    setValues(valoresIniciais);
  }

  return {
    values,
    escutarInput,
    clearForm,
  };
}

export default useForm;
