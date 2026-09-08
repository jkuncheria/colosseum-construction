import { pageMeta } from '../seo';
import Page from '../../pages/FeaturedVideos';

export const meta = () => pageMeta('FeaturedVideos');

export default function Route() {
  return <Page />;
}
