<script>
	import {
		COMMON_APP_PROMPTS,
		SAMPLE_ESSAYS,
		analyzeTextBasics,
		gradeCommonAppEssay
	} from '#lib/grader.js';

	// Selected prompt ID from dropdown
	let selectedPromptId = $state(COMMON_APP_PROMPTS[0].id);

	// Essay text input
	let essayText = $state(SAMPLE_ESSAYS[0].text);

	// Quick stats (live reactive)
	let basics = $derived(analyzeTextBasics(essayText));

	// Evaluation result (run on demand or auto)
	let evaluation = $state(null);
	let activeTab = $state('overview'); // 'overview' | 'vspice' | 'feedback' | 'rubric'

	// Find the current selected prompt object
	let selectedPrompt = $derived(
		COMMON_APP_PROMPTS.find((p) => p.id === selectedPromptId) || COMMON_APP_PROMPTS[0]
	);

	// Run grader
	function handleGrade() {
		evaluation = gradeCommonAppEssay(essayText, selectedPromptId);
	}

	// Load sample essay
	function loadSample(sampleId) {
		const sample = SAMPLE_ESSAYS.find((s) => s.id === sampleId);
		if (sample) {
			essayText = sample.text;
			selectedPromptId = sample.promptId;
			handleGrade();
		}
	}

	function clearEssay() {
		essayText = '';
		evaluation = null;
	}

	// Auto-grade on first load with the default sample
	$effect(() => {
		if (!evaluation && essayText) {
			handleGrade();
		}
	});

	// Badge styling helper
	function getGradeColor(grade) {
		if (grade?.startsWith('A')) return '#10b981';
		if (grade?.startsWith('B')) return '#3b82f6';
		if (grade?.startsWith('C')) return '#f59e0b';
		return '#f43f5e';
	}
</script>

<main class="page-wrap">
	<!-- Ambient Background Glows -->
	<div class="ambient-glow glow-1"></div>
	<div class="ambient-glow glow-2"></div>

	<!-- Top Navigation Bar -->
	<header class="header">
		<div class="header-inner">
			<div class="brand">
				<div class="logo-icon">
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
					</svg>
				</div>
				<div>
					<h1 class="brand-title">CommonApp Grader</h1>
					<p class="brand-subtitle">US College Admissions • VSPICE Rubric & Delivery Engine</p>
				</div>
			</div>

			<div class="header-actions">
				<button class="sample-btn" onclick={() => loadSample('sample-high')}>
					<span>✨</span> Load Competitive Essay
				</button>
				<button class="sample-btn secondary" onclick={() => loadSample('sample-cliche')}>
					<span>⚠️</span> Load Cliché Draft
				</button>
			</div>
		</div>
	</header>

	<!-- Main Workspace -->
	<div class="workspace-grid">
		<!-- Left Column: Prompt Selector & Essay Editor -->
		<section class="editor-pane">
			<!-- Prompt Dropdown Card -->
			<div class="card prompt-card">
				<div class="prompt-header">
					<label for="prompt-select" class="field-label">
						<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
							<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
							<path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
						</svg>
						Select Common App Personal Statement Prompt (1 - 7)
					</label>
					<span class="badge prompt-badge">Dropdown Selector</span>
				</div>

				<div class="select-wrapper">
					<select
						id="prompt-select"
						class="dropdown-select"
						bind:value={selectedPromptId}
						onchange={handleGrade}
					>
						{#each COMMON_APP_PROMPTS as p}
							<option value={p.id}>
								{p.shortLabel}: {p.title}
							</option>
						{/each}
					</select>
					<div class="dropdown-chevron">
						<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
							<polyline points="6 9 12 15 18 9"/>
						</svg>
					</div>
				</div>

				<!-- Prompt detail callout -->
				<div class="prompt-text-box">
					<div class="prompt-quote">
						“{selectedPrompt.promptText}”
					</div>
					<div class="prompt-meta">
						<span class="meta-label">Admissions Insight:</span>
						<span class="meta-content">{selectedPrompt.coreAdvice}</span>
					</div>
				</div>
			</div>

			<!-- Essay Input Card -->
			<div class="card editor-card">
				<div class="editor-header">
					<div class="editor-title-group">
						<h2 class="section-heading">Your Personal Statement Draft</h2>
						<span class="word-pill" class:pill-danger={basics.wordCount > 650} class:pill-warning={basics.wordCount < 250 && basics.wordCount > 0}>
							<strong>{basics.wordCount}</strong> / 650 words
						</span>
					</div>
					<button class="clear-btn" onclick={clearEssay} title="Clear text">
						Clear Draft
					</button>
				</div>

				<div class="textarea-container">
					<textarea
						class="essay-textarea"
						placeholder="Paste your Common Application personal statement here (250 - 650 words)..."
						bind:value={essayText}
					></textarea>
				</div>

				<!-- Live Counter Bar -->
				<div class="metrics-bar">
					<div class="metric-item">
						<span class="metric-val">{basics.wordCount}</span>
						<span class="metric-lbl">Words</span>
					</div>
					<div class="metric-divider"></div>
					<div class="metric-item">
						<span class="metric-val">{basics.charCount}</span>
						<span class="metric-lbl">Characters</span>
					</div>
					<div class="metric-divider"></div>
					<div class="metric-item">
						<span class="metric-val">{basics.paragraphCount}</span>
						<span class="metric-lbl">Paragraphs</span>
					</div>
					<div class="metric-divider"></div>
					<div class="metric-item">
						<span class="metric-val">~{basics.readingTimeMinutes} min</span>
						<span class="metric-lbl">Read Time</span>
					</div>
					<div class="metric-divider"></div>
					<div class="metric-item">
						<span class="metric-val">{basics.readabilityScore}</span>
						<span class="metric-lbl">{basics.readabilityLevel}</span>
					</div>
				</div>

				<!-- Action trigger -->
				<div class="editor-footer">
					<div class="word-limit-indicator">
						<div
							class="progress-bar-fill"
							style="width: {Math.min(100, (basics.wordCount / 650) * 100)}%; background-color: {basics.wordCount > 650 ? '#f43f5e' : basics.wordCount < 250 ? '#f59e0b' : '#10b981'}"
						></div>
					</div>
					<div class="action-row">
						<span class="hint-text">
							{#if basics.wordCount > 650}
								⚠️ <span style="color: #f87171;">Common App cut-off exceeded by {basics.wordCount - 650} words.</span>
							{:else if basics.wordCount < 250}
								ℹ️ Minimum 250 words needed for full Common App evaluation.
							{:else}
								✅ In optimal range (400–650 words).
							{/if}
						</span>
						<button class="grade-cta-btn" onclick={handleGrade}>
							<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
								<polygon points="5 3 19 12 5 21 5 3"/>
							</svg>
							Grade Essay Now
						</button>
					</div>
				</div>
			</div>
		</section>

		<!-- Right Column: Evaluation Dashboard -->
		<section class="results-pane">
			{#if !evaluation}
				<div class="empty-state card">
					<div class="empty-icon">📝</div>
					<h3>Awaiting Essay Evaluation</h3>
					<p>Enter your draft on the left or select one of the sample essays above to run the full admissions grading engine.</p>
				</div>
			{:else if !evaluation.isValid}
				<div class="warning-state card">
					<div class="warning-icon">⚠️</div>
					<h3>Draft Too Short</h3>
					<p>{evaluation.message}</p>
				</div>
			{:else}
				<!-- Score Hero Card -->
				<div class="card score-hero-card">
					<div class="hero-top">
						<div class="score-badge-circle" style="border-color: {getGradeColor(evaluation.scores.letterGrade)}">
							<span class="score-number" style="color: {getGradeColor(evaluation.scores.letterGrade)}">
								{evaluation.scores.overall}
							</span>
							<span class="score-out-of">/ 100</span>
							<span class="grade-pill" style="background-color: {getGradeColor(evaluation.scores.letterGrade)}">
								{evaluation.scores.letterGrade}
							</span>
						</div>

						<div class="hero-verdict">
							<div class="verdict-tag {evaluation.verdict.tone}">
								{evaluation.verdict.badge}
							</div>
							<h3 class="verdict-headline">Admissions Evaluation</h3>
							<p class="verdict-summary">{evaluation.verdict.summary}</p>
						</div>
					</div>

					<!-- Key Subscores Grid -->
					<div class="subscores-grid">
						<div class="subscore-card">
							<div class="subscore-head">
								<span class="subscore-title">Authenticity</span>
								<span class="subscore-val">{evaluation.scores.authenticity}%</span>
							</div>
							<div class="mini-bar">
								<div class="mini-fill" style="width: {evaluation.scores.authenticity}%; background: #a855f7;"></div>
							</div>
							<span class="subscore-desc">Sensory texture, personal vulnerability, honesty</span>
						</div>

						<div class="subscore-card">
							<div class="subscore-head">
								<span class="subscore-title">Delivery & Rhythm</span>
								<span class="subscore-val">{evaluation.scores.delivery}%</span>
							</div>
							<div class="mini-bar">
								<div class="mini-fill" style="width: {evaluation.scores.delivery}%; background: #3b82f6;"></div>
							</div>
							<span class="subscore-desc">Cadence variance, narrative hook, paragraph flow</span>
						</div>

						<div class="subscore-card">
							<div class="subscore-head">
								<span class="subscore-title">VSPICE Index</span>
								<span class="subscore-val">{evaluation.scores.vspiceAverage}%</span>
							</div>
							<div class="mini-bar">
								<div class="mini-fill" style="width: {evaluation.scores.vspiceAverage}%; background: #10b981;"></div>
							</div>
							<span class="subscore-desc">Holistic strength across the 6 core dimensions</span>
						</div>
					</div>
				</div>

				<!-- Navigation Tabs for Detailed Results -->
				<div class="tab-nav">
					<button
						class="tab-btn"
						class:active={activeTab === 'overview'}
						onclick={() => (activeTab = 'overview')}
					>
						VSPICE Pillars ({evaluation.vspiceSummary.activeCount}/6)
					</button>
					<button
						class="tab-btn"
						class:active={activeTab === 'feedback'}
						onclick={() => (activeTab = 'feedback')}
					>
						Constructive Feedback ({evaluation.feedback.length})
					</button>
					<button
						class="tab-btn"
						class:active={activeTab === 'rubric'}
						onclick={() => (activeTab = 'rubric')}
					>
						Admissions Rubric Guide
					</button>
				</div>

				<!-- TAB CONTENT: VSPICE ANALYSIS -->
				{#if activeTab === 'overview'}
					<!-- VSPICE Summary Banner -->
					<div
						class="vspice-banner card"
						class:banner-success={evaluation.vspiceSummary.isTargetMet}
						class:banner-warning={!evaluation.vspiceSummary.isTargetMet}
					>
						<div class="banner-icon">
							{#if evaluation.vspiceSummary.isTargetMet}
								🎯
							{:else}
								⚡
							{/if}
						</div>
						<div>
							<h4 class="banner-title">{evaluation.vspiceSummary.headline}</h4>
							<p class="banner-text">
								Top American college admissions rubrics (e.g. ElevatEd standard) require hitting <strong>at least 3 VSPICE criteria</strong> in the personal statement, with remaining pillars reinforced across supplemental essays.
							</p>
						</div>
					</div>

					<!-- 6 Pillars Grid -->
					<div class="pillars-grid">
						{#each Object.entries(evaluation.vspice) as [key, item]}
							<div class="pillar-card card" class:pillar-active={item.score >= 68}>
								<div class="pillar-top">
									<div class="pillar-letter">{item.letter}</div>
									<div class="pillar-info">
										<div class="pillar-title-row">
											<h4 class="pillar-name">{item.name}</h4>
											<span class="pillar-score" class:score-green={item.score >= 68}>
												{item.score}%
											</span>
										</div>
										<span class="pillar-status">
											{#if item.score >= 68}
												<span class="dot green-dot"></span> Active (Strong)
											{:else if item.score >= 50}
												<span class="dot yellow-dot"></span> Moderate / Subtle
											{:else}
												<span class="dot gray-dot"></span> Needs Cultivation
											{/if}
										</span>
									</div>
								</div>

								<p class="pillar-desc">{item.description}</p>

								{#if item.hits.length > 0}
									<div class="pillar-evidence">
										<span class="evidence-lbl">Evidence detected:</span>
										<div class="tag-cloud">
											{#each item.hits as hit}
												<span class="evidence-tag">{hit}</span>
											{/each}
										</div>
									</div>
								{/if}
							</div>
						{/each}
					</div>
				{/if}

				<!-- TAB CONTENT: CONSTRUCTIVE FEEDBACK -->
				{#if activeTab === 'feedback'}
					<div class="feedback-stack">
						{#each evaluation.feedback as fb}
							<div class="card feedback-card feedback-{fb.type}">
								<div class="feedback-header">
									<div class="feedback-badge-category">
										<span class="category-pill">{fb.category}</span>
										<span class="type-indicator type-{fb.type}">
											{#if fb.type === 'critical'}
												🔴 High Priority
											{:else if fb.type === 'warning'}
												🟡 Caution
											{:else if fb.type === 'strength'}
												🟢 Strength
											{:else}
												💡 Strategic Tip
											{/if}
										</span>
									</div>
									<h4 class="feedback-title">{fb.title}</h4>
								</div>
								<p class="feedback-advice">{fb.advice}</p>
							</div>
						{/each}
					</div>
				{/if}

				<!-- TAB CONTENT: ADMISSIONS RUBRIC GUIDE -->
				{#if activeTab === 'rubric'}
					<div class="card rubric-card">
						<h3 class="rubric-header-title">The VSPICE Admissions Framework</h3>
						<p class="rubric-intro">
							College admissions officers spend an average of 4 to 8 minutes per application. The VSPICE rubric was designed to solve the "impressive on paper, but completely forgettable" trap by infusing 6 critical dimensions:
						</p>

						<div class="rubric-list">
							<div class="rubric-row">
								<span class="rubric-code">V</span>
								<div>
									<strong>Vulnerability:</strong> Talking about failures, insecurities, and lessons instead of presenting an invincible hero persona.
								</div>
							</div>
							<div class="rubric-row">
								<span class="rubric-code">S</span>
								<div>
									<strong>Selflessness:</strong> Shifting focus away from self-aggrandizement; highlighting empathy, helping peers, and building others up.
								</div>
							</div>
							<div class="rubric-row">
								<span class="rubric-code">P</span>
								<div>
									<strong>Perseverance:</strong> Showing how you adapt when things break, rather than repeating generic sports competition tropes.
								</div>
							</div>
							<div class="rubric-row">
								<span class="rubric-code">I</span>
								<div>
									<strong>Initiative:</strong> Taking independent action without being prompted by school clubs, teachers, or parents.
								</div>
							</div>
							<div class="rubric-row">
								<span class="rubric-code">C</span>
								<div>
									<strong>Curiosity:</strong> Demonstrating an insatiable intellectual hunger for rabbit holes, experimentation, and discovery.
								</div>
							</div>
							<div class="rubric-row">
								<span class="rubric-code">E</span>
								<div>
									<strong>Expression:</strong> Voice, humor, cadence, sensory craft, and distinct metaphor that makes your essay un-AI-generable.
								</div>
							</div>
						</div>

						<div class="pro-tips-box">
							<h4>Admissions Officer Secret Rules:</h4>
							<ul>
								<li><strong>The 3+ Rule:</strong> Your Common App essay doesn't need to max out all six letters. Hitting <strong>3 or more</strong> with depth is the competitive standard.</li>
								<li><strong>The 2:1 Solution Rule:</strong> Great essays spend twice as much real estate on resolution and worldview as they do on describing the problem.</li>
								<li><strong>Supplementals Complete the Recipe:</strong> If your main essay nails V-S-P, use your supplemental college essays to bring out I-C-E.</li>
							</ul>
						</div>
					</div>
				{/if}
			{/if}
		</section>
	</div>
</main>

<style>
	.page-wrap {
		position: relative;
		min-height: 100vh;
		background: radial-gradient(circle at 10% 10%, #151b2e 0%, #0b0f19 90%);
		padding: 24px 32px 48px;
		overflow-x: hidden;
	}

	.ambient-glow {
		position: absolute;
		border-radius: 50%;
		filter: blur(140px);
		pointer-events: none;
		z-index: 0;
	}
	.glow-1 {
		top: -100px;
		left: 10%;
		width: 450px;
		height: 450px;
		background: rgba(139, 92, 246, 0.12);
	}
	.glow-2 {
		bottom: 10%;
		right: 5%;
		width: 500px;
		height: 500px;
		background: rgba(59, 130, 246, 0.08);
	}

	/* Header */
	.header {
		position: relative;
		z-index: 10;
		margin-bottom: 24px;
	}
	.header-inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 16px;
		background: rgba(17, 24, 39, 0.7);
		border: 1px solid rgba(255, 255, 255, 0.08);
		backdrop-filter: blur(12px);
		padding: 16px 24px;
		border-radius: 16px;
	}
	.brand {
		display: flex;
		align-items: center;
		gap: 14px;
	}
	.logo-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 44px;
		height: 44px;
		border-radius: 12px;
		background: linear-gradient(135deg, #8b5cf6, #3b82f6);
		color: #ffffff;
		box-shadow: 0 4px 14px rgba(139, 92, 246, 0.4);
	}
	.brand-title {
		font-size: 1.35rem;
		font-weight: 700;
		letter-spacing: -0.02em;
		color: #ffffff;
	}
	.brand-subtitle {
		font-size: 0.82rem;
		color: #9ca3af;
	}
	.header-actions {
		display: flex;
		gap: 10px;
		flex-wrap: wrap;
	}
	.sample-btn {
		background: rgba(255, 255, 255, 0.06);
		border: 1px solid rgba(255, 255, 255, 0.12);
		color: #f3f4f6;
		padding: 8px 14px;
		font-size: 0.85rem;
		border-radius: 8px;
		font-weight: 500;
		transition: all 0.2s ease;
		display: inline-flex;
		align-items: center;
		gap: 6px;
	}
	.sample-btn:hover {
		background: rgba(255, 255, 255, 0.12);
		border-color: rgba(255, 255, 255, 0.25);
	}
	.sample-btn.secondary {
		border-color: rgba(245, 158, 11, 0.3);
		color: #fbbf24;
	}

	/* Grid Workspace */
	.workspace-grid {
		position: relative;
		z-index: 10;
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 24px;
		align-items: start;
	}
	@media (max-width: 1080px) {
		.workspace-grid {
			grid-template-columns: 1fr;
		}
	}

	/* Card Base */
	.card {
		background: rgba(17, 24, 39, 0.75);
		border: 1px solid rgba(255, 255, 255, 0.08);
		border-radius: 14px;
		backdrop-filter: blur(12px);
		padding: 20px;
		box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
	}

	/* Prompt Card */
	.prompt-card {
		margin-bottom: 20px;
	}
	.prompt-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 12px;
	}
	.field-label {
		display: flex;
		align-items: center;
		gap: 8px;
		font-size: 0.9rem;
		font-weight: 600;
		color: #e5e7eb;
	}
	.badge {
		font-size: 0.75rem;
		padding: 3px 8px;
		border-radius: 6px;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.04em;
	}
	.prompt-badge {
		background: rgba(139, 92, 246, 0.18);
		color: #c4b5fd;
		border: 1px solid rgba(139, 92, 246, 0.3);
	}
	.select-wrapper {
		position: relative;
		margin-bottom: 14px;
	}
	.dropdown-select {
		width: 100%;
		appearance: none;
		background: #0f172a;
		border: 1px solid rgba(255, 255, 255, 0.16);
		color: #ffffff;
		padding: 12px 40px 12px 14px;
		border-radius: 10px;
		font-size: 0.95rem;
		font-weight: 500;
		outline: none;
		transition: border-color 0.2s;
	}
	.dropdown-select:focus {
		border-color: #8b5cf6;
		box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.25);
	}
	.dropdown-chevron {
		position: absolute;
		right: 14px;
		top: 50%;
		transform: translateY(-50%);
		pointer-events: none;
		color: #9ca3af;
	}
	.prompt-text-box {
		background: rgba(0, 0, 0, 0.25);
		border-left: 3px solid #8b5cf6;
		padding: 12px 14px;
		border-radius: 0 8px 8px 0;
	}
	.prompt-quote {
		font-size: 0.88rem;
		line-height: 1.5;
		color: #d1d5db;
		font-style: italic;
		margin-bottom: 8px;
	}
	.prompt-meta {
		font-size: 0.8rem;
		line-height: 1.4;
		color: #9ca3af;
	}
	.meta-label {
		color: #a78bfa;
		font-weight: 600;
		margin-right: 6px;
	}

	/* Editor Card */
	.editor-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 14px;
	}
	.editor-title-group {
		display: flex;
		align-items: center;
		gap: 12px;
	}
	.section-heading {
		font-size: 1.05rem;
		font-weight: 600;
		color: #f3f4f6;
	}
	.word-pill {
		font-size: 0.8rem;
		padding: 3px 10px;
		background: rgba(16, 185, 129, 0.15);
		color: #34d399;
		border: 1px solid rgba(16, 185, 129, 0.3);
		border-radius: 9999px;
	}
	.pill-warning {
		background: rgba(245, 158, 11, 0.15);
		color: #fbbf24;
		border-color: rgba(245, 158, 11, 0.3);
	}
	.pill-danger {
		background: rgba(244, 63, 94, 0.15);
		color: #fb7185;
		border-color: rgba(244, 63, 94, 0.3);
	}
	.clear-btn {
		background: transparent;
		border: none;
		color: #9ca3af;
		font-size: 0.82rem;
		text-decoration: underline;
		transition: color 0.2s;
	}
	.clear-btn:hover {
		color: #f87171;
	}

	.textarea-container {
		margin-bottom: 12px;
	}
	.essay-textarea {
		width: 100%;
		min-height: 380px;
		background: rgba(15, 23, 42, 0.8);
		border: 1px solid rgba(255, 255, 255, 0.12);
		border-radius: 10px;
		color: #f9fafb;
		padding: 16px;
		font-size: 0.96rem;
		line-height: 1.65;
		resize: vertical;
		outline: none;
		transition: border-color 0.2s, box-shadow 0.2s;
	}
	.essay-textarea:focus {
		border-color: #8b5cf6;
		box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.2);
	}

	.metrics-bar {
		display: flex;
		align-items: center;
		justify-content: space-around;
		background: rgba(0, 0, 0, 0.25);
		padding: 10px 14px;
		border-radius: 8px;
		margin-bottom: 14px;
	}
	.metric-item {
		text-align: center;
	}
	.metric-val {
		display: block;
		font-weight: 700;
		font-size: 0.92rem;
		color: #ffffff;
	}
	.metric-lbl {
		display: block;
		font-size: 0.72rem;
		color: #9ca3af;
		text-transform: uppercase;
		letter-spacing: 0.04em;
	}
	.metric-divider {
		width: 1px;
		height: 24px;
		background: rgba(255, 255, 255, 0.1);
	}

	.editor-footer {
		display: flex;
		flex-direction: column;
		gap: 12px;
	}
	.word-limit-indicator {
		width: 100%;
		height: 4px;
		background: rgba(255, 255, 255, 0.08);
		border-radius: 2px;
		overflow: hidden;
	}
	.progress-bar-fill {
		height: 100%;
		transition: width 0.3s ease;
	}
	.action-row {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		gap: 12px;
	}
	.hint-text {
		font-size: 0.84rem;
		color: #9ca3af;
	}
	.grade-cta-btn {
		background: linear-gradient(135deg, #8b5cf6, #6366f1);
		color: #ffffff;
		border: none;
		padding: 10px 20px;
		border-radius: 10px;
		font-size: 0.95rem;
		font-weight: 600;
		display: inline-flex;
		align-items: center;
		gap: 8px;
		box-shadow: 0 4px 14px rgba(99, 102, 241, 0.35);
		transition: all 0.2s ease;
	}
	.grade-cta-btn:hover {
		transform: translateY(-1px);
		box-shadow: 0 6px 18px rgba(99, 102, 241, 0.45);
	}

	/* Results Pane */
	.empty-state, .warning-state {
		text-align: center;
		padding: 48px 24px;
	}
	.empty-icon, .warning-icon {
		font-size: 2.5rem;
		margin-bottom: 12px;
	}

	/* Hero Score Card */
	.score-hero-card {
		margin-bottom: 18px;
	}
	.hero-top {
		display: flex;
		align-items: center;
		gap: 24px;
		padding-bottom: 18px;
		border-bottom: 1px solid rgba(255, 255, 255, 0.08);
		margin-bottom: 16px;
	}
	.score-badge-circle {
		width: 110px;
		height: 110px;
		border-radius: 50%;
		border: 3px solid;
		background: rgba(0, 0, 0, 0.35);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		position: relative;
	}
	.score-number {
		font-size: 2.2rem;
		font-weight: 800;
		line-height: 1;
	}
	.score-out-of {
		font-size: 0.72rem;
		color: #9ca3af;
	}
	.grade-pill {
		position: absolute;
		bottom: -10px;
		color: #0b0f19;
		font-weight: 800;
		font-size: 0.8rem;
		padding: 2px 10px;
		border-radius: 9999px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
	}
	.hero-verdict {
		flex: 1;
	}
	.verdict-tag {
		display: inline-block;
		font-size: 0.75rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		padding: 3px 10px;
		border-radius: 6px;
		margin-bottom: 6px;
	}
	.verdict-tag.success {
		background: rgba(16, 185, 129, 0.2);
		color: #34d399;
		border: 1px solid rgba(16, 185, 129, 0.4);
	}
	.verdict-tag.warning {
		background: rgba(245, 158, 11, 0.2);
		color: #fbbf24;
		border: 1px solid rgba(245, 158, 11, 0.4);
	}
	.verdict-tag.danger {
		background: rgba(244, 63, 94, 0.2);
		color: #fb7185;
		border: 1px solid rgba(244, 63, 94, 0.4);
	}
	.verdict-headline {
		font-size: 1.15rem;
		font-weight: 700;
		color: #ffffff;
		margin-bottom: 4px;
	}
	.verdict-summary {
		font-size: 0.88rem;
		color: #d1d5db;
		line-height: 1.45;
	}

	.subscores-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 12px;
	}
	@media (max-width: 600px) {
		.subscores-grid {
			grid-template-columns: 1fr;
		}
	}
	.subscore-card {
		background: rgba(0, 0, 0, 0.25);
		border-radius: 8px;
		padding: 10px 12px;
	}
	.subscore-head {
		display: flex;
		justify-content: space-between;
		font-size: 0.85rem;
		font-weight: 600;
		margin-bottom: 6px;
	}
	.subscore-title {
		color: #e5e7eb;
	}
	.subscore-val {
		color: #ffffff;
	}
	.mini-bar {
		height: 4px;
		background: rgba(255, 255, 255, 0.08);
		border-radius: 2px;
		margin-bottom: 6px;
		overflow: hidden;
	}
	.mini-fill {
		height: 100%;
		border-radius: 2px;
	}
	.subscore-desc {
		font-size: 0.72rem;
		color: #9ca3af;
		display: block;
		line-height: 1.3;
	}

	/* Tab Navigation */
	.tab-nav {
		display: flex;
		gap: 8px;
		border-bottom: 1px solid rgba(255, 255, 255, 0.08);
		padding-bottom: 8px;
		margin-bottom: 16px;
		overflow-x: auto;
	}
	.tab-btn {
		background: transparent;
		border: none;
		color: #9ca3af;
		padding: 8px 14px;
		font-size: 0.86rem;
		font-weight: 600;
		border-radius: 8px;
		transition: all 0.2s ease;
		white-space: nowrap;
	}
	.tab-btn:hover {
		color: #ffffff;
		background: rgba(255, 255, 255, 0.05);
	}
	.tab-btn.active {
		color: #ffffff;
		background: rgba(139, 92, 246, 0.2);
		border: 1px solid rgba(139, 92, 246, 0.35);
	}

	/* VSPICE Banner */
	.vspice-banner {
		display: flex;
		gap: 14px;
		align-items: center;
		margin-bottom: 16px;
		padding: 14px 18px;
	}
	.banner-icon {
		font-size: 1.8rem;
	}
	.banner-title {
		font-size: 0.95rem;
		font-weight: 700;
		color: #ffffff;
		margin-bottom: 3px;
	}
	.banner-text {
		font-size: 0.82rem;
		color: #d1d5db;
		line-height: 1.4;
	}
	.banner-success {
		border-color: rgba(16, 185, 129, 0.4);
		background: rgba(16, 185, 129, 0.1);
	}
	.banner-warning {
		border-color: rgba(245, 158, 11, 0.4);
		background: rgba(245, 158, 11, 0.1);
	}

	/* Pillars Grid */
	.pillars-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 14px;
	}
	@media (max-width: 600px) {
		.pillars-grid {
			grid-template-columns: 1fr;
		}
	}
	.pillar-card {
		transition: transform 0.2s, border-color 0.2s;
	}
	.pillar-card:hover {
		border-color: rgba(139, 92, 246, 0.35);
	}
	.pillar-active {
		border-color: rgba(16, 185, 129, 0.35);
		background: rgba(17, 24, 39, 0.85);
	}
	.pillar-top {
		display: flex;
		align-items: center;
		gap: 12px;
		margin-bottom: 10px;
	}
	.pillar-letter {
		width: 38px;
		height: 38px;
		border-radius: 8px;
		background: rgba(139, 92, 246, 0.2);
		border: 1px solid rgba(139, 92, 246, 0.4);
		color: #c4b5fd;
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: 800;
		font-size: 1.1rem;
		flex-shrink: 0;
	}
	.pillar-active .pillar-letter {
		background: rgba(16, 185, 129, 0.2);
		border-color: rgba(16, 185, 129, 0.4);
		color: #6ee7b7;
	}
	.pillar-info {
		flex: 1;
	}
	.pillar-title-row {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.pillar-name {
		font-size: 0.95rem;
		font-weight: 700;
		color: #ffffff;
	}
	.pillar-score {
		font-size: 0.92rem;
		font-weight: 700;
		color: #9ca3af;
	}
	.score-green {
		color: #34d399;
	}
	.pillar-status {
		font-size: 0.72rem;
		color: #9ca3af;
		display: inline-flex;
		align-items: center;
		gap: 5px;
	}
	.dot {
		width: 6px;
		height: 6px;
		border-radius: 50%;
		display: inline-block;
	}
	.green-dot { background: #10b981; }
	.yellow-dot { background: #f59e0b; }
	.gray-dot { background: #6b7280; }

	.pillar-desc {
		font-size: 0.8rem;
		color: #9ca3af;
		line-height: 1.4;
		margin-bottom: 10px;
	}
	.pillar-evidence {
		background: rgba(0, 0, 0, 0.3);
		padding: 8px 10px;
		border-radius: 6px;
	}
	.evidence-lbl {
		font-size: 0.68rem;
		color: #6b7280;
		display: block;
		margin-bottom: 4px;
		text-transform: uppercase;
		letter-spacing: 0.04em;
	}
	.tag-cloud {
		display: flex;
		flex-wrap: wrap;
		gap: 4px;
	}
	.evidence-tag {
		background: rgba(255, 255, 255, 0.08);
		color: #e5e7eb;
		font-size: 0.72rem;
		padding: 2px 6px;
		border-radius: 4px;
	}

	/* Feedback Stack */
	.feedback-stack {
		display: flex;
		flex-direction: column;
		gap: 12px;
	}
	.feedback-card {
		padding: 16px;
		border-left-width: 4px;
	}
	.feedback-critical {
		border-left-color: #f43f5e;
	}
	.feedback-warning {
		border-left-color: #f59e0b;
	}
	.feedback-strength {
		border-left-color: #10b981;
	}
	.feedback-suggestion, .feedback-info {
		border-left-color: #8b5cf6;
	}
	.feedback-header {
		margin-bottom: 8px;
	}
	.feedback-badge-category {
		display: flex;
		align-items: center;
		gap: 8px;
		margin-bottom: 4px;
	}
	.category-pill {
		font-size: 0.72rem;
		text-transform: uppercase;
		letter-spacing: 0.04em;
		color: #9ca3af;
		font-weight: 600;
	}
	.type-indicator {
		font-size: 0.72rem;
		font-weight: 700;
	}
	.type-critical { color: #fb7185; }
	.type-warning { color: #fbbf24; }
	.type-strength { color: #34d399; }
	.type-suggestion, .type-info { color: #a78bfa; }
	.feedback-title {
		font-size: 0.98rem;
		font-weight: 700;
		color: #ffffff;
	}
	.feedback-advice {
		font-size: 0.88rem;
		color: #d1d5db;
		line-height: 1.5;
	}

	/* Rubric Card */
	.rubric-card {
		padding: 24px;
	}
	.rubric-header-title {
		font-size: 1.15rem;
		font-weight: 700;
		color: #ffffff;
		margin-bottom: 8px;
	}
	.rubric-intro {
		font-size: 0.88rem;
		color: #d1d5db;
		line-height: 1.5;
		margin-bottom: 20px;
	}
	.rubric-list {
		display: flex;
		flex-direction: column;
		gap: 12px;
		margin-bottom: 24px;
	}
	.rubric-row {
		display: flex;
		align-items: flex-start;
		gap: 14px;
		background: rgba(0, 0, 0, 0.25);
		padding: 12px 14px;
		border-radius: 8px;
		font-size: 0.88rem;
		line-height: 1.45;
		color: #d1d5db;
	}
	.rubric-code {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 28px;
		height: 28px;
		border-radius: 6px;
		background: rgba(139, 92, 246, 0.3);
		color: #c4b5fd;
		font-weight: 800;
		flex-shrink: 0;
	}
	.pro-tips-box {
		background: rgba(139, 92, 246, 0.08);
		border: 1px solid rgba(139, 92, 246, 0.25);
		border-radius: 10px;
		padding: 16px;
	}
	.pro-tips-box h4 {
		font-size: 0.95rem;
		font-weight: 700;
		color: #c4b5fd;
		margin-bottom: 10px;
	}
	.pro-tips-box ul {
		margin-left: 20px;
		display: flex;
		flex-direction: column;
		gap: 8px;
		font-size: 0.86rem;
		line-height: 1.45;
		color: #e5e7eb;
	}
</style>
