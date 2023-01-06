import React ,{useState}from 'react'
import Box from '@mui/material/Box';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Container from '@mui/material/Container';
import { blue, red } from '@mui/material/colors';
const LocationCards =( {data1} )=> {

    const [value,setValue]=useState();
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
  return (
    <Container maxWidth="xxxl">
    <Box
      sx={{

        display: 'flex',
        flexGrow: 1,
        
    
        px: { l: 0, md: 2 },
        alignItems: 'center',
        mt: 2,
        mb: 2,
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        sx={{
          [`& .${tabsClasses.scrollButtons}`]: {
            '&.Mui-disabled': { opacity: 0.3 },
          },
          minWidth: 100, //
          width: 1900,
          height: 300,
          color: blue,
          backgroundColor: 'white',
          marginBottom: 100,
          
          
          
        }}
      >
       
        {data1?.map((tab) => {
          return <Tab key={tab.id} icon={<img style={{height:200,width:150,padding:40,}} alt={tab.title} src={tab.image}
          />} />;

        })}
        
       
      </Tabs>
     </Box>
  </Container>
);
};



export default LocationCards