import React from 'react';
import PropTypes from 'prop-types';

export const IconController = ({ name, icons, changeIcon, activeIcon }) => {
    const items = icons.map((item, index) => {
        return(
            <div 
                key = {`${item.name}${index}`}
                className = { activeIcon === item.icon ? 'iconController__item active' : ' iconController__item' } 
                onClick = { changeIcon(item.name) }
            >
                <img src = { item.icon } className = {name === 'Тело' ? 'body' : 'face'} alt = { item.name }/>
            </div>
        );
    });
    return(
        <div className='iconController'>
            <p className='iconController__title'>{name}</p>
            <div className='iconController__items'>
                {items}
            </div>
        </div>
    );
};

IconController.propTypes = {
    name: PropTypes.string,
    icons: PropTypes.array,
    changeIcon: PropTypes.func
}
IconController.defaultProps = {
    name: 'Тело',
    icons: [],
    changeIcon: () => {}
}