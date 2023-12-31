## MetroMaps
<hr />
<strong>NOTE</strong>

As of the latest README commit:
- Live journey tracking is only offered for NUST via mock devices
- City wise metrobus route-maps and info are only available for Islamabad

**IMPLEMENETED FUNCTIONALITY IS TO BE EXTENDED IN FUTURE PATCHES, THIS IS SOLELY FOR DEMONSTRATION PURPOSES**
<hr />
MetroMaps is a go-to portal for real-time updates on routes, timings, and live tracking of Pakistan's public transport system. Our user-friendly platform aims to streamline  travel experience, ensuring informed and seamless utilization of public transportation across the country.

### Features
- Live journey tracking
- Next stop and closest station info
- City wise metrobus route-maps info
- Bilingual support to cater Pakistani citizens


### Architecture
The application follows a Client-Server architecture:

**CLIENT SIDE**
Responsible mainly for UI rendering and event-handling.
![image](https://github.com/MuhammadBinUsman03/MetroMaps/assets/58441901/119fc62c-111a-414f-9a6b-35ccee7f30e2)

**SERVER SIDE**
Responsible for mainly request-handling (querying, routing and calculations) and geolocation tracking.
![image](https://github.com/MuhammadBinUsman03/MetroMaps/assets/58441901/25f276d7-f847-4d3c-8002-b0b49828ef08)

### Tech stack
- MERN Stack
- HTML, CSS and JS
- Mapbox GL JS
- Google Maps Platform

### Setup
- Clone the repository: `git clone https://github.com/a-ayesh/MetroMaps.git`
- Change directory to server: `cd server`
- Install server dependencies: `npm install`
- Copy the example environment file: `cp .env.example .env` 
- Provide API keys / MongoDB cluster string in `.env`
- Run the server (port `4000`): `npm run serve`
- Change directory to client: `cd ../client`
- Install client dependencies: `npm install`
- Start the client (port `3000`): `npm run start`
-Application will be running on `http://localhost:3000/`

**Mock devices for testing**

`device*.html` files inside `client/public/device/` directory may be opened while running application to test tracking functionality.

### Usage
**HOMEPAGE**
![image](https://github.com/MuhammadBinUsman03/MetroMaps/assets/58441901/09d804bd-3508-4fa9-ba08-33d596c9f70e)

**TRACKER**
![image](https://github.com/MuhammadBinUsman03/MetroMaps/assets/58441901/a2309182-4515-4a2f-ab64-dedb6b238356)

**ABOUT**
![image](https://github.com/MuhammadBinUsman03/MetroMaps/assets/58441901/c4e49715-21fb-4d68-868e-20fac54bd165)

**CONTACT**
![image](https://github.com/MuhammadBinUsman03/MetroMaps/assets/58441901/7d346731-fb6b-4338-86bb-3a8af6b3c35c)

**URDU VERSION**
![image](https://github.com/MuhammadBinUsman03/MetroMaps/assets/58441901/d7b04b1d-3d9e-471a-b563-b08f2912359a)








