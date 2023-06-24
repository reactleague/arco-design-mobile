export declare function getRem(px: number, baseFontSize: number): string;
export interface ArcodesignToken extends Record<string, string> {
    'prefix': string;
    'base-font-size': string;
    'background-color': string;
    'font-color': string;
    'sub-font-color': string;
    'sub-info-font-color': string;
    'line-color': string;
    'primary-color': string;
    'primary-disabled-color': string;
    'danger-color': string;
    'warning-color': string;
    'disabled-color': string;
    'mask-background': string;
    'mask-content-color': string;
    'mask-content-background': string;
    'scroller-buffer': string;
    'full-screen-z-index': string;
    'fixed-z-index': string;
    'popup-mask-background': string;
    'popup-content-background': string;
    'popup-enter-transition': string;
    'popup-exit-transition': string;
    'dialog-mask-background': string;
    'dialog-content-width': string;
    'dialog-content-android-width': string;
    'dialog-content-background': string;
    'dialog-content-border-radius': string;
    'dialog-content-android-border-radius': string;
    'dialog-ios-horizontal-padding': string;
    'dialog-ios-vertical-padding': string;
    'dialog-ios-header-body-gutter': string;
    'dialog-android-horizontal-padding': string;
    'dialog-android-vertical-padding': string;
    'dialog-android-header-body-gutter': string;
    'dialog-android-body-footer-gutter': string;
    'dialog-body-ios-color': string;
    'dialog-body-ios-font-size': string;
    'dialog-body-ios-line-height': string;
    'dialog-body-android-color': string;
    'dialog-body-android-font-size': string;
    'dialog-body-android-line-height': string;
    'dialog-header-ios-color': string;
    'dialog-header-android-color': string;
    'dialog-header-ios-font-size': string;
    'dialog-header-ios-line-height': string;
    'dialog-header-android-font-size': string;
    'dialog-header-android-line-height': string;
    'dialog-footer-ios-color': string;
    'dialog-footer-ios-font-size': string;
    'dialog-footer-ios-height': string;
    'dialog-footer-android-color': string;
    'dialog-footer-android-font-size': string;
    'dialog-footer-android-line-height': string;
    'dialog-footer-android-button-gutter': string;
    'dialog-button-footer-primary-background': string;
    'dialog-button-footer-primary-color': string;
    'dialog-button-footer-color': string;
    'dialog-button-footer-height': string;
    'dialog-button-footer-border-radius': string;
    'dialog-button-footer-gutter': string;
    'carousel-auto-transition': string;
    'carousel-slide-transition': string;
    'carousel-indicator-background': string;
    'carousel-indicator-active-background': string;
    'carousel-indicator-inverse-background': string;
    'carousel-indicator-active-inverse-background': string;
    'carousel-indicator-outside-padding': string;
    'carousel-indicator-position': string;
    'carousel-indicator-safe-padding': string;
    'carousel-circle-indicator-gutter': string;
    'carousel-square-indicator-gutter': string;
    'carousel-circle-indicator-size': string;
    'carousel-square-indicator-width': string;
    'carousel-square-indicator-height': string;
    'carousel-item-text-color': string;
    'carousel-item-text-background': string;
    'carousel-item-text-height': string;
    'carousel-item-text-padding': string;
    'carousel-item-text-font-size': string;
    'input-height': string;
    'input-disabled-background': string;
    'input-disabled-color': string;
    'input-placeholder-color': string;
    'input-clear-icon-color': string;
    'input-clear-icon-font-size': string;
    'input-label-gutter': string;
    'input-horizontal-padding': string;
    'input-vertical-padding': string;
    'input-caret-color': string;
    'input-label-min-width': string;
    'input-text-font-size': string;
    'input-text-line-height': string;
    'textarea-font-size': string;
    'textarea-line-height': string;
    'textarea-padding': string;
    'textarea-has-stat-padding': string;
    'textarea-statistic-color': string;
    'textarea-statistic-font-size': string;
    'avatar-size-map': string;
    'avatar-large-size': string;
    'avatar-medium-size': string;
    'avatar-small-size': string;
    'avatar-smaller-size': string;
    'avatar-ultra-small-size': string;
    'avatar-default-overlap-large-size': string;
    'avatar-default-overlap-medium-size': string;
    'avatar-default-overlap-small-size': string;
    'avatar-default-overlap-smaller-size': string;
    'avatar-default-overlap-ultra-small-size': string;
    'avatar-background': string;
    'avatar-default-overlap-background': string;
    'avatar-text-font-color': string;
    'avatar-large-text-font-size': string;
    'avatar-medium-text-font-size': string;
    'avatar-small-text-font-size': string;
    'avatar-smaller-text-font-size': string;
    'avatar-ultra-small-text-font-size': string;
    'avatar-group-large-size-offset': string;
    'avatar-group-large-size-border': string;
    'avatar-group-medium-size-offset': string;
    'avatar-group-medium-size-border': string;
    'avatar-group-small-size-offset': string;
    'avatar-group-small-size-border': string;
    'avatar-group-smaller-size-offset': string;
    'avatar-group-smaller-size-border': string;
    'avatar-group-ultra-small-size-offset': string;
    'avatar-group-ultra-small-size-border': string;
    'avatar-group-border-color': string;
    'avatar-info-box-large-size': string;
    'avatar-info-box-medium-size': string;
    'avatar-info-box-small-size': string;
    'avatar-info-box-smaller-size': string;
    'avatar-info-box-ultra-small-size': string;
    'avatar-name-large-font-size': string;
    'avatar-name-large-line-height': string;
    'avatar-desc-large-font-size': string;
    'avatar-desc-large-line-height': string;
    'avatar-desc-large-margin-top': string;
    'avatar-name-medium-font-size': string;
    'avatar-name-medium-line-height': string;
    'avatar-desc-medium-font-size': string;
    'avatar-desc-medium-line-height': string;
    'avatar-desc-medium-margin-top': string;
    'avatar-name-small-font-size': string;
    'avatar-name-small-line-height': string;
    'avatar-desc-small-font-size': string;
    'avatar-desc-small-line-height': string;
    'avatar-desc-small-margin-top': string;
    'avatar-name-smaller-font-size': string;
    'avatar-name-smaller-line-height': string;
    'avatar-desc-smaller-font-size': string;
    'avatar-desc-smaller-line-height': string;
    'avatar-desc-smaller-margin-top': string;
    'avatar-name-ultra-small-font-size': string;
    'avatar-name-ultra-small-line-height': string;
    'avatar-desc-ultra-small-font-size': string;
    'avatar-desc-ultra-small-line-height': string;
    'avatar-desc-ultra-small-margin-top': string;
    'avatar-name-color': string;
    'avatar-desc-color': string;
    'button-line-height': string;
    'button-radius': string;
    'button-icon-text-gutter': string;
    'button-primary-background': string;
    'button-primary-clicked-background': string;
    'button-primary-disabled-background': string;
    'button-primary-text-color': string;
    'button-primary-disabled-text-color': string;
    'button-default-background': string;
    'button-default-clicked-background': string;
    'button-default-disabled-background': string;
    'button-default-text-color': string;
    'button-default-disabled-text-color': string;
    'button-ghost-background': string;
    'button-ghost-clicked-background': string;
    'button-ghost-disabled-background': string;
    'button-ghost-text-color': string;
    'button-ghost-disabled-text-color': string;
    'button-huge-padding': string;
    'button-huge-height': string;
    'button-huge-text-size': string;
    'button-large-padding': string;
    'button-large-height': string;
    'button-large-text-size': string;
    'button-medium-padding': string;
    'button-medium-height': string;
    'button-medium-text-size': string;
    'button-small-padding': string;
    'button-small-height': string;
    'button-small-text-size': string;
    'button-mini-padding': string;
    'button-mini-height': string;
    'button-mini-text-size': string;
    'ellipsis-default-text-size': string;
    'ellipsis-float-ellipsis-node-background': string;
    'ellipsis-float-ellipsis-node-padding-left': string;
    'checkbox-icon-color': string;
    'checkbox-icon-font-size': string;
    'checkbox-icon-margin-right': string;
    'checkbox-icon-checked-color': string;
    'checkbox-icon-disabled-color': string;
    'checkbox-icon-checked-disabled-color': string;
    'checkbox-disabled-color': string;
    'checkbox-text-font-size': string;
    'checkbox-text-disabled-opacity': string;
    'checkbox-group-gutter': string;
    'tabs-tab-bar-font-size': string;
    'tabs-tab-bar-background': string;
    'tabs-tab-bar-height': string;
    'tabs-tab-bar-width': string;
    'tabs-tab-bar-horizontal-height': string;
    'tabs-tab-bar-card-height': string;
    'tabs-tab-bar-card-color': string;
    'tabs-tab-bar-card-text-color': string;
    'tabs-tab-bar-card-border-radius': string;
    'tabs-tab-bar-line-active-color': string;
    'tabs-tab-bar-line-gutter': string;
    'tabs-tab-bar-tag-gutter': string;
    'tabs-tab-bar-tag-height': string;
    'tabs-tab-bar-tag-vertical-padding': string;
    'tabs-tab-bar-tag-background': string;
    'tabs-tab-bar-tag-text-color': string;
    'tabs-tab-bar-tag-active-background': string;
    'tabs-tab-bar-tag-active-text-color': string;
    'tabs-tab-bar-tag-padding': string;
    'tabs-underline-color': string;
    'tabs-underline-thick': string;
    'tabs-underline-size': string;
    'tabs-underline-border-radius': string;
    'tab-bar-height': string;
    'tab-bar-font-size': string;
    'tab-bar-icon-size': string;
    'tab-bar-only-title-font-size': string;
    'tab-bar-color': string;
    'tab-bar-active-color': string;
    'tab-bar-title-line-height': string;
    'tab-bar-only-title-line-height': string;
    'tab-bar-title-margin': string;
    'tab-bar-item-icon-margin': string;
    'nav-bar-height': string;
    'nav-bar-bottom-border-color': string;
    'nav-bar-background': string;
    'nav-bar-font-color': string;
    'nav-bar-two-sides-font-size': string;
    'nav-bar-two-sides-padding': string;
    'nav-bar-title-font-size': string;
    'nav-bar-title-text-font-size': string;
    'nav-bar-title-padding': string;
    'nav-bar-back-icon-height': string;
    'image-placeholder-background': string;
    'image-loading-icon-color': string;
    'image-retry-icon-color': string;
    'image-mask-background': string;
    'image-transition-function': string;
    'image-inner-font-size': string;
    'image-retry-font-size': string;
    'switch-text-color': string;
    'switch-text-checked-color': string;
    'switch-inner-background': string;
    'switch-inner-transition': string;
    'switch-inner-fully-border-radius': string;
    'switch-inner-semi-border-radius': string;
    'switch-android-width': string;
    'switch-android-height': string;
    'switch-android-padding': string;
    'switch-android-inner-diameter-size': string;
    'switch-android-inner-box-shadow': string;
    'switch-android-fully-border-radius': string;
    'switch-android-semi-border-radius': string;
    'switch-android-checked-inner-transform': string;
    'switch-android-checked-inner-transform-rtl': string;
    'switch-android-text-font-size': string;
    'switch-android-text-gap-size': string;
    'switch-android-background': string;
    'switch-android-checked-background': string;
    'switch-android-disabled-checked-background': string;
    'switch-android-disabled-background': string;
    'switch-ios-width': string;
    'switch-ios-height': string;
    'switch-ios-padding': string;
    'switch-ios-inner-diameter-size': string;
    'switch-ios-inner-border-color': string;
    'switch-ios-inner-box-shadow': string;
    'switch-ios-fully-border-radius': string;
    'switch-ios-semi-border-radius': string;
    'switch-ios-checked-inner-transform': string;
    'switch-ios-checked-inner-transform-rtl': string;
    'switch-ios-text-font-size': string;
    'switch-ios-text-gap-size': string;
    'switch-ios-background': string;
    'switch-ios-checked-background': string;
    'switch-ios-disabled-checked-background': string;
    'switch-ios-disabled-checked-opacity': string;
    'switch-ios-disabled-background': string;
    'toast-background': string;
    'toast-text-color': string;
    'toast-font-size': string;
    'toast-line-height': string;
    'toast-border-radius': string;
    'toast-loading-arc-background-color': string;
    'toast-loading-inner-font-size': string;
    'toast-safe-padding': string;
    'toast-from-top-position': string;
    'toast-from-bottom-position': string;
    'toast-horizontal-padding': string;
    'toast-horizontal-icon-size': string;
    'toast-horizontal-icon-content-gutter': string;
    'toast-vertical-padding': string;
    'toast-vertical-icon-size': string;
    'toast-vertical-icon-content-gutter': string;
    'loading-color': string;
    'loading-arc-background-color': string;
    'loading-dot-size': string;
    'loading-dot-gutter': string;
    'picker-view-font-size': string;
    'picker-view-cell-height': string;
    'picker-view-wrapper-height': string;
    'picker-view-mask-top-background': string;
    'picker-view-mask-bottom-background': string;
    'picker-view-selection-border-color': string;
    'picker-wrapper-shadow': string;
    'picker-wrapper-border-radius': string;
    'picker-header-height': string;
    'picker-header-background': string;
    'picker-title-font-size': string;
    'picker-title-padding': string;
    'picker-button-font-size': string;
    'picker-button-padding': string;
    'picker-left-btn-color': string;
    'picker-right-btn-color': string;
    'popover-arrow-size': string;
    'popover-arrow-border-radius': string;
    'popover-inner-border-radius': string;
    'popover-inner-opacity': string;
    'popover-inner-transition': string;
    'popover-inner-white-theme-opacity': string;
    'popover-inner-background-shadow': string;
    'popover-inner-top-arrow-shadow': string;
    'popover-inner-bottom-arrow-shadow': string;
    'popover-background-color': string;
    'popover-white-theme-background-color': string;
    'popover-content-color': string;
    'popover-content-padding': string;
    'popover-content-android-padding': string;
    'popover-content-font-size': string;
    'popover-content-line-height': string;
    'popover-content-disabled-color': string;
    'popover-content-white-theme-color': string;
    'popover-content-white-theme-disabled-color': string;
    'popover-content-border-color': string;
    'popover-content-white-theme-border-color': string;
    'popover-shadow-color': string;
    'popover-menu-content-padding': string;
    'popover-menu-icon-white-theme-color': string;
    'popover-menu-active-background': string;
    'popover-menu-active-white-theme-background': string;
    'popover-horizontal-menu-max-width': string;
    'popover-horizontal-menu-item-size': string;
    'popover-horizontal-menu-item-padding': string;
    'popover-horizontal-menu-icon-margin': string;
    'popover-icon-divider-color': string;
    'popover-icon-divider-height': string;
    'popover-icon-size': string;
    'popover-icon-padding': string;
    'popover-text-suffix-padding': string;
    'popover-mask-background': string;
    'load-more-font-size': string;
    'load-more-text-color': string;
    'cell-text-color': string;
    'cell-label-color': string;
    'cell-label-icon-color': string;
    'cell-desc-color': string;
    'cell-desc-font-size': string;
    'cell-desc-margin-top': string;
    'cell-content-font-size': string;
    'cell-arrow-color': string;
    'cell-arrow-gutter': string;
    'cell-arrow-font-size': string;
    'cell-background-color': string;
    'cell-font-size': string;
    'cell-horizontal-padding': string;
    'cell-item-height': string;
    'cell-item-has-desc-height': string;
    'cell-label-gutter': string;
    'cell-label-icon-gutter': string;
    'cell-label-icon-font-size': string;
    'cell-extra-font-size': string;
    'cell-extra-line-height': string;
    'cell-extra-padding': string;
    'tag-font-size': string;
    'tag-icon-font-size': string;
    'tag-icon-margin-right': string;
    'tag-icon-close-margin-left': string;
    'tag-small-size-height': string;
    'tag-small-size-padding': string;
    'tag-medium-size-height': string;
    'tag-medium-size-padding': string;
    'tag-large-size-height': string;
    'tag-large-size-padding': string;
    'tag-filleted-padding': string;
    'tag-border-radius': string;
    'tag-primary-color': string;
    'tag-primary-background-color': string;
    'tag-primary-border-color': string;
    'tag-hollow-color': string;
    'tag-hollow-border-color': string;
    'tag-solid-color': string;
    'tag-solid-background-color': string;
    'tag-solid-border-color': string;
    'tag-list-horizontal-gutter': string;
    'tag-list-vertical-gutter': string;
    'tag-list-add-border-color': string;
    'tag-list-add-background': string;
    'tag-list-add-color': string;
    'image-preview-mask-background': string;
    'image-preview-indicator-font-size': string;
    'image-preview-indicator-padding': string;
    'image-preview-indicator-background': string;
    'image-preview-thumb-transition': string;
    'dropdown-menu-padding': string;
    'dropdown-menu-font-size': string;
    'dropdown-menu-line-height': string;
    'dropdown-menu-color': string;
    'dropdown-menu-selected-color': string;
    'dropdown-menu-disabled-color': string;
    'dropdown-menu-tip-color': string;
    'dropdown-menu-tip-min-width': string;
    'dropdown-menu-tip-padding-right': string;
    'dropdown-menu-label-max-width': string;
    'dropdown-menu-icon-size': string;
    'dropdown-menu-icon-color': string;
    'dropdown-menu-icon-selected-color': string;
    'dropdown-menu-icon-margin-left': string;
    'dropdown-options-background-color': string;
    'dropdown-options-item-padding': string;
    'dropdown-options-item-font-size': string;
    'dropdown-options-item-line-height': string;
    'dropdown-options-item-color': string;
    'dropdown-options-item-selected-color': string;
    'dropdown-options-item-disabled-color': string;
    'dropdown-options-item-icon-right': string;
    'dropdown-mask-background-color': string;
    'dropdown-multi-rows-options-gutter': string;
    'dropdown-multi-rows-options-item-padding': string;
    'dropdown-multi-rows-options-item-font-size': string;
    'dropdown-multi-rows-options-item-line-height': string;
    'dropdown-multi-rows-options-item-color': string;
    'dropdown-multi-rows-options-item-border-radius': string;
    'dropdown-multi-rows-options-item-background': string;
    'dropdown-multi-rows-options-item-selected-background': string;
    'dropdown-multi-rows-options-item-selected-color': string;
    'dropdown-multi-rows-options-container-padding': string;
    'dropdown-multi-rows-options-container-margin': string;
    'collapse-disabled-header-color': string;
    'collapse-header-background': string;
    'collapse-header-height': string;
    'collapse-header-font-size': string;
    'collapse-header-margin-left': string;
    'collapse-header-padding': string;
    'collapse-header-color': string;
    'collapse-header-line-height': string;
    'collapse-header-icon-color': string;
    'collapse-content-padding': string;
    'collapse-content-font-size': string;
    'collapse-content-color': string;
    'collapse-content-line-height': string;
    'pull-refresh-label-background-color': string;
    'pull-refresh-label-font-size': string;
    'pull-refresh-content-background-color': string;
    'pull-refresh-label-text-color': string;
    'pull-refresh-label-loading-color': string;
    'slider-padding': string;
    'slider-mask-padding': string;
    'slider-has-mark-padding-bottom': string;
    'slider-label-font-size': string;
    'slider-label-gutter': string;
    'slider-text-color': string;
    'slider-line-color': string;
    'slider-line-border-radius': string;
    'slider-line-activated-color': string;
    'slider-line-disabled-color': string;
    'slider-thumb-width': string;
    'slider-thumb-height': string;
    'slider-thumb-border-radius': string;
    'slider-thumb-box-shadow': string;
    'slider-thumb-background': string;
    'slider-popover-arrow-size': string;
    'slider-popover-font-size': string;
    'slider-popover-line-height': string;
    'slider-popover-gutter': string;
    'slider-mark-width': string;
    'slider-mark-height': string;
    'slider-mark-border-radius': string;
    'slider-mark-label-font-size': string;
    'slider-mark-label-line-height': string;
    'slider-horizontal-mark-label-top': string;
    'slider-vertical-mark-label-right': string;
    'swipe-load-label-background': string;
    'swipe-load-label-border-radius': string;
    'swipe-load-label-text-margin-left': string;
    'swipe-load-label-text-width': string;
    'swipe-load-label-text-color': string;
    'swipe-load-label-text-font-size': string;
    'notice-bar-wrapper-padding': string;
    'notice-bar-background': string;
    'notice-bar-color': string;
    'notice-bar-gradient-background': string;
    'notice-bar-line-height': string;
    'notice-bar-text-font-size': string;
    'notice-bar-icon-font-size': string;
    'notice-bar-single-line-height': string;
    'notice-bar-vertical-padding': string;
    'notice-bar-horizontal-padding': string;
    'notice-bar-gradient-width': string;
    'notify-success-background': string;
    'notify-error-background': string;
    'notify-warn-background': string;
    'notify-font-color': string;
    'notify-info-font-color': string;
    'notify-font-size': string;
    'notify-min-height': string;
    'steps-padding': string;
    'steps-tail-border-radius': string;
    'steps-tail-horizontal-gutter': string;
    'steps-tail-vertical-gutter': string;
    'steps-tail-horizontal-padding': string;
    'steps-tail-vertical-padding': string;
    'steps-tail-horizontal-left': string;
    'steps-tail-vertical-top': string;
    'steps-tail-standard-size': string;
    'steps-tail-standard-background': string;
    'steps-tail-finish-background': string;
    'steps-finish-icon-num-background': string;
    'steps-process-icon-num-background': string;
    'steps-wait-icon-num-background': string;
    'steps-error-icon-num-background': string;
    'steps-icon-svg-standard-font-size': string;
    'steps-finish-icon-svg-color': string;
    'steps-error-icon-svg-color': string;
    'steps-error-icon-svg-font-size': string;
    'steps-icon-num-font-size': string;
    'steps-icon-num-line-height': string;
    'steps-icon-num-color': string;
    'steps-process-icon-num-color': string;
    'steps-finish-dot-border-color': string;
    'steps-process-dot-background': string;
    'steps-wait-dot-border-color': string;
    'steps-finish-title-color': string;
    'steps-error-title-color': string;
    'steps-process-title-color': string;
    'steps-wait-title-color': string;
    'steps-description-color': string;
    'steps-wait-description-color': string;
    'steps-icon-width': string;
    'steps-icon-height': string;
    'steps-dot-width': string;
    'steps-dot-height': string;
    'steps-dot-border-width': string;
    'steps-horizontal-content-margin-top': string;
    'steps-vertical-content-margin-left': string;
    'steps-vertical-content-padding-bottom': string;
    'steps-title-font-size': string;
    'steps-title-line-height': string;
    'steps-description-font-size': string;
    'steps-description-line-height': string;
    'steps-description-margin-top': string;
    'steps-vertical-padding-bottom': string;
    'steps-vertical-padding-left': string;
    'steps-process-with-config-item-icon-color': string;
    'swipe-action-open-transition': string;
    'swipe-action-close-transition': string;
    'swipe-action-info-padding': string;
    'swipe-action-info-bounce-buffer': string;
    'swipe-action-text-font-size': string;
    'swipe-action-text-line-height': string;
    'swipe-action-text-color': string;
    'swipe-action-icon-width': string;
    'swipe-action-icon-height': string;
    'swipe-action-icon-margin-right': string;
    'badge-background-color': string;
    'badge-text-color': string;
    'badge-font-size': string;
    'badge-dot-width': string;
    'badge-text-width': string;
    'badge-text-padding': string;
    'badge-text-deviation': string;
    'badge-dot-deviation': string;
    'badge-border-radius': string;
    'badge-border-color': string;
    'circle-progress-font-size': string;
    'circle-progress-primary-color': string;
    'circle-progress-track-color': string;
    'circle-progress-disabled-color': string;
    'circle-progress-mini-track-color': string;
    'circle-progress-linear-gradient-start-color': string;
    'circle-progress-linear-gradient-end-color': string;
    'circle-progress-linear-gradient-text-color': string;
    'progress-primary-color': string;
    'progress-track-color': string;
    'progress-disabled-color': string;
    'progress-disabled-text-color': string;
    'progress-linear-gradient-start-color': string;
    'progress-linear-gradient-end-color': string;
    'progress-linear-gradient-text-color': string;
    'progress-nav-track-color': string;
    'progress-nav-track-height': string;
    'progress-track-height': string;
    'progress-inner-track-height': string;
    'pagination-padding': string;
    'pagination-center-field-gutter': string;
    'pagination-field-font-size': string;
    'pagination-field-line-height': string;
    'pagination-field-button-min-height': string;
    'pagination-field-button-border-radius': string;
    'pagination-field-button-padding': string;
    'pagination-field-btn-text-font-size': string;
    'pagination-field-btn-icon-text-gutter': string;
    'pagination-field-btn-icon-side-margin': string;
    'pagination-field-primary-background': string;
    'pagination-field-primary-text-color': string;
    'pagination-field-default-background': string;
    'pagination-field-default-text-color': string;
    'pagination-field-disabled-background': string;
    'pagination-field-disabled-text-color': string;
    'pagination-field-text-color': string;
    'pagination-field-text-primary-text-color': string;
    'pagination-item-font-size': string;
    'pagination-item-line-height': string;
    'pagination-item-primary-text-color': string;
    'pagination-item-default-text-color': string;
    'progress-text-inner-color': string;
    'progress-text-gutter': string;
    'progress-text-font-size': string;
    'progress-text-follow-font-size': string;
    'progress-text-follow-border-radius': string;
    'progress-text-follow-width': string;
    'progress-text-follow-height': string;
    'transition-fade-duration': string;
    'rate-icon-size': string;
    'rate-icon-offset': string;
    'rate-icon-active-color': string;
    'rate-icon-normal-color': string;
    'rate-icon-disabled-active-color': string;
    'count-down-font-size': string;
    'count-down-line-height': string;
    'count-down-color': string;
    'grid-icon-width': string;
    'grid-icon-height': string;
    'grid-vertical-text-margin-top': string;
    'grid-vertical-title-font-size': string;
    'grid-vertical-title-line-height': string;
    'grid-vertical-content-margin-top': string;
    'grid-vertical-content-font-size': string;
    'grid-vertical-content-line-height': string;
    'grid-horizontal-text-margin-left': string;
    'grid-horizontal-content-margin-top': string;
    'grid-border-color': string;
    'grid-border-size': string;
    'action-sheet-item-height': string;
    'action-sheet-item-font-size': string;
    'action-sheet-border-radius': string;
    'action-sheet-cancel-border-color': string;
    'action-sheet-cancel-border-width': string;
    'action-sheet-header-padding': string;
    'action-sheet-title-font-size': string;
    'action-sheet-sub-title-font-size': string;
    'search-bar-padding': string;
    'search-bar-background-color': string;
    'search-bar-square-shape-border-radius': string;
    'search-bar-round-shape-border-radius': string;
    'search-bar-input-wrapper-height': string;
    'search-bar-input-wrapper-padding': string;
    'search-bar-input-wrapper-background-color': string;
    'search-bar-input-wrapper-font-size': string;
    'search-bar-input-height': string;
    'search-bar-input-caret-color': string;
    'search-bar-input-placeholder-color': string;
    'search-bar-prefix-margin-right': string;
    'search-bar-clear-icon-color': string;
    'search-bar-search-icon-color': string;
    'search-bar-search-icon-font-size': string;
    'search-bar-cancel-btn-color': string;
    'search-bar-cancel-btn-font-size': string;
    'search-bar-cancel-btn-margin-left': string;
    'search-bar-association-background-color': string;
    'search-bar-association-item-height': string;
    'search-bar-association-item-padding': string;
    'search-bar-association-item-font-size': string;
    'search-bar-association-item-color': string;
    'search-bar-association-item-highlight-color': string;
    'image-picker-font-size': string;
    'image-picker-disabled-opacity': string;
    'image-picker-border-radius': string;
    'image-picker-add-background': string;
    'image-picker-add-icon-font-size': string;
    'image-picker-add-icon-color': string;
    'image-picker-add-text-font-size': string;
    'image-picker-add-text-color': string;
    'image-picker-error-color': string;
    'image-picker-error-background': string;
    'image-picker-close-color': string;
    'image-picker-close-font-size': string;
    'image-picker-close-width': string;
    'image-picker-close-height': string;
    'image-picker-close-background': string;
    'image-picker-close-border-radius': string;
    'index-bar-background': string;
    'index-bar-group-active-color': string;
    'index-bar-group-left-spacing': string;
    'index-bar-group-title-height': string;
    'index-bar-group-title-background': string;
    'index-bar-group-title-font-color': string;
    'index-bar-group-title-font-size': string;
    'index-bar-group-item-height': string;
    'index-bar-group-item-font-size': string;
    'index-bar-sidebar-active-color': string;
    'index-bar-sidebar-item-font-size': string;
    'index-bar-sidebar-item-line-height': string;
    'index-bar-sidebar-item-padding': string;
    'index-bar-sidebar-item-width': string;
    'index-bar-sidebar-sweat-padding': string;
    'index-bar-sidebar-sweat-background': string;
    'index-bar-sidebar-sweat-color': string;
    'index-bar-sidebar-sweat-right': string;
    'index-bar-sidebar-sweat-font-size': string;
    'index-bar-sidebar-sweat-radius': string;
    'index-bar-sidebar-sweat-triangle-position': string;
    'index-bar-sidebar-sweat-triangle-border': string;
    'index-bar-sidebar-toast-background': string;
    'index-bar-sidebar-toast-color': string;
    'index-bar-sidebar-toast-height': string;
    'index-bar-sidebar-toast-radius': string;
    'index-bar-sidebar-toast-padding': string;
    'index-bar-sidebar-toast-font-size': string;
    'stepper-font-size': string;
    'stepper-square-border': string;
    'stepper-square-border-radius': string;
    'stepper-square-background-color': string;
    'stepper-round-button-border-radius': string;
    'stepper-round-input-background-color': string;
    'stepper-button-size': string;
    'stepper-button-icon-size': string;
    'stepper-default-background-color': string;
    'stepper-content-color': string;
    'stepper-disable-color': string;
    'stepper-input-width': string;
    'stepper-input-height': string;
    'stepper-input-margin': string;
    'form-item-label-item-font-size': string;
    'form-item-label-item-line-height': string;
    'form-item-label-item-color': string;
    'form-item-label-item-gutter': string;
    'form-item-label-item-width': string;
    'form-item-border-divider-color': string;
    'form-item-label-item-required-asterisk-color': string;
    'form-item-error-message-color': string;
    'form-item-warning-message-color': string;
    'time-line-dot-width': string;
    'time-line-dot-border-color': string;
    'time-line-dot-background-color': string;
    'time-line-axis-width': string;
    'time-line-axis-color': string;
    'time-line-label-font-size': string;
    'time-line-label-color': string;
    'time-line-content-margin-top': string;
    'time-line-content-margin-bottom': string;
    'time-line-content-margin-left': string;
    'time-line-content-border-radius': string;
    'time-line-content-font-size': string;
    'time-line-content-background-color': string;
    'time-line-content-color': string;
    'keyboard-background': string;
    'keyboard-content-padding': string;
    'keyboard-unified-margin': string;
    'keyboard-confirm-key-background': string;
    'keyboard-confirm-key-color': string;
    'keyboard-confirm-key-font-size': string;
    'keyboard-key-font-weight': string;
    'keyboard-key-font-size': string;
    'keyboard-key-icon-size': string;
    'keyboard-key-line-height': string;
    'keyboard-key-background': string;
    'keyboard-key-active-background': string;
    'keyboard-key-border-radius': string;
    'keyboard-key-height': string;
    'keyboard-key-color': string;
    'divider-line-thickness': string;
    'divider-line-color': string;
    'divider-content-font-size': string;
    'divider-content-font-color': string;
    'divider-left-width': string;
    'divider-right-width': string;
    'divider-content-padding': string;
    'divider-padding': string;
}
declare const tokens: ArcodesignToken;
export default tokens;