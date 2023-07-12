const skillsetWrapper = {
    flex: "1,100%",
    display: "flex",
    flexDirection: "column",
}

const header = {
    margin: "100px 725px 0px 0px",
    fontSize: "30px"
}

const Skillset = () => {
    
    return (
        <div style={skillsetWrapper}>
            <div style={header}>
                <h1>Proficiency.</h1>
            </div>
        </div>
    )
}

export default Skillset;