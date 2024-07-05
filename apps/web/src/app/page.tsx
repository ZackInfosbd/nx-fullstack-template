import { add } from '@bestwrist/sample-lib'

export default function Home() {
  const result = add(1, 2)
  return <main>the result: {result}</main>
}
