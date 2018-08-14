class ThingsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: '',
      description: '',
      image: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    if(this.props.thing) {
      this.setState({
        title: this.props.thing.title,
        category: this.props.thing.category,
        description: this.props.thing.description,
        image: this.props.thing.image,
        id: this.props.thing.id
      })
    }
  }
  handleChange (event) {
    this.setState({
      [event.target.id]: event.target.value
    })
  }
  handleSubmit (event) {
    event.preventDefault();
    this.props.handleSubmit(this.state);
  }
  render () {
    return (
      <div className='field'>
        <form onSubmit={this.handleSubmit}>
          <label className='label' for='title'>Title</label>
          <div className='control'>
            <input
              className='input'
              type='text'
              id='title'
              onChange={this.handleChange}
              value={this.state.title}
            />
          </div>

          <label className='label' for='category'>Category</label>
          <div className='control'>
            <input
              className='input'
              type='text'
              id='category'
              onChange={this.handleChange}
              value={this.state.category}
            />
          </div>

          <label className='label' for='description'>Description</label>
          <div className='control'>
            <input
              className='input'
              type='text'
              id='description'
              onChange={this.handleChange}
              value={this.state.description}
            />
          </div>

          <label className='label 'for='image'>Image</label>
          <div className='control'>
            <input
              className='input'
              type='text'
              id='image'
              onChange={this.handleChange}
              value={this.state.image}
            />
          </div>

          <div className='control'>
            <input className='button-submit' type='submit' />
          </div>
        </form>
        <button className="button-nevermind" onClick={() => this.props.toggleState('addIsVisible','listIsVisible')}>Nevermind</button>
      </div>
    )
  }
}
