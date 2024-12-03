<script lang="ts">
	import { writable } from 'svelte/store';

	// Stores to hold the current question, answer status, and wrong attempts
	let currentAnswer = '';
	let message = 'What is the capital of France?'; // Initial question
	let correctAnswer = 'paris'; // Correct answer for the question
	let answerCorrect = writable(false);
	let answerLocked = writable(false);
	let feedbackMessage = writable('');
	let wrongAttempts = writable(0); // Counter for wrong attempts

	// Function to handle keydown events
	function handleKeydown(event: KeyboardEvent): void {
		if ($answerLocked) return; // Prevent further input after the answer is locked

		const key = event.key;

		if (key === 'Enter') {
			checkAnswer(); // Check answer when the user presses Enter
		} else if (key === 'Backspace') {
			currentAnswer = currentAnswer.slice(0, -1); // Remove last character on Backspace
		} else if (/^[a-zA-Z]$/.test(key) && currentAnswer.length < correctAnswer.length) {
			currentAnswer += key.toLowerCase(); // Add letter to answer
		}
	}

	// Function to check if the answer is correct
	function checkAnswer(): void {
		if (currentAnswer.toLowerCase() === correctAnswer) {
			answerCorrect.set(true); // Set answer as correct
			feedbackMessage.set('Correct!');
			answerLocked.set(true); // Lock the input
		} else {
			// Increment the wrong attempts counter
			wrongAttempts.update(count => count + 1);
			feedbackMessage.set('Incorrect! Try again.');
		}
	}

	// Optionally, you can reset the game state here if needed
	function resetGame() {
		currentAnswer = '';
		answerCorrect.set(false);
		answerLocked.set(false);
		wrongAttempts.set(0); // Reset the counter
		feedbackMessage.set('');
	}
</script>

<svelte:window on:keydown={handleKeydown} />

<main class="min-h-screen flex flex-col items-center bg-gray-100 py-6 px-4 sm:px-6">
	<h1 class="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">Question Game</h1>

	<!-- Display Question and Answer Box -->
	<div class="mb-4 text-center">
		<p class="text-lg sm:text-xl text-gray-800 mb-4">{message}</p>

		<!-- Answer Box -->
		<div class="flex justify-center gap-2">
			{#each Array(correctAnswer.length) as _, i}
                <span
									class="w-10 h-10 flex items-center justify-center border border-gray-400 rounded text-lg uppercase
                    {currentAnswer[i] ? 'bg-gray-300' : ''}"
								>
                    {currentAnswer[i] || ''}
                </span>
			{/each}
		</div>
	</div>

	<!-- Feedback Message -->
	<p class="mt-4 text-lg text-gray-800">{$feedbackMessage}</p>

	<!-- Wrong Attempts Counter -->
	<p class="mt-4 text-sm sm:text-base text-gray-600">
		Incorrect attempts: <span class="font-bold">{$wrongAttempts}</span>
	</p>

	<!-- Next Step Message after Correct Answer -->
	{#if $answerCorrect}
		<p class="mt-6 text-lg text-green-500">
			Great job! You've completed this question. The next step is to proceed with a new task.
		</p>
	{/if}

</main>

<style>
    .w-10 {
        width: 2.5rem;
    }
    .h-10 {
        height: 2.5rem;
    }
    .text-lg {
        font-size: 1.125rem;
    }
</style>
