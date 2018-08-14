// Title, Image, Category, Description, Owner
class Thing extends React.Component {
  render () {
    return (
      <div>
        <div className='tile is-ancestor'>
          <div className='tile is-2'>
            <div>
              <img src={this.props.thing.image}
               alt={this.props.thing.title} />
            </div>
          </div>

          <div className='tile is-2'></div>
          <div className='tile'>
            <div>
              <h3 className='tile is-child box'><span>Title:</span>
                  {this.props.thing.title} </h3>

              <h3 className='tile is-child box'><span>Category:</span>
                  {this.props.thing.category} </h3>

              <p className='tile is-child box'><span>Description:</span>
                  {this.props.thing.description}</p>

              <p className='tile is-child box'><span>Owner:</span>
                  {this.props.thing.owner}</p>
            </div>
            <div className='tile'>
            </div>
          <div className='tile'>
            <button className='button-fulllist'
              onClick={() =>
              this.props.toggle('listIsVisible', 'ThingVisible')}
            >See Allllll The Things!</button>
          </div>
          </div>
        </div>
        <ThingForm />
      </div>
    )
  }
}
