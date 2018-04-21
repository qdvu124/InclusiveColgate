import React from 'react'
import Story from './Story.js'
import Samples from '../Sample.js'

import {GridList} from 'material-ui/GridList'

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
                <GridList>
                    <Story key={index} story={current_story} />
                    <br/>
                </GridList>
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