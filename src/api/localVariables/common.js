import { makeVar } from '@apollo/client';

import { TIME_FORMAT } from '../../constants/formats';

export const timeSettingsVar = makeVar(TIME_FORMAT.american);
