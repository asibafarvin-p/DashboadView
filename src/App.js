import "./App.css";
import img1 from "./images/baby.jfif";
import img2 from "./images/camera.jfif";
import img3 from "./images/documents.jfif";
import img4 from "./images/video.jfif";
import img5 from "./images/audio.png";
import img6 from "./images/ll.jpg";
import img7 from "./images/cc.jfif";
import img8 from "./images/st.jfif";
import img9 from "./images/clo.jfif";
import img10 from "./images/settings.jfif";
import img11 from "./images/lohh.jfif";
import img12 from "./images/work.jfif";
import img13 from "./images/tact.jfif";
import img14 from "./images/degree.jfif";
import img15 from "./images/dust.png";
import img16 from "./images/add.jfif";
import img17 from "./images/w1.jfif";
import img18 from "./images/share1.png";
import img19 from "./images/vi.jfif";
import img20 from "./images/sp.jfif";
import img21 from "./images/dd.png";
import img22 from "./images/addfile.jfif";
import img23 from "./images/b1.jfif";
import img24 from "./images/b2.jfif";
import img25 from "./images/ma.jpg";

const App = () => {
  return (
    <div className="Basic">
      <div className="First">
        <div className="mage">
          <img src={img1} alt="" width="100px" height="100px" />
        </div>
        <div className="Name1">
          <img src={img6} alt="" width="20px" height="20px" /> My cloud{" "}
        </div>
        <div className="Name2">
          <img src={img7} alt="" width="20px" height="20px" /> Shared files{" "}
        </div>
        <div className="Name3">
          <img src={img8} alt="" width="20px" height="20px" /> Favorites
        </div>
        <div className="Name4">
          <img src={img9} alt="" width="20px" height="20px" /> Upload files{" "}
        </div>
        <div className="Name5">
          <img src={img10} alt="" width="20px" height="20px" /> Settings{" "}
        </div>
        <div className="Name6">
          <img src={img11} alt="" width="20px" height="20px" /> Log out{" "}
        </div>
      </div>
      <div className="page">
        <div className="next">
          {" "}
          <input className="text" placeholder="search" />
        </div>
        <div className="cate">Categories</div>
        <div className="box">
          <div className="camera">
            <button className="cam">
              <img src={img2} alt="" width="15px" height="15px" />
            </button>
            <div className="line1">Pictures</div>
            <div className="line2">480 files</div>{" "}
          </div>
          <div className="documents">
            <button className="doc">
              <img src={img3} alt="" width="15px" height="15px" />
            </button>
            <div className="line3">Documents</div>
            <div className="line4">190 files</div>{" "}
          </div>
          <div className="videos">
            <button className="vid">
              <img src={img4} alt="" width="15px" height="15px" />
            </button>
            <div className="line5">Videos</div>
            <div className="line6">30 files</div>{" "}
          </div>
          <div className="audio">
            <button className="Aud">
              <img src={img5} alt="" width="20px" height="20px" />
            </button>
            <div className="line7">Audio</div>
            <div className="line8">80 files</div>
            <div className="str"></div>
          </div>
        </div>
        <div className="files">Files</div>
        <div className="box1">
          <div className="second">
            <button className="work">
              <img src={img12} alt="" width="20px" height="20px" />
            </button>
            <div className="line9">Work</div>
            <div className="line10">820 files</div>{" "}
            <button className="str"></button>
          </div>
          <div className="per">
            <button className="personal">
              <img src={img13} alt="" width="20px" height="20px" />
            </button>
            <div className="line11">Personal</div>
            <div className="line12">115 files</div>{" "}
            <button className="str"></button>
          </div>
          <div className="sc">
            <button className="school">
              <img src={img14} alt="" width="20px" height="20px" />
            </button>
            <div className="line13">School</div>
            <div className="line14">65 files</div>
            <button className="str"></button>{" "}
          </div>
          <div className="arche">
            <button className="archieve">
              <img src={img15} alt="" width="20px" height="20px" />
            </button>
            <div className="line15">Archieve</div>
            <div className="line16">21 files</div>
            <button className="str"></button>{" "}
          </div>
          <div className="add">
            <button className="adbut">
              <img src={img16} alt="" width="20px" height="20px" />
            </button>
          </div>
        </div>
        <div className="recent">Recent files</div>
        <div className="imagefolder">
          <div className="foto">
            <button className="first1">
              <img src={img17} alt="" width="20px" height="20px" />
            </button>
            <div className="num1">IMG_100000</div>
            <div className="png">PNG file</div>
            <div className="mb1">5 MB</div>
            <div className="share1">
              <img src={img18} alt="" width="30px" height="30px" />
            </div>
            <div className="point1">. . .</div>
          </div>
          <div className="imagefolder1">
            <div className="foto1">
              <button className="first2">
                <img src={img19} alt="" width="20px" height="15px" />
              </button>
              <div className="num2">Startup pitch</div>
              <div className="png1">AVI file</div>
              <div className="mb2">105 MB</div>
              <div className="share2">
                <img src={img18} alt="" width="30px" height="30px" />
              </div>
              <div className="point2">. . .</div>{" "}
            </div>
            <div className="imagefolder2">
              <div className="foto2">
                <button className="first3">
                  <img src={img20} alt="" width="20px" height="15px" />
                </button>
                <div className="num3">Freestyle beat</div>
                <div className="png2">MP3 file</div>
                <div className="mb3">21 MB</div>
                <div className="share3">
                  <img src={img18} alt="" width="30px" height="30px" />
                </div>
                <div className="point3">. . .</div>
              </div>
              <div className="imagefolder3">
                <div className="foto3">
                  <button className="first4">
                    <img src={img21} alt="" width="20px" height="15px" />
                  </button>
                  <div className="num4">Work proposal</div>
                  <div className="png3">DOCX file</div>
                  <div className="mb4">500 kb</div>
                  <div className="share4">
                    <img src={img18} alt="" width="30px" height="30px" />
                  </div>
                  <div className="point4">. . .</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="page1">
        <div className="page2">
          <div className="final">
            <div className="ff">
              <div className="final1">
                <button className="adf">
                  <img src={img22} alt="" width="85px" height="85px" />
                </button>
                <div className="new">Add new files</div>{" "}
              </div>
              <div className="your">
                <div className="foto10">
                  <div className="first9">Your storage </div>
                  <div className="storage">25% left</div>
                </div>
                <div className="papa">75 GB of 100 GB are used</div>
                <div className="papa1">
                  <div className="papa2">
                    <div className="papa3"></div>
                  </div>
                </div>
              </div>

              <div className="final10">
                <div className="final2">
                  <div className="final13">Your shared folders</div>
                  <div className="key">
                    <div className="note">
                      <div className="note1">
                        <div className="keynote">Keynote files</div>
                        <div className="p1">
                          <img src={img23} alt="" width="30px" height="40px" />
                        </div>
                        <div className="p2">
                          <img src={img24} alt="" width="30px" height="40px" />
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                </div>

                <div className="final2">
                  <div className="key1">
                    <div className="note">
                      <div className="note3">
                        <div className="keynote1">Vacation photos</div>
                        <div className="p3">
                          <img src={img25} alt="" width="30px" height="40px" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="final2">
                    <div className="key2">
                      <div className="note20">
                        <div className="note5">
                          <div className="keynote2">Project report</div>
                          <div className="p5">
                            <img
                              src={img24}
                              alt=""
                              width="30px"
                              height="40px"
                            />
                          </div>
                          <div className="p6">
                            <img
                              src={img25}
                              alt=""
                              width="30px"
                              height="40px"
                            />
                          </div>
                        </div>
                      </div>
                    </div>{" "}
                  </div>
                </div>
                <button className="last">+Add more </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
