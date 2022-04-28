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
        className="max-w-full mx-auto pt-18 px-4 sm:pt-10 sm:px-20 lg:max-w-7xl lg:px-8">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                Cryptococcal Meningitis Guidelines
            </h2>
            <p className="mt-0 text-xl text-gray-500">
                Diagnosis, Management, and Monitoring
            </p>
            <p className="mb-8 text-base text-gray-500">
                (Last <a className="underline text-blue-600 hover:text-blue-800" href="https://www.who.int/publications/i/item/9789241550277">WHO Cryptococcus Guidelines</a> Update: 1 March 2018)
            </p>
                <Box
                    boxShadow={4}
                    p={0}
                    sx={{ marginBottom: 4,  bgcolor: 'background.paper', height: "100%" }}>
                    <Tabs
                        variant="scrollable"
                        scrollButtons="auto"
                        allowScrollButtonsMobile
                        value={value}
                        onChange={handleChange}
                        aria-label="scrollable auto tabs">
                        <Tab label="Screening and Prevention" {...a11yProps(0)} />
                        <Tab label="Diagnosis" {...a11yProps(1)} />
                        <Tab label="Treatment" {...a11yProps(2)} />
                        <Tab label="Monitoring" {...a11yProps(3)} />
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
                </Box>
    </section>
    );
  }