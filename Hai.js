import { Card } from '@material-ui/core';
import { Paper} from '@material-ui/core';
//import { Typography } from '@material-ui/core';
import { CardContent,TextField } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import React from 'react';
import Divider from '@material-ui/core/Divider';

const Hai = () => {
  return (
  <Paper  elevation ={0} align="center"  >
    <Grid item xs={ 18}>
  <Card style={{
          width: 800,
          height: 500
          ,
          align :"center"
          
        }}>
          <CardContent>
          <Grid container spacing={1}>
        <Grid item xs={6}>
          <TextField id="filled-basic" align="left" label="Filled" variant="filled" />
          </Grid>
          </Grid>
         
          <Divider black />

          </CardContent>
          
          <Grid container spacing={1}>
        <Grid item xs={1}></Grid>
          <Card style={{
          width: 200,
          height: 150
          ,
          align :"left"
          
        }}></Card>
        </Grid>
        
      


        
        
      



    
  </Card>
</Grid>

  </Paper>


  )
}

export default Hai
