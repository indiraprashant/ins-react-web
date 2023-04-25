import React, { Fragment} from "react";
import Icon1 from '../../assets/images/infographics/icon1.png'
import Icon2 from '../../assets/images/infographics/icon2.png'
import Icon3 from '../../assets/images/infographics/icon3.png'
import Chart2020 from '../../assets/images/infographics/2020-2021.png'
import Chart2019 from '../../assets/images/infographics/2019-2020.png'
import Chart2018 from '../../assets/images/infographics/2018-2019.png'
import Chart2017 from '../../assets/images/infographics/2017-2018.png'
import Chart2016 from '../../assets/images/infographics/2016-2017.png'
import Chart2015 from '../../assets/images/infographics/2015-2016.png'
import Chart2014 from '../../assets/images/infographics/2014-2015.png'
import Chart2013 from '../../assets/images/infographics/2013-2014.png'
import Chart2012 from '../../assets/images/infographics/2012-2013.png'
import Chart2011 from '../../assets/images/infographics/2011-2012.png'
import Carousel from 'react-bootstrap/Carousel'
import { useState } from "react";
import Chart from 'react-apexcharts';
import ReactApexChart from 'react-apexcharts';
import "./style.css"

const Infographics= () => {
const series =  [1550, 1000, 400, 500];
const options = {
chart: {
width: '100%',
type: 'donut',
dropShadow: {
enabled:false,
color: '#fff',
top: -1,
left: 3,
}
},
stroke: {
width: 0,
},
plotOptions: {
pie: {
donut: {
labels: {
show: true,
total: {
showAlways: true,
show: true,

},

}
}
}
},
labels: ["Primary School", "Middle School", "Secondary School", "Sr. Secondary School"],
dataLabels: {
style: {
colors: ['#000'],
fontSize: '13px',
},
},
legend: {
markers: {
width: 12,
height: 12,
strokeWidth: 0,
strokeColor: '#000',
fillColors: ['#EBA7FF', '#FF7700', '#9EFFA2' ,'#53D0FF'],
radius: 12,
customHTML: undefined,
onClick: undefined,
offsetX: 0,

}
},
tooltip: {
enabled: true,
fillSeriesColor: true,
style: {
fontSize: '15px',
fontFamily: undefined,
Color:'#fff'
}
},
colors: ['#EBA7FF', '#FF7700', '#9EFFA2' ,'#53D0FF']
,
fill: {
colors:['#EBA7FF', '#FF7700', '#9EFFA2' ,'#53D0FF']
},
responsive : [
   {
     breakpoint: 1000,
     options: {
       plotOptions: {
         bar: {
           horizontal:false
         }
       },
       legend: {
         position: "top"
       }
     }
   }
 ]
}; 




const series1 = [{
name: '2021',
data: [167, 172, 177, 166, 173, 178, 176,171,163,172,165,142]
}, {
name: '2022',
data: [145, 148, 155, 148, 147, 143, 146,153,154,152,145,145]
}];
const options1 ={
chart: {
height: 350,
type: 'area'
},
dataLabels: {
enabled: true
},
stroke: {
curve: 'smooth',
colors:['rgba(190,0,219)', "rgba(73,228,209)"]
},
xaxis: {
type: 'Months',
categories: ["Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec","Jan","Feb", "March","Apr","May"]
},
legend: {
markers: {
width: 12,
height: 12,
strokeWidth: 0,
strokeColor: '#000',
fillColors: ['rgba(190,0,219)', "rgba(73,228,209)"],
radius: 12,
customHTML: undefined,
onClick: undefined,
offsetX: 0,

}
},
tooltip: {
enabled: true,
fillSeriesColor:false,
style: {
fontSize: '15px',
fontFamily: undefined,
Color:'#000'
}
},
colors: ['rgba(190,0,219)', "rgba(73,228,209)"],
fill: {
colors:['rgba(190,0,219)', "rgba(73,228,209)"]
},

};


const [galleryToggle, setGalleryToggle] = useState("2020-21");
const [activeState, setActiveState] = useState("2020-21");
const EventGalleryClickHandler = (DataId) => {
setGalleryToggle(DataId);
setActiveState(DataId);
}
return (
<Fragment>
   <div className="col-md-12">
      <div className="container">
         <div className="row">
            <div className="col-md-12 firstbg col-xs-12">
               <h3 className="main-heading text-center">SHIFTS</h3>
               <div className="row">
                  <div className="col-md-3 shiftBox col-xs-6" style={{background:"#fae9ff"}}>
                     <div className="row">
                        <div className="col-md-2 nopadding col-4"><img src={Icon1} className="shift_img" alt="Indira National School" /></div>
                        <div className="col-md-10 col-8">
                           <p className="shift-heading">SHIFT 1</p>
                        </div>
                        <div className="col-md-12">
                           <p className="grade-heading"><b>Grade I to IV</b></p>
                        </div>
                        <div className="col-md-12 timeBox">
                           <span className="time">07:30 AM</span> <span style={{margin:"5px"}}>To</span> <span  className="time">12:40 PM</span>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-3 shiftBox col-xs-6" style={{backgroundColor:"#FFEEE9"}}>
                     <div className="row">
                        <div className="col-md-2 nopadding col-4"><img src={Icon2} className="shift_img" alt="Indira National School" /></div>
                        <div className="col-md-10 col-8">
                           <p className="shift-heading">SHIFT 2</p>
                        </div>
                        <div className="col-md-12">
                           <p className="grade-heading"><b>Grade v to VII</b></p>
                        </div>
                        <div className="col-md-12 timeBox">
                           <span className="time">12:40 PM</span> <span style={{margin:"5px"}}>To</span> <span  className="time">05:40 AM</span>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-3 shiftBox col-xs-6" style={{background:"#E9FFEA"}}>
                     <div className="row">
                        <div className="col-md-2 nopadding col-4"><img src={Icon3} className="shift_img" alt="Indira National School" /></div>
                        <div className="col-md-10 col-8 text-center">
                           <p className="shift-heading ">SHIFT 3</p>
                        </div>
                        <div className="col-md-12">
                           <p className="grade-heading"><b>Grade I to IV</b></p>
                        </div>
                        <div className="col-md-12 timeBox">
                           <span className="time">05:40 PM</span> <span style={{margin:"5px"}}>To</span> <span  className="time">10:40 PM</span>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-3 shiftBox col-xs-6" style={{background:"#FFE3A1"}}>
                     <div className="row">
                        <div className="col-md-2 nopadding col-4"><img src={Icon1} className="shift_img" alt="Indira National School" /></div>
                        <div className="col-md-10 col-8">
                           <p className="shift-heading">SHIFT 1</p>
                        </div>
                        <div className="col-md-12 ">
                           <p className="grade-heading"><b>X & XXI Batches</b></p>
                        </div>
                        <div className="col-md-12 timeBox">
                           <span className="time">07:30 AM</span> <span style={{margin:"5px"}}>To</span> <span  className="time">12:30 pM</span>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-3 shiftBox col-xs-6" style={{background:"#FFBAC7"}}>
                     <div className="row">
                        <div className="col-md-2 nopadding col-4"><img src={Icon2} className="shift_img" alt="Indira National School" /></div>
                        <div className="col-md-10 col-8">
                           <p className="shift-heading ">SHIFT 2</p>
                        </div>
                        <div className="col-md-12">
                           <p className="grade-heading"><b>X & XII Batches</b></p>
                        </div>
                        <div className="col-md-12 timeBox">
                           <span className="time">12:40 PM</span> <span style={{margin:"5px"}}>To</span> <span  className="time">05:40 pM</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
   <div className="col-md-12">
      <div className="container">
         <div className="row">
            <div className="col-md-6  shift1Box col-12">
               <h3 className="main-heading" style={{marginLeft:"0px"}}>TOTAL STUDENT COUNT SHIFT 1</h3>
               <div className="donut   ">
                  <Chart options={options} series={series} type="donut" width="100%" />
               </div>
            </div>
            <div className="col-md-6 shift1Box col-12">
               <h3 className="main-heading" style={{marginLeft:"0px"}}>TOTAL STUDENT COUNT SHIFT 2</h3>
               <div className="donut">
                  <Chart options={options} series={series} type="donut" width="100%" />
               </div>
            </div>
         </div>
      </div>
   </div>
   <div className="clearfix"></div>
   <div className="col-md-12">
      <div className="container">
         <div className="row">
            <h3 className="academicHeading">ACADEMIC PERFORMANCE OF THE BOARD CLASSES</h3>
            <div className="col-md-12 graphBox col-xs-12" >
               <div className="row">
                  <div className="col-md-1 nopadding col-1">
                     <p className="test2">PERFORMANCE OF STUDENTS</p>
                  </div>
                  <div className="col-md-11 nopadding col-11">
                     <div id="chart">
                        <ReactApexChart options={options1} series={series1} type="area" height={500} />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
   <div className="clearfix"></div>
   <div className="col-md-12 firstbg col-xs-12">
      <div className="container">
         <div className="row">
            <div className="col-md-12 col-xs-12">
               <h3 className="main-heading">TOPPERS OF THE BOARD CLASSES</h3>
               <Carousel interval={null} variant="dark" className="mobileHide">
                  <Carousel.Item>
                     <button className="fisrtBtnMargin chart_button" id={activeState == "2020-21" ? "active_graph_button" : ""} onClick={() => EventGalleryClickHandler('2020-21')}>2020-2021</button>
                     <button className="chart_button" id={activeState == "2019-20" ? "active_graph_button" : ""} onClick={() => EventGalleryClickHandler('2019-20')}>2019-2020</button>
                     <button className="chart_button" id={activeState == "2018-19" ? "active_graph_button" : ""} onClick={() => EventGalleryClickHandler('2018-19')}>2018-2019</button>
                     <button className="chart_button" id={activeState == "2017-18" ? "active_graph_button" : ""} onClick={() => EventGalleryClickHandler('2017-18')}>2017-2018</button>
                     <button className="chart_button" id={activeState == "2016-17" ? "active_graph_button" : ""} onClick={() => EventGalleryClickHandler('2016-17')}>2016-2017</button>
                     <button className="chart_button" id={activeState == "2015-16" ? "active_graph_button" : ""} onClick={() => EventGalleryClickHandler('2015-16')}>2015-2016</button>
                     <button className="chart_button" id={activeState == "2014-15" ? "active_graph_button" : ""} onClick={() => EventGalleryClickHandler('2014-15')}>2014-2015</button>
                  </Carousel.Item>
                  <Carousel.Item>
                     <button className="fisrtBtnMargin chart_button" id={activeState == "2013-14" ? "active_graph_button" : ""} onClick={() => EventGalleryClickHandler('2013-14')}>2013-2014</button>
                     <button className="chart_button" id={activeState == "2012-13" ? "active_graph_button" : ""} onClick={() => EventGalleryClickHandler('2012-13')}>2012-2013</button>
                     <button className="chart_button" id={activeState == "2011-12" ? "active_graph_button" : ""} onClick={() => EventGalleryClickHandler('2011-12')}>2011-2012</button>
                  </Carousel.Item>
               </Carousel>
               <Carousel interval={null} variant="dark" className="desktopHide">
                  <Carousel.Item>
                     <button className="fisrtBtnMargin chart_button" id={activeState == "2020-21" ? "active_graph_button" : ""} onClick={() => EventGalleryClickHandler('2020-21')}>2020-2021</button>
                     <button className="chart_button" id={activeState == "2019-20" ? "active_graph_button" : ""} onClick={() => EventGalleryClickHandler('2019-20')}>2019-2020</button>
                  </Carousel.Item>
                  <Carousel.Item>
                     <button className="fisrtBtnMargin chart_button" id={activeState == "2018-19" ? "active_graph_button" : ""} onClick={() => EventGalleryClickHandler('2018-19')}>2018-2019</button>
                     <button className="chart_button" id={activeState == "2017-18" ? "active_graph_button" : ""} onClick={() => EventGalleryClickHandler('2017-18')}>2017-2018</button>
                  </Carousel.Item>
                  <Carousel.Item>
                     <button className="fisrtBtnMargin chart_button" id={activeState == "2016-17" ? "active_graph_button" : ""} onClick={() => EventGalleryClickHandler('2016-17')}>2016-2017</button>
                     <button className="chart_button" id={activeState == "2015-16" ? "active_graph_button" : ""} onClick={() => EventGalleryClickHandler('2015-16')}>2015-2016</button>
                  </Carousel.Item>
                  <Carousel.Item>
                     <button className="fisrtBtnMargin chart_button" id={activeState == "2014-15" ? "active_graph_button" : ""} onClick={() => EventGalleryClickHandler('2014-15')}>2014-2015</button>
                     <button className=" chart_button" id={activeState == "2013-14" ? "active_graph_button" : ""} onClick={() => EventGalleryClickHandler('2013-14')}>2013-2014</button>
                  </Carousel.Item>
                  <Carousel.Item>
                     <button className="fisrtBtnMargin chart_button" id={activeState == "2012-13" ? "active_graph_button" : ""} onClick={() => EventGalleryClickHandler('2012-13')}>2012-2013</button>
                     <button className="chart_button" id={activeState == "2011-12" ? "active_graph_button" : ""} onClick={() => EventGalleryClickHandler('2011-12')}>2011-2012</button>
                  </Carousel.Item>
               </Carousel>
               {galleryToggle == "2020-21" &&
               <div className="container firstbg">
                  <div className="row">
                     <div className="col-md-12">
                        <img src={Chart2020} className='stud_chart' alt="Indira National School" />                        
                     </div>
                  </div>
               </div>
               }
               {galleryToggle == "2019-20" &&
               <div className="container firstbg">
                  <div className="row">
                     <div className="col-md-12">
                        <img src={Chart2019} className='stud_chart' alt="Indira National School" />
                     
                     </div>
                  </div>
               </div>
               }
               {galleryToggle == "2018-19" &&
               <div className="container firstbg">
                  <div className="row">
                     <div className="col-md-12">
                        <img src={Chart2018} className='stud_chart' alt="Indira National School" />
                       
                     </div>
                  </div>
               </div>
               }
               {galleryToggle == "2017-18" &&
               <div className="container firstbg">
                  <div className="row">
                     <div className="col-md-12">
                        
                        <img src={Chart2017} className='stud_chart' alt="Indira National School" />
                       
                     </div>
                  </div>
               </div>
               }
               {galleryToggle == "2016-17" &&
               <div className="container firstbg">
                  <div className="row">
                     <div className="col-md-12">
                        
                        <img src={Chart2016} className='stud_chart' alt="Indira National School" />
                    
                       
                     </div>
                  </div>
               </div>
               }
               {galleryToggle == "2015-16" &&
               <div className="container firstbg">
                  <div className="row">
                     <div className="col-md-12 text-center">
                     <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-10 text-center">
                        <img src={Chart2015} className='stud_chart' alt="Indira National School" />
                        </div>
                        <div className="col-md-1"></div>
                        </div>
                     </div>
                  </div>
               </div>
               }
               {galleryToggle == "2014-15" &&
               <div className="container firstbg">
                  <div className="row">
                     <div className="col-md-12">
                     <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-10 text-center">
                        <img src={Chart2014} className='stud_chart' alt="Indira National School" />
                        </div>
                        <div className="col-md-1"></div>
                        </div>
                     </div>
                  </div>
               </div>
               }
               {galleryToggle == "2013-14" &&
               <div className="container firstbg">
                  <div className="row">
                     <div className="col-md-12">
                        <div className="col-md-1"></div>
                        <img src={Chart2013} className='stud_chart' alt="Indira National School" />
                        <div className="col-md-1"></div>
                     </div>
                  </div>
               </div>
               }
               {galleryToggle == "2012-13" &&
               <div className="container firstbg">
                  <div className="row">
                     <div className="col-md-12">
                     <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-10 text-center">
                        <img src={Chart2012} className='stud_chart' alt="Indira National School" />
                        </div>
                        <div className="col-md-1"></div>
                        </div>
                     </div>
                  </div>
               </div>
               }
               {galleryToggle == "2011-12" &&
               <div className="container firstbg">
                  <div className="row">
                     <div className="col-md-12">
                     <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-10 text-center">
                        <img src={Chart2011} className='stud_chart'  alt="Indira National School" />
                        </div>
                        <div className="col-md-1"></div>
                        </div>
                     </div>
                  </div>
               </div>
               }
            </div>
         </div>
      </div>
   </div>
</Fragment>
);
}
export default Infographics;