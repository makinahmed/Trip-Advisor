import React, { useState } from 'react';
import cardImg from '../../assets/images/dubai-night-dub.png';
import './HotelSearch.css';



const HotelSearch = () => {

    const [canvasValue, setCanvasValue] = useState(false);

    console.log(canvasValue);

    const [rangeVal, setRangeVal] = useState(null);

    console.log(rangeVal, 'from state');

    // const rangeValue = (e) => {

    //     setRangeVal(e.target.value);
    //     console.log(e.target.value);

    // }


    const [value, setValue] = useState([1000, 4333])

    const onValueChange = (e) => {
        setValue(e.target.value)
    }

    return (
        <>

            <div className="hotel-search-section">



                <div className="search-banner">
                    <div className="container">
                        <div className="breadcrumb">
                            <a href="">Middle East</a>
                            <a href="">United Arab Emirates</a>
                            <a href="">Dubai</a>
                            <a href="">Dubai Hotels</a>
                        </div>
                        <div className="search-content w-75 ">

                            <div className="row">
                                <div className="col-lg-4"></div>
                                <div className="col-lg-8">
                                    <h1 className='title mt-3 mb-4'>dubai hotels and places to stay</h1>
                                    <div className="schedule mb-4">
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <h3>Check In</h3>
                                                <div className='d-flex align-items-center '>
                                                    <i class="fa-solid fa-calendar-days"></i>
                                                    <input className='ms-2' type="text" />
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="schedule-border">
                                                    <h3>Check Out</h3>
                                                    <div className='d-flex align-items-center'>
                                                        <i class="fa-solid fa-calendar-days"></i>
                                                        <input className='ms-2' type="text" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="schedule-border ">
                                                    <h3>Guest</h3>
                                                    <div className='d-flex align-items-center sm-schedule-border '>
                                                        <div>



                                                            <div className="row ">
                                                                <div className="col-lg-9">
                                                                    <input type="text" />
                                                                </div>
                                                                <div className="col-lg-3 ">
                                                                    <div className="search-submit mt-md-0 mt-lg-0 sm-3"><i class="fa-solid fa-magnifying-glass text-white d-block"></i>
                                                                    </div></div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>




                    </div>
                </div>


                <div className="container mt-5">

                    <div className="main-search-content">
                        <div className="row">
                            <div className="col-lg-3">







                                <div className="left-search-content big-screen-canvas">
                                    <div className="halal-rating">
                                        <h5>Halal Rating</h5>

                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                            <label class="form-check-label" for="flexRadioDefault1">
                                                10
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                            <label class="form-check-label" for="flexRadioDefault2">
                                                7 & up
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                                            <label class="form-check-label" for="flexRadioDefault3">
                                                5 & up
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" />
                                            <label class="form-check-label" for="flexRadioDefault4">
                                                3 & up
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault5" />
                                            <label class="form-check-label" for="flexRadioDefault5">
                                                1 & up
                                            </label>
                                        </div>


                                    </div>

                                    <div className="deals">

                                        <h5>Deals</h5>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabled" />
                                            <label class="form-check-label" for="flexCheckDisabled">
                                                Free Cancellation
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabled2" />
                                            <label class="form-check-label" for="flexCheckDisabled2">
                                                Reserve now, pay at stay
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabled3" />
                                            <label class="form-check-label" for="flexCheckDisabled3">
                                                Properties with special offers
                                            </label>
                                        </div>
                                    </div>
                                    <div className="property-type">

                                        <h5>Price</h5>
                                        {/* <TwoThumbInputRange onChange={onValueChange} value={value} min={1000} max={10000} /> */}

                                        <select class="form-select" aria-label="Default select example">
                                            <option selected>Price per night</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>

                                    </div>
                                    <div className="property-type">

                                        <h5>Property types</h5>
                                        <div class="form-check d-flex">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabled4" />
                                            <label class="form-check-label ms-2" for="flexCheckDisabled4">
                                                Hotels
                                            </label>

                                            <p className='ms-auto mb-0'>5/1</p>
                                        </div>
                                        <div class="form-check d-flex">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabled5" />
                                            <label class="form-check-label ms-2" for="flexCheckDisabled5">
                                                Condos
                                            </label>

                                            <p className='ms-auto mb-0'>113</p>
                                        </div>
                                        <div class="form-check d-flex">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabled6" />
                                            <label class="form-check-label ms-2" for="flexCheckDisabled6">
                                                B&Bs & Inns
                                            </label>

                                            <p className='ms-auto mb-0'>20</p>
                                        </div>
                                        <div class="form-check d-flex">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabled7" />
                                            <label class="form-check-label ms-2" for="flexCheckDisabled7">
                                                Speciality lodgings
                                            </label>

                                            <p className='ms-auto mb-0'>5</p>
                                        </div>

                                        <a href="" className='showMoreBtn'>Show More <i class="fa-solid fa-sort-down"></i></a>

                                    </div>
                                    <div className="popular">

                                        <h5>Popular</h5>
                                        <div class="form-check d-flex">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabled8" />
                                            <label class="form-check-label ms-2" for="flexCheckDisabled8">
                                                5 stars
                                            </label>

                                            <p className='ms-auto mb-0'>5/1</p>
                                        </div>
                                        <div class="form-check d-flex">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabled9" />
                                            <label class="form-check-label ms-2" for="flexCheckDisabled9">
                                                Breakfast included
                                            </label>

                                            <p className='ms-auto mb-0'>113</p>
                                        </div>
                                        <div class="form-check d-flex">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabled10" />
                                            <label class="form-check-label ms-2" for="flexCheckDisabled10">
                                                Beach front
                                            </label>

                                            <p className='ms-auto mb-0'>20</p>
                                        </div>
                                        <div class="form-check d-flex">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabled11" />
                                            <label class="form-check-label ms-2" for="flexCheckDisabled11">
                                                9 halal rating & up
                                            </label>

                                            <p className='ms-auto mb-0'>5</p>
                                        </div>

                                        <a href="" className='showMoreBtn'>Show More <i class="fa-solid fa-sort-down"></i></a>

                                    </div>
                                    <div className="amenities">

                                        <h5>Amenities</h5>
                                        <div class="form-check d-flex">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabled12" />
                                            <label class="form-check-label ms-2" for="flexCheckDisabled12">
                                                Free Wifi
                                            </label>

                                            <p className='ms-auto mb-0'>5/1</p>
                                        </div>
                                        <div class="form-check d-flex">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabled13" />
                                            <label class="form-check-label ms-2" for="flexCheckDisabled13">
                                                Breakfast included
                                            </label>

                                            <p className='ms-auto mb-0'>113</p>
                                        </div>
                                        <div class="form-check d-flex">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabled14" />
                                            <label class="form-check-label ms-2" for="flexCheckDisabled14">
                                                pool
                                            </label>

                                            <p className='ms-auto mb-0'>20</p>
                                        </div>
                                        <div class="form-check d-flex">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabled15" />
                                            <label class="form-check-label ms-2" for="flexCheckDisabled15">
                                                free parking
                                            </label>

                                            <p className='ms-auto mb-0'>5</p>
                                        </div>

                                        <a href="" className='showMoreBtn'>Show More <i class="fa-solid fa-sort-down"></i></a>

                                    </div>
                                    <div className="amenities">

                                        <h5>Distance from</h5>

                                        <input className='range-distance' type="range" min={0} max={1000} value={rangeVal} onChange={(e) => setRangeVal(e.target.value)} />


                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault16" />
                                            <label class="form-check-label" for="flexRadioDefault16">
                                                Burj Khalifa
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault17" />
                                            <label class="form-check-label" for="flexRadioDefault17">
                                                Dubai Mall
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault18" />
                                            <label class="form-check-label" for="flexRadioDefault18">
                                                Burj Al Arab
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault19" />
                                            <label class="form-check-label" for="flexRadioDefault19">
                                                Dubai Metro
                                            </label>
                                        </div>

                                        <a href="" className='showMoreBtn'>Show More <i class="fa-solid fa-sort-down"></i></a>

                                    </div>


                                    <div className="amenities">

                                        <h5>Neighborhoods</h5>
                                        <div class="form-check d-flex">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabled20" />
                                            <label class="form-check-label ms-2" for="flexCheckDisabled20">
                                                Deira
                                            </label>

                                            <p className='ms-auto mb-0'>5/1</p>
                                        </div>
                                        <div class="form-check d-flex">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabled21" />
                                            <label class="form-check-label ms-2" for="flexCheckDisabled21">
                                                Bur Dubai
                                            </label>

                                            <p className='ms-auto mb-0'>113</p>
                                        </div>
                                        <div class="form-check d-flex">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabled22" />
                                            <label class="form-check-label ms-2" for="flexCheckDisabled22">
                                                Dubai Marine
                                            </label>

                                            <p className='ms-auto mb-0'>20</p>
                                        </div>
                                        <div class="form-check d-flex">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabled23" />
                                            <label class="form-check-label ms-2" for="flexCheckDisabled23">
                                                Al Barsha
                                            </label>

                                            <p className='ms-auto mb-0'>5</p>
                                        </div>

                                        <a href="" className='showMoreBtn'>Show More <i class="fa-solid fa-sort-down"></i></a>

                                    </div>
                                    <div className="amenities">

                                        <h5>Traveler rating</h5>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios24" value="option1" checked />
                                            <label class="form-check-label" for="exampleRadios24">
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios25" value="option1" checked />
                                            <label class="form-check-label" for="exampleRadios25">
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star stroke-rating"></i>
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios26" value="option1" checked />
                                            <label class="form-check-label" for="exampleRadios26">
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star stroke-rating"></i>
                                                <i class="fa-solid fa-star stroke-rating"></i>
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios27" value="option1" checked />
                                            <label class="form-check-label" for="exampleRadios27">
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star"></i>
                                                <i class="fa-solid fa-star stroke-rating"></i>
                                                <i class="fa-solid fa-star stroke-rating"></i>
                                                <i class="fa-solid fa-star stroke-rating"></i>
                                            </label>
                                        </div>

                                    </div>
                                    <div className="amenities">

                                        <h5>Hotel Class</h5>
                                        <div class="form-check d-flex">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabled28" />
                                            <label class="form-check-label ms-2" for="flexCheckDisabled28">
                                                5 stars
                                            </label>

                                            <p className='ms-auto mb-0'>5/1</p>
                                        </div>
                                        <div class="form-check d-flex">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabled29" />
                                            <label class="form-check-label ms-2" for="flexCheckDisabled29">
                                                4 stars
                                            </label>

                                            <p className='ms-auto mb-0'>113</p>
                                        </div>
                                        <div class="form-check d-flex">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabled30" />
                                            <label class="form-check-label ms-2" for="flexCheckDisabled30">
                                                3 stars
                                            </label>

                                            <p className='ms-auto mb-0'>20</p>
                                        </div>
                                        <div class="form-check d-flex">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabled31" />
                                            <label class="form-check-label ms-2" for="flexCheckDisabled31">
                                                2 stars
                                            </label>

                                            <p className='ms-auto mb-0'>5</p>
                                        </div>

                                        <a href="" className='showMoreBtn'>Show More <i class="fa-solid fa-sort-down"></i></a>

                                    </div>
                                    <div className="amenities">

                                        <h5>Style</h5>
                                        <div class="form-check d-flex">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabled32" />
                                            <label class="form-check-label ms-2" for="flexCheckDisabled32">
                                                Budget
                                            </label>

                                            <p className='ms-auto mb-0'>5/1</p>
                                        </div>
                                        <div class="form-check d-flex">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabled33" />
                                            <label class="form-check-label ms-2" for="flexCheckDisabled33">
                                                Mid Range
                                            </label>

                                            <p className='ms-auto mb-0'>113</p>
                                        </div>
                                        <div class="form-check d-flex">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabled34" />
                                            <label class="form-check-label ms-2" for="flexCheckDisabled34">
                                                Luxury
                                            </label>

                                            <p className='ms-auto mb-0'>20</p>
                                        </div>
                                        <div class="form-check d-flex">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabled35" />
                                            <label class="form-check-label ms-2" for="flexCheckDisabled35">
                                                Family friendly
                                            </label>

                                            <p className='ms-auto mb-0'>5</p>
                                        </div>

                                        <a href="" className='showMoreBtn'>Show More <i class="fa-solid fa-sort-down"></i></a>

                                    </div>
                                    <div className="amenities">

                                        <h5>Brands</h5>
                                        <div class="form-check d-flex">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabled36" />
                                            <label class="form-check-label ms-2" for="flexCheckDisabled36">
                                                Accor live limitless (ALL)
                                            </label>

                                            <p className='ms-auto mb-0'>5/1</p>
                                        </div>
                                        <div class="form-check d-flex">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabled37" />
                                            <label class="form-check-label ms-2" for="flexCheckDisabled37">
                                                OYO
                                            </label>

                                            <p className='ms-auto mb-0'>113</p>
                                        </div>
                                        <div class="form-check d-flex">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabled38" />
                                            <label class="form-check-label ms-2" for="flexCheckDisabled38">
                                                Rotana
                                            </label>

                                            <p className='ms-auto mb-0'>20</p>
                                        </div>
                                        <div class="form-check d-flex">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabled39" />
                                            <label class="form-check-label ms-2" for="flexCheckDisabled39">
                                                The address + Resorts
                                            </label>

                                            <p className='ms-auto mb-0'>5</p>
                                        </div>

                                        <a href="" className='showMoreBtn'>Show More <i class="fa-solid fa-sort-down"></i></a>

                                    </div>
                                </div>

                            </div>
                            <div className="col-lg-9">
                                <div className='filter-icon d-none text-end m-3 d-flex align-items-center justify-content-end'>
                                    <span>Filter:</span>  <i onClick={() => setCanvasValue(!canvasValue)} class="fa-solid fa-filter ms-2 "></i>
                                </div>
                                <div className="right-content">
                                    {/* offcanvas start */}
                                    <div className={`left-search-content  ${canvasValue == true ? 'small-screen-canvas-show' : 'small-screen-canvas'} `}>
                                        <div className="halal-rating">
                                            <h5>Halal Rating</h5>

                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                <label class="form-check-label" for="flexRadioDefault1">
                                                    10
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                                <label class="form-check-label" for="flexRadioDefault2">
                                                    7 & up
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                                                <label class="form-check-label" for="flexRadioDefault3">
                                                    5 & up
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" />
                                                <label class="form-check-label" for="flexRadioDefault4">
                                                    3 & up
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault5" />
                                                <label class="form-check-label" for="flexRadioDefault5">
                                                    1 & up
                                                </label>
                                            </div>


                                        </div>

                                        <div className="deals">

                                            <h5>Deals</h5>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabled" />
                                                <label class="form-check-label" for="flexCheckDisabled">
                                                    Free Cancellation
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabled2" />
                                                <label class="form-check-label" for="flexCheckDisabled2">
                                                    Reserve now, pay at stay
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabled3" />
                                                <label class="form-check-label" for="flexCheckDisabled3">
                                                    Properties with special offers
                                                </label>
                                            </div>
                                        </div>
                                        <div className="property-type">

                                            <h5>Property types</h5>
                                            <div class="form-check d-flex">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabled4" />
                                                <label class="form-check-label ms-2" for="flexCheckDisabled4">
                                                    Hotels
                                                </label>

                                                <p className='ms-auto mb-0'>5/1</p>
                                            </div>
                                            <div class="form-check d-flex">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabled5" />
                                                <label class="form-check-label ms-2" for="flexCheckDisabled5">
                                                    Condos
                                                </label>

                                                <p className='ms-auto mb-0'>113</p>
                                            </div>
                                            <div class="form-check d-flex">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabled6" />
                                                <label class="form-check-label ms-2" for="flexCheckDisabled6">
                                                    B&Bs & Inns
                                                </label>

                                                <p className='ms-auto mb-0'>20</p>
                                            </div>
                                            <div class="form-check d-flex">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabled7" />
                                                <label class="form-check-label ms-2" for="flexCheckDisabled7">
                                                    Speciality lodgings
                                                </label>

                                                <p className='ms-auto mb-0'>5</p>
                                            </div>

                                            <a href="" className='showMoreBtn'>Show More <i class="fa-solid fa-sort-down"></i></a>

                                        </div>
                                        <div className="popular">

                                            <h5>Popular</h5>
                                            <div class="form-check d-flex">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabled8" />
                                                <label class="form-check-label ms-2" for="flexCheckDisabled8">
                                                    5 stars
                                                </label>

                                                <p className='ms-auto mb-0'>5/1</p>
                                            </div>
                                            <div class="form-check d-flex">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabled9" />
                                                <label class="form-check-label ms-2" for="flexCheckDisabled9">
                                                    Breakfast included
                                                </label>

                                                <p className='ms-auto mb-0'>113</p>
                                            </div>
                                            <div class="form-check d-flex">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabled10" />
                                                <label class="form-check-label ms-2" for="flexCheckDisabled10">
                                                    Beach front
                                                </label>

                                                <p className='ms-auto mb-0'>20</p>
                                            </div>
                                            <div class="form-check d-flex">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabled11" />
                                                <label class="form-check-label ms-2" for="flexCheckDisabled11">
                                                    9 halal rating & up
                                                </label>

                                                <p className='ms-auto mb-0'>5</p>
                                            </div>

                                            <a href="" className='showMoreBtn'>Show More <i class="fa-solid fa-sort-down"></i></a>

                                        </div>
                                        <div className="amenities">

                                            <h5>Amenities</h5>
                                            <div class="form-check d-flex">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabled12" />
                                                <label class="form-check-label ms-2" for="flexCheckDisabled12">
                                                    Free Wifi
                                                </label>

                                                <p className='ms-auto mb-0'>5/1</p>
                                            </div>
                                            <div class="form-check d-flex">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabled13" />
                                                <label class="form-check-label ms-2" for="flexCheckDisabled13">
                                                    Breakfast included
                                                </label>

                                                <p className='ms-auto mb-0'>113</p>
                                            </div>
                                            <div class="form-check d-flex">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabled14" />
                                                <label class="form-check-label ms-2" for="flexCheckDisabled14">
                                                    pool
                                                </label>

                                                <p className='ms-auto mb-0'>20</p>
                                            </div>
                                            <div class="form-check d-flex">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabled15" />
                                                <label class="form-check-label ms-2" for="flexCheckDisabled15">
                                                    free parking
                                                </label>

                                                <p className='ms-auto mb-0'>5</p>
                                            </div>

                                            <a href="" className='showMoreBtn'>Show More <i class="fa-solid fa-sort-down"></i></a>

                                        </div>
                                        <div className="amenities">

                                            <h5>Distance from job</h5>



                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault16" />
                                                <label class="form-check-label" for="flexRadioDefault16">
                                                    Burj Khalifa
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault17" />
                                                <label class="form-check-label" for="flexRadioDefault17">
                                                    Dubai Mall
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault18" />
                                                <label class="form-check-label" for="flexRadioDefault18">
                                                    Burj Al Arab
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault19" />
                                                <label class="form-check-label" for="flexRadioDefault19">
                                                    Dubai Metro
                                                </label>
                                            </div>

                                            <a href="" className='showMoreBtn'>Show More <i class="fa-solid fa-sort-down"></i></a>

                                        </div>


                                        <div className="amenities">

                                            <h5>Neighborhoods</h5>
                                            <div class="form-check d-flex">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabled20" />
                                                <label class="form-check-label ms-2" for="flexCheckDisabled20">
                                                    Deira
                                                </label>

                                                <p className='ms-auto mb-0'>5/1</p>
                                            </div>
                                            <div class="form-check d-flex">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabled21" />
                                                <label class="form-check-label ms-2" for="flexCheckDisabled21">
                                                    Bur Dubai
                                                </label>

                                                <p className='ms-auto mb-0'>113</p>
                                            </div>
                                            <div class="form-check d-flex">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabled22" />
                                                <label class="form-check-label ms-2" for="flexCheckDisabled22">
                                                    Dubai Marine
                                                </label>

                                                <p className='ms-auto mb-0'>20</p>
                                            </div>
                                            <div class="form-check d-flex">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabled23" />
                                                <label class="form-check-label ms-2" for="flexCheckDisabled23">
                                                    Al Barsha
                                                </label>

                                                <p className='ms-auto mb-0'>5</p>
                                            </div>

                                            <a href="" className='showMoreBtn'>Show More <i class="fa-solid fa-sort-down"></i></a>

                                        </div>
                                        <div className="amenities">

                                            <h5>Traveler rating</h5>
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios24" value="option1" checked />
                                                <label class="form-check-label" for="exampleRadios24">
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios25" value="option1" checked />
                                                <label class="form-check-label" for="exampleRadios25">
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star stroke-rating"></i>
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios26" value="option1" checked />
                                                <label class="form-check-label" for="exampleRadios26">
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star stroke-rating"></i>
                                                    <i class="fa-solid fa-star stroke-rating"></i>
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios27" value="option1" checked />
                                                <label class="form-check-label" for="exampleRadios27">
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star"></i>
                                                    <i class="fa-solid fa-star stroke-rating"></i>
                                                    <i class="fa-solid fa-star stroke-rating"></i>
                                                    <i class="fa-solid fa-star stroke-rating"></i>
                                                </label>
                                            </div>

                                        </div>
                                        <div className="amenities">

                                            <h5>Hotel Class</h5>
                                            <div class="form-check d-flex">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabled28" />
                                                <label class="form-check-label ms-2" for="flexCheckDisabled28">
                                                    5 stars
                                                </label>

                                                <p className='ms-auto mb-0'>5/1</p>
                                            </div>
                                            <div class="form-check d-flex">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabled29" />
                                                <label class="form-check-label ms-2" for="flexCheckDisabled29">
                                                    4 stars
                                                </label>

                                                <p className='ms-auto mb-0'>113</p>
                                            </div>
                                            <div class="form-check d-flex">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabled30" />
                                                <label class="form-check-label ms-2" for="flexCheckDisabled30">
                                                    3 stars
                                                </label>

                                                <p className='ms-auto mb-0'>20</p>
                                            </div>
                                            <div class="form-check d-flex">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabled31" />
                                                <label class="form-check-label ms-2" for="flexCheckDisabled31">
                                                    2 stars
                                                </label>

                                                <p className='ms-auto mb-0'>5</p>
                                            </div>

                                            <a href="" className='showMoreBtn'>Show More <i class="fa-solid fa-sort-down"></i></a>

                                        </div>
                                        <div className="amenities">

                                            <h5>Style</h5>
                                            <div class="form-check d-flex">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabled32" />
                                                <label class="form-check-label ms-2" for="flexCheckDisabled32">
                                                    Budget
                                                </label>

                                                <p className='ms-auto mb-0'>5/1</p>
                                            </div>
                                            <div class="form-check d-flex">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabled33" />
                                                <label class="form-check-label ms-2" for="flexCheckDisabled33">
                                                    Mid Range
                                                </label>

                                                <p className='ms-auto mb-0'>113</p>
                                            </div>
                                            <div class="form-check d-flex">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabled34" />
                                                <label class="form-check-label ms-2" for="flexCheckDisabled34">
                                                    Luxury
                                                </label>

                                                <p className='ms-auto mb-0'>20</p>
                                            </div>
                                            <div class="form-check d-flex">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabled35" />
                                                <label class="form-check-label ms-2" for="flexCheckDisabled35">
                                                    Family friendly
                                                </label>

                                                <p className='ms-auto mb-0'>5</p>
                                            </div>

                                            <a href="" className='showMoreBtn'>Show More <i class="fa-solid fa-sort-down"></i></a>

                                        </div>
                                        <div className="amenities">

                                            <h5>Brands</h5>
                                            <div class="form-check d-flex">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabled36" />
                                                <label class="form-check-label ms-2" for="flexCheckDisabled36">
                                                    Accor live limitless (ALL)
                                                </label>

                                                <p className='ms-auto mb-0'>5/1</p>
                                            </div>
                                            <div class="form-check d-flex">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabled37" />
                                                <label class="form-check-label ms-2" for="flexCheckDisabled37">
                                                    OYO
                                                </label>

                                                <p className='ms-auto mb-0'>113</p>
                                            </div>
                                            <div class="form-check d-flex">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabled38" />
                                                <label class="form-check-label ms-2" for="flexCheckDisabled38">
                                                    Rotana
                                                </label>

                                                <p className='ms-auto mb-0'>20</p>
                                            </div>
                                            <div class="form-check d-flex">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabled39" />
                                                <label class="form-check-label ms-2" for="flexCheckDisabled39">
                                                    The address + Resorts
                                                </label>

                                                <p className='ms-auto mb-0'>5</p>
                                            </div>

                                            <a href="" className='showMoreBtn'>Show More <i class="fa-solid fa-sort-down"></i></a>

                                        </div>
                                    </div>

                                    {/* offcanvas end */}

                                    <div className='d-flex justify-content-between'>
                                        <div>
                                            <p> <strong>1,760</strong> places to stay in Dubai</p>
                                        </div>
                                        <div className='d-flex align-items-center'>
                                            <p className='mb-0' style={{ width: '97px' }}>Sort By:</p> <select class="form-select sm-sorting d-inline-block" aria-label="Default select example">
                                                <option selected>Best Value</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                    </div>



                                    <div className="booking-content mt-5">
                                        <div className="booking-card mb-3">
                                            <div className="row">
                                                <div className="col-lg-3 col-12">
                                                    <div className="img-media">
                                                        <img src={cardImg} className='img-fluid' alt="" />

                                                        <div className="fav-area">
                                                            <i class="fa-solid fa-heart stroke-rating"></i>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="col-lg-3 col-6 mt-4">
                                                    <h5 className='ms-2'>Burj Al Arab</h5>
                                                    <div className='description mt-3'>

                                                        <div className='d-flex '>
                                                            <div><i class="fa-solid fa-wifi "></i></div>
                                                            <div>
                                                                <p className='mb-0'>Free wifi</p>
                                                            </div>
                                                        </div>
                                                        <div className='d-flex'>
                                                            <div><i class="fa-solid fa-square-parking "></i></div>
                                                            <div>
                                                                <p className='mb-0'>Free Parking</p>
                                                            </div>
                                                        </div>
                                                        <div className='d-flex'>
                                                            <div><i class="fa-solid fa-mug-saucer "></i></div>
                                                            <div>
                                                                <p className='mb-0'>Breakfast</p>
                                                            </div>
                                                        </div>
                                                        <div className='d-flex'>
                                                            <div><i class="fa-solid fa-person-swimming "></i></div>
                                                            <div>
                                                                <p className='mb-0'>Pool Access</p>
                                                            </div>
                                                        </div>
                                                        <div className='d-flex'>
                                                            <div><i class="fa-solid fa-umbrella-beach "></i></div>
                                                            <div>
                                                                <p className='mb-0'>Beachfront</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-2 col-6 mt-4">
                                                    <div className=' wrapper-card wrapper-booking text-center'>
                                                        <h5>Booking.com</h5>
                                                        <h6 className='serial-no'>AED2556</h6>
                                                        <button type='button' className='dealBtn'>view deal</button>
                                                        <p>Agoda.com</p>
                                                        <h6>AED2800</h6>
                                                        <p>Hotels.com</p>
                                                        <h6>AED2800</h6>

                                                    </div>
                                                </div>
                                                <div className="col-lg-4 mt-4 px-5">
                                                    <div className='wrapper-card wrapper-halal'>
                                                        <div className='d-flex '>
                                                            <h5>Halal Rating</h5>
                                                            <div className="rating-halal ms-4">
                                                                <p>9.5</p>
                                                            </div>


                                                        </div>

                                                        <div className='d-flex align-items-center'>
                                                            <div>
                                                                <i class="fa-solid fa-star"></i>
                                                                <i class="fa-solid fa-star"></i>
                                                                <i class="fa-solid fa-star"></i>
                                                                <i class="fa-solid fa-star"></i>
                                                                <i class="fa-solid fa-star"></i>
                                                            </div>
                                                            <h6 className='ms-2'><b>10,560</b></h6>
                                                        </div>

                                                        <blockquote >''one of the best hotel in dubai''</blockquote>
                                                        <p className='pb-3'>- <i>Zafar Ahmed</i></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="booking-card mb-3">
                                            <div className="row">
                                                <div className="col-lg-3 col-12">
                                                    <div className="img-media">
                                                        <img src={cardImg} className='img-fluid' alt="" />

                                                        <div className="fav-area">
                                                            <i class="fa-solid fa-heart stroke-rating"></i>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="col-lg-3 col-6 mt-4">
                                                    <h5 className='ms-2'>Burj Al Arab</h5>
                                                    <div className='description mt-3'>

                                                        <div className='d-flex '>
                                                            <div><i class="fa-solid fa-wifi "></i></div>
                                                            <div>
                                                                <p className='mb-0'>Free wifi</p>
                                                            </div>
                                                        </div>
                                                        <div className='d-flex'>
                                                            <div><i class="fa-solid fa-square-parking "></i></div>
                                                            <div>
                                                                <p className='mb-0'>Free Parking</p>
                                                            </div>
                                                        </div>
                                                        <div className='d-flex'>
                                                            <div><i class="fa-solid fa-mug-saucer "></i></div>
                                                            <div>
                                                                <p className='mb-0'>Breakfast</p>
                                                            </div>
                                                        </div>
                                                        <div className='d-flex'>
                                                            <div><i class="fa-solid fa-person-swimming "></i></div>
                                                            <div>
                                                                <p className='mb-0'>Pool Access</p>
                                                            </div>
                                                        </div>
                                                        <div className='d-flex'>
                                                            <div><i class="fa-solid fa-umbrella-beach "></i></div>
                                                            <div>
                                                                <p className='mb-0'>Beachfront</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-2 col-6 mt-4">
                                                    <div className=' wrapper-card wrapper-booking text-center'>
                                                        <h5>Booking.com</h5>
                                                        <h6 className='serial-no'>AED2556</h6>
                                                        <button type='button' className='dealBtn'>view deal</button>
                                                        <p>Agoda.com</p>
                                                        <h6>AED2800</h6>
                                                        <p>Hotels.com</p>
                                                        <h6>AED2800</h6>

                                                    </div>
                                                </div>
                                                <div className="col-lg-4 mt-4 px-5">
                                                    <div className='wrapper-card wrapper-halal'>
                                                        <div className='d-flex '>
                                                            <h5>Halal Rating</h5>
                                                            <div className="rating-halal ms-4">
                                                                <p>9.5</p>
                                                            </div>


                                                        </div>

                                                        <div className='d-flex align-items-center'>
                                                            <div>
                                                                <i class="fa-solid fa-star"></i>
                                                                <i class="fa-solid fa-star"></i>
                                                                <i class="fa-solid fa-star"></i>
                                                                <i class="fa-solid fa-star"></i>
                                                                <i class="fa-solid fa-star"></i>
                                                            </div>
                                                            <h6 className='ms-2'><b>10,560</b></h6>
                                                        </div>

                                                        <blockquote >''one of the best hotel in dubai''</blockquote>
                                                        <p className='pb-3'>- <i>Zafar Ahmed</i></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    );
};

export default HotelSearch;