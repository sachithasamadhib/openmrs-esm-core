import { defineConfigSchema, defineExtensionConfigSchema } from '@openmrs/esm-config';
import { setupLogo } from './logo';
import { setupIcons } from './icons/icon-registration';
import { setupBranding } from './brand';
import { esmStyleGuideSchema } from './config-schema';
import { setupPictograms } from './pictograms/pictogram-registration';
import { navGroupConfigSchema } from './nav-group';

export * from './breakpoints';
export * from './spinner';
export * from './notifications';
export * from './page-header';
export * from './toasts';
export * from './snackbars';
export * from './modals';
export * from './workspaces';
export * from './left-nav';
export * from './error-state';
export * from './datepicker';
export * from './nav-group';
export * from './responsive-wrapper';
export * from './patient-banner';
export * from './patient-photo';
export * from './custom-overflow-menu';
export * from './icons';
export * from './pictograms';

defineConfigSchema('@openmrs/esm-styleguide', esmStyleGuideSchema);
defineExtensionConfigSchema('nav-group', navGroupConfigSchema);
setupBranding();
setupLogo();
setupIcons();
setupPictograms();
