import { DateTime } from 'luxon';

export function getRelativeTime(targetDate: Date) {
	const start = DateTime.fromJSDate(targetDate);
	const end = DateTime.now();

	// 1. Get the raw difference across units
	const diff = end.diff(start, ['days', 'hours', 'minutes', 'seconds']);

	const parts = [];

	// 2. Define a hardcoded mapping for Danish singular/plural units
	// Danish only has two plural categories: 'one' (singular) and 'other' (plural)
	const danishUnits = {
		day: { one: 'dag', other: 'dage' },
		hour: { one: 'time', other: 'timer' },
		minute: { one: 'minut', other: 'minutter' },
		second: { one: 'sekund', other: 'sekunder' }
	};

	const pluralRules = new Intl.PluralRules('da');

	const unitsToCheck = [
		{ value: Math.floor(diff.days), key: 'day' },
		{ value: Math.floor(diff.hours), key: 'hour' },
		{ value: Math.floor(diff.minutes), key: 'minute' },
		{ value: Math.floor(diff.seconds), key: 'second' }
	];

	for (const { value, key } of unitsToCheck) {
		if (value > 0) {
			// pluralRules.select(value) returns either 'one' or 'other' based on Danish rules
			const grammaticalForm = pluralRules.select(value);
			const localizedUnit = danishUnits[key][grammaticalForm];

			parts.push(`${value} ${localizedUnit}`);
		}
	}

	// Fallback if the difference is less than a second
	if (parts.length === 0) {
		parts.push(`0 sekunder`);
	}

	// 3. Combine them using Danish list formatting ("og" placement)
	const listFormatter = new Intl.ListFormat('da', { style: 'long', type: 'conjunction' });
	const combinedDuration = listFormatter.format(parts);

	// 4. Wrap it in the Danish "For ... siden" structure exactly once
	return {
		string: combinedDuration,
		parts
	};
}
