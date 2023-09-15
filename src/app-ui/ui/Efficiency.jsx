import React, { useEffect, useState } from 'react';
import { Animate, AnimateKeyframes } from 'react-simple-animate';
import PropTypes from 'prop-types';

/**
 * Диаграмма Эффективность
 * @module
 * @function
 * @param {Number=} digit Число (процент эффективности от 100%)
 * @return {JSX.Element}
 */
export default function Efficiency({
  digit = '',
}) {

  const [strokeDashoffset, setStrokeDashoffset] = useState(524);
  const [stopRender, setStopRender] = useState(false);

  const radius = 83.5;
  const c = Math.PI * (radius * 2);
  let numb = digit;

  if (digit < 0) { numb = 0; }
  if (digit > 100) { numb = 100; }

  useEffect(() => {
    if (stopRender) return;

    setStrokeDashoffset(((100 - numb) / 100) * c);
    setStopRender(true);
  });

  return (
    <div className="ui-graph-circle-wrapper ui-graph-circle-wrapper-animate">
      <svg className="ui-graph-circle-bar ui-graph-circle-bar-animate" viewport="0 0 93.5 93.5" width="187" height="187">
        <circle r={radius} cx="93.5" cy="93.5" className="ui-graph-circle-bar-bg" />
        <circle
          r={radius}
          cx="93.5"
          cy="93.5"
          strokeDasharray={524}
          strokeDashoffset={strokeDashoffset}
          className="ui-graph-circle-bar-progress"
        />
      </svg>
      <Animate
        play="play"
        delay={1}
        duration={3}
        start={{
          opacity: '0',
        }}
        end={{
          opacity: '1',
        }}
        render={({ style }) => (
          <div className="ui-graph-circle-number" style={style} data-progress={digit}>
            {Math.round(digit)}
            <span>%</span>
          </div>
        )}
      />
      <div className="ui-graph-circle-waves-wrapper">
        <Animate
          play="play"
          delay={1}
          duration={2}
          start={{
            transform: 'translateY(0)',
          }}
          end={{
            transform: `translateY(-${digit && digit > 12 ? Math.round(digit) : 12}%)`,
          }}
          render={({ style }) => (
            <div className="ui-graph-circle-waves" style={style}>
              <AnimateKeyframes
                play="play"
                iterationCount="infinite"
                delay={3}
                duration={4}
                keyframes={[
                  'transform: translate3d(0%, 0px, 0px);',
                  'transform: translate3d(50%, 0px, 0px);',
                ]}
                render={({ style }) => (
                  <div style={style} className="ui-graph-circle-waves-left" />
                )}
              />
              <AnimateKeyframes
                play="play"
                iterationCount="infinite"
                delay={3}
                duration={4}
                keyframes={[
                  'transform: translate3d(50%, 0px, 0px);',
                  'transform: translate3d(0%, 0px, 0px);',
                ]}
                render={({ style }) => (
                  <div style={style} className="ui-graph-circle-waves-right" />
                )}
              />

            </div>
          )}
        />
      </div>
    </div>
  );
}

Efficiency.defaultProps = {
  digit: '',
};

Efficiency.propTypes = {
  digit: PropTypes.string,
};
