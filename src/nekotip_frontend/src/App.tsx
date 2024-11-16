/* eslint-disable simple-import-sort/imports */
import { useState } from 'react'

import { Button } from '@/components/ui/button'

import { Loader } from 'lucide-react'

import { nekotip_backend } from '../../declarations/nekotip_backend'

function App() {
  const [text, setText] = useState('')

  const handleGreet = async () => {
    const result = await nekotip_backend.greet('NekoTip')
    setText(result)
  }

  return (
    <main className="text-3xl" onClick={handleGreet}>
      <Button type="button" variant="default">
        <Loader className="animate-spin duration-300" /> &ensp;Click me!
      </Button>

      <span className="ms-4 text-red-400">{text}</span>
    </main>
  )
}

export default App
