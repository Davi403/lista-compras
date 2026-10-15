const compras = [
{id: 1, produto: 'frangão', quantidade: 1},
{id: 2, produto: 'batatas', quantidade: 6},
{id: 3, produto: 'oléo', quantidade: 1}
];

 function App () {
 
  return(
    <div>
      {compras.map((comprasAtual, index) => (
        <li
          key={index}
        >
          A compra atual é: {comprasAtual.produto} x{comprasAtual.quantidade}
          </li>
      ))}
    </div>
  )
}
export default App;