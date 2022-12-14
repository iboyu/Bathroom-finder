import React from "react";
import "./One.css";
import Map from "./Map.js";
import { useState } from "react";
import { useEffect } from "react";
import { BiRss } from "react-icons/bi";
import {
  FaWheelchair,
  FaMale,
  FaFemale,
  FaRestroom,
  FaStar,
} from "react-icons/fa";
import { useGeolocated } from "react-geolocated";
import { AiFillStar } from "react-icons/ai";
import { TbBan } from "react-icons/tb";
import {
  BsGenderAmbiguous,
  BsGenderFemale,
  BsGenderMale,
} from "react-icons/bs";
import { GrElevator } from "react-icons/gr";

import { db } from "../Two/firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

function One() {
  const [currentBuildingDBCall, setCurrentBuildingDBCall] = useState("None");
  const usersCollectionsRef = collection(db, currentBuildingDBCall);
  const [buildings, setBuildings] = useState([]);
  const [isSending, setIsSending] = useState(false);
  const [radioButtons, setRadioButtons] = useState("");
  const [ratingInput, setRatingInput] = useState(0);
  const [bathroomSelected, setBathroomSelected] = useState(false);
  const [bathroomData, setBathroomData] = useState({});

  // Filter States
  const [filterAccess, setFilterAccess] = useState(false);
  const [filterGender, setFilterGender] = useState("");
  const [filterRating, setFilterRating] = useState(false);

  // const createUser = async () => {
  //     await addDoc(usersCollectionsRef, { name: newName, age: Number(newAge) });
  //     sendRequest();
  // };

  // Geolocation

  const updateRating = async (id, Rating, newRating) => {
    const currentUserDoc = doc(db, currentBuildingDBCall, id);

    let var1 = Number(Rating);
    let var2 = Number(newRating) * 2;
    console.log("Old rating:" + Rating);
    console.log("New rating:" + var2);
    let var3 = (var1 + var2) / 2;
    if (var3 > 10) {
      var3 = 10;
    }
    const newFields = { Rating: var3.toFixed(1) };
    await updateDoc(currentUserDoc, newFields);
    bathroomData.Rating = var3;
    sendRequest();
  };

  // const deleteUser = async (id) => {
  //     const currentUserDoc = doc(db, "users", id);
  //     await deleteDoc(currentUserDoc);
  //     sendRequest();
  // };

  //Use effect hooks are called as soon as the page renders.
  useEffect(() => {
    const getBuildings = async () => {
      const data = await getDocs(usersCollectionsRef);
      setBuildings(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      // console.log("set the buildings");
    };

    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("Latitude is :", position.coords.latitude);

      console.log("Longitude is :", position.coords.longitude);
    });
    console.log("REFRESHING!");
    getBuildings();
  }, [currentBuildingDBCall, filterAccess, filterGender, filterRating]);

  const sendRequest = async () => {
    if (isSending == true) {
      return;
    } else {
      setIsSending(true);
      const data = await getDocs(usersCollectionsRef);
      setBuildings(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setIsSending(false);
    }
  };

  const doSomething = async (id) => {
    await sendRequest();
  };

  //   function onMapClick(marker) {
  //     // console.log("HELLO");
  //     setRadioButtons();
  //     console.log(radioButtons);
  //   }

  function printBuildings() {
    buildings.map((elements) => {
      return console.log(elements.JC);
    });
    console.log("asdf");
  }

  const jcBathroom = buildings.map((elements) => {
    return <div>{elements}</div>;
  });

  function inputhandler(event) {
    if (isNaN(event.target.value) == true) {
      alert("Please enter a number.");
    } else {
      setRatingInput(event.target.value);
    }
  }

  function setRating(numbah) {
    var componentArray = [];
    if (numbah == 0) {
      numbah = 1;
    }
    for (var x = 0; x < numbah; x++) {
      componentArray.push(<AiFillStar style={{ color: "gold" }} />);
    }
    return componentArray;
  }

  return (
    <div>
      <div className="maindivone">
        <Map
          setRadioButton={setRadioButtons}
          update={sendRequest}
          setCurrentBuilding={setCurrentBuildingDBCall}
          doSomething={doSomething}
        />
        <div className="info-container">
          <div className="info-container-header">
            <text className="infoHeader">
              {radioButtons == "JC" ? (
                <text>Johnson Center</text>
              ) : radioButtons == "INNOVATION" ? (
                <text>Innovation Hall</text>
              ) : radioButtons == "KING" ? (
                <text>David King Hall</text>
              ) : radioButtons == "PLAN" ? (
                <text>Planetary Hall</text>
              ) : radioButtons == "College Hall" ? (
                <text>College Hall </text>
              ) : radioButtons == "Buchanan Hall" ? (
                <text>Buchanan Hall </text>
              ) : radioButtons == "MTB" ? (
                <text>Music/Theater building</text>
              ) : radioButtons == "Laski" ? (
                <text>De Laski Performing Arts Building</text>
              ) : radioButtons == "CFAC" ? (
                <text>Center for the Arts/Concert Hall</text>
              ) : radioButtons == "HarrisTheatre" ? (
                <text>Harris Theatre</text>
              ) : radioButtons == "HorizonHall" ? (
                <text>Horizon Hall</text>
              ) : radioButtons == "ParkingDeckMasonPond" ? (
                <text>Parking Deck, Mason Pond</text>
              ) : radioButtons == "StudentUnion1" ? (
                <text>Student Union Building 1</text>
              ) : radioButtons == "FenwickLibrary" ? (
                <text>Fenwick Library</text>
              ) : radioButtons == "AquiaBuilding" ? (
                <text>Aquia Building</text>
              ) : radioButtons == "KrugHall" ? (
                <text>Krug Hall</text>
              ) : radioButtons == "WestBuilding" ? (
                <text>West Building</text>
              ) : radioButtons == "EastBuilding" ? (
                <text>East Building</text>
              ) : radioButtons == "ThompsonHall" ? (
                <text>Thompson Hall</text>
              ) : radioButtons == "FinleyBuilding" ? (
                <text>Finley Building</text>
              ) : radioButtons == "LectureHall" ? (
                <text>Lecture Hall</text>
              ) : radioButtons == "PetersonHall" ? (
                <text>Peterson Hall</text>
              ) : radioButtons == "Rogers" ? (
                <text>Rogers</text>
              ) : radioButtons == "Whitetop" ? (
                <text>Whitetop</text>
              ) : radioButtons == "RAC" ? (
                <text>Recreation and Athletic Complex</text>
              ) : radioButtons == "WestPEModule" ? (
                <text>West PE Module</text>
              ) : radioButtons == "ACGC" ? (
                <text>Ángel Cabrera Global Center</text>
              ) : radioButtons == "EnterpriseHall" ? (
                <text>Enterprise Hall</text>
              ) : radioButtons == "ArtandDesign" ? (
                <text>Art and Design Building</text>
              ) : radioButtons == "ResearchHall" ? (
                <text>Research Hall</text>
              ) : radioButtons == "EngineeringBuilding" ? (
                <text>Nguyen Engineering Building</text>
              ) : radioButtons == "AFC" ? (
                <text>Aquatic and Fitness Center </text>
              ) : radioButtons == "PotomacHeights" ? (
                <text>Potomac Heights </text>
              ) : radioButtons == "NottowayAnnex" ? (
                <text>Nottoway Annex </text>
              ) : radioButtons == "LibertySquare" ? (
                <text>Liberty Square </text>
              ) : radioButtons == "Taylor" ? (
                <text>Taylor </text>
              ) : radioButtons == "ParkingDeckShenandoah" ? (
                <text>Parking Deck, Shenandoah </text>
              ) : radioButtons == "TheHub" ? (
                <text>The Hub </text>
              ) : radioButtons == "SouthsideDining" ? (
                <text>Southside Dining </text>
              ) : radioButtons == "SFC" ? (
                <text>Skyline Fitness Center </text>
              ) : radioButtons == "Tidewater" ? (
                <text>Tidewater </text>
              ) : radioButtons == "Piedmont" ? (
                <text>Piedmont/Housing Office </text>
              ) : radioButtons == "Sandbridge" ? (
                <text>Sandbridge</text>
              ) : radioButtons == "BlueRidge" ? (
                <text>Blue Ridge</text>
              ) : radioButtons == "Commonwealth" ? (
                <text>Commonwealth</text>
              ) : radioButtons == "NorthernNeck" ? (
                <text>Northern Neck</text>
              ) : radioButtons == "JHRAPH" ? (
                <text>Hampton Roads and Pilot House</text>
              ) : radioButtons == "EasternShore" ? (
                <text>Eastern Shore</text>
              ) : radioButtons == "MertenHall" ? (
                <text>Merten Hall</text>
              ) : radioButtons == "ParkingDeckRappahannock" ? (
                <text>Parking Deck, Rappahannock River</text>
              ) : radioButtons == "EagleBank" ? (
                <text>Eagle Bank Arena</text>
              ) : (
                <text>Select a Building</text>
              )}
            </text>
            {/* FILTERS -------------------------------------------------------------------------------------- */}
            <div className="filterBox">
              <div>
                <FaWheelchair />{" "}
                <input
                  className="checkBox"
                  onChange={() => {
                    setFilterAccess(!filterAccess);
                  }}
                  type={"checkbox"}
                ></input>
              </div>
              <div>
                <form>
                  <label>
                    <FaStar />
                  </label>{" "}
                  <select
                    onChange={(event) => {
                      setFilterRating(event.target.value);
                    }}
                  >
                    <option value={"All"}>All</option>
                    <option value={"Low"}>Low</option>
                    <option value={"Medium"}>Medium</option>
                    <option value={"High"}>High</option>
                  </select>
                </form>
              </div>
              <div>
                <form>
                  <FaRestroom />
                  <label></label>{" "}
                  <select
                    onChange={(event) => {
                      setFilterGender(event.target.value);
                    }}
                  >
                    <option value={""}>All</option>
                    <option value={"Male"}>Male</option>
                    <option value={"Female"}>Female</option>
                    <option value={"Gender Inclusive"}>Gender Inclusive</option>
                  </select>
                </form>
              </div>
            </div>
          </div>
          {/* BATHROOM LIST ------------------------------------------------------------------------------------------------------ */}
          {/* <div
            className="insideInfo"
            style={
              currentBuildingDBCall == "None"
                ? { backgroundColor: "#01172f", height: "100vh" }
                : {}
            }
          > */}
          <div className="cardSet">
            {currentBuildingDBCall != "None" && bathroomSelected != true ? (
              buildings.map((elements) => {
                const returnDiv = (
                  <div>
                    {/* FaRestroom */}
                    <div
                      className="bathroomCard"
                      onClick={() => {
                        setBathroomSelected(true);
                        setBathroomData(finalSet);
                      }}
                    >
                      <div style={{ width: "33%" }}>
                        {setRating(parseInt(elements.Rating / 2))}
                      </div>
                      <div style={{ width: "33%" }}>
                        {elements.Floor} <GrElevator />{" "}
                      </div>
                      <div style={{ width: "33%" }}>
                        {elements.Gender == "Female" ? (
                          <FaFemale style={{ color: "pink" }} />
                        ) : elements.Gender == "Male" ? (
                          <FaMale style={{ color: "navy" }} />
                        ) : (
                          <FaRestroom className="FaRestroom"/>
                        )}{" "}
                        {elements.Access == true ? <FaWheelchair /> : ""}
                      </div>
                      {/* <br />
                      Location: {elements.Desc} */}
                    </div>
                    {/* <form>
                      <input
                        onChange={inputhandler}
                        type="number"
                        placeholder="Rate"
                      ></input>
                    </form>
                    <button
                      type="button"
                      onClick={() => {
                        updateRating(elements.id, elements.Rating, ratingInput);
                      }}
                    >
                      Click
                    </button> */}
                  </div>
                );
                let finalSet = {};
                finalSet = {
                  Floor: elements.Floor,
                  Access: elements.Access,
                  Desc: elements.Desc,
                  Gender: elements.Gender,
                  Rating: elements.Rating,
                  id: elements.id,
                };
                if (filterRating == "High") {
                  if (elements.Rating >= "6.66" || elements.Rating == "10") {
                    if (filterGender == "Male") {
                      if (elements.Gender != "Male") {
                        return <div></div>;
                      } else {
                        return returnDiv;
                      }
                    } else if (filterGender == "Female") {
                      if (elements.Gender != "Female") {
                        return <div></div>;
                      } else {
                        return returnDiv;
                      }
                    } else if (filterGender == "Gender Inclusive") {
                      if (elements.Gender != "Gender Inclusive") {
                        return <div></div>;
                      } else {
                        return returnDiv;
                      }
                    } else if (filterGender == "") {
                      return returnDiv;
                    }
                  }
                } else if (filterRating == "Medium") {
                  if (elements.Rating < "6.66" && elements.Rating > "3.33") {
                    if (filterGender == "Male") {
                      if (elements.Gender != "Male") {
                        return <div></div>;
                      } else {
                        return returnDiv;
                      }
                    } else if (filterGender == "Female") {
                      if (elements.Gender != "Female") {
                        return <div></div>;
                      } else {
                        return returnDiv;
                      }
                    } else if (filterGender == "Gender Inclusive") {
                      if (elements.Gender != "Gender Inclusive") {
                        return <div></div>;
                      } else {
                        return returnDiv;
                      }
                    } else if (filterGender == "") {
                      return returnDiv;
                    }
                  }
                } else if (filterRating == "Low") {
                  if (
                    elements.Rating >= "0.0" &&
                    elements.Rating < "3.33" &&
                    elements.Rating != "10" &&
                    elements.Rating != "10.0"
                  ) {
                    if (filterGender == "Male") {
                      if (elements.Gender != "Male") {
                        return <div></div>;
                      } else {
                        return returnDiv;
                      }
                    } else if (filterGender == "Female") {
                      if (elements.Gender != "Female") {
                        return <div></div>;
                      } else {
                        return returnDiv;
                      }
                    } else if (filterGender == "Gender Inclusive") {
                      if (elements.Gender != "Gender Inclusive") {
                        return <div></div>;
                      } else {
                        return returnDiv;
                      }
                    } else if (filterGender == "") {
                      return returnDiv;
                    }
                  }
                } else {
                  if (filterGender == "Male") {
                    if (elements.Gender != "Male") {
                      return <div></div>;
                    } else {
                      return returnDiv;
                    }
                  } else if (filterGender == "Female") {
                    if (elements.Gender != "Female") {
                      return <div></div>;
                    } else {
                      return returnDiv;
                    }
                  } else if (filterGender == "Gender Inclusive") {
                    if (elements.Gender != "Gender Inclusive") {
                      return <div></div>;
                    } else {
                      return returnDiv;
                    }
                  } else if (filterGender == "") {
                    return returnDiv;
                  }
                }
              })
            ) : currentBuildingDBCall != "" && bathroomSelected == true ? (
              <div>
                <div
                  onClick={(elements) => {
                    setBathroomSelected(!bathroomSelected);
                  }}
                  className="bathroomCardBack"
                >
                  {/* {console.log(bathroomData)} */}
                  Floor: {bathroomData.Floor}
                  <br />
                  Accessible:{" "}
                  {bathroomData.Access == true ? (
                    <FaWheelchair />
                  ) : (
                    "Not ADA Compliant"
                  )}
                  <br />
                  Gender:{" "}
                  {bathroomData.Gender == "Female" ? (
                    <FaFemale />
                  ) : bathroomData.Gender == "Male" ? (
                    <FaMale />
                  ) : (
                    <FaRestroom />
                  )}
                  <br />
                  Location: {bathroomData.Desc}
                  <br />
                </div>
                <div className="ratingBox">
                  {/* Please rate this bathroom if you use it: Current Rating:{" "} */}
                  {/* <br /> */}
                  {/* {setRating(bathroomData.Rating/2)} */}
                  <div className="ratingCard">
                    Rating: {parseInt(bathroomData.Rating / 2)}/5
                    <form>
                      {/* <input
                      onChange={inputhandler}
                      type="number"
                      placeholder="Rate 1-10"
                      max={10}
                      min={0}
                    ></input> */}
                      Rate:{" "}
                      <select
                        onChange={(event) => {
                          setRatingInput(event.target.value);
                        }}
                      >
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                      </select>
                    </form>
                    <button
                      type="button"
                      onClick={() => {
                        updateRating(
                          bathroomData.id,
                          bathroomData.Rating,
                          ratingInput
                        );
                        doSomething();
                      }}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="welcomeDiv">
                <text style={{ fontSize: 20 }}>
                  Welcome to GMU Bathroom Finder.
                  <br />
                  Please select a building to <br />
                  display available bathrooms.
                  <br />
                  <br />
                  Created By:
                  <br />
                  Sean Pentiboyina, Gunter Thetard, RongLian Yuan
                </text>
              </div>
            )}
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}

export default One;
