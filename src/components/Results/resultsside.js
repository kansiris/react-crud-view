import React,{Component} from 'react';
class resultsside extends Component{
    render(){
return(

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
                        <input type="checkbox" className="form-check-input1" id="materialChecked2" checked/>
                        <label className="form-check-label" for="materialChecked2">Hotel</label>

                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input1" id="materialChecked2" checked/>
                        <label className="form-check-label" for="materialChecked2">Banquet Hall</label>

                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input1" id="materialChecked2" checked/>
                        <label className="form-check-label" for="materialChecked2">Resort</label>

                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input1" id="materialChecked2" checked/>
                        <label className="form-check-label" for="materialChecked2">Convention</label>

                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input1" id="materialChecked2" checked/>
                        <label className="form-check-label" for="materialChecked2">Function</label>

                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input1" id="materialChecked2" checked/>
                        <label className="form-check-label" for="materialChecked2">Decorator</label>

                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input1" id="materialChecked2" checked/>
                        <label className="form-check-label" for="materialChecked2">Photography</label>

                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input1" id="materialChecked2" checked/>
                        <label className="form-check-label" for="materialChecked2">Catering</label>

                    </div>
                </div><hr />
                <div className="filter-type">
                    <h6 style="font-weight: 500;color: red;">Budget</h6>
                    <div className="slidecontainer">
                        <input type="range" min="1" max="100" value="50" class="slider" id="myRange"/>

                    </div>

                </div><hr />
                <div className="filter_type">
                    <h6 style="font-weight: 500;color: red;">Food Type</h6>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input1" id="materialChecked2" checked/>
                        <label className="form-check-label" for="materialChecked2">Vegetarian</label>

                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input1" id="materialChecked2" checked/>
                        <label className="form-check-label" for="materialChecked2">Non-vegetarian</label>

                    </div>

                </div><hr />
                <div className="filter_type">
                    <h6 style="font-weight: 500;color: red;">Amenities</h6>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input1" id="materialChecked2" checked/>
                        <label className="form-check-label" for="materialChecked2">AC</label>

                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input1" id="materialChecked2" checked/>
                        <label className="form-check-label" for="materialChecked2">WIFI</label>

                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input1" id="materialChecked2" checked/>
                        <label className="form-check-label" for="materialChecked2">TV</label>

                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input1" id="materialChecked2" checked/>
                        <label className="form-check-label" for="materialChecked2">PARKING FACILITY</label>

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