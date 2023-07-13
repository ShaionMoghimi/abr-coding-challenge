import './FishTable.css';

export default function FishTable({fish}) {
  return (
    <div className='table'>
      {fish.map(f => {
        let imgSrc = '';
        let imgAlt = 'No Image';
        if (f.SpeciesIllustrationPhoto != undefined) {
          imgSrc = f.SpeciesIllustrationPhoto.src;
          imgAlt = f.SpeciesIllustrationPhoto.alt;
        }
        return (
        <div className='border-b'>
          <h3>{f.SpeciesName}</h3>
          <div className='flex'>
            <img src={imgSrc} alt={imgAlt} />
            <div className='desc'>
              <p>{`Calories: ${f.Calories} | Fat: ${f.FatTotal}`}</p>
              {/**NEVER ACTUALLY DO THE BELOW CODE. THERE ARE EXTERNAL LIBRARIES THAT YOU CAN USE TO DO THIS PROPERLY
               * I'M JUST NOT SURE IF I CAN USE THEM FOR THE PURPOSES OF THIS CODING CHALLENGE */}
              <div dangerouslySetInnerHTML={{__html:f.PhysicalDescription}} />
            </div>
          </div>
        </div>
        );
      })}
    </div>
  )
}