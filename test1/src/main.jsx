import { createRoot } from 'react-dom/client'

let str = 'Xezer'
let n = new Date().getFullYear()
let arr = ['Naida', 'Seficat', 'Nigar', 'Zerife']
let obj = {name : 'Firudin'}
createRoot(document.getElementById('root')).render(
  <main>
    <h2>Salam, {str} !</h2>
    <ul>{arr.map(t => <li>{t}</li>)}</ul>
    <p>{obj.name}</p>
    <footer>Copyright &copy; {n}</footer>
  </main>
)
