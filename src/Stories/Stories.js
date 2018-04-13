import React from 'react'
import Story from './Story.js'
import Samples from '../Sample.js'

class Stories extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            stories : Samples,
        };
    }

    render() {
        const story_items = this.state.stories.map((current_story, index) => {
            return (
                <div>
                    <Story key={index} story={current_story} />
                    <br/>
                </div>
            );
        })

        return(
            <div>
                {story_items}
            </div>
        );
    }

}

export default Stories