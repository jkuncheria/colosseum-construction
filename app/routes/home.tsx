import { pageMeta } from '../seo';
import Page from '../../pages/Home';

export const meta = () => pageMeta('Home');

export default function Route() {
  return <Page />;
}
