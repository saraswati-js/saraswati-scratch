function alertclicked () {
  alert('hey')
}

export default function Test() {
  return <div onClick={alertclicked}>Hello</div>
}