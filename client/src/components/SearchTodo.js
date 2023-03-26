import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';
import { useState } from 'react';

// Using controlled form
function SearchTodo({ titleHandler }) {
    const [value, setValue] = useState('');
    return (
        <Accordion defaultActiveKey="1">
            <Accordion.Item eventKey="0">
                <Accordion.Header>Search</Accordion.Header>
                <Accordion.Body>
                    <Form
                        onSubmit={(e) => {
                            e.preventDefault();
                            titleHandler(value); // After pressing enter it will do the on submit call
                        }}
                    >
                        <Form.Control
                            type="text"
                            placeholder="Search for Todo by title"
                            onChange={(e) => {
                                setValue(e.target.value);
                                titleHandler(value);
                                // If I add titleHandler(value) here
                                // It will call the api on each keystroke
                            }}
                        />
                    </Form>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default SearchTodo;
