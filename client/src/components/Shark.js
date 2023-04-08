/**
 * this component renders a Shark 
 */
const Shark = (props) => {
    return (
        <div className="shark-container">
            <h3>{props.shark.name}</h3>
            <p>{props.shark._id}</p>
        </div>
    );
}

export default Shark;