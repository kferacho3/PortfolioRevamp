import React from 'react';

function Error({ error, searchTerm }) {
    return (
        <div style={{ backgroundColor: '#f8d7da', color: '#721c24', padding: '10px', borderRadius: '5px', marginBottom: '20px' }}>
            <button 
                style={{ background: 'none', border: 'none', float: 'right', fontSize: '20px', lineHeight: '20px', cursor: 'pointer' }}
                onClick={(e) => {
                    e.target.parentElement.style.display = 'none';
                }}
            >&times;</button>
            <strong>Oh snap!</strong> '{searchTerm}' resulted in '{error}' error
        </div>
    );
}

export default Error;
