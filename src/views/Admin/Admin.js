import React, { useState } from "react";
import './Admin.css';
import Dashboard from '../../components/Dashboard/Dashboard';
import Table from '../../components/Table/Table';

function Admin() {

  const [campain, setCampain] = useState("");
  const [id, setId] = useState("");
  const [showElement, setShowElement] = useState(true);
/*   const [headers, setHeaders] = useState([]);
  const [data, setData] = useState([]); */
	
  function validateForm() {
    return id.length > 0 && campain.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    setShowElement(false);
  }


const columns = [
  { path: "id",   name: "id usuário" }, 
  { path: "name",   name: "Nome Usuário" }, 
  { path: "campain", name: "Campanha" }, 
  { path: "qtd",  name: "Quantidade de Acertos" }, 
];

const body = [
  { id: 1, name: 'Kate',  campain: 'SenacReingresso', qtd: '4' },
  { id: 2, name: 'Tom',   campain: 'SenacReingresso', qtd: '3' },
  { id: 3, name: 'Ann',   campain: 'SenacReingresso', qtd: '1' },
  { id: 4, name: 'Jack',  campain: 'SenacReingresso', qtd: '2' }
];


const columnsEmails = [
  { path: "emailsucsses",   name: "Quantidade de E-mails enviados com sucesso" }, 
  { path: "emailerror",   name: "Quantidade de E-mails enviados com erro" }, 
  
];

const bodyEmails = [
  { id: 1, emailsucsses: '50',  emailerror: '10' },
];

  return (
    <div className="content">
        { showElement ? (
            <form onSubmit={handleSubmit}>
                <label>Camapnha</label>
                <input
                    autoFocus
                    type=""
                    value={campain}
                    onChange={(e) => setCampain(e.target.value)}
                />
            
                <label>Id usuário</label>
                <input
                    type="password"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                />
                <button className="btn" type="submit" disabled={!validateForm()}>Login</button>
            </form>
        ) : ( <> 
        <div className="content-type">
          <Table id="1" columns={columnsEmails} body={bodyEmails} />
          <Table id="2" columns={columns} body={body} />
          <Dashboard/>
         
        </div>
      </> )}
    </div>
  );
}

export default Admin;