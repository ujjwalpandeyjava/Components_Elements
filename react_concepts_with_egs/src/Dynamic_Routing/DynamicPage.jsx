import React from 'react'
import { useParams } from 'react-router-dom'

function DynamicPage() {
  let { email, profile } = useParams();
  return (
    <h1 style={{ margin: '1rem 1.5rem', cursor: 'pointer', color: 'orangered', border: "2px solid black", borderRadius: '5px', padding: '5px 10px', display: 'inline-block', }}>
      DynamicPage {email} {profile || "Default Profile"}
    </h1>
  )
}

export default DynamicPage