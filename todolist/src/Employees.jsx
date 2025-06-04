import { useState } from "react"
import { isciler } from "./data.js"

function Employees() {
  const [search, setSearch] = useState('')
  const [arr, setArr] = useState([])
  const [newIsci, setNewIsci] = useState({})

  const handleSearch = (e) => {
    setSearch(e.target.value)
    const filter = isciler.filter(elem => {
     return elem.ad.toLowerCase().includes(e.target.value)
    })
    setArr(filter)
    // console.log(arr)
  }

  const handleSalary = (elem) => {
    let sortArr = [...isciler]
    if (elem === 'min') {
      sortArr.sort((a, b) => a.maas - b.maas)
    } else if (elem === 'max') {
      sortArr.sort((a, b) => b.maas - a.maas)
    }
    setArr(sortArr)
    // console.log(sortArr);
  }

  const handleSahe = (e) => {
    const sahe = e.target.value
    const saheArr = isciler.filter(item => item.saha === sahe)
    setArr(saheArr)
  }

  const changeAge = (age) => {
    if (age === 'first') {
      const ageArr = isciler.filter(item => item.yas <= 25)
      setArr(ageArr)
    } else if (age === 'second') {
      const ageArr = isciler.filter(item => item.yas >= 26 && item.yas <= 30)
      setArr(ageArr)
    } else if (age === 'third') {
      const ageArr = isciler.filter(item => item.yas >= 31)
      setArr(ageArr)
    }
  }

  const yeniElaveEt = () => {
    const {ad, yas, saha} = newIsci
    if (ad && yas && saha) {
      setArr([...arr, newIsci])
      setNewIsci({
        ad: '',
        yas: '',
        saha: '',
        staj: 0, 
        maas: 500
      })
    }
    console.log(newIsci);
  }

  const randomSec = () => {
    const randomIsci = Math.floor(Math.random() * isciler.length)
    const randomArr = isciler[randomIsci]
    setArr([randomArr])
  }

  return (
    <div id="panel">
      <div>
      <h1>Employees Panel</h1>
      <div className="gridParent">
        <div id="div1">
          <p>Ad ilə axtariş</p>
          <input value={search}
          onChange={  handleSearch  } 
          type="search" placeholder="Ada göre axtar..." />
        </div>
        <div id="div2">
          <p>Maaşa görə sort</p>
          <button onClick={() => handleSalary('min')}>min-max</button>
          <button onClick={() => handleSalary('max')}>max-min</button>
        </div>
        <div id="div3">
          <p>İş sahəsinə görə filter</p>
          <select onChange={handleSahe}>
            <option>Seçin iş sahəsi</option>
            {[...new Set(isciler.map(item => item.saha))].map((saha, i) => (
              <option value={saha} key={i}>{saha}</option>
            ))}
          </select>
        </div>
        <div id="div4">
          <p>Yaş intervalları ilə filter</p>
          <button onClick={() => changeAge('first')}>18-25</button>
          <button onClick={() => changeAge('second')}>26-30</button>
          <button onClick={() => changeAge('third')}>31+</button>
        </div>
        <button
         onClick={() => {
          const stajArr = isciler.sort((a, b) => b.staj - a.staj)[0]
          setArr([stajArr])
        }}  
        id="div5">Ən təcrübəli işçini göstər</button>

        <button
        onClick={() => randomSec()}
         id="div7">Random işçi göstər</button>
         <div id="div6">
          <div>
        <input id="inpAd" value={newIsci.ad}
         onChange={(e) => setNewIsci({...newIsci, ad: e.target.value})} 
         type="text" placeholder="Adı.." />
        <input id="inpAge" value={newIsci.yas}
         onChange={(e) => setNewIsci({...newIsci, yas: +e.target.value})} 
         type="number" placeholder="Yaşı..." />
        <input id="inpSahe" value={newIsci.saha}
         onChange={(e) => setNewIsci({...newIsci, saha: e.target.value})} 
         type="text" placeholder="Sahe..." />
          </div>
          <button onClick={  yeniElaveEt  }>Yeni işçi elave et...</button>
         </div>
      </div>
      </div>
      <div id="isciler">
          <h1>Employees</h1>
          <div id="axtaris">
            {arr.map((elem, i) => {
              return <p key={i}>{elem.ad} {elem.soyad}-{elem.maas}₼ -{elem.saha}-{elem.yas}yaş - {elem.staj}il təcrübə</p>
            })}
          </div>
      </div>
    </div>
  )
}

export default Employees
