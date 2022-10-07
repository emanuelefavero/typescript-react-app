export interface Props {
  name: string
  // optional prop 'color'
  color?: string
}

function Hello(props: Props) {
  return (
    <>
      <h1 style={props.color ? { color: props.color } : { color: 'inherit' }}>
        Hello {props.name}
      </h1>
    </>
  )
}

export default Hello
