import React from 'react';
import { withRouter } from 'react-router-dom';

class TasksIndex extends React.Component {
    constructor(props) {
        super(props);

        console.log(props);
    }

    
    
    render() {
        return (
            <div>
                <div className='tasks-index-header'>
                    <form>
                        <button></button>

                    </form>
                </div>
                
                
                HELLO FRIEND
            </div>
        )
    }
}

export default withRouter(TasksIndex);