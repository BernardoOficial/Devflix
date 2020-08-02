import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom';
import FormFiels from '../../../components/FormField'

function CadastroCategoria() {
  
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  }
  
  const [values, setValues] = useState(valoresIniciais);
  const [categorias, setCategorias] = useState([]);

  function setValue(chave, valor) {

    // chave: nome, descricao e cor
    setValues({
      ...values,
      [chave]: valor,
    })
  }

  function escutarInput(event) {
    const { name, value } = event.target;
    setValue(
      name, 
      value
    )
  }

    return (
      <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form onSubmit={ function escutarSubmit(event) {
        event.preventDefault();
        setCategorias([
          ...categorias,
          values.nome
        ])
        setValues(valoresIniciais)
      }}>

      <FormFiels 
        label='Nome da Categoria'
        type="text"
        name="nome"
        value={values.nome}
        onChange={escutarInput}
      />

      <FormFiels 
        label='Descrição'
        type="text"
        name="descricao"
        value={values.descricao}
        onChange={escutarInput}
      />

      <FormFiels 
        label='Cor'
        type="color"
        name="cor"
        value={values.cor}
        onChange={escutarInput}
      />

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={`${categoria}${indice}`}>
              {categoria}
            </li>
          )
        })}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
    )
  }

export default CadastroCategoria;