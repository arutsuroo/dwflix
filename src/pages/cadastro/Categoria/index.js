import React, {useState} from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';


function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: "",
    cor: '',
  }
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);
  
  
  function handleChange(info) {
    const {getAttribute, value} = info.target;
    setValue(
      getAttribute('name'), 
      value
    );
  }

  function setValue(chave, valor){
    setValues({ //chave: nome, descricao, cor, ...
      ...values,
      [chave]: valor, //nome: 'valor'
    })
  }

    return (
      <PageDefault>
        <h1>Cadastro de Categoria: {values.nome}</h1>

        <form onSubmit={function handleSubmit(info){
          info.preventDefault();
          setCategorias([
            ...categorias,
            values
          ]);

          setValues(valoresIniciais);
        }}>

      <FormField
        label="Nome da Categoria: "
        type="text"
        name="nome"
        value={values.nome}
        onChange={handleChange}
      />        

        <div>
            <label>
            Descrição:
            <textarea
                type="text"
                name="descricao"
                value={values.descricao}
                onChange={handleChange}
            />
            </label>
        </div>

      <FormField
        label="Cor"
        type="color"
        name="cor"
        value={values.cor}
        onChange={handleChange}
      />   

      <button>
        Cadastrar
      </button>

      </form>

        <ul>
          {categorias.map((categoria, indice) =>{
            return (
              <li key={`${categoria}${indice}`}>
                {categoria.nome}
              </li>
            )
          })}
        </ul>

        <Link to="/">
          Ir para Home
        </Link>
      </PageDefault>
    )
  }

export default CadastroCategoria;