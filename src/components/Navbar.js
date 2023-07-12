import './Navbar.css';

export default function Navbar({regions, onClick}) {
  return (
    <div className='nav dblue text'>
      {regions.map(region => 
        <span className='navElement' onClick={() => onClick(region)}>{region}</span>
      )}
    </div>
  )
}