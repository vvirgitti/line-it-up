# Line It Up

Yet another lineup app.

This one is written in react native and should work on both iOS and Android devices.
To make my life (and learning) a bit easier, I'm using Expo.


## How to start things

`expo start`

If you don't have it already, download the Expo Go app and see the changes directly on your device.


## Tech stack

- Typescript
- React-native
- Expo

For future iterations:
- Testing library
- Firebase DB
- Firebase functions (if needed)
- Google sheets

## What the app should do

Endgame: an app that can create automatically a slowpitch lineup based on player's stats (read from Google sheets).

Smaller steps first:
- [ ] Be able to create players and store them (in a json file, locally at first)
- [ ] Create a roster based on the list of players entered - following the slowpitch rules
- [ ] Roster also takes into account stats (harcoded for now)
- [ ] Save the players in a Firebase DB
- [ ] Read stats from Google Sheets instead of hardcoded data