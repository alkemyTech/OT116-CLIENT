#LinearProgress

The MDC Linear Progress component is a spec-aligned linear progress indicator component adhering to the Material Design progress & activity requirements.
https://mui.com/api/linear-progress/


##STARTING
These instructions will allow you to get a copy of the project running on your local machine for development.


###PRE REQUIREMENTS
*Material-UI V 5.1.0
https://mui.com/


###INSTALL
yarn add @mui/material


###IMPORT TO YOUR COMPONENT
`import Box from "@mui/material/Box";`
`import LinearProgress from '@mui/material/LinearProgress';

// or

import { LinearProgress, Box } from '@mui/material';`

https://mui.com/components/progress/#linear


**IMPLEMENTATION**

`export default function LinearIndeterminate() {
  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgress />
    </Box>
  );
}`





