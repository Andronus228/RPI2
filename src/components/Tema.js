import TextField from '@material-ui/core/TextField'
import  Typography from '@material-ui/core/Typography';
import  Paper from '@material-ui/core/Paper';
import  Avatar  from '@material-ui/core/Avatar';
import  Button  from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import './mainView.css'
import  Link  from '@material-ui/core/Link';
//import {Link} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import { styled, alpha } from '@material-ui/core/styles';
import {useTranslation} from 'react-i18next';



export default function Tema(){
  let navigate = useNavigate()
  const {tema} = useParams()

   let signers = []

  const [Signers,SetSigners]=useState([])
  const [nameOfSigner,setName]=useState('')

    const setInfo=()=>{
        // setSigners(JSON.parse(localStorage.getItem('signers')))
         const arr = JSON.parse(localStorage.getItem('signers'))
         signers = arr.filter(obj => obj.tema === tema);
         SetSigners(signers)
         console.log(signers)
       }

   function handleView  (id) {
        navigate(`/info/${id}`) 
       
    }

    const handleSearch = () => {
      const arr = Signers
      signers = arr.filter(obj => obj.name === nameOfSigner);
      SetSigners(signers)
    };

    const { t ,i18n}=useTranslation();
  
  const changeLanguage=(language)=>{
    i18n.changeLanguage(language);
  };
  
    useEffect(()=>{     
        setInfo()
      },[]
      )

   
    return(
      
       
      
        <Paper className='ofTheDay'>            
<div style={{ display: 'flex', alignItems: 'center' }}>
            <TextField className='field' id="name" label="enter the name"  variant="outlined"  
                  value = {nameOfSigner}
                  onChange={(e)=>
                 setName(e.target.value)
            } 
            /> 

           <SearchIcon 
              onClick={handleSearch}
              />
     </div>       
      
          <Typography variant="h4">{t("topic")}</Typography> 
          <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
             
              <TableCell>{t("Name")}</TableCell>
              <TableCell>{t("Years")}</TableCell>
              <TableCell>{t("Tema")}</TableCell>
              <TableCell>{t("Action")}</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {Signers.map((employee, index) => (
              <TableRow key={index}>
                
                <TableCell>{employee.name}</TableCell>
                <TableCell>{employee.years}</TableCell>
                <TableCell>{employee.tema}</TableCell>
                
                <TableCell>
                  
                   <Button variant="text" onClick = {() => handleView(employee.id)} >{t("watch")} </Button><br/>
                  
                  
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
         
        </Paper>

      
    )
}  