"use server"
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient



export default async function addTodo(formData:any){
    const title = formData.get('title')

    try{
        await prisma.todo.create({
            data:{
                title
            }
        })
    }
    catch(err){
        console.log(err)
    }
}

