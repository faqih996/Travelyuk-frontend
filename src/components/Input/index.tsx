import type { InputProps } from './interfaces'

import clsx from 'clsx'
import styles from './Input.module.css'

const Input = ({ name, type, label, placeholder, className}: InputProps) => {
    return(
        <label htmlFor={name} className={clsx(styles.label, className)}>
            <div className="mb-3">{label}</div>

            <input 
                type= {type}
                name={name}
                id={name}
                placeholder={placeholder}
                className={styles.input}
            />
        </label>
    )
}

export default Input