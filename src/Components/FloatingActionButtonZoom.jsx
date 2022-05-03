import {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    'aria-controls': `action-tabpanel-${index}`,
  };
}


export const FloatingActionButtonZoom = ()=> {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [relevantData, setRelevantData] = useState([]);

  useEffect(()=>{
    if(value == 0)
        setRelevantData([1, "first"])
    else if( value == 1)
        setRelevantData([2, "second"])
    else if( value == 2)
        setRelevantData([3, "third"])
    else
        setRelevantData([4, "forth"])
  },[value])
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };


  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        width: 600,
        position: 'relative',
        minHeight: 200,
      }}
    >
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="action tabs example"
        >
            <Tab sx={{  fontWeight : "bold", 
                        textTransform : "none", 
                        fontSize : 16, 
                        color : "black",
                        '&:hover' :{
                            background : "#E0E0E0"
                        } }} {...a11yProps(0)} label="Tweets"  />
            <Tab sx={{  fontWeight : "bold", 
                        textTransform : "none", 
                        fontSize : 16, 
                        color : "black",
                        '&:hover' :{
                            background : "#E0E0E0"
                        } }} {...a11yProps(1)} label="Tweets & replies"  />
            <Tab sx={{  fontWeight : "bold", 
                        textTransform : "none", 
                        fontSize : 16, 
                        color : "black",
                        '&:hover' :{
                            background : "#E0E0E0"
                        } }} {...a11yProps(2)} label="Media"  />
            <Tab sx={{  fontWeight : "bold", 
                        textTransform : "none", 
                        fontSize : 16, 
                        color : "black",
                        '&:hover' :{
                            background : "#E0E0E0"
                        } }} {...a11yProps(3)} label="Likes"  />
        </Tabs>
      </AppBar>
      <Box
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
            {relevantData.map((el,index)=><h1 key={index}>{el}</h1>)}
          Item One
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          {relevantData.map((el,index)=><h1 key={index}>{el}</h1>)}
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
        {relevantData.map((el,index)=><h1 key={index}>{el}</h1>)}
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
        {relevantData.map((el,index)=><h1 key={index}>{el}</h1>)}
          Item 4th
        </TabPanel>
      </Box>
    </Box>
  );
}