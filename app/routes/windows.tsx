import { pageMeta } from '../seo';
import Page from '../../pages/Windows';

export const meta = () => pageMeta('Windows');

export default function Route() {
  return <Page />;
}
