export default function renderBrands(marcas) {

  return (
    <>
      {marcas.map((marca, index) => {
        return <option key={index} value={marca.marca_nome}>{marca.marca_nome}</option>
      })}
    </>
  )
}