import './NavBar.css';

export default function ButtonComponent(props){
    return (
            <div>
                <button className='category'>{props.text}</button>
            </div>            
    )
}