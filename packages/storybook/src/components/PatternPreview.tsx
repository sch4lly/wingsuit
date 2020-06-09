import React, {FunctionComponent, useEffect, useState} from 'react';
import {renderer} from '@wingsuit-designsystem/pattern';
import PropTypes from 'prop-types';

type Props = { patternId, variantId };

const PatternPreview: FunctionComponent<Props> = ({patternId, variantId, ...variables}) => {
  const [rendered, setRendered] = useState("");

  useEffect(() => {
    renderer.renderPatternPreview(patternId, variantId, variables).then((output: string) => {
      setRendered(output);
    }).catch((error) => {
      console.log("error");
      setRendered("Error");
    });
  })
  return <div dangerouslySetInnerHTML={{__html: rendered}}/>
};

PatternPreview.displayName = 'PatternPreview';

PatternPreview.propTypes = {
  patternId: PropTypes.string,
  variantId: PropTypes.string
};
export default PatternPreview;
