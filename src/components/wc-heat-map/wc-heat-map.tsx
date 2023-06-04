import { Component, Prop, h } from '@stencil/core';
import { TOTAL_WEEKS, DAYS_IN_WEEK, getRange , SQUARE_SIZE, getDifferenceBetweenTwoDates } from '../../utils/helpers.js';



@Component({
  tag: 'wc-heat-map',
  styleUrl: 'wc-heat-map.css',
  shadow: true,
})
export class MyComponent {

  @Prop() width: number;

  @Prop() height: number;

  @Prop() startdate: any;

  @Prop() enddate: any;

  startDateFromProp : Date;
  endDateFromProp : Date;


  componentWillLoad(){
    this.startDateFromProp = new Date(this.startdate);
    this.endDateFromProp = new Date(this.enddate);
  }

  private getRectangle(dayIndex: number, index: number) {

    const [x, y] = this.getSquareCoordinates(dayIndex);
    return ( 
      <rect width={this.width} height={this.height} x={x} y={y}></rect>
   );
  }

  private getDayOfWeekForStartDate(){
    return this.startDateFromProp.getDay();
  }

  private getDayOfWeekForEndDate(){
    return DAYS_IN_WEEK - 1 - this.endDateFromProp.getDay();
  }

  private getWeeksCount(){
    const numOfDaysRoundedNearWeek = getDifferenceBetweenTwoDates(this.startDateFromProp, this.endDateFromProp) + this.getDayOfWeekForStartDate() + this.getDayOfWeekForEndDate();
    return Math.ceil(numOfDaysRoundedNearWeek / DAYS_IN_WEEK);
  }

  private renderAllWeeks() {
    return getRange(this.getWeeksCount()).map((weekIndex) => this.renderSingleWeek(weekIndex));
  }

  private getTransformForWeek(weekIndex : number){
    return `translate(${weekIndex * this.getSquareSizeWithGutter()}, 0)`;
  }

  private getSquareSizeWithGutter() {
    return SQUARE_SIZE + 1;
  }

  private getSquareCoordinates(dayIndex) {
    return [0, dayIndex * this.getSquareSizeWithGutter()];
  }

  private getWeekWidth() {
    return DAYS_IN_WEEK * this.getSquareSizeWithGutter();
  }

  private getHeight() {
    return (
      this.getWeekWidth() 
    );
  }

  private getWidth() {
    return (
      this.getWeeksCount() * this.getSquareSizeWithGutter()
    );
  }

  private getViewBox() {
    console.log(this.startDateFromProp);
    console.log(this.width);
    return `0 0 ${this.getWidth()} ${this.getHeight()}`;
  }

  private renderSingleWeek(weekIndex : number){ 
    return (
      <g key={weekIndex} class= "checking" transform={this.getTransformForWeek(weekIndex)}>
        {getRange(DAYS_IN_WEEK).map((dayIndex) =>
          this.getRectangle(dayIndex, weekIndex * DAYS_IN_WEEK + dayIndex),
        )}
      </g>
    );
  }

  private renderChart(){
    return (
      <svg viewBox={this.getViewBox()}>
        {this.renderAllWeeks()}
      </svg>
    )
  }

  render() {
    return this.renderChart();
  }
}
