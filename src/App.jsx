import { NextUIProvider, Button, Card } from '@nextui-org/react'

function App() {
  return (
    <NextUIProvider>
      <div className="p-8">
        <h1 className="text-3xl font-bold">NextUI Test</h1>
        <div className="mt-4">
          <Button color="primary">Test Button</Button>
        </div>
      </div>
    </NextUIProvider>
  )
}

export default App