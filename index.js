const Button = props => {
  //  Write your code here.
  const {buttonText, className} = props

  return <Button className={`button ${className}`}>{buttonText}</Button>
}

const element = (
  <div className='main-container'>
    <h1 className='heading'>Social Buttons</h1>
    <div className='button-container'>
      <Button buttonText='Like' className='like-button' />
      <Button buttonText='Comment' className='comment-button' />
      <Button buttonText='Share' className='share-button' />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
