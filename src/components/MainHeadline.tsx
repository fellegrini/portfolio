import '../styles/main-headline.css';

function MainHeadline({ type = 'big' }: { type: string }) {
  return (
    <div
      className={`main-headline ${type === 'big' ? 'main-headline--big' : 'main-headline--small'}`}
    >
      <h1 className='main-headline--headline'>FEDERICO PELLEGRINI</h1>
      <p className='main-headline--subheadline'>Front-end developer</p>
    </div>
  );
}

export default MainHeadline;
