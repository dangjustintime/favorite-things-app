class Things extends React.Component {
  // constructor() {
  //
  // }
  render(){
    return (
      <div className='things column'>
        <h2> Favorite Things </h2>
        <button>Add an Item</button>
          <ThingsList />
          <ThingForm />
          <Thing />
      </div>
    )
  }
}
