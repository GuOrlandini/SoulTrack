import { Button } from '@mui/material';

function Botao() {
  return (
    <div>
    <Button 
    variant="contained" 
    color="secondary" 
    style={{color: 'black'}}
    sx = {{'&:hover' : { backgroundColor: '#EEEBFF'}}}
      >Home
    </Button>

    <Button 
    variant="contained" 
    color="secondary" 
    style={{color: 'black'}}
    sx = {{'&:hover' : { backgroundColor: '#EEEBFF'}}}
      >About
    </Button>
    </div>
  );
}

export default Botao;