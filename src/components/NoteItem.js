import React from 'react'
import NoteItemBody from './NoteItemBody'
import DeleteButton from './DeleteButton'
import ArchiveButton from './ArchiveButton'

export default function NoteItem({ id, title, createdAt, body, onDelete, onArchived, archived }) {
  return (
    <div className='note-item'>
      <NoteItemBody title={title} createdAt={createdAt} body={body} />
      <div className="note-item__action">
        <DeleteButton id={id} onDelete={onDelete} />
        <ArchiveButton id={id} archived={archived} onArchived={onArchived} />
      </div>
    </div>
  )
}
