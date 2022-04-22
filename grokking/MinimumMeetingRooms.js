const Heap = require('collections/heap');

class Meeting {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
};

const min_meeting_rooms = function (meetings) {
  let result = 0;
  meetings.sort((a, b) => a.start - b.start);
  const minHeap = new Heap([meetings[0]], null, (a, b) => b.end - a.end);
  for (let i = 1; i < meetings.length; i++) {
    const meeting = meetings[i];
    while (minHeap.length > 0 && minHeap.peek().end <= meeting.start) {
      minHeap.pop();
    }
    minHeap.push(meeting);
    result = Math.max(result, minHeap.length);
  }
  return result;
};


console.log(`Minimum meeting rooms required: ${min_meeting_rooms(
  [new Meeting(1, 4), new Meeting(2, 5), new Meeting(7, 9)])}`)
console.log(`Minimum meeting rooms required: ${min_meeting_rooms(
  [new Meeting(6, 7), new Meeting(2, 4), new Meeting(8, 12)])}`)
console.log(`Minimum meeting rooms required: ${min_meeting_rooms(
  [new Meeting(1, 4), new Meeting(2, 3), new Meeting(3, 6)])}`)
console.log(`Minimum meeting rooms required: ${min_meeting_rooms(
  [new Meeting(4, 5), new Meeting(2, 3), new Meeting(2, 4), new Meeting(3, 5)])}`)
