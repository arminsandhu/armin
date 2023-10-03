import { useState, useRef, useEffect } from "react";

const headerStyling = {
    fontSize: "30px",
    // marginLeft: "190px"
}

// const HEADER_CONTAINER = "font-size-"
// uncomment this out when you want to use tailwind css


const Header = ( {header} ) => {

    const [isHeaderIntersecting, setHeaderIsIntersecting] = useState(false);
    const headerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
        ([entry]) => {
            setHeaderIsIntersecting(entry.isIntersecting);
        },
        { rootMargin: "-50px" }
        );
        console.log(isHeaderIntersecting);
        observer.observe(headerRef.current);

        return () => observer.disconnect();
    }, [isHeaderIntersecting]);

    useEffect(() => {
        if (isHeaderIntersecting) {
        headerRef.current.querySelectorAll("h1").forEach((el) => {
            el.classList.add("slide-in");
        });
        } 
    }, [isHeaderIntersecting]);
    
    
    return (
        <header ref={headerRef} style={headerStyling}>
            <h1 style={{display:'block', fontWeight:"bold", fontSize: "2em"}}>{header}.</h1>
        </header>   
    )


}
export default Header;