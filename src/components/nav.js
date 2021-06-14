
function Navegation (props){
   return(
   <nav className="navbar navbar-dark bg-dark">
         <h3>
            <a href="" className="text-white">
            {props.title} {props.userName} tasks {props.taskItems.filter(t => !t.done).length} to do
          </a>
         </h3> 
      </nav>
   )
}

export default Navegation;