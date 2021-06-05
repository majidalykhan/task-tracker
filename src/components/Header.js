import Button from './Button'


const Header = ({title, onAdd, showAdd}) => {

    return (
        <div>
            <header className="header">
                <h1>{title}</h1>
                <Button 
                color={showAdd ? '#CD5C5C' : 'dodgerblue'}
                text={showAdd ? 'Close' : 'Add'}
                onClick={onAdd}/>
            </header>
        </div>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
    paragraph: "Hello this is task tracker react app.",
}

// CSS in JS
// const headingStyle = {
//     color: 'blue',
//     backgroundColor:'lightblue',
// }

export default Header
