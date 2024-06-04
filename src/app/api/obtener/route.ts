
import {connect} from '@/libs/mongo';

import contador from '@/models/contador';




export async function GET(request: Request){
    try {
        await connect();
        const cont = await contador.findOne();
        if (!cont) {
            return new Response("Contador no encontrado", {status: 404});
        }
        return new Response(JSON.stringify({count: cont.contador}), {status: 200});
    }
    catch (error) {
        console.error(error);
    }
}