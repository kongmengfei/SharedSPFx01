import * as React from 'react';
import styles from './Carouseltest.module.scss';
import { ICarouseltestProps } from './ICarouseltestProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { ICarouseltestState } from './ICarouseltestState';
import { Carousel, Image } from '@fluentui/react-northstar';
export default class Carouseltest extends React.Component<ICarouseltestProps, ICarouseltestState> {

  constructor(props: ICarouseltestProps, state: ICarouseltestState) {
    super(props);
    this.state = {
      items: [
        { id: 1, title: 'item #1' },
        { id: 2, title: 'item #2' },
        { id: 3, title: 'item #3' },
        { id: 4, title: 'item #4' },
        { id: 5, title: 'item #5' }
      ]
    };
  }

  public render(): React.ReactElement<ICarouseltestProps> {
    const { items } = this.state;

    const carouselItems = [
      {
        key: 'ade',
        content: <Image src="public/images/avatar/large/ade.jpg" fluid alt={'Portrait of Ade'} />,
      },
      {
        key: 'elliot',
        content: <Image src="public/images/avatar/large/elliot.jpg" fluid alt={'Portrait of Elliot'} />,
      },
      {
        key: 'kristy',
        content: <Image src="public/images/avatar/large/kristy.png" fluid alt={'Portrait of Kristy'} />,
      },
      {
        key: 'nan',
        content: <Image src="public/images/avatar/large/nan.jpg" fluid alt={'Portrait of Nan'} />,
      }
    ];
    return (
      <Carousel
        ariaRoleDescription="carousel"
        ariaLabel="Portrait collection"
        items={carouselItems}
        paddleNext={{
          'aria-label': 'go to next slide',
        }}
        paddlePrevious={{
          'aria-label': 'go to previous slide',
        }}
        getItemPositionText={(index, size) => `${index + 1} of ${size}`}
      />


    );
  }
}
