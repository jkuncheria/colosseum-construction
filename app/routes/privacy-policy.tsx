import { pageMeta } from '../seo';
import Page from '../../pages/PrivacyPolicy';

export const meta = () => pageMeta('PrivacyPolicy');

export default function Route() {
  return <Page />;
}
