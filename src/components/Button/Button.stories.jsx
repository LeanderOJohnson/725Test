import { Button } from './Button';

const PlusIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const EditIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 20h9" />
    <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4z" />
  </svg>
);

export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs', 'ai-generated'],
  argTypes: {
    label: { control: 'text' },
    variant: { control: 'select', options: ['primary', 'secondary', 'tertiary'] },
    size: { control: 'radio', options: ['medium', 'small'] },
    iconOnly: { control: 'boolean' },
    disabled: { control: 'boolean' },
    onClick: { action: 'clicked' },
  },
  args: {
    label: 'Apply',
    variant: 'primary',
    size: 'medium',
    iconOnly: false,
    disabled: false,
  },
};

/** Default pill-shaped primary label button */
export const Primary = {};

/** Secondary — outlined ghost button */
export const Secondary = {
  args: { variant: 'secondary', label: 'Cancel' },
};

/** Tertiary — transparent ghost, used for icon actions */
export const Tertiary = {
  args: { variant: 'tertiary', label: 'Edit' },
};

/** Label button with a leading icon */
export const WithIcon = {
  args: { label: 'Add item', icon: <PlusIcon /> },
};

/** Icon-only medium — 40px circle (original round yellow button) */
export const IconOnlyMedium = {
  args: { iconOnly: true, 'aria-label': 'Add', icon: <PlusIcon /> },
};

/** Icon-only small — 24px square, used inside DraggableCard */
export const IconOnlySmall = {
  args: { iconOnly: true, variant: 'tertiary', size: 'small', 'aria-label': 'Edit', icon: <EditIcon /> },
};

/** Disabled */
export const Disabled = {
  args: { disabled: true },
};

/** All variants at a glance */
export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap', padding: 24, background: 'var(--color-blue-10)', borderRadius: 8 }}>
      <Button label="Primary" variant="primary" />
      <Button label="Secondary" variant="secondary" />
      <Button label="Tertiary" variant="tertiary" />
      <Button iconOnly variant="primary" aria-label="Add" icon={<PlusIcon />} />
      <Button iconOnly variant="secondary" aria-label="Add" icon={<PlusIcon />} />
      <Button iconOnly variant="tertiary" size="small" aria-label="Edit" icon={<EditIcon />} />
    </div>
  ),
};
