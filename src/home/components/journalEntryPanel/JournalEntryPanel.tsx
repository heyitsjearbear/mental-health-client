import React, { useContext } from 'react';
import { Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import { JournalContext } from '../../context/journalContext'; // Update this path to the actual path of your JournalProvider

const JournalEntryPanel: React.FC = () => {
  const { entries } = useContext(JournalContext);
    
  return (
    <Card>
      <Card.Header as="h5">All Entries</Card.Header>
      <ListGroup variant="flush">
        {entries.map((entry) => (
          <ListGroupItem key={entry._id}>
            <div className="d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div className="fw-bold">{entry.title}</div>
                {entry.content}
              </div>
              <Button variant="outline-primary">Edit</Button>
            </div>
          </ListGroupItem>
        ))}
      </ListGroup>
    </Card>
  );
};

export default JournalEntryPanel;