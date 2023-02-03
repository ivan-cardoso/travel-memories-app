import React from 'react'
import roma from '../../images/roma.jpg'
import styled from 'styled-components'


const Card = styled.div`
  background : red;
`

const PostCard = ({ data }) => {
  
  return (
    <Card>
      <div>
        <img src={data.selectedFile} alt={`${data.title} PREVIEW`} />
      </div>
      <h3>{data.title}</h3>
      <p>{data.message}</p>
      <p>Creator: {data.creator}</p>
      <p>Date: {data.createdAt}</p>
      {console.log('data', data)}
    </Card>
  )
}

export default PostCard