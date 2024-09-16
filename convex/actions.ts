import {action} from "./_generated/server";
import {v} from "convex/values";
import OpenAI from "openai";
import{internal} from "./_generated/api";
import {requireUser} from "./helper";

const openai = new OpenAI({
     baseURL: "https://openrouter.ai/api/v1",
     apiKey : process.env.OPENROUTER_API_KEY
    })
export const generateTodos = action({
    args: {
        prompt: v.string(),
    },
    handler: async(ctx,args)=>{
        const user = await requireUser(ctx);
        const reponse = await openai.chat.completions.create({
            model: "meta-llama/llama-3.1-8b-instruct:free",
            // model: "openai/gpt-3.5-turbo",
            messages: [
                {
                    role: "system",
                    content: "You are a highly skilled task manager and productivity coach with extensive experience in creating efficient to-do lists that help individuals achieve their goals. Your expertise lies in analyzing prompts and generating actionable tasks that drive productivity and effectiveness. Your task is to generate a list of to-dos based on my provided prompt. Please follow the format specified below and ensure each task is clear and actionable. Keep in mind that the tasks should be manageable and relevant to the goal I provided. Each task needs a descriptive title and a brief explanation of its purpose that will help me understand its significance. Please return a JSON object in the following format: { todos: [{ title: string, description: string }]} "
                },
                {
                    role: "user",
                    content:`Prompt: ${args.prompt}`
                }
            ],
            response_format: {type: "json_object"}
        });
        const content = JSON.parse(reponse.choices[0].message.content!) as {
            todos: {title: string, description: string}[]};
        await ctx.runMutation(internal.functions.createManyTodos,{
            todos: content.todos,
            userID: user.tokenIdentifier
        });
        return content.todos;
    }
    
})