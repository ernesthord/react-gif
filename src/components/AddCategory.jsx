import React, { useState } from 'react';

export const AddCategory = ({addCategoriesPadre}) => {
    const [input, setInput] = useState('');

    const handleInputChange = (e) => {
        setInput(e.target.value);
        console.log('handleInputChange called '+ e.target.value );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submit done ' + input);

        if(input.trim().length <5) return;

        // setCategories( categories => [ inputValue, ...categories ]);
        setInput('');
        addCategoriesPadre( input.trim() );
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={input}
                onChange={handleInputChange}
                placeholder="Enter a category"
            />
            <button type="submit">Add Category</button>
        </form>
    );
};
