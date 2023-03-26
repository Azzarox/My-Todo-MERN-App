import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function FilterTodos({ filterHandler }) {
    return (
        <DropdownButton
            onClick={filterHandler}
            variant="dark"
            id="dropdown-basic-button"
            title="Filter by"
        >
            <Dropdown.Item>Recent</Dropdown.Item>
            <Dropdown.Item>Incomplete</Dropdown.Item>
            <Dropdown.Item>Completed</Dropdown.Item>
        </DropdownButton>
    );
}

export default FilterTodos;
