class Things extends React.Component {
    render () {
      return (
        <div className='things-column'>
          <h2> Things </h2>
          <button className='button is-success'>Add an Item</button>
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
      </div>
      )
    }
  }
