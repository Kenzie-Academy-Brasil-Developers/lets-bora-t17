import Title from './components/Title'
import Header from './components/Header'

import './styles/App.css'
import './styles/teste.css'

function App() {
  return (
    <>
      <Header />
      <main>
        
        <Title text='Titulo Abacaxi' size={2} color='red' />
        <Title text='Titulo Abobrinha' />
      </main>
    </>
  )
}

export default App


// const props = {
//   text: 'Titulo Abacaxi',
//   color: 'red',
// }
// Title(props)

// jsx => javascript + XML

// Components 
  // -> reaproveitamento
  // -> abstração de código

// Fragment -> <></> -> Tag Fantasma