// Taken from https://github.com/chakra-ui/chakra-ui/blob/fc3b97d0978cf2adb9fc79157c6e42b4b68155c5/packages/transition/src/transition-utils.ts
import { isNumber } from '@chakra-ui/utils';
import { Target, TargetAndTransition, Transition } from 'framer-motion';

type TargetResolver<P = unknown> = (
  props: P & {
    transition?: TransitionConfig;
    transitionEnd?: TransitionEndConfig;
    delay?: number | DelayConfig;
  }
) => TargetAndTransition;

type Variant<P = unknown> = TargetAndTransition | TargetResolver<P>;

export type Variants<P = unknown> = {
  enter: Variant<P>;
  exit: Variant<P>;
  initial?: Variant<P>;
};

type WithMotionState<P> = Partial<Record<'enter' | 'exit', P>>;

export type TransitionConfig = WithMotionState<Transition>;

export type TransitionEndConfig = WithMotionState<Target>;

export type DelayConfig = WithMotionState<number>;

export type WithTransitionConfig<P extends object> = Omit<P, 'transition'> & {
  /**
   * If `true`, the element will unmount when `in={false}` and animation is done
   */
  unmountOnExit?: boolean;
  /**
   * Show the component; triggers the enter or exit states
   */
  in?: boolean;
  /**
   * Custom `transition` definition for `enter` and `exit`
   */
  transition?: TransitionConfig;
  /**
   * Custom `transitionEnd` definition for `enter` and `exit`
   */
  transitionEnd?: TransitionEndConfig;
  /**
   * Custom `delay` definition for `enter` and `exit`
   */
  delay?: number | DelayConfig;
};

export const withDelay = {
  enter: (transition: Transition, delay?: number | DelayConfig) => ({
    ...transition,
    delay: isNumber(delay) ? delay : delay?.['enter'],
  }),
  exit: (transition: Transition, delay?: number | DelayConfig) => ({
    ...transition,
    delay: isNumber(delay) ? delay : delay?.['exit'],
  }),
};
