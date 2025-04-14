// Change the theme based on the user's preference
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
	document.documentElement.setAttribute('data-bs-theme', 'dark');
}

const checkAnswers = () => {
    const ansKey = {
        1: 'd',
        2: 'b',
        3: 'a'
    };

    const qs = Object.keys(ansKey);
    let correct = 0;
    const feedback = document.querySelector('#feedback');

    for (const q of qs) {
        const ans = document.querySelector(`input[name="q${q}"]:checked`);
        
        if (!ans) {
            feedback.textContent = 'You have unanswered questions!';
            feedback.className = 'text-danger';
            return;
        }

        if (ans.value == ansKey[q]) {
            correct++;
        }
    }

    if (correct === qs.length) {
        feedback.textContent = 'All questions are correct!';
        feedback.className = 'text-success';
    }
    else {
        feedback.textContent = `You got ${correct} out of ${qs.length} questions correct.`;
        feedback.className = 'text-danger';
    }
};
