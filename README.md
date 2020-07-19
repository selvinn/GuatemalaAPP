## GuatemalaAPP

It is an example application developed in Ionic with Angular and consists of the development of two basic screens to consume the APIs developed in GuatemalaAPI (https://github.com/selvinn/guatemala-backend).

## Installation

- Execute the GuatemalaAPI project.
- The backend project must run at the URL http://127.0.0.1:8000/api/promotions (for example), but it can be executed at another URL depending on the desired configuration.
- Depending on the API URL, the ApiService basePath variable must be modified (file src/app/services/api.services.ts).

### Run for browser

- Run the command ```ionic serve```
- This command will open a tab in the browser with the initial path of the project, for example: http://localhost:8100/promotion-list and should display a promotion list.

### Run for mobile

- Stop running ionic serve
- Generate build: ```ionic build```
- Create app for iOS and Android:
```
ionic cap add ios
ionic cap add android
```
- Copy the build generation sources ```ionic cap copy```
- Sync modifications ```ionic cap sync```


#### For iOS
- Open the project with xCode: ```ionic cap open ios```
- Run on simulator or physical device

#### For Android
- Open the project with Android Studio: ```ionic cap open android```
- Run on simulator or physical device.

