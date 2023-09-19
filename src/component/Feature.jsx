import PropTypes from 'prop-types';
import { AiFillCheckCircle } from "react-icons/ai";

const Feature = ({feature}) => {
    return (
        <div className='text-left'>
            <p className=' flex items-center gap-2 align-middle'> <AiFillCheckCircle className='text-blue-700'/> {feature}</p>
        </div>
    );
};

Feature.propTypes = {
    feature:PropTypes.string
}

export default Feature;