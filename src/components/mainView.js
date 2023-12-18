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
import {useTranslation} from 'react-i18next';

import { useNavigate } from 'react-router-dom'


export default function MainView(){
    const paperStyle = {padding:'50px 20px',width:300,margin:"20px auto"}
    let navigate = useNavigate()

    const [id,setId]=useState(0)
    const [name,setName]=useState('')
    const [image,setImage]=useState('')
    const [years,setYears]=useState('')
    const [description,setDescription]=useState('')
    

  //  const [signer, setSigner] = useState({
   //   id: 0,
   //   name: '',
   //   image: '',
    //  years: '' ,
    //  description:''
    //  }
    //  )

    const { t ,i18n}=useTranslation();
  
  const changeLanguage=(language)=>{
    i18n.changeLanguage(language);
  };
    const [signers,setSigners] = useState([])

    const getInfo=()=>{
      //Далее в этой функции будет добавляться несколько певцов и будут сгружаться масством в localStorage 
      //
      const arr = [
        {id:1,name:t("name1"),image:"../Images/kirkorov.jpg",tema:"lirika",years:t("year1"),description:t("descmain1"),tube:"https://www.youtube.com/embed/zPZXbaGqnDI?si=9MwPEm9f_A052iRO",img1:"../Images/kirkorov1.jpg",img2:"../Images/kirkorov2.jpg",img3:"../Images/kirkorov3.jpg",hist1:t("hist11"),hist2:t("hist12"),hist3:t("hist13"),hist4:t("hist14")},
        {id:2,name:t("name2"),image:"../Images/stas.jpg",tema:"lirika",years:t("year2"),description:t("descmain2"),tube:"https://www.youtube.com/embed/9NzJpjIDxqE?si=GcS92Zp9EchYzC-m",img1:"../Images/stas1.jpg",img2:"../Images/stas2.jpg",img3:"../Images/stas3.jpg",hist1:t("hist21"),hist2:t("hist22"),hist3:t("hist23"),hist4:t("hist24")},
        {id:3,name:t("name3"),image:"../Images/baskov.jpg",tema:"lirika",years:t("year3"),description:t("descmain3"),tube:"https://www.youtube.com/embed/obVvRUebZnI?si=PRDEIQcnDD8GFqMt",img1:"../Images/baskov1.jpg",img2:"../Images/baskov2.jpg",img3:"../Images/baskov3.jpg",hist1:t("hist31"),hist2:t("hist32"),hist3:t("hist33"),hist4:t("hist34")},
        {id:4,name:t("name4"),image:"../Images/zverev.jpg",tema:"drama",years:t("year"),description:t("descmain4"),tube:"https://www.youtube.com/embed/tII7PrWmrnc?si=DzsBfqeKiyAs3nR5",img1:"../Images/zverev1.jpg",img2:"../Images/zverev2.jpg",img3:"../Images/zverev3.jpg",hist1:t("hist41"),hist2:t("hist42"),hist3:t("hist43"),hist4:t("hist44")},
        {id:5,name:t("name5"),image:"../Images/boris.jpeg",tema:"drama",years:"1954-2022",description:t("descmain5"),tube:"https://www.youtube.com/embed/-6uE9jEJI9A?si=95jZ9g5eEiRJzDhq",img1:"../Images/boris1.jpg",img2:"../Images/boris2.jpg",img3:"../Images/boris3.jpg",hist1:t("hist51"),hist2:t("hist52"),hist3:t("hist53"),hist4:t("hist54")},
      ]

   //   console.log(arr)
      localStorage.setItem("signers", JSON.stringify(arr));

    }
   
    function Info  () {
         navigate(`/info/${id}`) 
   }

   function setSignerOfTheDay  () {
    //тут id будет генерироваться рандомно дальше по id получвем из localStorage гужного певца и сеттим значение полей ими

    const randomNumber = Math.random() * (2 - 1) + 1;
    const arr = JSON.parse(localStorage.getItem('signers'))

 //console.log(randomNumber)
 //console.log(arr)
    const signerWithIdRandomNumber = arr.find(signer => signer.id === 1);
  //  console.log(signerWithIdRandomNumber)

    setId(1)
    setName(signerWithIdRandomNumber.name)
    setImage(signerWithIdRandomNumber.image)
    setYears(signerWithIdRandomNumber.years)
    setDescription(signerWithIdRandomNumber.description)

}


    useEffect(()=>{
       getInfo()
    },[signers]
    )

    useEffect(()=>{
      setSignerOfTheDay()
    },[]
    )

    return(
        <Paper>
          <Typography variant="h4">{t("description")}</Typography>
          <Typography variant="body1">{t("descport")}</Typography>
      
        <Paper className='ofTheDay'>
           
          <Typography variant="h4">{t("mainday")}</Typography> 
          <Avatar className = "image1" alt="John Smith" src="../Images/kirkorov.jpg"/>
          <Typography variant="h5">{name}</Typography>
          <Typography variant="subtitle1">{years}</Typography>
          <Typography variant="body1">{description}</Typography><br/>
          <Button variant="contained" onClick = {() => Info()}  >{t("gopage")}</Button>
        </Paper>
        <Typography variant="h4">{t("teamdev")}</Typography>
    <Paper className='developersPaper'>

      <Paper className='developerPaper' >
          <Avatar alt="John Doe" src="../Images/Andrei.jpg" />
          <Typography variant="subtitle1">{t("devname1")}</Typography>
          <Link href="https://github.com/Andronus228" target="_blank" rel="noopener">Andronus228</Link>
      </Paper>

      <Paper className='developerPaper' >
          <Avatar alt="John Doe" src="../Images/Ilya.jpg" />
          <Typography variant="subtitle1">{t("devname2")}</Typography>
          <Link className = "link" href="https://github.com/IlyaSkrylev" target="_blank" rel="noopener">IlyaSkrylev</Link>
      </Paper>

    
      <Paper className='developerPaper' >
          <Avatar alt="John Doe" src="../Images/Nikita.jpg" />
          <Typography variant="subtitle1">{t("devname3")}</Typography>
          <Link className = "link" href="https://github.com/Khomyak200" target="_blank" rel="noopener">Khomyak200</Link>
      </Paper>

      <Paper className='developerPaper' >
          <Avatar alt="John Doe" src="../Images/Sanya.jpg" />
          <Typography variant="subtitle1">{t("devname4")}</Typography>
          <Link className = "link" href="https://github.com/Nikita0703" target="_blank" rel="noopener">Nikita0703</Link>
      </Paper>

     </Paper> 
        </Paper> 
    )
}  