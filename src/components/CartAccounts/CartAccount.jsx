import PropTypes from 'prop-types';
const CartAccount = ({selectCourse,index}) => {
    const {title} = selectCourse;
    return (
        <div>
            <ol>
            <li className='text-normal my-2'>{index + 1}. {title}</li>
            </ol>
            
        </div>
    );
};

CartAccount.propTypes= {
    selectCourse: PropTypes.object.isRequired,
    index: PropTypes.number
}

export default CartAccount;