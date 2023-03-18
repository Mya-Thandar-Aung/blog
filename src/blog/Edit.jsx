import React from 'react'

const Edit = (props) => {
  return (
  
    <div className="container">
                  <div className="col-6 offset-3"> 
                        <h1>Edit Post</h1>
                        <div className="mb-3">
                            <label className="form-label">Title</label>
                             <input className='form-control' type="text" placeholder="title"
                              ref={props.getTitle}
                              defaultValue={props.title}
                              onChange={props.savePostTitleToState}
                              />
                        </div>
                        <div className="mb-3">
                              <label  className="form-label">Content</label>
                              <textarea className='form-control' placeholder="contents"
                                ref={props.getContent}
                                defaultValue={props.content}
                                onChange={props.savePostContentToState}

                               ></textarea>
                        </div>
          
                    <button className="btn btn-primary" onClick={props.updatePost}><i class="fa-solid fa-floppy-disk"></i> Save</button>
                  </div>
      </div>
  

    )
}

export default Edit