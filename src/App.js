import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Addnote from "./Components/Addnote";
import { useState } from "react";
import { nanoid } from "nanoid";
import Notes from "./Components/Notes";
import { useHistory } from "react-router-dom";

const Div = styled.div`
  background: #fff;
  margin: 100px 100px 100px 100px;
  padding: 20px;
  position: relative;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 2.5rem 5rem 0 rgba(0, 0, 0, 0.1);
`;


function App() {
  const history = useHistory();
  const [notes, setNotes] = useState([
    {
      heading: 'Shopping list',
      content: 'Milk, Sugar, Water, Bread, Tea, Sardine, Yorgourt'
    },
    {
      heading: 'Product Designs',
      content: 'Send email to John about the product designs we discussed'
    },
    {
      heading: 'Internship Deadline',
      content: 'The internship programme deadline for submission of the final project is 17th August, 2022'
    },
    {
      heading: 'Meeting notes',
      content: 'Follow up with Mariam, Share slides with the team/stakeholder, Draft sales target and Set up lunch with customers'
    }
  ]);
  const [addNotedata, setaddNotedata] = useState({
    heading:'', 
    content:''
  });
  

  const handleaddNoteChange = (e) => {
    e.preventDefault();

    const inptName = e.target.getAttribute('name');
    const inptValue = e.target.value;

    const newNotedata = { ...addNotedata };
    newNotedata[inptName] = inptValue;
    setaddNotedata(newNotedata);
  };

  const handleaddNoteSubmit = (e) => {
    e.preventDefault();

    const newNote = {
        id: nanoid(),
        heading: addNotedata.heading,
        content: addNotedata.content
    }

    const newNotes = [...notes, newNote];
    setNotes(newNotes);
    
    e.target.reset();
    history.push('/');
    
  }

  const deleteNote = (id) => {
    const remainingNotes = notes.filter( note => id !== note.id );
    setNotes( remainingNotes );
  }

  return (
    <Div>
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Notes notes={notes} deleteNote={deleteNote} />
            </Route>
            <Route path="/addnote">
              <Addnote handleaddNoteChange={handleaddNoteChange} handleaddNoteSubmit={handleaddNoteSubmit} />
            </Route>
          </Switch>
        </div>
      </Router>
    </Div>
  );
}

export default App;
