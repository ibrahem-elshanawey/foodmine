import { connect, ConnectOptions } from "mongoose"

export const dbContent=()=>{
    connect(process.env.MONGO_URI!,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    } as ConnectOptions).then(
        ()=>console.log("connect successfully"),
        (error) => console.log(error)
    )
}