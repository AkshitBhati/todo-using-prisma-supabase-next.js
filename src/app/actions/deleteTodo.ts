"use server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default async function deleteTodo(formData : any){
    const id = parseInt(formData.get("id"))

    try{
        await prisma.todo.delete({
            where:{ id }
        }) 
    }
    catch(err){
        console.log(err)
    }
} 