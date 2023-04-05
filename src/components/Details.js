import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import PostsContext from "../PostsContext";

const Details = () => {
  const { id } = useParams();
  const posts = useContext(PostsContext);
  
  const post = posts.find((post) => post.id === parseInt(id));
 // if post doesn't exist, display error message
 if (!post) {
    return <div> the requested item doesn't exist.</div>;
  } 
  
  return (
    <div className="container">
    
<div className="card" style={{width: '15rem'}}>
    <h3 className="card-header">Details Page for Post With Id :- {post.id}</h3>
  <img className=""src={`https://picsum.photos/200?random=${post.id}`} alt="detailImage" />
  <div className="card-body">
    <h5 className="card-title"><b>Title - </b>{post.title}</h5>
    <p className="card-text"><b>Body - </b>{post.body}</p>
  </div>
  <ul className="list-group">
    <li className="list-group-item">Created by User ID: {post.userId}</li>
  </ul>
 
</div>

    </div>
  );
};

export default Details;