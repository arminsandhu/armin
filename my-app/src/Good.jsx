import Header from "./components/Header"

const goodWrapper = {
    flex: "1,100%",
    display: "flex",
    flexDirection: "column",
    margin: "100px 190px 0px 190px"
}


const context = {
    display: "flex",
    flex: "30%",
    height: "100%",
    flexDirection: "column",
    position: "-webkit-sticky",
    position: "sticky",
    top: "20px",
    backgroundColor: "white",
}

const timeline = {
    display: "flex",
    flex: "70%",
    justifyContent: "center",
    alignItems: "center",
}


const img = {
    width: "300px",
    height: "auto",
    borderRadius: 10,
    overflow: "hidden",
    marginTop:"50px"
}

const infoParagraph = {
    margin: "20px 0px 0px 0px",
    fontFamily: 'Montserrat',
    textAlign: "center"
    // color: "#E3E7E7"
    
}

const elements = {
    display: "flex",
    flexDirection: "column",
    margin:"0px 0px 0px 100px",
}


const event = {
    width: "350px",
    height: "auto",
    borderRadius: 10,
    overflow: "hidden",
}

const line = {
    width: "100px",
    height: "auto",
    margin: "20px 0px 20px 0px"
}

const info = {
    display: "flex",
    flexDirection: "row",
    margin: "50px 0px 0px 0px",
}

const element = {
    justifyContent: "center",
    alignItems: "center",
}


const Good = () => {
    const goodData = [
        {
            image: "coding.jpg",
            alt: "Website",
            description: "August 2023 - I finished my personal website! From creating my first one in my second year ENSF 381 class to now, it's safe to say I've learned so much (emoji).",
        },
        {
            image: "presidents.jpg",
            alt: "Presidency",
            description: "May 2023 - I was voted to be Co President of Code the Change. Code the Change has helped me so much in my undergraduate career and I hope to help shine the same light on software for other undergraduate students.",
        },
        {
            image: "secondYear.JPG",
            alt: "Finishing second year",
            description: "April 2023 - I finished second year! This year really helped me realize my passion for software engineering. I love learning and implemnting software and can't wait to progress in my career.",
        },
        {
            image: "hackathon.JPG",
            alt: "Hack the Change 2022",
            description: "November 2022 - CtC held our annual Hack the Change. This was one of the biggest and best hackathons of the year, and I was so grateful to be apart of it with such an amazing team.",
        },
        {
            image: "van.jpeg",
            alt: "Vancouver - Summer 2022",
            description: "August 2022 - I went on a trip to vancouver with my bestfriends! It was great exploring such a beautiful place with some of the people I love the most.",
        },
    ]
    return (
        <div style={goodWrapper}>
            <Header header={'The good stuff.'}/>
            <div style={info}>
                <div style={context}>
                    <div >
                        <img style={img} src="the-good/orchid.JPG" alt="Armin Sandhu"></img>
                    </div>
                    <div >
                    <p style={infoParagraph}>A 3rd year SWE at University of Calgary. I am constantly seeking ways to utilize my technical abilities in order to solve complex problems and improve the world around us. I am excited to apply my skills and problem solving abilities to create innovative solutions that create a real impact!</p>
                    </div>
                </div>
                <div style={timeline}>
                    <div style={elements}>
                        <div style={element}>
                            <div style={{ display:"flex", justifyContent: "center" }}> 
                                <img style={event} src="the-good/coding.jpg" alt="Event"></img>  
                            </div>
                            <div style={{ textAlign:"center"}}>
                                <em style={{fontSize:"23px", fontWeight:"bold", marginTop:"20px"}}>August 2023</em>
                                <p style={infoParagraph}>August 2023 - I finished my personal website! From creating my first one in my second year ENSF 381 class to now, it's safe to say I've learned so much (emoji).</p> 
                            </div>
                            <div style={{ display:"flex", justifyContent:"center", alignItems: "center" }}>
                                <img style={line} src="the-good/line.png" alt="Timeline"></img>
                            </div>
                        </div>    
                        <div style={element}>
                            <div style={{ display: "flex", justifyContent:"center"}}>
                                <img style={event} src="the-good/presidents.jpg" alt="Event"></img> 
                            </div>
                            <div style={{ textAlign:"center"}}>
                                <em style={{fontSize:"23px", fontWeight:"bold"}}>May 2023</em>
                                <p style={infoParagraph}>May 2023 - I was voted to be Co President of Code the Change. Code the Change has helped me so much in my undergraduate career and I hope to help shine the same light on software for other undergraduate students.</p> 
                            </div>
                            <div style={{ display:"flex", justifyContent:"center", alignItems: "center" }}>
                                <img style={line} src="the-good/line.png" alt="Timeline"></img>
                            </div>
                        </div>
                        <div style={element}>
                            <div style={{ display: "flex", justifyContent:"center"}}>
                                <img style={event} src="the-good/secondYear.JPG" alt="Event"></img> 
                                {/* <p style={infoParagraph}>helloooo van</p>                            */}
                            </div>
                            <div style={{ textAlign:"center"}}>
                                <em style={{fontSize:"23px", fontWeight:"bold"}}>April 2023</em>
                                <p style={infoParagraph}>April 2023 - I finished second year! This year really helped me realize my passion for software engineering. I love learning and implemnting software and can't wait to progress in my career.</p> 
                            </div>
                            <div style={{ display:"flex", justifyContent:"center", alignItems: "center" }}>
                                <img style={line} src="the-good/line.png" alt="Timeline"></img>
                            </div>
                        </div>
                        <div style={element}>
                            <div style={{ display: "flex", justifyContent:"center"}}>
                                <img style={event} src="the-good/hackathon.JPG" alt="Event"></img> 
                                {/* <p style={infoParagraph}>helloooo hackathon</p>                            */}
                            </div>
                            <div style={{ textAlign:"center"}}>
                                <em style={{fontSize:"23px", fontWeight:"bold"}}>November 2022</em>
                                <p style={infoParagraph}>November 2022 - CtC held our annual Hack the Change. This was one of the biggest and best hackathons of the year, and I was so grateful to be apart of it with such an amazing team.</p> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Good;