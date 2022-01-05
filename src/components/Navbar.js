

const Navbar = ({elements}) => {
    return (
        <div style={{display:"flex",flexDirection:"row"}}>
           👽👾👉 Navbar 👈👾👽
           {
               elements.map((elemnet)=>{
                   return (<div>element</div>)
               })
           }
        </div>
    )
}

export default Navbar
