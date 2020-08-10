import {useState} from 'react';

function useForm(valoresIniciais) {

    const [values, setValues] = useState(valoresIniciais);
  
    function handleChange(info) {
      setValue(
        info.target.getAttribute('name'),
        info.target.value,
      );
    }
  
    function setValue(chave, valor) {
      setValues({ //chave: nome, descricao, cor, ...
        ...values,
        [chave]: valor, //nome: 'valor'
      })
    }
  
    function clearForm(){
      setValues(valoresIniciais);
    }
  
    return {
      values,
      handleChange,
      clearForm
    };
  }

  export default useForm;