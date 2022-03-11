import React from 'react'

function Table({carros, pesquisa}) {

  return ( 
    <div className='table-responsive'>
      <table className="table table-bordered table-dark text-center">
        <thead className='bg-primary'>
          <tr>
            <th scope="col">Modelo</th>
            <th scope="col">Marca</th>
            <th scope="col">Cor</th>
            <th scope="col">Portas</th>
            <th scope="col">Combustível</th>
            <th scope="col">Ano</th>
            <th scope="col">Valor Fipe</th>
          </tr>
        </thead>
        <tbody>
        {
          carros.filter(car => {
              if(pesquisa === 'TODAS' || !pesquisa) {
                  return car
              } else if (pesquisa === car.marca_nome) {
                  return car
              }
          }).map((carro, index) => 
              <tr key={index}>
                  <td>{carro.nome_modelo}</td>
                  <td>{carro.marca_nome}</td>
                  <td>{carro.cor}</td>
                  <td>{carro.num_portas}</td>
                  <td>{carro.combustivel}</td>
                  <td>{carro.ano}</td>
                  <td>{carro.valor_fipe}</td>
              </tr>
          )
        }  
        </tbody>
      </table> 
    </div>
  )
}

export default Table