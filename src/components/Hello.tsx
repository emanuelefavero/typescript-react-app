import { FC } from 'react'
export interface Props {
  name: string
  // optional prop 'color'
  color?: string
}

// FC is a type that represents a function component
// Inside which we are passing in the Props interface
const Hello: FC<Props> = (props) => {
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

  return (
    <>
      <h1 style={props.color ? { color: props.color } : { color: 'inherit' }}>
        Hello {props.name}
      </h1>
    </>
  )
}

export default Hello
