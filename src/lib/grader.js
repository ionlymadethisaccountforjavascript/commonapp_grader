/**
 * Common App Essay Prompts and Evaluation Engine
 */

export const COMMON_APP_PROMPTS = [
	{
		id: 'prompt-1',
		number: 1,
		title: 'Background, Identity, Interest, or Talent',
		shortLabel: 'Prompt 1: Identity & Background',
		promptText:
			'Some students have a background, identity, interest, or talent that is so meaningful they believe their application would be incomplete without it. If this sounds like you, then please share your story.',
		coreAdvice:
			'Avoid recounting a laundry list of activities. Focus on *why* this identity or interest matters, your internal voice, and how it shapes your worldview.',
		idealVspice: ['Expression', 'Vulnerability', 'Curiosity']
	},
	{
		id: 'prompt-2',
		number: 2,
		title: 'Lessons from Obstacles & Setbacks',
		shortLabel: 'Prompt 2: Obstacles & Failure',
		promptText:
			'The lessons we take from obstacles we encounter can be fundamental to later success. Recount a time when you faced a challenge, setback, or failure. How did it affect you, and what did you learn from the experience?',
		coreAdvice:
			'Spend at most 30% detailing the obstacle itself, and 70% on your internal processing, emotional resilience, adaptation, and actionable growth.',
		idealVspice: ['Perseverance', 'Vulnerability', 'Initiative']
	},
	{
		id: 'prompt-3',
		number: 3,
		title: 'Challenging a Belief or Idea',
		shortLabel: 'Prompt 3: Challenging a Belief',
		promptText:
			'Reflect on a time when you questioned or challenged a belief or idea. What prompted your thinking? What was the outcome?',
		coreAdvice:
			'Admissions officers look for intellectual humility, open-minded inquiry, and nuanced ethical reasoning, not combative dogmatism.',
		idealVspice: ['Curiosity', 'Initiative', 'Vulnerability']
	},
	{
		id: 'prompt-4',
		number: 4,
		title: 'Reflecting on Gratitude / Act of Kindness',
		shortLabel: 'Prompt 4: Gratitude & Kindness',
		promptText:
			'Reflect on something that someone has done for you that has made you happy or thankful in a surprising way. How has this gratitude affected or motivated you?',
		coreAdvice:
			'Make sure you remain the protagonist. The other person sparks the gratitude, but the essay must show how it changed your actions toward others.',
		idealVspice: ['Selflessness', 'Vulnerability', 'Expression']
	},
	{
		id: 'prompt-5',
		number: 5,
		title: 'Personal Growth & Accomplishment',
		shortLabel: 'Prompt 5: Personal Growth',
		promptText:
			'Discuss an accomplishment, event, or realization that sparked a period of personal growth and a new understanding of yourself or others.',
		coreAdvice:
			'The transition from childhood to mature responsibility is key. Show vulnerability about who you were before vs. who you became.',
		idealVspice: ['Vulnerability', 'Initiative', 'Selflessness']
	},
	{
		id: 'prompt-6',
		number: 6,
		title: 'Captivating Topic & Intellectual Curiosity',
		shortLabel: 'Prompt 6: Intellectual Curiosity',
		promptText:
			'Describe a topic, idea, or concept you find so engaging that it makes you lose all track of time. Why does it captivate you? What or who do you turn to when you want to learn more?',
		coreAdvice:
			'Show your obsession in concrete detail. Dive into your thought experiments, field experiments, rabbit holes, and the thrill of discovery.',
		idealVspice: ['Curiosity', 'Expression', 'Initiative']
	},
	{
		id: 'prompt-7',
		number: 7,
		title: 'Topic of Your Choice',
		shortLabel: 'Prompt 7: Topic of Choice',
		promptText:
			"Share an essay on any topic of your choice. It can be one you've already written, one that responds to a different prompt, or one of your own design.",
		coreAdvice:
			'Freedom brings responsibility: ensure the essay has clear narrative momentum, vivid personal perspective, and deep self-reflection.',
		idealVspice: ['Expression', 'Vulnerability', 'Curiosity']
	}
];

export const SAMPLE_ESSAYS = [
	{
		id: 'sample-high',
		name: 'Strong Applicant Essay: "The Solder Smoke & Midnight Clocks"',
		promptId: 'prompt-6',
		text: `The scent of rosin flux is sharp, slightly piney, and lingers in denim for days. At thirteen, while my classmates traded Fortnite skins, I was elbow-deep in a deceased 1968 Telefunken radio picked up for four dollars at a damp yard sale. Its walnut veneer was splintered, and inside lay a constellation of dusty vacuum tubes, wax-paper capacitors, and charred resistors that smelled like scorched lightning.

I didn't know Ohm's law. What I possessed instead was an itchy, irrational urge to understand how an invisible invisible wave caught in a copper antenna could transmute into Duke Ellington's clarinet.

My first three restoration attempts ended in tripped circuit breakers and one very scorched Persian rug. In my panic, I had soldered a 50-microfarad capacitor backward, blowing its aluminum cap straight toward the drywall with a gunshot pop. My father stood in the workshop doorway, arms crossed. Instead of confiscating my tools, he sighed, retrieved a yellowed 1972 RCA receiving tube manual from the attic, and slid it across my workbench: "Read chapter four before you burn the mortgage."

That manual became my talmud. I spent evenings translating schematic hieroglyphics: plate dissipation curves, cathode bias resistances, grid leaks. I started lurking on obscure Usenet web archives where retired German audio engineers in their seventies argued fiercely in broken English about parasitic oscillations. Whenever my solder joints turned dull and cold, I would photograph them with my phone and post them to the forum. A user named 'Klaus_Munich' took pity on me, critiquing my lead dress and teaching me how to listen to hum: sixty hertz meant power ripple; one-hundred-twenty meant rectifier imbalance; a high whistling hiss was RF feedback.

Repairing archaic hardware taught me something textbooks never could: diagnostic humility. You cannot bully a circuit into operating through sheer willpower. When a plate voltage reads 380 volts instead of 250, the resistor is not being stubborn; physics is simply telling you the truth about your wiring mistake. 

Last winter, I designed a low-noise regenerative receiver from scrap copper boards and shared the open-source schematics with our school's amateur radio club. Guiding a freshman through winding their first ferrite toroid, I caught the familiar tang of solder smoke and watched their eyes widen as WWV's atomic time beacon ticked through the speaker. Science isn't merely an academic ledger of known answers; it is an enduring conversation with the things we have yet to fix.`
	},
	{
		id: 'sample-cliche',
		name: 'Needs Revision: "The Big Game & Winning Shot" (Cliché / Low VSPICE)',
		promptId: 'prompt-2',
		text: `Sweat poured down my forehead as the seconds ticked away on the big digital scoreboard. The championship basketball game was on the line, and the gymnasium was roaring with deafening noise. I had practiced my three-point shot for countless hours every single day after school. My coach always said that hard work pays off and winners never quit.

Suddenly, our point guard passed me the ball. I looked at the clock: 3... 2... 1... I leaped into the air, perfectly aligned my elbow, and released the basketball with complete follow-through. Swish! The ball went right through the net as the buzzer sounded. We won the state championship by one single point! Everyone rushed onto the court and lifted me up.

This experience taught me the true meaning of perseverance, teamwork, and leadership. Through dedication and determination, anything in life is possible if you just set your mind to it. In college, I will bring this exact same champion mindset to all of my classes and student organizations. I know that success comes to those who refuse to give up, and I look forward to contributing my skills to the campus community.`
	}
];

// Helper to count words, sentences, syllables
export function analyzeTextBasics(text) {
	const trimmed = text.trim();
	if (!trimmed) {
		return {
			wordCount: 0,
			charCount: 0,
			sentenceCount: 0,
			paragraphCount: 0,
			readingTimeMinutes: 0,
			readabilityScore: 0,
			readabilityLevel: 'N/A'
		};
	}

	const words = trimmed.match(/\b[A-Za-z0-9'-]+\b/g) || [];
	const wordCount = words.length;
	const charCount = trimmed.length;

	// Sentences split by . ! ? followed by space or end
	const sentences = trimmed
		.split(/[.!?]+(?:\s+|$)/)
		.map((s) => s.trim())
		.filter((s) => s.length > 0);
	const sentenceCount = Math.max(1, sentences.length);

	const paragraphs = trimmed
		.split(/\n\s*\n/)
		.map((p) => p.trim())
		.filter((p) => p.length > 0);
	const paragraphCount = Math.max(1, paragraphs.length);

	// Syllable approximation
	let totalSyllables = 0;
	for (const word of words) {
		totalSyllables += countSyllables(word);
	}

	// Flesch Reading Ease: 206.835 - 1.015 * (total words / total sentences) - 84.6 * (total syllables / total words)
	const wordsPerSentence = wordCount / sentenceCount;
	const syllablesPerWord = wordCount > 0 ? totalSyllables / wordCount : 1;
	let flesch = 206.835 - 1.015 * wordsPerSentence - 84.6 * syllablesPerWord;
	flesch = Math.max(0, Math.min(100, Math.round(flesch)));

	let readabilityLevel = 'College Ready';
	if (flesch > 70) readabilityLevel = 'Very Accessible / Conversational';
	else if (flesch >= 55) readabilityLevel = 'Balanced & Engaging (Optimal)';
	else if (flesch >= 40) readabilityLevel = 'Complex / Academic';
	else readabilityLevel = 'Dense / Overly Complex';

	const readingTimeMinutes = Math.max(0.5, Math.round((wordCount / 220) * 10) / 10);

	return {
		wordCount,
		charCount,
		sentenceCount,
		paragraphCount,
		readingTimeMinutes,
		readabilityScore: flesch,
		readabilityLevel
	};
}

function countSyllables(word) {
	word = word.toLowerCase().replace(/[^a-z]/g, '');
	if (word.length <= 3) return 1;
	word = word.replace(/(?:[^laeiouy]|ed|es|e)$/, '');
	word = word.replace(/^y/, '');
	const matches = word.match(/[aeiouy]{1,2}/g);
	return matches ? Math.max(1, matches.length) : 1;
}

// Full evaluation algorithm
export function gradeCommonAppEssay(text, promptId) {
	const prompt = COMMON_APP_PROMPTS.find((p) => p.id === promptId) || COMMON_APP_PROMPTS[0];
	const basics = analyzeTextBasics(text);
	const lower = text.toLowerCase();

	if (basics.wordCount < 100) {
		return {
			isValid: false,
			message: `Your draft currently contains ${basics.wordCount} words. A standard Common App essay requires between 250 and 650 words. Please add more substance to get an accurate evaluation.`
		};
	}

	// 1. Authenticity Analysis (0 - 100)
	// Factors: sensory details, specific names/tools/places, personal reflection ("I realized", "admitted", "hesitated"), absence of generic resume puffery
	const sensoryWords = [
		'smell', 'scent', 'aroma', 'hum', 'hiss', 'clink', 'buzz', 'taste', 'sharp', 'damp',
		'cold', 'warm', 'sticky', 'rough', 'smooth', 'rattle', 'whisper', 'screech', 'glare',
		'shadow', 'glow', 'tang', 'scorched', 'acrid', 'splintered', 'cracked', 'brass', 'copper',
		'pine', 'smoke', 'canvas', 'rust', 'creak', 'shiver', 'pulse'
	];
	const sensoryHits = sensoryWords.filter((w) => new RegExp(`\\b${w}\\b`, 'i').test(lower));

	const introspectiveWords = [
		'realized', 'confess', 'admit', 'feared', 'doubted', 'wondered', 'grappled', 'hesitated',
		'questioned', 'embarrassed', 'mistake', 'flaw', 'learned', 'ashamed', 'misjudged', 'understood'
	];
	const introspectiveHits = introspectiveWords.filter((w) => new RegExp(`\\b${w}\\b`, 'i').test(lower));

	// Clichés that hurt authenticity
	const cliches = [
		'hard work pays off',
		'sweat poured',
		'championship game',
		'winners never quit',
		'changed my life forever',
		'broaden my horizons',
		'step out of my comfort zone',
		'rollercoaster of emotions',
		'through thick and thin',
		'passion is my middle name',
		'it taught me the value of',
		'since the dawn of time',
		'dictionary defines',
		'in today\'s society',
		'winning isn\'t everything'
	];
	const clichesFound = cliches.filter((c) => lower.includes(c));

	let authenticityScore = 65;
	authenticityScore += Math.min(18, sensoryHits.length * 3.5);
	authenticityScore += Math.min(18, introspectiveHits.length * 3);
	authenticityScore -= clichesFound.length * 8;
	if (basics.wordCount >= 450 && basics.wordCount <= 650) authenticityScore += 5;
	authenticityScore = Math.max(25, Math.min(98, Math.round(authenticityScore)));

	// 2. Effectiveness of Delivery (0 - 100)
	// Factors: sentence length variance, narrative arc (hook -> complication -> insight), paragraphing
	const sentences = text
		.split(/[.!?]+(?:\s+|$)/)
		.map((s) => s.trim())
		.filter((s) => s.length > 0);
	const sentenceLengths = sentences.map((s) => (s.match(/\b\w+\b/g) || []).length).filter((l) => l > 0);
	
	let lengthVariance = 0;
	if (sentenceLengths.length > 2) {
		const mean = sentenceLengths.reduce((a, b) => a + b, 0) / sentenceLengths.length;
		const variance = sentenceLengths.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / sentenceLengths.length;
		lengthVariance = Math.sqrt(variance);
	}

	let deliveryScore = 60;
	// Good rhythmic variance gives +15
	if (lengthVariance >= 6) deliveryScore += 16;
	else if (lengthVariance >= 4) deliveryScore += 10;
	else deliveryScore -= 6; // robotic mono-rhythm

	// Paragraph structure: ideally 4 - 7 paragraphs for 500-650 words
	if (basics.paragraphCount >= 4 && basics.paragraphCount <= 7) deliveryScore += 12;
	else if (basics.paragraphCount === 3 || basics.paragraphCount === 8) deliveryScore += 6;
	else if (basics.paragraphCount <= 2) deliveryScore -= 12; // giant wall of text

	// Hook quality: first sentence punchiness (<28 words, contains active verbs or scene)
	const firstSentence = sentences[0] || '';
	const firstSentenceWords = (firstSentence.match(/\b\w+\b/g) || []).length;
	if (firstSentenceWords > 0 && firstSentenceWords <= 25) deliveryScore += 6;

	// Word count penalty if under 350 or over 650
	if (basics.wordCount > 650) {
		const over = basics.wordCount - 650;
		deliveryScore -= Math.min(25, Math.ceil(over / 15) * 3);
	} else if (basics.wordCount < 400) {
		deliveryScore -= 10;
	}

	deliveryScore = Math.max(25, Math.min(98, Math.round(deliveryScore)));

	// 3. VSPICE Criteria Evaluation
	// V = Vulnerability
	// S = Selflessness
	// P = Perseverance
	// I = Initiative
	// C = Curiosity
	// E = Expression
	const vspiceResults = evaluateVspice(lower, sentences, prompt);

	// Count qualifying pillars (score >= 65 is considered active/good, 3 or more is target!)
	const activeCount = Object.values(vspiceResults).filter((v) => v.score >= 68).length;
	const moderateCount = Object.values(vspiceResults).filter((v) => v.score >= 52 && v.score < 68).length;

	// Overall composite score (0-100) & Letter Grade
	const vspiceAverage = Math.round(
		Object.values(vspiceResults).reduce((acc, v) => acc + v.score, 0) / 6
	);
	
	let compositeScore = Math.round(
		authenticityScore * 0.3 + deliveryScore * 0.3 + vspiceAverage * 0.4
	);
	
	// Bonus if meets 3+ VSPICE criteria
	if (activeCount >= 3) {
		compositeScore = Math.min(100, compositeScore + 3);
	} else if (activeCount < 2) {
		compositeScore = Math.max(30, compositeScore - 4);
	}

	const letterGrade = getLetterGrade(compositeScore);
	const verdict = getVerdict(compositeScore, activeCount, basics.wordCount);

	// Generate actionable, constructive feedback
	const feedback = generateFeedback({
		basics,
		authenticityScore,
		deliveryScore,
		vspiceResults,
		activeCount,
		clichesFound,
		sensoryHits,
		prompt,
		lengthVariance
	});

	return {
		isValid: true,
		prompt,
		basics,
		scores: {
			overall: compositeScore,
			letterGrade,
			authenticity: authenticityScore,
			delivery: deliveryScore,
			vspiceAverage
		},
		vspice: vspiceResults,
		vspiceSummary: {
			activeCount,
			isTargetMet: activeCount >= 3,
			headline:
				activeCount >= 3
					? `Target Achieved: ${activeCount} of 6 VSPICE Pillars Active (ElevatEd Standard: 3+ is Good)`
					: `Target Incomplete: Only ${activeCount} of 6 Pillars Strongly Present (Aim for at least 3)`
		},
		clichesFound,
		verdict,
		feedback
	};
}

function evaluateVspice(text, sentences, prompt) {
	// Vulnerability (V)
	const vKeywords = [
		'fail', 'failed', 'failure', 'cried', 'panic', 'shame', 'ashamed', 'afraid', 'fear',
		'flaw', 'insecure', 'impostor', 'doubt', 'embarrass', 'humiliated', 'mistake', 'scared',
		'confess', 'admit', 'vulnerable', 'weakness', 'hopeless', 'loss', 'grief'
	];
	const vHits = vKeywords.filter((k) => new RegExp(`\\b${k}\\b`, 'i').test(text));
	let vScore = Math.min(95, 38 + vHits.length * 10);
	if (vHits.length >= 3) vScore = Math.max(vScore, 75);

	// Selflessness (S)
	const sKeywords = [
		'helped', 'mentor', 'listened', 'empathy', 'sacrifice', 'generous', 'supported', 'volunteer',
		'shared', 'community', 'elder', 'freshman', 'giving', 'compassion', 'care', 'teammate', 'neighbor',
		'kindness', 'unnoticed', 'behind the scenes', 'lifted'
	];
	const sHits = sKeywords.filter((k) => new RegExp(`\\b${k}\\b`, 'i').test(text));
	let sScore = Math.min(95, 35 + sHits.length * 11);
	if (sHits.length >= 3) sScore = Math.max(sScore, 74);

	// Perseverance (P)
	const pKeywords = [
		'grit', 'tireless', 'exhausted', 'rebuilt', 'retried', 'pushed through', 'persisted',
		'long nights', 'setback', 'obstacle', 'refused to quit', 'try again', 'revision', 'redo',
		'sweat', 'resilience', 'endured', 'overcame', 'stumbled', 'picked myself up'
	];
	const pHits = pKeywords.filter((k) => new RegExp(`\\b${k}\\b`, 'i').test(text));
	let pScore = Math.min(95, 36 + pHits.length * 10);
	if (pHits.length >= 3) pScore = Math.max(pScore, 76);

	// Initiative (I)
	const iKeywords = [
		'founded', 'created', 'organized', 'launched', 'designed', 'built', 'spearheaded', 'took charge',
		'proposed', 'pioneered', 'initiated', 'without being asked', 'gathered', 'reached out',
		'drafted', 'established', 'invented', 'coded', 'engineered', 'led'
	];
	const iHits = iKeywords.filter((k) => new RegExp(`\\b${k}\\b`, 'i').test(text));
	let iScore = Math.min(95, 35 + iHits.length * 11);
	if (iHits.length >= 3) iScore = Math.max(iScore, 77);

	// Curiosity (C)
	const cKeywords = [
		'wondered', 'fascinated', 'rabbit hole', 'archive', 'investigated', 'devoured', 'manual',
		'hypothesis', 'dissected', 'experiment', 'why', 'theory', 'reading', 'schematic', 'obsessed',
		'intrigued', 'inquiry', 'puzzled', 'tinkered', 'discovered', 'researched'
	];
	const cHits = cKeywords.filter((k) => new RegExp(`\\b${k}\\b`, 'i').test(text));
	let cScore = Math.min(95, 36 + cHits.length * 10);
	if (cHits.length >= 3) cScore = Math.max(cScore, 78);

	// Expression (E) - voice, metaphor, sensory, distinct cadence
	const eKeywords = [
		'metaphor', 'rhythm', 'echo', 'irony', 'cadence', 'canvas', 'harmony', 'vivid', 'brush',
		'analog', 'texture', 'symphony', 'humor', 'absurd'
	];
	const eHits = eKeywords.filter((k) => new RegExp(`\\b${k}\\b`, 'i').test(text));
	// Expression also rewards rich vocabulary and quotes / dialogue
	const hasDialogue = /"[^"]{3,80}"/.test(text);
	let eScore = Math.min(95, 42 + eHits.length * 8 + (hasDialogue ? 12 : 0));
	if (eHits.length >= 2 && hasDialogue) eScore = Math.max(eScore, 75);

	return {
		vulnerability: {
			name: 'Vulnerability',
			letter: 'V',
			score: Math.round(vScore),
			hits: vHits.slice(0, 6),
			description:
				'Willingness to reveal flaws, doubts, failures, or emotional stakes rather than presenting an unbroken resume armor.'
		},
		selflessness: {
			name: 'Selflessness',
			letter: 'S',
			score: Math.round(sScore),
			hits: sHits.slice(0, 6),
			description:
				'Showing altruism, genuine care for peers/community, and recognizing other humans as central, not just props in your story.'
		},
		perseverance: {
			name: 'Perseverance',
			letter: 'P',
			score: Math.round(pScore),
			hits: pHits.slice(0, 6),
			description:
				'Demonstrating resilience through repeated trial, adaptation, and sustained effort across hurdles without self-pity.'
		},
		initiative: {
			name: 'Initiative',
			letter: 'I',
			score: Math.round(iScore),
			hits: iHits.slice(0, 6),
			description:
				'Taking independent action without adult hand-holding; founding, building, or solving problems on your own steam.'
		},
		curiosity: {
			name: 'Curiosity',
			letter: 'C',
			score: Math.round(cScore),
			hits: cHits.slice(0, 6),
			description:
				'An unquenchable hunger to learn, tumble down intellectual rabbit holes, question assumptions, and explore ideas for the joy of knowing.'
		},
		expression: {
			name: 'Expression',
			letter: 'E',
			score: Math.round(eScore),
			hits: eHits.slice(0, 6),
			description:
				'Distinct authorial voice, lyrical or punchy style, creative analogies, crisp humor, and evocative sensory craft.'
		}
	};
}

function getLetterGrade(score) {
	if (score >= 93) return 'A+';
	if (score >= 88) return 'A';
	if (score >= 84) return 'A-';
	if (score >= 80) return 'B+';
	if (score >= 75) return 'B';
	if (score >= 70) return 'B-';
	if (score >= 65) return 'C+';
	if (score >= 60) return 'C';
	return 'Needs Revision';
}

function getVerdict(score, activeVspice, wordCount) {
	if (wordCount > 650) {
		return {
			badge: 'Word Count Exceeded',
			tone: 'danger',
			summary: `At ${wordCount} words, your essay exceeds the hard 650-word Common App limit. Admissions software cuts off text at 650 words.`
		};
	}
	if (wordCount < 250) {
		return {
			badge: 'Too Short',
			tone: 'warning',
			summary: `At ${wordCount} words, the essay is too brief for an admissions officer to evaluate your depth of reflection.`
		};
	}
	if (score >= 88 && activeVspice >= 3) {
		return {
			badge: 'Competitive / Top Tier',
			tone: 'success',
			summary:
				'Exceptional personal statement. You display authentic reflection, dynamic sentence craft, and hit 3+ core VSPICE pillars (recommended standard).'
		};
	}
	if (score >= 75 && activeVspice >= 3) {
		return {
			badge: 'Solid Contender (3+ VSPICE Met)',
			tone: 'success',
			summary:
				'Strong foundation that satisfies the 3+ VSPICE standard. A few passes of polishing sensory texture and punchy transitions will push this into the top bracket.'
		};
	}
	if (activeVspice < 3) {
		return {
			badge: 'Needs Flavor & Depth',
			tone: 'warning',
			summary: `You currently hit only ${activeVspice} active VSPICE pillar(s). The benchmark for competitive essays is 3 or more pillars (e.g. Vulnerability + Curiosity + Expression).`
		};
	}
	return {
		badge: 'Good Potential / Refinement Needed',
		tone: 'info',
		summary:
			'The core premise is viable, but delivery and voice need tightening to hook the admissions officer in the first 30 seconds.'
	};
}

function generateFeedback({
	basics,
	authenticityScore,
	deliveryScore,
	vspiceResults,
	activeCount,
	clichesFound,
	sensoryHits,
	prompt,
	lengthVariance
}) {
	const items = [];

	// 1. Word count & length constraints
	if (basics.wordCount > 650) {
		items.push({
			category: 'Word Count Rule',
			type: 'critical',
			title: `Exceeds 650-Word Ceiling (${basics.wordCount} words)`,
			advice: `You must trim ${basics.wordCount - 650} words. Look for redundant filler phrases like "in order to", "due to the fact that", "I came to the realization that", and replace them with direct active verbs.`
		});
	} else if (basics.wordCount < 450) {
		items.push({
			category: 'Depth & Expansion',
			type: 'warning',
			title: `Slightly Under Ideal Length (${basics.wordCount} / 650 words)`,
			advice:
				'Most top essays sit between 520 and 640 words. You have room to show one more specific scene, dialogue beat, or unpack your internal thought process during a pivot point.'
		});
	} else {
		items.push({
			category: 'Pacing & Length',
			type: 'strength',
			title: `Optimal Word Count (${basics.wordCount} words)`,
			advice:
				'Your essay falls comfortably in the sweet spot (450–650 words), leaving enough room for both narrative immersion and deep philosophical reflection.'
		});
	}

	// 2. VSPICE 3+ Check
	if (activeCount >= 3) {
		const activeNames = Object.values(vspiceResults)
			.filter((v) => v.score >= 68)
			.map((v) => v.name)
			.join(', ');
		items.push({
			category: 'VSPICE Criteria Standard',
			type: 'strength',
			title: `VSPICE Criterion Met (${activeCount} Active: ${activeNames})`,
			advice: `Great job! You satisfy the ElevatEd admissions rule (3 or more pillars is considered good). This gives your personal statement emotional multi-dimensionality without feeling one-note.`
		});
	} else {
		const inactive = Object.values(vspiceResults)
			.filter((v) => v.score < 68)
			.map((v) => v.name)
			.slice(0, 3)
			.join(' or ');
		items.push({
			category: 'VSPICE Criteria Standard',
			type: 'critical',
			title: `VSPICE Deficit: Only ${activeCount} Pillar(s) Strongly Felt`,
			advice: `The standard rubric targets at least 3 active pillars (Vulnerability, Selflessness, Perseverance, Initiative, Curiosity, Expression). Try integrating more ${inactive}. For instance, show a moment where you admitted failure or pursued a concept out of pure unprompted curiosity.`
		});
	}

	// 3. Authenticity & Cliches
	if (clichesFound.length > 0) {
		items.push({
			category: 'Authenticity & Clichés',
			type: 'critical',
			title: `Avoid Generic Clichés (${clichesFound.length} detected)`,
			advice: `We detected phrases like: "${clichesFound.join('", "')}". Admissions officers read hundreds of essays a week; these clichés signal an essay that sounds like everyone else. Replace clichés with unique, sensory, grounded descriptions.`
		});
	} else if (authenticityScore >= 80) {
		items.push({
			category: 'Authenticity',
			type: 'strength',
			title: 'Authentic Voice & Specificity',
			advice:
				'Your draft avoids the tired high-school hero tropes. The details feel lived-in and honest rather than engineered to impress an admissions committee.'
		});
	} else {
		items.push({
			category: 'Authenticity',
			type: 'suggestion',
			title: 'Inject More Sensory Grounding',
			advice:
				'Your essay would benefit from concrete nouns and sensory anchors (sounds, smells, physical tactile objects). Ground the reader in the room with you before launching into abstract reflections.'
		});
	}

	// 4. Delivery & Cadence
	if (lengthVariance < 4.5) {
		items.push({
			category: 'Delivery & Rhythm',
			type: 'suggestion',
			title: 'Monotonous Sentence Length (Low Cadence Variance)',
			advice:
				'Many of your sentences are approximately the same length. Mix very short, punchy sentences (3-6 words) with compound, flowing sentences (20-30 words) to create musical rhythm and control the reader’s breathing.'
		});
	} else {
		items.push({
			category: 'Delivery & Rhythm',
			type: 'strength',
			title: 'Dynamic Sentence Variety',
			advice:
				'Strong rhythmic modulation. You combine short declarations with expansive narrative clauses, keeping the reader actively engaged throughout.'
		});
	}

	// 5. Prompt-specific alignment
	items.push({
		category: `Alignment with ${prompt.shortLabel}`,
		type: 'info',
		title: `Tailored Advice for ${prompt.title}`,
		advice: prompt.coreAdvice
	});

	// 6. 2x Solution vs Problem Rule
	items.push({
		category: 'The 2:1 Resolution Ratio',
		type: 'suggestion',
		title: 'Ensure 2x More Solution Than Problem',
		advice:
			'Admissions officers frequently warn that applicants spend 70% of the essay setting up their struggle, trauma, or obstacle, leaving only 30% for who they became. Invert this: keep the problem crisp (30%) and devote 70% to your agency, problem-solving, and mature worldview.'
	});

	return items;
}
