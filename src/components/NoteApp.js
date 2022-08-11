import React from 'react'
import NoteAppHeader from './NoteAppHeader'
import NoteBody from './NoteBody'

const NoteApp = () => {
  return (
    <div className="note-app">
      <NoteAppHeader />
      <NoteBody />
    </div>
  )
}

export default NoteApp;
