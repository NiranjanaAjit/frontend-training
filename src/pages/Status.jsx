const Status = (props) => {
    let color =""
    if(props.status=="Active"){
        color = "#d3f4be"
    }
    else if(props.status=="Inactive"){
        color="#ffbfbf"
    }
    else if(props.status=="Probation"){
        color="#f5ecb8"
    }
    return       <div className="statusDiv">
    <div     style={{backgroundColor: color}}>
    {props.status}
    </div>

  </div>
}

export default Status;