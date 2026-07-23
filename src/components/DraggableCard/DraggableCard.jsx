import { useState } from 'react';
import { Button } from '../Button/Button';
import './DraggableCard.css';

// Icons
const GripIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <circle cx="9" cy="6" r="1.6" />
    <circle cx="15" cy="6" r="1.6" />
    <circle cx="9" cy="12" r="1.6" />
    <circle cx="15" cy="12" r="1.6" />
    <circle cx="9" cy="18" r="1.6" />
    <circle cx="15" cy="18" r="1.6" />
  </svg>
);

const EditIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 20h9" />
    <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4z" />
  </svg>
);

const AddIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 5v14M5 12h14" />
  </svg>
);

const RemoveIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);

/**
 * DraggableCard — Flux Design System (Luma fintech).
 *
 * A compact palette item that can be dragged onto a build canvas.
 * Grab it by the grip handle or use the inline action buttons.
 *
 * Props:
 *   title      {string}   Primary label
 *   meta       {string}   Secondary descriptor (shown in mono, tabular)
 *   state      {'default'|'hover'|'dragging'|'selected'|'disabled'}  Visual state override
 *   showGrip   {boolean}  Show the 6-dot drag handle (default: true)
 *   showEdit   {boolean}  Show the edit icon button (default: true)
 *   showAdd    {boolean}  Show the add icon button (default: true)
 *   showRemove {boolean}  Show the remove icon button (default: false)
 *   onEdit     {function} Fired when edit button is clicked
 *   onAdd      {function} Fired when add button is clicked
 *   onRemove   {function} Fired when remove button is clicked
 */
export function DraggableCard({
  title = 'Cap Rate Sleeve',
  meta = 'Structured · 3 fields',
  state: stateProp = 'default',
  showGrip = true,
  showEdit = true,
  showAdd = true,
  showRemove = false,
  onEdit,
  onAdd,
  onRemove,
}) {
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const isDisabled = stateProp === 'disabled';
  const isSelected = stateProp === 'selected';
  const draggable = !isDisabled;

  // Resolve visual state — internal drag/hover takes precedence over prop overrides
  const effectiveDragging = stateProp === 'dragging' || isDragging;
  const effectiveHover = stateProp === 'hover' || (isHovered && !effectiveDragging && !isSelected && !isDisabled);

  const stateClass = [
    'dc',
    effectiveDragging && 'dc--dragging',
    effectiveHover && 'dc--hover',
    isSelected && 'dc--selected',
    isDisabled && 'dc--disabled',
  ]
    .filter(Boolean)
    .join(' ');

  const handleDragStart = (e) => {
    if (!draggable) { e.preventDefault(); return; }
    try {
      e.dataTransfer.setData('text/plain', title);
      e.dataTransfer.effectAllowed = 'copy';
    } catch (_) {}
    setIsDragging(true);
  };

  return (
    <div
      className={stateClass}
      draggable={draggable}
      onDragStart={handleDragStart}
      onDragEnd={() => setIsDragging(false)}
      onMouseEnter={() => !isDisabled && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role={draggable ? 'button' : undefined}
      tabIndex={isDisabled ? -1 : 0}
      aria-disabled={isDisabled}
    >
      {showGrip && (
        <span className="dc__grip" aria-hidden="true">
          <GripIcon />
        </span>
      )}

      <div className="dc__body">
        <div className="dc__title">{title}</div>
        <div className="dc__meta">{meta}</div>
      </div>

      {showEdit && (
        <Button
          iconOnly
          variant="tertiary"
          size="small"
          aria-label="Edit component"
          icon={<EditIcon />}
          onClick={(e) => { e.stopPropagation(); onEdit?.(); }}
        />
      )}

      {showAdd && (
        <Button
          iconOnly
          variant="secondary"
          size="small"
          aria-label="Add component"
          icon={<AddIcon />}
          onClick={(e) => { e.stopPropagation(); onAdd?.(); }}
        />
      )}

      {showRemove && (
        <Button
          iconOnly
          variant="tertiary"
          size="small"
          aria-label="Remove from selection"
          icon={<RemoveIcon />}
          onClick={(e) => { e.stopPropagation(); onRemove?.(); }}
        />
      )}
    </div>
  );
}

export default DraggableCard;
