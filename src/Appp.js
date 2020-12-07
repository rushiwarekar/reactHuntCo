<label for="status">Choose Status:</label>
<select ref="status" id="status" name="status" className="dropDown">
  <option value="applied" className="dropDownCon">Applied</option>
  <option value="shortlisted" className="dropDownCon">Shortlisted</option>
  <option value="selected" className="dropDownCon">Selected</option>
  <option value="Rejected" className="dropDownCon">Rejected</option>
</select>




const statusfun = (da) =>{
da=data.status;
if(da == Applied){
  <span className = "blueA">{data.status}</span>
}
else if(da == Shortlisted){
  <span className = "orangeA">{data.status}</span>
}
else if(da == Selected){
  <span className = "greenA">{data.status}</span>
}
else if(da == Rejected){
  <span className = "redA">{data.status}</span>
}
} 
