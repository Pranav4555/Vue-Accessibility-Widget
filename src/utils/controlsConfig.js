export const controlSections = [
  {
    name: 'visual',
    label: 'Visual Adjustments',
    controls: [
      { stateKey: 'contrast', label: 'Contrast+', desc: 'Increase overall contrast.', type: 'toggle' },
      { stateKey: 'highlightLinks', label: 'Highlight Links', desc: 'Emphasize hyperlinks.', type: 'toggle' },
      { stateKey: 'bigText', label: 'Bigger Text', desc: 'Make all text bigger.', type: 'toggle' },
      { stateKey: 'textSize', label: 'Text Size', desc: 'Adjust text size.', type: 'slider', min: 100, max: 200, step: 5 },
      { stateKey: 'textSpacing', label: 'Text Spacing', desc: 'Increase line and letter spacing.', type: 'toggle' },
    ]
  },
  {
    name: 'appearance',
    label: 'Appearance',
    controls: [
      {
        stateKey: 'widgetTheme',
        label: 'Widget Theme',
        desc: 'Choose menu theme.',
        type: 'select',
        options: [
          { value: 'light', label: 'Light' },
          { value: 'dark', label: 'Dark' },
          { value: 'contrast', label: 'High Contrast' }
        ]
      }
    ]
  },
  {
    name: 'behavior',
    label: 'Behavior Controls',
    controls: [
      { stateKey: 'pauseAnimations', label: 'Pause Animations', desc: 'Pause CSS/JS animations.', type: 'toggle' },
      { stateKey: 'hideImages', label: 'Hide Images', desc: 'Temporarily hide images.', type: 'toggle' },
      { stateKey: 'dyslexiaFont', label: 'Dyslexia-Friendly Font', desc: 'Switch to OpenDyslexic.', type: 'toggle' }
    ]
  },
  {
    name: 'interface',
    label: 'Interface Tools',
    controls: [
      { stateKey: 'bigCursor', label: 'Big Cursor', desc: 'Enlarge cursor for visibility.', type: 'toggle' },
      { stateKey: 'showTooltips', label: 'Show Tooltips', desc: 'Display alt/title as tooltips.', type: 'toggle' },
      { stateKey: 'outlineHeadings', label: 'Outline Headings', desc: 'Show heading outlines.', type: 'toggle' }
    ]
  }
]
