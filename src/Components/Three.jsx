import React from 'react'

export default function Three() {
    return (
        <div>
            <div>
  <div className="card-three-1">
    <ul>
      <li><a href><i><img src="img/leftone.PNG" /></i>
          <span>
            <input className="input-2" type="text" name placeholder="Start a post" />
          </span></a> </li>
    </ul>
    <div className="my-item">
      <img style={{paddingLeft: '20px'}} src="img/photo-icon.PNG" />
      <p style={{paddingLeft: '10px', paddingTop: '5px'}}>Photo</p>
      <img style={{paddingLeft: '38px'}} src="img/video-icon.PNG" />
      <p style={{paddingLeft: '10px', paddingTop: '5px'}}>Video</p>
      <img style={{paddingLeft: '38px'}} src="img/photo-icon.PNG" />
      <p style={{paddingLeft: '10px', paddingTop: '5px'}}>Event</p>
      <img style={{paddingLeft: '38px'}} src="img/write-article.PNG" />
      <p style={{paddingLeft: '10px', paddingTop: '5px'}}>Write article</p>
    </div>
  </div>
  <div className="card-three-2">
    <ul>
      <li><a href><i><img src="img/Post-profile-pic.PNG" /></i><span style={{position: 'absolute', padding: '5px'}}>
            Nashir Uddin
            <p style={{color: '#666666'}}>Senior Software Engineering,Data Soft,Bangladesh
              <br />
              5 Min Ago
            </p>
          </span></a> </li>
    </ul>
    <p className="post-text" style={{textAlign: 'justify'}}>
      Web development is amongst those jobs that have a significantly higher job satisfaction rate.
      There are several reasons that web developers are so satisfied with their jobs – salary,
      work-life balance, and flexibility, to name a few.
      <br />
    </p><p style={{color: 'blue', padding: '10px'}}>
      #Web 
      <br />
      #Technology
      #Worldwide
    </p>
    <p />
    <img className="post-image" src="img/four-div-3.jpg" />
  </div>
</div>

        </div>
    )
}
