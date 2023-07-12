import React from 'react';

const projectsWrapper = {
    flex: "1,100%",
    display: "flex",
    flexDirection: "column",
}

const header = {
    margin: "100px 800px 0px 0px",
    fontSize: "30px"
}

const masonry = {
    display: '-webkit-box',
    display: '-webkit-flex',
    display: '-ms-flexbox',
    display: 'flex',
    '-webkit-box-orient': 'vertical',
    '-webkit-box-direction': 'normal',
    '-webkit-flex-direction': 'column',
    '-ms-flex-direction': 'column',
    flexDirection: 'column',
    '-webkit-flex-wrap': 'wrap',
    '-ms-flex-wrap': 'wrap',
    flexWrap: 'wrap',
    maxHeight: '1000px',
}

const num1 = {
    width: 'auto',
    background: '#975a58',
    color: 'white',
    margin: '6rem 1rem 1rem 200px',
    textAlign: 'center',
    fontWeight: '900',
    fontSize: '2rem',
    height: '334px',
    lineHeight: '334px',
    // borderRadius: '10%'
}

const num2 = {
    width: 'auto',
    background: '#975a58',
    color: 'white',
    margin: '0 1rem 1rem 200px',
    textAlign: 'center',
    fontWeight: '900',
    fontSize: '2rem',
    height: '500px',
    lineHeight: '500px',
    // borderRadius: '10%'
}

const num3 = {
    width: 'auto',
    background: '#975a58',
    color: 'white',
    margin: '0 150px 1rem 0',
    textAlign: 'center',
    fontWeight: '900',
    fontSize: '2rem',
    height: '500px',
    lineHeight: '500px',
    // borderRadius: '10%'
}

const num4 = {
    width: 'auto',
    background: '#975a58',
    color: 'white',
    margin: '0 150px 1rem 0',
    textAlign: 'center',
    fontWeight: '900',
    fontSize: '2rem',
    height: '334px',
    lineHeight: '334px',
    // borderRadius: '2%'

}

const Projects = () => {
    
    return (
        <div style={projectsWrapper}>
            <div style={header}>
                <h1>Portfolio.</h1>
            </div>
            <div style={masonry}>
                <div style={num1}>Lotion</div>
                <div style={num2}>The Last Show</div>
                <div style={num3}>Wordle</div>
                <div style={num4}>Database Manager</div>
            </div>
        </div>
    )
}

export default Projects;