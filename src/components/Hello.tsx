export interface Props {
  name: string
  // optional prop 'color'
  color?: string
}

function Hello(props: Props) {
  // const [number, setNumber] = useState(0)
  // const [string, setString] = useState('')
  // const [arrayOfNumbers, setArrayOfNumbers] = useState<number[]>([])
  // const [arrayOfStrings, setArrayOfStrings] = useState<string[]>([])
  // const [arrayOfStringsAndNumbers, setArrayOfStringsAndNumbers] = useState<
  //   (string | number)[]
  // >([])
  // interface IObject {
  //   name: string
  //   age?: number
  // }
  // const [object, setObject] = useState<IObject>({ name: '' })
  // ALSO: <IObject | null>(null)

  // TIP: to define an empty object, use useState<Partial<IObject>>({}) or add ? to all object properties
  // Partial makes all object properties optional
  // Required makes all object properties required, <Required<IObject>>({})

  return (
    <>
      <h1 style={props.color ? { color: props.color } : { color: 'inherit' }}>
        Hello {props.name}
      </h1>
    </>
  )
}

export default Hello
