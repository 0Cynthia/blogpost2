import { useEffect, useState } from 'react';
import Shark from './Shark';

/**
 * this component handles rendering a list of Shark components
 */
const SharkList = () => {
    const [sharks, setSharks] = useState();

    useEffect(() => {
        fetch("http://localhost:3000/api/sharks/")
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                setSharks(json.sharks);
            });
    }, [sharks]);


    return (
        <div className="sharks-container">
            {sharks && sharks.map((shark) =>
                <Shark key={shark._id} shark={shark} />
            )}
        </div>
    );
}

export default SharkList;