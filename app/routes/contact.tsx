import { pageMeta } from '../seo';
import Page from '../../pages/Contact';

export const meta = () => pageMeta('Contact');

export default function Route() {
  return <Page />;
}
