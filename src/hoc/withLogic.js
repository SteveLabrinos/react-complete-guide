import React from 'react';

//  another way to create HOC. They are used with Fragment and then wrap the export
//  mainly they are used this way when they contain code logic
const withLogic = (WrappedComponent, className) => {
    return props => (
        <div className={className}>
            <WrappedComponent/>
        </div>
    );
};

export default withLogic