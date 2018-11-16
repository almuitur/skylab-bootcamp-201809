import React, { Component } from 'react'
import logic from '../logic'
import InputForm from './InputForm'
import Post from './Post'

class Postits extends Component {
    state = { postits: [] }

    componentDidMount() {
        logic.listPostits()
            .then(postits => { this.setState({ postits }) })

        // TODO error handling!
    }

    handleSubmit = text => {
        try {
            logic.addPostit(text)
                .then(() => logic.listPostits())
                .then(postits => this.setState({ postits }))
        } catch ({ message }) {
            alert(message) // HORROR! FORBIDDEN! ACHTUNG!
        }
    }

    // TODO error handling!

    handleRemovePostit = id => {
        logic.removePostit(id)
            .then(() => logic.listPostits())
            .then(postits => this.setState({ postits }))
        // TODO error handling!
    }
    


     handleModifyPostit = (id, text, status) => {
        logic.modifyPostit(id, text, status)
            .then(() => logic.listPostits())
            .then(postits => this.setState({ postits }))
        // TODO error handling!
    }
    

    dragStart = (event, postitId, text) => {
        event.dataTransfer.setData('id', postitId)
        event.dataTransfer.setData('text', text)
    }

    dragOver = event => {
        event.preventDefault()
    }

    onDrop = (event, status) => {
        
        const idPostit = event.dataTransfer.getData('id')
        const textPostit = event.dataTransfer.getData('text')

        this.handleModifyPostit(idPostit, textPostit, status)
    }

    render() {

        let postits = { todo: [], doing: [], review: [], done: [] }

        return <div className="postits-page">
   
            <h1 className="postits-page-title">Kanban App</h1>
            <InputForm onSubmit={this.handleSubmit} />

            <div className="columns-container">
                <div className="column" onDragOver={event => this.dragOver(event)} onDrop={event => this.onDrop(event, 'todo')}>
                    <h4 className="column-title">TODO</h4>
                    {postits.todo}
                    { this.state.postits.filter(postit => postit.status === 'todo').map(postit => <Post key={postit.id} id={postit.id} text={postit.text} status={postit.status} draggable onDragStart={event => this.dragStart(event, postit.id, postit.text) } onDeletePost={this.handleRemovePostit} onUpdatePost={this.handleModifyPostit} />)}
                </div>
                <div className="column" onDragOver={event => this.dragOver(event)} onDrop={event => this.onDrop(event, 'doing')}>
                    <h4 className="column-title">DOING</h4>
                    {postits.doing}
                    { this.state.postits.filter(postit => postit.status === 'doing').map(postit => <Post key={postit.id} id={postit.id} text={postit.text} status={postit.status} draggable onDragStart={event => this.dragStart(event, postit.id, postit.text) } onDeletePost={this.handleRemovePostit} onUpdatePost={this.handleModifyPostit} />)}
                </div>
                <div className="column" onDragOver={event => this.dragOver(event)} onDrop={event => this.onDrop(event, 'review')}>
                    <h4 className="column-title">REVIEW</h4>
                    {postits.review}
                    { this.state.postits.filter(postit => postit.status === 'review').map(postit => <Post key={postit.id} id={postit.id} text={postit.text} status={postit.status} draggable onDragStart={event => this.dragStart(event, postit.id, postit.text) } onDeletePost={this.handleRemovePostit} onUpdatePost={this.handleModifyPostit} />)}
                </div>
                <div className="column" onDragOver={event => this.dragOver(event)} onDrop={event => this.onDrop(event, 'done')}>
                    <h4 className="column-title">DONE</h4>
                    {postits.done}
                    { this.state.postits.filter(postit => postit.status === 'done').map(postit => <Post key={postit.id} id={postit.id} text={postit.text} status={postit.status} draggable onDragStart={event => this.dragStart(event, postit.id, postit.text) } onDeletePost={this.handleRemovePostit} onUpdatePost={this.handleModifyPostit} />)}
                </div>
            </div>
        </div>
    }
}

export default Postits
