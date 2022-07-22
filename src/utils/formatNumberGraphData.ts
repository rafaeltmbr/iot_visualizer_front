import { IGraphTooltipData } from "../components/Cards/AttributeCard/components/GraphTooltip/interfaces";
import { IAttribute } from "../interfaces/attribute";
import { getLocaleDate } from "./getLocaleDateAndTime";
import { map } from "./map";

interface IFormattedReading {
  value: number;
  date: Date;
}

const formatReadings = (attribute: IAttribute): IFormattedReading[] =>
  attribute.readings
    .map((e) => ({
      value: parseInt(e.value, 10),
      date: new Date(e.updated_at),
    }))
    .sort((a, b) => (a.date.getTime() > b.date.getTime() ? 1 : -1));

const getEpochIntevals = (readings: IFormattedReading[], intervals: number) => {
  const epochIntervals: number[] = [];

  intervals = Math.round(intervals);
  if (!intervals) return [];

  if (readings.length < 2) return readings.map((e) => e.date.getTime());

  const start = readings[0].date.getTime();
  const end = readings[readings.length - 1].date.getTime();
  const step = (end - start) / (intervals - 1);

  epochIntervals.push(start);

  let current = start + step;
  for (let i = 1; i < intervals - 1; i += 1, current += step)
    epochIntervals.push(current);

  epochIntervals.push(end);

  return epochIntervals;
};

const getInBetweenIntervals = (
  targetTime: number,
  readings: IFormattedReading[]
): [IFormattedReading, IFormattedReading] => {
  let start = 0;
  let end = readings.length - 1;

  if (targetTime === readings[end].date.getTime())
    return [readings[end], readings[end]];

  while (start < end) {
    let middle = Math.floor((end + start) / 2);
    const reading = readings[middle];
    const time = reading.date.getTime();

    if (time === targetTime) return [reading, reading];

    if (time > targetTime) {
      end = middle;
      continue;
    }

    if (middle === start) break;

    start = middle;
  }

  return [readings[start], readings[end]];
};

type FuncType = (
  attribute: IAttribute,
  intervals?: number
) => IGraphTooltipData[];

export const formatNumberGraphData: FuncType = (attribute, intervals = 25) => {
  const readings = formatReadings(attribute);

  if (readings.length < 2) return [];

  const data: IGraphTooltipData[] = [];

  const epochIntervals = getEpochIntevals(readings, intervals);

  const differentDays =
    readings[0].date.toDateString() !==
    readings[readings.length - 1].date.toDateString();

  for (const epochInterval of epochIntervals) {
    const [start, end] = getInBetweenIntervals(epochInterval, readings);

    const mappedValue = Math.round(
      map(
        epochInterval,
        start.date.getTime(),
        end.date.getTime(),
        start.value,
        end.value
      )
    );

    const { date, time, dateAndTime } = getLocaleDate(new Date(epochInterval));

    data.push({
      x: differentDays ? date : time,
      xTooltip: dateAndTime,
      y: mappedValue,
      yTooltip: mappedValue.toString(),
    });
  }

  return data;
};
