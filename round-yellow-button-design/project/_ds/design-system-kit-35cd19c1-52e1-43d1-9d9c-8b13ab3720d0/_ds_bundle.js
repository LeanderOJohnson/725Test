/* @ds-bundle: {"format":4,"namespace":"LumaFluxDesignSystem_35cd19","components":[{"name":"LumaLogo","sourcePath":"components/brand/LumaLogo.jsx"},{"name":"Badge","sourcePath":"components/buttons/Badge.jsx"},{"name":"StatusDot","sourcePath":"components/buttons/Badge.jsx"},{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"ChoiceChip","sourcePath":"components/buttons/ChoiceChip.jsx"},{"name":"ChoiceChipGroup","sourcePath":"components/buttons/ChoiceChip.jsx"},{"name":"Chart","sourcePath":"components/charts/Chart.jsx"},{"name":"ComparisonBar","sourcePath":"components/charts/ComparisonBar.jsx"},{"name":"SwimlaneMap","sourcePath":"components/charts/SwimlaneMap.jsx"},{"name":"AiInsights","sourcePath":"components/feedback/AiInsights.jsx"},{"name":"ProgressBar","sourcePath":"components/feedback/ProgressBar.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"SearchBar","sourcePath":"components/forms/SearchBar.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Slider","sourcePath":"components/forms/Slider.jsx"},{"name":"SplitInput","sourcePath":"components/forms/SplitInput.jsx"},{"name":"Toggle","sourcePath":"components/forms/Toggle.jsx"},{"name":"Avatar","sourcePath":"components/layout/Avatar.jsx"},{"name":"AvatarGroup","sourcePath":"components/layout/Avatar.jsx"},{"name":"Card","sourcePath":"components/layout/Card.jsx"},{"name":"CardHeader","sourcePath":"components/layout/Card.jsx"},{"name":"CardTitle","sourcePath":"components/layout/Card.jsx"},{"name":"CardContent","sourcePath":"components/layout/Card.jsx"},{"name":"Divider","sourcePath":"components/layout/Divider.jsx"},{"name":"FilterPanel","sourcePath":"components/layout/FilterPanel.jsx"},{"name":"MetricCard","sourcePath":"components/layout/MetricCard.jsx"},{"name":"Page","sourcePath":"components/layout/Page.jsx"},{"name":"PageContent","sourcePath":"components/layout/Page.jsx"},{"name":"Section","sourcePath":"components/layout/Section.jsx"},{"name":"Table","sourcePath":"components/layout/Table.jsx"},{"name":"ToolBar","sourcePath":"components/layout/ToolBar.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"NavigationMenu","sourcePath":"components/navigation/NavigationMenu.jsx"},{"name":"PageHeader","sourcePath":"components/navigation/PageHeader.jsx"},{"name":"SegmentedControl","sourcePath":"components/navigation/SegmentedControl.jsx"},{"name":"Stepper","sourcePath":"components/navigation/Stepper.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"TopNav","sourcePath":"components/navigation/TopNav.jsx"}],"sourceHashes":{"components/brand/LumaLogo.jsx":"2394981c1a52","components/buttons/Badge.jsx":"ecf9785e57bc","components/buttons/Button.jsx":"b5dcd4e57ba3","components/buttons/ChoiceChip.jsx":"b8c62735d29a","components/charts/Chart.jsx":"55de2031ebcb","components/charts/ComparisonBar.jsx":"182fb7b3e5ff","components/charts/SwimlaneMap.jsx":"cfcdd0890810","components/feedback/AiInsights.jsx":"1eb5e49c8a48","components/feedback/ProgressBar.jsx":"11b8a835103d","components/feedback/Tooltip.jsx":"064890388bb9","components/forms/Checkbox.jsx":"54b0345446c1","components/forms/Input.jsx":"3d69dd4cafb5","components/forms/Radio.jsx":"7bcf36f3260e","components/forms/SearchBar.jsx":"cbceb1defb0e","components/forms/Select.jsx":"cf7a8ea0bbf4","components/forms/Slider.jsx":"71164e135f0d","components/forms/SplitInput.jsx":"d3dc2a62cd1e","components/forms/Toggle.jsx":"54219107102e","components/layout/Avatar.jsx":"7ab73f0dae8f","components/layout/Card.jsx":"d044efd39305","components/layout/Divider.jsx":"5a521d2cfe6b","components/layout/FilterPanel.jsx":"74852cb5f76e","components/layout/MetricCard.jsx":"47e0385ed492","components/layout/Page.jsx":"e9a42f7a204c","components/layout/Section.jsx":"929da6cccffa","components/layout/Table.jsx":"a41ae1c01641","components/layout/ToolBar.jsx":"d35266039256","components/navigation/Footer.jsx":"627d51f09378","components/navigation/NavigationMenu.jsx":"b6bf9e4e4ef1","components/navigation/PageHeader.jsx":"db33e75dd126","components/navigation/SegmentedControl.jsx":"bb518b71416e","components/navigation/Stepper.jsx":"45c77ad7333b","components/navigation/Tabs.jsx":"5e0b2793c43a","components/navigation/TopNav.jsx":"682181f635b7","ui_kits/icons.js":"133c1924ee08"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.LumaFluxDesignSystem_35cd19 = window.LumaFluxDesignSystem_35cd19 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/LumaLogo.jsx
try { (() => {
const ICON = "M41.6301 67.041C43.2907 68.6824 43.2906 71.3605 41.6301 73.002L34.5491 80L27.469 73.002C25.8085 71.3605 25.8084 68.6824 27.469 67.041L34.5491 60.043L41.6301 67.041ZM21.3508 27.041C23.0114 28.6824 23.0113 31.3605 21.3508 33.002L14.2698 40L21.3508 46.998C23.0117 48.6392 25.7214 48.6394 27.3821 46.998L34.4182 40.043L27.3821 33.0889C25.7213 31.4474 25.7213 28.7684 27.3821 27.127L34.4622 20.1299L41.5422 27.127C43.203 28.7684 45.9127 28.7684 47.5735 27.127L54.6536 20.1299C54.6536 20.1299 59.199 24.6223 64.7932 30.1514C70.3875 35.5077 70.3879 44.4923 64.8811 50.0215L54.6536 60.043L47.5735 53.0449C45.913 51.4034 45.9128 48.7253 47.5735 47.084L54.6536 40.0859L47.5735 33.0889C45.9127 31.4474 43.203 31.4474 41.5422 33.0889L34.5051 40.043L41.5422 46.998C43.203 48.6395 43.203 51.3175 41.5422 52.959L34.4622 59.957L27.3821 52.959C25.7213 51.3176 23.0116 51.3177 21.3508 52.959L14.2698 59.957C14.2447 59.9323 9.70893 55.4494 4.13012 49.9355C-1.37671 44.4928 -1.37671 35.5072 4.13012 30.0645L14.2698 20.043L21.3508 27.041ZM41.5422 6.99805C43.203 8.63952 43.203 11.3175 41.5422 12.959L34.4622 19.957L27.3821 12.959C25.7213 11.3175 25.7213 8.63952 27.3821 6.99805L34.4622 0L41.5422 6.99805Z";
const TXT = {
  p1: "M137.012 26.9709H143L133.276 9.0531H127.049L117.326 26.9709H117.972C121.229 26.8995 123.912 25.7097 125.253 23.4493L130.139 14.6447L137.012 26.9709ZM101.59 19.5469L107.195 10.8852C108.033 9.64789 109.278 9.02913 110.931 9.02913H115.913V26.9472H110.308V15.1921L102.836 26.9472H100.345L92.8724 15.2161V26.9709H87.268V9.0531H92.2496C93.9021 9.0531 95.1477 9.67162 95.9859 10.9089L101.59 19.5469ZM67.0782 11.0757V20.7842C67.0782 22.0215 67.9164 22.64 69.5689 22.64H75.5566C77.2088 22.64 78.0473 22.0215 78.0473 20.7842V9.02913H83.6517V21.9978C83.6517 25.3052 81.7833 26.947 78.0473 26.947H67.0782C63.342 26.947 61.4738 25.3052 61.4738 21.9978V9.02913C67.0782 9.02913 67.0782 11.0757 67.0782 11.0757ZM60.3001 26.9709H43.7267C41.2358 26.9709 39.9904 25.7334 39.9904 23.2588V9.0531H45.5948V22.64H55.6538C59.941 22.64 60.3001 26.9709 60.3001 26.9709Z",
  p2: "M12.2867 5.83159C11.5431 5.09298 11.5431 3.88781 12.2867 3.14895L15.4562 0L18.6259 3.14895C19.3693 3.88781 19.3693 5.09298 18.6259 5.83159L15.4562 8.98079L12.2867 5.83159Z",
  p3: "M6.41721 9.01936L1.87808 13.5292C-0.626027 15.9783 -0.626027 20.0213 1.87808 22.4709C4.38244 24.9588 6.41721 26.9804 6.41721 26.9804L9.58689 23.8315C10.3301 23.0929 11.5431 23.0929 12.2865 23.8315L15.4562 26.9804L18.6256 23.8315C19.369 23.0929 19.369 21.8877 18.6256 21.1489L15.4759 18.0195L18.6255 14.8897C19.3692 14.1511 20.5822 14.1511 21.3256 14.8897L24.495 18.0389L21.3256 21.1876C20.5822 21.9265 20.5822 23.1316 21.3256 23.8702L24.495 27.0194L29.0342 22.5096C31.5385 20.0215 31.5385 15.9782 29.0342 13.5679C26.5298 11.08 24.495 9.05836 24.495 9.05836L21.3256 12.2073C20.6338 12.8946 19.5354 12.9424 18.7869 12.3505C18.7377 12.2872 18.684 12.2263 18.6256 12.1683L15.4562 9.01936L12.2865 12.1683C11.9076 12.5448 11.7218 13.0424 11.7291 13.5377C11.7263 14.0272 11.9122 14.5177 12.2866 14.8897L15.4366 18.0193L12.2865 21.1489C11.5431 21.8877 10.3301 21.8877 9.58689 21.1489L6.41721 17.9999L9.58689 14.8507C10.3301 14.1123 10.3301 12.9069 9.58689 12.1686L6.41721 9.01936Z",
  p4: "M12.2866 32.8508C11.543 32.1122 11.543 30.907 12.2866 30.1682L15.4561 27.0192L18.6258 30.1682C19.3692 30.907 19.3692 32.1122 18.6258 32.8508L15.4561 36L12.2866 32.8508Z"
};

/**
 * LumaLogo — the Luma mark. `icon` (square) or `full` (icon + wordmark).
 * Colors: dark (navy, default) or light (white, for navy backgrounds).
 */
function LumaLogo({
  variant = "icon",
  color = "dark",
  size = 40,
  className = ""
}) {
  const fill = color === "light" ? "#ffffff" : "#00263e";
  if (variant === "full") {
    const w = size / 36 * 143;
    return /*#__PURE__*/React.createElement("span", {
      className: className,
      style: {
        display: "inline-block",
        width: w,
        height: size
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "100%",
      height: "100%",
      viewBox: "0 0 143 36",
      fill: "none",
      role: "img",
      "aria-label": "Luma"
    }, /*#__PURE__*/React.createElement("path", {
      clipRule: "evenodd",
      fillRule: "evenodd",
      d: TXT.p1,
      fill: fill
    }), /*#__PURE__*/React.createElement("path", {
      clipRule: "evenodd",
      fillRule: "evenodd",
      d: TXT.p2,
      fill: fill
    }), /*#__PURE__*/React.createElement("path", {
      d: TXT.p3,
      fill: fill
    }), /*#__PURE__*/React.createElement("path", {
      d: TXT.p4,
      fill: fill
    })));
  }
  const w = size / 80 * 69.0001;
  return /*#__PURE__*/React.createElement("span", {
    className: className,
    style: {
      display: "inline-block",
      width: w,
      height: size
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 69.0001 80",
    fill: "none",
    role: "img",
    "aria-label": "Luma"
  }, /*#__PURE__*/React.createElement("path", {
    d: ICON,
    fill: fill
  })));
}
Object.assign(__ds_scope, { LumaLogo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/LumaLogo.jsx", error: String((e && e.message) || e) }); }

// components/buttons/Badge.jsx
try { (() => {
/**
 * Badge — compact status / category label. Pill (default) or rounded shape.
 * The 8 categorical variants use matched Surface+Text categorical token pairs.
 */
function Badge({
  variant = "neutral",
  shape = "pill",
  icon,
  children,
  className = ""
}) {
  const cls = ["lf-badge", `lf-badge--${variant}`, shape === "rounded" ? "lf-badge--rounded" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", {
    className: cls
  }, icon && /*#__PURE__*/React.createElement("span", {
    className: "lf-badge__icon"
  }, icon), children);
}

/** StatusDot — colored dot + label for active / pending / inactive states. */
function StatusDot({
  status = "active",
  label,
  className = ""
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: ["lf-statusdot", className].filter(Boolean).join(" ")
  }, /*#__PURE__*/React.createElement("span", {
    className: `lf-statusdot__dot lf-statusdot__dot--${status}`,
    "aria-hidden": "true"
  }), label);
}
Object.assign(__ds_scope, { Badge, StatusDot });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Badge.jsx", error: String((e && e.message) || e) }); }

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — Luma's primary action control.
 * Variants: primary, secondary, tertiary, ghost, destructive. Sizes: small (24px), medium (32px).
 * Icons: left = decorative, right = navigation/expansion. Icon-only requires aria-label.
 */
function Button({
  variant = "primary",
  size = "medium",
  iconLeft,
  iconRight,
  children,
  className = "",
  ...props
}) {
  const iconOnly = (iconLeft || iconRight) && !children;
  const cls = ["lf-btn", `lf-btn--${variant}`, `lf-btn--${size}`, iconOnly ? "lf-btn--icon-only" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls
  }, props), iconLeft && /*#__PURE__*/React.createElement("span", {
    className: "lf-btn__icon"
  }, iconLeft), children, iconRight && /*#__PURE__*/React.createElement("span", {
    className: "lf-btn__icon"
  }, iconRight));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/buttons/ChoiceChip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ChoiceChip — toggleable selection chip. Lives on the page (Blue.10) or a
 * section (Neutral.10) — never inside a Card (its white fill disappears).
 */
function ChoiceChip({
  label,
  value,
  selected = false,
  icon,
  onChange,
  disabled,
  className = "",
  ...props
}) {
  const cls = ["lf-chip", selected ? "lf-chip--selected" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: cls,
    disabled: disabled,
    "aria-pressed": selected,
    onClick: () => !disabled && onChange && onChange(value)
  }, props), icon && /*#__PURE__*/React.createElement("span", {
    className: "lf-btn__icon"
  }, icon), label);
}

/** ChoiceChipGroup — manages single- or multi-select across a row of chips. */
function ChoiceChipGroup({
  items,
  value,
  defaultValue,
  onChange,
  multiple = false,
  className = ""
}) {
  const [internal, setInternal] = React.useState(defaultValue ?? (multiple ? [] : ""));
  const val = value !== undefined ? value : internal;
  const handle = v => {
    let next;
    if (multiple) {
      const arr = Array.isArray(val) ? val : [];
      next = arr.includes(v) ? arr.filter(x => x !== v) : [...arr, v];
    } else {
      next = v;
    }
    if (value === undefined) setInternal(next);
    onChange && onChange(next);
  };
  const isSel = v => multiple ? Array.isArray(val) && val.includes(v) : val === v;
  return /*#__PURE__*/React.createElement("div", {
    role: multiple ? "group" : "radiogroup",
    className: ["lf-chip-group", className].filter(Boolean).join(" "),
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--spacing-8)"
    }
  }, items.map(it => /*#__PURE__*/React.createElement(ChoiceChip, {
    key: it.value,
    label: it.label,
    value: it.value,
    icon: it.icon,
    disabled: it.disabled,
    selected: isSel(it.value),
    onChange: handle
  })));
}
Object.assign(__ds_scope, { ChoiceChip, ChoiceChipGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/ChoiceChip.jsx", error: String((e && e.message) || e) }); }

// components/charts/Chart.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Chart — Highcharts-backed data visualization, themed to Flux tokens.
 * Supports line/area (time series), bar, donut, sparkline, and heatmap via
 * a single `type` prop so callers don't need five separate imports.
 *
 * Requires Highcharts (and the heatmap module for type="heatmap") loaded as
 * globals before this component mounts — see Chart.prompt.md for the CDN
 * script tags. This component never bundles or imports Highcharts itself.
 */

function readVar(name, fallback) {
  if (typeof window === "undefined") return fallback;
  const v = getComputedStyle(document.documentElement).getPropertyValue(name);
  return v && v.trim() ? v.trim() : fallback;
}
const CATEGORICAL_VARS = ["--color-chart-categorical-1", "--color-chart-categorical-2", "--color-chart-categorical-3", "--color-chart-categorical-4", "--color-chart-categorical-5", "--color-chart-categorical-6", "--color-chart-categorical-7"];
const SEQUENTIAL_VARS = ["--color-chart-sequential-1", "--color-chart-sequential-2", "--color-chart-sequential-3", "--color-chart-sequential-4", "--color-chart-sequential-5", "--color-chart-sequential-6", "--color-chart-sequential-7"];
function paletteFor(kind) {
  const vars = kind === "sequential" ? SEQUENTIAL_VARS : CATEGORICAL_VARS;
  return vars.map(v => readVar(v, "#0141e3"));
}
function Chart({
  type = "area",
  series = [],
  categories,
  height = 280,
  showLegend,
  showGrid = true,
  valueFormat,
  step = false,
  markers,
  gradient = false,
  dark = false,
  plotBands,
  plotLines,
  endpointLabels = false,
  className = "",
  ariaLabel,
  ...props
}) {
  const ref = React.useRef(null);
  const chartRef = React.useRef(null);
  const isSparkline = type === "sparkline";
  React.useEffect(() => {
    const Highcharts = typeof window !== "undefined" ? window.Highcharts : null;
    if (!Highcharts || !ref.current) return;
    const fontFamily = readVar("--font-primary", "IBM Plex Sans, sans-serif");
    const textBody = readVar("--color-text-body", "#3a414b");
    const textHint = readVar("--color-text-hint", "#64748b");
    const stroke = readVar("--color-stroke-default", "#d1d5db");
    const surface = readVar("--color-surface-tertiary", "#ffffff");
    const inverse = readVar("--color-blue-90", "#00263e");
    const textInverse = readVar("--color-text-inverse", "#ffffff");
    const sequential = type === "bar" || type === "donut" ? paletteFor("sequential") : paletteFor("categorical");
    const fmtVal = v => valueFormat === "currency" ? "$" + Highcharts.numberFormat(v, 0, ".", ",") : valueFormat === "percent" ? v + "%" : Highcharts.numberFormat(v, 0, ".", ",");
    const gradientFill = color => ({
      linearGradient: {
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 1
      },
      stops: [[0, Highcharts.color(color).setOpacity(0.28).get("rgba")], [1, Highcharts.color(color).setOpacity(0).get("rgba")]]
    });
    const endpointDataLabels = color => ({
      enabled: true,
      useHTML: true,
      allowOverlap: true,
      formatter: function () {
        if (this.point.index !== this.series.data.length - 1) return null;
        return '<span style="display:inline-block;padding:2px 8px;border-radius:6px;background:' + color + ';color:' + textInverse + ';font-family:' + fontFamily + ';font-size:11px;font-weight:600;white-space:nowrap">' + this.series.name + " " + fmtVal(this.y) + "</span>";
      }
    });
    const processed = series.map((s, i) => {
      const c = s.color || sequential[i % sequential.length];
      const out = Object.assign({}, s);
      if (step && (type === "line" || type === "area")) out.step = "left";
      if (gradient && type === "area") out.fillColor = gradientFill(c);
      if (endpointLabels) out.dataLabels = endpointDataLabels(c);
      return out;
    });
    const highchartsType = type === "sparkline" ? "area" : type === "donut" ? "pie" : type === "bar" ? "column" : type === "heatmap" ? "heatmap" : type; // "area" | "line"

    const formatter = valueFormat === "currency" ? function () {
      return "$" + Highcharts.numberFormat(this.value, 0, ".", ",");
    } : valueFormat === "percent" ? function () {
      return this.value + "%";
    } : undefined;
    const baseConfig = {
      chart: {
        type: highchartsType,
        height,
        backgroundColor: "transparent",
        style: {
          fontFamily
        },
        spacing: isSparkline ? [2, 2, 2, 2] : [16, 16, 16, 16]
      },
      title: {
        text: undefined
      },
      credits: {
        enabled: false
      },
      colors: sequential,
      legend: {
        enabled: !!showLegend,
        itemStyle: {
          fontFamily,
          fontSize: "12px",
          fontWeight: "400",
          color: textBody
        }
      },
      tooltip: {
        backgroundColor: surface,
        borderColor: stroke,
        borderRadius: 8,
        style: {
          fontFamily,
          fontSize: "12px",
          color: textBody
        },
        shadow: false
      },
      plotOptions: {
        series: {
          animation: {
            duration: 200
          },
          marker: {
            enabled: type === "line",
            radius: 3
          }
        },
        area: {
          fillOpacity: 0.12,
          lineWidth: 2
        },
        pie: {
          innerSize: type === "donut" ? "68%" : "0%",
          borderWidth: 2,
          borderColor: surface,
          dataLabels: {
            enabled: false
          }
        },
        column: {
          borderRadius: 4,
          borderWidth: 0
        },
        heatmap: {
          borderWidth: 1,
          borderColor: surface
        }
      },
      series: processed
    };
    if (markers !== undefined) {
      baseConfig.plotOptions.series.marker.enabled = markers;
    }
    if (dark) {
      baseConfig.tooltip.backgroundColor = inverse;
      baseConfig.tooltip.borderColor = inverse;
      baseConfig.tooltip.borderWidth = 0;
      baseConfig.tooltip.borderRadius = 12;
      baseConfig.tooltip.shared = type === "line" || type === "area";
      baseConfig.tooltip.style = {
        fontFamily,
        fontSize: "12px",
        color: textInverse
      };
    }
    if (isSparkline) {
      baseConfig.xAxis = {
        visible: false
      };
      baseConfig.yAxis = {
        visible: false
      };
      baseConfig.tooltip.enabled = true;
      baseConfig.legend.enabled = false;
    } else if (type !== "donut") {
      baseConfig.xAxis = {
        categories,
        lineColor: stroke,
        tickColor: stroke,
        labels: {
          style: {
            fontFamily,
            fontSize: "12px",
            color: textHint
          }
        }
      };
      baseConfig.yAxis = {
        gridLineColor: showGrid ? stroke : "transparent",
        gridLineDashStyle: "Solid",
        labels: {
          style: {
            fontFamily,
            fontSize: "12px",
            color: textHint
          },
          formatter
        },
        title: {
          text: undefined
        }
      };
    }
    if (type === "heatmap") {
      baseConfig.colorAxis = {
        min: 0,
        minColor: sequential[0],
        maxColor: sequential[sequential.length - 1]
      };
    }

    // Plot bands (shaded ranges) & plot lines (thresholds) — payoff/barrier charts.
    const applyBand = b => {
      const ax = b.axis === "x" ? baseConfig.xAxis : baseConfig.yAxis;
      if (!ax) return;
      ax.plotBands = ax.plotBands || [];
      ax.plotBands.push({
        from: b.from,
        to: b.to,
        color: b.color,
        label: b.label ? {
          text: b.label,
          style: {
            color: textHint,
            fontFamily,
            fontSize: "11px"
          },
          align: b.labelAlign || "left"
        } : undefined
      });
    };
    const applyLine = l => {
      const ax = l.axis === "x" ? baseConfig.xAxis : baseConfig.yAxis;
      if (!ax) return;
      ax.plotLines = ax.plotLines || [];
      ax.plotLines.push({
        value: l.value,
        color: l.color || stroke,
        width: l.width || 1,
        dashStyle: l.dashStyle || "Dash",
        zIndex: 3,
        label: l.label ? {
          text: l.label,
          style: {
            color: l.labelColor || textHint,
            fontFamily,
            fontSize: "11px",
            fontWeight: "600"
          },
          rotation: 0,
          y: l.labelY != null ? l.labelY : -4
        } : undefined
      });
    };
    (plotBands || []).forEach(applyBand);
    (plotLines || []).forEach(applyLine);
    chartRef.current = Highcharts.chart(ref.current, baseConfig);
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
        chartRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type, JSON.stringify(series), JSON.stringify(categories), height, showLegend, showGrid, valueFormat, step, markers, gradient, dark, JSON.stringify(plotBands), JSON.stringify(plotLines), endpointLabels]);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["lf-chart", isSparkline ? "lf-chart--sparkline" : "", className].filter(Boolean).join(" "),
    style: {
      width: "100%",
      height
    },
    role: "img",
    "aria-label": ariaLabel || "Chart",
    ref: ref
  }, props));
}
Object.assign(__ds_scope, { Chart });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/charts/Chart.jsx", error: String((e && e.message) || e) }); }

// components/charts/ComparisonBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ComparisonBar — two opposing magnitudes on one gradient bar (e.g. fees vs
 * growth, in vs out). Label colors match their bar ends; the split point
 * reflects relative magnitude.
 */
function ComparisonBar({
  leftValue,
  rightValue,
  leftLabel,
  rightLabel,
  leftColor = "var(--color-orange-60)",
  rightColor = "var(--color-teal-60)",
  formatValue = v => `${v > 0 ? "+" : ""}${v.toFixed(2)}%`,
  className = "",
  ...props
}) {
  const total = Math.abs(leftValue) + Math.abs(rightValue);
  const leftPct = total > 0 ? Math.abs(leftValue) / total * 100 : 50;
  // Soften the gradient ends for the default hues
  const leftGrad = leftColor === "var(--color-orange-60)" ? "var(--color-orange-40)" : leftColor;
  const rightGrad = rightColor === "var(--color-teal-60)" ? "var(--color-teal-30)" : rightColor;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["lf-cbar", className].filter(Boolean).join(" ")
  }, props), /*#__PURE__*/React.createElement("div", {
    className: "lf-cbar__labels"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lf-cbar__label",
    style: {
      color: leftColor
    }
  }, leftLabel != null ? leftLabel : formatValue(leftValue)), /*#__PURE__*/React.createElement("span", {
    className: "lf-cbar__label",
    style: {
      color: rightColor
    }
  }, rightLabel != null ? rightLabel : formatValue(rightValue))), /*#__PURE__*/React.createElement("div", {
    className: "lf-cbar__track"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lf-cbar__fill",
    style: {
      background: `linear-gradient(to right, ${leftGrad} ${leftPct}%, ${rightGrad} 100%)`
    }
  })));
}
Object.assign(__ds_scope, { ComparisonBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/charts/ComparisonBar.jsx", error: String((e && e.message) || e) }); }

// components/charts/SwimlaneMap.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Swimlane-map geometry (px)
const COL_W = 24;
const COL_GAP = 4;
const PAD = 8;

/**
 * SwimlaneMap — miniature overview of a swimlane board: one block per column
 * with a translucent blue viewport indicator over the currently visible range.
 */
function SwimlaneMap({
  totalColumns,
  visibleStartIndex,
  visibleEndIndex,
  className = "",
  ...props
}) {
  const left = PAD + visibleStartIndex * (COL_W + COL_GAP);
  const count = visibleEndIndex - visibleStartIndex + 1;
  const width = count * COL_W + (count - 1) * COL_GAP;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["lf-swimmap", className].filter(Boolean).join(" ")
  }, props), /*#__PURE__*/React.createElement("span", {
    className: "lf-swimmap__border",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("span", {
    className: "lf-swimmap__indicator",
    style: {
      left: `${left}px`,
      width: `${width}px`
    },
    "aria-label": `Viewing columns ${visibleStartIndex + 1} to ${visibleEndIndex + 1}`
  }), Array.from({
    length: totalColumns
  }).map((_, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "lf-swimmap__col",
    "aria-label": `Column ${i + 1}`
  })));
}
Object.assign(__ds_scope, { SwimlaneMap });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/charts/SwimlaneMap.jsx", error: String((e && e.message) || e) }); }

// components/feedback/AiInsights.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Sparkles AI glyph — filled, from the Flux base icon library. */
function SparklesAI({
  size = 20
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 25 24",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 13 14 C 13.53 14 14.039 14.211 14.414 14.586 C 14.789 14.961 15 15.47 15 16 C 15 15.47 15.211 14.961 15.586 14.586 C 15.961 14.211 16.47 14 17 14 C 16.47 14 15.961 13.789 15.586 13.414 C 15.211 13.039 15 12.53 15 12 C 15 12.53 14.789 13.039 14.414 13.414 C 14.039 13.789 13.53 14 13 14 Z M 13 2 C 13.53 2 14.039 2.211 14.414 2.586 C 14.789 2.961 15 3.47 15 4 C 15 3.47 15.211 2.961 15.586 2.586 C 15.961 2.211 16.47 2 17 2 C 16.47 2 15.961 1.789 15.586 1.414 C 15.211 1.039 15 0.53 15 0 C 15 0.53 14.789 1.039 14.414 1.414 C 14.039 1.789 13.53 2 13 2 Z M 6 14 C 6 12.409 6.632 10.883 7.757 9.757 C 8.883 8.632 10.409 8 12 8 C 10.409 8 8.883 7.368 7.757 6.243 C 6.632 5.117 6 3.591 6 2 C 6 3.591 5.368 5.117 4.243 6.243 C 3.117 7.368 1.591 8 0 8 C 1.591 8 3.117 8.632 4.243 9.757 C 5.368 10.883 6 12.409 6 14 Z",
    fill: "currentColor",
    fillRule: "evenodd",
    transform: "matrix(1 0 0 1 4 3)"
  }));
}

/**
 * AiInsights — lavender AI-explanation panel. A Sparkles header introduces a
 * short list of model-generated takeaways; each line leads with a bold label.
 * The only sanctioned purple surface in the system — use it to mark content as
 * AI-generated, never for ordinary data callouts.
 *
 * layout="panel" (default) is the full block: title + bulleted takeaways.
 * layout="inline" is a compact single-line strip (icon + one sentence) for
 * placing an AI answer directly under a search bar or beside a table —
 * pass `text` instead of `items`, and `loading` while the answer streams in.
 */
function AiInsights({
  title = "Comparison insights",
  items = [],
  layout = "panel",
  text,
  loading = false,
  onDismiss,
  className = "",
  ...props
}) {
  if (layout === "inline") {
    return /*#__PURE__*/React.createElement("div", _extends({
      className: ["lf-insights lf-insights--inline", className].filter(Boolean).join(" ")
    }, props), /*#__PURE__*/React.createElement("span", {
      className: "lf-insights__icon"
    }, /*#__PURE__*/React.createElement(SparklesAI, {
      size: 18
    })), loading ? /*#__PURE__*/React.createElement("span", {
      className: "lf-insights__loading"
    }, "Thinking\u2026") : /*#__PURE__*/React.createElement("p", {
      className: "lf-insights__text"
    }, text), onDismiss && /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "lf-insights__dismiss",
      "aria-label": "Dismiss",
      onClick: onDismiss
    }, /*#__PURE__*/React.createElement("svg", {
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M18 6 6 18M6 6l12 12"
    }))));
  }
  return /*#__PURE__*/React.createElement("section", _extends({
    className: ["lf-insights", className].filter(Boolean).join(" ")
  }, props), /*#__PURE__*/React.createElement("div", {
    className: "lf-insights__head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lf-insights__icon"
  }, /*#__PURE__*/React.createElement(SparklesAI, {
    size: 20
  })), /*#__PURE__*/React.createElement("h3", {
    className: "lf-insights__title"
  }, title)), /*#__PURE__*/React.createElement("ul", {
    className: "lf-insights__list"
  }, items.map((it, i) => {
    const row = typeof it === "string" ? {
      value: it
    } : it;
    return /*#__PURE__*/React.createElement("li", {
      key: i,
      className: "lf-insights__item"
    }, row.label ? /*#__PURE__*/React.createElement("span", {
      className: "lf-insights__label"
    }, row.label, ": ") : null, row.value);
  })));
}
Object.assign(__ds_scope, { AiInsights });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/AiInsights.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ProgressBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** ProgressBar — thin determinate progress indicator (Blue.60 fill on Blue.10 track). */
function ProgressBar({
  value,
  max = 100,
  showLabel = false,
  label,
  className = "",
  ...props
}) {
  const pct = Math.min(Math.max(value / max * 100, 0), 100);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["lf-progress", className].filter(Boolean).join(" ")
  }, props), (showLabel || label) && /*#__PURE__*/React.createElement("div", {
    className: "lf-progress__head"
  }, label && /*#__PURE__*/React.createElement("span", {
    className: "lf-progress__label"
  }, label), showLabel && /*#__PURE__*/React.createElement("span", {
    className: "lf-progress__pct"
  }, Math.round(pct), "%")), /*#__PURE__*/React.createElement("div", {
    className: "lf-progress__track",
    role: "progressbar",
    "aria-valuenow": value,
    "aria-valuemin": 0,
    "aria-valuemax": max
  }, /*#__PURE__*/React.createElement("div", {
    className: "lf-progress__fill",
    style: {
      width: `${pct}%`
    }
  })));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
/** Tooltip — dark (Blue.90) hover label with caret. Optional bold title line.
    `align` positions the caret: center (default) or start/end corners. */
function Tooltip({
  content,
  title,
  children,
  position = "top",
  align = "center",
  delay = 150,
  className = ""
}) {
  const [show, setShow] = React.useState(false);
  const t = React.useRef(null);
  const enter = () => {
    clearTimeout(t.current);
    t.current = setTimeout(() => setShow(true), delay);
  };
  const leave = () => {
    clearTimeout(t.current);
    setShow(false);
  };
  React.useEffect(() => () => clearTimeout(t.current), []);
  return /*#__PURE__*/React.createElement("span", {
    className: "lf-tooltip-wrap",
    onMouseEnter: enter,
    onMouseLeave: leave,
    onFocus: enter,
    onBlur: leave
  }, children, /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    className: ["lf-tooltip", `lf-tooltip--${position}`, align !== "center" ? `lf-tooltip--align-${align}` : "", show ? "lf-tooltip--visible" : "", className].filter(Boolean).join(" ")
  }, title && /*#__PURE__*/React.createElement("span", {
    className: "lf-tooltip__title"
  }, title), /*#__PURE__*/React.createElement("span", null, content)));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Checkbox — 20px box, checkmark on Blue.90. Supports indeterminate. */
function Checkbox({
  label,
  id,
  indeterminate = false,
  className = "",
  ...props
}) {
  const cbId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current) ref.current.indeterminate = indeterminate;
  }, [indeterminate]);
  return /*#__PURE__*/React.createElement("span", {
    className: "lf-choice"
  }, /*#__PURE__*/React.createElement("input", _extends({
    ref: ref,
    type: "checkbox",
    id: cbId,
    className: ["lf-checkbox", className].filter(Boolean).join(" ")
  }, props)), label && /*#__PURE__*/React.createElement("label", {
    className: "lf-choice__label",
    htmlFor: cbId
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — 32px text field with optional label, description, helper text, error, and left icon.
 * Always pair with a visible label for form fields.
 */
function Input({
  label,
  description,
  helperText,
  error,
  required,
  leftIcon,
  id,
  className = "",
  ...props
}) {
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);
  const inputCls = ["lf-input", leftIcon ? "lf-input--has-icon" : "", error ? "lf-input--error" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", {
    className: "lf-field"
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "lf-label",
    htmlFor: inputId
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "lf-label__req"
  }, "*")), description && /*#__PURE__*/React.createElement("p", {
    className: "lf-desc"
  }, description), /*#__PURE__*/React.createElement("div", {
    className: "lf-input-wrap"
  }, leftIcon && /*#__PURE__*/React.createElement("span", {
    className: "lf-input__icon"
  }, leftIcon), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    className: inputCls
  }, props))), error ? /*#__PURE__*/React.createElement("p", {
    className: "lf-help lf-help--error"
  }, error) : helperText && /*#__PURE__*/React.createElement("p", {
    className: "lf-help"
  }, helperText));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Radio — 20px circle, fills to Blue.90 ring when selected. */
function Radio({
  label,
  id,
  className = "",
  ...props
}) {
  const rId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);
  return /*#__PURE__*/React.createElement("span", {
    className: "lf-choice"
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    id: rId,
    className: ["lf-radio", className].filter(Boolean).join(" ")
  }, props)), label && /*#__PURE__*/React.createElement("label", {
    className: "lf-choice__label",
    htmlFor: rId
  }, label));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/SearchBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* ── icons ─────────────────────────────────────────────────────────── */
function MagnifierIcon({
  size = 19
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 21l-4.3-4.3"
  }));
}
function CloseIcon({
  size = 13
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6L6 18M6 6l12 12"
  }));
}
/** Sparkle glyph — the system's "ask AI" signifier, matches AiInsights. */
function SparkleIcon({
  size = 16
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 3l1.7 4.8L18.5 9.5 13.7 11.2 12 16l-1.7-4.8L5.5 9.5l4.8-1.7z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19 14l.7 1.9 1.9.7-1.9.7-.7 1.9-.7-1.9-1.9-.7 1.9-.7z"
  }));
}
function SendIcon({
  size = 17
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.9",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M22 2L11 13"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22 2l-7 20-4-9-9-4 20-7z"
  }));
}
const QUESTION_HINT = /\b(what|which|how|why|when|where|who|can|does|do|is|are|should|show|find|compare|explain|tell)\b|\?/i;
function looksLikeQuestion(s) {
  return QUESTION_HINT.test((s || "").trim());
}

/**
 * PlainSearchBar — a keyword-only search input. No dropdown, no assistant.
 * Same compact bottom-border field and magnifier/clear affordances; submitting
 * fires `onSearch`. Used where search is literal filtering, not a Q&A surface.
 */
function PlainSearchBar({
  placeholder = "Search products",
  onSearch,
  width = 440,
  className = "",
  ...props
}) {
  const [value, setValue] = React.useState("");
  const inputRef = React.useRef(null);
  const submit = () => {
    const q = value.trim();
    if (q) onSearch && onSearch(q);
  };
  const clear = () => {
    setValue("");
    if (inputRef.current) inputRef.current.focus();
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["lf-searchbar", className].filter(Boolean).join(" "),
    style: {
      width,
      position: "relative",
      flexShrink: 0
    }
  }, props), /*#__PURE__*/React.createElement("input", {
    ref: inputRef,
    value: value,
    placeholder: placeholder,
    onFocus: e => e.target.style.borderBottomColor = "var(--color-stroke-focus)",
    onBlur: e => e.target.style.borderBottomColor = "var(--color-stroke-default)",
    onChange: e => setValue(e.target.value),
    onKeyDown: e => {
      if (e.key === "Enter") submit();
    },
    style: {
      width: "100%",
      height: 36,
      border: "none",
      borderRadius: 0,
      borderBottom: "1.5px solid var(--color-stroke-default)",
      background: "transparent",
      fontFamily: "var(--font-primary)",
      fontSize: 14,
      color: "var(--color-text-body)",
      padding: "0 36px 8px 2px",
      outline: "none",
      textOverflow: "ellipsis",
      transition: "border-color .12s ease"
    }
  }), value.length > 0 && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: clear,
    "aria-label": "Clear",
    style: {
      position: "absolute",
      right: 30,
      top: 14,
      width: 22,
      height: 22,
      border: "none",
      background: "var(--color-neutral-10)",
      borderRadius: "50%",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--color-text-hint)"
    }
  }, /*#__PURE__*/React.createElement(CloseIcon, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: 2,
      top: 9,
      display: "inline-flex",
      color: "var(--color-text-hint)",
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement(MagnifierIcon, null)));
}

/**
 * SearchBar — the system's unified search + ask affordance. A single compact
 * bottom-border input that opens a dropdown on focus. The dropdown surfaces
 * "Suggested searches" (fill the query) and "Ask the assistant" (start a chat).
 * Submitting a natural-language question turns the panel into a threaded chat
 * with the AI assistant; a plain keyword submit fires `onSearch` instead.
 */
function SearchBar({
  placeholder = "Search products or ask anything",
  suggestions = [],
  assistantExamples = [],
  onSearch,
  onAsk,
  width = 440,
  variant = "assistant",
  className = "",
  ...props
}) {
  if (variant === "plain") {
    return /*#__PURE__*/React.createElement(PlainSearchBar, _extends({
      placeholder: placeholder === "Search products or ask anything" ? "Search products" : placeholder,
      onSearch: onSearch,
      width: width,
      className: className
    }, props));
  }
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [chat, setChat] = React.useState([]); // {role:'user'|'assistant', text, busy?, source?}
  const [busy, setBusy] = React.useState(false);
  const rootRef = React.useRef(null);
  const inputRef = React.useRef(null);
  const replyRef = React.useRef(null);
  const bodyRef = React.useRef(null);
  const active = value.length > 0 || chat.length > 0;
  const hasMsgs = chat.length > 0;

  // close on outside click
  React.useEffect(() => {
    if (!open) return;
    const onDoc = e => {
      if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);

  // keep chat scrolled to bottom
  React.useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [chat]);
  async function runAsk(query, history) {
    let answer = "";
    try {
      if (onAsk) answer = await onAsk(query, history);else if (typeof window !== "undefined" && window.claude && window.claude.complete) answer = await window.claude.complete(query);
    } catch (e) {/* fall through */}
    if (!answer || !answer.trim()) answer = "I couldn’t reach the assistant just now — try rephrasing, or pick one of the suggested searches.";
    return answer.trim();
  }
  async function ask(query, forceAssistant) {
    const q = (query || "").trim();
    if (!q) return;
    if (!forceAssistant && !looksLikeQuestion(q)) {
      setValue(q);
      setOpen(false);
      onSearch && onSearch(q);
      return;
    }
    setValue("");
    const history = chat.slice();
    setOpen(true);
    setBusy(true);
    setChat(c => [...c, {
      role: "user",
      text: q
    }, {
      role: "assistant",
      text: "",
      busy: true
    }]);
    const answer = await runAsk(q, history);
    setChat(c => {
      const next = c.slice();
      const i = next.length - 1;
      if (i >= 0 && next[i].busy) next[i] = {
        role: "assistant",
        text: answer,
        source: "generated"
      };
      return next;
    });
    setBusy(false);
  }
  const pickSuggestion = s => {
    setValue(s.label);
    setOpen(false);
    s.onPick ? s.onPick() : onSearch && onSearch(s.label);
  };
  const clear = () => {
    setValue("");
    setChat([]);
    setBusy(false);
    if (inputRef.current) inputRef.current.focus();
  };
  const newChat = () => {
    setChat([]);
    setBusy(false);
    setValue("");
    if (inputRef.current) inputRef.current.focus();
  };
  const sendReply = () => {
    const el = replyRef.current;
    const text = (el && el.value || "").trim();
    if (!text) return;
    el.value = "";
    ask(text, true);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: rootRef,
    className: ["lf-searchbar", className].filter(Boolean).join(" "),
    style: {
      width,
      position: "relative",
      flexShrink: 0
    }
  }, props), /*#__PURE__*/React.createElement("input", {
    ref: inputRef,
    value: value,
    placeholder: placeholder,
    onFocus: e => {
      setOpen(true);
      e.target.style.borderBottomColor = "var(--color-stroke-focus)";
    },
    onBlur: e => e.target.style.borderBottomColor = "var(--color-stroke-default)",
    onChange: e => setValue(e.target.value),
    onKeyDown: e => {
      if (e.key === "Enter") ask(value);
    },
    style: {
      width: "100%",
      height: 36,
      border: "none",
      borderRadius: 0,
      borderBottom: "1.5px solid var(--color-stroke-default)",
      background: "transparent",
      fontFamily: "var(--font-primary)",
      fontSize: 14,
      color: "var(--color-text-body)",
      padding: "0 36px 8px 2px",
      outline: "none",
      textOverflow: "ellipsis",
      transition: "border-color .12s ease"
    }
  }), active && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: clear,
    "aria-label": "Clear",
    style: {
      position: "absolute",
      right: 30,
      top: 14,
      width: 22,
      height: 22,
      border: "none",
      background: "var(--color-neutral-10)",
      borderRadius: "50%",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--color-text-hint)"
    }
  }, /*#__PURE__*/React.createElement(CloseIcon, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: 2,
      top: 9,
      display: "inline-flex",
      color: "var(--color-text-hint)",
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement(MagnifierIcon, null)), open && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "calc(100% + 8px)",
      left: 0,
      right: 0,
      background: "var(--color-surface-primary)",
      border: "1px solid var(--color-stroke-default)",
      borderRadius: 12,
      boxShadow: "var(--shadow-card)",
      zIndex: 40,
      display: "flex",
      flexDirection: "column",
      maxHeight: 460,
      overflow: "hidden"
    }
  }, hasMsgs && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      gap: 8,
      padding: "8px 10px",
      borderBottom: "1px solid var(--color-neutral-20)"
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: newChat,
    className: "lf-btn lf-btn--tertiary lf-btn--small",
    style: {
      padding: "0 8px"
    }
  }, "New chat"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setOpen(false),
    "aria-label": "Close",
    style: {
      flexShrink: 0,
      width: 26,
      height: 26,
      border: "none",
      background: "transparent",
      borderRadius: 6,
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--color-text-hint)"
    }
  }, /*#__PURE__*/React.createElement(CloseIcon, {
    size: 16
  }))), /*#__PURE__*/React.createElement("div", {
    ref: bodyRef,
    style: {
      flex: 1,
      overflowY: "auto"
    }
  }, !hasMsgs && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "8px 0"
    }
  }, suggestions.length > 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "10px 16px 6px",
      fontSize: 11,
      fontWeight: 600,
      color: "var(--color-text-hint)"
    }
  }, "Suggested searches"), suggestions.map((s, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    type: "button",
    onMouseDown: () => pickSuggestion(s),
    className: "lf-suggest-row",
    style: rowStyle
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...rowIcon,
      border: "1px solid var(--color-stroke-default)",
      color: "var(--color-text-hint)"
    }
  }, /*#__PURE__*/React.createElement(MagnifierIcon, {
    size: 15
  })), s.label))), suggestions.length > 0 && assistantExamples.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: "var(--color-neutral-20)",
      margin: "8px 0"
    }
  }), assistantExamples.length > 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "8px 16px 6px",
      fontSize: 11,
      fontWeight: 600,
      color: "var(--color-text-hint)"
    }
  }, "Ask the assistant"), assistantExamples.map((a, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    type: "button",
    onMouseDown: () => a.onPick ? a.onPick() : ask(a.label, true),
    className: "lf-suggest-row",
    style: rowStyle
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...rowIcon,
      background: "var(--color-blue-10)",
      color: "var(--color-blue-60)"
    }
  }, /*#__PURE__*/React.createElement(SparkleIcon, null)), a.label)))), hasMsgs && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12,
      padding: 16
    }
  }, chat.map((m, i) => {
    const isUser = m.role === "user";
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: isUser ? {
        display: "flex",
        justifyContent: "flex-end"
      } : {
        display: "flex",
        gap: 8,
        alignItems: "flex-start"
      }
    }, !isUser && /*#__PURE__*/React.createElement("span", {
      style: {
        flexShrink: 0,
        width: 26,
        height: 26,
        background: "var(--color-blue-10)",
        borderRadius: 7,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "var(--color-blue-60)",
        marginTop: 2
      }
    }, /*#__PURE__*/React.createElement(SparkleIcon, {
      size: 15
    })), /*#__PURE__*/React.createElement("div", {
      style: isUser ? {
        background: "var(--color-blue-90)",
        color: "#fff",
        borderRadius: "12px 12px 4px 12px",
        padding: "9px 12px",
        maxWidth: "80%"
      } : {
        background: "var(--color-surface-secondary)",
        border: "1px solid var(--color-stroke-default)",
        borderRadius: "4px 12px 12px 12px",
        padding: "10px 12px",
        maxWidth: "85%"
      }
    }, m.busy && /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        color: "var(--color-text-hint)",
        fontSize: 13
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 14,
        height: 14,
        border: "2px solid var(--color-blue-20)",
        borderTopColor: "var(--color-blue-60)",
        borderRadius: "50%",
        display: "inline-block",
        animation: "lf-spin .7s linear infinite"
      }
    }), "Thinking\u2026"), !!(m.text && m.text.length) && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        lineHeight: 1.55,
        whiteSpace: "pre-wrap"
      }
    }, m.text), !isUser && !m.busy && m.source && /*#__PURE__*/React.createElement("span", {
      className: "lf-badge lf-badge--neutral",
      style: {
        fontSize: 10,
        marginTop: 8,
        display: "inline-block"
      }
    }, m.source === "glossary" ? "Glossary" : "Generated")));
  }))), hasMsgs && /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--color-neutral-20)",
      padding: "10px 12px",
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("input", {
    ref: replyRef,
    placeholder: "Reply to the assistant\u2026",
    onKeyDown: e => {
      if (e.key === "Enter") sendReply();
    },
    style: {
      flex: 1,
      minWidth: 0,
      height: 34,
      border: "1.5px solid var(--color-stroke-default)",
      borderRadius: 8,
      background: "var(--color-surface-primary)",
      fontFamily: "var(--font-primary)",
      fontSize: 13,
      color: "var(--color-text-body)",
      padding: "0 12px",
      outline: "none"
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: sendReply,
    disabled: busy,
    "aria-label": "Send",
    style: {
      flexShrink: 0,
      width: 34,
      height: 34,
      border: "none",
      background: "var(--color-action-primary)",
      color: "#fff",
      borderRadius: 8,
      cursor: busy ? "default" : "pointer",
      opacity: busy ? 0.6 : 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(SendIcon, null)))));
}
const rowStyle = {
  display: "flex",
  alignItems: "center",
  gap: 12,
  width: "100%",
  textAlign: "left",
  border: "none",
  background: "transparent",
  padding: "9px 16px",
  cursor: "pointer",
  fontFamily: "var(--font-primary)",
  fontSize: 14,
  color: "var(--color-text-body)",
  transition: "background .12s ease"
};
const rowIcon = {
  flexShrink: 0,
  width: 32,
  height: 32,
  borderRadius: 8,
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};
Object.assign(__ds_scope, { SearchBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SearchBar.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
const Chevron = () => /*#__PURE__*/React.createElement("svg", {
  className: "lf-select__chev",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M6 9l6 6l6 -6"
}));

// Leading adornment for an option/trigger: avatar image (circle) or icon node.
const Adornment = ({
  option
}) => {
  if (option.avatar) {
    return /*#__PURE__*/React.createElement("img", {
      className: "lf-select__avatar",
      src: option.avatar,
      alt: "",
      "aria-hidden": "true"
    });
  }
  if (option.icon) {
    return /*#__PURE__*/React.createElement("span", {
      className: "lf-select__icon",
      "aria-hidden": "true"
    }, option.icon);
  }
  return null;
};

/**
 * Select — dropdown that matches Input metrics (32px trigger).
 * Options may carry an `avatar` (circular image) or leading `icon`, and trailing `meta`.
 * Pass `multiple` for a multi-select with checkboxes; the menu stays open and value is a string[].
 */
function Select({
  label,
  helperText,
  error,
  required,
  options = [],
  value,
  onChange,
  placeholder = "Select an option",
  multiple = false,
  disabled,
  className = ""
}) {
  const [open, setOpen] = React.useState(false);
  const [internal, setInternal] = React.useState(value ?? (multiple ? [] : ""));
  const ref = React.useRef(null);
  const controlled = value !== undefined;
  const val = controlled ? value : internal;
  React.useEffect(() => {
    const onDoc = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    if (open) document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);
  const isSelected = o => multiple ? Array.isArray(val) && val.includes(o.value) : val === o.value;
  const commit = next => {
    if (!controlled) setInternal(next);
    onChange && onChange(next);
  };
  const pick = o => {
    if (o.disabled) return;
    if (multiple) {
      const arr = Array.isArray(val) ? val : [];
      commit(arr.includes(o.value) ? arr.filter(v => v !== o.value) : [...arr, o.value]);
    } else {
      commit(o.value);
      setOpen(false);
    }
  };

  // Trigger label
  let selectedOpts, triggerNode;
  if (multiple) {
    selectedOpts = options.filter(o => Array.isArray(val) && val.includes(o.value));
    if (selectedOpts.length === 0) triggerNode = placeholder;else if (selectedOpts.length === 1) triggerNode = selectedOpts[0].label;else triggerNode = `${selectedOpts.length} selected`;
  } else {
    const sel = options.find(o => o.value === val);
    selectedOpts = sel ? [sel] : [];
    triggerNode = sel ? sel.label : placeholder;
  }
  const hasSelection = selectedOpts.length > 0;
  const triggerAdornment = !multiple && selectedOpts[0] ? selectedOpts[0] : null;
  const triggerCls = ["lf-select__trigger", !hasSelection ? "lf-select__trigger--placeholder" : "", open ? "lf-select__trigger--open" : ""].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", {
    className: ["lf-field", className].filter(Boolean).join(" ")
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "lf-label"
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "lf-label__req"
  }, "*")), /*#__PURE__*/React.createElement("div", {
    className: "lf-select",
    ref: ref
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: triggerCls,
    disabled: disabled,
    "aria-haspopup": "listbox",
    "aria-expanded": open,
    onClick: () => !disabled && setOpen(o => !o)
  }, triggerAdornment && /*#__PURE__*/React.createElement(Adornment, {
    option: triggerAdornment
  }), /*#__PURE__*/React.createElement("span", {
    className: "lf-select__value"
  }, triggerNode), /*#__PURE__*/React.createElement("span", {
    className: open ? "lf-select__chev lf-select__chev--open" : "lf-select__chev"
  }, /*#__PURE__*/React.createElement(Chevron, null))), open && /*#__PURE__*/React.createElement("div", {
    className: "lf-select__menu",
    role: "listbox",
    "aria-multiselectable": multiple || undefined
  }, options.map(o => {
    const sel = isSelected(o);
    return /*#__PURE__*/React.createElement("div", {
      key: o.value,
      role: "option",
      "aria-selected": sel,
      className: ["lf-select__opt", sel && !multiple ? "lf-select__opt--selected" : ""].filter(Boolean).join(" "),
      style: o.disabled ? {
        opacity: 0.5,
        cursor: "not-allowed"
      } : undefined,
      onClick: () => pick(o)
    }, multiple && /*#__PURE__*/React.createElement("span", {
      className: "lf-select__check",
      "aria-hidden": "true"
    }), /*#__PURE__*/React.createElement(Adornment, {
      option: o
    }), /*#__PURE__*/React.createElement("span", {
      className: "lf-select__label"
    }, o.label), o.meta != null && /*#__PURE__*/React.createElement("span", {
      className: "lf-select__meta"
    }, o.meta));
  }))), error ? /*#__PURE__*/React.createElement("p", {
    className: "lf-help lf-help--error"
  }, error) : helperText && /*#__PURE__*/React.createElement("p", {
    className: "lf-help"
  }, helperText));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Slider.jsx
try { (() => {
/**
 * Slider — horizontal range control with a draggable thumb. Track fill is solid
 * Blue.90 by default, or a left-to-right blue gradient with `variant="gradient"`.
 * Set `showInput` to pair it with a synchronized number field.
 */
function Slider({
  value: controlledValue,
  defaultValue = 50,
  min = 0,
  max = 100,
  step = 1,
  onChange,
  variant = "default",
  showInput = false,
  disabled = false,
  label,
  className = ""
}) {
  const isControlled = controlledValue !== undefined;
  const [internal, setInternal] = React.useState(defaultValue);
  const value = isControlled ? controlledValue : internal;
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  const percentage = (value - min) / (max - min) * 100;
  const updateValue = React.useCallback(next => {
    const clamped = Math.max(min, Math.min(max, next));
    const stepped = Math.round(clamped / step) * step;
    if (!isControlled) setInternal(stepped);
    onChange && onChange(stepped);
  }, [min, max, step, isControlled, onChange]);
  const valueFromClientX = clientX => {
    const rect = trackRef.current.getBoundingClientRect();
    const pct = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    return min + pct * (max - min);
  };
  const handleTrackClick = e => {
    if (disabled || !trackRef.current) return;
    updateValue(valueFromClientX(e.clientX));
  };
  React.useEffect(() => {
    if (!dragging) return;
    const onMove = e => {
      if (!disabled && trackRef.current) updateValue(valueFromClientX(e.clientX));
    };
    const onUp = () => setDragging(false);
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup", onUp);
    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseup", onUp);
    };
  }, [dragging, disabled, updateValue]);
  const handleInputChange = e => {
    const next = parseFloat(e.target.value);
    if (!isNaN(next)) updateValue(next);
  };
  const fillCls = ["lf-slider__fill", variant === "gradient" ? "lf-slider__fill--gradient" : ""].filter(Boolean).join(" ");
  const trackCls = ["lf-slider__track", disabled ? "lf-slider__track--disabled" : ""].filter(Boolean).join(" ");
  const thumbCls = ["lf-slider__thumb", dragging ? "lf-slider__thumb--dragging" : ""].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", {
    className: ["lf-slider", className].filter(Boolean).join(" ")
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "lf-label"
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "lf-slider__row"
  }, showInput && /*#__PURE__*/React.createElement("input", {
    type: "number",
    className: "lf-slider__input",
    value: value,
    onChange: handleInputChange,
    min: min,
    max: max,
    step: step,
    disabled: disabled
  }), /*#__PURE__*/React.createElement("div", {
    className: "lf-slider__area"
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    className: trackCls,
    onClick: handleTrackClick
  }, /*#__PURE__*/React.createElement("div", {
    className: "lf-slider__bg"
  }), /*#__PURE__*/React.createElement("div", {
    className: fillCls,
    style: {
      width: `${percentage}%`
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: thumbCls,
    style: {
      left: `calc(${percentage}% - 10px)`
    },
    role: "slider",
    "aria-valuemin": min,
    "aria-valuemax": max,
    "aria-valuenow": value,
    tabIndex: disabled ? -1 : 0,
    onMouseDown: e => {
      if (!disabled) {
        e.preventDefault();
        setDragging(true);
      }
    },
    onKeyDown: e => {
      if (disabled) return;
      if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
        e.preventDefault();
        updateValue(value - step);
      }
      if (e.key === "ArrowRight" || e.key === "ArrowUp") {
        e.preventDefault();
        updateValue(value + step);
      }
    }
  })))));
}
Object.assign(__ds_scope, { Slider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Slider.jsx", error: String((e && e.message) || e) }); }

// components/forms/SplitInput.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const Chevron = ({
  open
}) => /*#__PURE__*/React.createElement("svg", {
  className: open ? "lf-split__chev lf-split__chev--open" : "lf-split__chev",
  width: "12",
  height: "12",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M6 9l6 6l6 -6"
}));

/**
 * SplitInput — a text field with a dropdown selector fused on the left, joined by a
 * vertical divider inside one bordered control. Use for currency amounts, phone
 * numbers with country codes, or any input needing a categorical prefix.
 */
function SplitInput({
  label,
  helperText,
  error,
  required,
  id,
  className = "",
  splitOptions = [{
    value: "usd",
    label: "USD"
  }],
  splitValue,
  onSplitChange,
  value,
  inputValue,
  onChange,
  onInputChange,
  placeholder = "Enter amount",
  disabled,
  ...props
}) {
  const [open, setOpen] = React.useState(false);
  const [internalSplit, setInternalSplit] = React.useState(splitValue ?? splitOptions[0]?.value ?? "");
  const ref = React.useRef(null);
  const split = splitValue !== undefined ? splitValue : internalSplit;
  const fieldVal = value !== undefined ? value : inputValue;
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);
  React.useEffect(() => {
    const onDoc = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    if (open) document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);
  const pickSplit = v => {
    if (splitValue === undefined) setInternalSplit(v);
    setOpen(false);
    onSplitChange && onSplitChange(v);
  };
  const handleInput = e => {
    onChange && onChange(e);
    onInputChange && onInputChange(e.target.value);
  };
  const selected = splitOptions.find(o => o.value === split);
  const controlCls = ["lf-split", error ? "lf-split--error" : "", disabled ? "lf-split--disabled" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", {
    className: "lf-field"
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "lf-label",
    htmlFor: inputId
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "lf-label__req"
  }, "*")), /*#__PURE__*/React.createElement("div", {
    className: controlCls
  }, /*#__PURE__*/React.createElement("div", {
    className: "lf-split__select",
    ref: ref
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "lf-split__trigger",
    disabled: disabled,
    "aria-haspopup": "listbox",
    "aria-expanded": open,
    onClick: () => !disabled && setOpen(o => !o)
  }, /*#__PURE__*/React.createElement("span", {
    className: "lf-split__triggerlabel"
  }, selected?.label ?? splitOptions[0]?.label ?? ""), /*#__PURE__*/React.createElement(Chevron, {
    open: open
  })), open && /*#__PURE__*/React.createElement("div", {
    className: "lf-split__menu",
    role: "listbox"
  }, splitOptions.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "option",
    "aria-selected": o.value === split,
    className: ["lf-split__opt", o.value === split ? "lf-split__opt--selected" : ""].filter(Boolean).join(" "),
    onClick: () => pickSplit(o.value)
  }, o.label)))), /*#__PURE__*/React.createElement("span", {
    className: "lf-split__divider",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    className: "lf-split__input",
    type: "text",
    value: fieldVal,
    onChange: handleInput,
    placeholder: placeholder,
    disabled: disabled
  }, props))), error ? /*#__PURE__*/React.createElement("p", {
    className: "lf-help lf-help--error"
  }, error) : helperText && /*#__PURE__*/React.createElement("p", {
    className: "lf-help"
  }, helperText));
}
Object.assign(__ds_scope, { SplitInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SplitInput.jsx", error: String((e && e.message) || e) }); }

// components/forms/Toggle.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Toggle — 44×24 switch for settings that take effect immediately.
 * Inline label sits to the right by default; pass `labelPosition="left"` for
 * settings-row style (label then switch). `topLabel` renders a field label above.
 * Add `disabled` to dim the whole control (track, thumb, and label).
 */
function Toggle({
  label,
  topLabel,
  helperText,
  labelPosition = "right",
  id,
  className = "",
  ...props
}) {
  const tId = id || (label || topLabel ? (label || topLabel).toLowerCase().replace(/\s+/g, "-") : undefined);
  const disabled = !!props.disabled;
  const labelCls = ["lf-choice__label", disabled ? "lf-choice__label--disabled" : ""].filter(Boolean).join(" ");
  const labelEl = label && /*#__PURE__*/React.createElement("label", {
    className: labelCls,
    htmlFor: tId
  }, label);
  const left = labelPosition === "left";
  return /*#__PURE__*/React.createElement("div", {
    className: "lf-field"
  }, topLabel && /*#__PURE__*/React.createElement("label", {
    className: "lf-label",
    htmlFor: tId
  }, topLabel), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--spacing-12)"
    }
  }, left && labelEl, /*#__PURE__*/React.createElement("span", {
    className: ["lf-toggle", className].filter(Boolean).join(" ")
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    id: tId
  }, props)), /*#__PURE__*/React.createElement("span", {
    className: "lf-toggle__track"
  }), /*#__PURE__*/React.createElement("span", {
    className: "lf-toggle__thumb"
  })), !left && labelEl), helperText && /*#__PURE__*/React.createElement("p", {
    className: "lf-help"
  }, helperText));
}
Object.assign(__ds_scope, { Toggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Toggle.jsx", error: String((e && e.message) || e) }); }

// components/layout/Avatar.jsx
try { (() => {
/**
 * Avatar — circular logo/initials holder with a subtle border.
 * Used for carrier (insurance) and issuer (capital-markets) logos.
 */
function Avatar({
  src,
  alt = "",
  fallback,
  size = "medium",
  className = "",
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: ["lf-avatar", `lf-avatar--${size}`, className].filter(Boolean).join(" ")
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt
  }) : /*#__PURE__*/React.createElement("span", {
    className: "lf-avatar__fallback"
  }, children || fallback));
}

/** AvatarGroup — overlapping avatars with a +N overflow chip. */
function AvatarGroup({
  children,
  max = 5,
  className = ""
}) {
  const arr = React.Children.toArray(children);
  const shown = arr.slice(0, max);
  const extra = arr.length - shown.length;
  return /*#__PURE__*/React.createElement("span", {
    className: ["lf-avatar-group", className].filter(Boolean).join(" ")
  }, shown, extra > 0 && /*#__PURE__*/React.createElement(Avatar, {
    size: "medium",
    fallback: `+${extra}`
  }));
}
Object.assign(__ds_scope, { Avatar, AvatarGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/layout/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — white surface (Neutral.00), 12px radius, 24px padding by default.
 * Cards summarize a user action/selection — they are not page sections and are
 * rarely clickable. Put interactive elements inside.
 */
function Card({
  variant = "standard",
  padding = "medium",
  children,
  className = "",
  ...props
}) {
  const cls = ["lf-card", variant === "elevated" ? "lf-card--elevated" : "", variant === "bordered" ? "lf-card--bordered" : "", `lf-card--pad-${padding}`, className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, props), children);
}

/** CardHeader — title row with a bottom divider. */
function CardHeader({
  children,
  className = ""
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: ["lf-card__header", className].filter(Boolean).join(" ")
  }, children);
}

/** CardTitle — title typography (16px/500). */
function CardTitle({
  children,
  className = ""
}) {
  return /*#__PURE__*/React.createElement("h3", {
    className: ["lf-card__title", className].filter(Boolean).join(" ")
  }, children);
}

/** CardContent — body region below the header. */
function CardContent({
  children,
  className = ""
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: ["lf-card__content", className].filter(Boolean).join(" ")
  }, children);
}
Object.assign(__ds_scope, { Card, CardHeader, CardTitle, CardContent });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Card.jsx", error: String((e && e.message) || e) }); }

// components/layout/Divider.jsx
try { (() => {
/**
 * Divider — 1px separator rule for layout structure (never interactive).
 * Horizontal (default) or vertical. Pass `label` for a centered text separator
 * (e.g. "OR") with a rule on each side.
 */
function Divider({
  orientation = "horizontal",
  label,
  className = "",
  style
}) {
  if (orientation === "horizontal" && label) {
    return /*#__PURE__*/React.createElement("div", {
      role: "separator",
      "aria-orientation": "horizontal",
      className: ["lf-divider-labeled", className].filter(Boolean).join(" "),
      style: style
    }, /*#__PURE__*/React.createElement("span", {
      className: "lf-divider-labeled__rule"
    }), /*#__PURE__*/React.createElement("span", {
      className: "lf-divider-labeled__label"
    }, label), /*#__PURE__*/React.createElement("span", {
      className: "lf-divider-labeled__rule"
    }));
  }
  const cls = ["lf-divider", orientation === "vertical" ? "lf-divider--v" : "lf-divider--h", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", {
    role: "separator",
    "aria-orientation": orientation,
    className: cls,
    style: style
  });
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Divider.jsx", error: String((e && e.message) || e) }); }

// components/layout/FilterPanel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ChevronDown({
  size = 16
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 9l6 6 6-6"
  }));
}
function XIcon({
  size = 12
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  }));
}
function FilterIcon({
  size = 16
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 4h16l-6 8v6l-4 2v-8L4 4Z"
  }));
}

/**
 * FilterPanel — the one filter-bar shape for Research, Manage, and Lifecycle
 * table/list pages. A fixed header (title + count, a Manage Filters trigger,
 * quick toggle filters, and page config/currency/search actions with a
 * disclosure chevron) sits above an always-visible row of applied-filter
 * chips (with "+N more" overflow), and an expanding section that holds the
 * full filter controls.
 */
function FilterPanel({
  title = "Filters",
  resultCount,
  quickFilters,
  pageConfig,
  currency,
  search,
  appliedChips = [],
  maxVisibleChips = 4,
  onClearAll,
  expanded,
  defaultExpanded = false,
  onExpandedChange,
  expandLabel = "Manage Filters",
  showFilterTrigger = true,
  children,
  className = "",
  ...props
}) {
  const [internalExpanded, setInternalExpanded] = React.useState(defaultExpanded);
  const isExpanded = expanded !== undefined ? expanded : internalExpanded;
  const toggle = () => {
    const next = !isExpanded;
    if (expanded === undefined) setInternalExpanded(next);
    onExpandedChange && onExpandedChange(next);
  };
  const [showAllChips, setShowAllChips] = React.useState(false);
  const visibleChips = showAllChips ? appliedChips : appliedChips.slice(0, maxVisibleChips);
  const hiddenCount = appliedChips.length - visibleChips.length;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["lf-filterpanel", className].filter(Boolean).join(" ")
  }, props), /*#__PURE__*/React.createElement("div", {
    className: "lf-filterpanel__head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lf-filterpanel__title-group"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "lf-filterpanel__title"
  }, title, resultCount !== undefined && /*#__PURE__*/React.createElement("span", {
    className: "lf-filterpanel__count"
  }, "(", String(resultCount).padStart(2, "0"), ")")), showFilterTrigger && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "lf-filterpanel__trigger",
    "aria-expanded": isExpanded,
    onClick: toggle
  }, /*#__PURE__*/React.createElement(FilterIcon, {
    size: 15
  }), expandLabel), quickFilters && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "lf-filterpanel__divider",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "lf-filterpanel__quick"
  }, quickFilters))), /*#__PURE__*/React.createElement("div", {
    className: "lf-filterpanel__actions"
  }, search, currency, pageConfig, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "lf-filterpanel__disclosure",
    "aria-expanded": isExpanded,
    "aria-label": isExpanded ? "Collapse filters" : "Expand filters",
    onClick: toggle
  }, /*#__PURE__*/React.createElement(ChevronDown, {
    size: 14
  })))), appliedChips.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "lf-filterpanel__chips"
  }, visibleChips.map((chip, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "lf-filterpanel__chip"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": `Remove ${chip.label}`,
    onClick: chip.onRemove
  }, /*#__PURE__*/React.createElement(XIcon, {
    size: 11
  })), chip.label, chip.count !== undefined && /*#__PURE__*/React.createElement("span", {
    className: "lf-filterpanel__chip-count"
  }, chip.count), chip.onExpand && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": `Show ${chip.label} details`,
    onClick: chip.onExpand
  }, /*#__PURE__*/React.createElement(ChevronDown, {
    size: 12
  })))), hiddenCount > 0 && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "lf-filterpanel__chip lf-filterpanel__chip--more",
    onClick: () => setShowAllChips(true)
  }, "+", hiddenCount, " more"), showAllChips && appliedChips.length > maxVisibleChips && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "lf-filterpanel__chip lf-filterpanel__chip--more",
    onClick: () => setShowAllChips(false)
  }, "Show less"), onClearAll && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "lf-filterpanel__clear",
    onClick: onClearAll
  }, "Clear all")), isExpanded && /*#__PURE__*/React.createElement("div", {
    className: "lf-filterpanel__body"
  }, children));
}
Object.assign(__ds_scope, { FilterPanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/FilterPanel.jsx", error: String((e && e.message) || e) }); }

// components/layout/MetricCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * MetricCard — a summary/metric card. Label + a large monospace value
 * (Display.Small, IBM Plex Mono) with the delta Badge inline. Content sits on
 * the Card's 24px padding (no extra top space, no CardContent wrapper).
 * A leading "-" on `delta` makes the Badge red; otherwise green.
 */
function MetricCard({
  label,
  value,
  delta,
  timeframe,
  className = "",
  ...props
}) {
  const negative = typeof delta === "string" && delta.trim().startsWith("-");
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["lf-card", "lf-card--pad-medium", className].filter(Boolean).join(" ")
  }, props), /*#__PURE__*/React.createElement("div", {
    className: "lf-metric__label"
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "lf-metric__row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lf-metric__value"
  }, value), delta && /*#__PURE__*/React.createElement("span", {
    className: `lf-badge lf-badge--${negative ? "error" : "success"}`
  }, delta)), timeframe && /*#__PURE__*/React.createElement("div", {
    className: "lf-metric__timeframe"
  }, timeframe));
}
Object.assign(__ds_scope, { MetricCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/MetricCard.jsx", error: String((e && e.message) || e) }); }

// components/layout/Page.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Page — the top-level canvas for a screen. Owns the Surface.Primary (Blue.10)
 * page background so consumers never set it (and can't get it wrong).
 *
 *   <Page>
 *     <TopNav />
 *     <PageHeader title="..." />
 *     <PageContent>
 *       <Section>...</Section>
 *     </PageContent>
 *     <Footer />
 *   </Page>
 */
function Page({
  children,
  className = "",
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["lf-page", className].filter(Boolean).join(" ")
  }, props), children);
}

/**
 * PageContent — the page's content column. Centered to 1440px. Padding: 16px
 * left/right, 0 top, 32px bottom (the gap above the Footer). Stacks its children
 * (Sections / bento cards) with an 8px gap. Flexes to keep the Footer at the
 * bottom on short pages. No fill of its own (sits on the Page's Surface.Primary).
 */
function PageContent({
  children,
  className = "",
  ...props
}) {
  return /*#__PURE__*/React.createElement("main", _extends({
    className: ["lf-pagecontent", className].filter(Boolean).join(" ")
  }, props), children);
}
Object.assign(__ds_scope, { Page, PageContent });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Page.jsx", error: String((e && e.message) || e) }); }

// components/layout/Section.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Section — a structural block that owns the Surface.Secondary (Neutral.10)
 * background. A Section is a *labeled group of related content* — pass `title`
 * to render its H2 heading. Place white Cards (Surface.Tertiary) inside a
 * Section so they stay visually distinct; never place a white Card directly on
 * the page background.
 */
function Section({
  children,
  title,
  padding = "default",
  className = "",
  ...props
}) {
  const cls = ["lf-section", padding === "none" ? "lf-section--pad-none" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("section", _extends({
    className: cls
  }, props), title && /*#__PURE__*/React.createElement("h2", {
    className: "lf-section__title"
  }, title), children);
}
Object.assign(__ds_scope, { Section });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Section.jsx", error: String((e && e.message) || e) }); }

// components/layout/Table.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
const ChevronUp = () => /*#__PURE__*/React.createElement("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M6 15l6 -6l6 6"
}));
const ChevronDown = () => /*#__PURE__*/React.createElement("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M6 9l6 6l6 -6"
}));

/**
 * Table — the system data table. White (Surface.Tertiary) rows, 1px
 * stroke-default row dividers, Body.Small-Bold headers, hover rows go
 * Surface.Secondary, selected rows Blue.10 (via [data-selected]).
 * Optional row selection (checkbox column), sortable columns, hover-only
 * right-side row actions, and custom cell rendering via `column.render`.
 */
function Table({
  columns = [],
  data = [],
  selectable = false,
  selectedRows = [],
  onSelectionChange,
  leftActions,
  rightActions,
  onSort,
  emptyState,
  className = "",
  ...props
}) {
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");
  const [hoveredRow, setHoveredRow] = useState(null);
  const handleSort = key => {
    const col = columns.find(c => c.key === key);
    if (!col || !col.sortable) return;
    const dir = sortColumn === key && sortDirection === "asc" ? "desc" : "asc";
    setSortColumn(key);
    setSortDirection(dir);
    onSort && onSort(key, dir);
  };
  const allSelected = data.length > 0 && selectedRows.length === data.length;
  const someSelected = selectedRows.length > 0 && !allSelected;
  const isSelected = i => selectedRows.includes(i);
  const setAll = checked => onSelectionChange && onSelectionChange(checked ? data.map((_, i) => i) : []);
  const setRow = (i, checked) => onSelectionChange && onSelectionChange(checked ? [...selectedRows, i] : selectedRows.filter(x => x !== i));
  const totalColSpan = columns.length + (selectable ? 1 : 0) + (leftActions ? 1 : 0) + (rightActions && rightActions.length ? 1 : 0);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["lf-table-wrap", className].filter(Boolean).join(" ")
  }, props), /*#__PURE__*/React.createElement("table", {
    className: "lf-table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, selectable && /*#__PURE__*/React.createElement("th", {
    style: {
      width: 48
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    className: "lf-checkbox",
    checked: allSelected,
    ref: el => {
      if (el) el.indeterminate = someSelected;
    },
    onChange: e => setAll(e.target.checked),
    "aria-label": "Select all rows"
  })), leftActions && /*#__PURE__*/React.createElement("th", {
    style: {
      width: 80
    }
  }), columns.map(col => /*#__PURE__*/React.createElement("th", {
    key: col.key,
    className: col.sortable ? "lf-table__th--sortable" : "",
    style: {
      width: col.width
    },
    onClick: () => col.sortable && handleSort(col.key)
  }, /*#__PURE__*/React.createElement("span", {
    className: "lf-table__th-inner"
  }, col.header, col.sortable && sortColumn === col.key && (sortDirection === "asc" ? /*#__PURE__*/React.createElement(ChevronUp, null) : /*#__PURE__*/React.createElement(ChevronDown, null))))), rightActions && rightActions.length > 0 && /*#__PURE__*/React.createElement("th", {
    style: {
      width: 128
    }
  }))), /*#__PURE__*/React.createElement("tbody", null, data.length === 0 ? /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    colSpan: totalColSpan,
    className: "lf-table__empty"
  }, emptyState || "No data available")) : data.map((row, i) => /*#__PURE__*/React.createElement("tr", {
    key: i,
    "data-selected": isSelected(i) ? "true" : undefined,
    onMouseEnter: () => setHoveredRow(i),
    onMouseLeave: () => setHoveredRow(null)
  }, selectable && /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    className: "lf-checkbox",
    checked: isSelected(i),
    onChange: e => setRow(i, e.target.checked),
    "aria-label": `Select row ${i + 1}`
  })), leftActions && /*#__PURE__*/React.createElement("td", null, leftActions(row, i)), columns.map(col => /*#__PURE__*/React.createElement("td", {
    key: col.key
  }, col.render ? col.render(row, i) : row[col.key])), rightActions && rightActions.length > 0 && /*#__PURE__*/React.createElement("td", {
    className: "lf-table__actions-td"
  }, hoveredRow === i && /*#__PURE__*/React.createElement("span", {
    className: "lf-table__actions"
  }, rightActions.map((a, ai) => /*#__PURE__*/React.createElement("button", {
    key: ai,
    type: "button",
    className: ["lf-table__action", a.variant === "approve" ? "lf-table__action--approve" : "", a.variant === "decline" ? "lf-table__action--decline" : ""].filter(Boolean).join(" "),
    onClick: () => a.onClick && a.onClick(row, i),
    "aria-label": a.label,
    title: a.label
  }, a.icon)))))))));
}
Object.assign(__ds_scope, { Table });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Table.jsx", error: String((e && e.message) || e) }); }

// components/layout/ToolBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ToolBar — floating batch-action bar for operating on selected rows.
 *
 * Actions are organized into `groups` (arrays of action descriptors); a vertical
 * divider is drawn automatically between groups. An optional `label` (e.g. a
 * selection count) sits at the start. `floating` sticks it to the bottom-center
 * of its scroll container as a white pill with `shadow-toolbar`.
 *
 * For full control you can pass `children` instead of `groups` (compose Buttons
 * and `<span className="lf-toolbar__divider" />` yourself).
 */
function ToolBar({
  groups,
  label,
  floating = true,
  ariaLabel = "Batch actions",
  className = "",
  children,
  ...props
}) {
  const cls = ["lf-toolbar", floating ? "lf-toolbar--floating" : "", className].filter(Boolean).join(" ");
  const renderAction = (a, i) => {
    const variant = a.variant || "ghost";
    const size = a.size || "medium";
    const iconOnly = a.icon && !a.label;
    const bcls = ["lf-btn", `lf-btn--${variant}`, `lf-btn--${size}`, iconOnly ? "lf-btn--icon-only" : ""].filter(Boolean).join(" ");
    return /*#__PURE__*/React.createElement("button", {
      key: a.key ?? i,
      type: "button",
      className: bcls,
      onClick: a.onClick,
      disabled: a.disabled,
      "aria-label": a.ariaLabel || (iconOnly ? a.tooltip : undefined)
    }, a.icon && /*#__PURE__*/React.createElement("span", {
      className: "lf-btn__icon"
    }, a.icon), a.label);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls,
    role: "toolbar",
    "aria-label": ariaLabel
  }, props), label != null && /*#__PURE__*/React.createElement("span", {
    className: "lf-toolbar__label"
  }, label), groups ? groups.map((group, gi) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: gi
  }, (gi > 0 || label != null) && /*#__PURE__*/React.createElement("span", {
    className: "lf-toolbar__divider",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "lf-toolbar__group"
  }, group.map(renderAction)))) : children);
}
Object.assign(__ds_scope, { ToolBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/ToolBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
const LumaWordmark = ({
  size = 36
}) => /*#__PURE__*/React.createElement("svg", {
  height: size,
  viewBox: "0 0 143 36",
  fill: "none",
  role: "img",
  "aria-label": "Luma",
  style: {
    display: "block"
  }
}, /*#__PURE__*/React.createElement("path", {
  clipRule: "evenodd",
  fillRule: "evenodd",
  fill: "#fff",
  d: "M137.012 26.9709H143L133.276 9.0531H127.049L117.326 26.9709H117.972C121.229 26.8995 123.912 25.7097 125.253 23.4493L130.139 14.6447L137.012 26.9709ZM101.59 19.5469L107.195 10.8852C108.033 9.64789 109.278 9.02913 110.931 9.02913H115.913V26.9472H110.308V15.1921L102.836 26.9472H100.345L92.8724 15.2161V26.9709H87.268V9.0531H92.2496C93.9021 9.0531 95.1477 9.67162 95.9859 10.9089L101.59 19.5469ZM67.0782 11.0757V20.7842C67.0782 22.0215 67.9164 22.64 69.5689 22.64H75.5566C77.2088 22.64 78.0473 22.0215 78.0473 20.7842V9.02913H83.6517V21.9978C83.6517 25.3052 81.7833 26.947 78.0473 26.947H67.0782C63.342 26.947 61.4738 25.3052 61.4738 21.9978V9.02913C67.0782 9.02913 67.0782 11.0757 67.0782 11.0757ZM60.3001 26.9709H43.7267C41.2358 26.9709 39.9904 25.7334 39.9904 23.2588V9.0531H45.5948V22.64H55.6538C59.941 22.64 60.3001 26.9709 60.3001 26.9709Z"
}), /*#__PURE__*/React.createElement("path", {
  clipRule: "evenodd",
  fillRule: "evenodd",
  fill: "#fff",
  d: "M12.2867 5.83159C11.5431 5.09298 11.5431 3.88781 12.2867 3.14895L15.4562 0L18.6259 3.14895C19.3693 3.88781 19.3693 5.09298 18.6259 5.83159L15.4562 8.98079L12.2867 5.83159Z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M6.41721 9.01936L1.87808 13.5292C-0.626027 15.9783 -0.626027 20.0213 1.87808 22.4709C4.38244 24.9588 6.41721 26.9804 6.41721 26.9804L9.58689 23.8315C10.3301 23.0929 11.5431 23.0929 12.2865 23.8315L15.4562 26.9804L18.6256 23.8315C19.369 23.0929 19.369 21.8877 18.6256 21.1489L15.4759 18.0195L18.6255 14.8897C19.3692 14.1511 20.5822 14.1511 21.3256 14.8897L24.495 18.0389L21.3256 21.1876C20.5822 21.9265 20.5822 23.1316 21.3256 23.8702L24.495 27.0194L29.0342 22.5096C31.5385 20.0215 31.5385 15.9782 29.0342 13.5679C26.5298 11.08 24.495 9.05836 24.495 9.05836L21.3256 12.2073C20.6338 12.8946 19.5354 12.9424 18.7869 12.3505C18.7377 12.2872 18.684 12.2263 18.6256 12.1683L15.4562 9.01936L12.2865 12.1683C11.9076 12.5448 11.7218 13.0424 11.7291 13.5377C11.7263 14.0272 11.9122 14.5177 12.2866 14.8897L15.4366 18.0193L12.2865 21.1489C11.5431 21.8877 10.3301 21.8877 9.58689 21.1489L6.41721 17.9999L9.58689 14.8507C10.3301 14.1123 10.3301 12.9069 9.58689 12.1686L6.41721 9.01936Z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M12.2866 32.8508C11.543 32.1122 11.543 30.907 12.2866 30.1682L15.4561 27.0192L18.6258 30.1682C19.3692 30.907 19.3692 32.1122 18.6258 32.8508L15.4561 36L12.2866 32.8508Z"
}));
const COLUMNS = [{
  heading: "LUMA PRODUCTS",
  links: ["Structured Products", "Insurance & Annuities"]
}, {
  heading: "REFERENCES",
  links: ["FINRA", "SEC.gov", "Contact Us"]
}, {
  heading: "LEGAL POLICIES",
  links: ["Platform Policies", "General Use"]
}, {
  heading: "CONTACT US",
  links: ["Customer Support"]
}];

/**
 * Footer — last element on every screen, 32px gap above it. Blue.90, fixed content.
 */
function Footer({
  className = ""
}) {
  return /*#__PURE__*/React.createElement("footer", {
    className: className,
    style: {
      background: "var(--color-surface-inverse)",
      width: "100%",
      fontFamily: "var(--font-primary)",
      color: "var(--color-text-inverse)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1440,
      margin: "0 auto",
      padding: "48px 64px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(5, 1fr)",
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(LumaWordmark, null)), COLUMNS.map(col => /*#__PURE__*/React.createElement("nav", {
    key: col.heading,
    "aria-label": col.heading,
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "12px 8px",
      fontSize: 12,
      lineHeight: "16px",
      letterSpacing: ".04em"
    }
  }, col.heading), col.links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    "aria-label": l,
    style: {
      padding: "8px",
      fontSize: 14,
      lineHeight: "16px",
      fontWeight: 600,
      color: "var(--color-text-inverse)",
      textDecoration: "none"
    }
  }, l))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      borderTop: "1.5px solid var(--color-stroke-default)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      lineHeight: "16px",
      color: "var(--color-text-inverse)",
      margin: 0
    }
  }, "\xA9", new Date().getFullYear(), " Luma Financial Technologies, LLC, All Rights Reserved"))));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavigationMenu.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const ChevronRight = () => /*#__PURE__*/React.createElement("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M9 6l6 6l-6 6"
}));

/**
 * NavigationMenu — dark mega-menu dropdown panel for TopNav. Single or
 * multi-column sections of links, optional highlighted items and submenu
 * chevrons, plus optional quick-link cards below.
 */
function NavigationMenu({
  sections = [],
  quickLinks,
  columns = 1,
  className = "",
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["lf-navmenu", className].filter(Boolean).join(" ")
  }, props), /*#__PURE__*/React.createElement("div", {
    className: "lf-navmenu__grid",
    style: {
      gridTemplateColumns: `repeat(${columns}, minmax(148px, auto))`
    }
  }, sections.map((section, si) => /*#__PURE__*/React.createElement("div", {
    className: "lf-navmenu__section",
    key: si
  }, section.title && /*#__PURE__*/React.createElement("h3", {
    className: "lf-navmenu__heading"
  }, section.title), section.items.map((item, ii) => /*#__PURE__*/React.createElement("button", {
    key: ii,
    type: "button",
    className: ["lf-navmenu__item", item.highlighted ? "lf-navmenu__item--highlighted" : ""].filter(Boolean).join(" "),
    onClick: item.onClick
  }, /*#__PURE__*/React.createElement("span", null, item.label), item.hasSubmenu && /*#__PURE__*/React.createElement("span", {
    className: "lf-navmenu__chev"
  }, /*#__PURE__*/React.createElement(ChevronRight, null))))))), quickLinks && quickLinks.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "lf-navmenu__quicklinks"
  }, quickLinks.map((link, li) => /*#__PURE__*/React.createElement("button", {
    key: li,
    type: "button",
    className: "lf-navmenu__quicklink",
    onClick: link.onClick
  }, /*#__PURE__*/React.createElement("p", {
    className: "lf-navmenu__quicklink-title"
  }, link.title), /*#__PURE__*/React.createElement("p", {
    className: "lf-navmenu__quicklink-desc"
  }, link.description)))));
}
Object.assign(__ds_scope, { NavigationMenu });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavigationMenu.jsx", error: String((e && e.message) || e) }); }

// components/navigation/PageHeader.jsx
try { (() => {
/**
 * PageHeader — the primary heading area at the top of a page or section.
 *
 * Structure (a fixed rule):
 *  1. A heading row: title + optional pipe-separated subheader, with optional
 *     right-aligned actions (typically Buttons).
 *  2. Beneath it, an optional nav row: optional Tabs pinned to the far left and
 *     an optional Stepper pinned to the far right, each in its own container.
 * The nav row only renders when tabs and/or a stepper are supplied.
 */
function PageHeader({
  title,
  subheader,
  tabs,
  tabValue,
  defaultTab,
  onTabChange,
  actions,
  stepper,
  className = ""
}) {
  const [internal, setInternal] = React.useState(defaultTab ?? (tabs && tabs[0] && tabs[0].value) ?? "");
  const active = tabValue !== undefined ? tabValue : internal;
  const pick = (v, disabled) => {
    if (disabled) return;
    if (tabValue === undefined) setInternal(v);
    onTabChange && onTabChange(v);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: ["lf-pagehead", className].filter(Boolean).join(" ")
  }, /*#__PURE__*/React.createElement("div", {
    className: "lf-pagehead__row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lf-pagehead__heading"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "lf-pagehead__title"
  }, title), subheader && /*#__PURE__*/React.createElement("span", {
    className: "lf-pagehead__sep",
    "aria-hidden": "true"
  }), subheader && /*#__PURE__*/React.createElement("span", {
    className: "lf-pagehead__sub"
  }, subheader)), actions && /*#__PURE__*/React.createElement("div", {
    className: "lf-pagehead__actions"
  }, actions)), (tabs && tabs.length > 0 || stepper) && /*#__PURE__*/React.createElement("div", {
    className: "lf-pagehead__nav"
  }, /*#__PURE__*/React.createElement("div", {
    className: "lf-pagehead__nav-start"
  }, tabs && tabs.length > 0 && /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    className: "lf-tabs lf-pagehead__tabs"
  }, tabs.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.value,
    role: "tab",
    "aria-selected": active === t.value,
    disabled: t.disabled,
    className: ["lf-tab", active === t.value ? "lf-tab--active" : ""].filter(Boolean).join(" "),
    onClick: () => pick(t.value, t.disabled)
  }, t.icon && /*#__PURE__*/React.createElement("span", {
    className: "lf-btn__icon"
  }, t.icon), /*#__PURE__*/React.createElement("span", {
    className: "lf-tab__label",
    "data-label": t.label
  }, t.label))))), stepper && /*#__PURE__*/React.createElement("div", {
    className: "lf-pagehead__nav-end"
  }, stepper)));
}
Object.assign(__ds_scope, { PageHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/PageHeader.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SegmentedControl.jsx
try { (() => {
/** SegmentedControl — pill toggle for switching between 2–4 views/layouts. */
function SegmentedControl({
  items,
  value,
  defaultValue,
  onChange,
  size = "medium",
  surface,
  background = "secondary",
  className = ""
}) {
  const surf = surface || background; // `surface` preferred; `background` kept as a legacy alias
  const [internal, setInternal] = React.useState(defaultValue ?? (items[0] && items[0].value) ?? "");
  const val = value !== undefined ? value : internal;
  const pick = (v, disabled) => {
    if (disabled) return;
    if (value === undefined) setInternal(v);
    onChange && onChange(v);
  };
  return /*#__PURE__*/React.createElement("div", {
    role: "radiogroup",
    className: ["lf-seg", surf === "primary" ? "lf-seg--primary" : "", className].filter(Boolean).join(" ")
  }, items.map(it => /*#__PURE__*/React.createElement("button", {
    key: it.value,
    role: "radio",
    "aria-checked": val === it.value,
    "aria-label": it.label || it.value,
    disabled: it.disabled,
    className: ["lf-seg__btn", size === "small" ? "lf-seg__btn--sm" : "", val === it.value ? "lf-seg__btn--active" : ""].filter(Boolean).join(" "),
    onClick: () => pick(it.value, it.disabled)
  }, it.icon && /*#__PURE__*/React.createElement("span", {
    className: "lf-btn__icon"
  }, it.icon), it.label && /*#__PURE__*/React.createElement("span", null, it.label))));
}
Object.assign(__ds_scope, { SegmentedControl });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SegmentedControl.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Stepper.jsx
try { (() => {
const DotFilled = () => /*#__PURE__*/React.createElement("svg", {
  width: "8",
  height: "8",
  viewBox: "0 0 8 8",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("circle", {
  cx: "4",
  cy: "4",
  r: "4",
  fill: "currentColor"
}));
const DotOutline = () => /*#__PURE__*/React.createElement("svg", {
  width: "8",
  height: "8",
  viewBox: "0 0 8 8",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("circle", {
  cx: "4",
  cy: "4",
  r: "3.25",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.5"
}));
// Tabler: check
const Checkmark = () => /*#__PURE__*/React.createElement("svg", {
  width: "12",
  height: "12",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2.5",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M5 12l5 5l10 -10"
}));

/**
 * Stepper — horizontal progress trail. Completed steps show a green check,
 * the current step a filled green dot, upcoming steps a hollow outline dot;
 * dash dividers sit between them.
 *
 * variant="plain" (default) is the flat inline trail (no pill fills) used in a
 * PageHeader's nav row. `secondary`/`primary` wrap each step in a Surface pill
 * (for dense modal headers).
 *
 * `condensed` collapses each step to a numbered circle (no labels) with dash
 * dividers — completed = green check, current = filled green number, upcoming =
 * hollow numbered circle. This is the variant used inside Modal headers.
 */
function Stepper({
  steps,
  currentStep,
  variant = "plain",
  condensed = false,
  className = ""
}) {
  const variantClass = variant === "primary" ? "lf-stepper--primary" : variant === "secondary" ? "lf-stepper--secondary" : "lf-stepper--plain";
  if (condensed) {
    return /*#__PURE__*/React.createElement("div", {
      className: ["lf-stepper", "lf-stepper--condensed", className].filter(Boolean).join(" ")
    }, steps.map((step, i) => {
      const n = i + 1;
      const completed = n < currentStep;
      const current = n === currentStep;
      const state = completed ? "done" : current ? "current" : "upcoming";
      return /*#__PURE__*/React.createElement("div", {
        className: "lf-stepper__step",
        key: i
      }, /*#__PURE__*/React.createElement("span", {
        className: "lf-stepper__num",
        "data-state": state,
        "aria-current": current ? "step" : undefined,
        title: step.label
      }, completed ? /*#__PURE__*/React.createElement(Checkmark, null) : n), i < steps.length - 1 && /*#__PURE__*/React.createElement("span", {
        className: "lf-stepper__div"
      }));
    }));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: ["lf-stepper", variantClass, className].filter(Boolean).join(" ")
  }, steps.map((step, i) => {
    const n = i + 1;
    const completed = n < currentStep;
    const current = n === currentStep;
    return /*#__PURE__*/React.createElement("div", {
      className: "lf-stepper__step",
      key: i
    }, /*#__PURE__*/React.createElement("div", {
      className: "lf-stepper__pill"
    }, /*#__PURE__*/React.createElement("span", {
      className: "lf-stepper__dot",
      style: {
        color: completed || current ? "var(--color-text-success)" : "var(--color-text-hint)"
      }
    }, completed ? /*#__PURE__*/React.createElement(Checkmark, null) : current ? /*#__PURE__*/React.createElement(DotFilled, null) : /*#__PURE__*/React.createElement(DotOutline, null)), /*#__PURE__*/React.createElement("span", {
      className: "lf-stepper__label",
      style: {
        color: completed || current ? "var(--color-text-body)" : "var(--color-text-hint)"
      }
    }, step.label)), i < steps.length - 1 && /*#__PURE__*/React.createElement("span", {
      className: "lf-stepper__div"
    }));
  }));
}
Object.assign(__ds_scope, { Stepper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Stepper.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
/** Tabs — underline tabs for switching views within a page region. */
function Tabs({
  items,
  value,
  defaultValue,
  onChange,
  className = ""
}) {
  const [internal, setInternal] = React.useState(defaultValue ?? (items[0] && items[0].value) ?? "");
  const val = value !== undefined ? value : internal;
  const pick = (v, disabled) => {
    if (disabled) return;
    if (value === undefined) setInternal(v);
    onChange && onChange(v);
  };
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    className: ["lf-tabs", className].filter(Boolean).join(" ")
  }, items.map(it => /*#__PURE__*/React.createElement("button", {
    key: it.value,
    role: "tab",
    "aria-selected": val === it.value,
    disabled: it.disabled,
    className: ["lf-tab", val === it.value ? "lf-tab--active" : ""].filter(Boolean).join(" "),
    onClick: () => pick(it.value, it.disabled)
  }, it.icon && /*#__PURE__*/React.createElement("span", {
    className: "lf-btn__icon"
  }, it.icon), /*#__PURE__*/React.createElement("span", {
    className: "lf-tab__label",
    "data-label": it.label
  }, it.label))));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TopNav.jsx
try { (() => {
const LumaIcon = ({
  size = 32
}) => /*#__PURE__*/React.createElement("svg", {
  height: size,
  viewBox: "0 0 69.0001 80",
  fill: "none",
  "aria-label": "Luma",
  role: "img",
  style: {
    display: "block"
  }
}, /*#__PURE__*/React.createElement("path", {
  d: "M41.6301 67.041C43.2907 68.6824 43.2906 71.3605 41.6301 73.002L34.5491 80L27.469 73.002C25.8085 71.3605 25.8084 68.6824 27.469 67.041L34.5491 60.043L41.6301 67.041ZM21.3508 27.041C23.0114 28.6824 23.0113 31.3605 21.3508 33.002L14.2698 40L21.3508 46.998C23.0117 48.6392 25.7214 48.6394 27.3821 46.998L34.4182 40.043L27.3821 33.0889C25.7213 31.4474 25.7213 28.7684 27.3821 27.127L34.4622 20.1299L41.5422 27.127C43.203 28.7684 45.9127 28.7684 47.5735 27.127L54.6536 20.1299C54.6536 20.1299 59.199 24.6223 64.7932 30.1514C70.3875 35.5077 70.3879 44.4923 64.8811 50.0215L54.6536 60.043L47.5735 53.0449C45.913 51.4034 45.9128 48.7253 47.5735 47.084L54.6536 40.0859L47.5735 33.0889C45.9127 31.4474 43.203 31.4474 41.5422 33.0889L34.5051 40.043L41.5422 46.998C43.203 48.6395 43.203 51.3175 41.5422 52.959L34.4622 59.957L27.3821 52.959C25.7213 51.3176 23.0116 51.3177 21.3508 52.959L14.2698 59.957C14.2447 59.9323 9.70893 55.4494 4.13012 49.9355C-1.37671 44.4928 -1.37671 35.5072 4.13012 30.0645L14.2698 20.043L21.3508 27.041ZM41.5422 6.99805C43.203 8.63952 43.203 11.3175 41.5422 12.959L34.4622 19.957L27.3821 12.959C25.7213 11.3175 25.7213 8.63952 27.3821 6.99805L34.4622 0L41.5422 6.99805Z",
  fill: "#ffffff"
}));
// Tabler: bell
const Bell = () => /*#__PURE__*/React.createElement("svg", {
  width: "22",
  height: "22",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9 17v1a3 3 0 0 0 6 0v-1"
}));
// Tabler: user
const User = () => /*#__PURE__*/React.createElement("svg", {
  width: "22",
  height: "22",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"
}));
// Tabler: menu-2
const Menu = () => /*#__PURE__*/React.createElement("svg", {
  width: "22",
  height: "22",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M4 6l16 0"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4 12l16 0"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4 18l16 0"
}));
// Tabler: x
const Close = () => /*#__PURE__*/React.createElement("svg", {
  width: "22",
  height: "22",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M18 6l-12 12"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 6l12 12"
}));
// Tabler: chevron-down
const Chevron = ({
  open
}) => /*#__PURE__*/React.createElement("svg", {
  width: "18",
  height: "18",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true",
  style: {
    transition: "transform .15s ease",
    transform: open ? "rotate(180deg)" : "none"
  }
}, /*#__PURE__*/React.createElement("path", {
  d: "M6 9l6 6l6 -6"
}));

/**
 * TopNav — Luma's only top-level navigation. 92px tall, Blue.90.
 * Luma never uses a sidebar. Present on every full screen, sticky to the top.
 *
 * Mega-menu: give a nav item a `children` array of sub-links and the navy bar
 * expands inline (growing in height) to reveal them, left-aligned under the
 * hovered item. No floating card — the panel is the same navy surface.
 *
 * Responsive: below `collapseBelow` px (default 980) the bar collapses to a
 * logo + bell + hamburger. The hamburger opens a full-width drawer listing the
 * nav items (children expand inline), Learning Center, and account. Pass
 * `forceCollapsed` to show the collapsed layout regardless of width (demos).
 */
function TopNav({
  navItems,
  activeItem,
  onSelect,
  onSubSelect,
  defaultOpenMenu = null,
  collapseBelow = 980,
  forceCollapsed,
  className = ""
}) {
  const items = navItems || [{
    label: "Overview",
    value: "overview"
  }, {
    label: "Invest",
    value: "invest",
    children: [{
      label: "New Pricing",
      value: "new-pricing"
    }, {
      label: "Structured Products",
      value: "structured-products"
    }]
  }, {
    label: "Manage",
    value: "manage",
    children: [{
      label: "Orders",
      value: "orders"
    }, {
      label: "Request History",
      value: "request-history"
    }]
  }, {
    label: "Lifecycle",
    value: "lifecycle"
  }];

  // --- responsive detection ---
  const [autoCollapsed, setAutoCollapsed] = React.useState(false);
  React.useEffect(() => {
    if (forceCollapsed !== undefined || typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia(`(max-width: ${collapseBelow - 1}px)`);
    const sync = () => setAutoCollapsed(mq.matches);
    sync();
    mq.addEventListener ? mq.addEventListener("change", sync) : mq.addListener(sync);
    return () => {
      mq.removeEventListener ? mq.removeEventListener("change", sync) : mq.removeListener(sync);
    };
  }, [collapseBelow, forceCollapsed]);
  const collapsed = forceCollapsed !== undefined ? forceCollapsed : autoCollapsed;

  // --- desktop mega-menu state ---
  const [openMenu, setOpenMenu] = React.useState(defaultOpenMenu);
  const [menuLeft, setMenuLeft] = React.useState(0);
  const itemRefs = React.useRef({});
  const closeTimer = React.useRef(null);

  // --- mobile drawer state ---
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [expanded, setExpanded] = React.useState({});
  React.useEffect(() => () => clearTimeout(closeTimer.current), []);
  React.useLayoutEffect(() => {
    if (defaultOpenMenu && itemRefs.current[defaultOpenMenu]) {
      setMenuLeft(itemRefs.current[defaultOpenMenu].offsetLeft + 24);
    }
  }, [defaultOpenMenu]);
  // Close the drawer if we grow back to desktop.
  React.useEffect(() => {
    if (!collapsed) setDrawerOpen(false);
  }, [collapsed]);
  const hasChildren = it => Array.isArray(it.children) && it.children.length > 0;
  const open = it => {
    clearTimeout(closeTimer.current);
    if (hasChildren(it)) {
      const el = itemRefs.current[it.value];
      if (el) setMenuLeft(el.offsetLeft + 24);
      setOpenMenu(it.value);
    } else {
      setOpenMenu(null);
    }
  };
  const scheduleClose = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMenu(null), 180);
  };
  const keepOpen = () => clearTimeout(closeTimer.current);
  const openItem = items.find(it => it.value === openMenu);
  const shell = {
    background: "var(--color-surface-inverse)",
    display: "flex",
    flexDirection: "column",
    color: "var(--color-text-inverse)",
    fontFamily: "var(--font-primary)"
  };

  // ---------------- COLLAPSED (mobile / < breakpoint) ----------------
  if (collapsed) {
    return /*#__PURE__*/React.createElement("nav", {
      className: className,
      style: shell
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: 64,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 16px 0 24px"
      }
    }, /*#__PURE__*/React.createElement(LumaIcon, {
      size: 28
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 4
      }
    }, /*#__PURE__*/React.createElement("button", {
      style: {
        ...iconBtn,
        height: 44,
        padding: "0 10px"
      },
      "aria-label": "Notifications"
    }, /*#__PURE__*/React.createElement(Bell, null)), /*#__PURE__*/React.createElement("button", {
      style: {
        ...iconBtn,
        height: 44,
        padding: "0 10px"
      },
      "aria-label": drawerOpen ? "Close menu" : "Open menu",
      "aria-expanded": drawerOpen,
      onClick: () => setDrawerOpen(o => !o)
    }, drawerOpen ? /*#__PURE__*/React.createElement(Close, null) : /*#__PURE__*/React.createElement(Menu, null)))), drawerOpen && /*#__PURE__*/React.createElement("div", {
      style: {
        borderTop: "1px solid var(--color-blue-80)",
        padding: "8px 0 12px"
      }
    }, items.map(it => {
      const active = (activeItem || items[0].value) === it.value;
      const isOpen = !!expanded[it.value];
      return /*#__PURE__*/React.createElement("div", {
        key: it.value
      }, /*#__PURE__*/React.createElement("button", {
        onClick: () => {
          if (hasChildren(it)) setExpanded(e => ({
            ...e,
            [it.value]: !e[it.value]
          }));else {
            onSelect && onSelect(it.value);
            setDrawerOpen(false);
          }
        },
        "aria-expanded": hasChildren(it) ? isOpen : undefined,
        style: {
          ...drawerRow,
          background: active && !hasChildren(it) ? "var(--color-blue-80)" : "transparent"
        }
      }, /*#__PURE__*/React.createElement("span", null, it.label), hasChildren(it) && /*#__PURE__*/React.createElement(Chevron, {
        open: isOpen
      })), hasChildren(it) && isOpen && /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          flexDirection: "column"
        }
      }, it.children.map(c => /*#__PURE__*/React.createElement("button", {
        key: c.value,
        onClick: () => {
          onSubSelect && onSubSelect(it.value, c.value);
          setDrawerOpen(false);
        },
        style: {
          ...drawerRow,
          paddingLeft: 40,
          fontWeight: "var(--text-body-weight)",
          opacity: 0.85
        }
      }, c.label))));
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 1,
        background: "var(--color-blue-80)",
        margin: "8px 24px"
      }
    }), /*#__PURE__*/React.createElement("button", {
      onClick: () => setDrawerOpen(false),
      style: drawerRow
    }, "Learning Center"), /*#__PURE__*/React.createElement("button", {
      onClick: () => setDrawerOpen(false),
      style: {
        ...drawerRow,
        display: "flex",
        alignItems: "center",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(User, null), /*#__PURE__*/React.createElement("span", null, "Account"))));
  }

  // ---------------- DESKTOP ----------------
  return /*#__PURE__*/React.createElement("nav", {
    className: className,
    onMouseLeave: scheduleClose,
    style: shell
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 92,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      height: "100%",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      padding: "0 24px 0 32px"
    }
  }, /*#__PURE__*/React.createElement(LumaIcon, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      height: "100%"
    }
  }, items.map(it => {
    const active = (activeItem || items[0].value) === it.value || openMenu === it.value;
    return /*#__PURE__*/React.createElement("button", {
      key: it.value,
      ref: el => {
        itemRefs.current[it.value] = el;
      },
      onClick: () => onSelect && onSelect(it.value),
      onMouseEnter: () => open(it),
      "aria-haspopup": hasChildren(it) ? "true" : undefined,
      "aria-expanded": openMenu === it.value ? "true" : undefined,
      style: {
        height: "100%",
        padding: "0 24px",
        border: "none",
        cursor: "pointer",
        background: active ? "var(--color-blue-80)" : "transparent",
        color: "var(--color-text-inverse)",
        fontFamily: "var(--font-primary)",
        fontSize: "var(--text-title-size)",
        fontWeight: "var(--text-title-weight)",
        transition: "background .15s ease"
      }
    }, it.label);
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      height: "100%",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: navBtn
  }, "Learning Center"), /*#__PURE__*/React.createElement("button", {
    style: iconBtn,
    "aria-label": "Notifications"
  }, /*#__PURE__*/React.createElement(Bell, null)), /*#__PURE__*/React.createElement("button", {
    style: {
      ...iconBtn,
      paddingRight: 32
    },
    "aria-label": "Account"
  }, /*#__PURE__*/React.createElement(User, null)))), openItem && hasChildren(openItem) && /*#__PURE__*/React.createElement("div", {
    onMouseEnter: keepOpen,
    onMouseLeave: scheduleClose,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 20,
      padding: `4px 32px 28px ${menuLeft}px`
    }
  }, openItem.children.map(c => /*#__PURE__*/React.createElement("button", {
    key: c.value,
    onClick: () => onSubSelect && onSubSelect(openItem.value, c.value),
    style: {
      border: "none",
      background: "transparent",
      padding: 0,
      cursor: "pointer",
      textAlign: "left",
      color: "var(--color-text-inverse)",
      fontFamily: "var(--font-primary)",
      fontSize: "var(--text-body-size)",
      fontWeight: "var(--text-title-weight)",
      lineHeight: "var(--text-body-height)",
      width: "fit-content",
      opacity: 0.92,
      transition: "opacity .12s ease"
    },
    onMouseEnter: e => {
      e.currentTarget.style.opacity = "0.6";
    },
    onMouseLeave: e => {
      e.currentTarget.style.opacity = "0.92";
    }
  }, c.label))));
}
const navBtn = {
  height: "100%",
  padding: "0 24px",
  border: "none",
  background: "transparent",
  cursor: "pointer",
  color: "var(--color-text-inverse)",
  fontFamily: "var(--font-primary)",
  fontSize: "var(--text-title-size)",
  fontWeight: "var(--text-title-weight)"
};
const iconBtn = {
  height: "100%",
  padding: "0 16px",
  border: "none",
  background: "transparent",
  cursor: "pointer",
  color: "var(--color-text-inverse)",
  display: "inline-flex",
  alignItems: "center"
};
const drawerRow = {
  width: "100%",
  textAlign: "left",
  border: "none",
  background: "transparent",
  cursor: "pointer",
  color: "var(--color-text-inverse)",
  fontFamily: "var(--font-primary)",
  fontSize: "var(--text-title-size)",
  fontWeight: "var(--text-title-weight)",
  padding: "14px 24px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between"
};
Object.assign(__ds_scope, { TopNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TopNav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/icons.js
try { (() => {
// Shared inline icons + helpers for Luma UI kits. Stroke style matches Lucide (1.6–2px round).
window.LumaIcons = function () {
  const React = window.React;
  const s = (paths, vb = "0 0 24 24") => ({
    size = 20,
    color = "currentColor",
    strokeWidth = 1.7,
    ...p
  } = {}) => React.createElement("svg", {
    width: size,
    height: size,
    viewBox: vb,
    fill: "none",
    ...p
  }, paths.map((d, i) => React.createElement("path", {
    key: i,
    d,
    stroke: color,
    strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
  return {
    Coins: s(["M9 14a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z", "M15.5 8.5A6 6 0 1 1 9 19.5", "M9 6v2l1.5 1"]),
    TrendUp: s(["M3 17l6-6 4 4 8-8", "M15 7h6v6"]),
    Plus: s(["M12 5v14", "M5 12h14"]),
    Users: s(["M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", "M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z", "M22 21v-2a4 4 0 0 0-3-3.87", "M16 3.13A4 4 0 0 1 16 11"]),
    Chevron: s(["M9 6l6 6-6 6"]),
    ChevronDown: s(["M6 9l6 6 6-6"]),
    ChevronUp: s(["M18 15l-6-6-6 6"]),
    Search: s(["M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z", "M21 21l-4.3-4.3"]),
    Filter: s(["M22 3H2l8 9.46V19l4 2v-8.54L22 3Z"]),
    ArrowUpRight: s(["M7 17L17 7", "M7 7h10v10"]),
    ArrowDownRight: s(["M7 7l10 10", "M17 7v10H7"]),
    Bell: s(["M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9", "M13.7 21a2 2 0 0 1-3.4 0"]),
    Download: s(["M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", "M7 10l5 5 5-5", "M12 15V3"]),
    Settings: s(["M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z", "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z"]),
    Star: s(["M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z"]),
    Check: s(["M20 6L9 17l-5-5"]),
    X: s(["M18 6L6 18", "M6 6l12 12"]),
    Edit: s(["M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", "M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5Z"]),
    Clock: s(["M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z", "M12 6v6l4 2"]),
    Doc: s(["M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z", "M14 2v6h6"]),
    // Tabler info-circle (i): dot above, stemmed stroke below
    Info: s(["M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0", "M12 9h.01", "M11 12h1v4h1"]),
    // Sparkles AI — filled glyph (the one AI/assist affordance)
    Sparkles: ({
      size = 20,
      color = "currentColor",
      ...p
    } = {}) => React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 25 24",
      fill: "none",
      ...p
    }, React.createElement("path", {
      d: "M 13 14 C 13.53 14 14.039 14.211 14.414 14.586 C 14.789 14.961 15 15.47 15 16 C 15 15.47 15.211 14.961 15.586 14.586 C 15.961 14.211 16.47 14 17 14 C 16.47 14 15.961 13.789 15.586 13.414 C 15.211 13.039 15 12.53 15 12 C 15 12.53 14.789 13.039 14.414 13.414 C 14.039 13.789 13.53 14 13 14 Z M 13 2 C 13.53 2 14.039 2.211 14.414 2.586 C 14.789 2.961 15 3.47 15 4 C 15 3.47 15.211 2.961 15.586 2.586 C 15.961 2.211 16.47 2 17 2 C 16.47 2 15.961 1.789 15.586 1.414 C 15.211 1.039 15 0.53 15 0 C 15 0.53 14.789 1.039 14.414 1.414 C 14.039 1.789 13.53 2 13 2 Z M 6 14 C 6 12.409 6.632 10.883 7.757 9.757 C 8.883 8.632 10.409 8 12 8 C 10.409 8 8.883 7.368 7.757 6.243 C 6.632 5.117 6 3.591 6 2 C 6 3.591 5.368 5.117 4.243 6.243 C 3.117 7.368 1.591 8 0 8 C 1.591 8 3.117 8.632 4.243 9.757 C 5.368 10.883 6 12.409 6 14 Z",
      fill: color,
      fillRule: "evenodd",
      transform: "matrix(1 0 0 1 4 3)"
    }))
  };
}();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/icons.js", error: String((e && e.message) || e) }); }

__ds_ns.LumaLogo = __ds_scope.LumaLogo;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.StatusDot = __ds_scope.StatusDot;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.ChoiceChip = __ds_scope.ChoiceChip;

__ds_ns.ChoiceChipGroup = __ds_scope.ChoiceChipGroup;

__ds_ns.Chart = __ds_scope.Chart;

__ds_ns.ComparisonBar = __ds_scope.ComparisonBar;

__ds_ns.SwimlaneMap = __ds_scope.SwimlaneMap;

__ds_ns.AiInsights = __ds_scope.AiInsights;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.SearchBar = __ds_scope.SearchBar;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Slider = __ds_scope.Slider;

__ds_ns.SplitInput = __ds_scope.SplitInput;

__ds_ns.Toggle = __ds_scope.Toggle;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.AvatarGroup = __ds_scope.AvatarGroup;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.CardHeader = __ds_scope.CardHeader;

__ds_ns.CardTitle = __ds_scope.CardTitle;

__ds_ns.CardContent = __ds_scope.CardContent;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.FilterPanel = __ds_scope.FilterPanel;

__ds_ns.MetricCard = __ds_scope.MetricCard;

__ds_ns.Page = __ds_scope.Page;

__ds_ns.PageContent = __ds_scope.PageContent;

__ds_ns.Section = __ds_scope.Section;

__ds_ns.Table = __ds_scope.Table;

__ds_ns.ToolBar = __ds_scope.ToolBar;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.NavigationMenu = __ds_scope.NavigationMenu;

__ds_ns.PageHeader = __ds_scope.PageHeader;

__ds_ns.SegmentedControl = __ds_scope.SegmentedControl;

__ds_ns.Stepper = __ds_scope.Stepper;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.TopNav = __ds_scope.TopNav;

})();
