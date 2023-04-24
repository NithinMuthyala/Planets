import './index.css'

const PlanetItem = props => {
  const {eachPlanet} = props
  const {name, imageUrl, description} = eachPlanet

  return (
    <div className="item-conatiner">
      <img src={imageUrl} alt={`planet ${name}`} className="image" />
      <h1 className="planet-heading">{name}</h1>
      <p className="description">{description}</p>
    </div>
  )
}

export default PlanetItem
