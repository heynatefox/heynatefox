export type ProjectStat = { value: string; label: string }
export type ProjectSection = { title: string; body: string }

export type Project = {
  slug: string
  title: string
  company: string
  thumbnail: string
  thumbnailColor?: string
  images: string[]
  description: string
  stats?: ProjectStat[]
  sections?: ProjectSection[]
  thinContent?: boolean
  link?: string
}

export const COMPANIES = ['All', 'Gametime', 'Lyft', 'Robinhood', 'Concept Labs', 'Bad Cards', 'AirPR', 'Other'] as const

export const PROJECTS: Project[] = [
  {
    slug: 'bad-cards-platform',
    title: 'Platform & Growth',
    company: 'Bad Cards',
    thumbnail: '',
    thumbnailColor: '#0d0d0d',
    images: [],
    description: 'Bad Cards is a modern party-gaming platform built to turn internet culture into playable moments across web, Discord, Twitch, and community-driven surfaces. Led end-to-end product, creative, and distribution strategy \u2014 designing a flexible system that allows games, card packs, and mechanics to evolve as fast as culture itself.',
    stats: [
      { value: '10M+', label: 'Players across web and Discord' },
      { value: '2.7M', label: 'Users in 2025 (7x YoY from 430K)' },
      { value: '$0', label: 'Paid marketing, ever' },
      { value: '19.4%', label: 'D30 retention (industry: 2\u20134%)' },
      { value: '14.7%', label: 'D7 retention (industry: 8\u201312%)' },
      { value: '500K+', label: 'Email subscribers, 43% open rate' },
      { value: '91%', label: 'Reduction in infra costs in 2025' },
      { value: '6M+', label: 'Custom cards created by users' },
    ],
    sections: [
      {
        title: 'Discord Activity (Launched August 2025)',
        body: 'Rather than advertising to Discord users, launched as a native Discord Activity enabling instant group play directly inside servers. Cost to build: $8,500. Results: 2M+ users since August, 400K+ email subscribers, played in hundreds of Discord communities.',
      },
      {
        title: 'Twitch Extension (Just Launched)',
        body: 'Built a Twitch Extension that lets creators host interactive games directly with their audience in real time. Cost to build: $7,000. Early results: one creator getting over 3,000 concurrent users on their weekly game night.',
      },
      {
        title: 'Reddit Game (Coming Soon)',
        body: 'Exploring a Reddit-native game designed to live inside subreddits themselves. Cost to build: $1,000.',
      },
      {
        title: 'The Bigger Picture',
        body: 'Bad Cards is proof of concept for Playable \u2014 a platform for interactive party games that turn audiences into participants. The same product, distribution, and monetization playbook applied across new game formats including HeadRush and KnowItAll Trivia.',
      },
    ],
  },
  {
    slug: 'gametime-12-days',
    title: '12 Days of Gametime',
    company: 'Gametime',
    thumbnail: '',
    thumbnailColor: '#14532d',
    images: [],
    description: 'Design and launch a holiday activation to drive installs, re-engagement, and seasonal brand momentum during a peak ticketing window. Built and launched cross-channel in under three weeks across CRM, social, PR, and influencer partnerships.\n\nThe original recommendation was to validate the activation through owned and high-intent channels first, then scale distribution once performance was proven. Due to timing and seasonal goals, the campaign launched as a hybrid, pairing performance-led mechanics with a large-scale partner amplification. This structure allowed us to test both experience quality and distribution efficiency in a single window.\n\nFully custom interactive microsite with daily giveaways, streak mechanics, referrals, and lifecycle integrations.',
    stats: [
      { value: '12,629', label: 'Registrations' },
      { value: '14%', label: 'Install rate' },
      { value: '5,700+', label: 'Reinstalls / app opens' },
      { value: 'High', label: 'Repeat behavior & high-intent actions' },
    ],
    sections: [
      {
        title: 'What Worked',
        body: '- Activation mechanics performed well: Users who arrived understood the value and returned repeatedly.\n- Owned channels drove the highest-quality growth: CRM materially outperformed all other channels, converting at significantly higher rates.\n- Execution under compression: Cross-functional teams shipped a complex, branded experience on a highly compressed timeline.',
      },
      {
        title: 'What We Learned',
        body: '- Broad partner amplification underperformed materially: ~50M estimated effective audience, ~9,700 non-email entrants, ~0.01\u20130.02% conversion rate.\n- The gap was driven by audience intent mismatch, not creative or product friction.',
      },
      {
        title: 'Outcome & Business Impact',
        body: 'Running this test at scale created clarity. The results validated the original recommendation to prioritize high-intent distribution before broad amplification and directly informed a shift in channel strategy. That shift helped eliminate repeated inefficient spend and supported an estimated ~$5M in annualized cost savings through smarter partner selection, clearer performance thresholds, and tighter campaign scoping.',
      },
    ],
  },
  {
    slug: 'ditch-your-site',
    title: 'DitchYourSite',
    company: 'Other',
    thumbnail: '',
    thumbnailColor: '#0f172a',
    images: [],
    description: 'DitchYourSite is an AI-powered website migration tool that scrapes any public website and outputs a complete migration kit \u2014 structured JSON, downloaded images, and a pre-written Claude Code prompt \u2014 ready to rebuild the site as a modern Next.js application. Built and shipped in under 48 hours from concept to live product with payments.\n\nLeaving Squarespace, Wix, Showit, or any legacy website builder is painful. The platforms don\'t give you your content back in a usable format. Designers charge $3\u20135K to rebuild. Manual migration takes days. There was no fast, affordable, self-serve path from "I hate my website" to "I have a new one."\n\nPaste a URL. Click Scrape. Get a ZIP file containing everything needed to rebuild the site with AI \u2014 all pages, all images, full text content, nav structure, and a ready-to-paste Claude Code prompt. The entire migration goes from weeks to hours.',
    stats: [
      { value: '48hrs', label: 'Concept to live product' },
      { value: '$0', label: 'No agency, no team' },
      { value: '$2.99', label: 'Entry price per scrape' },
      { value: '6', label: 'Platforms supported' },
    ],
    sections: [
      {
        title: 'Technical Stack',
        body: 'Next.js 14, TypeScript, Tailwind CSS, Puppeteer + Chromium, Supabase, Stripe, Vercel.',
      },
      {
        title: 'Key Features',
        body: '- Multi-platform support with platform-specific URL placeholders\n- Brand kit generator: upload logo and screenshot, system generates brand guidelines\n- 4 mini-games that load while the scrape runs (Ditch Digger, Whack-a-Web-Builder, Jail Break, 404 Dodger)\n- Free tier: 10 pages, text only. Paid: 50 pages, full ZIP, all images. Pro: $20/month, 250 scrapes',
      },
    ],
    link: 'https://ditchyoursite.com',
  },
  {
    slug: 'personalityhire-ai',
    title: 'PersonalityHire.ai',
    company: 'Other',
    thumbnail: '',
    thumbnailColor: '#6d28d9',
    images: [],
    description: 'A lightweight Slack bot built solo using AI-assisted coding tools including v0.dev and ChatGPT. The bot sends randomized, chaotic-good messages to keep teams entertained, with admins able to add custom messages.\n\nHandled ~90% of the build solo, then brought in an engineer for final polish and Slack submission. A fun experiment to test AI-assisted development capabilities.',
    stats: [
      { value: '~$250', label: 'Total cost to build' },
      { value: '10\u201312hrs', label: 'Total build time' },
      { value: '~90%', label: 'Built solo' },
    ],
    link: 'https://personalityhire.ai',
  },
  {
    slug: 'creative-marketing-ops-playbook',
    title: 'Creative + Marketing Ops Playbook',
    company: 'Other',
    thumbnail: '/portfolio/aaba8d72-52ea-42fe-9073-3942f84fdeb9_car_1x1.png',
    images: [
      '/portfolio/849d33ed-f9e6-4a23-bfbe-fd2d7f1f0018_rw_1920.png',
    ],
    description: 'Need resources to help your team\'s creative operations? I got you.\n\nI created a 30+ Page Creative + Marketing Ops. Playbook includes brief templates, DACI modeling, naming convention guides, decision-making frameworks, and more! Click the button to download the PDF guide, or request access to the template (so you can fit it to your team/needs) by entering your email on my website.',
  },
  {
    slug: 'process-implementation',
    title: 'Process Implementation',
    company: 'Lyft',
    thumbnail: '/portfolio/7f8819e9-f0ad-4bb4-a3c7-8113e4666fad_rwc_0x0x1746x1746x1746.png',
    images: [
      '/portfolio/2d6c3d25-704c-4a4d-b614-b1f06058019c_rw_1200.png',
      '/portfolio/3c8ad011-ec0f-4df4-aa74-0a5caf26d460_rw_1200.png',
      '/portfolio/085a43b8-6c13-430b-9784-a9d07f0b38ae_rw_1200.png',
      '/portfolio/9c55b63f-a631-4bdd-a219-0d9a3dbdbafd_rw_1200.png',
      '/portfolio/7a9b7a21-2f6a-4c35-8a52-88eca6989fa1_rw_1200.png',
      '/portfolio/3adaa6b8-10fd-41b0-80db-9a373628ee75_rw_1200.png',
      '/portfolio/fd778a13-ca1c-45df-9eb0-eeb72459f698_rw_1200.png',
    ],
    description: 'This is typically given in a presentation, and I\'d love to connect to walk you through it. In the meantime, here is what this page covers:\n\nName a process that I\'m most proud of spearheading and implementing, which significantly impacted my team\'s productivity. The following slides walk through the process that I built and implemented at Lyft, which followed me to many other roles.',
    thinContent: true,
  },
  {
    slug: '12-days-of-momo',
    title: '12 Days Of Momo',
    company: 'Concept Labs',
    thumbnail: '/portfolio/cd05c55c-3120-425b-b714-6c01f31b423f_rwc_337x0x1017x1017x1017.png',
    images: [
      '/portfolio/4724e046-8025-40b3-8aef-0f8cd9b5eb05_rw_1920.png',
      '/portfolio/13bc9fc3-22d8-49af-8ff8-1bfc5de641c5_rw_1920.png',
    ],
    description: 'Working with 9x Emmy-award-winning animation studio, Baobab Studios, we collaborated to bring the Momoguro universe to life. We were tasked with creating an interactive holiday activation for Momoguro. We made an advent calendar where users could claim "tickets" by entering them into a raffle for allowlist spots. This interactive experience brought users into a snowy plain that they could enter every day for 12 days.\n\nOur Services/My Oversight:\n- Creation of an interactive 3D advent calendar\n- Development of website and form flow\n- Social plan and launch\n- Marketing and Creative Direction\n\nVisiting the Website was not a CTA — so we felt this was a great success metric. Not only did people participate, but they were engaged enough to go to our website to learn more about our services.\n\nThe team worked incredibly hard on this with a tight turn, and the results speak for themselves. It was an incredibly challenging but fun activation that was engaging and produced an amazing return.',
    stats: [
      { value: '368,358', label: 'Total Entries' },
      { value: '55,245', label: 'Unique Entrants' },
      { value: '97,832', label: 'Tweets / Shares' },
      { value: '40,351', label: 'Followers Gained' },
      { value: '4,300+', label: 'Newsletter Signups' },
      { value: '24,000+', label: 'Website Visits' },
    ],
  },
  {
    slug: 'robinhood-you-got-it',
    title: 'You Got It',
    company: 'Robinhood',
    thumbnail: '/portfolio/9dfe4c52-a25d-47d4-8020-873412eddac3_rwc_720x0x1844x1844x1844.png',
    images: [
      '/portfolio/d7723cfe-14ed-4b14-a20e-813ccce6b55b_rw_1200.png',
      '/portfolio/f53d6c90-94fe-4ff9-91dd-1bbabdf12d1a_rw_1200.png',
      '/portfolio/2af8669a-4c87-46bb-9ea8-de450ae18fde_rw_1200.png',
      '/portfolio/c94e6dad-2c91-4d1c-9d1c-16343bff95ee_rw_1200.png',
    ],
    description: 'January 28th hit the company when we didn\'t have a creative team dedicated to social. With much of the group stuck on our brand design systems or building educational content, we needed thought and design leadership to help develop social content/strategy.\n\nMoving quickly, I took a few days to sit in some customer feedback sessions with the research team and developed a very high-level strategy for social. The upper left image on the grid below shows the social pillars I crafted, which became the foundation for the social crisis strategy.\n\nAfter activating the team on some educational content, the c-team quickly wanted creative ideas to combat the negative chatter from a group they called "The Fringe Fighters." (people who were on the fringe/cusp of leaving Robinhood). That night, I created storyboards to present ideas to help combat the negative social media discussion. CS + team responded favorably to these ideas and asked us to align one of them with the pillars above.\n\n"You Got It" fit the bill. It highlighted some of our product features and added a level of transparency on things we are building for the future. This concept also performed the best in our research/testing. Working with our agency partner, we produced the video and planned to target a specific audience with the cut.\n\nLearnings: Looking back, I would have tested these concepts without music. I think the team got excited about using a song like "You Got It," but the reality of that was slim. In turn, when we had to change the music due to budget constraints, it felt like the project lost a bit of steam.\n\nI am reluctant to say this because I love data, but I wish we focused less on testing these concepts. Not because I don\'t think the research was valuable, but testing lost us quite a few weeks. The original ask was to have this turned around quickly, so it felt like a blocker that we would start testing ads now (when we have never tested ads in the past.)\n\nI also would have liked to work with agency partners who could execute faster. Our AOR took more than four weeks to produce this short video, and at the end of it all, we still needed to have an internal team member clean it up. With how much lifting the storyboard did, it should have been as simple as handing that off to an editor and having them make the cuts.\n\nThough there were quite a few hiccups, I feel I learned a lot from that experience and loved seeing farfetched concepts come to life.',
  },
  {
    slug: 'concept-labs-rebrand',
    title: 'Rebrand Strategy',
    company: 'Concept Labs',
    thumbnail: '/portfolio/54e1b0a5-ec2a-4a4e-81b4-96a52e9be3e7_rwc_458x80x847x847x847.jpg',
    images: [
      '/portfolio/f9dc1753-24e4-4dd9-9bc3-afa58b6a85ba_rw_3840.png',
      '/portfolio/ded50621-70e9-40b9-92ae-41a0f4544f77_rw_3840.png',
      '/portfolio/13c7c303-0431-4ebb-bf30-ff015655711d_rw_3840.png',
      '/portfolio/9bd7c9f3-59fd-4c18-b4e6-cab6f6c8135e_rw_3840.png',
      '/portfolio/0db7858e-32b6-479e-8998-e6d4565480a6_rw_3840.png',
      '/portfolio/c9864ad8-b50f-4a22-86e9-355d5749abec_rw_3840.png',
      '/portfolio/e81adc9b-61ba-411b-8f04-4b0a2d87ffb1_rw_3840.png',
      '/portfolio/1bd7d328-1405-42aa-ad26-9cd32ad1eae8_rw_3840.png',
      '/portfolio/da40ac93-a482-4ccb-8ec9-d68c6e24a4b3_rw_3840.png',
      '/portfolio/e34ef738-d152-4b8a-93c4-cad07277da29_rw_3840.png',
      '/portfolio/16cb9f46-c6a0-42e2-b45d-28fa041d7d47_rw_3840.png',
      '/portfolio/da991e32-332c-4861-9b42-533bee961d27_rw_3840.png',
      '/portfolio/91781357-8d3b-4057-9f40-ee37ee0cca50_rw_3840.png',
      '/portfolio/12a3db7d-6e7a-45f2-9cfd-630c02d87559_rw_3840.png',
      '/portfolio/c16fa195-cd61-4658-9695-62cb407fb32f_rw_3840.png',
      '/portfolio/8732aa31-15a3-4be1-ba11-f51f11a7b153_rw_3840.png',
      '/portfolio/040b33db-3ee7-475d-aafa-df0d3955b792_rw_3840.png',
      '/portfolio/f0f60fff-abfe-4c7b-801b-02ee633576c0_rw_3840.png',
      '/portfolio/e195732a-1571-4828-9bef-a254a0acaa68_rw_3840.png',
      '/portfolio/a741092b-059e-475a-8550-4882d526f414_rw_3840.png',
      '/portfolio/e50bf48b-cbeb-4888-b235-4f647a4bd09d_rw_3840.png',
      '/portfolio/710f84b6-8347-4b44-9290-f0b84332bf32_rw_3840.png',
      '/portfolio/823a3f14-e9d2-4a78-a48c-5d951f94600a_rw_3840.png',
      '/portfolio/0742454b-fb45-427f-a51a-d360615c8d7e_rw_3840.png',
      '/portfolio/80b86606-03dd-42f3-bf17-e6f30e0c4c8e_rw_3840.png',
      '/portfolio/ff5b8c0b-8381-44f6-8004-5096c06e0d8d_rw_3840.png',
      '/portfolio/33c266fe-4086-43fb-8298-463efe2c4a7c_rw_3840.png',
      '/portfolio/c41452c0-b108-4360-b4f6-a95ce07a9c32_rw_3840.png',
      '/portfolio/c5eae02b-70f4-46a4-8c5b-5926d8b5fa2c_rw_3840.png',
      '/portfolio/3ab4934e-132d-4d4d-b6fc-c1ee9af6b66d_rw_3840.png',
      '/portfolio/019390da-4f5b-4b2d-95ed-e66c72f91ebf_rw_3840.png',
      '/portfolio/cdbc0358-14e4-493a-9ede-9254d5a95aee_rw_3840.png',
      '/portfolio/ea37d9a6-9590-46af-bd0f-85a2b2389e9d_rw_3840.png',
      '/portfolio/2e010a1f-51ee-49b3-83ef-61b201b452f6_rw_3840.png',
      '/portfolio/2bfab00c-1a76-41a7-b1a3-bffcf9e6cd4e_rw_3840.png',
      '/portfolio/4ed8ebda-a458-444a-8364-da49e9d7042a_rw_3840.png',
    ],
    description: 'Transitioning a 15-year-old AAA art agency to a creative and marketing powerhouse while keeping the built equity from the old name, "Concept Art House."\n\nResponsible for: Rebranding and design, brand strategy, design systems, creative positioning, voice and tone, social strategy, campaigns, pitch work, and more.\n\nStrategy, Artboard, and Concepts',
  },
  {
    slug: 'y-lyft',
    title: 'Y Lyft Brand Campaign',
    company: 'Lyft',
    thumbnail: '/portfolio/c39f7928-7efe-4005-a732-d01c481eb749_rwc_211x0x540x540x540.png',
    images: [],
    description: 'This is typically given in a presentation, and I\'d love to connect to walk you through it. In the meantime, here is what this page covers:\n\n"Think about a previous project/brand campaign I\'ve managed that required complex tracking of multiple deliverables and various stakeholders and walk us through the project from inception to launch."',
    thinContent: true,
  },
  {
    slug: 'bad-cards-rebrand',
    title: 'Rebrand',
    company: 'Bad Cards',
    thumbnail: '/portfolio/7264a83d-2bdc-4854-8169-0fc89b60ec7a_rwc_445x121x1031x1031x1031.jpg',
    images: [],
    description: 'Rebranding outdated design to present Bad Cards as an innovative online party game.\n\nResponsible for: Rebranding and design, brand strategy, design systems, creative positioning, voice and tone, social strategy, campaigns, pitch work, agency management, and more.\n\nAgency: monga.design',
  },
  {
    slug: 'robinhood-creative-support',
    title: 'Creative Support',
    company: 'Robinhood',
    thumbnail: '/portfolio/a222145e-adfb-4eb5-bd14-1ed12ab50c3f_rwc_0x0x1008x1008x1008.gif',
    images: [],
    description: 'Various samples of design support I\'ve provided while at Robinhood. Some work was leveraging templates while other work was net-new.',
    sections: [
      {
        title: 'DogeDay Wink',
        body: 'Challenge: Create a post for Twitter that celebrates DogeDay without bringing too much attention or looking like a recommendation.\n\nSurprise and delight is key \u2014 so I decided to make our simple Doge boi (original design by one of our brand designers) wink at his fans.\n\nMetrics: The RH Tweet was the second most interacted with/trending DogeDay post.',
      },
      {
        title: 'Curiosity Effect Growth Giveaway',
        body: 'There was a lot of chatter about Reddit\'s Super Bowl ad after the game. If you don\'t know much about it \u2014 they ran a 5-second ad and leveraged what\'s called the "curiosity effect." I pitched an idea that we do something similar with our giveaways. This design is a sample of how that idea could work/look.\n\nThe idea is that it would be a GIF, and our audience would need to pause it at the proper time to get the details.',
      },
      {
        title: 'Hot Minute with Meg',
        body: 'Objective: Engage a diverse audience of investors \u2014 giving them quick tips on how to invest, use RH, and more with Megan Thee Stallion.\n\nStrategy: Get some star power behind our social media. Engage a new audience, and walk through Megan\'s story on how she became an icon (and an investor).\n\nApproach: 60 second videos for IG/Reels/TikTok that highlight different features of Robinhood and Megan\'s journey.\n\nCadence: Content Series \u2014 6\u20138 episodes.',
      },
      {
        title: 'This Week In Crypto (Production Design)',
        body: 'With the bandwidth constraints, I will occasionally jump in to help with various projects like TWIC, Blog Headers, etc. Why? I write the letters "JAV" in the front of every notebook I own. It stands for "just add value." It\'s a subtle reminder that it\'s not about the role; it\'s about the goal. I am here to help the team when/how I can.',
      },
    ],
  },
  {
    slug: 'airpr-brand-development',
    title: 'Brand Development',
    company: 'AirPR',
    thumbnail: '/portfolio/8a342c3f-6f45-44e1-9334-e5d75ad9fb87_rwc_0x0x1693x1693x1693.gif',
    images: [],
    description: 'I was tasked to reimagine/develop the AirPR brand with many limitations. We had some older stakeholders that didn\'t like change, so I needed to develop things in ways that weren\'t far off from what they currently had, and had to justify every move.\n\nOn my first day, the Marketing team provided me with this. AirPR had been working with d-level agencies and low-res images for years and knew they needed to step up their brand presence if they ever wanted to make waves in the space. However, some older stakeholders were very partial to the current look and didn\'t want to change much.',
    sections: [
      {
        title: 'Step 1: Simplify',
        body: 'One major complaint that the team had was how difficult it was to make the logo look good on any print piece, swag item, screen, 1-pager, etc. We identified the main factor playing into that was the logo\'s complexity (shadow under the icon, gradient, etc). We also recognized that the brown color in "AIR" clashed with a lot of their work.\n\nFrom my perspective, simplicity helps create good design. I worked diligently with the team to help simplify the logo, develop a color palette, and flatten the images.',
      },
      {
        title: 'Step 2: Consistency',
        body: 'With executive leadership on board, I worked to develop a brand style guide. The team didn\'t recognize the importance of consistency across their marketing materials. Fonts were randomly selected, colors chosen on the season, and presentations were filled with inconsistent illustration styles.\n\nWe started simple and created a baseline style guide. Every email, PowerPoint presentation, and ad began to fit within these guidelines. I worked with the UX team to help change design elements in our software UI.\n\nHighlight: We did an email campaign with some high-level case study results in a banner image in this style. Typically the click rate of the emails was around 14%, but with the new images, we saw an 18 point increase.\n\nLearnings: I would have worked to get more budget for this project. We had a small team and little to spend, but I should\'ve pushed more and developed guidelines around voice and tone, photography, illustrations, etc.',
      },
      {
        title: 'Step 3: Execution',
        body: 'One of my favorite things about being a designer and creator is seeing what I create come to life. From digital/print ads to OOH and conference materials, seeing people respond and interact with a design is gratifying.\n\nSomething I\'m proud of is seeing our hard work come to life at the annual AirPR conference. I was responsible for designing, ordering, printing, hosting, and project managing for this event.\n\nThis is just a taste of how we brought the new brand look and feel to life.\n\nAfter some user research, we recognized that the name "AirPR" was misleading. Many assumed that we were a PR agency vs. a SaaS company \u2014 which kept us from many executive-level conversations at prospect companies.\n\nOur tag line was "the story is in the data." I presented a new name, "Datell" (day-tell), and got support from all but two of our board of directors. This effort was started during my transition out of AirPR and dropped after I left. It turns out one opposing director had the rights and the URL to "Onclusive."\n\nThough it felt like our hard work didn\'t pay off, I am grateful for the experience of helping a technology company go through the rebranding process.',
      },
    ],
  },
  {
    slug: 'content-creation',
    title: 'Content Creation',
    company: 'Other',
    thumbnail: '/portfolio/801b1583-7b87-47cd-8b28-e794cf34a3b8_car_1x1.gif',
    images: [],
    description: 'Jumping into the NFT space, I wanted to help other people understand NFTs and what they are. I created this video and channel to help educate others on basic NFT topics and evangelize the space/growth potential.',
    sections: [
      {
        title: 'What is an NFT?',
        body: 'Jumping into the NFT space, I wanted to help other people understand NFTs and what they are. I created this video and channel to help educate others on basic NFT topics and evangelize the space/growth potential.',
      },
      {
        title: 'Sphere Artwork',
        body: 'Legends Live On — an NFT collection exploring digital art and ownership.',
      },
      {
        title: 'Infinites Emoji Project',
        body: 'I was hired to create some custom emojis for the Infinite\'s discord server. Here are some of those explorations.',
      },
    ],
  },
]
