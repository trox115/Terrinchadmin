import React, { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col'
import { getMonth, set } from 'date-fns'
import {Bar,Line,Pie} from 'react-chartjs-2'


const HomePage= ({...props}) => {
  const [casas,setCasas] = useState([])
  const [clientes,setClientes] = useState([])
  const [ocupadas,setOcupadas] = useState([])
  const [sujas,setSujas] = useState([])
  const [livre, setLivre] = useState([]);
  const [meses,setMeses] =useState([0,0,0,0,0,0,0,0,0,0,0,0])
      async function fetchData() {
        const response = await fetch('http://localhost:3001/casas/index');
        const data = await response.json();
        setCasas(await data);
      }
      
      async function fetchClie() {
        const response = await fetch('http://localhost:3001/clientes/getCli');
        const data = await response.json();
        setClientes(await data);
      }
      
      useEffect(() => {
        let stop =0

        if(clientes.length ===0){
          fetchClie()
        }
        else if(clientes.length>0 &&stop === 0){
          stop =1
          clientes.forEach(cliente =>{
            console.log(cliente)
            let date = new Date(cliente.created_at)
            let mes = getMonth(date)
            let novoMes = meses
            console.log(novoMes)
            novoMes[mes]+=1
           setMeses(novoMes)
           
            
          })
          console.log(meses)
        }
       if(casas.length===0){
        fetchData()
      }else if(ocupadas.length===0 && livre.length===0 && sujas.length===0){
        let i=0
        casas.forEach(casa => {
        let liv=[]

          if(casa.ocupada){
            
            setOcupadas(oldArray => [...oldArray, casa.nome]);

            //console.log(casa.nome)
            
          }
          else if(!casa.limpa){
            setSujas(oldArray => [...oldArray, casa.nome]);

            //console.log(casa.nome)
            //console.log(sujas)
          }
          else if(casa.limpa && casa.ocupada===false){
            
            setLivre(oldArray => [...oldArray, casa.nome]);

          }
        
      })
      
    }
   
      }, [casas,ocupadas,livre,sujas,clientes,meses]);

      
      let data = {
        labels:['Ocupadas','Livre','Sujas'],
        datasets:[{
          label:'Rácio de Casas',
        data:[
          ocupadas.length,
          livre.length,
          sujas.length,
        ],
        backgroundColor:[
          'rgba(255,99,132,1)',
          'rgba(123, 239, 178, 1)',
          'rgba(247, 202, 24, 1)',
        ],
        borderWidth:1,
        borderColor:'#777',
        hoverBorderWidth:3,
        hoverBorderColor:'#000'
      }]
      }

      let ocupacao = {
        labels:['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Agosto','Setembro','Outubro','Novembro','Deembro'],
        datasets:[{
          label:'Ocupação Por mês',
        data:meses,
        backgroundColor:[
          'rgba(255,99,132,1)',
          'rgba(123, 239, 178, 1)',
          'rgba(247, 202, 24, 1)',
        ],
        borderWidth:1,
        borderColor:'#777',
        hoverBorderWidth:3,
        hoverBorderColor:'#000'
      }]
      }
    
    return(
     <>
      <Col md="4">
     
        <Bar 
        data={data}
        width={300}
        height={400}
        options = {{
          maintainAspectRatio:false,
          title: {
            display: true,
            text: 'Rácio de Casas'
        }
        }}
        />
     
        </Col>
       
<Col md="8">
     
     <Line
     data={ocupacao}
     width={300}
     height={400}
     options = {{
       maintainAspectRatio:false,
       title: {
         display: true,
         text: 'Rácio de Casas'
     }
     }}
     />
  
     </Col>
</>
    )
}



export default HomePage