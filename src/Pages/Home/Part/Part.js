import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import useAdmin from '../../../CustomHooks/useAdmin';
import auth from '../../../firebase.init';

const Part = ({ part }) => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    const {_id, name, minOrderQuantity, availableQuantity, price, description, img } = part;

    const navigate = useNavigate();

    const handlePurchase = () => {
        navigate(`/purchase/${_id}`);
    }
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <p>min order: {minOrderQuantity} units</p>
                <p>availableQuantity: {availableQuantity} units</p>
                <p className='font-bold'>price: ${price}</p>
                <p>{description}</p>
                <div class="card-actions">
                    {
                        !admin && <button onClick={handlePurchase} class=" btn bg-gradient-to-r from-secondary to-primary ">Purchase Now</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Part;