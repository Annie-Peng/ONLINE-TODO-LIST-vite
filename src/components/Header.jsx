export default function Header() {
  return (
    <nav className="flex justify-between items-center mt-2 ms-[34px] me-[32px]">
      <img src="src/images/cover/logo.png" className="w-[243px] h-[38px]" />
      <h2 className="ms-auto font-bold">王小明的代辦</h2>
      <button type='button' className="ms-3">登出</button>
    </nav>
  )
}