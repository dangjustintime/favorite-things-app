class ThingsList extends React.Component {
  render() {
    return (
      <table>
        <tbody>
        {this.props.things.map((thing,index)=>{
          return (
          <tr>
          <td onClick={
            () => {
              this.props.toggle('listIsVisible', 'ThingVisible'); this.props.getThing(thing)
            }}
          >
            <img src={thing.image} alt={thing.title} />
          </td>
          <td onClick={
            () => {
              this.props.toggle('listIsVisible', 'ThingVisible'); this.props.getThing(thing)
            }}
          >
            <h3> {thing.title} </h3>
          </td>
          <td onClick={
            () => {
              this.props.toggle('listIsVisible', 'ThingVisible'); this.props.getThing(thing)
            }}
          >
              <button className='button is-warning is-small'>Edit</button>
          </td>
          <td>
              <button
                className='button is-danger is-small'
                onClick={() => this.props.deleteThing(thing, index)}>Delete</button>
          </td>
          </tr>
        )
        })}
        </tbody>
      </table>
    )
  }
}
