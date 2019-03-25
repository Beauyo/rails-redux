import React from 'react'
import { connect } from 'react-redux'


const BlogList = ({ blogs, dispatch }) => (


    <ul>
        { blogs.map ( (t,i) => {
            return (
                <li key={i}>
                    {t.name}
                    <button 
             onClick = {() => dispatch({type: 'DELETE_BLOG', blogs })}>Delete
             </button>
                </li>
            )
        })}
    </ul>
)

const mapStateToProps = (state) => {
    return { blogs: state.blogs }
}

export default connect(mapStateToProps)(BlogList)