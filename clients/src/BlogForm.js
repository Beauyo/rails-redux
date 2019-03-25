import React from 'react'
import { connect } from 'react-redux'

class BlogForm extends React.Component {
    state = { name: '', }

    handleChange = (e) => {
        this.setState({ name: e.target.value, })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { id, dispatch } = this.props
        const { name } = this.state
        const blog = { name, id, } 
        dispatch({ type: 'ADD_BLOG', blog, })
        dispatch({ type: 'INC_ID' })
       
        this.setState({ name: '' })
    }

    // deleteBlog = (e) => {
    //     const { id, dispatch } = this.props
    //     const { name } = this.state
    //     const blog = { name, id} 
    //     dispatch({ type: 'DELETE_BLOG', blog, })
    //     this.setState ({ name: '' }) 
    //   }

   
    
    render() {

        const { name } = this.state
        
    return (
        <div>
            <h3>Add Blog</h3>
                <form onSubmit={this.handleSubmit}>
                    <input value={name} onChange={this.handleChange} />
                </form>
            
            
        </div>
    )
}

}

const mapStateToProps = (state) => {
    return { id: state.nextId }
}
export default connect(mapStateToProps)(BlogForm) 

