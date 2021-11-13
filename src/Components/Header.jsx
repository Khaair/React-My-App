import React from 'react';



const Header = (props) => {
    return (
        <div>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=<device-width>, initial-scale=1.0" />
  <link rel="stylesheet" type="text/css" href="css/style.css" />
  <link rel="stylesheet" type="text/css" media="screen and (max-width:800px)" href="css/mobile.css" />
  <title>Linkedin</title>
  <div className="container">
    <div className="one">
      <img src="img/logo.png" />
      <div className="head-input">
        <input className="sorasori-input" name placeholder="Search Facebook" />
      </div>
      <div className="icon"><img src="img/icon1.png" />
        <p className="icon-title">Home</p>
      </div>
      <div className="icon"><img src="img/icon2.png" />
        <p className="icon-title">Network</p>
      </div>
      <div className="icon"><img src="img/icon3.png" />
        <p className="icon-title">Jobs</p>
      </div>
      <div className="icon"><img src="img/icon4.png" />
        <p className="icon-title">Messaging</p>
      </div>
      <div className="icon"><img src="img/icon5.png" />
        <p className="icon-title">Notifications</p>
      </div>
      <div className="icon"><img src="img/icon6.png" />
        <p className="icon-title">Me</p>
      </div>
      <div className="icon"><img src="img/icon7.png" />
        <p className="icon-title">Work</p>
      </div>
      <div className="icon">
        <br />
        <p className="icon-title">Try to premium</p>
      </div>
    </div>
    <div className="two">
      <div className="card-two-1">
        <div className="left-logo"><img src="img/leftlogo.PNG" />
          <p className="left-logo-title">MD. ABUL KHAIR</p>
          <p className="left-logo-title2">Junior Web Developer,AnirbanIT,Bangladesh.</p>
          <br />
          <hr />
          <p style={{padding: '6px', color: '#666666'}}>Connection</p>
          <b style={{padding: '6px'}}>Grow Your Network</b>
          <hr />
          <p style={{padding: '6px', color: '#666666'}}>Access exclusive tools &amp; insight</p>
          <b style={{padding: '6px'}}>Try premimum for free</b>
          <hr />
          <br />
          <div className="my-item2">
            <img src="img/myitem.PNG" />
            <p style={{paddingLeft: '5px'}}>My item</p>
          </div>
        </div>
      </div>
    </div>
    <div className="three">
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
    <div className="four">
      <div className="card-four-1">
        <ul>
          <li><a href><i><img src="img/right01.PNG" /></i><span style={{position: 'absolute', padding: '5px', color: 'black'}}>
                Analyst Skill
                <p style={{color: '#666666'}}>
                  Company &amp; Elerning
                </p>
              </span></a> </li>
        </ul>
        <ul>
          <li><a href><i><img src="img/right02.PNG" /></i><span style={{position: 'absolute', padding: '5px', color: 'black'}}>
                BDdream Jobs
                <p style={{color: '#666666'}}>
                </p><p style={{color: '#666666'}}>
                  Company &amp; Information Service
                </p>
                <p />
              </span></a> </li>
        </ul>
        <ul>
          <li><a href><i><img src="img/right03.PNG" /></i><span style={{position: 'absolute', padding: '5px', color: 'black'}}>
                Bkash Limited
                <p style={{color: '#666666'}}>
                  Company &amp; Finansial Service
                </p>
              </span></a> </li>
        </ul>
      </div>
      <p className="fotter-text">
        About   &nbsp; Accessibility &nbsp;  Help Center &nbsp; Privacy &amp; Terms &nbsp; Ad Choices &nbsp; Advertising &nbsp; Business Services &nbsp; 
        Get the LinkedIn app More
      </p>
      <br />
      <br />
      <p style={{textAlign: 'center'}}><span style={{fontSize: 'larger', color: 'blue', fontWeight: 'bold'}}>LinkedIn</span><span style={{color: '#666666'}}>&nbsp;LinkedIn Corporation © 2021</span></p>
    </div>
  </div></div>

    );
};

export default Header;
