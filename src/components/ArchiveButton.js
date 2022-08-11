import React from 'react'

export default function ArchiveButton({ id, archived, onArchived}) {
  return <button className='note-item__archive-button' onClick={() => onArchived(id, archived)}>{archived ? 'Pindahkan' : 'Arsipkan'}</button>
}
