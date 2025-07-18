import { FaCloudUploadAlt } from 'react-icons/fa';
import AudioPlayer from './AudioPlayer';
import { Button } from '@mantine/core';
import Link from 'next/link';



export default function Home() {
  return (
    <div>
      <AudioPlayer />
      <Button leftSection={<FaCloudUploadAlt />} style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 1000, }} variant="default">
        <Link href="/upload" style={{ fontWeight: 600 }}>Upload More</Link>
      </Button>
    </div>
  );
}
