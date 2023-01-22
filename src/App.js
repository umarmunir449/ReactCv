
import umr from './umr.jpg';
import './App.css';
function App() {
  return (
    <div class="container">
     <div class="left_side">
     <div class="profiletext">
     <div class="imgbx">
                    <img src={umr} className="app-logo" alt="logo"></img>
                </div>
                <h2>Muhammad Umar Munir <br></br><span>Web Developer</span></h2>
     </div>
     <div class="contactinfo"> 
            <h3 class="title">CONTACT-INFO</h3> 
            <ul> 
                <li>
                    <span class="icon"><i class="fa fa-phone" aria-hidden="true"></i></span>
                    <span class="text">+923009793043</span>
                </li>
                <li>
                    <span class="icon"><i class="fa fa-envelope-o" aria-hidden="true"></i></span>
                    <span class="text">umarmunir449@gmail.com</span>
                </li>
                <li>
                    <span class="icon"><i class="fa fa-github" aria-hidden="true"></i></span>
                    <span class="text">umarmunir449</span>
                </li>
                <li>
                    <span class="icon"><i class="fa fa-map-marker" aria-hidden="true"></i></span>
                    <span class="text">Shakargrah,Narowal,Pakistan</span>
                </li>
               

                 </ul>
                </div>
                <div class="contactinfo education"> 
                    <h3 class="title">EDUCATION</h3> 
                    <ul> 
                        <li>
                           <h6>2017-2019</h6>
                           <h5>Ms in Computer Science</h5>
                           <h5>UMT Lahore</h5>
                        </li>
                        <li>
                            <h6>2014-2016</h6>
                           <h5>MSC-information technology</h5>
                           <h5>Sarghodha university</h5>
                        </li>
                        <li>
                            <h6>2011-2013</h6>
                            <h5>Bachelor in commerce</h5>
                            <h5>Punjab University</h5>
                        </li>
                        <li>
                            <h6>2008-2010</h6>
                            <h5>D.Com</h5>
                            <h5>Technical Board</h5>
                        </li>
                        <li>
                            <h6>2007</h6>
                            <h5>Matric</h5>
                            <h5>Gujjranwala Board</h5>
                        </li>
                       
        
                         </ul>
                   </div>
                   <div class="contactinfo language"> 
                    <h3 class="title">Language</h3> 
                    <ul> 
                        <li>
                           <span class="text">English</span>
                           <span class="percent"><div class="style"></div></span>
                          
                        </li>
                        <li>
                            <span class="text">Urdu</span>
                            <span class="percent"><div class="st"></div>  </span>
                         </li>
                         <li>
                            <span class="text">Punjabi</span>
                            <span class="percent">  <div class="st"></div></span>
                         </li>
                    
                    </ul> 
                     </div>
     </div>
     <div class="right_side">
        <div class="about"> 
            <h3 class="title2">MS Thesis:</h3>
            <p>(AMPEP: Prediction of Sequenced antibacterial peptides using Artificial Neural Network)

                Before bio-computational models the classification of amps and non-amps are extremely time and cost expensive. To distinguish an amp from a non-Amps requires a large amount of laborious work. For a last decade, Machine learning approaches revolutionize many complex biological problems. Hence to differentiate Amps and non-Amps such a classification model is required which can predict such a dataset with high level of accuracy. For this purpose, an ANN based prediction approach is presented.
                </p><br></br>
                <h3 class="title3">Other Research articles (Not-Yet-Published):</h3>
                <p>(AMPEP: Prediction of Sequenced antibacterial peptides using Artificial Neural Network)

                    Prediction of premature atrial contractions (Cardiovascular) using machine learning
                    
                    A Survey of Energy Aware Clouds Resource Allocation Techniques for Virtual Machine Consolidation
                </p> <br></br>
               </div>
               <div class="about">
            <h2 class="title2">Experience</h2>
            
            <div class="box">
                <div class="year-Company">
                <h5>2016</h5>
            <h5>company-Name</h5>
            </div>
            <div class="text">
                <h4>Employed as an accountant</h4>
                <p>Pearl Crete Company for a duration of 3 month</p>
            </div>
            </div>
            <div class="box">
                <div class="year-Company">
                <h5>2018</h5> 
            <h5>company-Name</h5>
            </div>
            <div class="text">
                <h4>Research Assistant</h4>
                <p> At UMT for the duration of 6 month </p>
            </div>
            
            </div>
        
            <div class="box">
                <div class="year-Company">
                <h5>2019-2021</h5>
            <h5>company-Name</h5>
            </div>
            <div class="text">
                <h4>Article Writing / Thesis Writing</h4>
                <p>Copy writing Network</p>
            </div>
            </div>   
            </div>
      
        <div class="about-skil">
            <h2 class="title2">Professional skils</h2>
            <div class="box">
                <h4>html</h4>
                <div class="percent">
                    <div class="sty"></div>
                </div>
                
            </div>

           
            <div class="box">
                <h4>Css</h4>
                <div class="percent">
                    
                <div class="styl"> </div>
        
                </div>
            </div>
            <div class="box">
                <h4>Java Script</h4>
                <div class="percent"><div class="stylee" ></div></div>
            </div>
          
            <div class="box">
                <h4>react</h4>
                <div class="percent">
                    <div class="style2"></div>
                </div>
            </div>

           
            <div class="box">
                <h4>C++</h4>
                <div class="percent">
                    <div class="style3"></div></div>
            </div>
          
            <div class="box">
                <h4>OOP</h4>
                <div class="percent">
                    <div class="style4" ></div>
                </div>
            </div>
          
            <div class="box">
                <h4>Mat Lab</h4>
                <div class="percent">
                    <div class="style5" ></div>
                </div>
            </div>
            </div>
            <h3 class="title4">Activities:</h3> 
        <p>VollyBall,FootBall</p>
        <h3 class="title5">Reference:</h3>
        <p>Will be furnished if required.</p>

        </div>

    </div>
  );
}

export default App;
