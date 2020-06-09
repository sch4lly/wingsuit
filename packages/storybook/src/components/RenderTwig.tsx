import React, {FunctionComponent, useEffect, useState} from 'react';
import {renderer} from '@wingsuit-designsystem/pattern';

type Props =  {data};

const RenderTwig: FunctionComponent<Props> = ({ data, ...variables }) => {
  const [rendered, setRendered] = useState("");
  useEffect(() => {
    renderer.renderData(Math.random().toString(), data.default, variables).then((output: string) => {
      setRendered(output);
    });
  })

  return <div dangerouslySetInnerHTML={{__html: rendered}}/>
};

RenderTwig.displayName = 'RenderTwig';

export default RenderTwig;
