
import * as React from 'react';
import Carousel from 'react-elastic-carousel'

const x = "https://icons.iconarchive.com/icons/hopstarter/3d-cartoon/128/Axialis-Icon-Workshop-icon.png";
const x01 = "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/128/ICON-ICX-icon.png";
const x02 = "https://icons.iconarchive.com/icons/blackvariant/button-ui-app-pack-one/128/Lite-Icon-icon.png";
const x03 = "https://icons.iconarchive.com/icons/hydrattz/multipurpose-alphabet/128/Letter-P-blue-icon.png";

const items = [
  { id: 1, title: 'item #1' },
  { id: 2, title: 'item #2' },
  { id: 3, title: 'item #3' },
  { id: 4, title: 'item #4' },
  { id: 5, title: 'item #5' }
]

const CarouselExample = () => (
  <Carousel >
    <Item>1</Item>
    <Item>2</Item>
    <Item>3</Item>
    <Item>4</Item>
    <Item>5</Item>
    <Item>6</Item>
  </Carousel>
);

export default CarouselExample;
