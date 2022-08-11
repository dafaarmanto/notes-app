import React from 'react'
import NoteItem from './NoteItem';

export default function NoteListArchived({notes, onDelete, onArchived }) {
  const list = notes.filter(note => note.archived === true);
  
  if (list.length) {
    return (
      <div className='notes-list'>
        {
          notes
            .filter(note => note.archived === true)
            .map(note => (
              <NoteItem key={note.id} onDelete={onDelete} onArchived={onArchived} {...note} />
            ))
        }
      </div>
    )
  } else {
    return <p className='notes-list__empty-message'>Daftar Kosong</p>
  }
}
