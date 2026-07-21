import './Button.css';

/**
 * Button — from the Flux Design System (Luma fintech).
 *
 * Two modes controlled by the `iconOnly` prop:
 *  - false (default): pill-shaped label button with optional leading icon
 *  - true: square icon-only circle button; `aria-label` is required
 *
 * Props:
 *   label      {string}    Button text (ignored when iconOnly=true)
 *   iconOnly   {boolean}   Renders the compact icon-only variant
 *   icon       {ReactNode} SVG/element rendered inside the button
 *   aria-label {string}    Accessible label (required when iconOnly=true)
 *   disabled   {boolean}
 *   onClick    {function}
 */
export function Button({
  label = 'Apply',
  iconOnly = false,
  icon = null,
  disabled = false,
  onClick,
  'aria-label': ariaLabel,
}) {
  const baseClass = iconOnly
    ? 'ryb ryb--icon-only'
    : 'ryb ryb--label';

  return (
    <button
      type="button"
      className={baseClass}
      disabled={disabled}
      onClick={onClick}
      aria-label={iconOnly ? ariaLabel : undefined}
    >
      {iconOnly ? (
        icon
      ) : (
        <>
          {icon && <span className="ryb__icon" aria-hidden="true">{icon}</span>}
          {label}
        </>
      )}
    </button>
  );
}

export default Button;
