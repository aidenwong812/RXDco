import Input from "@/shared/Input"
import { useAdmin } from "@/providers/AdminProvider"

const InputForm = () => {
  const {
    userName,
    setUserName,
    password,
    setPassword,
    keepSigned,
    setKeepSigned
  } = useAdmin()
  return (
    <div className="w-full flex flex-col">
      <Input
        className="rounded-b-none"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        label="Username or Email"
        id="username"
        name="username"
        hookToForm
      />
      <Input
        className="rounded-t-none"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        label="Password"
        id="password"
        name="password"
        type="password"
        hookToForm
      />
      <div className="flex items-center gap-[8px] mt-[14px]">
        <input
          className="rounded-[4px]"
          type="checkbox"
          id="keepSigned"
          name="keepSigned"
          value={keepSigned}
          onChange={(e) => setKeepSigned(e.target.value)}
        />
        <label htmlFor="keepSigned">Keep me signed in for 2 weeks</label>
      </div>
    </div>
  )
}

export default InputForm
