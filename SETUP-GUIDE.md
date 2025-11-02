# 🚀 Product Marketing OS Setup Guide
*Get your own copy in 15 minutes*

**Don't worry if you're new to GitHub or Cursor.** This guide will help you set everything up step by step.

---

## 📋 First: Get These Things Ready

You'll need:
- **GitHub account** ([sign up here](https://github.com/signup) if you don't have one)
- **Cursor IDE** ([download here](https://cursor.sh/) if you don't have it)
- [**MacWhisper**](https://goodsnooze.gumroad.com/l/macwhisper) - Optional but recommended. Speak to AI instead of typing.

Get these set up first, then follow the steps below.

### Step 1: Make Your Own Copy on GitHub

1. Go to the Product Marketing OS repository on GitHub (where you found this guide)
2. Click the **"Fork"** button in the top right
3. Choose your GitHub account (or your company's account)
4. Click **"Create fork"**

**What happened:** You just created your own copy of Product Marketing OS on your GitHub account. This is your version—you can edit it, share it with your team, and it won't affect the original.

**Can't fork?** Some company GitHub accounts won't let you fork. Ask Cursor: *"I can't fork the repository. Help me create a new GitHub repository and copy the Product Marketing OS files into it."*

### Step 2: Get It on Your Computer

1. Go to your GitHub account and find the Product Marketing OS repository you just forked
2. Click the green **"Code"** button
3. Copy the URL that appears
4. Open Cursor
5. Ask Cursor: *"Help me clone this repository to my computer: [paste the URL you copied]"*

Cursor will show you what to do next. Basically, it will:
- Download the repository to your computer
- Open it in Cursor

### Step 3: Check It Worked

Ask Cursor: *"What's in the product-knowledge-base folder?"*

If Cursor responds, you're all set! 🎉

**What you should see in Cursor:**

In the left sidebar (file explorer), you should see this structure:

```
Product Marketing OS/
├── product-knowledge-base/
│   ├── 01-segment-context/      # Templates for personas, positioning, messaging by segment
│   ├── 04-templates/            # Document templates (briefs, battlecards, campaigns)
│   ├── 05-prompts/             # AI prompts (ads, emails, case studies)
│   ├── 06-style-guides/        # Writing principles for consistency
│   └── 07-config/              # Config files (metadata, glossary)
├── Projects/                    # Your personal workspace (empty to start)
├── README.md
└── SETUP-GUIDE.md              # This file
```

If you see this structure, everything worked! 🎉

---

## 🏗️ What You Got

When you opened the repository in Cursor, you'll see the `product-knowledge-base/` folder with these subfolders:

```
product-knowledge-base/
├── 01-segment-context/      # Templates for personas, positioning, messaging by segment
├── 04-templates/            # Document templates (briefs, battlecards, campaigns)
├── 05-prompts/             # AI prompts (ads, emails, case studies)
├── 06-style-guides/        # Writing principles for consistency
└── 07-config/              # Config files (metadata, glossary)
```

**The two main folders:**

**`product-knowledge-base/`** → This is where you'll build your company's knowledge layer
- Fill in the templates with your company's info (positioning, messaging, personas)
- This becomes your shared knowledge base (synced to GitHub so your team can access it)
- Think of it as: Your company's shared brain (everyone sees the same thing)

**`Projects/`** → This is your personal workspace
- Store your campaigns, drafts, and work-in-progress here
- This stays on your computer (not synced to GitHub)
- Think of it as: Your personal workspace (just for you)

---

## 🎯 Next: Build Your Knowledge Layer

Now that everything is set up, you'll fill in the templates with your company's information.

**Ask Cursor:**
```
I'm setting up Product Marketing OS. Help me create my first market segment.

My segment:
- Name: [e.g., "SMB", "Mid-Market", "Enterprise"]
- Revenue range: [e.g., "$250K-$5M"]
- Decision makers: [e.g., "Founder/CEO"]
- Main pain points: [list 2-3]
- What they'd use without our product: [what would they use instead]

Help me create the folder and fill in the templates for this segment.
```

Cursor will:
- Create a new folder for your segment
- Help you fill in all the templates (messaging, personas, positioning)
- Ask you questions to get the information it needs

Once your first segment is done, repeat this for each segment your company serves.

---

## ✨ Start Using It

Once you've filled in your first segment, you can start generating content.

**Important:** Always save your generated content in the `Projects/` folder, not in `product-knowledge-base/`.

**Ask Cursor:**
```
Using our SMB segment context (from product-knowledge-base/01-segment-context/smb/),
generate LinkedIn ad copy that targets SMB retailers and highlights our 
key messaging about efficiency. Save it in Projects/campaigns/linkedin-ads-smb.md
```

---

## 👥 Working with Your Team

**Making changes:** When you update something in `product-knowledge-base/`, ask Cursor: *"Help me save these changes to GitHub so my team can see them"*

**Reviewing changes:** When someone else makes changes, ask Cursor: *"Show me how to review and approve changes my teammate made"*

Cursor will guide you through the process.

---

**You're all set! 🎉**

Your Product Marketing OS is ready. Start building your knowledge layer, then use it to generate aligned content faster than ever.
