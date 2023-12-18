//import * as React from 'react';
import { styled, alpha } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { Button } from '@material-ui/core';
import {useTranslation} from 'react-i18next';
import "./Appbar.css";

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 20),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(2)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchAppBar() {
  const [searchTerm, setSearchTerm] = useState('');
  let navigate = useNavigate()

  const handleSearch = () => {
    // Действие, которое происходит при нажатии на кнопку "Search"
    console.log('Searching for:', searchTerm);
    navigate(`/tema/${searchTerm}`)
    // Здесь можно добавить логику для поиска и отображения результатов
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const { t ,i18n}=useTranslation();
  
  const changeLanguage=(language)=>{
    i18n.changeLanguage(language);
  };


  const Main = () => {
    // Действие, которое происходит при нажатии на кнопку "Search"
    console.log('Searching for:', searchTerm);
    navigate("/")
    // Здесь можно добавить логику для поиска и отображения результатов
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>

        <Button  onClick={Main}>Главная</Button>

          <IconButton
            size="medium"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
           >

           <MenuIcon />
          
         </IconButton>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Певец
          </Typography>


          <Search>
            
            <SearchIconWrapper>
              <SearchIcon 
              onClick={handleSearch}
              />
            </SearchIconWrapper>


            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              value={searchTerm}
              onChange={handleInputChange}
            />

          </Search>
          <div className="buttons">
          <button onClick={()=>changeLanguage("en")}>EN</button>
          <button onClick={()=>changeLanguage("ru")}>RU</button>
          </div>
        </Toolbar>
        
      </AppBar>
    </Box>
  );
}  
