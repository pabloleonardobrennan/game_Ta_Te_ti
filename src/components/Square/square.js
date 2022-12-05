import './square.css'

const Square = (props) => {
  return ( 
    <button onClick={props.action} className="square m-2">{props.status}</button>
   );
}
 
export default Square;