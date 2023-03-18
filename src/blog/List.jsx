import React,{ useState,useRef,useEffect} from 'react'
import { Create } from './Create';

import Post from './Post';
import Edit from './Edit';
const List = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

   
    const [posts,setPosts] = useState([])

    const [isEdit, setIsEdit] = useState(false);
    const [editId, setEditId] = useState("");

    const [isCreate, setIsCreate] = useState(false);

    const [validateErr, setValidateErr] = useState({})

    const getTitle=useRef();
    const getContent=useRef();
    useEffect(()=>{
        // console.log(posts);
        console.log(validateErr)
     }, [validateErr])
    const savePostTitleToState = event => {
        setTitle(event.target.value);
        console.log(title)
    };
    const savePostContentToState = event => {
        setContent(event.target.value);
        console.log(content)
    };
    
const backToList = () => {
    setIsCreate(false)
}

    const savePost = (event) => {
        if(title && content)
            {   
                
                const newPost ={
                id: Date.now(),
                title, // title:title,
                content,// content:content
                     }
                     console.log(newPost);
                     return false;

                // event.preventDefault();
                setPosts([...posts, newPost]);
                console.log(posts);

                getTitle.current.value = "";
                getContent.current.value = "";
                toggleCreate()
                setValidateErr([])
        
        }else 
        {
                let err =[]
                if(!title){
                    err['title'] = 'Title is required.'
                }
                if(!content){
                    err['content'] = 'Content is required'
                }
                setValidateErr(err)
        }

    };
    const toggleCreate =()=>{
        setIsCreate(!isCreate)
    };

    const toggleEdit = () => {
        setIsEdit(!isEdit)
    }

    const editPost = id => {
        setEditId(id);
        toggleEdit();
    };

    const updatePost = (event) => {
        event.preventDefault();
        const updatedPost = posts.map(eachPost => {
            if (eachPost.id === editId) {
                return {
                    ...eachPost,
            
                    title: title ||
                     eachPost.title,
                    content: content || eachPost.content
                };
            
        }
        return eachPost;
    });

    setPosts(updatedPost);
    // setTitle(event.target.value)
    // setContent(event.target.value)
   

    toggleEdit();
    getTitle.current.value=''
    getContent.current.value=''
     setTitle(event.target.value)
    setContent(event.target.value)
};

const deletePost = id => {
    const modifiedPost = posts.filter(eachPost=>{
        return eachPost.id !== id;

    });
    setPosts(modifiedPost);
};




    if(isCreate){
        return (
            <>
                <Create 
                    savePostTitleToState = {savePostTitleToState}
                    savePostContentToState = {savePostContentToState}
                    getTitle={getTitle}
                    getContent={getContent}
                    savePost={savePost}
                    deletePost = {deletePost}
                    validateErr={validateErr}
                    backToList={backToList}
                />
            </>
        )
    
    }
    else if (isEdit) {
        const post = posts.find(post => {
            return post.id === editId;
        });
        return (
            <Edit
                title={post.title}
                content={post.content}
                //updatePost={updatePost}
                //savePostTitleToState={savePostTitleToState}
               // savePostContentToState={savePostContentToState}

                getTitle ={getTitle}
                getContent={getContent}
                savePostTitleToState={savePostTitleToState} 
                savePostContentToState={savePostContentToState}     
                 
               post = {post}
               updatePost={updatePost}
            />
        );
        }

return (
    <div className="container">

                        
            <button className="btn btn-primary" onClick={toggleCreate}>
                <i className="fa-solid fa-plus"></i>Create New</button>

                <table className="table table-dark table striped mt-2">
                    <thead>
                         <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Content</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                <tbody>
                    {!posts.length ? (
                            <div>
                                <h3>There is nothing to see here! </h3>
                            </div>
                        ): (
                            posts.map((eachPost)=> {
                                return (
                                    <Post
                                    id={eachPost.id}
                                    key={eachPost.id}
                                    eachPost={eachPost}
                                    editPost={editPost}
                                    deletePost={deletePost}
                                    
                                    />
                                )
                            })
                        )}

                </tbody>
                
             </table>
    </div>
)

}


export default List