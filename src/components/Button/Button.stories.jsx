import { Button } from './Button';

// Plus icon — matches the icon-only button in the Claude Design handoff
const PlusIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs', 'ai-generated'],
  argTypes: {
    label: { control: 'text' },
    iconOnly: { control: 'boolean' },
    disabled: { control: 'boolean' },
    onClick: { action: 'clicked' },
  },
  args: {
    label: 'Apply',
    iconOnly: false,
    disabled: false,
  },
};

/** Default pill-shaped label button — matches the "Apply" button in the design */
export const Default = {};

/** Label button with a leading icon */
export const WithIcon = {
  args: {
    label: 'Add item',
    icon: <PlusIcon />,
  },
};

/** Icon-only circle button — matches the "Add" button in the design */
export const IconOnly = {
  args: {
    iconOnly: true,
    'aria-label': 'Add',
    icon: <PlusIcon />,
  },
};

/** Disabled pill button */
export const Disabled = {
  args: {
    label: 'Apply',
    disabled: true,
  },
};

/** Disabled icon-only circle button */
export const IconOnlyDisabled = {
  args: {
    iconOnly: true,
    'aria-label': 'Add',
    icon: <PlusIcon />,
    disabled: true,
  },
};

/** Shown on the blue-10 page background, matching the design context */
export const OnBrandBackground = {
  args: {
    label: 'Apply',
  },
  decorators: [
    (Story) => (
      <div
        style={{
          background: 'var(--color-blue-10)',
          padding: '32px',
          display: 'flex',
          gap: '24px',
          alignItems: 'center',
          borderRadius: '8px',
        }}
      >
        <Story />
        <Button
          iconOnly
          aria-label="Add"
          icon={<PlusIcon />}
        />
      </div>
    ),
  ],
};
