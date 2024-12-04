import 'dotenv/config'
import express from 'express'
import path from 'path';
import { fileURLToPath } from 'url';
import { clerkClient, requireAuth } from '@clerk/express'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()

app.use(express.static(path.join(__dirname, '../frontend/dist')));

app.get('/protected', requireAuth({ signInUrl: '/sign-in' }), async (req, res) => {
  const { userId } = req.auth
  const user = await clerkClient.users.getUser(userId)
  return res.json({ user })
})

app.get('/sign-in', (req, res) => {
  res.render('sign-in')
})



app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist', 'index.html'));
});  

app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:3000`)
})