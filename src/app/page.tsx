
"use client"
import { Authenticated, Unauthenticated, AuthLoading } from "convex/react";
import { NewToDoForm } from "./_components/new-todo-form";
import { ToDoList } from "./_components/to-do-list";
import { GenerateTodosForm } from "./_components/generate-todos-form";
// import { DonationButton } from "./_components/donation-button";
import Hero from "./_components/Hero";
import Loading from "./_components/Loading";
import Features from "./_components/Features";
import { Box, Container, Typography } from "@mui/material";
import NavBar from "./_components/Navbar";

export default function Home() {
  return (
    <Box sx={{ background: 'linear-gradient(to right, #f5f7fa, #c3cfe2)' }}>
      <Authenticated>

        <NavBar />

        <Container maxWidth="md" sx={{ py: 4 }}>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h4" component="h2" gutterBottom fontWeight="bold">
              Task List
            </Typography>
            <ToDoList />
          </Box>

          <Box sx={{ mb: 4 }}>
            <GenerateTodosForm />
          </Box>

          <Box>
            <NewToDoForm />
          </Box>

        </Container>
      </Authenticated>

      <Unauthenticated>
        <Box sx={{ py: 8 }}>

          <Hero />
          <Features />

          <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
            <Typography variant="body1">&copy; {new Date().getFullYear()} Aspirai. All rights reserved.</Typography>
          </Box>

        </Box>
      </Unauthenticated>

      <AuthLoading>
        <Loading />
      </AuthLoading>
    </Box>
  )
}

