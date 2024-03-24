import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { contracts } from '../mock';
import { dateFormat } from '../dateForma';
import Articles from './Articles';

const Contract = () => {
  const { brojUgovora } = useParams();
  const [contract, setContract] = useState({});

  useEffect(() => {
    if (brojUgovora && contracts) {
      const filteredContract = contracts.find(contract => contract.brojUgovora === brojUgovora.replace("-", "/"));
      if (filteredContract) {
        setContract(filteredContract);
      } else {
        console.error("Contract not found for:", brojUgovora);
      }
    }
  }, [brojUgovora, contracts]);

  if (Object.keys(contract).length === 0) {
    return <div>Loading</div>;
  }

  console.log(contract);

  return (
    <>
      <div className={`contract ${contract.status == "KREIRANO" ? "kreirano" : contract.status == "ISPORUČENO" ? "isporučeno" : "naručeno"}`}>
        <div className='contract__data'>
          <p>Ime: {contract.kupac}</p>
          <p>Broj ugovora: {contract.brojUgovora}</p>
          <p>Datum akontacije: {dateFormat(contract?.datumAkontacije)}</p>
          <p>Rok isporuke: {dateFormat(contract?.rokIsporuke)}</p>
          <p>Status: <span  className="status">{contract.status}</span></p>
        </div>
      </div>
      <Articles />
    </>
  )
}

export default Contract