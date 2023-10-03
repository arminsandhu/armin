import Header from "./components/Header"

const contactWrapper = {
    flex: "1,100%",
    display: "flex",
    flexDirection: "column",
    margin: "100px 190px 50px 190px"

}


const Contact = () => {
    
    return (
        <div style={contactWrapper}>
            <div style={{ display:"flex", flexDirection:"row"}}>
                <div style={{ display:"flex", flex:"70%", flexDirection:"column", padding:"0px 20px 0px 0px", height:"100%"}}>
                <Header header={'Let\'s Chat'}/>
                    <div>
                        <text>If you have any questions, or just want to chat, please reach out!</text>
                    </div>
                    <div style={{ display:"flex", flexDirection:"row", paddingTop:"10px"}}>
                        <div style={{width:"100%", padding:"0px 10px 15px 0px"}}>
                            <input style={{ padding:"20px 25px 20px 25px", borderRadius:"15px", border:"2px solid #ccc", width:"100%"}} id="name" name="name" placeholder="Name"></input>
                        </div>
                        <div style={{width:"100%"}}>
                            <input style={{ padding:"20px 25px 20px 25px", borderRadius:"15px", border:"2px solid #ccc", width:"100%"}} id="email" name="email" placeholder="Email"></input>
                        </div>
                    </div>
                    <div>
                        <textarea style={{ height:'230px', padding:'20px 25px 20px 25px', borderRadius:"15px", border:"2px solid #ccc", resize: 'none', width:"100%"}} id="message" name="message" placeholder="Message..."></textarea>
                    </div>
                </div>
                <div style={{ display:"flex", flex:"30%"}}>
                    <div>
                        <img src="contact/falls.JPG" alt="alt" style={{ width:"100%", borderRadius:"15px" }}></img>
                    </div>
                </div>
            </div>
            <div>
                <button type="button" style={{ color:"white" , background:"#ccc", borderRadius:"15px", border:"2px solid #ccc", width:"100%", padding:"10px 0px 10px 0px", marginTop:"20px"}}>SEND</button>
            </div>
        </div>
    )
}

export default Contact;