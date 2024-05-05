import { GithubIcon } from '../assets/icons/github';
import { GmailIcon } from '../assets/icons/gmail';
import { LinkedinIcon } from '../assets/icons/linkedin';
import '../styles/socials.css';

function Socials({ type }: { type: 'vertical' | 'horizontal' }) {
  return (
    <div className={`socials socials--${type}`}>
      <LinkedinIcon />
      <GmailIcon />
      <GithubIcon />
    </div>
  );
}

export default Socials;
