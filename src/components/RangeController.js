import React from 'react';
import PropTypes from 'prop-types';

export const RangeController = ({ changeGrade, rangeValue }) => {
    return(
        <div className='rangeController'>
            <p className='rangeController__title'>Грейды для frontend</p>
            <div className='rangeController__item'>
            <input 
                onChange = { changeGrade } 
                type='range' 
                value = { rangeValue } 
                min='0' 
                max='2' 
                step='1' 
            />
            <div className='rangeController__grades'>
                <span>Junior</span>
                <span>Middle</span>
                <span>Senior</span>
            </div>
            <p className='rangeController_dscr'>Переход на следующий грейд — улучшение
качества кода и увеличение ответственности.</p>
            </div>
        </div>
    );
}

RangeController.propTypes = {
    changeGrade: PropTypes.func,
    rangeValue: PropTypes.string
}
RangeController.defaultProps = {
    changeGrade: () => {},
    rangeValue: '0'
}