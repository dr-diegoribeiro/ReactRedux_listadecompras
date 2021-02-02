import React from 'react';
import FilterLink from '../containers/FilterLink';
import { VisibilityFilters } from '../actions';

const Footer = () => (
  <div className="App" style={{ padding: '10px', backgroundColor: 'teal', color: '#ffffff' }}>
    <h2 style={{ marginBottom: '15px' }}>Filtro da Lista</h2>
    <span>Lista de Compras: </span>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>Todos</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Pegar</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Peguei</FilterLink>
  </div>
);

export default Footer;