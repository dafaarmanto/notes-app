import React from 'react'

export default class MakeNote extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      maxChar: 50,
      char: 50
    }

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitChangeEventHandler = this.onSubmitChangeEventHandler.bind(this);
  }

  onTitleChangeEventHandler(e) {
    let count = e.target.value.length;
    let maxChar = this.state.maxChar
    let counter = maxChar - count;
    this.setState({ char: counter, title: e.target.value })
  }

  onBodyChangeEventHandler(e) {
    this.setState(() => {
      return {
        body: e.target.value
      }
    })
  }

  onSubmitChangeEventHandler(e) {
    e.preventDefault();
    this.props.addNote(this.state)
  }

  render() {
    return (
      <div className="note-input">
        <div className='note-input__title'>
          <h2>Buat Catatan</h2>
          <p className='note-input__title__char-limit'>Sisa Karakter: {this.state.char}</p>
        </div>
        <form onSubmit={this.onSubmitChangeEventHandler}>
          <input type="text" value={this.state.title} maxLength={this.state.maxChar} placeholder="Masukkan judul..." onChange={this.onTitleChangeEventHandler} />
          <textarea className='note-input__body' value={this.state.body} onChange={this.onBodyChangeEventHandler} placeholder='Tuliskan catatanmu disini...'></textarea>
          <button type='submit'>Buat</button>
        </form>
      </div>
    )
  }
}
