import React from 'react'
import { GridTile } from 'material-ui/GridList'
import { Card, CardText, CardHeader } from 'material-ui/Card'

const Story = (props) => {
    return (
        <GridTile>
            <Card>
                <CardHeader title={props.story.story_owner} />
                <CardText> {props.story.story_detail} </CardText>
            </Card>
        </GridTile>
    )
}

export default Story;