const HeroHeader = (props) => {
    return (
        <header className=" h-[40vh] bg-violet-400 flex justify-center items-center" >
            <h1 className="text-3xl">{props.title}</h1>
        </header>
    )
}

export default HeroHeader