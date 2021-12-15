import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import SendIcon from '@mui/icons-material/Send';
import InputAdornment from '@mui/material/InputAdornment';
import './style.css'
import Menu from '../menu/menu.jsx'
import Select from './select.jsx';
import cadastrarnovo from './post.js'
import valortotal from './valortotal';

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
                <h1>Cadastrar Servico</h1>
                <div class="formulario">
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField id="cliente_id" label="cliente_id" style={{ "width": "98%","height":"70px","color":"red !important"}} color="primary" focused />
                        <br/>
                        <TextField id="idservico" label="Código Servico" color="primary" focused />
                        <TextField id="veiculo" label="Veiculo" color="primary" focused />
                        <TextField id="valor_total"  label="Valor Total" color="primary"  focused  /><br />
                        <br/>
                        <TextField id="descricao" label="Servico" style={{ "width": "98%","height":"70px","color":"red !important"}} color="primary" focused />
                        <br/>
                        <TextField inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} id="quantidade"  onChange={() => valortotal()} label="Quantidade" color="primary" focused />
                        <TextField id="preco_unitario" onChange={() => valortotal()} label="Valor Unitário" color="primary" focused />
                        
                        <CadastrarButton size="large" variant="outlined" onClick={() =>cadastrarnovo()} endIcon={<SendIcon />}>Cadastrar Servico</CadastrarButton>
                        <br />
                        <br />
                    
                    </Box>
                    
                </div>
            </div>
        </div>


    );
}