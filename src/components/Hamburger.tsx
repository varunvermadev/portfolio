type HamburgerProps = {
    isOpen: boolean;
    setIsOpen: () => void;
}

const Hamburger = ({ isOpen, setIsOpen }: HamburgerProps) => {
    return (
        <button onClick={setIsOpen} className={"hamburger sm:hidden absolute w-8 h-8 top-17 right-17  flex flex-col items-center justify-around  " + (isOpen ? 'before:shadow-[0_0_40px_15px] before:shadow-neon-green/50' : 'before:shadow-[0_0_40px_15px] before:shadow-neon-pink/50')}>
            <div className={`bar w-full h-0.5  rounded-sm ${isOpen ? 'active bg-neon-green' : ' bg-neon-pink'}`}></div>
            <div className={`bar w-2/3 self-end  h-0.5  rounded-sm ${isOpen ? 'active bg-neon-green' : ' bg-neon-pink'}`}></div>
            <div className={`bar w-full h-0.5  rounded-sm ${isOpen ? 'active bg-neon-green' : ' bg-neon-pink'}`}></div>
        </button>
    )
}

export default Hamburger