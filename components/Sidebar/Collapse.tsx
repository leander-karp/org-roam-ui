// modified from https://github.com/chakra-ui/chakra-ui/blob/fc3b97d0978cf2adb9fc79157c6e42b4b68155c5/packages/transition/src/collapse.tsx

import { cx } from '@chakra-ui/utils';
import {
  AnimatePresence,
  HTMLMotionProps,
  motion,
  Variants as _Variants,
} from 'framer-motion';
import * as React from 'react';
import { Variants, withDelay, WithTransitionConfig } from './transition-utils';

const EaseTransition = [0.25, 0.1, 0.25, 1];

export interface CollapseOptions {
  /**
   * If `true`, the opacity of the content will be animated
   */
  animateOpacity: boolean;
  /**
   * The dimension you want to collapse by.
   */
  dimension: 'width' | 'height';
}

const defaultTransitions = {
  exit: {
    size: { duration: 0.2, ease: EaseTransition },
    opacity: { duration: 0.3, ease: EaseTransition },
  },
  enter: {
    size: { duration: 0.3, ease: EaseTransition },
    opacity: { duration: 0.4, ease: EaseTransition },
  },
};

const variants: Variants<CollapseOptions> = {
  exit: ({ animateOpacity, transition, transitionEnd, delay, dimension }) => ({
    ...(animateOpacity && { opacity: 0 }),
    overflow: 'hidden',
    [dimension as string]: 0,
    transitionEnd: transitionEnd?.exit,
    transition:
      transition?.exit ?? withDelay.exit(defaultTransitions.exit, delay),
  }),
  enter: ({ animateOpacity, transition, transitionEnd, delay, dimension }) => ({
    ...(animateOpacity && { opacity: 1 }),
    [dimension as string]: 'auto',
    transitionEnd: transitionEnd?.enter,
    transition:
      transition?.enter ?? withDelay.enter(defaultTransitions.enter, delay),
  }),
};

export interface CollapseProps
  extends WithTransitionConfig<HTMLMotionProps<'div'>>,
    CollapseOptions {}

export const Collapse = ({
  in: isOpen,
  unmountOnExit,
  animateOpacity,
  dimension,
  style,
  className,
  transition,
  ...rest
}: CollapseProps) => {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setMounted(true);
    });
    return () => clearTimeout(timeout);
  }, []);

  const custom = {
    startingSize: 0,
    endingSize: 'auto',
    animateOpacity,
    dimension,
    transition: !mounted ? { enter: { duration: 0 } } : transition,
    transitionEnd: {
      enter: { overflow: 'initial' },
      exit: unmountOnExit
        ? undefined
        : {
            display: 'none',
          },
    },
  };

  const show = unmountOnExit ? isOpen : true;
  const animate = isOpen || unmountOnExit ? 'enter' : 'exit';

  return (
    <AnimatePresence initial={false} custom={custom}>
      {show && (
        <motion.div
          {...rest}
          className={cx('chakra-collapse', className)}
          style={{
            overflow: 'hidden',
            display: 'block',
            ...style,
          }}
          custom={custom}
          variants={variants as _Variants}
          initial={unmountOnExit ? 'exit' : false}
          animate={animate}
          exit="exit"
        />
      )}
    </AnimatePresence>
  );
};
