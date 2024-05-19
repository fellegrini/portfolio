/**
 * This is a mapping of icons to their respective names.
 * It's an object where the keys are the names of the tech stack
 * and the values are the actual icons.
 *
 * This mapping is used to quickly look up the icon for a given tech
 * stack name.
 */
import { HtmlIcon } from './HtmlIcon';
import { CssIcon } from './CssIcon';
import { SassIcon } from './SassIcon';
import { MaterialIcon } from './MaterialIcon';
import { JsIcon } from './JsIcon';
import { TsIcon } from './TsIcon';
import { ReactIcon } from './ReactIcon';
import { FlaskIcon } from './FlaskIcon';
import { AngularIcon } from './AngularIcon';
import { LitIcon } from './LitIcon';
import { GitIcon } from './GitIcon';
import { BitbucketIcon } from './BitbucketIcon';
import { WebpackIcon } from './WebpackIcon';
import { ViteIcon } from './ViteIcon';
import { MobXIcon } from './MobXIcon';
import { RxjsIcon } from './RxjsIcon';
import { GcloudIcon } from './GcloudIcon';
import { JiraIcon } from './JiraIcon';
import { GsapIcon } from './GsapIcon';
import { ReactElement } from 'react';

type IconMap = {
  [key: string]: ReactElement;
};

export const iconMap: IconMap = {
  /**
   * HTML icon
   */
  html: HtmlIcon(),
  /**
   * CSS icon
   */
  css: CssIcon(),
  /**
   * Sass icon
   */
  sass: SassIcon(),
  /**
   * Material Design icon
   */
  material: MaterialIcon(),
  /**
   * JavaScript icon
   */
  js: JsIcon(),
  /**
   * TypeScript icon
   */
  ts: TsIcon(),
  /**
   * React icon
   */
  react: ReactIcon(),
  /**
   * Flask icon
   */
  flask: FlaskIcon(),
  /**
   * Angular icon
   */
  angular: AngularIcon(),
  /**
   * Lit icon
   */
  lit: LitIcon(),
  /**
   * Git icon
   */
  git: GitIcon(),
  /**
   * Bitbucket icon
   */
  bitbucket: BitbucketIcon(),
  /**
   * GSAP icon
   */
  gsap: GsapIcon(),
  /**
   * Webpack icon
   */
  webpack: WebpackIcon(),
  /**
   * Vite icon
   */
  vite: ViteIcon(),
  /**
   * MobX icon
   */
  mobx: MobXIcon(),
  /**
   * RxJS icon
   */
  rxjs: RxjsIcon(),
  /**
   * Google Cloud icon
   */
  gcloud: GcloudIcon(),
  /**
   * Jira icon
   */
  jira: JiraIcon(),
};
