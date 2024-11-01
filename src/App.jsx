import { NextUIProvider, Button, Card } from '@nextui-org/react';

function App() {
  return (
    <NextUIProvider>
      <div className="p-8">
        <h1 className="text-4xl font-bold mb-8">NextUI Components</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">Buttons</h2>
            <div className="flex gap-4">
              <Button color="primary">Primary Button</Button>
              <Button color="secondary">Secondary Button</Button>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Cards</h2>
            <Card className="p-4">
              <h3 className="text-lg font-bold">Sample Card</h3>
              <p>This is a basic card component from NextUI</p>
            </Card>
          </section>
        </div>
      </div>
    </NextUIProvider>
  );
}

export default App;