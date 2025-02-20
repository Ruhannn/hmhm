import PropTypes from 'prop-types';
import { AiFillCheckCircle } from "react-icons/ai"

const Feature = ({feature}) => {
    return (
        <div>
            <p className='flex items-center '> <AiFillCheckCircle className='text-green-400 mr-4'></AiFillCheckCircle>{feature}</p>
        </div>
    );
};
Feature.propTypes = {
    feature: PropTypes.string
}
export default Feature;