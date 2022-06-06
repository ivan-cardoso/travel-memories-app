import React from 'react'
import roma from '../../images/roma.jpg'
import styled from 'styled-components'

const PostCard = ({data}) => {

    const Card = styled.div`
        background : red
    `
  return (
    <Card>
        <div>
            <img src={roma} alt={`${data.title} PREVIEW`} />
        </div>
        <h3>{data.title}</h3>
        <p>{data.message}</p>
        <p>Creator: {data.creator}</p>
        <p>Date: {data.createdAt}</p>
    </Card>
  )
}

export default PostCard