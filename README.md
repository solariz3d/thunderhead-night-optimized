# Thunderhead Raceway — Night Optimized

A third layout for **Thunderhead Raceway** by **Dogeish** (v0.6), next to Normal and No Dogbowls.
Night Optimized is the No Dogbowls circuit with the night lighting trimmed for performance: the
stadium floodlights and the ambient fill are off, and every sponsor and sign light and the
track-edge sidelights stay on.

**Who it's for.** The time slider already decides day or night, so anyone who wants your night
lighting keeps it exactly as it is on Normal and No Dogbowls. Night Optimized is a second choice: for
PCs that struggle with the full stadium at night, and for people who like racing in a slightly darker
environment. Your vision stays the default.

**No model is changed.** Everything here is CSP config and one Lua track script. The full diff against
your original `ext_config.ini` is in [`diff/ext_config.variant.diff`](diff/ext_config.variant.diff).

> Written for you, the track's author, to look at. It contains your own `ext_config.ini`, modified,
> so the repo is private until you've seen it.

## What's on and what's off in Night Optimized

| group (your own label) | lights | Night Optimized | why |
|---|---:|:-:|---|
| Stadium Lights | 20 | **off** | 450 m range each; by far the most expensive |
| Ambient | 27 | **off** | 18 of them reach 200–300 m |
| Inner Stadium Lights | 5 | **off** | 300 m range |
| Track Stadium Lights | 6 | **off** | short (56 m); tried on, looked better off |
| The three lights that wouldn't bloody work | 3 + 1 series | **off** | your comment; the series was already `ACTIVE = 0` |
| Stadium Colour Lights | 1 series | **off** | "not working currently", per your comment |
| every sponsor and sign group | 43 | on | the look of the track at night |
| sidelights (`LIGHT_SERIES` on material `sidelights`) | 1 series | on | the lamps along the track edges |

The 56 glow entries (`MATERIAL_ADJUSTMENT`) are untouched on every layout, so bulbs and signs still look
lit — the floodlight heads glow on Night Optimized even though they cast no light. The per-light list
(position, range, spot, colour, config line) is in [`tools/INVENTORY.md`](tools/INVENTORY.md).

Why range is the thing to cut, from CSP's own lights documentation: *"amount of lights is not an issue
in itself, the main problem comes from how many pixels on a screen are affected by how many lights."*
([Tracks – Lights](https://github.com/ac-custom-shaders-patch/acc-extension-config/wiki/Tracks-%E2%80%93-Lights))

## How one track gets two different night lightings

CSP gives every layout of a track the same lights config. That was checked four ways before building
this (tested on CSP v0.2.11, AC 1.16.4):

1. An `extension/ext_config.ini` inside a layout folder is ignored — tested in game.
2. The only config filenames in CSP's `dwrite.dll` are `extension\ext_config.ini`, `ext_config.ini`
   and `ext_config.bin`: per track, never per layout.
3. Conditions can't read the layout: the inputs CSP's shipped conditions use are `SUN`, `TIME`,
   `YEAR_PROGRESS`, `FLAG_TYPE` and `ONE`.
4. Lua can read the layout and create lights, but can't switch off a config-defined light.

So it's inverted:

- **The config** carries only what's lit on every layout: your sponsors, signs and sidelights. The 61
  stadium, ambient and track-stadium lights are `ACTIVE=0` there, and the config gains one section:
  ```ini
  [SCRIPT_...]
  SCRIPT = stock_lights.lua
  ```
- **[`stock_lights.lua`](track/extension/stock_lights.lua)** rebuilds those 61 lights as `ac.LightSource`s
  on every layout **except `night_optimized`**, and only at night, using your config's own rule:
  `NIGHT_SHARP` is `INPUT = SUN` with the light on from a sun angle of 88°. It's generated straight from
  your original config by [`tools/make_variant_script.js`](tools/make_variant_script.js), so every value
  is yours: position, direction, colour × intensity, range, fade at/smooth, spot and sharpness, diffuse
  concentration, specular, single frequency, range gradient, volumetric, shadows and their settings,
  and the one line light (`LINE_FROM`/`LINE_TO`, `COLOR_FROM`/`COLOR_TO`). No config key was left
  without a Lua equivalent.

**Tested in game** on the Normal layout at night — the stadium looked like your stock night, and CSP's
log shows:

```
[stock_lights] loaded on layout "normal": 61 lights
[stock_lights] sunAngle=162.39 sunPitch=45.00 -> ON, 61 live
```

with no Lua errors. Night Optimized was tested with the same config body earlier: dark stadium,
sponsors and sidelights lit.

**The one difference from your stock night on Normal and No Dogbowls:** the Stadium Colour Lights series
can't be rebuilt in Lua (a series spawns per mesh, which only the config can do), so it's off on those
layouts too. Your comment marks it *"not working currently"*, so it should look the same.

This moves how your two stock layouts are lit from the config into a script. That's your call. If you
know a way CSP supports per-layout lights directly, that's the cleaner fix.

## Install

Requires Thunderhead Raceway v0.6 at `content/tracks/thunderhead_raceway`, and Node.js.

1. Copy your shipped `content/tracks/thunderhead_raceway/extension/ext_config.ini` to
   `tools/ext_config.ORIGINAL.ini` (it isn't redistributed here; its sha256 is checked, `469a1733…`).
2. Run:
   ```
   set AC_ROOT=C:\path\to\assettocorsa
   node tools/variant_install.js            (dry run: prints what it would do)
   node tools/variant_install.js --apply
   ```
   `AC_ROOT` is optional; without it the script uses `G:\SteamLibrary\steamapps\common\assettocorsa`.
3. In Content Manager press F5, then pick Thunderhead Raceway → **Night Optimized**.

It adds `night_optimized/` (a copy of `no_dogbowls/`), `models_night_optimized.ini`,
`ui/night_optimized/` and `extension/stock_lights.lua`, and replaces `extension/ext_config.ini`.
It refuses if the config isn't the shipped original or if anything it would add already exists.

**Undo:** `node tools/variant_install.js --undo --apply` restores your exact original config and removes
the four added items.

## Files

```
track/extension/ext_config.ini        the config: your original + 63 ACTIVE=0 + the SCRIPT section (sha256 44f8580b…)
track/extension/stock_lights.lua      the 61 stock-layout lights (sha256 76aa103a…)
track/ui/night_optimized/ui_track.json "Thunderhead Raceway (Night Optimized)"
diff/ext_config.variant.diff          exactly what changed in the config
tools/variant_install.js              install / --undo, dry run by default
tools/make_variant_script.js          regenerates stock_lights.lua from your original config
tools/apply.js, presets/              switch light groups on the original to try other mixes
tools/parse.js, inventory.js, INVENTORY.md  the light inventory and how it was made
```

Track, models and original lighting config: **Dogeish** (patreon.com/Dogeish).
Night Optimized: **solariz3d**.
