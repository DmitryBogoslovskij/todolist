import './TodoCard.css'
import Comment from "../../images/comment.svg"
import File from "../../images/file.svg"
import Dots from "../../images/dots.svg"

function TodoCard({title, description, images}) {
  return (      
        <div className="card_1">
          <div className="pill">Low</div>
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="card-footer">
            <div className="card-footer-images"> 
                {images.map((image, index) => (
             <img 
          key={index}
          src={image}
          alt={`Gallery item ${index}`}          
        />
      ))}
    
            </div>
            <div className="comment">
              <img src={Comment} alt="" />
              12 comments
            </div>
            <div className="file">
              <img src={File} alt="" />0 files
            </div>
          </div>
          <img className="dots" src={Dots} alt="" />
        </div>               
      )
}

export {TodoCard}

  
