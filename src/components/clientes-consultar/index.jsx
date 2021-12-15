import * as React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import {
  DataGrid,
  GridToolbarDensitySelector,
  GridToolbarFilterButton, ptBR
} from '@mui/x-data-grid';
import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';
import { createTheme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';
import Menu from '../menu/menu.jsx'
import './style.css'


function escapeRegExp(value) {
  return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}

// Map Json dados pedidos para clientes43
//const produtos5 = {produtos4}
const produtoslist = require("./dados")
const colunasnv = require("./colunas")


const defaultTheme = createTheme();
const useStyles = makeStyles(
  (theme) =>
    createStyles({
      root: {
        padding: theme.spacing(0.5, 0.5, 0),
        justifyContent: 'space-between',
        display: 'flex',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        

      },
      textField: {
        [theme.breakpoints.down('xs')]: {
          width: '100%',

        },
        margin: theme.spacing(1, 0.5, 1.5),
        '& .MuiSvgIcon-root': {
          marginRight: theme.spacing(0.5),

        },
        '& .MuiInput-underline:before': {
          borderBottom: `1px solid ${theme.palette.divider}`,
        },
      },
    }),
  { defaultTheme },
);

function QuickSearchToolbar(props) {
  const classes = useStyles();

  return (
    <div style={{ 'margin-top' : '100px' }}className={classes.root} >
      
      <div>

        <GridToolbarFilterButton />
        <GridToolbarDensitySelector />

      </div>
      <TextField

        variant="standard"
        value={props.value}
        onChange={props.onChange}
        placeholder="Pesquisar"
        className={classes.textField}
        InputProps={{
          startAdornment: <SearchIcon fontSize="small" />,
          endAdornment: (
            <IconButton

              title="Clear"
              aria-label="Clear"
              size="small"
              style={{ visibility: props.value ? 'visible' : 'hidden' }}
              onClick={props.clearSearch}
            >
              <ClearIcon fontSize="small" />
            </IconButton>
            
          ),
        }}
      />
    </div>
  );
}

QuickSearchToolbar.propTypes = {
  clearSearch: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default function QuickFilteringGrid({ clientes }) {
  console.log("veio", clientes)
  const clientes43 = clientes
  const [searchText, setSearchText] = React.useState('');
  const [rows, setRows] = React.useState(clientes43);
  const [pageSize, setPageSize] = React.useState(5);

  const requestSearch = (searchValue) => {
    setSearchText(searchValue);
    const searchRegex = new RegExp(escapeRegExp(searchValue), 'i');
    const filteredRows = clientes43.filter((row) => {
      return Object.keys(row).some((field) => {
        console.log(searchRegex.test(row[field].toString()))
        return searchRegex.test(row[field].toString());
      });
    });
    setRows(filteredRows);
  };

  React.useEffect(() => {
    setRows(clientes43);
  }, [clientes43]);


  const FormatarMoeda = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
  const BRL = {
    type: 'number',
    width: 130,
    valueFormatter: ({ value }) => FormatarMoeda.format(Number(value)),
    cellClassName: 'font-tabular-nums',
  };


  return (
    <div>
      <Menu />    
      
      <div className="conteudo" style={{ width: '85%' }}>
        <h1 className="titulo">Clientes</h1>

        <DataGrid
          localeText={ptBR.props.MuiDataGrid.localeText}
          components={{ Toolbar: QuickSearchToolbar }}
          rows={rows} //define onde vamos buscar os registros neste caso varivael rows da linha 98 e renderiza em tela
          columns={colunasnv} //define onde vamos buscar os titulos das colunas neste caso varivael colunasnv da linha 24 e renderiza em tela
          //columns={[colunasnv[0],colunasnv[1],colunasnv[2],colunasnv[3], {field: 'preco_unitario' , ...BRL} ] }
          componentsProps={{
            toolbar: {
              value: searchText,
              onChange: (event) => requestSearch(event.target.value),
              clearSearch: () => requestSearch(''),
            },
          }}
        />
      </div>
    </div>
  );
}
