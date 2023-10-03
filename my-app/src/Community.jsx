import "./App.css";
import { useState, useRef, useEffect } from "react";
import Header from "./components/Header"


const expirienceWrapper = {
    display: "flex",
    flexDirection: "column",
    margin: "100px 190px 50px 190px"

}

const exp1 = {
    display: "flex",
    flexDirection: "row",
    margin: "50px 0px 30px 0px"
}


const exp2 = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "right",
    margin: "30px 0px 30px 0px"
}

const exp3 = {
    display: "flex",
    flexDirection: "row",
    margin: "30px 0px 20px 0px"
}

const image1 = {
    flex: "30%",
    display: "flex",
    alignItems: "center",
}

const image2 = {
    flex: "30%"
}

const image3 = {
    flex: "30%",
    display: "flex",
    alignItems: "center"
}


const img1 = {
    width: "300px"
}

const img2 = {
    fontFamily: 'Oswald',
    fontWeight: "400px",
    fontSize: "100px",
    width: "600px",
    marginLeft: "50px"
}

const img3 = {
    
}


const info1 = {
    flex: "60%",
    display: "flex",
    flexDirection: "column",
}

const info2 = {
    flex: "90%",
    display: "flex",
    flexDirection: "column",
    textAlign: "right",
}

const info3 = {
    flex: "60%",
    display: "flex",
    flexDirection: "column",
}

const org = {
    display:'block', 
    fontWeight:"bold", 
    fontSize: "2em"
}

const position = {
    display:'block', 
    fontWeight:"bold", 
}

const time = {
    display:'block', 
    fontWeight:"bold",
    color:"gray" 
}

const blurb = {
    fontFamily: 'Montserrat',
    textAlign: "justify",

}



const Community = () => {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
        ([entry]) => {
            setIsIntersecting(entry.isIntersecting);
        },
        { rootMargin: "-50px" }
        );
        // console.log(isIntersecting);
        observer.observe(ref.current);

        return () => observer.disconnect();
    }, [isIntersecting]);


    useEffect(() => {
        if (isIntersecting) {
        ref.current.querySelectorAll("div").forEach((el) => {
            el.classList.add("slide-in");
        });
        } else {
        ref.current.querySelectorAll("div").forEach((el) => {
            el.classList.remove("slide-in");
        });
        }
    }, [isIntersecting]);



    return (
        <div style={expirienceWrapper}>
            <Header header={'Community.'}/>
            <main ref={ref}>
                <div style={exp1}>
                    <div style={image1}>
                        <img style={img1} src="ctc-logo.png" alt="Code the Change YYC"></img>
                    </div>
                    <div style={info1}>
                        <h1 style={org}>Code the Change YYC</h1>
                        <h4 style={position}>Co-President</h4>
                        <i style={time}>May 2023 - Current</i>
                        <p style={blurb}>
                        As Co-President of CtC, I am responsbile of managing the club, ensuring things run smooth, meeting with sponsers and business partners, and ensuring a high overall morale in the team. Joining back in 2022, CtC has thus been a highlight of my univeristy experience and I hope as Co-President, I can share this with other undergraduate students.
                        </p>
                    </div>
                </div>
                <div style={exp2}>
                    <div style={info2}>
                        <h1 style={org}>Advanced Imagine and Artificial Intelligence Lab</h1>
                        <h4 style={position}>Undergraduate Researcher</h4>
                        <i style={time}>May 2023 - Current</i>
                        <p style={blurb}>
                        At AI2Labs, I am involved in the study of Integrated Magnetic Resonance Imaging (iMRI). I will be working on a deep-learning-based software solution that will reduce follow-up MRI examination times while ensuring that the image quality of the scan is preserved.                    </p>
                    </div>
                    <div style={image2}>
                        <span style={img2}>AI2Lab</span>
                    </div>
                </div>
                <div style={exp3}>
                    <div style={image3}>
                        <img style={img3} src="https://res.cloudinary.com/dp8wdd53c/image/upload/v1686774901/WISE_Logo_ltv8yc.webp" alt="Women In Science and Engineering"></img>
                    </div>
                    <div style={info3}>
                        <h1 style={org}>Women In Science and Engineering</h1>
                        <h4 style={position}>Professional Development Workshop Coordinator</h4>
                        <i style={time}>May 2022 - May 2023</i>
                        <p style={blurb}>
                        Organized events (100+ attendees) which aid in student professional development while promoting inclusivity and diversity within the STEM field. Additionally, spearheaded the organization of the Women’s Prosperity and Confidence in the Workplace workshop, consisting of a panel of 4 industry professionals and 60+ attendees                    </p>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Community;