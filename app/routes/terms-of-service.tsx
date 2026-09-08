import { pageMeta } from '../seo';
import Page from '../../pages/TermsOfService';

export const meta = () => pageMeta('TermsOfService');

export default function Route() {
  return <Page />;
}
