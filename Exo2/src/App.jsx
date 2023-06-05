import './App.css'
import List from './components/list'

function App() {
  const products = [
    {name: 'Nuka-Cola', price: 1.25, isPromo: false},
    {name: 'Bolt rifle', price: 300, isPromo: false},
    {name: '9mm pistol', price: 147, isPromo: true},
    {name: '9mm bullets', price: 0.78, isPromo: true},
    {name: 'Power Armor', price: 9999, isPromo: false},

  ]

  return (
    <List list = {products} />
  )
}

export default App
