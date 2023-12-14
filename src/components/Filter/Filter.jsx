import cssfilter from '../Filter/Filter.module.css';

export const Filter = ({ filter, addFilter }) => {
    return (
        <div className={cssfilter.filter}>
            <input
                type="text"
                name="filter"
                className={cssfilter.filter__input}
                value={filter}
                onChange={addFilter}
                placeholder="Enter name"
            />
        </div>
    );
};
