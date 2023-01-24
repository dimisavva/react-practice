import Contestant from "./Contestant";

const Season = (props) => {
  return ( 
    <div>
      {props.name}
      {props.contestant?.map(contestant =>
        <Contestant name={contestant}/>)}
    </div>
   );
}
 
export default Season;