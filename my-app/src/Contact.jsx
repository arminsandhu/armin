const contactWrapper = {
    flex: "1,100%",
    display: "flex",
    flexDirection: "column",
}

const header = {
    margin: "100px 750px 0px 0px",
    fontSize: "30px"
}

const Contact = () => {
    
    return (
        <div style={contactWrapper}>
            <div style={header}>
                <h1>Let's chat.</h1>
            </div>
        </div>
    )
}

export default Contact;