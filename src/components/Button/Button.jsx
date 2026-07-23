import './Button.css';

/**
 * Button — Flux Design System (Luma fintech).
 *
 * A single atomic button component covering all use cases:
 * pill label buttons, icon-only circles, and small icon actions.
 *
 * Props:
 *   label      {string}                           Button text (ignored when iconOnly=true)
 *   icon       {ReactNode}                        Icon element rendered inside the button
 *   iconOnly   {boolean}                          Renders icon-only variant; aria-label is required
 *   variant    {'primary'|'secondary'|'tertiary'} Visual style (default: 'primary')
 *   size       {'medium'|'small'}                 Size scale (default: 'medium')
 *   disabled   {boolean}
 *   onClick    {function}
 *   aria-label {string}                           Required when iconOnly=true
 */
export function Button({
  label = 'Apply',
  icon = null,
  iconOnly = false,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  onClick,
  'aria-label': ariaLabel,
}) {
  const classes = [
    'btn',
    `btn--${variant}`,
    `btn--${size}`,
    iconOnly && 'btn--icon-only',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      type="button"
      className={classes}
      disabled={disabled}
      onClick={onClick}
      aria-label={iconOnly ? ariaLabel : undefined}
    >
      {iconOnly ? (
        icon
      ) : (
        <>
          {icon && <span className="btn__icon" aria-hidden="true">{icon}</span>}
          {label}
        </>
      )}
    </button>
  );
}

export default Button;
