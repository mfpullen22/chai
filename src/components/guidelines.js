import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Screening from "./GuidelineText/screening";
import Diagnosis from "./GuidelineText/diagnosis";
import Treatment from "./GuidelineText/treatment";
import Monitoring from "./GuidelineText/monitoring";
import ARTInitiation from "./GuidelineText/artInitiation";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }
  
  export default function VerticalTabs() {
    const [value, setValue] = React.useState(0);
    
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
        <section
        aria-labelledby="collection-heading"
        className="max-w-xl mx-auto pt-18 px-4 sm:pt-10 sm:px-20 lg:max-w-7xl lg:px-8">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                Cryptococcal Meningitis Guidelines
            </h2>
            <p className="mt-0 mb-8 text-xl text-gray-500">
                Diagnosis, Management, and Monitoring
            </p>
                <Box
                    sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 400 }}>
                    <Tabs
                        orientation="vertical"
                        variant="scrollable"
                        value={value}
                        onChange={handleChange}
                        aria-label="Vertical tabs"
                        textColor="primary"
                        indicatorColor="primary"
                        sx={{ borderRight: 1, borderColor: 'divider'}}>
                        <Tab label="Screening and Prevention" {...a11yProps(0)} />
                        <Tab label="Diagnosis" {...a11yProps(1)} />
                        <Tab label="Treatment" {...a11yProps(2)} />
                        <Tab label="Monitoring" {...a11yProps(3)} />
                        <Tab label="ART Initiation" {...a11yProps(4)} />
                    </Tabs>
                    <TabPanel value={value} index={0}>
                        <Screening />
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <Diagnosis />
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <Treatment />
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        <Monitoring />
                    </TabPanel>
                    <TabPanel value={value} index={4}>
                        <ARTInitiation />
                    </TabPanel>
                </Box>
    </section>
    );
  }