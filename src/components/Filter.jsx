import React, { useEffect } from 'react'
import { contracts } from '../mock' 

const Filter = ({inputName, status, setFilteredContracts, setInputName, setStatus}) => {
  useEffect(() => {
    const filtered = contracts.filter(contract => {
      // If inputName is empty, all contracts are considered to match this condition.
      const nameMatch = inputName === "" || contract.kupac.toLowerCase().includes(inputName.toLowerCase());
      const statusMatch = status === "" || (status === "active" ? 
          contract.status === "KREIRANO" || contract.status === "NARUČENO" :
          contract.status === "ISPORUČENO");
      return nameMatch && statusMatch;
    });

    setFilteredContracts(filtered);
  }, [inputName, status]);

  return (
    <div className='filter'>
      <input placeholder='Search by name...' onChange={e => setInputName(e.target.value)} type='text' value={inputName} />
      <select onChange={e => setStatus(e.target.value)} name='status'>
        <option value="">ALL</option>
        <option value="active">ACTIVE</option>
        <option value="inactive">INACTIVE</option>
      </select>
    </div>
  )
}

export default Filter