
import {useParams} from "react-router-dom";



function ReadArticlePage(props){
   const {note_id} = useParams();
   let story = props.stories.find(note =>note.id == note_id) // same as get()
   
    return (
      <div className='container '>  
        <br />
        <div className='justify-content-center d-flex'> 
          <div className=' col-md-8 '> 
              <img src="story.thumbnail" alt="" />
             <h2><strong> {story.title}</strong></h2>
            <h3 className='lead'>{story.description}</h3>
            <center> <strong>. . .</strong> </center>   
            <p>{story.body}</p>
          </div>
        </div>
      </div>
    );
};


export default ReadArticlePage;