import styled from "styled-components";

const Form = styled.form`
    max-width: 400px;
    margin: 0 auto;
    text-align: center;
`;

const Input = styled.input`
    width: 100%;
    display: block;
    padding: 6px 10px;
    margin: 10px 0;
    border: 1px solid #ddd;
    box-sizing: border-box;
    font: 1em sans-serif;
`;

const Textarea = styled.textarea`
    width: 100%;
    display: block;
    padding: 6px 10px;
    margin: 10px 0;
    border: 1px solid #ddd;
    box-sizing: border-box;
    height: 5em;
    font: 1em sans-serif;
`;

const Button = styled.button`
    background: black;
    color: #fff;
    border: 0;
    padding: 8px;
    border-radius: 8px;
    cursor: pointer;
    width: 100%;
`;

const Addnote = ({ handleaddNoteSubmit, handleaddNoteChange }) => {
    
    return ( 
        <Form onSubmit={handleaddNoteSubmit}>
            <h2>Create New Note</h2>
            <Input
                type="text"
                id="newnote"
                name="heading"
                placeholder="Subject"
                onChange={handleaddNoteChange}
            />
            <Textarea 
                id="content"
                name="content" 
                placeholder="Content"
                onChange={handleaddNoteChange}
            />
            <Button>
                Save
            </Button>
        </Form>
     );
}
 
export default Addnote;