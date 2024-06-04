import { connect } from "@/libs/mongo";
import contador from "@/models/contador";
import { NextResponse } from "next/server";


// export async function POST(request: Request){
//     try {
//         await connect();
//         const cont = await contador.findOne();
//         if (!cont) {
//             await contador.create({contador: 1});
//             return new Response("Contador creado", {status: 201});
//         }
//     }
//     catch (error) {
//         console.error(error);
//     }
// }
export async function POST(request: Request) {
    try {
      console.log("Entrando al post");
      await connect();
      const { orden } = await request.json();
      let currentCount = 0;
  
      // Obtener el contador actual
      const existingCounter = await contador.findOne();
      if (existingCounter) {
        currentCount = existingCounter.contador;
      }
  
      // Incrementar el contador
      const newCount = currentCount + orden;
  
      // Actualizar o crear un nuevo contador en la base de datos
      await contador.findOneAndUpdate({}, { contador: newCount }, { upsert: true });
  
      // Devolver la respuesta con el nuevo contador
      return NextResponse.json({
        contador: newCount
      });
    } catch (error) {
      console.error("Error al incrementar el contador:", error);
      return NextResponse.error();
    }
  }
  