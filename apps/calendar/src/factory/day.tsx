import { h } from 'preact';
import CalendarControl from '@src/factory/calendarControl';
import DayView from '@src/components/view/dayView';

export default class Day extends CalendarControl {
  protected getComponent() {
    return <DayView />;
  }
}
