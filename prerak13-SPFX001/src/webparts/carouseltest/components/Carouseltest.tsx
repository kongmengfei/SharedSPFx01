import * as React from 'react';
import styles from './Carouseltest.module.scss';
import { ICarouseltestProps } from './ICarouseltestProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { ICarouseltestState } from './ICarouseltestState';
import { Carousel, Image, Provider, teamsTheme } from '@fluentui/react-northstar';

export default class Carouseltest extends React.Component<ICarouseltestProps, ICarouseltestState> {

  constructor(props: ICarouseltestProps, state: ICarouseltestState) {
    super(props);
    this.state = {
      items: ["https://icons.iconarchive.com/icons/hopstarter/3d-cartoon/128/Axialis-Icon-Workshop-icon.png",
        "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/128/ICON-ICX-icon.png",
        "https://icons.iconarchive.com/icons/blackvariant/button-ui-app-pack-one/128/Lite-Icon-icon.png",
        "https://icons.iconarchive.com/icons/hydrattz/multipurpose-alphabet/128/Letter-P-blue-icon.png"
      ]
    };
  }

  public render(): React.ReactElement<ICarouseltestProps> {


    const imageAltTags = {
      ade: 'Portrait of Ade',
      elliot: 'Portrait of Elliot',
      molly: 'Portrait of Molly',
      nan: 'Portrait of Nan',
    };

    const carouselItems = [
      {
        key: 'ade',
        content: <Image src={this.state.items[0]} fluid alt={'Portrait of Ade'} />,
      },
      {
        key: 'elliot',
        content: <Image src={this.state.items[1]} fluid alt={'Portrait of Elliot'} />,
      },
      {
        key: 'kristy',
        content: <Image src={this.state.items[2]} fluid alt={'Portrait of Kristy'} />,
      },
      {
        key: 'nan',
        content: <Image src={this.state.items[3]} fluid alt={'Portrait of Nan'} />,
      }
    ];
    return (
      <Provider theme={teamsTheme}>
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
      </Provider>
    );
  }
}
