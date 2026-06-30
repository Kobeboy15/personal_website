A voice-driven interview practice tool — you speak your answer aloud, the browser transcribes it in real time via the Web Speech API, and an AI model grades your response and gives written feedback. The goal was to make interview prep feel more like the real thing: spoken, pressured, and immediately critiqued.

## How it works

The core loop is simple but the implementation has a few interesting constraints. The Web Speech API gives you a live transcript as you talk, but it's non-deterministic — it revises previous words as it gains more context, which means you can't just append tokens, you have to reconcile the rolling transcript on each event. The UI handles this by displaying the "live" draft separately from the committed transcript until the speech session ends.

Once the answer is submitted, it goes to Gemini with the original question as context. The model returns a structured critique — a score, what was strong, what was weak, and a model answer for comparison.

## AI grading

The grading prompt is designed to be evaluative rather than encouraging — the default behaviour of most LLMs is to be too positive, which defeats the purpose of practice. The prompt instructs the model to score against real interview rubrics (clarity, structure, specificity, relevance) and to surface the weakest part of the answer even if the overall response was good.

OpenAI was wired in alongside Gemini as a second grading opinion — comparing the two models' feedback on the same answer turned out to be surprisingly useful signal on its own.

## Stack

`Next.js 14` `Web Speech API` `Google Gemini` `OpenAI` `TypeScript`
