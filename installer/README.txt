THUNDERHEAD RACEWAY - NIGHT OPTIMIZED
A third layout for Thunderhead Raceway v0.6 by Dogeish.

HOW TO INSTALL
  1. Unzip this whole file somewhere (right-click > Extract All).
  2. Double-click INSTALL.bat
  3. Open Content Manager, press F5, pick Thunderhead Raceway, choose "Night Optimized".

  It finds Assetto Corsa by itself. If it can't, it asks you to paste your Assetto Corsa folder.
  If Windows asks "Do you want to run this file?", click Run.
  Close Content Manager and the game before installing.

HOW TO REMOVE
  Double-click UNINSTALL.bat. Everything goes back to the original track.

WHAT IT IS
  The No Dogbowls circuit with the night lighting trimmed for performance: the stadium floodlights
  and ambient lights are off, and every sponsor and sign light plus the track-edge sidelights stay
  on. For PCs that struggle at night, and for racing in a slightly darker environment. Normal and
  No Dogbowls keep the full night lighting exactly as before. No 3D models are changed.

FOR DOGEISH - HOW IT WORKS
  CSP gives every layout of a track the same lighting config, so one layout can't just have
  different lights. So the config now holds only what's lit on every layout (sponsors, signs,
  sidelights), and extension\stock_lights.lua re-creates the 61 stadium and ambient lights, with the
  exact values from your original config, on every layout EXCEPT night_optimized, and only at night
  (your NIGHT_SHARP rule: sun angle 88 degrees or more). Tested in game: CSP's log shows the script
  loading with 61 lights and switching them on at night, no errors.
  One difference on Normal and No Dogbowls: the "Stadium Colour Lights" series (marked "not working
  currently" in your config) can't be re-created by a script, so it's off there too.
  The files it adds are in installer\files\thunderhead_raceway\ if you want to merge them by hand.

Night Optimized by solariz3d. Track, models and original lighting by Dogeish.
