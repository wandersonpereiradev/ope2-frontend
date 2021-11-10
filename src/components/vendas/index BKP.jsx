import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import SendIcon from '@mui/icons-material/Send';
import './style.css'
import Menu from '../menu/menu.jsx'
import Select from './select.jsx';
import Lista from './lista-vendas/index.jsx';



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
                <h1>Cadastrar Vendas</h1>
                <div class="formulario">
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField  id="npedido1" name="npedido1" label="Nº Pedido Atual"color="primary" focused />
                        <TextField label="Cliente Relacionado"color="primary" focused />
                        <TextField label="Pedido Valor Total"color="primary" focused />
                        <br />
                        <TextField id="codproduto1" name="codproduto1" label="Código Produto" color="primary" focused />
                        <TextField id="produto1" name="produto1" label="Produto" color="primary" focused />
                        <TextField label="Quantidade" color="primary" focused />
                        <TextField label="Valor Unitário" color="primary" focused />
                        <TextField label="Valor Total" color="primary" focused />
                        <br />
                        <TextField id="codproduto2" name="codproduto2" label="Código Produto" color="primary" focused />
                        <TextField id="produto1" name="produto1" label="Produto" color="primary" focused />
                        <TextField label="Quantidade" color="primary" focused />
                        <TextField label="Valor Unitário" color="primary" focused />
                        <TextField label="Valor Total" color="primary" focused />
                        <br />
                        <TextField id="codproduto3" name="codproduto3" label="Código Produto" color="primary" focused />
                        <TextField id="produto1" name="produto1" label="Produto" color="primary" focused />
                        <TextField label="Quantidade" color="primary" focused />
                        <TextField label="Valor Unitário" color="primary" focused />
                        <TextField label="Valor Total" color="primary" focused />
                        <br />
                        <TextField id="codproduto4" name="codproduto4" label="Código Produto" color="primary" focused />
                        <TextField id="produto1" name="produto1" label="Produto" color="primary" focused />
                        <TextField label="Quantidade" color="primary" focused />
                        <TextField label="Valor Unitário" color="primary" focused />
                        <TextField label="Valor Total" color="primary" focused />
                        <br />
                        <TextField id="codproduto5" name="codproduto5" label="Código Produto" color="primary" focused />
                        <TextField id="produto1" name="produto1" label="Produto" color="primary" focused />
                        <TextField label="Quantidade" color="primary" focused />
                        <TextField label="Valor Unitário" color="primary" focused />
                        <TextField label="Valor Total" color="primary" focused />
                        <br />
                        <TextField id="codproduto6" name="codproduto6" label="Código Produto" color="primary" focused />
                        <TextField id="produto1" name="produto1" label="Produto" color="primary" focused />
                        <TextField label="Quantidade" color="primary" focused />
                        <TextField label="Valor Unitário" color="primary" focused />
                        <TextField label="Valor Total" color="primary" focused />
                        <br />
                        <TextField id="codproduto7" name="codproduto7" label="Código Produto" color="primary" focused />
                        <TextField id="produto1" name="produto1" label="Produto" color="primary" focused />
                        <TextField label="Quantidade" color="primary" focused />
                        <TextField label="Valor Unitário" color="primary" focused />
                        <TextField label="Valor Total" color="primary" focused />
                        <br />
                        <TextField id="codproduto8" name="codproduto9" label="Código Produto" color="primary" focused />
                        <TextField id="produto1" name="produto1" label="Produto" color="primary" focused />
                        <TextField label="Quantidade" color="primary" focused />
                        <TextField label="Valor Unitário" color="primary" focused />
                        <TextField label="Valor Total" color="primary" focused />
                        <br />
                        <TextField id="codproduto10" name="codproduto10" label="Código Produto" color="primary" focused />
                        <TextField id="produto10" name="produto10" label="Produto" color="primary" focused />
                        <TextField label="Quantidade" color="primary" focused />
                        <TextField label="Valor Unitário" color="primary" focused />
                        <TextField label="Valor Total" color="primary" focused />
                        <br />
                      
                        <CadastrarButton size="large" variant="outlined" endIcon={<SendIcon />}>Finalizar Venda</CadastrarButton>
                        <br />
                        <br />
                        <h3>Produtos Adicionados </h3>
                      <Lista />
                    </Box>
                    
                </div>
            </div>
            <div class="stars" ></div>
        </div>


    );
}