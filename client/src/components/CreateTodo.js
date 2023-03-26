import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';
import { useState } from 'react';

// Using controlled form 
function CreateTodo() {
    const [value, setValue] = useState('');

    return (
        <Accordion defaultActiveKey="1">
            <Accordion.Item eventKey="0">
                <Accordion.Header>Search</Accordion.Header>
                <Accordion.Body>
                    <Form
                        onSubmit={(e) => {
                            e.preventDefault();
                            console.log(value);
                        }}
                    >
                        <Form.Control
                            type="text"
                            onChange={(e) => setValue(e.target.value)}
                        />
                    </Form>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default CreateTodo;
