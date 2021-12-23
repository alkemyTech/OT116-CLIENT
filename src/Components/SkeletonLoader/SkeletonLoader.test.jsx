import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import SKeletonLoader from './SkeletonLoader';

describe('SKeleton Render', () => {

  it('Skeleton variant text and Animation pulse', async () =>{

    const component = render(
      <SKeletonLoader loading variant="text" animation="pulse" height={50} width="100%" bgcolor="blue" >
        click
      </SKeletonLoader>
    )
    component.debug()
    const skeleton = await component.getByText('click')

    expect(skeleton).toHaveClass('MuiSkeleton-text')
    expect(skeleton).toHaveClass('MuiSkeleton-pulse')
  })

  it('Skeleton variant circular and animation wave', async () =>{

    const component = render(
      <SKeletonLoader loading variant="circular" animation="wave" height={50} width="100%" bgcolor="blue" >
        click
      </SKeletonLoader>
    )
    const skeleton = await component.getByText('click')

    expect(skeleton).toHaveClass('MuiSkeleton-circular')
    expect(skeleton).toHaveClass('MuiSkeleton-wave')
  })

  it('Skeleton variant rectangular and animation false', async () =>{

    const component = render(
      <SKeletonLoader loading variant="rectangular" animation={false} height={50} width="100%" bgcolor="blue" >
        click
      </SKeletonLoader>
    )
    const skeleton = await component.getByText('click')

    expect(skeleton).toHaveClass('MuiSkeleton-rectangular')
    expect(skeleton).not.toHaveClass('MuiSkeleton-wave')
  })

  it('Skeleton loading False', async () =>{

    const component = render(
      <SKeletonLoader loading={false} variant="text" animation="pulse" height={50} width="100%" bgcolor="blue" >
        click
      </SKeletonLoader>
    )
    const skeleton = await component.getByText('click')

    expect(skeleton).not.toHaveClass('MuiSkeleton-root')
  })  
})
