import '../styles/main-headline.css';

function MainHeadline({ type = 'big' }: { type: 'big' | 'small' }) {
  return (
    <div className={`main-headline main-headline--${type}`}>
      <h1 className='main-headline--headline'>FEDERICO PELLEGRINI</h1>
      <p className='main-headline--subheadline'>Front-end Developer</p>
    </div>
  );
}

export default MainHeadline;
