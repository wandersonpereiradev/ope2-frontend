import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import SendIcon from '@mui/icons-material/Send';
import './style.css'
import Menu from '../menu/menu.jsx'
import cadastrarnovo from './post.js'


const CadastrarButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'block',
    width: '250px',
    height: '55px',
    fontSize: 16,
    color: 'white',
    padding: '0px 0px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#0063cc',
    borderColor: '#0063cc',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  });


export default function ColorTextFields() {
    return (
        <div class="pai">
            <Menu />
            <div class="div10 ">
                <h1> Cadastro de Cliente</h1>
                <div class="formulario">
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField id="Nome" label="Nome" color="primary" focused />
                        <TextField id="Sobrenome" label="Sobrenome" color="primary" focused />
                        <TextField id="Contato" label="Contato"  color="primary" focused /><br />
                        <TextField id="Endereco" label="Endereço" style={{ "width": "98%","color":"red !important"}} color="primary" focused /><br />
                        <TextField id="Veiculo" label="Veiculo" style={{ "width": "47%","color":"red !important"}} color="primary" focused />
                        <TextField id="Placa" label="Placa" style={{ "width": "48%","color":"red !important"}}  color="primary" focused /><br />
                        <CadastrarButton size="large" variant="outlined" onClick={() =>cadastrarnovo()} endIcon={<SendIcon />}>Cadastrar</CadastrarButton>
                    </Box>
                </div>
            </div>
            <div class="stars" ></div>
        </div>


    );
}