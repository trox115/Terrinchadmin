import React,{useEffect,useState} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'
import styled from 'styled-components'
import Table2 from '../../containers/Table'

const GiveMargin= styled.div`
.container{
    margin-left:30px;
}
`

function Clientes(params) {
    const [clientes, setclientes] = useState([]);
    const [tbl,setTable] = useState(null)

        async function fetchClie() {
            const response = await fetch('http://localhost:3001/clientes/getCli');
            const data = await response.json();
            setclientes(await data);
          }
          
          let tabelaCli=[]
    useEffect(() => {
     if(clientes.length===0){
         fetchClie()
     }
     else{
         clientes.forEach(cliente => {
             tabelaCli.push({
                 id: cliente.id,
                 nome: cliente.name,
                 email:cliente.email,
                 telefon:cliente.phone
             })
         })
        setTable(
            tabelaCli.map(client => (
                <Table2 
                nome={client.nome}
                email={client.email}
                telefone={client.telefon}
                />
            )),
        )

         console.log(tabelaCli)
     }
    }, [clientes]);
    if(clientes.length>0){
    return(
        <GiveMargin>
       <Container>
           <Row>
               <Col md='12'>
                   <h2>Informações de Clientes</h2>
                   <Table className='table table-Dark'>
                        <thead>
                            <tr>
                            <th scope='col'>Nome</th>
                            <th scope='col'>Email</th>
                            <th scope='col'>Telefone</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tbl}
                        </tbody>
                   </Table>
               </Col>
           </Row>
       </Container>
       </GiveMargin>
    )
}
else{
    return(
        <h1>nenhum Cliente</h1>
    )
}
}

export default Clientes