function alertclicked () {
  alert('hey')
}

export default () => (
  <div onClick={alertclicked}>Hello</div>
)
