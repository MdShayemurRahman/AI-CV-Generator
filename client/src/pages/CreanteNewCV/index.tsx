import React from 'react'
import { Button, Grid, TextField, Paper, Box } from "@mui/material/";
import { PDFDownloadLink } from "@react-pdf/renderer";
import Form from './Form'
import PdfResume from './PdfResume'
import { resumeData } from '../../mockData'

const CreateNewCV = () => {
  return (
<Grid container style={{padding: '1rem'}}>
<Grid position="absolute" right={15} top={10}>
        <Button variant="contained">
          {"Download now!"}
          <PDFDownloadLink
            document={<PdfResume Resume={resumeData}/>}
            fileName={resumeData.map(item => `${item.person.first_name} ${item.person.last_name}`).join(',')}
             >
            {({ blob, url, loading, error }) =>
              loading ? "Loading document..." : "Download now!"
            }
          </PDFDownloadLink>
        </Button>
      </Grid>
      <Grid item xs={5} spacing={6} style={{paddingRight: '1rem',}}>
      <Paper elevation={4}>
        <Form />
        </Paper>
      </Grid>
      <Grid item xs={7} style={{background: 'white'}}>
          <Paper elevation={4}>
        <PdfResume Resume={resumeData}></PdfResume>
        </Paper>
      </Grid>
      </Grid>


  )
}

export default CreateNewCV
