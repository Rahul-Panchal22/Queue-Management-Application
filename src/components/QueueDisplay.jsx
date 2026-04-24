const QueueDisplay = ({ queue, onUpdateStatus, onRemove }) => {
  const getStatusColour = (status) => {
    switch (status) {
      case "waiting":
        return "var(--warning)";
      case "serving":
        return "var(--success)";
      case "completed":
        return "var(--info)";
      default:
        return "var(--text)";
    }
  };
  return (
    <div className="queue-display">
      <h2>Current Queue</h2>
      {queue.length === 0 ? (
        <p className="empty-queue">No Customer Data</p>
      ) : (
        <div className="queue-list">
          {queue.map((customer) => (
            <div className="queue-item" key={customer.id}>
              <div className="customer-info">
                <h3>{customer?.name}</h3>
                <p>{customer?.service}</p>
                <span
                  className="status"
                  style={{
                    color: getStatusColour(customer.status),
                  }}
                >
                  {customer?.status}
                </span>
              </div>

              <div className="actions">
                {customer.status === "waiting" && (
                  <button
                    className="serve-btn"
                    onClick={() => onUpdateStatus(customer.id, "serving")}
                  >
                    Server
                  </button>
                )}

                {customer.status === "serving" && (
                  <button
                    className="complete-btn"
                    onClick={() => onUpdateStatus(customer.id, "completed")}
                  >
                    Completed
                  </button>
                )}

                <button
                  className="remove-btn"
                  onClick={() => onRemove(customer.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default QueueDisplay;
