import React from 'react';
import PropTypes from 'prop-types';
import { RangeController } from './RangeController';
import { IconController } from './IconController';

export const Controllers = ({ icons, changeBodyIcon, changeFaceIcon, changeGrade, rangeValue, activeFaceIcon, activeBodyIcon }) => {
    return(
        <section className='controllers'>
            <RangeController changeGrade = { changeGrade } rangeValue = { rangeValue }/>
            <div className='iconControllers'>
                <IconController 
                    name = 'Тело' 
                    icons = { icons.bodies }
                    changeIcon = { changeBodyIcon }
                    activeIcon = { activeBodyIcon }
                />
                <IconController 
                    name='Лицо' 
                    icons = { icons.faces }
                    changeIcon = { changeFaceIcon }
                    activeIcon = { activeFaceIcon }
                />
            </div>
        </section>
    );
}

Controllers.propTypes = {
    icons: PropTypes.shape({
        bodies: PropTypes.array,
        faces: PropTypes.array
    }),
    changeBodyIcon: PropTypes.func,
    changeFaceIcon: PropTypes.func,
    changeGrade: PropTypes.func,
    rangeValue: PropTypes.string,
    activeFaceIcon: PropTypes.string,
    activeBodyIcon: PropTypes.string

}
Controllers.defaultProps = {
    icons: {
        bodies: [],
        faces: []
    },
    changeBodyIcon: () => {},
    changeFaceIcon: () => {},
    changeGrade: () => {},
    rangeValue: 0,
    activeFaceIcon: '',
    activeBodyIcon: ''
}