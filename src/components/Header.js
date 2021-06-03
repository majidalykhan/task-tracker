const Header = ({title,paragraph}) => {
    return (
        <div>
            <header>
                <h1>{title}</h1>
                <p>{paragraph}</p>
            </header>
        </div>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
    paragraph: "Hello this is task tracker react app.",
}

export default Header
