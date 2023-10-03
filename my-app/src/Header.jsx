const headerWrapper  = {
    flex: "1,100%",
    display: "flex",
    flexDirection: "row",
    margin: "0px 0px 0px 190px"
};

const header = {
    display: 'block',
    fontSize: '1.5em',
    marginBlockStart: '0.83em',
    marginBlockEnd: '0.83em',
    marginInlineStart: '0px',
    marginInlineEnd: '0px',
    fontWeight: 'bold'
  };
  

const Header = () => {
    
    return (
        <div >
            <div style={headerWrapper}>
                <h2 style={header}>
                    Armin Sandhu.
                </h2>
            </div>
        </div>
    )
}

export default Header;