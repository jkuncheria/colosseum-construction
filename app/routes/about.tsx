import { pageMeta } from '../seo';
import Page from '../../pages/About';

export const meta = () => pageMeta('About');

export default function Route() {
  return <Page />;
}
