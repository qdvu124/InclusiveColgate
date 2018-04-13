import React from 'react'
import  { Card, CardText, CardHeader } from 'material-ui/Card'

const Story = (props) => {
    return (
        <Card>
            <CardHeader title={props.story.story_owner} />
            <CardText> {props.story.story_detail} </CardText>
        </Card>
    )
}

export default Story