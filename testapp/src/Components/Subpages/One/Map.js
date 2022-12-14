// import { map } from "@firebase/";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  DirectionsRenderer,
} from "@react-google-maps/api";
import { useMemo, useEffect, useState } from "react";
import { render } from "@testing-library/react";
import { usePosition } from "use-position";
import { FaRoad } from "react-icons/fa";
import "./Map.css";

function LoadMap(props) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDAMOsNwu8yRKNyzlFtImYDsKFHJdxC6sA",
  });

  if (!isLoaded) return <div>Loading... </div>;

  return (
    <Map
      setRadioButton={props.setRadioButton}
      update={props.update}
      setCurrentBuilding={props.setCurrentBuilding}
      doSomething={props.doSomething}
    />
  );
}

//const center = { lat: 38.83001, lng: -77.30747 };

function Map(props) {
  //   console.log(props);
  //   const options = useMemo(
  //     () => ({
  //       mapId: "b156e1bc9bca1fb3",
  //     }),
  //     []
  //   );

  const center = useMemo(() => ({ lat: 38.83001, lng: -77.30747 }), []);

  const options = {
    mapId: "b156e1bc9bca1fb3",
    disableDefaultUI: true,
  };

  var destinationCoords = { lat: 0, lng: 0 };

  const [directionCoords, setDirectionCoords] = useState({ lat: 0, lng: 0 });

  function setToJc(newLat, newLong) {
    destinationCoords = { lat: newLat, lng: newLong };
    setDirectionCoords(destinationCoords);
    props.setCurrentBuilding("JC");
    props.setRadioButton("JC");
    props.doSomething("JC");
  }

  function setToCollegeHall(newLat, newLong) {
    destinationCoords = { lat: newLat, lng: newLong };
    setDirectionCoords(destinationCoords);
    props.setCurrentBuilding("College Hall");
    props.setRadioButton("College Hall");
    props.doSomething("College Hall");
  }

  function setToBuchananHall(newLat, newLong) {
    destinationCoords = { lat: newLat, lng: newLong };
    setDirectionCoords(destinationCoords);
    props.setCurrentBuilding("Buchanan Hall");
    props.setRadioButton("Buchanan Hall");
    props.doSomething("Buchanan Hall");
  }

  function setToDavidKing(newLat, newLong) {
    destinationCoords = { lat: newLat, lng: newLong };
    setDirectionCoords(destinationCoords);
    props.setRadioButton("KING");
    props.setCurrentBuilding("KING");
    props.doSomething("KING");
  }

  function setToPlanetary(newLat, newLong) {
    destinationCoords = { lat: newLat, lng: newLong };
    setDirectionCoords(destinationCoords);
    props.setRadioButton("PLAN");
    props.setCurrentBuilding("PLAN");
    props.doSomething("PLAN");
  }

  // Music/Theater building
  function setToMusicTheaterbuilding(newLat, newLong) {
    destinationCoords = { lat: newLat, lng: newLong };
    setDirectionCoords(destinationCoords);
    props.setRadioButton("MTB");
    props.setCurrentBuilding("MTB");
    props.doSomething("MTB");
  }

  function setToInnovation(newLat, newLong) {
    destinationCoords = { lat: newLat, lng: newLong };
    setDirectionCoords(destinationCoords);
    props.setRadioButton("INNOVATION");
    props.setCurrentBuilding("INNOVATION");
    props.doSomething("INNOVATION");
  }

  function setToEagleBank(newLat, newLong) {
    destinationCoords = { lat: newLat, lng: newLong };
    setDirectionCoords(destinationCoords);
    props.setRadioButton("EagleBank");
    props.setCurrentBuilding("EagleBank");
    props.doSomething("EagleBank");
  }

  function setToLaski(newLat, newLong) {
    destinationCoords = { lat: newLat, lng: newLong };
    setDirectionCoords(destinationCoords);
    props.setRadioButton("Laski");
    props.setCurrentBuilding("Laski");
    props.doSomething("Laski");
  }

  function setToCenterForArtConcert(newLat, newLong) {
    destinationCoords = { lat: newLat, lng: newLong };
    setDirectionCoords(destinationCoords);
    props.setRadioButton("CFAC");
    props.setCurrentBuilding("CFAC");
    props.doSomething("CFAC");
  }

  function setToHarrisTheatre(newLat, newLong) {
    destinationCoords = { lat: newLat, lng: newLong };
    setDirectionCoords(destinationCoords);
    props.setRadioButton("HarrisTheatre");
    props.setCurrentBuilding("HarrisTheatre");
    props.doSomething("HarrisTheatre");
  }

  function setToHorizonHall(newLat, newLong) {
    destinationCoords = { lat: newLat, lng: newLong };
    setDirectionCoords(destinationCoords);
    props.setRadioButton("HorizonHall");
    props.setCurrentBuilding("HorizonHall");
    props.doSomething("HorizonHall");
  }

  function setToParkingDeckMasonPond(newLat, newLong) {
    destinationCoords = { lat: newLat, lng: newLong };
    setDirectionCoords(destinationCoords);
    props.setRadioButton("ParkingDeckMasonPond");
    props.setCurrentBuilding("ParkingDeckMasonPond");
    props.doSomething("ParkingDeckMasonPond");
  }

  function setToStudentUnion1(newLat, newLong) {
    destinationCoords = { lat: newLat, lng: newLong };
    setDirectionCoords(destinationCoords);
    props.setRadioButton("StudentUnion1");
    props.setCurrentBuilding("StudentUnion1");
    props.doSomething("StudentUnion1");
  }

  function setToFenwickLibrary(newLat, newLong) {
    destinationCoords = { lat: newLat, lng: newLong };
    setDirectionCoords(destinationCoords);
    props.setRadioButton("FenwickLibrary");
    props.setCurrentBuilding("FenwickLibrary");
    props.doSomething("FenwickLibrary");
  }

  function setToAquiaBuilding(newLat, newLong) {
    destinationCoords = { lat: newLat, lng: newLong };
    setDirectionCoords(destinationCoords);
    props.setRadioButton("AquiaBuilding");
    props.setCurrentBuilding("AquiaBuilding");
    props.doSomething("AquiaBuilding");
  }

  function setToKrugHall(newLat, newLong) {
    destinationCoords = { lat: newLat, lng: newLong };
    setDirectionCoords(destinationCoords);
    props.setRadioButton("KrugHall");
    props.setCurrentBuilding("KrugHall");
    props.doSomething("KrugHall");
  }

  function setToWestBuilding(newLat, newLong) {
    destinationCoords = { lat: newLat, lng: newLong };
    setDirectionCoords(destinationCoords);
    props.setRadioButton("WestBuilding");
    props.setCurrentBuilding("WestBuilding");
    props.doSomething("WestBuilding");
  }

  function setToEastBuilding(newLat, newLong) {
    destinationCoords = { lat: newLat, lng: newLong };
    setDirectionCoords(destinationCoords);
    props.setRadioButton("EastBuilding");
    props.setCurrentBuilding("EastBuilding");
    props.doSomething("EastBuilding");
  }

  function setToThompsonHall(newLat, newLong) {
    destinationCoords = { lat: newLat, lng: newLong };
    setDirectionCoords(destinationCoords);
    props.setRadioButton("ThompsonHall");
    props.setCurrentBuilding("ThompsonHall");
    props.doSomething("ThompsonHall");
  }

  function setToFinleyBuilding(newLat, newLong) {
    destinationCoords = { lat: newLat, lng: newLong };
    setDirectionCoords(destinationCoords);
    props.setRadioButton("FinleyBuilding");
    props.setCurrentBuilding("FinleyBuilding");
    props.doSomething("FinleyBuilding");
  }

  function setToLectureHall(newLat, newLong) {
    destinationCoords = { lat: newLat, lng: newLong };
    setDirectionCoords(destinationCoords);
    props.setRadioButton("LectureHall");
    props.setCurrentBuilding("LectureHall");
    props.doSomething("LectureHall");
  }

  function setToPetersonHall(newLat, newLong) {
    destinationCoords = { lat: newLat, lng: newLong };
    setDirectionCoords(destinationCoords);
    props.setRadioButton("PetersonHall");
    props.setCurrentBuilding("PetersonHall");
    props.doSomething("PetersonHall");
  }

  function setToRogers(newLat, newLong) {
    destinationCoords = { lat: newLat, lng: newLong };
    setDirectionCoords(destinationCoords);
    props.setRadioButton("Rogers");
    props.setCurrentBuilding("Rogers");
    props.doSomething("Rogers");
  }

  function setToWhitetop(newLat, newLong) {
    destinationCoords = { lat: newLat, lng: newLong };
    setDirectionCoords(destinationCoords);
    props.setRadioButton("Whitetop");
    props.setCurrentBuilding("Whitetop");
    props.doSomething("Whitetop");
  }

  function setToRAC(newLat, newLong) {
    destinationCoords = { lat: newLat, lng: newLong };
    setDirectionCoords(destinationCoords);
    props.setRadioButton("RAC");
    props.setCurrentBuilding("RAC");
    props.doSomething("RAC");
  }

  function setToWestPEModule(newLat, newLong) {
    destinationCoords = { lat: newLat, lng: newLong };
    setDirectionCoords(destinationCoords);
    props.setRadioButton("WestPEModule");
    props.setCurrentBuilding("WestPEModule");
    props.doSomething("WestPEModule");
  }

  function setToACGC(newLat, newLong) {
    destinationCoords = { lat: newLat, lng: newLong };
    setDirectionCoords(destinationCoords);
    props.setRadioButton("ACGC");
    props.setCurrentBuilding("ACGC");
    props.doSomething("ACGC");
  }

  function setToEnterpriseHall(newLat, newLong) {
    destinationCoords = { lat: newLat, lng: newLong };
    setDirectionCoords(destinationCoords);
    props.setRadioButton("EnterpriseHall");
    props.setCurrentBuilding("EnterpriseHall");
    props.doSomething("EnterpriseHall");
  }

  function setToArtandDesignBuilding(newLat, newLong) {
    destinationCoords = { lat: newLat, lng: newLong };
    setDirectionCoords(destinationCoords);
    props.setRadioButton("ArtandDesign");
    props.setCurrentBuilding("ArtandDesign");
    props.doSomething("ArtandDesign");
  }

  function setToResearchHall(newLat, newLong) {
    destinationCoords = { lat: newLat, lng: newLong };
    setDirectionCoords(destinationCoords);
    props.setRadioButton("ResearchHall");
    props.setCurrentBuilding("ResearchHall");
    props.doSomething("ResearchHall");
  }

  function setToNguyenEngineeringBuilding(newLat, newLong) {
    destinationCoords = { lat: newLat, lng: newLong };
    setDirectionCoords(destinationCoords);
    props.setRadioButton("EngineeringBuilding");
    props.setCurrentBuilding("EngineeringBuilding");
    props.doSomething("EngineeringBuilding");
  }

  function setToAFC(newLat, newLong) {
    destinationCoords = { lat: newLat, lng: newLong };
    setDirectionCoords(destinationCoords);
    props.setRadioButton("AFC");
    props.setCurrentBuilding("AFC");
    props.doSomething("AFC");
  }

  function setToPotomacHeights(newLat, newLong) {
    destinationCoords = { lat: newLat, lng: newLong };
    setDirectionCoords(destinationCoords);
    props.setRadioButton("PotomacHeights");
    props.setCurrentBuilding("PotomacHeights");
    props.doSomething("PotomacHeights");
  }

  function setToNottowayAnnex(newLat, newLong) {
    destinationCoords = { lat: newLat, lng: newLong };
    setDirectionCoords(destinationCoords);
    props.setRadioButton("NottowayAnnex");
    props.setCurrentBuilding("NottowayAnnex");
    props.doSomething("NottowayAnnex");
  }

  function setToLibertySquare(newLat, newLong) {
    destinationCoords = { lat: newLat, lng: newLong };
    setDirectionCoords(destinationCoords);
    props.setRadioButton("LibertySquare");
    props.setCurrentBuilding("LibertySquare");
    props.doSomething("LibertySquare");
  }

  function setToTaylor(newLat, newLong) {
    destinationCoords = { lat: newLat, lng: newLong };
    setDirectionCoords(destinationCoords);
    props.setRadioButton("Taylor");
    props.setCurrentBuilding("Taylor");
    props.doSomething("Taylor");
  }

  function setToParkingDeckShenandoah(newLat, newLong) {
    destinationCoords = { lat: newLat, lng: newLong };
    setDirectionCoords(destinationCoords);
    props.setRadioButton("ParkingDeckShenandoah");
    props.setCurrentBuilding("ParkingDeckShenandoah");
    props.doSomething("ParkingDeckShenandoah");
  }

  function setToTheHub(newLat, newLong) {
    destinationCoords = { lat: newLat, lng: newLong };
    setDirectionCoords(destinationCoords);
    props.setRadioButton("TheHub");
    props.setCurrentBuilding("TheHub");
    props.doSomething("TheHub");
  }

  function setToSouthsideDining(newLat, newLong) {
    destinationCoords = { lat: newLat, lng: newLong };
    setDirectionCoords(destinationCoords);
    props.setRadioButton("SouthsideDining");
    props.setCurrentBuilding("SouthsideDining");
    props.doSomething("SouthsideDining");
  }

  function setToSFC(newLat, newLong) {
    destinationCoords = { lat: newLat, lng: newLong };
    setDirectionCoords(destinationCoords);
    props.setRadioButton("SFC");
    props.setCurrentBuilding("SFC");
    props.doSomething("SFC");
  }

  function setToTidewater(newLat, newLong) {
    destinationCoords = { lat: newLat, lng: newLong };
    setDirectionCoords(destinationCoords);
    props.setRadioButton("Tidewater");
    props.setCurrentBuilding("Tidewater");
    props.doSomething("Tidewater");
  }

  function setToPiedmont(newLat, newLong) {
    destinationCoords = { lat: newLat, lng: newLong };
    setDirectionCoords(destinationCoords);
    props.setRadioButton("Piedmont");
    props.setCurrentBuilding("Piedmont");
    props.doSomething("Piedmont");
  }

  function setToSandbridge(newLat, newLong) {
    destinationCoords = { lat: newLat, lng: newLong };
    setDirectionCoords(destinationCoords);
    props.setRadioButton("Sandbridge");
    props.setCurrentBuilding("Sandbridge");
    props.doSomething("Sandbridge");
  }

  function setToBlueRidge(newLat, newLong) {
    destinationCoords = { lat: newLat, lng: newLong };
    setDirectionCoords(destinationCoords);
    props.setRadioButton("BlueRidge");
    props.setCurrentBuilding("BlueRidge");
    props.doSomething("BlueRidge");
  }

  function setToCommonwealth(newLat, newLong) {
    destinationCoords = { lat: newLat, lng: newLong };
    setDirectionCoords(destinationCoords);
    props.setRadioButton("Commonwealth");
    props.setCurrentBuilding("Commonwealth");
    props.doSomething("Commonwealth");
  }

  function setToNorthernNeck(newLat, newLong) {
    destinationCoords = { lat: newLat, lng: newLong };
    setDirectionCoords(destinationCoords);
    props.setRadioButton("NorthernNeck");
    props.setCurrentBuilding("NorthernNeck");
    props.doSomething("NorthernNeck");
  }

  function setToJHRAPH(newLat, newLong) {
    destinationCoords = { lat: newLat, lng: newLong };
    setDirectionCoords(destinationCoords);
    props.setRadioButton("JHRAPH");
    props.setCurrentBuilding("JHRAPH");
    props.doSomething("JHRAPH");
  }

  function setToEasternShore(newLat, newLong) {
    destinationCoords = { lat: newLat, lng: newLong };
    setDirectionCoords(destinationCoords);
    props.setRadioButton("EasternShore");
    props.setCurrentBuilding("EasternShore");
    props.doSomething("EasternShore");
  }

  function setToMertenHall(newLat, newLong) {
    destinationCoords = { lat: newLat, lng: newLong };
    setDirectionCoords(destinationCoords);
    props.setRadioButton("MertenHall");
    props.setCurrentBuilding("MertenHall");
    props.doSomething("MertenHall");
  }

  function setToParkingDeckRappahannock(newLat, newLong) {
    destinationCoords = { lat: newLat, lng: newLong };
    setDirectionCoords(destinationCoords);
    props.setRadioButton("ParkingDeckRappahannock");
    props.setCurrentBuilding("ParkingDeckRappahannock");
    props.doSomething("ParkingDeckRappahannock");
  }

  const [currentPosition, setCurrentPosition] = useState({ lat: 0, lng: 0 });
  //const [currentZoom, setCurrentZoom] = useState(2);
  const { latitude, longitude, error } = usePosition(true, {
    enableHighAccuracy: true,
  });

  useEffect(() => {
    if (latitude && longitude && !error) {
      // Fetch weather data here.
      setCurrentPosition({ lat: latitude, lng: longitude });
      // destinationCoords = { lat: latitude, lng: longitude };
      //setCurrentZoom(13);
      console.log(
        "Current user1 coords:" +
          currentPosition.lat +
          " " +
          currentPosition.lng
      );
      console.log(
        "Current dest coords: " +
          destinationCoords.lat +
          " " +
          destinationCoords.lng
      );
      fetchDirections();
    }
  }, [latitude, longitude, error]);

  const xsize = 30;
  const ysize = 30;

  const [directions, setDirections] = useState();

  const fetchDirections = (marker) => {
    const service = new window.google.maps.DirectionsService();
    service.route(
      {
        origin: currentPosition,
        destination: { lat: destinationCoords.lat, lng: destinationCoords.lng },
        travelMode: window.google.maps.TravelMode.WALKING,
      },
      (result, status) => {
        if (status === "OK" && result) {
          setDirections(result);
        }
      }
    );
    console.log("DIRECTIONS FETCHED.");
  };

  const map = (
    <GoogleMap
      zoom={18}
      center={center}
      mapContainerClassName="map-container"
      options={options}
    >
      {directions && <DirectionsRenderer directions={directions} />}

      <Marker
        //user marker
        position={currentPosition}
        icon={{
          url: "https://firebasestorage.googleapis.com/v0/b/fir-tutorial-23f99.appspot.com/o/user-svgrepo-com(1).svg?alt=media&token=0834b2f5-d902-4328-82e0-472cfe555251",
          scaledSize: new window.google.maps.Size(xsize, ysize),
        }}
        label={{
          text: "User",
          className: "labelPosition",
        }}
      />

      <Marker
        //marker over Johnson Center (30)
        position={{ lat: 38.83001, lng: -77.30747 }}
        onClick={() => {
          setToJc(38.83001, -77.30747);
          fetchDirections();
        }}
        icon={{
          url: "https://firebasestorage.googleapis.com/v0/b/fir-tutorial-23f99.appspot.com/o/toilet.svg?alt=media&token=03a15a63-d1c3-4765-831a-3b2bbb8858ca",
          scaledSize: new window.google.maps.Size(xsize, ysize),
        }}
        label={{
          text: "Johnson Center",
          color: "black",
          fontSize: "20px",
          className: "labelPosition",
        }}
      />

      <Marker
        //marker over College Hall (11)
        position={{ lat: 38.828950587431855, lng: -77.3079256857841 }}
        onClick={() => {
          setToCollegeHall(38.828950587431855, -77.3079256857841);
          fetchDirections();
        }}
        icon={{
          url: "https://firebasestorage.googleapis.com/v0/b/fir-tutorial-23f99.appspot.com/o/toilet.svg?alt=media&token=03a15a63-d1c3-4765-831a-3b2bbb8858ca",
          scaledSize: new window.google.maps.Size(xsize, ysize),
        }}
        label={{
          text: "College Hall",
          color: "black",
          fontSize: "20px",
          className: "labelPosition",
        }}
      />

      <Marker
        //marker over Buchanan Hall (4)
        position={{ lat: 38.8288288298916, lng: -77.3085572467376 }}
        onClick={() => {
          setToBuchananHall(38.8288288298916, -77.3085572467376);
          fetchDirections();
        }}
        icon={{
          url: "https://firebasestorage.googleapis.com/v0/b/fir-tutorial-23f99.appspot.com/o/toilet.svg?alt=media&token=03a15a63-d1c3-4765-831a-3b2bbb8858ca",
          scaledSize: new window.google.maps.Size(xsize, ysize),
        }}
        label={{
          text: "Buchanan Hall",
          className: "labelPosition",
        }}
      />

      <Marker
        //marker over de Laski Performing Arts Building (14)
        position={{ lat: 38.82986997438002, lng: -77.30854767763225 }}
        onClick={() => {
          setToLaski(38.82986997438002, -77.30854767763225);
          fetchDirections();
        }}
        icon={{
          url: "https://firebasestorage.googleapis.com/v0/b/fir-tutorial-23f99.appspot.com/o/toilet.svg?alt=media&token=03a15a63-d1c3-4765-831a-3b2bbb8858ca",
          scaledSize: new window.google.maps.Size(xsize, ysize),
        }}
        label={{
          text: "De Laski Performing Arts Building",
          className: "labelPosition",
        }}
      />

      <Marker
        //marker over Center for the Arts/Concert Hall (7)
        position={{ lat: 38.82959167471912, lng: -77.3092557914286 }}
        onClick={() => {
          setToCenterForArtConcert(38.82959167471912, -77.3092557914286);
          fetchDirections();
        }}
        icon={{
          url: "https://firebasestorage.googleapis.com/v0/b/fir-tutorial-23f99.appspot.com/o/toilet.svg?alt=media&token=03a15a63-d1c3-4765-831a-3b2bbb8858ca",
          scaledSize: new window.google.maps.Size(xsize, ysize),
        }}
        label={{
          text: "Concert Hall",
          className: "labelPosition",
        }}
      />

      <Marker
        //marker over Harris Theatre (27)
        position={{ lat: 38.83096528948536, lng: -77.30867607214178 }}
        onClick={() => {
          setToHarrisTheatre(38.83096528948536, -77.30867607214178);
          fetchDirections();
        }}
        icon={{
          url: "https://firebasestorage.googleapis.com/v0/b/fir-tutorial-23f99.appspot.com/o/toilet.svg?alt=media&token=03a15a63-d1c3-4765-831a-3b2bbb8858ca",
          scaledSize: new window.google.maps.Size(xsize, ysize),
        }}
        label={{
          text: "Harris Theatre",
          className: "labelPosition",
        }}
      />

      <Marker
        //marker over Horizon Hall (28)
        position={{ lat: 38.83136336873297, lng: -77.30772555421392 }}
        onClick={() => {
          setToHorizonHall(38.83136336873297, -77.30772555421392);
          fetchDirections();
        }}
        icon={{
          url: "https://firebasestorage.googleapis.com/v0/b/fir-tutorial-23f99.appspot.com/o/toilet.svg?alt=media&token=03a15a63-d1c3-4765-831a-3b2bbb8858ca",
          scaledSize: new window.google.maps.Size(xsize, ysize),
        }}
        label={{
          text: "horizon Hall",
          className: "labelPosition",
        }}
      />

      <Marker
        //marker over Parking Deck, Mason Pond (41)
        position={{ lat: 38.83046908836647, lng: -77.3095521384742 }}
        onClick={() => {
          setToParkingDeckMasonPond(38.83046908836647, -77.3095521384742);
          fetchDirections();
        }}
        icon={{
          url: "https://firebasestorage.googleapis.com/v0/b/fir-tutorial-23f99.appspot.com/o/toilet.svg?alt=media&token=03a15a63-d1c3-4765-831a-3b2bbb8858ca",
          scaledSize: new window.google.maps.Size(xsize, ysize),
        }}
        label={{
          text: "Mason Pond",
          className: "labelPosition",
        }}
      />

      <Marker
        //marker over Student Union Building 1 (53)
        position={{ lat: 38.83165170908107, lng: -77.30885476419722 }}
        onClick={() => {
          setToStudentUnion1(38.83165170908107, -77.30885476419722);
          fetchDirections();
        }}
        icon={{
          url: "https://firebasestorage.googleapis.com/v0/b/fir-tutorial-23f99.appspot.com/o/toilet.svg?alt=media&token=03a15a63-d1c3-4765-831a-3b2bbb8858ca",
          scaledSize: new window.google.maps.Size(xsize, ysize),
        }}
        label={{
          text: "Student Union Building 1",
          className: "labelPosition",
        }}
      />

      <Marker
        //marker over Fenwick Library (22)
        position={{ lat: 38.83227226367117, lng: -77.30728030763336 }}
        onClick={() => {
          setToFenwickLibrary(38.83227226367117, -77.30728030763336);
          fetchDirections();
        }}
        icon={{
          url: "https://firebasestorage.googleapis.com/v0/b/fir-tutorial-23f99.appspot.com/o/toilet.svg?alt=media&token=03a15a63-d1c3-4765-831a-3b2bbb8858ca",
          scaledSize: new window.google.maps.Size(xsize, ysize),
        }}
        label={{
          text: "Fenwick Library",
          className: "labelPosition",
        }}
      />

      <Marker
        //marker over Aquia Building (2)
        position={{ lat: 38.83207794918646, lng: -77.30942339247348 }}
        onClick={() => {
          setToAquiaBuilding(38.83207794918646, -77.30942339247348);
          fetchDirections();
        }}
        icon={{
          url: "https://firebasestorage.googleapis.com/v0/b/fir-tutorial-23f99.appspot.com/o/toilet.svg?alt=media&token=03a15a63-d1c3-4765-831a-3b2bbb8858ca",
          scaledSize: new window.google.maps.Size(xsize, ysize),
        }}
        label={{
          text: "Aquia Building",
          className: "labelPosition",
        }}
      />

      <Marker
        //marker over Krug Hall (33)
        position={{ lat: 38.83242270034001, lng: -77.30856776786723 }}
        onClick={() => {
          setToKrugHall(38.83242270034001, -77.30856776786723);
          fetchDirections();
        }}
        icon={{
          url: "https://firebasestorage.googleapis.com/v0/b/fir-tutorial-23f99.appspot.com/o/toilet.svg?alt=media&token=03a15a63-d1c3-4765-831a-3b2bbb8858ca",
          scaledSize: new window.google.maps.Size(xsize, ysize),
        }}
        label={{
          text: "Kruger Hall",
          className: "labelPosition",
        }}
      />

      <Marker
        //marker over West Building (58)
        position={{ lat: 38.8325229912846, lng: -77.30918467588901 }}
        onClick={() => {
          setToWestBuilding(38.8325229912846, -77.30918467588901);
          fetchDirections();
        }}
        icon={{
          url: "https://firebasestorage.googleapis.com/v0/b/fir-tutorial-23f99.appspot.com/o/toilet.svg?alt=media&token=03a15a63-d1c3-4765-831a-3b2bbb8858ca",
          scaledSize: new window.google.maps.Size(xsize, ysize),
        }}
        label={{
          text: "West Building",
          color: "black",
          fontSize: "20px",
          className: "labelPosition",
        }}
      />

      <Marker
        //marker over East Building (16)
        position={{ lat: 38.83299728189874, lng: -77.30824858501884 }}
        onClick={() => {
          setToEastBuilding(38.83299728189874, -77.30824858501884);
          fetchDirections();
        }}
        icon={{
          url: "https://firebasestorage.googleapis.com/v0/b/fir-tutorial-23f99.appspot.com/o/toilet.svg?alt=media&token=03a15a63-d1c3-4765-831a-3b2bbb8858ca",
          scaledSize: new window.google.maps.Size(xsize, ysize),
        }}
        label={{
          text: "East Building",
          color: "black",
          fontSize: "20px",
          className: "labelPosition",
        }}
      />

      <Marker
        //marker over Thompson Hall (56)
        position={{ lat: 38.832773717994215, lng: -77.3099196010994 }}
        onClick={() => {
          setToThompsonHall(38.832773717994215, -77.3099196010994);
          fetchDirections();
        }}
        icon={{
          url: "https://firebasestorage.googleapis.com/v0/b/fir-tutorial-23f99.appspot.com/o/toilet.svg?alt=media&token=03a15a63-d1c3-4765-831a-3b2bbb8858ca",
          scaledSize: new window.google.maps.Size(xsize, ysize),
        }}
        label={{
          text: "Thompson Hall",
          color: "black",
          fontSize: "20px",
          className: "labelPosition",
        }}
      />

      <Marker
        //marker over Finley Building (24)
        position={{ lat: 38.8330536951095, lng: -77.30891645500931 }}
        onClick={() => {
          setToFinleyBuilding(38.8330536951095, -77.30891645500931);
          fetchDirections();
        }}
        icon={{
          url: "https://firebasestorage.googleapis.com/v0/b/fir-tutorial-23f99.appspot.com/o/toilet.svg?alt=media&token=03a15a63-d1c3-4765-831a-3b2bbb8858ca",
          scaledSize: new window.google.maps.Size(xsize, ysize),
        }}
        label={{
          text: "Finley Building",
          color: "black",
          fontSize: "20px",
          className: "labelPosition",
        }}
      />

      <Marker
        //marker over Lecture Hall (34)
        position={{ lat: 38.83315398515414, lng: -77.30759144380826 }}
        onClick={() => {
          setToLectureHall(38.83315398515414, -77.30759144380826);
          fetchDirections();
        }}
        icon={{
          url: "https://firebasestorage.googleapis.com/v0/b/fir-tutorial-23f99.appspot.com/o/toilet.svg?alt=media&token=03a15a63-d1c3-4765-831a-3b2bbb8858ca",
          scaledSize: new window.google.maps.Size(xsize, ysize),
        }}
        label={{
          text: "Lecture Hall",
          color: "black",
          fontSize: "20px",
          className: "labelPosition",
        }}
      />

      <Marker
        //marker over Peterson Hall (45)
        position={{ lat: 38.834365234837, lng: -77.30921866424046 }}
        onClick={() => {
          setToPetersonHall(38.834365234837, -77.30921866424046);
          fetchDirections();
        }}
        icon={{
          url: "https://firebasestorage.googleapis.com/v0/b/fir-tutorial-23f99.appspot.com/o/toilet.svg?alt=media&token=03a15a63-d1c3-4765-831a-3b2bbb8858ca",
          scaledSize: new window.google.maps.Size(xsize, ysize),
        }}
        label={{
          text: "Peterson Hall",
          color: "black",
          fontSize: "20px",
          className: "labelPosition",
        }}
      />

      <Marker
        //marker over Rogers (82)
        position={{ lat: 38.83470788558369, lng: -77.31106402392987 }}
        onClick={() => {
          setToRogers(38.83470788558369, -77.31106402392987);
          fetchDirections();
        }}
        icon={{
          url: "https://firebasestorage.googleapis.com/v0/b/fir-tutorial-23f99.appspot.com/o/toilet.svg?alt=media&token=03a15a63-d1c3-4765-831a-3b2bbb8858ca",
          scaledSize: new window.google.maps.Size(xsize, ysize),
        }}
        label={{
          text: "Rogers",
          color: "black",
          fontSize: "20px",
          className: "labelPosition",
        }}
      />

      <Marker
        //marker over Whitetop (83)
        position={{ lat: 38.83394318713879, lng: -77.31150927059018 }}
        onClick={() => {
          setToWhitetop(38.83394318713879, -77.31150927059018);
          fetchDirections();
        }}
        icon={{
          url: "https://firebasestorage.googleapis.com/v0/b/fir-tutorial-23f99.appspot.com/o/toilet.svg?alt=media&token=03a15a63-d1c3-4765-831a-3b2bbb8858ca",
          scaledSize: new window.google.maps.Size(xsize, ysize),
        }}
        label={{
          text: "Whitetop",
          color: "black",
          fontSize: "20px",
          className: "labelPosition",
        }}
      />

      <Marker
        //marker over Recreation and Athletic Complex (RAC) (48)
        position={{ lat: 38.83069208230575, lng: -77.31229247562166 }}
        onClick={() => {
          setToRAC(38.83069208230575, -77.31229247562166);
          fetchDirections();
        }}
        icon={{
          url: "https://firebasestorage.googleapis.com/v0/b/fir-tutorial-23f99.appspot.com/o/toilet.svg?alt=media&token=03a15a63-d1c3-4765-831a-3b2bbb8858ca",
          scaledSize: new window.google.maps.Size(xsize, ysize),
        }}
        label={{
          text: "RAC",
          color: "black",
          fontSize: "20px",
          className: "labelPosition",
        }}
      />

      <Marker
        //marker over West PE Module (59)
        position={{ lat: 38.83138995407266, lng: -77.3145294377584 }}
        onClick={() => {
          setToWestPEModule(38.83138995407266, -77.3145294377584);
          fetchDirections();
        }}
        icon={{
          url: "https://firebasestorage.googleapis.com/v0/b/fir-tutorial-23f99.appspot.com/o/toilet.svg?alt=media&token=03a15a63-d1c3-4765-831a-3b2bbb8858ca",
          scaledSize: new window.google.maps.Size(xsize, ysize),
        }}
        label={{
          text: "West PE Module",
          color: "black",
          fontSize: "20px",
          className: "labelPosition",
        }}
      />

      <Marker
        //marker over Ángel Cabrera Global Center (79)
        position={{ lat: 38.829672425001036, lng: -77.31471719240689 }}
        onClick={() => {
          setToACGC(38.829672425001036, -77.31471719240689);
          fetchDirections();
        }}
        icon={{
          url: "https://firebasestorage.googleapis.com/v0/b/fir-tutorial-23f99.appspot.com/o/toilet.svg?alt=media&token=03a15a63-d1c3-4765-831a-3b2bbb8858ca",
          scaledSize: new window.google.maps.Size(xsize, ysize),
        }}
        label={{
          text: "Ángel Cabrera Global Center",
          color: "black",
          fontSize: "20px",
          className: "labelPosition",
        }}
      />

      <Marker
        //marker over EagleBank Arena (15)
        position={{ lat: 38.82691931313271, lng: -77.309621556692 }}
        onClick={() => {
          setToEagleBank(38.82691931313271, -77.309621556692);
          fetchDirections();
        }}
        icon={{
          url: "https://firebasestorage.googleapis.com/v0/b/fir-tutorial-23f99.appspot.com/o/toilet.svg?alt=media&token=03a15a63-d1c3-4765-831a-3b2bbb8858ca",
          scaledSize: new window.google.maps.Size(xsize, ysize),
        }}
        label={{
          text: "EagleBank Arena",
          color: "black",
          fontSize: "20px",
          className: "labelPosition",
        }}
      />

      <Marker
        //marker over Enterprise Hall (17)
        position={{ lat: 38.82911208416735, lng: -77.30597864535227 }}
        onClick={() => {
          setToEnterpriseHall(38.82911208416735, -77.30597864535227);
        }}
        icon={{
          url: "https://firebasestorage.googleapis.com/v0/b/fir-tutorial-23f99.appspot.com/o/toilet.svg?alt=media&token=03a15a63-d1c3-4765-831a-3b2bbb8858ca",
          scaledSize: new window.google.maps.Size(xsize, ysize),
        }}
        label={{
          text: "Enterpreise Hall",
          color: "black",
          fontSize: "20px",
          className: "labelPosition",
        }}
      />

      <Marker
        //marker over Art and Design Building (3)
        position={{ lat: 38.827950763850474, lng: -77.30633141443604 }}
        onClick={() => {
          setToArtandDesignBuilding(38.827950763850474, -77.30633141443604);
          fetchDirections();
        }}
        icon={{
          url: "https://firebasestorage.googleapis.com/v0/b/fir-tutorial-23f99.appspot.com/o/toilet.svg?alt=media&token=03a15a63-d1c3-4765-831a-3b2bbb8858ca",
          scaledSize: new window.google.maps.Size(xsize, ysize),
        }}
        label={{
          text: "Art and Design Building",
          color: "black",
          fontSize: "20px",
          className: "labelPosition",
        }}
      />

      <Marker
        //marker over Research Hall (50)
        position={{ lat: 38.82835264783128, lng: -77.3052275885632 }}
        onClick={() => {
          setToResearchHall(38.82835264783128, -77.3052275885632);
          fetchDirections();
        }}
        icon={{
          url: "https://firebasestorage.googleapis.com/v0/b/fir-tutorial-23f99.appspot.com/o/toilet.svg?alt=media&token=03a15a63-d1c3-4765-831a-3b2bbb8858ca",
          scaledSize: new window.google.maps.Size(xsize, ysize),
        }}
        label={{
          text: "Research Hall",
          color: "black",
          fontSize: "20px",
          className: "labelPosition",
        }}
      />

      <Marker
        //marker over Nguyen Engineering Building (37)
        position={{ lat: 38.82759320340156, lng: -77.30513275816176 }}
        onClick={() => {
          setToNguyenEngineeringBuilding(38.82759320340156, -77.30513275816176);
          fetchDirections();
        }}
        icon={{
          url: "https://firebasestorage.googleapis.com/v0/b/fir-tutorial-23f99.appspot.com/o/toilet.svg?alt=media&token=03a15a63-d1c3-4765-831a-3b2bbb8858ca",
          scaledSize: new window.google.maps.Size(xsize, ysize),
        }}
        label={{
          text: "Nguyen Engineering Building",
          color: "black",
          fontSize: "20px",
          className: "labelPosition",
        }}
      />

      <Marker
        //marker over Aquatic and Fitness Center (1)
        position={{ lat: 38.826354732360336, lng: -77.30423870557252 }}
        onClick={() => {
          setToAFC(38.826354732360336, -77.30423870557252);
          fetchDirections();
        }}
        icon={{
          url: "https://firebasestorage.googleapis.com/v0/b/fir-tutorial-23f99.appspot.com/o/toilet.svg?alt=media&token=03a15a63-d1c3-4765-831a-3b2bbb8858ca",
          scaledSize: new window.google.maps.Size(xsize, ysize),
        }}
        label={{
          text: "AFC",
          color: "black",
          fontSize: "20px",
          className: "labelPosition",
        }}
      />

      <Marker
        //marker over Potomac Heights (81)
        position={{ lat: 38.8262016273773, lng: -77.30249277554131 }}
        onClick={() => {
          setToPotomacHeights(38.8262016273773, -77.30249277554131);
          fetchDirections();
        }}
        icon={{
          url: "https://firebasestorage.googleapis.com/v0/b/fir-tutorial-23f99.appspot.com/o/toilet.svg?alt=media&token=03a15a63-d1c3-4765-831a-3b2bbb8858ca",
          scaledSize: new window.google.maps.Size(xsize, ysize),
        }}
        label={{
          text: "Potomac Heights",
          color: "black",
          fontSize: "20px",
          className: "labelPosition",
        }}
      />

      <Marker
        //marker over Nottoway Annex (40)
        position={{ lat: 38.82543626123796, lng: -77.30551103086971 }}
        onClick={() => {
          setToNottowayAnnex(38.82543626123796, -77.30551103086971);
          fetchDirections();
        }}
        icon={{
          url: "https://firebasestorage.googleapis.com/v0/b/fir-tutorial-23f99.appspot.com/o/toilet.svg?alt=media&token=03a15a63-d1c3-4765-831a-3b2bbb8858ca",
          scaledSize: new window.google.maps.Size(xsize, ysize),
        }}
        label={{
          text: "Nottoway Annex",
          color: "black",
          fontSize: "20px",
          className: "labelPosition",
        }}
      />

      <Marker
        //marker over Liberty Square (80)
        position={{ lat: 38.82780969237026, lng: -77.30248872287389 }}
        onClick={() => {
          setToLibertySquare(38.82780969237026, -77.30248872287389);
          fetchDirections();
        }}
        icon={{
          url: "https://firebasestorage.googleapis.com/v0/b/fir-tutorial-23f99.appspot.com/o/toilet.svg?alt=media&token=03a15a63-d1c3-4765-831a-3b2bbb8858ca",
          scaledSize: new window.google.maps.Size(xsize, ysize),
        }}
        label={{
          text: "Liberty Square",
          color: "black",
          fontSize: "20px",
          className: "labelPosition",
        }}
      />

      <Marker
        //marker over Taylor (94)
        position={{ lat: 38.82777721738339, lng: -77.30157520006485 }}
        onClick={() => {
          setToTaylor(38.82777721738339, -77.30157520006485);
          fetchDirections();
        }}
        icon={{
          url: "https://firebasestorage.googleapis.com/v0/b/fir-tutorial-23f99.appspot.com/o/toilet.svg?alt=media&token=03a15a63-d1c3-4765-831a-3b2bbb8858ca",
          scaledSize: new window.google.maps.Size(xsize, ysize),
        }}
        label={{
          text: "Taylor",
          color: "black",
          fontSize: "20px",
          className: "labelPosition",
        }}
      />

      <Marker
        //marker over Parking Deck, Shenandoah (43)
        position={{ lat: 38.82901003075146, lng: -77.30443979905971 }}
        onClick={() => {
          setToParkingDeckShenandoah(38.82901003075146, -77.30443979905971);
          fetchDirections();
        }}
        icon={{
          url: "https://firebasestorage.googleapis.com/v0/b/fir-tutorial-23f99.appspot.com/o/toilet.svg?alt=media&token=03a15a63-d1c3-4765-831a-3b2bbb8858ca",
          scaledSize: new window.google.maps.Size(xsize, ysize),
        }}
        label={{
          text: "Shenandoah Parking Deck",
          color: "black",
          fontSize: "20px",
          className: "labelPosition",
        }}
      />

      <Marker
        //marker over The Hub (55)
        position={{ lat: 38.83073593359202, lng: -77.30470801998514 }}
        onClick={() => {
          setToTheHub(38.83073593359202, -77.30470801998514);
          fetchDirections();
        }}
        icon={{
          url: "https://firebasestorage.googleapis.com/v0/b/fir-tutorial-23f99.appspot.com/o/toilet.svg?alt=media&token=03a15a63-d1c3-4765-831a-3b2bbb8858ca",
          scaledSize: new window.google.maps.Size(xsize, ysize),
        }}
        label={{
          text: "The Hub",
          color: "black",
          fontSize: "20px",
          className: "labelPosition",
        }}
      />

      <Marker
        //marker over Southside Dining (67)
        position={{ lat: 38.83136104731591, lng: -77.30548158714517 }}
        onClick={() => {
          setToSouthsideDining(38.83136104731591, -77.30548158714517);
          fetchDirections();
        }}
        icon={{
          url: "https://firebasestorage.googleapis.com/v0/b/fir-tutorial-23f99.appspot.com/o/toilet.svg?alt=media&token=03a15a63-d1c3-4765-831a-3b2bbb8858ca",
          scaledSize: new window.google.maps.Size(xsize, ysize),
        }}
        label={{
          text: "SouthSide Dining",
          color: "black",
          fontSize: "20px",
          className: "labelPosition",
        }}
      />

      <Marker
        //marker over Skyline Fitness Center (66)
        position={{ lat: 38.83163058289296, lng: -77.30575785465126 }}
        onClick={() => {
          setToSFC(38.83163058289296, -77.30575785465126);
          fetchDirections();
        }}
        icon={{
          url: "https://firebasestorage.googleapis.com/v0/b/fir-tutorial-23f99.appspot.com/o/toilet.svg?alt=media&token=03a15a63-d1c3-4765-831a-3b2bbb8858ca",
          scaledSize: new window.google.maps.Size(xsize, ysize),
        }}
        label={{
          text: "SFC",
          color: "black",
          fontSize: "20px",
          className: "labelPosition",
        }}
      />

      <Marker
        //marker over Tidewater (68)
        position={{ lat: 38.83200040911688, lng: -77.30584636754156 }}
        onClick={() => {
          setToTidewater(38.83200040911688, -77.30584636754156);
          fetchDirections();
        }}
        icon={{
          url: "https://firebasestorage.googleapis.com/v0/b/fir-tutorial-23f99.appspot.com/o/toilet.svg?alt=media&token=03a15a63-d1c3-4765-831a-3b2bbb8858ca",
          scaledSize: new window.google.maps.Size(xsize, ysize),
        }}
        label={{
          text: "Tidewater",
          color: "black",
          fontSize: "20px",
          className: "labelPosition",
        }}
      />

      <Marker
        //marker over Piedmont*/Housing Office (64)
        position={{ lat: 38.83231590907456, lng: -77.30604753322207 }}
        onClick={() => {
          setToPiedmont(38.83231590907456, -77.30604753322207);
          fetchDirections();
        }}
        icon={{
          url: "https://firebasestorage.googleapis.com/v0/b/fir-tutorial-23f99.appspot.com/o/toilet.svg?alt=media&token=03a15a63-d1c3-4765-831a-3b2bbb8858ca",
          scaledSize: new window.google.maps.Size(xsize, ysize),
        }}
        label={{
          text: "Piedmont Housing Office",
          color: "black",
          fontSize: "20px",
          className: "labelPosition",
        }}
      />

      <Marker
        //marker over Sandbridge (65)
        position={{ lat: 38.832609276501714, lng: -77.306273325646 }}
        onClick={() => {
          setToSandbridge(38.832609276501714, -77.306273325646);
          fetchDirections();
        }}
        icon={{
          url: "https://firebasestorage.googleapis.com/v0/b/fir-tutorial-23f99.appspot.com/o/toilet.svg?alt=media&token=03a15a63-d1c3-4765-831a-3b2bbb8858ca",
          scaledSize: new window.google.maps.Size(xsize, ysize),
        }}
        label={{
          text: "Sandbridge",
          color: "black",
          fontSize: "20px",
          className: "labelPosition",
        }}
      />

      <Marker
        //marker over Blue Ridge (60)
        position={{ lat: 38.832985265139584, lng: -77.30642669690984 }}
        onClick={() => {
          setToBlueRidge(38.832985265139584, -77.30642669690984);
          fetchDirections();
        }}
        icon={{
          url: "https://firebasestorage.googleapis.com/v0/b/fir-tutorial-23f99.appspot.com/o/toilet.svg?alt=media&token=03a15a63-d1c3-4765-831a-3b2bbb8858ca",
          scaledSize: new window.google.maps.Size(xsize, ysize),
        }}
        label={{
          text: "Blue Ridge",
          color: "black",
          fontSize: "20px",
          className: "labelPosition",
        }}
      />

      <Marker
        //marker over Commonwealth (69)
        position={{ lat: 38.833358935302456, lng: -77.30643267289767 }}
        onClick={() => {
          setToCommonwealth(38.833358935302456, -77.30643267289767);
          fetchDirections();
        }}
        icon={{
          url: "https://firebasestorage.googleapis.com/v0/b/fir-tutorial-23f99.appspot.com/o/toilet.svg?alt=media&token=03a15a63-d1c3-4765-831a-3b2bbb8858ca",
          scaledSize: new window.google.maps.Size(xsize, ysize),
        }}
        label={{
          text: "Commonwealth",
          color: "black",
          fontSize: "20px",
          className: "labelPosition",
        }}
      />

      <Marker
        //marker over Northern Neck (63)
        position={{ lat: 38.833824862939885, lng: -77.3067196692653 }}
        onClick={() => {
          setToNorthernNeck(38.833824862939885, -77.3067196692653);
          fetchDirections();
        }}
        icon={{
          url: "https://firebasestorage.googleapis.com/v0/b/fir-tutorial-23f99.appspot.com/o/toilet.svg?alt=media&token=03a15a63-d1c3-4765-831a-3b2bbb8858ca",
          scaledSize: new window.google.maps.Size(xsize, ysize),
        }}
        label={{
          text: "Northern Neck",
          color: "black",
          fontSize: "20px",
          className: "labelPosition",
        }}
      />

      <Marker
        //marker over Hampton Roads and Pilot House (62)
        position={{ lat: 38.833816505520545, lng: -77.30533833173483 }}
        onClick={() => {
          setToJHRAPH(38.833816505520545, -77.30533833173483);
          fetchDirections();
        }}
        icon={{
          url: "https://firebasestorage.googleapis.com/v0/b/fir-tutorial-23f99.appspot.com/o/toilet.svg?alt=media&token=03a15a63-d1c3-4765-831a-3b2bbb8858ca",
          scaledSize: new window.google.maps.Size(xsize, ysize),
        }}
        label={{
          text: "Hampton Roads and Pilot House",
          color: "black",
          fontSize: "20px",
          className: "labelPosition",
        }}
      />

      <Marker
        //marker over Eastern Shore (61)
        position={{ lat: 38.833490565401085, lng: -77.30427885926 }}
        onClick={() => {
          setToEasternShore(38.833490565401085, -77.30427885926);
          fetchDirections();
        }}
        icon={{
          url: "https://firebasestorage.googleapis.com/v0/b/fir-tutorial-23f99.appspot.com/o/toilet.svg?alt=media&token=03a15a63-d1c3-4765-831a-3b2bbb8858ca",
          scaledSize: new window.google.maps.Size(xsize, ysize),
        }}
        label={{
          text: "Eastern Shore",
          color: "black",
          fontSize: "20px",
          className: "labelPosition",
        }}
      />

      <Marker
        //marker over Merten Hall (35)
        position={{ lat: 38.8350805540662, lng: -77.30776036632929 }}
        onClick={() => {
          setToMertenHall(38.8350805540662, -77.30776036632929);
          fetchDirections();
        }}
        icon={{
          url: "https://firebasestorage.googleapis.com/v0/b/fir-tutorial-23f99.appspot.com/o/toilet.svg?alt=media&token=03a15a63-d1c3-4765-831a-3b2bbb8858ca",
          scaledSize: new window.google.maps.Size(xsize, ysize),
        }}
        label={{
          text: "Merten Hall",
          color: "black",
          fontSize: "20px",
          className: "labelPosition",
        }}
      />

      <Marker
        //marker over Parking Deck, Rappahannock River (42)
        position={{ lat: 38.83475670906414, lng: -77.30594451091201 }}
        onClick={() => {
          setToParkingDeckRappahannock(38.83475670906414, -77.30594451091201);
          fetchDirections();
        }}
        icon={{
          url: "https://firebasestorage.googleapis.com/v0/b/fir-tutorial-23f99.appspot.com/o/toilet.svg?alt=media&token=03a15a63-d1c3-4765-831a-3b2bbb8858ca",
          scaledSize: new window.google.maps.Size(xsize, ysize),
        }}
        label={{
          text: "Rappahannock Parking Deck",
          color: "black",
          fontSize: "20px",
          className: "labelPosition",
        }}
      />

      <Marker
        //marker over David King Hall (13)
        position={{ lat: 38.830648758483, lng: -77.30667615020967 }}
        onClick={() => {
          setToDavidKing(38.830648758483, -77.30667615020967);
          fetchDirections();
        }}
        icon={{
          url: "https://firebasestorage.googleapis.com/v0/b/fir-tutorial-23f99.appspot.com/o/toilet.svg?alt=media&token=03a15a63-d1c3-4765-831a-3b2bbb8858ca",
          scaledSize: new window.google.maps.Size(xsize, ysize),
        }}
        label={{
          text: "King Hall",
          color: "black",
          fontSize: "20px",
          className: "labelPosition ",
        }}
      />

      <Marker
        //marker over Music/Theater Building (36)
        position={{ lat: 38.82927875386428, lng: -77.30798736985247 }}
        onClick={() => {
          setToMusicTheaterbuilding(38.82927875386428, -77.30798736985247);
          fetchDirections();
        }}
        icon={{
          url: "https://firebasestorage.googleapis.com/v0/b/fir-tutorial-23f99.appspot.com/o/toilet.svg?alt=media&token=03a15a63-d1c3-4765-831a-3b2bbb8858ca",
          scaledSize: new window.google.maps.Size(xsize, ysize),
        }}
        label={{
          text: "Music Theater",
          className: "labelPosition ",
        }}
      />

      <Marker
        //marker over Innovation Hall (29)
        position={{ lat: 38.82844106386902, lng: -77.30750467535651 }}
        onClick={() => {
          setToInnovation(38.82844106386902, -77.30750467535651);
          fetchDirections();
        }}
        icon={{
          url: "https://firebasestorage.googleapis.com/v0/b/fir-tutorial-23f99.appspot.com/o/toilet.svg?alt=media&token=03a15a63-d1c3-4765-831a-3b2bbb8858ca",
          scaledSize: new window.google.maps.Size(xsize, ysize),
        }}
        label={{
          text: "Innovation Hall",
          className: "labelPosition ",
        }}
      />

      <Marker
        //marker over Planetary Hall (46)
        position={{ lat: 38.82988188455718, lng: -77.30620474562481 }}
        onClick={() => {
          setToPlanetary(38.82988188455718, -77.30620474562481);
          fetchDirections();
        }}
        icon={{
          url: "https://firebasestorage.googleapis.com/v0/b/fir-tutorial-23f99.appspot.com/o/toilet.svg?alt=media&token=03a15a63-d1c3-4765-831a-3b2bbb8858ca",
          scaledSize: new window.google.maps.Size(xsize, ysize),
        }}
        label={{
          text: "Planetary Hall",
          className: "labelPosition ",
        }}
      />
    </GoogleMap>
  );

  return map;
}

export default LoadMap;
