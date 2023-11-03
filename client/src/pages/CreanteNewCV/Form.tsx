import { FC, useState } from 'react';
import { Button, Grid, TextField, Paper, Box} from '@mui/material/';

//import CVData from "./interfaces";


const Form = () => {
  //  const [fetchedData, setFetchedData] = useState<Array<CVData>>([]);

    return (
        <Box sx={{maxHeight: '85vh', overflowY: 'auto'}}>
          <Grid>
          <TextField id="outlined-basic" label="First name" variant="outlined" />
          <TextField id="outlined-basic" label="Last name" variant="outlined" />
          <TextField id="outlined-basic" label="Last name" variant="outlined" />
          <TextField id="outlined-basic" label="Last name" variant="outlined" />
          <TextField id="outlined-basic" label="Last name" variant="outlined" />
          <TextField id="outlined-basic" label="Last name" variant="outlined" />
          <TextField id="outlined-basic" label="Last name" variant="outlined" />
          <TextField id="outlined-basic" label="Last name" variant="outlined" />
          <TextField id="outlined-basic" label="Last name" variant="outlined" />
          <TextField id="outlined-basic" label="Last name" variant="outlined" />
          <TextField id="outlined-basic" label="Last name" variant="outlined" />
          <TextField id="outlined-basic" label="Last name" variant="outlined" />
          <TextField id="outlined-basic" label="Last name" variant="outlined" />
          <TextField id="outlined-basic" label="Last name" variant="outlined" />
          <TextField id="outlined-basic" label="Last name" variant="outlined" />
          <TextField id="outlined-basic" label="Last name" variant="outlined" />
          <TextField id="outlined-basic" label="Last name" variant="outlined" />
          <TextField id="outlined-basic" label="Last name" variant="outlined" />
          <TextField id="outlined-basic" label="Last name" variant="outlined" />
          <TextField id="outlined-basic" label="Last name" variant="outlined" />
          <TextField id="outlined-basic" label="Last name" variant="outlined" />
          <TextField id="outlined-basic" label="Last name" variant="outlined" />
          <TextField id="outlined-basic" label="Last name" variant="outlined" />
          <TextField id="outlined-basic" label="Last name" variant="outlined" />
          <TextField id="outlined-basic" label="Last name" variant="outlined" />
          </Grid>
          <Grid display="flex" justifyContent="right" padding={3}>
          <Button variant="contained">Submit</Button>
          </Grid>
      </Box>
  );
};

export default Form;
