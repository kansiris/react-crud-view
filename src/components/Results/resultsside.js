import React, { Component } from 'react';

class resultsside extends Component {
    render() {
        return (
            <div>
                <div className="col-md-4" id="filterscol">
                    <div className="theiaStickySidebar" style="padding-top: 0px; padding-bottom: 1px; position: static; transform: none;">
                        <div id="filters_col">
                            <a data-toggle="collapse" href="#collapseFilters" aria-expanded="false" aria-controls="collapseFilters" id="filters_col_bt" style="color: unset;">Filters </a>
                            <div className="collapse show" id="collapseFilters">
                                <div className="filter_type">
                                    <h6 style="font-weight: 500;color: red;">Service Types</h6>
                                    <p id="selectedservices" style="display:none"></p>
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input1" id="Hotel"/>
                                        <label className="form-check-label" for="Hotel">Hotel</label>
                                    </div>
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input1" id="Banquet" />
                                        <label className="form-check-label" for="Banquet">Banquet Hall</label>
                                    </div>
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input1" id="Resort" />
                                        <label className="form-check-label" for="Resort">Resort</label>
                                    </div>
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input1" id="Convention" />
                                        <label className="form-check-label" for="Convention">Convention Hall</label>
                                    </div>
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input1" id="Function" />
                                        <label className="form-check-label" for="Function">Function Hall</label>
                                    </div>
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input1" id="Decorator" />
                                        <label className="form-check-label" for="Decorator">Decorator</label>
                                    </div>
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input1" id="Photography" />
                                        <label className="form-check-label" for="Photography">Photography</label>
                                    </div>
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input1" id="Catering" />
                                        <label className="form-check-label" for="Catering">Catering</label>
                                    </div>
                                </div><hr />
                                <div className="filter-type">
                                    <h6 style="font-weight: 500;color: red;">Budget</h6>
                                    <div className="slidecontainer">
                                        <input type="range" min="1" max="100" value="50" class="slider" id="myRange" />

                                    </div>
                                </div>
                                <hr />
                                <div className="filter_type">
                                    <h6 style="font-weight: 500;color: red;">Food Type</h6>
                                    <div className="form-check">
                                        <input type="checkbox" name="type" id="Veg"/>
                                        <label className="form-check-label" for="Veg">Vegetarian</label>
                                    </div>
                                    <div className="form-check">
                                        <input type="checkbox" name="type" id="NonVeg"/>
                                        <label className="form-check-label" for="NonVeg">Non-vegetarian</label>
                                    </div>
                                </div>
                                <hr />
                                <div className="filter_type">
                                    <h6 style="font-weight: 500;color: red;">Amenities</h6>
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input1" id="AC"/>
                                        <label className="form-check-label" for="AC">AC</label>
                                    </div>
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input1" id="WIFI"/>
                                        <label className="form-check-label" for="WIFI">WIFI</label>
                                    </div>
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input1" id="TV" />
                                        <label className="form-check-label" for="TV">TV</label>
                                    </div>
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input1" id="PARKING" />
                                        <label className="form-check-label" for="PARKING">PARKING FACILITY</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}
export default resultsside;