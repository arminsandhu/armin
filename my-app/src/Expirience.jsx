
// const styles = StyleSheet.create({
//     bold: {fontWeight: 'bold'},
//     italic: {fontStyle: 'italic'},
//     underline: {textDecorationLine: 'underline'}
// })

const expirienceWrapper = {
    flex: "1,100%",
    display: "flex",
    flexDirection: "column",
}

const header = {
    margin: "100px 725px 0px 0px",
    fontSize: "30px"
}

const exp1 = {
    flex: "1,100%",
    display: "flex",
    flexDirection: "row",
    margin: "0px 0px 0px 100px",
}


const exp2 = {
    flex: "1,100%",
    margin: "60px 100px 0px 180px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end"
}

const exp3 = {
    flex: "1,100%",
    margin: "0px 150px 0px 0px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end"
}

const image1 = {
    // margin: "0px 50px 0px 0px",
    flex: "30%"
}

const image2 = {
    flex: "10%"
}

const image3 = {
    flex: "10%"
}


const img1 = {
    width: "600px",
    height: "300px"
}

const img2 = {

}

const img3 = {
    fontFamily: 'Oswald',
    fontWeight: "400px",
    fontSize: "100px"
}

const info1 = {
    flex: "60%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    textAlign: "left"
}

const info2 = {
    flex: "90%",
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
    margin: "0px 50px 0px 50px"
}

const info3 = {
    flex: "90%",
    display: "flex",
    flexDirection: "column",
    textAlign: "right",
    margin: "0px 50px 0px 0px"
}

const org = {
    margin: "0px 0px 0px 0px"
}

const position = {
    margin: "0px 0px 0px 0px"
}

const blurb1 = {
    margin: "0px 150px 0px 0px",
    fontFamily: 'Montserrat',
    textAlign: "justify",

}

const blurb2 = {
    margin: "0px 0px 0px 200px",
    fontFamily: 'Montserrat',
    textAlign: "justify",
}

const blurb3 = {
    margin: "0px 0px 0px 0px",
    fontFamily: 'Montserrat',
    textAlign: "justify",
}



const Expirience = () => {
    
    return (
        <div style={expirienceWrapper}>
            <div style={header}>
                <h1>Community.</h1>
            </div>
            <div style={exp1}>
                <div style={image1}>
                    <img style={img1} src="https://res.cloudinary.com/dp8wdd53c/image/upload/v1686774235/FullLogo_BlackText_sqwtxn.png" alt="Code the Change YYC"></img>
                </div>
                <div style={info1}>
                    <h1 style={org}>Code the Change YYC</h1>
                    <h4 style={position}>Co-President</h4>
                    <p style={blurb1}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                    </p>
                </div>
            </div>
            <div style={exp3}>
                <div style={info3}>
                    <h1 style={org}>Advanced Imagine and Artificial Intelligence Lab</h1>
                    <h4 style={position}>Undergraduate Researcher</h4>
                    <p style={blurb2}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                    </p>
                </div>
                <div style={image3}>
                    <span style={img3}>AI2Lab</span>
                </div>
            </div>
            <div style={exp2}>
                <div style={image2}>
                    <img style={img2} src="https://res.cloudinary.com/dp8wdd53c/image/upload/v1686774901/WISE_Logo_ltv8yc.webp" alt="Women In Science and Engineering"></img>
                </div>
                <div style={info2}>
                    <h1 style={org}>Women In Science and Engineering</h1>
                    <h4 style={position}>Professional Development Workshop Coordinator</h4>
                    <p style={blurb3}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Expirience;