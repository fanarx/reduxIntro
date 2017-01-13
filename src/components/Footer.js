import React from 'react';
import FilterLink from './FilterLink';

const Footer = ({store}) => (
    <p>Show: {' '}
            <FilterLink 
                filter='SHOW_ALL'
                {...{store}}
            >
                All
            </FilterLink>
            {' '}
            <FilterLink
                filter='SHOW_ACTIVE'
                {...{store}}
            >
                Active
            </FilterLink>
            {' '}
            <FilterLink 
                filter='SHOW_COMPLETED'
                {...{store}}
            >
                Completed
            </FilterLink>
            {' '}
    </p>
);

export default Footer;