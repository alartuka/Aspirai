import { Box, CircularProgress, Typography } from '@mui/material'
import React from 'react'

export default function Loading() {
  return (
    <Box
      sx={{
        position: 'fixed', 
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f5f5f5', 
        zIndex: 1300, // Higher z-index to appear above other content
      }}
    >
      <CircularProgress size={60} thickness={5} color="primary" />
      <Typography variant="h6" sx={{ mt: 2 }}>
        Loading...
      </Typography>
    </Box>
  )
}
