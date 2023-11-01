import Image from 'next/image'
import styles from './page.module.css'

import FormComponent from './FormComponent'

export default function Home() {
  return (
    <>
      <h1>Currency Converter</h1>
      <FormComponent />
    </>
  )
}
