import { ChangeEventHandler, useEffect, useState } from "react"
import { useFormContext } from "react-hook-form"
import styles from "./Input.module.css"

interface IInput {
  id?: string
  name?: string
  value?: any
  className?: string
  onChange?: ChangeEventHandler<HTMLInputElement>
  placeholder?: string
  hookToForm: boolean
  type: "text" | "password" | "url" | "number"
  clasNameError?: string
  disabled?: boolean
  label?: string
}

function Input({
  id,
  name,
  value,
  hookToForm,
  onChange,
  className,
  clasNameError,
  disabled,
  label,
  placeholder,
}: IInput) {
  const [isFocused, setIsFocused] = useState(false)

  const formContext = useFormContext()
  const isFullyHooked = name && hookToForm && formContext

  const fieldError = isFullyHooked && formContext?.formState?.errors?.[name]

  useEffect(() => {
    if (name && hookToForm) {
      formContext.setValue(name, value)
    }
  }, [value, name, formContext, hookToForm])

  return (
    <div className="relative w-full">
      <label
        className={`absolute left-[14px] 
          text-[#7c7c7c] font-radikal_light
          top-[16px] text-[16px] md:text-[0.875rem] 
          pointer-events-none
          ${isFocused || value ? styles.label_active : ""}`}
      >
        {isFocused || value ? label : placeholder || label}
      </label>
      <input
        {...(id && { id: id })}
        value={value}
        className={`text-black w-full border border-[#d1d5d5] placeholder:text-[#9b9b9b]
          rounded-[0.5rem] focus:ring-0 focus:border focus:border-blue top-[16px] 
          md:text-[0.875rem] font-radikal_light 
          pt-[16px] h-[57px]
          ${className ? className : ""} ${
          hookToForm && fieldError && fieldError?.message ? `${clasNameError} !border-errorred` : ""
        }`}
        {...(!hookToForm && {
          value: value,
          onChange: onChange,
        })}
        {...(isFullyHooked
          ? formContext.register(name, {
              onChange: (e) => onChange && onChange(e),
            })
          : {})}
        name={name}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        disabled={disabled}
      />

      {isFullyHooked && fieldError && fieldError?.message && (
        <p className="!text-errorred text-[14px] font-radikal_light pt-[8px]">
          {fieldError?.message as string}
        </p>
      )}
    </div>
  )
}

Input.defaultProps = {
  hookToForm: false,
  type: "text",
}

export default Input
