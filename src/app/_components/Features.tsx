import React from 'react';
import { Box, Grid, Typography, Container, Card, CardContent } from '@mui/material';
import {CheckCircle} from '@mui/icons-material'; 

const features = [
  {
    icon: <CheckCircle color="primary" sx={{ fontSize: 40 }} />,
    title: 'AI-Generated Tasks',
    description: 'Get instant, AI-powered tasks tailored to help you achieve your goals more effectively.',
  },
  {
    icon: <CheckCircle color="primary" sx={{ fontSize: 40 }} />,
    title: 'Customizable Plans',
    description: 'Add your own custom tasks to create a plan that fits your unique needs and lifestyle.',
  },
  {
    icon: <CheckCircle color="primary" sx={{ fontSize: 40 }} />,
    title: 'Progress Tracking',
    description: 'Stay on top of your goals with progress tracking to keep you motivated and focused.',
  },
  {
    icon: <CheckCircle color="primary" sx={{ fontSize: 40 }} />,
    title: 'Achieve More with Less Stress',
    description: 'Achieve more, faster, and with less stress using Aspirai’s AI-driven guidance.',
  },
];

export default function Features() {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
          Features
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" paragraph>
          Explore the powerful features that make Aspirai your ultimate goal-achievement companion.
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  p: 3,
                  borderRadius: 4,
                  boxShadow: 4,
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: 8,
                  },
                }}
              >
                {/* <CardActionArea> */}
                  <CardContent sx={{ textAlign: 'center' }}>
                    {feature.icon}
                    <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 2, fontWeight: '600' }}>
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {feature.description}
                    </Typography>
                  </CardContent>
                {/* </CardActionArea> */}
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

