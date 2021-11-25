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


export default function ColorTextFields({produtos3}) {
  const produtos4 = produtos3
  console.log("aquiiiiii",produtos4)
  var tamanho = []
  var quantidadeprodutos = 11 //define quantidade de produtos
  for (let index = 0; index < quantidadeprodutos; index++) {
    tamanho.push(index)
    console.log()
  }
  var produtos = tamanho.map(tamanhos => (
    <div class="div11">
      <div class="ctnFlex">
        <TextField id={"codproduto" + tamanhos} name={"codproduto" + tamanhos} label="Código Produto" color="primary" style={{ "width": "225px","display":"inline-block" }} focused />
        <TextField id={"produto" + tamanhos} name={"produto" + tamanhos} label="Produto" color="primary" style={{ "width": "225px","display":"inline-block" }} focused />
        <TextField id={"quantidade" + tamanhos} name={"quantidade" + tamanhos} onChange={() => valortotal()} label="Quantidade"  color="primary" style={{ "width": "225px","display":"inline-block" }} focused />
        <TextField id={"valorund" + tamanhos} name={"valorund" + tamanhos} onChange={() => valortotal()} label="Valor Unitário"  color="primary" style={{ "width": "225px","display":"inline-block" }} focused />
        <TextField id={"valorTotal" + tamanhos} name={"valorTotal" + tamanhos} label="Valor Total" color="primary" style={{ "width": "225px","display":"inline-block" }} focused />
        <br />
      </div>
    </div>
  ))

  return (
    <div class="pai"> 
      <Menu />
      <div class="div10 conteudo">
        <h1 class="titulo" >Cadastrar Vendas</h1>
        <div class="formulario">
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField id="npedido1" name="npedido1" label="Nº Pedido Atual" color="primary" multiline rows="2" focused />
            <TextField label="Cliente Relacionado" color="primary" multiline rows="2" focused />
            <TextField label="Pedido Valor Total" id="pedido_total" color="warning" multiline rows="2"  style={{ "width": "530px","color":"red !important"}}  focused />
            <br />
            {produtos}
            <CadastrarButton size="large" variant="outlined" endIcon={<SendIcon />}>Finalizar Venda</CadastrarButton>
            <br />
            <br />
            <h3>Consultar</h3>
            <Lista produtos4={produtos4}/>
          </Box>

        </div>
      </div>
      <div class="stars" ></div>
    </div>


  );
}

