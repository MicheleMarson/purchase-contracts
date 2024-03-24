import React, { useState } from 'react'
import { dateFormat } from '../dateForma'
import { Link } from 'react-router-dom'
import Filter from './Filter'
import CreateContract from './CreateContract'

const Home = () => {
  const [inputName, setInputName] = useState("")
  const [status, setStatus] = useState("")
  const [filteredContracts, setFilteredContracts] = useState([])



  return (
    <>
    <Filter 
    status={status} inputName={inputName} setInputName={setInputName} 
    setFilteredContracts={setFilteredContracts} filteredContracts={filteredContracts} setStatus={setStatus}
    />

    <CreateContract />

    <section className='contracts'>
      {filteredContracts.length !== 0 ?
      (filteredContracts.map(contract => (
        <Link to={`/ugovor/${contract.brojUgovora.replace("/", "-")}`}
        className={`contracts__contract ${contract.status == "KREIRANO" ? "kreirano" : contract.status == "ISPORUČENO" ? "isporučeno" : "naručeno"}`}>
          <div>
            <h3>Ime: {contract.kupac}</h3>
            <p>Broj ugovora: {contract.brojUgovora}</p>
          </div>
          <div>
            <p>Rok isporuke: {dateFormat(contract.rokIsporuke)}</p>
            <p className='status'>{contract.status}</p>
          </div>
        </Link>
      ))):
      (
        <p style={{textAlign:"center"}}>Data not found</p>
      )}
    </section>
    </>
  )
}

export default Home