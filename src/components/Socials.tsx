import { GithubIcon } from '../assets/icons/github';
import { GmailIcon } from '../assets/icons/gmail';
import { LinkedinIcon } from '../assets/icons/linkedin';
import '../styles/socials.css';

function Socials({ type }: { type: 'vertical' | 'horizontal' }) {
  return (
    <div className={`socials socials--${type}`}>
      <a
        href='https://linkedin.com/in/fellegrini/'
        className='socials--link'
        target='_blank'
        rel='noreferrer'
      >
        <LinkedinIcon />
      </a>
      <a
        href='mailto:fellegrini@gmail.com'
        className='socials--link'
        target='_blank'
        rel='noreferrer'
      >
        <GmailIcon />
      </a>

      <a
        href='https://github.com/fellegrini'
        className='socials--link'
        target='_blank'
        rel='noreferrer'
      >
        <GithubIcon />
      </a>
    </div>
  );
}

export default Socials;
