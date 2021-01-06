import React from 'react'
import { CSSTransition } from 'react-transition-group'
import { CSSTransitionProps } from 'react-transition-group/CSSTransition'
import classNames from 'classnames'
import './index.scss'

export type AnimationName =
  | 'zoom-in-top'
  | 'zoom-in-bottom'
  | 'zoom-in-left'
  | 'zoom-in-right'

type TransitionProps = CSSTransitionProps & {
  animation?: AnimationName // 动画名称
  wrapper?: boolean
}

const Transition: React.FC<TransitionProps> = (props) => {
  const { animation, children, wrapper, ...restProps } = props
  const classes = classNames(animation, props.classNames)
  return (
    <CSSTransition classNames={classes} {...restProps}>
      {wrapper ? <div>{children}</div> : children}
    </CSSTransition>
  )
}

Transition.defaultProps = {
  unmountOnExit: true,
  appear: true,
}

export default Transition
