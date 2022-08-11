import React from 'react'
import NoteItem from './NoteItem'

export default function NoteListActive({ notes, onArchived, onDelete }) {
  const list = notes.filter(note => note.archived === false)
  
  if (list.length) {
    return (
      <div className='notes-list'>
        {
          notes
            .filter(note => note.archived === false)
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
