import { writable } from 'svelte/store';

export type Feedback = {
	letter: string;
	status: 'correct' | 'present' | 'absent';
};

export type Attempt = {
	guess: string;
	feedback: Feedback[];
};

export const solution = 'buanderie';

const storedAttempts = localStorage.getItem('attempts');
const storedLocked = localStorage.getItem('locked');

export const attempts = writable<Attempt[]>(storedAttempts ? JSON.parse(storedAttempts) : []);
export const locked = writable<boolean>(storedLocked === 'true');

// Save state to localStorage
attempts.subscribe(value => localStorage.setItem('attempts', JSON.stringify(value)));
locked.subscribe(value => localStorage.setItem('locked', JSON.stringify(value)));