<script lang="ts">
	import { solution, attempts, locked } from '$lib/stores/game';
	import { validateGuess } from '$lib/utils/validate';
	import { get } from 'svelte/store';

	import type { Feedback } from '$lib/stores/game';

	let currentGuess = '';
	let maxAttempts = 6;

	let showInfo = false; // Controls the visibility of the info modal

	function handleKeydown(event: KeyboardEvent): void {
		const key = event.key;

		if (get(locked)) return;

		if (key === 'Enter' && currentGuess.length === solution.length) {
			submitGuess();
		} else if (key === 'Backspace') {
			currentGuess = currentGuess.slice(0, -1);
		} else if (/^[a-zA-Z]$/.test(key) && currentGuess.length < solution.length) {
			currentGuess += key.toLowerCase();
		}
	}

	function submitGuess(): void {
		const currentAttempts = get(attempts);

		if (currentGuess.length === solution.length) {
			const feedback: Feedback[] = validateGuess(currentGuess, solution);
			attempts.update(a => [...a, { guess: currentGuess, feedback }]);

			if (currentGuess === solution || currentAttempts.length + 1 >= maxAttempts) {
				locked.set(true);
			}

			currentGuess = '';
		}
	}
</script>

<svelte:window on:keydown={handleKeydown} />

<main class="min-h-screen flex flex-col items-center bg-gray-100 py-6 px-4 sm:px-6">
	<h1 class="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">Sint-ordle</h1>

	<!-- Info Button -->
	<div class="mb-4 flex items-center gap-2">
		<button
			class="text-sm font-medium text-blue-600 underline hover:text-blue-800"
			on:click={() => (showInfo = true)}
		>
			Information
		</button>

		{#if showInfo}
			<div class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
				<div class="bg-white p-6 rounded-lg shadow-lg max-w-xs sm:max-w-md">
					<h2 class="text-lg font-bold mb-4">Rules</h2>
					<p class="text-gray-700 text-sm sm:text-base">
						You have 6 attempts to guess the correct word in French. After 6 failed attempts, the game will
						lock, and the location of the gift will no longer be discoverable. Good luck!
					</p>
					<button
						class="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
						on:click={() => (showInfo = false)}
					>
						Close
					</button>
				</div>
			</div>
		{/if}
	</div>

	<!-- Attempt Counter -->
	<p class="mb-4 text-gray-600 text-sm sm:text-base">
		Attempts: <span class="font-bold">{$attempts.length} / {maxAttempts}</span>
	</p>

	<!-- Game Grid -->
	<section class="space-y-4">
		{#each $attempts as attempt}
			<div class="flex justify-center gap-1 sm:gap-2">
				{#each attempt.feedback as { letter, status }}
                    <span
											class="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center border rounded text-sm sm:text-lg font-semibold uppercase
                        {status === 'correct' ? 'bg-green-500 text-white' : ''}
                        {status === 'present' ? 'bg-yellow-500 text-white' : ''}
                        {status === 'absent' ? 'bg-gray-300 text-gray-800' : ''}"
										>
                        {letter}
                    </span>
				{/each}
			</div>
		{/each}

		{#if $attempts.length < maxAttempts && !$locked}
			<div class="flex justify-center gap-1 sm:gap-2">
				{#each Array(solution.length) as _, i}
                    <span
											class="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center border border-gray-400 rounded text-sm sm:text-lg uppercase"
										>
                        {currentGuess[i] || ''}
                    </span>
				{/each}
			</div>
		{/if}
	</section>

	<!-- Game Over Message -->
	{#if $locked}
		<p class="mt-6 text-sm sm:text-lg text-gray-800 text-center">
			Game Over!
		</p>
	{/if}
</main>

<style>
    /* Style for modal background and container */
    .fixed {
        backdrop-filter: blur(5px);
    }
</style>
