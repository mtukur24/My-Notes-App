import { useState } from "react";
import styled from "styled-components";

const Span = styled.span`
    font: 20px sans-serif;
    font-weight: bold;
`;

const Div = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Button = styled.button`
    background-color: red;
    border: none;
    color: white;
    padding-top: 5px;
    padding-bottom: 10px;
    text-align: center;
    text-decoration: none;
    font-size: 15px;
    margin-top: 20px;
    cursor: pointer;
    height: 30px;
`;

const Section = styled.section`
    margin-left: 30px;
    margin-right: 30px;
`;

const Input = styled.input`
    display: block;
    padding: 6px 10px;
    margin: 20px 0;
    border: 1px solid #ddd;
    box-sizing: border-box;
    font: 1em sans-serif;
`;


const Notes = ({ notes, deleteNote }) => {
    const [searchnotes, setsearchNotes] = useState('');

    return ( 
        <Section>
            <Div>
                <h1>My Notes</h1>
                <Input 
                    type='text' 
                    placeholder="Search..." 
                    onChange={(e) => {setsearchNotes(e.target.value)}} 
                />
            </Div>
            <div>
                {notes.filter((note) => {
                    if (searchnotes === "") {
                        return note
                    } else if (note.heading.toLowerCase().includes(searchnotes.toLowerCase()) || note.content.toLowerCase().includes(searchnotes.toLowerCase()) ) {
                        return note
                    }
                }).map((note) => {
                return (
                <Div key={note.id} >
                    <p> <Span>{ note.heading }:</Span> {note.content} </p>
                    <Button 
                        type='button' 
                        onClick={()=> deleteNote(note.id)}
                    >Delete</Button>
                </Div>
                )}
                )}
            </div>
        </Section>

     );
}
 
export default Notes;