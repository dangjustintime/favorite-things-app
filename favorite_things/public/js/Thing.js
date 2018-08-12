// Title, Image, Category, Description, Owner
class Thing extends React.Component {
  render () {
    return (
      <div>
        <div className='tile is-ancestor'>
          <div className='tile is-2'>
            <div>
              <img src="https://alternativemovieposters.com/wp-content/uploads/2017/05/lovell_aliens.jpg" alt="Aliens" />
            </div>
          </div>
          <div className='tile is-2'></div>
          <div className='tile'>
            <div>
              <h3 className='tile is-child box'><span>Title:</span> Aliens </h3>

              <p className='tile is-child box'><span>Category:</span> Movies </p>

              <p className='tile is-child box'><span>Description:</span> Ripley don mussed up again broh. Back to fight more aliens and stuff in this one broh.</p>

              <p className='tile is-child box'><span>Owner:</span> Newt </p>
            </div>
            <div className='tile'>
            </div>
          <div className='tile'>
            <button className='button is-fulllist'>See Full List</button>
          </div>
          </div>
        </div>
        <ThingForm />
      </div>
    )
  }
}
