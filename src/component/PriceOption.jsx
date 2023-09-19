import PropTypes from 'prop-types';
import Feature from './Feature';


const PriceOption = ({option}) => {
    const{name, price,features} = option;
    return (
        <div className='bg-slate-100 text-center shadow-xl rounded-xl p-4 flex flex-col'>
            <h2>
                <span className='text-3xl'>$ {price}</span>
                <span className='text-xl'>/mon</span>
            </h2>
            <h4 className='text-lg font-extrabold my-6'>{name}</h4>
            <div className='flex-grow'>
            {
                features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
            }
            </div>
            <button className='bg-slate-500 w-full my-6 hover:bg-slate-800 text-white px-4 py-2 rounded-md shadow-slate-300 shadow-xl'>Buy Now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option:PropTypes.object
}

export default PriceOption;