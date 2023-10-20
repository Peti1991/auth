import express from "express"
import type { Request, Response } from "express"
import cors from "cors"
import { z } from "zod"


const server = express()

server.use(express.static("database"))
server.use(express.json())
server.use(cors())

const CoordinateSchema = z.object({
  x: z.number(),
  y: z.number()
})

type Coordinate = z.infer<typeof CoordinateSchema>

const publicPartyCoordinate: Coordinate = {x: 1, y:2}
const secretPartyCoordinate: Coordinate = {x: 123, y:13}


server.get("/api/public", async (request: Request, response: Response) => {

  return response.send(publicPartyCoordinate)
})

server.get('/api/public', async (req: Request, res: Response) => {
  
  return res.send(secretPartyCoordinate)
})



server.listen(3333) 