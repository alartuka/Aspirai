
"use client"
import { Authenticated, Unauthenticated, AuthLoading } from "convex/react";
import { NewToDoForm } from "./_components/new-todo-form";
import { ToDoList } from "./_components/to-do-list";
import { UserButton } from "@clerk/nextjs";
import { GenerateTodosForm } from "./_components/generate-todos-form";
// import { DonationButton } from "./_components/donation-button";
import Hero from "./_components/Hero";
import Loading from "./_components/Loading";

export default function Home() {
  return (
    <div className="max-w-screen-md mx-auto p-4 space-y-8">
      <Authenticated>
      <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-blue-600">GoalGetter</h1>
          <UserButton />
      </div>  
        <div className="space-y-8">
          <h2 className="text-xl font-bold">To-Do List</h2>
          <ToDoList />
          <GenerateTodosForm />
          <NewToDoForm />
          {/* <DonationButton /> */}
        </div>
      </Authenticated>
      
      <Unauthenticated>
        <Hero />
        {/* <div className="text-center space-y-6"> */}
          {/* <ul className="text-left list-disc pl-6 space-y-2">
            <li>Set any goal, big or small</li>
            <li>Get instant, AI-generated tasks to guide you</li>
            <li>Add your own custom tasks for a personalized plan</li>
            <li>Track your progress and stay motivated</li>
            <li>Achieve more, faster, and with less stress</li>
          </ul> */}
          
        {/* </div> */}
      </Unauthenticated>
      
      <AuthLoading>
        <Loading />
      </AuthLoading>
    </div>
  )
}

