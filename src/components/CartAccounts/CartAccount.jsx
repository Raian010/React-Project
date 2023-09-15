import PropTypes from 'prop-types';
const CartAccount = ({selectCourse}) => {
    const {id,title} = selectCourse;
    return (
        <div>
            <ol>
            <li className='text-normal'>{id}.{title}</li>
            </ol>
            
        </div>
    );
};

CartAccount.propTypes= {
    selectCourse: PropTypes.object.isRequired,
}

export default CartAccount;