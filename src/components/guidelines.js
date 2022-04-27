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
        <div className="bg-white overflow-hidden">
            <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen" />
                    <p className="text-2xl">Guidelines</p>
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
                </div>
            </div>
    );
  }