import Season from "./Season";

const RuPaulsDragRace = (props) => {
  return ( 
    <>
    <div>{props.name}
    <Season name='Season 1' contestant={['BeBe Zahara Benet', 'Nina Flowers','Rebecca Glasscock']}/>
    <Season name='Season 2' contestant={['Tyra Sanchez', 'Raven','Jujubee']}/>
    <Season name='Season 3' contestant={['Alexis Mateo', 'Shangela', 'Delta Work']}/>
    <Season name='Season 4' contestant={['Sharon Needles', 'Chad Michaels', "Phi Phi O'Hara"]}/>
    </div>
    </>
   );
}
 
export default RuPaulsDragRace;