// Title, Image, Category, Description, Owner
class ThingForm extends React.Component {
  render () {
    return (
      <div className='field'>
        <form>
          <label className='label' for='title'>Title</label>
          <div className='control'>
            <input className='input' type='text' id='title'/>
          </div>

          <label className='label' for='category'>Category</label>
          <div className='control'>
            <input className='input' type='text' id='category'/>
          </div>

          <label className='label' for='description'>Description</label>
          <div className='control'>
            <input className='input' type='text' id='description' />
          </div>

          <label className='label 'for='image'>Image</label>
          <div className='control'>
            <input className='input' type='text' id='image'/>
          </div>

          <div className='control'>
            <input className='button is-primary' type='submit' />
          </div>
        </form>
        <button className="button is-link">Nevermind</button>
      </div>
    )
  }
}
