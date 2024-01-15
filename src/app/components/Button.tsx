type Props = {
  children: React.ReactNode
}

const Button = ({ children }: Props) => {
  return (
    <button className="rounded-full bg-primary-button text-white font-semibold px-8 py-2 drop-shadow-3xl w-auto">
      {children}
    </button>
  )
}

export default Button

