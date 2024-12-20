import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "anne",
  description: "An AI-powered companion that emulates emotions and combines proven pedagogical assistance with agentic AI and haptic feedback. It includes Anne Wear, a playful wearable for kids with ADHD that aids in task management and motivation, and Anne Desk, a tool for adults to stay productive with AI-powered task prioritization and reminders.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
