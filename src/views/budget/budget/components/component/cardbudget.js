import React from 'react';

const CardBudget = (props) => {
    return (
        <div class="card m-1 text-center" style={{ width: '18rem' }}>
            <div class="card-body">
                <h3 class="card-title">{ props.mes }</h3>
            </div>
        </div>
    );
};

export default CardBudget
