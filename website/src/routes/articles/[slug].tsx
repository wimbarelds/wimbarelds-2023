import { useParams } from 'solid-start';

export default function Article() {
  const params = useParams();
  return <>{params.slug}</>
}