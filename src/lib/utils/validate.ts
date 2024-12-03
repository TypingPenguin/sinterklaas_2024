// src/lib/utils/validate.ts
import type { Feedback } from '../stores/game';

export function validateGuess(guess: string, solution: string): Feedback[] {
	const feedback: Feedback[] = [];
	const solutionArr = solution.split('');

	guess.split('').forEach((letter, index) => {
		if (letter === solutionArr[index]) {
			feedback.push({ letter, status: 'correct' });
			solutionArr[index] = null; // Mark as used
		} else if (solutionArr.includes(letter)) {
			feedback.push({ letter, status: 'present' });
			solutionArr[solutionArr.indexOf(letter)] = null; // Mark as used
		} else {
			feedback.push({ letter, status: 'absent' });
		}
	});

	return feedback;
}