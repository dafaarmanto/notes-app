import React from 'react'
import NoteItem from './NoteItem'

export default function NotesList({ notes, onDelete, onArchived }) {
  return (
    <div className='notes-list'>
      {
        notes
          .filter(note => note.archived === false)
          .map(note => (
            <NoteItem key={note.id} id={note.id} onDelete={onDelete} onArchived={onArchived} {...note} />
          ))
      }
    </div>
  )
}
