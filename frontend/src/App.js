import React, { useState } from 'react';
import { Box, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import OmdbComponent from './components/omdb/omdb';

const App = () => {
  const [value, setValue] = useState('omdb');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange}>
            <Tab label="OMDB Movies" value="omdb" />
            <Tab label="Backend Movies" value="backend" />
          </TabList>
        </Box>
        <TabPanel value="omdb">
          <OmdbComponent />
        </TabPanel>
        <TabPanel value="backend">Item Two</TabPanel>
      </TabContext>
    </Box>
  );
};

export default App;
