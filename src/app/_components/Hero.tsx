import { SignInButton, SignUpButton } from '@clerk/nextjs'
import { Box, Button, Container, Stack, Typography } from '@mui/material'
import React from 'react'

export default function Hero() {
  return (
    <Box position="relative" sx={{ top: 0, left: 0 }}>
      <Container maxWidth="lg">
        <Stack direction="column" alignItems="center" spacing={5}>
          <Box>
          <Typography variant="h1" component="h1">
            Aspir
            <span style={{ fontWeight: 'bold', color: '#1976d2' }}>ai</span>
          </Typography>
          </Box>

          <Typography variant="h3">
            Turn your dreams into reality
          </Typography>

          <Typography variant="h6">
            Whether you&apos;re tackling a big project or focusing on personal growth, 
            Aspirai provides personalized tasks and progress tracking to keep you moving forward. 
            Stay motivated, organized, and achieve more with less stress using Aspirai 
            — your AI-powered goal achievement companion.
          </Typography>

          <Typography variant="h5">
            Start achieving your dreams today!
          </Typography>

          <Stack direction="row" spacing={2}>
            <SignUpButton>
              <Button variant="contained">
                Get started
              </Button>
            </SignUpButton>

            <SignInButton>
              <Button variant="outlined">
                Sign in
              </Button>
            </SignInButton>
          </Stack>

        </Stack>
      </Container>
    </Box>
  )
}
