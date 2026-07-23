import { useState } from 'react';
import { DraggableCard } from './DraggableCard';

export default {
  title: 'Components/DraggableCard',
  component: DraggableCard,
  tags: ['autodocs', 'ai-generated'],
  argTypes: {
    title: { control: 'text' },
    meta: { control: 'text' },
    state: {
      control: 'select',
      options: ['default', 'hover', 'dragging', 'selected', 'disabled'],
    },
    showGrip: { control: 'boolean' },
    showEdit: { control: 'boolean' },
    showAdd: { control: 'boolean' },
    showRemove: { control: 'boolean' },
    onEdit: { action: 'edit clicked' },
    onAdd: { action: 'add clicked' },
    onRemove: { action: 'remove clicked' },
  },
  args: {
    title: 'Cap Rate Sleeve',
    meta: 'Structured · 3 fields',
    state: 'default',
    showGrip: true,
    showEdit: true,
    showAdd: true,
    showRemove: false,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 320, padding: 24, background: 'var(--color-surface-secondary)', borderRadius: 12 }}>
        <Story />
      </div>
    ),
  ],
};

/** Default resting state — try dragging it */
export const Default = {};

/** Hover state — lifted with border and shadow */
export const Hover = {
  args: { state: 'hover' },
};

/** Dragging state — slight tilt and blue border */
export const Dragging = {
  args: { state: 'dragging' },
};

/** Selected state — blue tinted background */
export const Selected = {
  args: { state: 'selected' },
};

/** Disabled state — muted, non-interactive */
export const Disabled = {
  args: { state: 'disabled' },
};

/** Add button only — edit hidden */
export const AddOnly = {
  args: { showEdit: false },
};

/** Edit button only — add hidden */
export const EditOnly = {
  args: { showAdd: false },
};

/** No action buttons */
export const NoActions = {
  args: { showEdit: false, showAdd: false },
};

/** No grip handle */
export const NoGrip = {
  args: { showGrip: false },
};

/** Remove button — used when card is in a "built" list */
export const WithRemove = {
  args: { showAdd: false, showEdit: false, showRemove: true },
};

/** Long title and meta truncate cleanly */
export const LongContent = {
  args: {
    title: 'Buffered Dual-Directional Index Sleeve',
    meta: 'Structured · 6 fields · edited 2d ago',
  },
};

/** All five states in one view */
export const AllStates = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 320 }}>
      {['default', 'hover', 'dragging', 'selected', 'disabled'].map((s) => (
        <div key={s} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <span style={{ fontSize: 11, color: 'var(--color-text-hint)', fontFamily: 'var(--font-primary)' }}>{s}</span>
          <DraggableCard title="Cap Rate Sleeve" meta="Structured · 3 fields" state={s} />
        </div>
      ))}
    </div>
  ),
};

/** Live drag-and-drop demo — drag from palette onto the drop zone */
export const LiveDemo = {
  render: () => {
    const palette = [
      { title: 'Cap Rate Sleeve', meta: 'Structured · 3 fields' },
      { title: 'Income Rider', meta: 'Annuity · 5 fields' },
      { title: 'Surrender Schedule', meta: 'Annuity · 7-yr' },
      { title: 'Participation Sleeve', meta: 'Structured · 2 fields' },
    ];

    const [built, setBuilt] = useState([]);
    const [dragOver, setDragOver] = useState(false);

    const add = (item) =>
      setBuilt((prev) => [...prev, { ...item, id: Date.now() + Math.random() }]);

    const remove = (id) =>
      setBuilt((prev) => prev.filter((b) => b.id !== id));

    return (
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, maxWidth: 640 }}>
        {/* Palette */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--color-text-body)', fontFamily: 'var(--font-primary)' }}>
            Component palette
          </span>
          {palette.map((item) => (
            <DraggableCard
              key={item.title}
              title={item.title}
              meta={item.meta}
              onAdd={() => add(item)}
              onEdit={() => {}}
            />
          ))}
        </div>

        {/* Drop zone */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--color-text-body)', fontFamily: 'var(--font-primary)' }}>
              Your build ({built.length})
            </span>
            {built.length > 0 && (
              <button
                type="button"
                onClick={() => setBuilt([])}
                style={{ fontSize: 11, border: 'none', background: 'none', color: 'var(--color-blue-60)', cursor: 'pointer', fontFamily: 'var(--font-primary)' }}
              >
                Clear
              </button>
            )}
          </div>
          <div
            onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
            onDragLeave={() => setDragOver(false)}
            onDrop={(e) => {
              e.preventDefault();
              setDragOver(false);
              const t = e.dataTransfer.getData('text/plain');
              const match = palette.find((p) => p.title === t) || { title: t, meta: 'Dropped' };
              add(match);
            }}
            style={{
              border: dragOver ? '2px dashed var(--color-blue-50)' : '2px dashed var(--color-stroke-default)',
              background: dragOver ? 'var(--color-surface-info)' : 'var(--color-surface-tertiary)',
              borderRadius: 10,
              padding: 12,
              minHeight: 164,
              display: 'flex',
              flexDirection: 'column',
              gap: 8,
              transition: 'border-color .12s ease, background-color .12s ease',
            }}
          >
            {built.length === 0 ? (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flex: 1, gap: 8, color: 'var(--color-text-hint)', textAlign: 'center', minHeight: 120 }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="3" strokeDasharray="4 4" />
                  <path d="M12 8v8M8 12h8" />
                </svg>
                <span style={{ fontSize: 12, fontFamily: 'var(--font-primary)' }}>Drop components here</span>
              </div>
            ) : (
              built.map((b) => (
                <DraggableCard
                  key={b.id}
                  title={b.title}
                  meta={b.meta}
                  showAdd={false}
                  showEdit={false}
                  showRemove
                  onRemove={() => remove(b.id)}
                />
              ))
            )}
          </div>
        </div>
      </div>
    );
  },
};
