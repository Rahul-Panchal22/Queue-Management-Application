import { useState } from "react";
import "./App.css";
import QueueForm from "./components/QueueForm";
import QueueDisplay from "./components/QueueDisplay";

const App = () => {
  const [queue, setQueue] = useState([]);

  const addToQueue = (customer) => {
    setQueue((prevQueue) => [
      ...prevQueue,
      {
        ...customer,
        id: Date.now(),
        status: "waiting",
      },
    ]);
  };

  const updateStatus = (id, newStatus) => {
    // Update the status of a customer in the queue
    setQueue(
      queue.map((customer) =>
        customer.id === id
          ? {
              ...customer,
              status: newStatus,
            }
          : customer,
      ),
    );
  };

  const removeFromQueue = (id) => {
    // Remove customer from the queue
    setQueue(queue.filter((customer) => customer.id !== id));
  };

  return (
    <div>
      <header>
        <h1>Queue management Application</h1>
        <p>Manage your customer queues efficiently</p>
      </header>
      <main className="app">
        <QueueForm onAdd={addToQueue} />
        <QueueDisplay
          queue={queue}
          onUpdateStatus={updateStatus}
          onRemove={removeFromQueue}
        />
      </main>
    </div>
  );
};

export default App;
