import "./App.css";
import React, { useEffect, useState } from "react";
import NavigationBar from "./pages/NavigationBar";


function App() {
  const axios = require("axios");
  const baseURL = "http://localhost:7071";
  const [images, setImages] = useState([]);
  const [infos, infoList] = useState([])
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  //TODO: API functions (more to be added) should be in their own file!
  const getEvents = () => {
    axios
      .get(`${baseURL}/events`)
      .then(function (response) {
        setImages(response.data.scanResults);
        infoList(response.data)
        console.log(response);
      })
      .catch(function (error) {
        //TODO: this should display an error in the UI!
        console.log(error);
      });
  };

  useEffect(() => {
    getEvents();
  }, []);
 
  

  return (
    //TODO: This code should be factored out into multiple files
    <div
      className="App"
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <NavigationBar />
      <div
        // Styles can be defined in a separate file using mui useStyle
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
          width: "85%",
          height: "100%",
        }}
      >
        {/* TODO: This button does nothing!  */}
        <button 
          type="button"
          onClick={() => setCurrentImageIndex((prevImage) => (currentImageIndex === 0 ? currentImageIndex : currentImageIndex - 1))}
          >
            Previous Image
            </button>
        <div>
          <div
            className="text-bar"
          >
            <div> Total Images: {images.length} </div>
            <div> Index: {currentImageIndex} </div>
          </div>
          {images.length > 0 && <img alt={images[currentImageIndex].blobContainer} src={images[currentImageIndex].jpg} />}
          {images[currentImageIndex]?.createdOn && (
            <div className="text-bar"> Scan Timestamp: {images[currentImageIndex].createdOn} </div>
          )}
          {/* TODO: Finish adding image metadata!  */}
        <div> Image Metadata: INCOMPLETE </div>
          <div> Confidence Levels: {images[currentImageIndex]?.overallConf} </div>
          <div> Number of Detections: {images[currentImageIndex]?.detectionsList.length} </div>
          <div> Noise Floor Metric: {images[currentImageIndex]?.noiseFloorMetric} </div>
        </div>
        {/* TODO: This button also does nothing  */}
        <button 
          type="button"
          onClick={() => setCurrentImageIndex((prevImage) => (currentImageIndex + 1))}>
          Next Image
          </button>
      </div>
    </div>
  );
            
}

export default App;
