interface CodepenInterface {
  id: string;
  height?: number;
  title?: string;
}

// Wizard of frontend-foolery

export default function Codepen(props: CodepenInterface) {
  return (
    <>
      <iframe
        height={props.height ?? 600}
        style={{width: '100%'}}
        title={props.title ?? 'Codepen Embed'}
        src={`https://codepen.io/wimbarelds/embed/${props.id}?default-tab=result`}
        allowfullscreen={true}
        frameborder="0"
      />    
    </>
  );
}