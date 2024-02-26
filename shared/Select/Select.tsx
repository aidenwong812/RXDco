import { ReactNode } from "react"
import { useFormContext } from "react-hook-form"
import styles from "./Select.module.css"

interface ISelectOptions {
  value: any
  label: string | ReactNode
}

interface ISelect {
  id?: string
  name?: string
  value?: string
  className?: string
  onChange?: (e: any) => any
  placeholder?: string
  hookToForm: boolean
  options: ISelectOptions[]
}

function Select({
  id,
  name,
  value,
  className,
  onChange,
  placeholder,
  hookToForm,
  options,
}: ISelect) {
  const formContext = useFormContext()

  const isFullyHooked = name && hookToForm && formContext

  const fieldError = isFullyHooked && formContext?.formState?.errors?.[name]

  return (
    <>
      <select
        {...(id && { id: id })}
        placeholder={placeholder}
        className={`rounded-[0.5rem] border border-[#d1d5d5] 
        focus:ring-0 !outline-none focus:border-[#d1d5d5]
        h-[57px] w-full placeholder:text-[#9b9b9b] text-black
        font-radikal_light text-[0.875rem] !px-[16px]
        bg-[url('/images/select-arrow.svg')]
        ${className ? className : ""} ${
          hookToForm && fieldError && fieldError?.message ? "border-red-600" : ""
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
      >
        {options.map((x) => (
          <option key={x.value} value={x.value}>
            {x.label}
          </option>
        ))}
      </select>

      {isFullyHooked && fieldError && fieldError?.message && (
        <p className="text-red-600 font-madeoutersans text-[10px]">
          {fieldError?.message as string}
        </p>
      )}
    </>
  )
}

Select.defaultProps = {
  hookToForm: false,
}

export default Select
