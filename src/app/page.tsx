
"use client"
import { Authenticated, Unauthenticated, AuthLoading } from "convex/react";
import { NewToDoForm } from "./_components/new-todo-form";
import { ToDoList } from "./_components/to-do-list";
import { UserButton } from "@clerk/nextjs";
import { GenerateTodosForm } from "./_components/generate-todos-form";
// import { DonationButton } from "./_components/donation-button";
import Hero from "./_components/Hero";
import Loading from "./_components/Loading";
import Features from "./_components/Features";
import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";

export default function Home() {
  return (
    <Box sx={{ py: 8, background: 'linear-gradient(to right, #f5f7fa, #c3cfe2)' }}>
      <Authenticated>
        <AppBar position="static" sx={{ backgroundColor: 'primary.main', mb: 4 }}>
          <Toolbar>

            <Typography variant="h1" component="h1" sx={{ flexGrow: 1 }}>
              Aspir
              <span style={{ fontWeight: 'bold', color: '#1976d2' }}>ai</span>
            </Typography>

            <UserButton />

          </Toolbar>
        </AppBar>

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
        <Hero />
        <Features />
      </Unauthenticated>

      <AuthLoading>
        <Loading />
      </AuthLoading>
    </Box>
  )
}

