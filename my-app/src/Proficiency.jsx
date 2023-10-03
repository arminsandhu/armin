import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header"

const skillsetWrapper = {
    flex: "1,100%",
    display: "flex",
    flexDirection: "column",
    margin: "100px 190px 0px 190px",
}


const body = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: "50px 0px 0px 0px "
}

const Proficiency = () => {      
    return (
        <div style={skillsetWrapper}>
            <Header header={'Proficiency.'}/>
            <div style={body}>
                <div style={{display:"flex", flexDirection:"column", justifyContent:"space-between", marginBottom:"75px" }}>
                    <img style={{width:"100px"}} src="tech/python.png" alt="other"></img>
                    <img style={{width:"100px"}} src="tech/react.png" alt="other"></img>
                </div>
                <div style={{display:"flex", flexDirection:"column", justifyContent:"space-between", marginTop:"75px" }}>
                    <img style={{width:"100px"}} src="tech/ts.png" alt="other"></img>
                    <img style={{width:"100px", height:"160px", marginTop:"20px"}} src="tech/java-blue.png" alt="other"></img>
                </div>               
                <div style={{display:"flex", flexDirection:"column", justifyContent:"space-between", marginBottom:"75px" }}>
                    <img style={{width:"100px"}} src="tech/bootstrap.png" alt="other"></img>
                    <img style={{width:"100px"}} src="tech/c.png" alt="other"></img>
                </div>
                <div style={{display:"flex", flexDirection:"column", justifyContent:"space-between", marginTop:"75px" }}>
                    <img style={{width:"100px"}} src="tech/cpp.png" alt="other"></img>
                    <img style={{width:"100px"}} src="tech/docker.png" alt="other"></img>
                </div>
                <div style={{display:"flex", flexDirection:"column", justifyContent:"space-between", marginBottom:"75px" }}>
                    <img style={{width:"100px"}} src="tech/aws.png" alt="other"></img>
                    <img style={{width:"100px"}} src="tech/js.png" alt="other"></img>
                </div>
                <div style={{display:"flex", flexDirection:"column", justifyContent:"space-between", marginTop:"75px" }}>
                    <img style={{width:"100px"}} src="tech/mysql.png" alt="other"></img>
                    <img style={{width:"100px"}} src="tech/nextjs.png" alt="other"></img> 
                </div>
            </div>
        </div>
    )
}

export default Proficiency;