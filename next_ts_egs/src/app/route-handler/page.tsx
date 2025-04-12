import { Tooltip } from '@mantine/core';
import Link from 'next/link';
import Card from '../../components/Card';


export default function Home() {
  return (
    <Card>
      <h1>Route handler (Backend APIs)</h1>
      <Link href="route-handler/simple">Simple GET</Link> |
      <Link href="route-handler/connectDb">Test Db connection - GET</Link> |
      <Link href="route-handler/connectDb/product">Product - GET</Link> |
      <Tooltip label="Add a new product using - POST request from postman or form" withArrow>
        <span style={{ cursor: 'pointer', textDecoration: 'underline' }}>Product - POST</span>
      </Tooltip>
    </Card>
  )
}
