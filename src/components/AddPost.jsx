import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

function AddPost() {
    let [postTitle, setPostTitle] = useState("");
    let [postDescription, setPostDescription] = useState("");
    
    const navigate = useNavigate();

    let addingTitle = (event) => {
        setPostTitle(event.target.value);
    };

    let addingDescription = (event) => {
        setPostDescription(event.target.value);
    };

    let formData = {
        title: postTitle,
        description: postDescription,
    };

    const createPost = async () => {
        await fetch("http://127.0.0.1:8000/api/add-book/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

      };

    function handleSubmit(e) {
        e.preventDefault();

        createPost();     
        
        navigate("/")
    }





    return (
        <div>
            <div className="d-flex justify-content-center">
                <div className="col-12 col-md-8">
                    <h4> Add Note </h4>
                    <form onSubmit={handleSubmit}>
                        <input style={{ marginBottom: "1rem" }} className="form form-control" type="text" onChange={addingTitle} value={postTitle} name="post-entry-title" placeholder="Enter Title" />
                        <textarea style={{ marginBottom: "1rem", height: "8rem" }} className="form form-control" onChange={addingDescription} value={postDescription} name="post-entry-description" placeholder="Enter description" />
                        <button style={{ borderRadius: "0" }} type="submit" className="btn btn-success btn-md ">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddPost;
