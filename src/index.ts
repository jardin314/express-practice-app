import type {
  Application,
  Request,
  Response,
} from 'express'

import express  from 'express'

const app: Application = express()
const port = 3000

app.use(express.static('src/static'))

app.get('/', (req: Request, res: Response) => {
  const currentDate: Date = new Date(Date.now())
  res.send(`The current date is ${currentDate}`)
})


/* app.put('/', (req: Request, res: Response) => {
  res.send('You just posted!')
})

app.get('/', (req: Request, res: Response) => {
  res.send('Get got!')
})

app.delete('/', (req: Request, res: Response) => {
  res.send('Delet this')
}) */

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
