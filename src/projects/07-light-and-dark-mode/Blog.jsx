import React,{useContext} from 'react'
import Button from '../../components/Button'
import Title from '../../components/Title'
import { ThemeContext } from './context/theme-context'
export default function Blog() {
    const {theme,toggleTheme} = useContext(ThemeContext);
  return (
    <div className='container p-1'>
        <Title text={`My Blog with ${theme} Theme`} />
        <span style={{position:'absolute',top:100,right:10}}>
            <Button text={theme === "dark" ? "Light" : "Dark"} btnClass={`${theme =="dark" ? "btn-light" : "btn-dark"}`} onClick={toggleTheme} />
        </span>
        <p>
            lorem ipsum dolor sit amet consectetur adipisicing elit.
            voluptas, quibusdam. Quisquam, voluptatum. Quisquam, voluptatum.
            Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
            Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
            Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
            Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
            Quisquam, voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
        </p>
    </div>
  )
}
