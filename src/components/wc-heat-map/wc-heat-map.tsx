import { Component, Prop, h } from '@stencil/core';


@Component({
  tag: 'wc-heat-map',
  styleUrl: 'wc-heat-map.css',
  shadow: true,
})
export class MyComponent {

  @Prop() width: number;

  @Prop() height: number;


  private getRectangle(x: number, y: number) {
    return ( 
      <rect width={this.width} height={this.height} x={x} y={y}></rect>
   );
  }

  private getFiveRectangles(){
    let x = 0, y = 0;
    return (<svg>
      {
        [0,1,2,3,4].map(e => (         
          this.getRectangle(x = x+10, y = y+10)
        ))}      
    </svg>);
  }

  render() {
    return this.getFiveRectangles();
  }
}
