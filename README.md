# Thunderhead Raceway — Night Optimized (No Dogbowls)

A night-racing lighting preset for **Thunderhead Raceway** by **Dogeish** (v0.6). It keeps the
sponsor and sign lights and the track-edge sidelights, and switches off the stadium floodlights and
the ambient fill, which is where the performance goes at night.

**Nothing in the track's models is changed.** This is a CSP config change only: 63 lines, each one
`ACTIVE=0` on a light the original defines. The full diff against the original is in
[`diff/ext_config.night.diff`](diff/ext_config.night.diff).

> Written for the track's author to look at. It contains the author's own `ext_config.ini`, modified,
> so the repo is private until they've seen it.

## What's on and what's off

| group (the author's own label) | lights | state | why |
|---|---:|:-:|---|
| Stadium Lights | 20 | **off** | 450 m range each; by far the most expensive |
| Ambient | 27 | **off** | 18 of them reach 200–300 m |
| Inner Stadium Lights | 5 | **off** | 300 m range |
| Track Stadium Lights | 6 | **off** | short (56 m); tried on, looked better off |
| The three lights that wouldn't bloody work | 4 | **off** | already not working, per the author's comment |
| Stadium Colour Lights | 1 series | **off** | "not working currently", per the author's comment |
| every sponsor and sign group | 43 | on | the look of the track at night |
| sidelights (`LIGHT_SERIES` on material `sidelights`) | 1 series | on | the lamps along the track edges |

The 56 glow entries (`MATERIAL_ADJUSTMENT`) are untouched, so bulbs and signs still look lit. That's
why the stadium floodlight heads still glow even though they no longer cast light. The per-light list
(position, range, spot, colour, config line) is in [`tools/INVENTORY.md`](tools/INVENTORY.md).

Why range is the thing to cut, from CSP's own lights documentation: *"amount of lights is not an issue
in itself, the main problem comes from how many pixels on a screen are affected by how many lights."*
([Tracks – Lights](https://github.com/ac-custom-shaders-patch/acc-extension-config/wiki/Tracks-%E2%80%93-Lights))

## Why it's a separate track and not a third layout

The goal was a third layout next to Normal and No Dogbowls, with those two left exactly as shipped.
**CSP (tested on v0.2.11, AC 1.16.4) can't do that.** Every route was checked:

1. **An `extension/ext_config.ini` inside a layout folder is ignored.** Tested in game: the layout
   loaded with the stock lights.
2. **CSP only looks for the config per track.** The only config filenames in CSP's `dwrite.dll` are
   `extension\ext_config.ini`, `ext_config.ini` and `ext_config.bin`.
3. **Conditions can't read the layout.** The inputs CSP's shipped conditions use are `SUN`, `TIME`,
   `YEAR_PROGRESS`, `FLAG_TYPE` and `ONE`.
4. **Lua can read the layout (`ac.getTrackLayout()`) and can create lights (`ac.LightSource`),** but
   there is no call that switches off a config-defined light.

The only way to a real third layout would be to invert it: keep the always-on lights in the config and
move the stadium and ambient lights into a layout-aware Lua track script that creates them only on
Normal and No Dogbowls. That changes how the two stock layouts are lit, and the two material-based
series can't be rebuilt that way, so it wasn't done. If you know a way CSP supports this, that's the
real fix, and this repo would shrink to one config.

So for now it installs as **Thunderhead Raceway Night Optimized**, a second track folder whose only real files are its
lights config, its UI card and its small data files.

## Install

Requires Thunderhead Raceway installed as `content/tracks/thunderhead_raceway`, and Node.js.

```
set AC_ROOT=C:\path\to\assettocorsa
node tools/make_night_track.js
```

`AC_ROOT` is optional; without it the script uses `G:\SteamLibrary\steamapps\common\assettocorsa`.

It creates `content/tracks/thunderhead_raceway_night_optimized/` with only the No Dogbowls layout:

- **Hard-linked** from the original, so no extra disk space: the five `.kn5` models No Dogbowls uses,
  `skins/`, `texture/`, and the `extension/*.dds` crowd textures. Hard links need the same NTFS
  volume. They're only used for files nothing edits.
- **Real copies:** `data/`, `no_dogbowls/`, `models_no_dogbowls.ini`, `ui/`, and the night
  `extension/ext_config.ini` from [`night_track/`](night_track/).

It refuses to run if the destination already exists. In Content Manager, press F5 afterwards.

**If you had the earlier "night_optimized" layout selected:** Content Manager keeps the last selection
and crashes with *"layout night_optimized for track thunderhead_raceway is missing"*. Pick the new
track instead.

## Trying other mixes on the original track

`tools/apply.js` switches whole groups of lights off in the original track's config, always starting
from a backup of the original (it checks that the backup's sha256 is the shipped file's,
`469a1733c2868b84…`). Put a copy of the original config at `tools/ext_config.ORIGINAL.ini` first.

```
node tools/apply.js tools/presets/sponsors-only.txt
node tools/apply.js tools/presets/sponsors-plus-sidelights.txt   (= this night build)
node tools/apply.js --restore
```

Presets are plain lists of the author's group labels. CSP picks up config changes live, so avoid
switching mid-session.

## Files

```
night_track/extension/ext_config.ini       the night config (sha256 a8c9b86858eddcd9…)
night_track/ui/no_dogbowls/ui_track.json   "Thunderhead Raceway Night Optimized (No Dogbowls)"
diff/ext_config.night.diff                 exactly what changed from the original
tools/make_night_track.js                  builds the night track from an installed original
tools/apply.js                             switches light groups on the original, reversibly
tools/parse.js, inventory.js, INVENTORY.md the light inventory and how it was made
tools/presets/                             saved light mixes
```

Track, models and original lighting config: **Dogeish** (patreon.com/Dogeish).
Night preset: **solariz3d**.
