import { measurePerformance } from 'reassure';

import PictureOne from '../PictureOne';
import PictureTwo from '../PictureTwo';

test('Simple test', async () => {
  await measurePerformance(<PictureOne />);
});
