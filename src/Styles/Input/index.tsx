import React from 'react'
import * as styles from './styles'

type Props = {
  label?: string
  placeholder?: string
  requeired?: boolean
  type?: string
  id?: string
  onChange: (string) => void
  onKeyPress?: () => void
  value?: string
}

function Input({ label, placeholder, requeired, type, id, onChange, onKeyPress, value }: Props) {
  return (
    <div>
      {!!label && <label className={styles.LABEL}>{label}</label>}
      <input
        type={type}
        id={id}
        onChange={onChange}
        className={styles.INPUT}
        placeholder={placeholder}
        required={requeired}
        value={value}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            onKeyPress()
          }
        }}
      />
    </div>
  )
}

Input.defaultProps = {
  type: 'text',
  id: 'input',
  placeholder: 'Input',
  required: false,
  label: '',
  onKeyPress: () => {
    console.log('test')
  },
}

export default Input
