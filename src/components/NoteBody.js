import React from 'react'
import MakeNote from './MakeNote'
import { getInitialData } from '../utils/index'
import NoteListArchived from './NoteListArchived';
import NoteListActive from './NoteListActive';

export default class NoteBody extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData()
    }

    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
  }

  onAddNoteHandler({ title, body, }) {
    this.setState(prevState => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            createdAt: new Date().toLocaleDateString("id-ID"),
            body,
            archived: false
          }
        ]
      }
    })
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter(note => note.id !== id);
    this.setState({ notes });
  }

  onArchiveHandler(id) {
    const archiveList = this.state.notes.map(note => {
      if (note.id === id) {
        if (note.archived) {
          note.archived = false;
        } else {
          note.archived = true
        }
      }
      return note
    })
    this.setState({ archiveList })
  }

  render() {
    return (
      <div className="note-app__body">
        <MakeNote addNote={this.onAddNoteHandler} />
        <h2>Catatan Aktif</h2>
        <NoteListActive notes={this.state.notes} onArchived={this.onArchiveHandler} onDelete={this.onDeleteHandler} />
        <h2>Arsip</h2>
        <NoteListArchived notes={this.state.notes} onArchived={this.onArchiveHandler} onDelete={this.onDeleteHandler} />
      </div>
    )
  }
}