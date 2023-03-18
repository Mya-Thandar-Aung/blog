import React from 'react'

export const Create = (props) => {
  return (
    <form>
        <div className="container">
          <div className="col-6 offset-3"> 
             <h1>Create New Post</h1>
              <div className="mb-3"  >
                  <label className="form-label">Title</label>
                  <input className='form-control' type="text" placeholder="title"
                  onChange={props.savePostTitleToState} 
                  ref={props.getTitle}
                  />
              </div>
               {
                        props.validateErr?.title && 
                        <div className="form-text text-danger">
                        {     props.validateErr.title       }
                        </div>
                      }
              <div className="mb-3">
                  <label  className="form-label">Content</label>
                    <textarea placeholder="content" className="form-control"
                    onChange={props.savePostContentToState}
                    ref={props.getContent}
                    ></textarea>
                    {
                      props.validateErr?.content && 
                      <div className="form-text text-danger">
                      {     props.validateErr.content       }
                      </div>
                     }
                    <br />
                   <br />
              </div>
            
            <button className="btn btn-primary me-2" onClick={props.savePost}>
                <i class="fa-solid fa-floppy-disk"></i>        Save
            </button>
            <button className="btn btn-secondary" onClick={props.backToList}>
                <i className="fa-solid fa-backward"></i> Back
            </button>

            </div>
      </div>
        </form>

  )
}
