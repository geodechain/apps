// Copyright 2017-2023 @polkadot/app-whitelist authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
//import { Feed, Icon } from 'semantic-ui-react'
import { Card, Badge } from '@polkadot/react-components';
//import { formatNumber } from '@polkadot/util';
import { useTranslation } from '../translate';
//import IPAddress from '../shared/IpAddress';
import { useToggle } from '@polkadot/react-hooks';

// interface Props {
//   className?: string;
//   hashes?: string[];
// }

function Details (): React.ReactElement {
const { t } = useTranslation();
const [isShowIP, toggleShowIP] = useToggle(true);

  return (
    <div>
   <Card>
    <Badge
          icon='info'
          color={(isShowIP) ? 'blue' : 'gray'}
          onClick={toggleShowIP}/> 
    {isShowIP && (
      <>
        {t<string>('Coming Soon! Report Illegal and/or Suspicious Activity in the Ecosystem.')}<br />
      </>
    )}
    </Card>
    </div>
  );
}

export default React.memo(Details);