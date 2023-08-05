import './styles.css'
import Input from '../../components/Input/Input'
import { useState } from 'react'

function Checkout() {
    const [active, setActive] = useState(false)
    const onChange = () => {}

    const onFocus = () => {
        setActive(true)
    }

    const onBlur = () => {
        setActive(false)
    }

    return (
        <div className='checkoutContainerMargin'>
            <div className='checkoutContainer'>
                <h1 className='checkoutTitle'>Checkout</h1>
                <form className='checkoutForm'>
                    <div className='checkoutFormContainer'>
                        <div className='checkoutFormInputGroup'>
                        <Input 
                            placeholder="Nombre"
                            id='name'
                            required={true}
                            name='Nombre'
                            onChange={onChange}
                            onFocus={onFocus}
                            onBlur={onBlur}
                            active={active}
                         />
                        </div>
                        <div className='checkoutFormInputGroup'>
                        <Input 
                            placeholder="Apellido"
                            id='surname'
                            required={true}
                            name='Apellido'
                            onChange={onChange}
                            onFocus={onFocus}
                            onBlur={onBlur}
                            active={active}
                         />
                        </div>
                        <div className='checkoutFormInputGroup'>
                        <Input 
                            placeholder="Teléfono"
                            id='phone'
                            required={true}
                            name='Telefono'
                            onChange={onChange}
                            onFocus={onFocus}
                            onBlur={onBlur}
                            active={active}
                         />
                        </div>
                        <div className='checkoutFormInputGroup'>
                        <Input 
                            placeholder="Email"
                            id='email'
                            required={true}
                            name='Email'
                            onChange={onChange}
                            onFocus={onFocus}
                            onBlur={onBlur}
                            active={active}
                         />
                        </div>
                        <div className='checkoutFormInputGroup'>
                        <Input 
                            placeholder="Repetir Email"
                            id='emailconfirm'
                            required={true}
                            name='EmailConfirm'
                            onChange={onChange}
                            onFocus={onFocus}
                            onBlur={onBlur}
                            active={active}
                         />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Checkout