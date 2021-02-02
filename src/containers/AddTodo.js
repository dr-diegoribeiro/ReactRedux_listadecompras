import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';



const AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div className="App" style={{ padding: '10px', backgroundColor: 'teal', color: '#ffffff' }}>
      <form
        onSubmit={
          e => {
            e.preventDefault();

            if (!input.value.trim()) {
              return
            }

            dispatch(addTodo(input.value));
            input.value='';
          }
        }
      >
        <h2 style={{ marginBottom: '20px' }}>MEU CHECKLIST DE COMPRAS</h2>
        <input type="text" ref={el => (input = el)} />
        <button type='submit'>Incluir Produto</button>
      </form>
    </div>
  );
}

export default connect()(AddTodo);