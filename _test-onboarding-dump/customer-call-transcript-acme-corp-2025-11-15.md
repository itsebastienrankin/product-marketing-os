# Sales Call Transcript — Acme Corp Discovery Call
**Date:** November 15, 2025
**Attendees:** Marcus (Notion AE), Rachel Kim (Acme Corp, VP of Operations), Dev Patel (Acme Corp, Head of IT)
**Deal Stage:** Discovery
**Source:** Gong recording — auto-transcribed, lightly edited for readability
**Acme Corp:** ~800 employees, fintech, Series D

---

[00:00] **Marcus:** Hey Rachel, Dev — thanks for making time today. I know you're both busy so I'll keep this focused. Before I show you anything, I'd love to understand what prompted you to take this call. What's going on at Acme right now?

[00:15] **Rachel:** Yeah, so honestly we're in a bit of a tool mess. We've grown really fast — we were 200 people two years ago and now we're at 800. The tools that worked at 200 are breaking at 800. Our wiki is a disaster, project management is all over the place, and I spend half my day just figuring out where information lives.

[00:42] **Marcus:** That's super common at your stage. When you say the wiki is a disaster, what are you using today?

[00:48] **Rachel:** Confluence. And I know everyone says this, but it's genuinely terrible. Nobody updates it. The search doesn't work. New hires ask me "where's the onboarding doc" and I have to send them like six different links across Confluence, Google Drive, and Slack bookmarks. It's embarrassing.

[01:10] **Dev:** From my side, IT inherited Confluence when we were a smaller company. The admin overhead is real. Every time someone needs a new space or a permission change, it comes through my team. We're not an IT helpdesk, but Confluence makes us feel like one. And the Atlassian licensing is getting expensive — they keep raising prices and bundling stuff we don't need.

[01:35] **Marcus:** What are you paying for Atlassian right now, if you don't mind sharing?

[01:40] **Dev:** For the full suite — Jira, Confluence, plus we have Statuspage and OpsGenie — it's about $430K a year. Confluence alone is probably $80K of that, but the way they bundle it, it's hard to separate. They basically tell you "Confluence is practically free if you're already on Jira."

[02:05] **Marcus:** Right, the bundling is their whole strategy. So you're on Jira too — is engineering married to Jira or is that something you'd consider changing?

[02:15] **Dev:** Jira is staying. My engineering team would riot if I tried to move them off Jira. That's non-negotiable. What I need is something better for the non-engineering side of the house. Wiki, documentation, project tracking for ops, marketing, people team — the teams that don't live in Jira but still need to get work done.

[02:38] **Rachel:** Exactly. Like, my ops team is using Asana for project management, but half the team also tracks stuff in spreadsheets because Asana doesn't connect to our docs. And then marketing is on Monday.com because they started their own thing before we had any standards. And then sales enablement docs are in Google Drive organized by... I want to say organized loosely. Very loosely.

[03:05] **Marcus:** [laughs] So you've got Confluence for wiki, Asana for ops PM, Monday for marketing PM, Google Drive for docs, Jira for engineering. That's five tools for work management. Am I missing anything?

[03:18] **Rachel:** Oh, and some people use Notion already. Like, rogue Notion usage. A few PMs started using it for their own team docs and it's become this shadow IT thing. Which is actually why I know about Notion — our product team swears by it but it's not sanctioned by IT.

[03:35] **Dev:** Which drives me crazy because now I have data in a tool I can't govern. No SSO, no audit log, they're on personal accounts or a team plan they expensed. I need to either shut it down or bring it under IT management.

[03:50] **Marcus:** That's actually really interesting — so you have organic adoption already. Do you know roughly how many people are using it?

[03:58] **Rachel:** My guess is maybe 60-80 people? The product org and a chunk of the ops team. They set up some kind of team workspace and it's been growing. People keep hearing about it and asking to join.

[04:12] **Marcus:** That's a great signal actually. The hardest part of rolling out any tool is getting people to use it. You already have that. The question is: do you formalize it, give IT the controls they need, and expand it to replace some of these other tools? Or do you fight the organic adoption and try to standardize on something else?

[04:30] **Dev:** I mean, if it had SSO, SCIM, audit log, proper permissions — and it could genuinely replace Confluence and maybe Asana — I'd seriously consider it. My concern is: is Notion a real enterprise tool or is it a fancy note-taking app that got popular with startups?

[04:50] **Marcus:** Totally fair question. Let me address that directly...

[Marcus proceeds with standard enterprise security pitch — SOC2, SAML SSO, SCIM, audit log, data residency, 99.9% SLA]

[06:30] **Dev:** Ok, that's better than I expected. What about the Jira integration though? If we're replacing Confluence, one of the things Confluence does well is show Jira issues inline. Our PMs write specs in Confluence and link to Jira tickets. Can Notion do that?

[06:48] **Marcus:** Yes — we have a Jira integration that lets you embed Jira issues and create synced databases that pull in Jira data. It's not as deep as the native Confluence-Jira connection, I'll be honest, but for most teams it covers 80-90% of the use case. I'd love to show you a demo of it.

[07:08] **Dev:** 80-90% might be ok. The real question is whether the 10% that's missing is a dealbreaker for the eng team.

[07:15] **Rachel:** Can I jump in with a different question? What about the migration? We have like 5 years of Confluence content. Thousands of pages. Some of it is garbage, but some of it is critical — policies, procedures, technical docs. What does migration look like?

[07:35] **Marcus:** Great question. We have an automated Confluence importer that handles the bulk of it. It brings over pages, attachments, and basic formatting. I'll be upfront — complex formatting, macros, and some Confluence-specific features don't transfer perfectly. Most customers do the automated import and then spend a few weeks cleaning up the important stuff. For Enterprise customers, we assign a dedicated CSM who helps plan the migration and provides a 30/60/90 day rollout playbook.

[08:10] **Rachel:** A few weeks of cleanup for 5 years of content... that's actually not terrible. Our Confluence is so messy that honestly this could be a good forcing function to clean house.

[08:22] **Marcus:** Exactly — a lot of customers treat the migration as a knowledge audit. You don't need to bring everything over. Move the important stuff, archive the rest, and start fresh with better structure.

[08:35] **Dev:** What about pricing? We're 800 people but realistically not everyone needs full editor access. A lot of people just need to read the wiki. Are we paying $18/user/month for everyone regardless?

[08:50] **Marcus:** For the Business plan, yes, it's per-user. But for Enterprise, I can work with you on the structure — we have options for how we define "users" and I'd want to understand your actual usage pattern before quoting. Let's get through the pilot first and we'll build a pricing proposal that makes sense for your team size and usage.

[09:10] **Dev:** That's a political answer, Marcus. [laughs] But fine, let's table pricing for now.

[09:18] **Rachel:** What about AI? I know Notion has an AI product. We're evaluating AI across all our tools right now. Our CEO is obsessed with AI and wants everything to have it. What does Notion AI actually do that's useful?

[09:32] **Marcus:** So Notion AI is interesting because unlike ChatGPT or Copilot, it has context on everything in your workspace. So you can ask it "what did the product team decide about the payments redesign?" and it'll synthesize the answer from meeting notes, specs, and project updates. It's like having an intern who's read every doc in the company.

[09:55] **Rachel:** Oh wow, so it searches across everything?

[10:00] **Marcus:** Everything in your workspace, yeah. And it can generate content based on your existing knowledge, summarize long docs, autofill database properties — pretty powerful stuff. It's included in the Enterprise plan.

[10:15] **Rachel:** Dev, your CEO-wants-AI problem might be solved here. [laughs]

[10:20] **Dev:** Yeah, that's... actually very relevant. Our CEO keeps asking "why can't I just ask a question and get an answer from our company docs?" This might be that.

[10:30] **Marcus:** That's literally the pitch. Should we do a demo? I can show you a workspace that's similar to what your setup might look like — wiki, project tracking, the AI search — and we can make it real.

[10:42] **Rachel:** Yes, let's do it. Can we do next Tuesday?

[10:48] **Marcus:** Next Tuesday works. I'll set up a sandbox workspace with some sample content so you can see it with realistic data. I'll also invite one of our solutions engineers to walk through the Jira integration since I know that's top of mind for Dev.

[10:58] **Dev:** Perfect. And send me the security whitepaper before then. I need to start the vendor review process.

[11:05] **Marcus:** Will do. One last thing — you mentioned 60-80 people already using Notion. Would it be helpful if I connected with whoever set that up? We could make the pilot a formalization of what they've already built, which would be way faster than starting from scratch.

[11:20] **Rachel:** That's smart. I'll intro you to Priya — she's the PM who started the whole Notion thing here. She'll be thrilled that it might become official.

[11:28] **Marcus:** Amazing. Thanks both — really looking forward to the demo Tuesday. I'll send the calendar invite and security docs today.

---

**MARCUS POST-CALL NOTES:**

Strong opportunity. Key dynamics:
- Rachel (VP Ops) is the champion. She's fed up with tool sprawl and has decision-making power for non-eng tools
- Dev (Head of IT) is the gatekeeper. He's skeptical but not hostile. Need to nail the security review.
- Jira is non-negotiable. Our integration needs to be solid in the demo. Pulling in Sara (SE) for this.
- Organic adoption is a huge advantage — 60-80 users already using Notion unsanctioned
- Budget is there — they're spending $430K on Atlassian alone
- AI angle resonated strongly. CEO obsessed with AI is our friend.
- Pricing will be a conversation. 800 users, many read-only. Need to talk to VP about flexible pricing structure.

**Risk factors:**
- Confluence migration of 5 years of content — need to make this feel manageable
- Jira integration depth — if the 10-20% gap matters to engineering, could kill it
- Reader pricing — if they do the math on 800 x $18, they'll balk. Need enterprise discount structure.

**Next steps:**
- [ ] Send security whitepaper to Dev — TODAY
- [ ] Set up demo workspace for Tuesday
- [ ] Invite Sara (SE) for Jira integration demo
- [ ] Get intro to Priya (the internal Notion champion)
- [ ] Start enterprise pricing proposal (creative pricing for high read-only ratio)

**Deal sizing estimate:**
800 users x Enterprise plan. If we can get 600 on full seats and work something out for the other 200 read-only users... probably $450-550K ARR. This would be a Q1 2026 close if the pilot goes well in Dec.
