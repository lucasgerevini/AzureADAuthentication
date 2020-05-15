// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseUrl:'http://localhost:58980/',
  scopeUri: ['api://86cb014a-6b06-42b0-b527-66255de6ddea/bia'],
  tenantId: 'e8a010e4-50f5-4372-bcf6-1f7d868312a1',
  uiClienId: '86cb014a-6b06-42b0-b527-66255de6ddea',
  redirectUrl: 'http://localhost:4200'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
