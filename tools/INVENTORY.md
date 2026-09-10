# Thunderhead Raceway — night light inventory

Source: `content/tracks/thunderhead_raceway/extension/ext_config.ini` (64,963 B, sha256 469a1733…). Original backed up beside this file as `ext_config.ORIGINAL.ini`.
Both layouts (no_dogbowls / normal) load the same stadium, decor and support models, so this list applies to both.

**107 light sources** (104 single lights + 3 series — a series spawns one light per mesh using that material, so its real count is set by the model, not the config) · **56 glow adjustments** (emissive materials: they make bulbs/panels look lit, they do not light the track).

## By group

| group (author's label) | lights | range ≥200 m | casts shadows | max range m | config lines |
|---|---:|---:|---:|---:|---|
| (unlabelled, top of file) | 1 | 0 | 0 | 40 | 28–28 |
| The three lights that wouldn't bloody work aaaaaaaaaaaaaa | 4 | 0 | 3 | 40 | 45–233 |
| White Thunderhead Sign | 1 | 1 | 1 | 200 | 657–657 |
| Stadium Colour Lights (author: not working) | 1 | 0 | 0 | 120 | 692–692 |
| ULUL Loop | 1 | 0 | 1 | 96.09 | 705–705 |
| ULUL Jump | 2 | 0 | 1 | 96.09 | 732–753 |
| ULUL Finish | 2 | 0 | 2 | 97.73 | 780–799 |
| Uniron | 2 | 0 | 2 | 150 | 823–844 |
| Infernal Oil | 9 | 2 | 9 | 200 | 872–1041 |
| Blue Bottles | 1 | 0 | 0 | 76.78 | 1066–1066 |
| The Racing Chronicle | 4 | 1 | 4 | 200 | 1093–1156 |
| Kasatoshi | 2 | 2 | 2 | 200 | 1191–1210 |
| Iodyne | 2 | 2 | 2 | 200 | 1236–1257 |
| Track Sponsor Signs | 12 | 10 | 12 | 200 | 1287–1518 |
| Track Stadium Lights | 6 | 0 | 6 | 56.47 | 1547–1652 |
| SIGNS Koritsuka | 2 | 0 | 2 | 108.15 | 1680–1701 |
| JDP | 1 | 0 | 1 | 90.46 | 1748–1748 |
| Stadium Lights | 20 | 20 | 20 | 450 | 1776–2175 |
| Bum Assassin | 2 | 1 | 2 | 200 | 2202–2223 |
| Inner Stadium Lights | 5 | 5 | 1 | 300 | 2251–2335 |
| Ambient | 27 | 18 | 10 | 300 | 2376–2904 |

## Every light

| id | line | group | type | position (x,y,z) / source | range m | spot ° | intensity | colour rgb | shadows | fade at m |
|---|---:|---|---|---|---:|---:|---:|---|:-:|---:|
| L001 | 28 | (unlabelled, top of file) | series | materials: sidelights | 40 | 90 | 20 | 0.95,0.70,0.50 |  | 700 |
| L002 | 45 | The three lights that wouldn't bloody work aaaaaaaaaaaaaa | single | -365.0, -2.5, -23.7 | 40 | 90 | 20 | 0.95,0.70,0.50 | 1 | 1200 |
| L003 | 65 | The three lights that wouldn't bloody work aaaaaaaaaaaaaa | single | -372.5, 23.9, -23.0 | 40 | 75 | 20 | 0.95,0.70,0.50 | 1 | 1200 |
| L004 | 86 | The three lights that wouldn't bloody work aaaaaaaaaaaaaa | single | -365.5, -0.2, -26.2 | 40 | 75 | 20 | 0.95,0.70,0.50 | 1 | 1200 |
| L005 | 233 | The three lights that wouldn't bloody work aaaaaaaaaaaaaa | series | materials: Stadium Floor Light |  | 0 | 30 | 1.00,0.85,0.70 |  | 2000 |
| L006 | 657 | White Thunderhead Sign | single | -330.7, 59.9, 532.6 | 200 | 193.86 | 10 | 1.00,1.00,1.00 | 1 | 500 |
| L007 | 692 | Stadium Colour Lights (author: not working) | series | materials: Colourlight | 120 | 190 | 0 | 1.00,0.00,0.00 | 0 | 2500 |
| L008 | 705 | ULUL Loop | single | 35.4, 44.2, 84.2 | 96.09 | 0 | 10 | 0.33,0.46,0.70 | 1 | 1000 |
| L009 | 732 | ULUL Jump | single | -379.4, 27.8, 397.8 | 96.09 | 0 | 20.66 | 0.33,0.46,0.70 | 0 | 500 |
| L010 | 753 | ULUL Jump | single | -385.7, 27.8, 390.1 | 48.06 | 0 | 8.02 | 0.33,0.46,0.70 | 1 | 1000 |
| L011 | 780 | ULUL Finish | single | 424.3, 31.2, -52.8 | 97.73 | 0 | 13.02 | 0.33,0.46,0.70 | 1 | 500 |
| L012 | 799 | ULUL Finish | single | 427.2, 31.6, -56.2 | 56.89 | 0 | 8.8 | 0.33,0.46,0.70 | 1 | 500 |
| L013 | 823 | Uniron | single | 103.4, 43.0, 420.9 | 82.22 | 157.09 | 13.09 | 0.75,0.31,0.36 | 1 | 500 |
| L014 | 844 | Uniron | single | -494.1, 26.3, 80.9 | 150 | 170.17 | 10 | 1.00,0.05,0.00 | 1 | 500 |
| L015 | 872 | Infernal Oil | single | 45.1, 35.9, 437.0 | 83.99 | 154.22 | 7.89 | 0.96,0.77,0.00 | 1 | 350 |
| L016 | 894 | Infernal Oil | single | -497.9, 24.2, 351.0 | 180.13 | 172.16 | 18.95 | 1.00,0.85,0.50 | 1 | 500 |
| L017 | 915 | Infernal Oil | single | -497.4, 31.2, 342.0 | 180.13 | 166.42 | 9.51 | 1.00,0.85,0.50 | 1 | 500 |
| L018 | 936 | Infernal Oil | single | 15.6, 28.7, 94.5 | 171.67 | 167.14 | 8.54 | 1.00,0.85,0.50 | 1 | 500 |
| L019 | 957 | Infernal Oil | single | 14.5, 29.7, 98.4 | 186.51 | 167.14 | 10.67 | 1.00,0.85,0.50 | 1 | 500 |
| L020 | 978 | Infernal Oil | single | 519.8, 34.3, -30.6 | 193.77 | 167.14 | 9.03 | 1.00,0.85,0.50 | 1 | 500 |
| L021 | 999 | Infernal Oil | single | 522.0, 34.5, -33.5 | 193.77 | 167.14 | 4.63 | 1.00,0.85,0.50 | 1 | 500 |
| L022 | 1020 | Infernal Oil | single | -62.3, 29.4, 248.0 | 200 | 178.79 | 0 | 0.80,0.64,0.29 | 1 | 500 |
| L023 | 1041 | Infernal Oil | single | -58.4, 33.4, 251.1 | 200 | 178.79 | 6.1 | 0.80,0.64,0.29 | 1 | 500 |
| L024 | 1066 | Blue Bottles | single | 62.4, 63.6, 546.5 | 76.78 | 0 | 5.24 | 0.58,0.65,0.93 | 0 | 210.6 |
| L025 | 1093 | The Racing Chronicle | single | -344.4, 28.7, -8.4 | 193.77 | 183.66 | 8.01 | 0.80,0.29,0.29 | 1 | 500 |
| L026 | 1114 | The Racing Chronicle | single | -270.1, 53.1, 363.3 | 193.77 | 183.66 | 5.45 | 0.80,0.29,0.29 | 1 | 500 |
| L027 | 1135 | The Racing Chronicle | single | -140.5, 41.1, 461.1 | 83.73 | 178.79 | 13.3 | 0.80,0.29,0.29 | 1 | 500 |
| L028 | 1156 | The Racing Chronicle | single | 299.6, 33.9, 47.0 | 200 | 173.6 | 8.23 | 1.00,0.05,0.00 | 1 | 1500 |
| L029 | 1191 | Kasatoshi | single | -79.7, 40.1, 313.4 | 200 | 0 | 4.19 | 0.80,0.39,0.29 | 1 | 500 |
| L030 | 1210 | Kasatoshi | single | -226.7, 22.7, 39.8 | 200 | 159.4 | 4.55 | 0.80,0.39,0.29 | 1 | 500 |
| L031 | 1236 | Iodyne | single | -341.3, 24.3, 25.8 | 200 | 159.4 | 9.75 | 0.80,0.29,0.57 | 1 | 500 |
| L032 | 1257 | Iodyne | single | -241.8, 51.0, 371.6 | 200 | 159.4 | 3.4 | 0.80,0.29,0.57 | 1 | 500 |
| L033 | 1287 | Track Sponsor Signs | single | -413.0, 37.7, -50.4 | 200 | 152.77 | 7 | 0.99,0.66,0.64 | 1 | 500 |
| L034 | 1308 | Track Sponsor Signs | single | -446.4, 38.5, -71.6 | 200 | 152.77 | 9.06 | 0.34,0.33,0.90 | 1 | 500 |
| L035 | 1329 | Track Sponsor Signs | single | -382.0, 37.1, 22.7 | 200 | 152.77 | 5.48 | 0.22,0.20,1.00 | 1 | 500 |
| L036 | 1350 | Track Sponsor Signs | single | -392.7, 37.4, -17.9 | 200 | 152.77 | 5.03 | 0.47,0.61,0.93 | 1 | 500 |
| L037 | 1371 | Track Sponsor Signs | single | -389.1, 38.3, 59.9 | 200 | 152.77 | 5.03 | 1.00,0.41,0.35 | 1 | 500 |
| L038 | 1392 | Track Sponsor Signs | single | -408.5, 39.0, 91.0 | 200 | 152.77 | 5.03 | 0.94,0.73,0.23 | 1 | 500 |
| L039 | 1413 | Track Sponsor Signs | single | -483.6, 46.6, 122.1 | 109.58 | 152.77 | 5.03 | 0.94,0.73,0.23 | 1 | 500 |
| L040 | 1434 | Track Sponsor Signs | single | -443.5, 42.9, 113.6 | 109.58 | 162.1 | 5.08 | 0.23,0.84,0.94 | 1 | 500 |
| L041 | 1455 | Track Sponsor Signs | single | -489.8, 38.1, -75.8 | 200 | 170.17 | 5.38 | 0.48,0.88,0.81 | 1 | 2000 |
| L042 | 1476 | Track Sponsor Signs | single | -549.3, 34.5, -28.3 | 200 | 170.17 | 5.38 | 0.48,0.56,0.88 | 1 | 2000 |
| L043 | 1497 | Track Sponsor Signs | single | -557.9, 32.6, 10.2 | 200 | 170.17 | 5.38 | 0.36,0.21,0.95 | 1 | 2000 |
| L044 | 1518 | Track Sponsor Signs | single | -521.5, 49.4, 117.2 | 200 | 170.17 | 5.98 | 0.15,0.28,0.74 | 1 | 2000 |
| L045 | 1547 | Track Stadium Lights | single | 78.4, 56.6, 350.6 | 56.47 | 79.53 | 9.99 | 0.96,0.88,0.76 | 1 | 500 |
| L046 | 1568 | Track Stadium Lights | single | 96.7, 56.8, 359.1 | 56.47 | 79.53 | 9.99 | 0.96,0.88,0.76 | 1 | 500 |
| L047 | 1589 | Track Stadium Lights | single | 120.4, 57.3, 369.4 | 56.47 | 79.53 | 9.99 | 0.96,0.88,0.76 | 1 | 500 |
| L048 | 1610 | Track Stadium Lights | single | 137.2, 57.5, 377.1 | 56.47 | 79.53 | 9.99 | 0.96,0.88,0.76 | 1 | 500 |
| L049 | 1631 | Track Stadium Lights | single | 161.1, 57.9, 387.9 | 56.47 | 79.53 | 9.99 | 0.96,0.88,0.76 | 1 | 500 |
| L050 | 1652 | Track Stadium Lights | single | 178.1, 58.2, 395.2 | 56.47 | 79.53 | 9.99 | 0.96,0.88,0.76 | 1 | 500 |
| L051 | 1680 | SIGNS Koritsuka | single | -354.8, 31.7, -41.1 | 58.15 | 170.17 | 9.74 | 0.80,0.48,0.88 | 1 | 500 |
| L052 | 1701 | SIGNS Koritsuka | single | -140.9, 48.4, 528.0 | 108.15 | 170.17 | 9.74 | 0.80,0.48,0.88 | 1 | 500 |
| L053 | 1748 | JDP | single | -371.4, 36.4, -69.2 | 90.46 | 170.17 | 14.38 | 0.48,0.88,0.57 | 1 | 500 |
| L054 | 1776 | Stadium Lights | single | 143.8, 130.4, 658.7 | 450 | 106.27 | 20 | 0.66,0.45,0.30 | 1 | 2000 |
| L055 | 1797 | Stadium Lights | single | 84.0, 131.7, 643.6 | 450 | 106.27 | 20 | 0.66,0.45,0.30 | 1 | 2000 |
| L056 | 1818 | Stadium Lights | single | -432.6, 128.7, 488.5 | 450 | 106.27 | 20 | 0.66,0.45,0.30 | 1 | 2000 |
| L057 | 1839 | Stadium Lights | single | -487.7, 133.0, 473.2 | 450 | 106.27 | 20 | 0.66,0.45,0.30 | 1 | 2000 |
| L058 | 1860 | Stadium Lights | single | -642.0, 108.1, 263.1 | 450 | 106.27 | 20 | 0.66,0.45,0.30 | 1 | 2000 |
| L059 | 1881 | Stadium Lights | single | -624.3, 107.6, 215.0 | 450 | 106.27 | 20 | 0.66,0.45,0.30 | 1 | 2000 |
| L060 | 1902 | Stadium Lights | single | -297.0, 118.6, -80.7 | 450 | 106.27 | 20 | 0.66,0.45,0.30 | 1 | 2000 |
| L061 | 1923 | Stadium Lights | single | -211.3, 117.5, -82.9 | 450 | 106.27 | 20 | 0.66,0.45,0.30 | 1 | 2000 |
| L062 | 1944 | Stadium Lights | single | -126.7, 117.6, -83.4 | 450 | 106.27 | 20 | 0.66,0.45,0.30 | 1 | 2000 |
| L063 | 1965 | Stadium Lights | single | 376.3, 118.3, -83.5 | 450 | 106.27 | 20 | 0.66,0.45,0.30 | 1 | 2000 |
| L064 | 1986 | Stadium Lights | single | 461.2, 117.7, -83.7 | 450 | 106.27 | 20 | 0.66,0.45,0.30 | 1 | 2000 |
| L065 | 2007 | Stadium Lights | single | 611.3, 133.1, -53.6 | 450 | 106.27 | 20 | 0.66,0.45,0.30 | 1 | 2000 |
| L066 | 2028 | Stadium Lights | single | 598.8, 97.8, 78.2 | 450 | 106.27 | 20 | 0.66,0.45,0.30 | 1 | 2000 |
| L067 | 2049 | Stadium Lights | single | 569.9, 97.4, 137.9 | 450 | 106.27 | 20 | 0.66,0.45,0.30 | 1 | 2000 |
| L068 | 2070 | Stadium Lights | single | 542.9, 96.7, 196.0 | 450 | 106.27 | 20 | 0.66,0.45,0.30 | 1 | 2000 |
| L069 | 2091 | Stadium Lights | single | 516.5, 96.4, 254.8 | 450 | 106.27 | 20 | 0.66,0.45,0.30 | 1 | 2000 |
| L070 | 2112 | Stadium Lights | single | 487.9, 96.9, 311.7 | 450 | 106.27 | 20 | 0.66,0.45,0.30 | 1 | 2000 |
| L071 | 2133 | Stadium Lights | single | 461.5, 97.1, 369.6 | 450 | 106.27 | 20 | 0.66,0.45,0.30 | 1 | 2000 |
| L072 | 2154 | Stadium Lights | single | 434.9, 97.1, 428.0 | 450 | 106.27 | 20 | 0.66,0.45,0.30 | 1 | 2000 |
| L073 | 2175 | Stadium Lights | single | 407.4, 97.3, 486.4 | 450 | 106.27 | 20 | 0.66,0.45,0.30 | 1 | 2000 |
| L074 | 2202 | Bum Assassin | single | -347.3, 20.6, 55.3 | 102.72 | 173.6 | 5.72 | 1.00,0.23,0.28 | 1 | 1500 |
| L075 | 2223 | Bum Assassin | single | -20.0, 43.8, 309.5 | 200 | 173.6 | 6.7 | 1.00,0.23,0.28 | 1 | 1500 |
| L076 | 2251 | Inner Stadium Lights | single | 233.7, 73.5, 366.1 | 300 | 80.98 | 7.48 | 1.00,0.62,0.60 | 0 | 1500 |
| L077 | 2272 | Inner Stadium Lights | single | 290.8, 74.1, 286.7 | 300 | 80.98 | 0 | 1.00,0.62,0.60 | 1 | 1500 |
| L078 | 2293 | Inner Stadium Lights | single | 432.7, 72.1, 182.6 | 300 | 80.98 | 7.59 | 1.00,0.62,0.60 | 0 | 1500 |
| L079 | 2314 | Inner Stadium Lights | single | -175.6, 81.0, 397.9 | 300 | 80.98 | 7.67 | 1.00,0.62,0.60 | 0 | 1500 |
| L080 | 2335 | Inner Stadium Lights | single | -303.0, 79.4, 361.9 | 300 | 117.03 | 1.12 | 1.00,0.62,0.60 | 0 | 1500 |
| L081 | 2376 | Ambient | single | -59.6, 44.1, 525.7 | 200 | 0 | 3.35 | 0.89,0.68,0.60 | 0 | 500 |
| L082 | 2395 | Ambient | single | -146.5, 31.9, 498.7 | 200 | 0 | 1.5 | 0.89,0.68,0.60 | 0 | 500 |
| L083 | 2414 | Ambient | single | -280.1, 64.1, 510.1 | 200 | 0 | 2.24 | 0.89,0.68,0.60 | 0 | 500 |
| L084 | 2433 | Ambient | single | -22.4, 40.0, 377.9 | 200 | 0 | 1.98 | 0.89,0.68,0.60 | 0 | 500 |
| L085 | 2454 | Ambient | single | 0.0 | 70 | 66.48 |  | 0.00 | 0 | 1000 |
| L086 | 2469 | Ambient | single | -78.0, 56.4, 570.7 | 300 | 176.48 | 6.63 | 1.00,0.64,0.50 | 0 | 1000 |
| L087 | 2490 | Ambient | single | -279.5, 21.1, 528.1 | 300 | 176.48 | 6.75 | 1.00,0.64,0.50 | 0 | 1000 |
| L088 | 2511 | Ambient | single | -280.4, 90.8, 529.9 | 300 | 176.48 | 6.75 | 1.00,0.64,0.50 | 0 | 1000 |
| L089 | 2532 | Ambient | single | -325.3, 38.9, -38.7 | 300 | 108.98 | 5.51 | 1.00,0.64,0.50 | 0 | 1000 |
| L090 | 2556 | Ambient | single | -530.0, 102.2, -30.5 | 300 | 210.93 | 25 | 1.00,0.31,0.00 | 0 | 2000 |
| L091 | 2577 | Ambient | single | -617.9, 42.1, 350.0 | 300 | 257.04 | 7.11 | 1.00,0.52,0.28 | 0 | 2000 |
| L092 | 2598 | Ambient | single | -589.3, 53.9, 251.7 | 300 | 177.34 | 2.83 | 1.00,0.52,0.28 | 0 | 2000 |
| L093 | 2619 | Ambient | single | 228.2, 61.8, 597.4 | 300 | 215.39 | 5.54 | 1.00,0.47,0.33 | 0 | 2000 |
| L094 | 2640 | Ambient | single | 446.7, 32.7, 285.2 | 300 | 175.9 | 5.54 | 1.00,0.47,0.33 | 0 | 2000 |
| L095 | 2661 | Ambient | single | 558.4, 74.1, -16.1 | 300 | 226.87 | 9.45 | 1.00,0.57,0.45 | 0 | 2000 |
| L096 | 2682 | Ambient | single | -40.6, 33.7, -55.3 | 300 | 179.48 | 5.11 | 1.00,0.57,0.45 | 0 | 2000 |
| L097 | 2703 | Ambient | single | 182.6, 38.4, -61.1 | 300 | 179.48 | 5.11 | 1.00,0.57,0.45 | 0 | 2000 |
| L098 | 2727 | Ambient | single | -478.2, 75.8, 5.7 | 200 | 0 | 5 | 1.00,0.65,0.54 | 1 | 1900 |
| L099 | 2746 | Ambient | single | -363.7, 75.2, 452.3 | 100 | 0 | 4.63 | 1.00,0.65,0.54 | 1 | 1900 |
| L100 | 2765 | Ambient | single | -185.8, 80.7, 502.2 | 100 | 0 | 4.63 | 1.00,0.65,0.54 | 1 | 1900 |
| L101 | 2784 | Ambient | single | -271.6, 86.5, 486.7 | 150 | 0 | 4.63 | 1.00,0.65,0.54 | 1 | 1900 |
| L102 | 2803 | Ambient | single | -119.8, 92.0, 446.4 | 119.67 | 0 | 4.63 | 1.00,0.65,0.54 | 1 | 1900 |
| L103 | 2822 | Ambient | single | -434.2, 49.6, 284.1 | 143.5 | 104.67 | 5.54 | 1.00,0.65,0.54 | 1 | 1900 |
| L104 | 2843 | Ambient | single | -278.7, 103.7, 104.1 | 161.29 | 75.24 | 5.54 | 1.00,0.65,0.54 | 1 | 1900 |
| L105 | 2864 | Ambient | single | 145.3, 73.2, 182.0 | 88.11 | 126.94 | 3.98 | 0.98,0.53,0.41 | 1 | 1500 |
| L106 | 2885 | Ambient | single | -7.4, 56.5, 126.9 | 200 | 0 | 1.67 | 0.98,0.53,0.41 | 1 | 1500 |
| L107 | 2904 | Ambient | single | 34.8, 125.1, 494.3 | 132.43 | 126.94 | 2.16 | 0.89,0.38,0.23 | 1 | 1500 |

## Glow adjustments (emissive — cosmetic, cheap)

| line | label | materials / meshes | key | value | condition |
|---|---|---|---|---|---|
| 113 |  | Colourlight |  |  | NIGHT_SHARP |
| 122 |  | sidelights |  |  | NIGHT_SHARP |
| 132 |  | Thunderhead Logo Outline, Thunderhead Start Side Frame.004 |  |  | SignBlink |
| 153 |  | Thunderhead Jump Side, |  |  | SignBlink |
| 174 |  | Thunderhead LED ORANGE |  |  | SignBlink |
| 195 |  | Thunderhead LED RED small |  |  | NIGHT_SHARP |
| 204 |  | Thunderhead White |  |  | NIGHT_SHARP |
| 215 |  | Tracklight |  |  | NIGHT_SHARP |
| 224 |  | Stadium Floor Light |  |  | NIGHT_SHARP |
| 242 |  | Screen, Media Wall Backdrop |  |  | NIGHT_SHARP |
| 251 |  | Ulul Red?, Redlight, Bendy Red |  |  | NIGHT_SHARP |
| 260 |  | Ulul Blue?, Bluelight |  |  | NIGHT_SHARP |
| 269 |  | Ulul White?, Thunderhead HeadStart Bar Logo LED WHITE |  |  | NIGHT_SHARP |
| 278 |  | Bottleneon |  |  | NIGHT_SHARP |
| 287 |  | Bottledull |  |  | NIGHT_SHARP |
| 296 |  | Bottlelabel |  |  | NIGHT_SHARP |
| 306 |  | Thunderhead HeadStart Bar Logo LED BLUE.001 |  |  | NIGHT_SHARP |
| 315 |  | Thunderhead HeadStart Bar Logo LED ORANGE |  |  | NIGHT_SHARP |
| 324 |  | Stadium Light Bulbs, Center Stadium Light Bulb |  |  | NIGHT_SHARP |
| 336 |  | Sponsorbarrier, Sponsorsign, Cash, MTB, Sprite, Carnerd, Carnerd2, Deejay, Eldercub, Funbill, JeffersonC, Khun Joe, SOL, Axel, 74, Render, Ultra, Levia, Marcabell, Deatryx, Engebreston, Kartatouille |  |  | NIGHT_SHARP |
| 345 |  | Paxoi |  |  | NIGHT_SHARP |
| 354 |  | Kasatashi Mobile LED Light |  |  | NIGHT_SHARP |
| 363 |  | Iodyne Pink |  |  | NIGHT_SHARP |
| 372 |  | Racing Chronicle LED Light |  |  | NIGHT_SHARP |
| 381 |  | Strongman White Outline |  |  | NIGHT_SHARP |
| 390 |  | Strongman Pink |  |  | NIGHT_SHARP |
| 399 |  | strongman Blue |  |  | NIGHT_SHARP |
| 408 |  | Infernal Red |  |  | NIGHT_SHARP |
| 417 |  | Infernal Yellow |  |  | NIGHT_SHARP |
| 426 |  | Uniron Red |  |  | NIGHT_SHARP |
| 435 |  | Kenobe Red |  |  | NIGHT_SHARP |
| 444 |  | Kenobe Blue |  |  | NIGHT_SHARP |
| 453 |  | Shaolin Cowboy White 1, Shaolin Cowboy White 2, Shaolin Cowboy White |  |  | NIGHT_SHARP |
| 462 |  | Shaolin Cowboy Yellow, Shaolin Cowboy Scarf Yellow 1, Shaolin Cowboy Scarf Yellow 2 |  |  | NIGHT_SHARP |
| 471 |  | Shaolin Cowboy Green |  |  | NIGHT_SHARP |
| 480 |  | Shaolin Cowboy Red 1, Shaolin Cowboy Red 2 |  |  | NIGHT_SHARP |
| 489 |  | Shaolin Cowboy Orange 1, Shaolin Cowboy Orange 2 |  |  | NIGHT_SHARP |
| 498 |  | Start/End Light RED |  |  | NIGHT_SHARP |
| 507 |  | City, City.2 |  |  | NIGHT_SHARP |
| 516 |  | City haze |  |  | NIGHT_SHARP |
| 525 |  | Koritsuka |  |  | NIGHT_SHARP |
| 534 |  | Koritsuka Star |  |  | NIGHT_SHARP |
| 543 |  | JDP |  |  | NIGHT_SHARP |
| 552 |  | Bum Red |  |  | NIGHT_SHARP |
| 561 |  | Bum White |  |  | NIGHT_SHARP |
| 570 |  | Lavoie Studios Blue |  |  | NIGHT_SHARP |
| 579 |  | Dolphin Blue |  |  | NIGHT_SHARP |
| 588 |  | Dolphin White |  |  | NIGHT_SHARP |
| 597 |  | Cash Blue |  |  | NIGHT_SHARP |
| 606 |  | Cash White |  |  | NIGHT_SHARP |
| 615 |  | Kasatoshi Green |  |  | NIGHT_SHARP |
| 624 |  | Red Industrial Light |  |  | NIGHT_SHARP |
| 633 |  | Lamp |  |  | NIGHT_SHARP |
| 642 |  | Seat_Red, Seat_Blue |  |  | NIGHT_SHARP |
| 2362 | Cowboy Animation | Shaolin Cowboy Blue 2, Shaolin Cowboy Blue 1.001 |  |  | NIGHT_SHARP |
| 2961 |  | TVScreen |  |  | NIGHT_SHARP |
