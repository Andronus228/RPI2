import TextField from '@material-ui/core/TextField'
import  Typography from '@material-ui/core/Typography';
import  Paper from '@material-ui/core/Paper';
import  Avatar  from '@material-ui/core/Avatar';
import  Button  from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import './infoView.css'
import  Link  from '@material-ui/core/Link';
//import {Link} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import {useTranslation} from 'react-i18next';
//import "./App.css";

export default function InfoView(){
    const paperStyle = {padding:'50px 20px',width:300,margin:"20px auto"}
    let navigate = useNavigate()
    const {id} = useParams()
    const idAsNumber = parseInt(id)

    const [name,setName]=useState('df')
    const [image,setImage]=useState('')
    const [years,setYears]=useState('')
    const [description,setDescription]=useState('')
    const [img1,setImg1]=useState('')
    const [img2,setImg2]=useState('')
    const [img3,setImg3]=useState('')
    const [tube,setTube]=useState('')
    const [hist1,setHist1]=useState('')
    const [hist2,setHist2]=useState('')
    const [hist3,setHist3]=useState('')
    const [hist4,setHist4]=useState('')
    
    const signer = {id,name,image,years,description}

   // const [signers,setSigners] = useState([])

    const setInfo=()=>{
     // setSigners(JSON.parse(localStorage.getItem('signers')))
      const arr = JSON.parse(localStorage.getItem('signers'))
      console.log(id)
      const signerWithId = arr.find(signer => signer.id === idAsNumber);
      //console.log(signers)
      setName(signerWithId.name)
      setImage(signerWithId.image)
      setYears(signerWithId.years)
      setDescription(signerWithId.description)
      setTube(signerWithId.tube)
      setImg1(signerWithId.img1)
      setImg2(signerWithId.img2)
      setImg3(signerWithId.img3)
      setHist1(signerWithId.hist1)
      setHist2(signerWithId.hist2)
      setHist3(signerWithId.hist3)
      setHist4(signerWithId.hist4)


      
 
    }
   
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
           
          <Typography variant="h4">{t("info")}</Typography> 
          <Avatar src={image} className='image' alt="John Smith"/>
          <Typography variant="h5">{name}</Typography>
          <Typography variant="subtitle1">{years}</Typography>
          <Typography variant="body1">{description}</Typography><br/>

          <Container>
            <div className="ratio ratio-16x9">
              <iframe src={tube} title="YouTube video" allowFullScreen></iframe>
            </div>
          </Container>
        


          <div class="Map">
          <div className="App">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7067.914988060522!2d37.61077334258124!3d55.758437645543644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a5b4c576dbf%3A0x93a829189a1d29f2!2z0JHQvtC70YzRiNC-0Lkg0YLQtdCw0YLRgA!5e0!3m2!1sru!2sby!4v1702755606186!5m2!1sru!2sby"
              width="500"
              height="450"
              style={{border:"0"}}
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
          </div>

          <div class="Map">
            <div class="imgitem"><img class="image" src={img1} alt="jj"></img></div>
            <div class="imgitem"><img class="image" src={img2} alt="jj"></img></div>
            <div class="imgitem"><img class="image" src={img3} alt="jj"></img></div>
          </div>

          

          <Timeline lineColor={'#ddd'}>
  <TimelineItem
    key="001"
    dateText="01/1960-01/1980"
    style={{ color: '#e86971' }}
  >
    <h3>{t("childhood")}</h3>
    <h4>{t("childhood2")}</h4>
    <p>
      {hist1}
    </p>
  </TimelineItem>
  <TimelineItem
    key="002"
    dateText="02/1980-01/2000"
    dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
    bodyContainerStyle={{
      background: '#ddd',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
    }}
  >
    <h3 style={{ color: '#61b8ff' }}>{t("before")}</h3>
    <h4 style={{ color: '#61b8ff' }}>{t("before2")}</h4>
    <p>
      {hist2}
    </p>
  </TimelineItem>
  <TimelineItem
    key="003"
    dateComponent={(
      <div
        style={{
          display: 'block',
          float: 'left',
          padding: '10px',
          background: 'rgb(150, 150, 150)',
          color: '#fff',
        }}
      >
        02/2000-01/2010
      </div>
    )}
  >
    <h3>{t("pik")}</h3>
    <h4>{t("pik2")}</h4>
    <p>
      {hist3}
    </p>
  </TimelineItem>
  <TimelineItem
    key="004"
    dateText={t("dataText")}
    dateInnerStyle={{ background: '#76bb7f' }}
  >
    <h3>{t("after")}</h3>
    <h4>{t("after2")}</h4>
    <p>
      {hist4}
    </p>
  </TimelineItem>
</Timeline>


        </Paper>

       

      
    )
}