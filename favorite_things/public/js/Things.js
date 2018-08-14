class Things extends React.Component {
  constructor(props){
    this.state ={
      listIsVisible: true,
      addIsVisible: false,
      ThingVisible: false,
      editVisible: false,
      things: [],
      thing: {}
    }
    this.toggle = this.toggle.bind(this)
    this.getThings = this.getThings.bind(this)
    this.getThing = this.getThing.bind(this)
    this.deleteThing = this.deleteThing.bind(this)
  }
  componentDidMount(){
    this.getThings()
  }

  deleteThing(thing,index){
    fetch('/things/' + thing.id,
  {
    method: 'DELETE'
  })
  .then(data => {
    this.setState({
      people: [
        ...this.state.things.slice(0,index),
        ...this.state.things.slice(index + 1)
      ]
    })
  })
  }

  getThings(){
    fetch('/things')
      .then(response => response.json())
      .then(JSONdata => {
        this.setState({
          things: JSONdata
        })
      }).catch(error=>console.log(error))
  }

  getThing(thing){
    this.setState({
      [st1]: !this.state[st1],
      [st2]: !this.state[st2]
    })
  }

    render () {
      return (
        <div className='things-column'>
          <h2> Things </h2>
          <button className='button is-success' onClick={() =>
          this.toggle('addIsVisible' , 'listIsVisible')}
            >Add a Thing</button>

          {this.state.listIsVisible
            ? <ThingsList
            toggle={this.toggle}
            things={this.state.things}
            getThing={this.getThing}
            deleteThing={this.deleteThing}
            /> : ''}

          {this.state.addIsVisible
            ? <ThingsForm
            toggle={this.toggle}
            /> : ''}

          {this.state.addIsVisible
            ? <Thing
            toggle={this.toggle}
            thing={this.state.thing}
            /> : ''}

      </div>
      )
    }
  }

/*
<table>
  <tbody>
    <tr>
      <td>
      <img src="https://alternativemovieposters.com/wp-content/uploads/2017/05/lovell_aliens.jpg" alt="Aliens" />
    </td>
    <td className='thing'>
      <h3> Aliens </h3></td>
    <td>
      <button className='button is-warning is-small'>Edit</button>
    </td>
    <td>
      <button className='button is-danger is-small'>Delete</button>
    </td>
  </tr>
</tbody>
</table>
<ThingsForm />
 */
