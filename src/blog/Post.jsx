import React from 'react'

export const Post = (props) => {
    const {id,title,content,editPost,deletePost} = props.eachPost //object destructure
  return (

    <>
    <tr>
        <td>{id}</td>
        <td>{title}</td>
        <td>{content}</td>
       <td> 
                <button className="btn btn-warning me-2" onClick={() => props.editPost(id)}> <i className="fa-solid fa-pen-to-square"></i></button>
                <button className="btn btn-danger" onClick={() => props.deletePost(id)}> <i className="fa-solid fa-trash"></i></button>
       </td>
    </tr>
    </>
)
}
export default Post
