const Box=props=>{
    const {color}=props;
    const style= {
        "backgroundColor":color,
        "height":"50px",
        "width":"50px",
        "margin":"10px",
        "color":"white"
    }

    return(
        <p>style={style}</p>

    )
}
export default Box;