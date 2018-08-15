class Things extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      listIsVisible: true,
      addIsVisible: false,
      ThingVisible: false,
      editVisible: false,
      things: [],
      thing: {}
    }
    this.toggleState = this.toggleState.bind(this)
    this.getThings = this.getThings.bind(this)
    this.getThing = this.getThing.bind(this)
    this.handleUpdateSubmit = this.handleUpdateSubmit.bind(this)
    this.deleteThing = this.deleteThing.bind(this)
    this.handleCreate = this.handleCreate.bind(this)
    this.handleCreateSubmit = this.handleCreateSubmit.bind(this)
  }
  componentDidMount() {
    this.getThings()
  }

  handleCreate (thing) {
    console.log([thing, ...this.state.things])
    this.setState({things: [thing, ...this.state.things]})
  }

  handleCreateSubmit (thing) {
    fetch('/things', {
      body: JSON.stringify(thing),
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    .then(createdThing => {
      return createdThing.json()
    })
    .then(jsonedThing => {
      this.handleCreate(jsonedThing)
      this.toggleState('addIsVisible', 'listIsVisible')
    })
    .catch(error => console.log(error))
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

  handleUpdateSubmit (thing) {
    fetch('/things/' + thing.id, {
      body: JSON.stringify(thing),
      method: 'PUT',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
      .then(updatedThing => {
        return updatedThing.json();
      })
      .then(jsonedThing => {
        this.getThings();
        this.toggleState('listIsVisible', 'ThingVisible');
      })
      .catch(error => console.log(error));
  }

  getThings(){
    fetch('/things')
      .then(response => response.json())
      .then(JSONdata => {
        this.setState({
          things: JSONdata
        })
      }).catch(error => console.log(error))
  }

  getThing( thing ){
    this.setState({thing:thing})
  }

  toggleState(st1, st2){
    this.setState({
      [st1]: !this.state[st1],
      [st2]: !this.state[st2]
    })
  }

    render () {
      return (
        <div className='things-column'>
          <h2> Things </h2>
          <button
            className='button-add-item'
            onClick={() => this.toggleState('addIsVisible' , 'listIsVisible')}
            >Add a Thing</button>

          {this.state.listIsVisible
            ? <ThingsList
            toggleState={this.toggleState}
            things={this.state.things}
            getThing={this.getThing}
            deleteThing={this.deleteThing}
            /> : ''}

          {this.state.addIsVisible
            ? <ThingsForm
            toggleState={this.toggleState}
            handleCreate={this.handleCreate}
            handleSubmit={this.handleCreateSubmit}
            /> : ''}

          {this.state.ThingVisible
            ? <Thing
            toggleState={this.toggleState}
            thing={this.state.thing}
            handleSubmit={this.handleUpdateSubmit}
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
