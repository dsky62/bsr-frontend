import React from 'react';
import { Card, Modal, Button } from 'react-bootstrap';

const AdminDashboardEnhanced = () => {
    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <h1>Enhanced Admin Dashboard</h1>
            <div className="stats-cards">
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Total Users</Card.Title>
                        <Card.Text>
                            1,200
                        </Card.Text>
                        <Button variant="primary" onClick={handleShow}>View More</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Total Revenue</Card.Title>
                        <Card.Text>
                            $35,000
                        </Card.Text>
                        <Button variant="primary" onClick={handleShow}>View More</Button>
                    </Card.Body>
                </Card>
                
                {/* Additional stats cards can be added below */}
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Additional Stats</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* Detailed statistics and information can go here */}
                    More information about users and revenue statistics.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default AdminDashboardEnhanced;