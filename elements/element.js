const atomicNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118];
const neutronNumber = [
    0, 2, 3, 5, 5, 6, 7, 8, 10, 10, 12, 12, 14, 14, 15, 16, 18, 20, 20, 22, 22, 24, 25, 26, 28, 28, 30, 32, 32, 34, 36, 36, 38, 40, 40, 42, 44, 44, 46, 48, 48, 50, 52, 52, 54, 56, 56, 58, 60, 60, 62, 64, 64, 66, 68, 68, 70, 72, 72, 74, 76, 76, 78, 80, 80, 82, 84, 84, 86, 88, 88, 90, 92, 92, 94, 96, 96, 98, 100, 100, 102, 104, 104, 106, 108, 108, 110, 112, 112, 114, 116, 116, 118, 120, 120, 122, 124, 124, 126, 128, 128, 130, 132, 132, 134, 136, 136, 138, 140, 140, 142, 144, 144, 146, 148, 148, 150, 152, 152, 154, 156, 156, 158, 160, 160, 162, 164, 164, 166, 168, 168, 170, 172, 172,
]
const percentInEarthsCrust = [
    0.14,
    8e-7,
    0.002,
    2.8e-4,
    0.001,
    0.02,
    0.0019,
    46.1,
    0.0585,
    5e-7,
    2.36,
    2.33,
    8.23,
    28.3,
    0.105,
    0.035,
    0.0145,
    3.55e-4,
    2.09,
    4.15,
    0.0022,
    0.565,
    0.012,
    0.0102,
    0.095,
    5.63,
    0.0025,
    0.0084,
    0.006,
    0.007,
    0.0019,
    1.5e-4,
    1.8e-4,
    5e-6,
    2.4e-4,
    1e-8,
    0.009,
    0.037,
    0.0033,
    0.0165,
    0.002,
    0.00012,
    undefined,
    1e-7,
    7e-8,
    1.5e-6,
    7.5e-6,
    1.5e-5,
    2.5e-5,
    0.00023,
    2e-5,
    1e-7,
    4.5e-5,
    3e-9,
    0.0003,
    0.0425,
    0.0039,
    0.00665,
    0.00092,
    0.00415,
    undefined,
    6e-4,
    2e-4,
    6.2e-4,
    1.2e-4,
    5.2e-4,
    1.3e-4,
    3.5e-4,
    5.2e-5,
    3.2e-5,
    8e-5,
    3e-4,
    2e-4,
    1.25e-4,
    7e-7,
    1.5e-7,
    1e-7,
    5e-7,
    4e-7,
    8.5e-6,
    8.5e-5,
    0.0014,
    8.5e-7,
    2e-14,
    undefined,
    undefined,
    undefined,
    9e-11,
    6e-14,
    9.6e-4,
    1.4e-10,
    2.7e-4,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined, 
];
const YearFound = [
    1766,
    1868,
    1817,
    1798,
    1808,
    3750, // BCE
    1772,
    1771,
    1810,
    1898,
    1807,
    1755,
    1825,
    1823,
    1669,
    2000, // BCE
    1774,
    1894,
    1807,
    1808,
    1879,
    1791,
    1801,
    1794,
    1774,
    5000, // BCE
    1735,
    1751,
    9000, // BCE
    1000, // BCE
    1875,
    1886,
    815,
    1817,
    1826,
    1898,
    1861,
    1787,
    1794,
    1789,
    1801,
    1778,
    1937,
    1844,
    1804,
    1803,
    5000, // BCE
    1817,
    1863,
    3500, // BCE
    815, // BCE
    1782,
    1811,
    1898,
    1860,
    1774,
    1839,
    1803,
    1885,
    1885,
    1942,
    1879,
    1896,
    1886,
    1843,
    1886,
    1878,
    1843,
    1879,
    1878,
    1906,
    1922,
    1802,
    1781,
    1908,
    1803,
    1803,
    1735,
    6000, // BCE
    1500, // BCE
    1861,
    7000, // BCE
    1000,
    1898,
    1940,
    1899,
    1939,
    1898,
    1902,
    1829,
    1913,
    1789,
    1940,
    1940,
    1944,
    1944,
    1949,
    1950,
    1952,
    1952,
    1955,
    1965,
    1961,
    1969,
    1970,
    1974,
    1981,
    1984,
    1982,
    1994,
    1994,
    1996,
    2003,
    1998,
    2003,
    2000,
    2010,
    2002
];
const Discoverer = [
    "Henry Cavendish",
    "Pierre Janssen and Norman Lockyer",
    "Johan August Arfwedson",
    "Nicolas-Louis Vauquelin",
    "Joseph Louis Gay-Lussac",
    "Louis Jacques Thenard",
    "Humphry Davy",
    "Antoine Laurent de Lavoisier",
    "Daniel Rutherford",
    "Michal Sedziwoj",
    "Joseph Priestley",
    "Carl Wilhelm Scheele",
    "Ferdinand Frederic Henri Moissan",
    "Sir William Ramsay",
    "Morris William Travers",
    "Humphry Davy",
    "Joseph Black",
    "Humphry Davy",
    "Hans Christian Orsted",
    "Jons Jakob Berzelius",
    "Hennig Brand",
    "N/A",
    "Carl Wilhelm Scheele",
    "Sir William Ramsay",
    "Humphry Davy",
    "Humphry Davy",
    "Lars Frednik Nilson",
    "William Gregor",
    "Andres Manuel del Rio",
    "Louis-Nicolas Vauquelin",
    "Johan Gottlieb Gahn and Ignatius Gottfried Kaim",
    "N/A",
    "Georg Brandt",
    "Axel Frederic von Cronstedt",
    "N/A",
    "Andreas Sigismund Marggraf",
    "Paul Emile Lecoq de Boisbaudran",
    "Clemens Alexander Winkler",
    "Albertus Magnus",
    "Jons Jakob Berzelius",
    "Antoine-Jerome Balard and Karl Jakob Leuwich",
    "Sir William Ramsay and Morris William Travers",
    "Robert Willhelm Bunsen and Gustav Robert Kirchhoff",
    "Adair Crawford",
    "Johan Gadolin",
    "Martin Heinrich Klaproth",
    "Charles Hatchett",
    "Carl Wilhelm Scheele",
    "Emilio Gino Segre and Carlo Perrier",
    "Karl Ernst Claus",
    "William Hyde Wollaston",
    "William Hyde Wollaston",
    "N/A",
    "Friedrich Stromeyer",
    "Ferdinand Reich",
    "N/A",
    "Basil Valentine",
    "N/A",
    "Bernard Courtois",
    "William Ramsey and Morris William Travers",
    "Robert Willhelm Bunsen and Gustav Robert Kirchhoff",
    "Humphry Davy",
    "Carl Gustaf Mosander",
    "N/A",
    "Andre-Louis Debierne",
    "Carl Auer von Welsbach",
    "N/A",
    "Paul Emile Lecoq de Boisbaudran",
    "Eugene-Anatole Demarcay",
    "Jean Charles Galissard de Marignac",
    "Carl Gustaf Mosander",
    "Paul Emile Lecoq de Boisbaudran",
    "Per Teodor Cleve and Auguste Honore Charlois",
    "Carl Gustaf Mosander",
    "N/A",
    "Jean Charles Galissard de Marignac",
    "N/A",
    "N/A",
    "Anders Gustaf Ekeberg",
    "Carl Wilhelm Scheele",
    "N/A",
    "Smithson Tennant",
    "Smithson Tennant",
    "Antonio de Ulloa",
    "N/A",
    "N/A",
    "William Crookes",
    "Marie Curie",
    "Claude Francois Geoffrey",
    "Pierre Curie and Marie Sklodowska Curie",
    "Paul Emile Lecoq de Boisbaudran",
    "Friedrich Ernst Dorn",
    "Marguerite Perey",
    "Pierre Curie and Marie Sklodowska Curie",
    "Andre-Louis Debierne",
    "Jons Jakob Berzelius",
    "Otto Hahn, Lise Meitner, and Frederick Soddy",
    "Martin Heinrich Klaproth",
    "N/A",
    "Glenn Theodore Seaborg",
    "Glenn Theodore Seaborg",
    "Glenn Theodore Seaborg",
    "Glenn Theodore Seaborg",
    "Glenn Theodore Seaborg",
    "Albert Ghiorso",
    "Glenn Theodore Seaborg",
    "Glenn Theodore Seaborg",
    "Glenn Theodore Seaborg",
    "Albert Ghiorso",
    "Georgiy Flerov",
    "Georgiy Flerov",
    "Georgiy Flerov",
    "Peter Armbuster, Gottfried Munzenber ",
    "GSI (Helmholtzzentrum fur Schwerionenforschung)",
    "GSI (Helmholtzzentrum fur Schwerionenforschung)",
    "GSI (Helmholtzzentrum fur Schwerionenforschung)",
    "GSI (Helmholtzzentrum fur Schwerionenforschung)",
    "GSI (Helmholtzzentrum fur Schwerionenforschung)",
    "RIKEN ",
    "Joint Institute for Nuclear Research (JINR)",
    "Joint Institute for Nuclear Research (JINR), Lawrence Livermore National Laboratory (LLNL) ",
    "Joint Institute for Nuclear Research (JINR), Lawrence Livermore National Laboratory (LLNL)",
    "Joint Institute for Nuclear Research (JINR)",
    "Joint Institute for Nuclear Research (JINR)",

];
const MeltingPoints = [
  -259.16,
  -273.15,
  180.5,
  1287,
  2076,
  3527,
  -210,
  -218.79,
  -219.67,
  -248.59,
  97.794,
  650,
  660.32,
  1414,
  44.15,
  112.8,
  -101.5,
  -189.34,
  63.5,
  842,
  1541,
  1668,
  1910,
  1907,
  1246,
  1538,
  1495,
  1455,
  1084.62,
  419.53,
  29.7646,
  938.25,
  817,
  221,
  -7.3,
  -157.37,
  39.3,
  777,
  1526,
  1855,
  2477,
  2623,
  2157,
  2334,
  1964,
  1554.9,
  961.78,
  321.07,
  156.6,
  231.93,
  630.63,
  449.51,
  113.7,
  -111.75,
  28.5,
  727,
  920,
  795,
  935,
  1024,
  1042,
  1072,
  826,
  1312,
  1356,
  1407,
  1461,
  1529,
  1545,
  824,
  1652,
  2233,
  3017,
  3422,
  3186,
  3033,
  2446,
  1768.3,
  1064.18,
  -38.83,
  304,
  327.46,
  271.5,
  254,
  302,
  -71,
  27,
  700,
  1050,
  1842,
  1568,
  1132.2,
  644,
  639.4,
  1176,
  1340,
  986,
  900,
  860,
  1527,
  827,
  827,
  1627,
  2100,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
];
const BoilingPoints = [
    25,     // H
    5825,   // He
    2526.9, // Li
    2747,   // Be
    4200,   // B
    6230,   // C
    822,    // N
    87.86,  // O
    58.59,  // F
    184.3,  // Ne
    1169,   // Na
    2747,   // Mg
    4428,   // Al
    3927,   // Si
    4098,   // P
    554,    // S
    85.05,  // Cl
    20.28,  // Ar
    1032,   // K
    1340,   // Ca
    3074,   // Sc
    3269,   // Ti
    4500,   // V
    3422,   // Cr
    2927,   // Mn
    3023,   // Fe
    3123,   // Co
    3200,   // Ni
    3000,   // Cu
    2567,   // Zn
    2600,   // Ga
    2868,   // Ge
    1950,   // As
    1430,   // Se
    3402,   // Br
    4603,   // Kr
    5458,   // Rb
    5930,   // Sr
    5596,   // Y
    5012,   // Zr
    4130,   // Nb
    3825,   // Mo
    2970,   // Tc
    356.73, // Ru
    1473,   // Rh
    1749,   // Pd
    1564,   // Ag
    962,    // Cd
    337,    // In
    -61.7,  // Sn
    620,    // Sb
    1737,   // Te
    3198,   // I
    4788,   // Xe
    4027,   // Cs
    4131,   // Ba
    4000,   // La
    3228,   // Ce
    2607,   // Pr
    3110,   // Nd
    2627,   // Pm
    1472,   // Sm
    996,    // Eu
    undefined,   // Gd
    undefined,   // Tb
    undefined,   // Dy
    undefined,   // Ho
    undefined,   // Er
    undefined,   // Tm
    undefined,   // Yb
    undefined,   // Lu
    undefined,   // Ta
    undefined,   // W
    undefined,   // Re
    undefined,   // Os
    undefined,   // Ir
    undefined,   // Pt
    undefined,   // Au
    undefined,   // Hg
    undefined,   // Tl
    undefined,   // Pb
    undefined,   // Bi
    undefined,   // Po
    undefined,   // At
    undefined,   // Rn
    undefined,   // Fr
    undefined,   // Ra
    undefined,   // Ac
    undefined,   // Th
    undefined,   // Pa
    undefined,   // U
    undefined,   // Np
    undefined,   // Pu
    undefined,   // Am
    undefined,   // Cm
    undefined,   // Bk
    undefined,   // Cf
    undefined,   // Es
    undefined,   // Fm
    undefined,   // Md
    undefined,   // No
    undefined,   // Lr
    undefined,   // Rf
    undefined,   // Db
    undefined,   // Sg
    undefined,   // Bh
    undefined,   // Hs
    undefined,   // Mt
    undefined,   // Ds
    undefined,   // Rg
    undefined,   // Cn
    undefined,   // Nh
    undefined,   // Fl
    undefined,   // Mc
    undefined,   // Lv
    undefined,   // Ts
    undefined,   // Og
];  
const conditions = [
    'Gas',
    'Gas',
    'Solid', 'Solid', 'Solid', 'Solid', 'Solid',
    'Gas', 'Gas', 'Gas', 'Gas',
    'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid',
    'Gas', 'Gas',
    'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid', 'Solid',
];
const density = [ 0.00008988, 0.0001786, 0.534, 1.85, 2.34, 2.267, 0.001251, 0.001429, 0.0017, 0.0009002, 0.968, 1.738, 2.7, 2.33, 1.823, 2.07, 0.0032, 0.001784, 0.89, 1.55, 2.985, 4.506, 6.11, 7.15, 7.21, 7.86, 8.9, 8.908, 8.96, 7.14, 5.91, 5.323, 5.727, 4.81, 3.1028, 0.003749, 1.532, 2.64, 4.472, 6.52, 8.57, 10.28, 11, 12.45, 12.41, 12.023, 10.49, 8.65, 7.31, 7.265, 6.697, 6.24, 4.933, 0.003749, 1.93, 3.51, 6.162, 6.77, 6.77, 7.01, 7.26, 7.52, 5.244, 7.9, 8.23, 8.54, 8.79, 9.066, 9.32, 6.9, 9.841, 13.31, 16.69, 19.25, 21.02, 22.59, 22.56, 21.45, 19.3, 13.534, 11.85, 11.34, 9.78, 9.196, 7, 0.00973, 1.87, 5.5, 10, 11.7, 15.37, 19.1, 20.2, 19.816, 12, 13.51, 13.25, 15.1, 8.84, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined ];
const protonNumber = atomicNumber;
const electronNumber = protonNumber;
const atomicMass = [    1.00794, 4.002602, 6.939, 9.012182, 10.811, 12.0107, 14.0067, 15.9994, 18.9984032, 20.1797, 22.98976928, 24.305, 26.9815386, 28.0855, 30.973762, 32.065, 35.453, 39.9483, 39.0983, 40.078, 44.955912, 47.867, 50.9415, 51.9961, 54.938045, 55.847, 58.933195, 58.6934, 63.546, 65.409, 69.723, 72.59, 74.9216, 78.971, 79.904, 83.803, 85.4678, 87.62, 91.224, 92.90638, 95.94, 98, 101.07, 102.9055, 106.42, 107.8682, 112.414, 114.818, 118.71, 121.76, 127.6, 126.90447, 131.293, 132.9054519, 137.327, 138.90547, 140.116, 140.90765, 144.242, 145, 150.36, 151.964, 157.25, 158.92534, 161.359, 162.500, 164.93032, 167.259, 168.93421, 173.054, 174.9668, 178.49, 180.94788, 183.84, 186.207, 190.23, 192.217, 195.084, 196.966569, 200.592, 204.3833, 207.2, 208.9804, 210, 212, 214, 217, 220, 223, 226, 227, 231, 232.03806, 237, 238.02891, 243, 244, 247, 249, 252, 254, 257, 259, 262, 264, 267, 268, 271, 272, 274, 276, 278, 281, 282, 285, 286, 289, 291, 293, 294]
const valenceNumber = [
    "I	",
    "0	",
    "I	",
    "II	",
    "III	",
    "II, IV	",
    "I, II, III, IV, V	",
    "II	",
    "I	",
    "0	",
    "I	",
    "II	",
    "I, III	",
    "II, IV	",
    "III, V	",
    "II, IV, VI	",
    "I, II, III, IV, V, VII	",
    "0	",
    "I	",
    "II	",
    "III	",
    "II, III, IV	",
    "II, III, IV, V	",
    "II, III, VI	",
    "II, III, IV, VI, VII	",
    "II, III, IV, VI	",
    "II, III	",
    "II, III	",
    "I, II	",
    "II	",
    "II, III	",
    "II, IV	",
    "II, III, V	",
    "II, IV, VI	",
    "I, III, IV, V	",
    "0	",
    "I	",
    "II	",
    "III	",
    "II, III, IV	",
    "II, III, IV, V	",
    "II, III, IV, V, VI	",
    "VI	",
    "II, III, IV, VI, VII, VIII	",
    "II, III, IV, VI	",
    "II, IV, VI	",
    "I, II, III	",
    "I, II	",
    "I, II, III	",
    "II, IV	",
    "III, IV, V	",
    "II, IV, VI	",
    "I, III, IV, V, VII	",
    "0	",
    "I	",
    "II	",
    "III	",
    "III, IV	",
    "III	",
    "III, IV	",
    "III	",
    "II, III	",
    "II, III	",
    "III	",
    "III, IV	",
    "III	",
    "III	",
    "III	",
    "II, III	",
    "II, III	",
    "III	",
    "IV	",
    "III, IV, V	",
    "II, III, IV, V, VI	",
    "I, II, III, IV, V, VI. VII	",
    "II, III, IV, VI, VIII	",
    "I, II, III, IV, VI	",
    "II, IV	",
    "I, II, III	",
    "I, II	",
    "I, II, III	",
    "II, IV	",
    "II, III, IV, V	",
    "II, IV, VI	",
    "N/A	",
    "0	",
    "N/A	",
    "II	",
    "III	",
    "IV	",
    "V	",
    "II, III, IV, V, VI	",
    "N/A	",
    "N/A	",
    "N/A	",
    "N/A	",
    "N/A	",
    "N/A	",
    "N/A	",
    "N/A	",
    "N/A	",
    "N/A	",
    "N/A	",
    "N/A	",
    "N/A	",
    "N/A	",
    "N/A	",
    "N/A	",
    "N/A	",
    "N/A	",
    "N/A	",
    "N/A	",
    "N/A	",
    "N/A	",
    "N/A	",
    "N/A	",
    "N/A	",
    "N/A	",
    
];
const period = [1,1, 2,2,2,2,2,2,2,2, 3,3,,3,3,3,3,3, 4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4, 5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5, 6,6,6,"N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A",6,6,6,6,6,6,6,6,6,6,6,6,6,6,6, 7,7,7,"N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A",,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7, "N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A","N/A",];
const group = ["IA", "VIIIA", "IA", "IIA", "IIIA", "IVA", "VA", "VIA", "VIIA", "VIIIA", "IA", "IIA", "IIIA", "IVA", "VA", "VIA", "VIIA", "VIIIA", "IA", "IIA", "IIIB", "IVB", "VB", "VIB", "VIIB", "VIIIB", "VIIIB", "VIIIB", "IB", "IIB", "IIIA", "IVA", "VA", "VIA", "VIIA", "VIIIA", "IA", "IIA", "IIIB", "IVB", "VB", "VIB", "VIIB", "VIIIB", "VIIIB", "VIIIB", "IB", "IIB", "IIIA", "IVA", "VA", "VIA", "VIIA", "VIIIA", "IA", "IIA", "IIIB", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "IVB", "VB", "VIB", "VIIB", "VIIIB", "VIIIB", "VIIIB", "IB", "IIB", "IIIA", "IVA", "VA", "VIA", "VIIA", "VIIIA", "IA", "IIA", "IIIB", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "IVB", "VB", "VIB", "VIIB", "VIIIB", "VIIIB", "VIIIB", "IB", "IIB", "IIIA", "IVA", "VA", "VIA", "VIIA", "VIIIA"];
const electronConfiguration = ["1s¹",	
    "1s²"	,
    "[He] 2s¹"	,
    "[He] 2s²"	,
    "[He] 2s² 2p¹"	,
    "[He] 2s² 2p²"	,
    "[He] 2s² 2p³"	,
    "[He] 2s² 2p⁴"	,
    "[He] 2s² 2p⁵"	,
    "[He] 2s² 2p⁶"	,
    "[Ne] 3s¹"	,
    "[Ne] 3s²"	,
    "[Ne] 3s² 3p¹"	,
    "[Ne] 3s² 3p²"	,
    "[Ne] 3s² 3p³"	,
    "[Ne] 3s² 3p⁴"	,
    "[Ne] 3s² 3p⁵"	,
    "[Ne] 3s² 3p⁶"	,
    "[Ar] 4s¹"	,
    "[Ar] 4s²"	,
    "[Ar] 3d¹ 4s²"	,
    "[Ar] 3d² 4s²"	,
    "[Ar] 3d³ 4s²"	,
    "[Ar] 3d⁵ 4s¹"	,
    "[Ar] 3d⁵ 4s²"	,
    "[Ar] 3d⁶ 4s²"	,
    "[Ar] 3d⁷ 4s²"	,
    "[Ar] 3d⁸ 4s²"	,
    "[Ar] 3d¹⁰ 4s¹"	,
    "[Ar] 3d¹⁰ 4s²"	,
    "[Ar] 3d¹⁰ 4s² 4p¹"	,
    "[Ar] 3d¹⁰ 4s² 4p²"	,
    "[Ar] 3d¹⁰ 4s² 4p³"	,
    "[Ar] 3d¹⁰ 4s² 4p⁴"	,
    "[Ar] 3d¹⁰ 4s² 4p⁵"	,
    "[Ar] 3d¹⁰ 4s² 4p⁶"	,
    "[Kr] 5s¹"	,
    "[Kr] 5s²"	,
    "[Kr] 4d¹ 5s²"	,
    "[Kr] 4d² 5s²"	,
    "[Kr] 4d⁴ 5s¹"	,
    "[Kr] 4d⁵ 5s¹"	,
    "[Kr] 4d⁵ 5s²"	,
    "[Kr] 4d⁷ 5s¹"	,
    "[Kr] 4d⁸ 5s¹"	,
    "[Kr] 4d¹⁰"	,
    "[Kr] 4d¹⁰ 5s¹"	,
    "[Kr] 4d¹⁰ 5s²"	,
    "[Kr] 4d¹⁰ 5s² 5p¹"	,
    "[Kr] 4d¹⁰ 5s² 5p²"	,
    "[Kr] 4d¹⁰ 5s² 5p³"	,
    "[Kr] 4d¹⁰ 5s² 5p⁴"	,
    "[Kr] 4d¹⁰ 5s² 5p⁵"	,
    "[Kr] 4d¹⁰ 5s² 5p⁶"	,
    "[Xe] 6s¹"	,
    "[Xe] 6s²"	,
    "[Xe] 5d¹ 6s²"	,
    "[Xe] 4f¹ 5d¹ 6s²"	,
    "[Xe] 4f³ 6s²"	,
    "[Xe] 4f⁴ 6s²"	,
    "[Xe] 4f⁵ 6s²"	,
    "[Xe] 4f⁶ 6s²"	,
    "[Xe] 4f⁷ 6s²"	,
    "[Xe] 4f⁷ 5d¹ 6s²"	,
    "[Xe] 4f⁹ 6s²"	,
    "[Xe] 4f¹⁰ 6s²"	,
    "[Xe] 4f¹¹ 6s²"	,
    "[Xe] 4f¹² 6s²"	,
    "[Xe] 4f¹³ 6s²"	,
    "[Xe] 4f¹⁴ 6s²"	,
    "[Xe] 4f¹⁴ 5d¹ 6s²"	,
    "[Xe] 4f¹⁴ 5d² 6s²"	,
    "[Xe] 4f¹⁴ 5d³ 6s²"	,
    "[Xe] 4f¹⁴ 5d⁴ 6s²"	,
    "[Xe] 4f¹⁴ 5d⁵ 6s²"	,
    "[Xe] 4f¹⁴ 5d⁶ 6s²"	,
    "[Xe] 4f¹⁴ 5d⁷ 6s²"	,
    "[Xe] 4f¹⁴ 5d⁹ 6s¹"	,
    "[Xe] 4f¹⁴ 5d¹⁰ 6s¹"	,
    "[Xe] 4f¹⁴ 5d¹⁰ 6s²"	,
    "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p¹"	,
    "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²"	,
    "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³"	,
    "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁴"	,
    "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁵"	,
    "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶"	,
    "[Rn] 7s¹"	,
    "[Rn] 7s²"	,
    "[Rn] 6d¹ 7s²"	,
    "[Rn] 6d² 7s²"	,
    "[Rn] 5f² 6d¹ 7s²"	,
    "[Rn] 5f³ 6d¹ 7s²"	,
    "[Rn] 5f⁴ 6d¹ 7s²"	,
    "[Rn] 5f⁶ 7s²"	,
    "[Rn] 5f⁷ 7s²"	,
    "[Rn] 5f⁷ 6d¹ 7s²"	,
    "[Rn] 5f⁹ 7s²"	,
    "[Rn] 5f¹⁰ 7s²"	,
    "[Rn] 5f¹¹ 7s²"	,
    "[Rn] 5f¹² 7s²"	,
    "[Rn] 5f¹³ 7s²"	,
    "[Rn] 5f¹⁴ 7s²"	,
    "[Rn] 5f¹⁴ 6d¹ 7s²"	,
    "[Rn] 5f¹⁴ 6d² 7s²"	,
    "[Rn] 5f¹⁴ 6d³ 7s²"	,
    "[Rn] 5f¹⁴ 6d⁴ 7s²"	,
    "[Rn] 5f¹⁴ 6d⁵ 7s²"	,
    "[Rn] 5f¹⁴ 6d⁶ 7s²"	,
    "[Rn] 5f¹⁴ 6d⁷ 7s²"	,
    "[Rn] 5f¹⁴ 6d⁹ 7s¹"	,
    "[Rn] 5f¹⁴ 6d¹⁰ 7s¹"	,
    "[Rn] 5f¹⁴ 6d¹⁰ 7s²"	,
    "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p¹"	,
    "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p²"	,
    "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p³"	,
    "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁴"	,
    "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁵"	,
    "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶"	,
    ];

    const electronegativityValues = new Float64Array([
        2.2, 0, 0.98, 1.57, 2.04, 2.55, 3.04, 3.44, 3.98, NaN,
        0.93, 1.31, 1.61, 1.9, 2.19, 2.58, 3.16, NaN,
        0.82, 1, 1.36, 1.54, 1.63, 1.66, 1.55, 1.83, 1.88, 1.91, 1.9,
        1.65, 1.81, 2.01, 2.18, 2.55, 2.96, 3,
        0.82, 0.95, 1.22, 1.33, 1.6, 2.16, 1.9, 2.2, 2.28, 2.2,
        1.93, 1.69, 1.78, 1.96, 2.05, 2.1, 2.66, 2.6,
        0.79, 0.89, 1.1, 1.12, 1.13, 1.14, 1.13, 1.17, 1.2, 1.2,
        1.22, 1.23, 1.24, 1.24, 1.25, 1.1, 1.27, 1.3, 1.5, 2.36,
        1.9, 2.2, 2.2, 2.28, 2.54, 2, 1.62, 2.33, 2.02, 2, 2.2,
        NaN, 0.7, 0.89, 1.1, 1.3, 1.5, 1.38, 1.36, 1.28, 1.3,
        1.3, 1.3, 1.3, 1.3, 1.3, 1.3, 1.3, 1.3, 1.3,
        NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN
      ]);

const oxidationStates = [
  "II, III, IV, VI, VIII",
  "I, II, III, IV, VI",
  "II, IV",
  "I, II, III",
  "I, II",
  "I, II, III",
  "II, IV",
  "II, III, IV, V",
  "II, IV, VI",
  undefined,
  "0",
  undefined,
  "II",
  "III",
  "IV",
  "V",
  "II, III, IV, V, VI",
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined
];

const applyImages = [
"    https://hips.hearstapps.com/hmg-prod/images/hydrogen-cars-1598551533.jpg",
"https://d27p2a3djqwgnt.cloudfront.net/wp-content/uploads/2018/09/05140842/balloons-1012541_1280.jpg ",
"https://www.aquametals.com/wp-content/uploads/2023/04/iStock-1402359102.jpg ",
"https://blog.aaagindia.in/wp-content/uploads/2019/09/hose-reel-1-1024x683.jpg ",
"https://media.cnn.com/api/v1/images/stellar/prod/231030133145-01-eye-drops-stock.jpg?c=original ",
"https://lighthouse.mq.edu.au/__data/assets/image/0007/1274992/700x400_AdobeStock_DiamondCut_623238557.jpeg ",
" https://nitrogen-generators.com/wp-content/uploads/2017/04/nitrogen-generators-for-laser-cutting-applications.jpg ",
"https://defencesecurityasia.com/wp-content/uploads/2023/12/989e28b0352188048c37b4f60a441e4e.jpg ",
"https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Toothpasteonbrush.jpg/1200px-Toothpasteonbrush.jpg ",
"https://www.unitopledstrip.com/wp-content/uploads/2023/09/Interesting-Facts-You-Need-to-Know-About-Neon.webp ",
"https://www.cleanlink.com/resources/editorial/2022/5191-boot-salt-sstock-2105718500.jpg ",
"https://www.3erp.com/wp-content/uploads/2020/05/magnisium.jpg ",
"https://www.eromman.com/images/detailed/1927/yzIyQ5751660284018.jpg ",
"https://silicondioxideinfo.weebly.com/uploads/9/9/6/2/9962573/749807770.gif?351 ",
"https://www.dr-green.eu/media/artykuly/Nawozy%20fosforowe.jpg ",
"https://i0.wp.com/eos.org/wp-content/uploads/2018/07/fireworks-colors-oxidizer-fuel-additive.jpg?fit=820%2C615&ssl=1 ",
"https://www.seiko-giken.jp/hubfs/1200_Chlorine%20with%20pool.png#keepProtocol ",
"https://pixfeeds.com/images/14/387081/640-524894332-light-bulb.jpg ",
"https://www.seriouseats.com/thmb/IOySYsDylVHOrFZUbZ0FNyRZIIs=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__images__2015__12__20151201-baking-powder-vicky-wasik-2-bc534b7950894f70844dd914295d5951.jpg ",
" https://www.verywellhealth.com/thmb/E0hF3nFDFm8U75wkxTFkIJd_ySc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-529463986-5ae4c359a18d9e003779d95f.jpg ",
"https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fnchem.2090/MediaObjects/41557_2014_Article_BFnchem2090_Figa_HTML.jpg ",
"https://www.scmp.com/sites/default/files/2015/08/19/imgmdiddei.1_ed1_page11_51535479.jpg?module=hard_link&pgtype=article ",
"https://static.wixstatic.com/media/777cb4_5e8b6587881b4067bc9a9a3ede7b32ba~mv2.jpg/v1/fill/w_980,h_715,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/777cb4_5e8b6587881b4067bc9a9a3ede7b32ba~mv2.jpg ",
"https://res.cloudinary.com/mel-science/image/upload/fl_progressive:steep,q_auto:good,w_700/v1/article/670/images/4781_zprpv3.jpg ",
"https://www.metaltechnews.com/home/cms_data/dfault/photos/stories/id/7/3/1073/s_top ",
" https://www.healthcastle.com/wp-content/uploads/2014/08/iron_pills.jpg ",
"https://www.aicmag.com/uploads/smco01.png ",
"https://www.sunrise-metal.com/wp-content/uploads/2020/08/Figure-1-Nickel-Plated-Aluminum-Parts.jpg ",
"https://5.imimg.com/data5/ECOM/Default/2023/9/344185237/YC/QX/GB/108587650/beauty-lights-ltettes-10-meters-100-led-silver-wire-warm-white-usb-powered-copper-wire-decorative-fairy-string-lights-10musbsww-corded-electric-simsim-6743.webp ",
"https://savvypainter.com/wp-content/uploads/2020/11/Screen-Shot-2020-11-17-at-3.58.46-PM-1024x683.png ",
"https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/ILA_2008_PD_446.JPG/1200px-ILA_2008_PD_446.JPG ",
"https://www.verizon.com/about/sites/default/files/styles/hero_tablet/public/news-media/140806_SolarPanels_640_0.jpg ",
"https://www.wineenthusiast.com/wp-content/uploads/2023/05/HERO_Arsenic_Credit_Alamy_1920x1280.jpg ",
"https://cdn.uanews.arizona.edu/s3fs-public/styles/uaqs_large/public/story-images/iStock_101436683_XLARGE%20(cropped).jpg?itok=9-_80W7g ",
"https://taoskhalsahealth.com/wp-content/uploads/2022/07/Antiseptic.jpg ",
" https://upload.wikimedia.org/wikipedia/commons/5/50/Krypton_discharge_tube.jpg ",
"https://imageio.forbes.com/blogs-images/robertanaas/files/2018/12/AG5I5590-1200x800.jpg?height=474&width=711&fit=bounds ",
"https://cdn.mos.cms.futurecdn.net/EKMcP7QnTLfwHEPqhHGrC-1200-80.jpg ",
"https://cdn.tgdd.vn/Files/2023/08/06/1541395/smartphone-tgdd-33312313-2-060823-210136-800-resize.jpg ",
"https://www.power-technology.com/wp-content/uploads/sites/21/2020/04/air-air-pollution-chimney-clouds-459728.jpg ",
"https://heegermaterials.com/7648/ferro-niobium-nuclear-grade-master-alloy.jpg ",
"https://www.itwprobrands.com/files/products/02516_App.jpg ",
"https://d2cbg94ubxgsnp.cloudfront.net/Pictures/2000xAny/5/1/5/132515_C0336885-Nuclear_medicine-SPL_credit-SPL.jpg ",
"https://img.freepik.com/premium-photo/flexible-solar-cells-from-ruthenium-energy-efficiency-products-concept-modern-technology-man-holds-flexible-solar-cell-battery-his-hand-sustainable-technologies-ecology-close-up_427877-2000.jpg ",
"https://www.electricalelibrary.com/wp-content/uploads/2018/08/rhodium-grandis-1.jpg ",
"https://1.bp.blogspot.com/-jxRZ7Bz5Bwc/X0yIRHC2N0I/AAAAAAAAA5E/lcKNFR0Pm5AZ4w-qDtFed8qTcVIyZ5YGgCLcBGAsYHQ/w1200-h630-p-k-no-nu/Image_Palladium%2BRing%2B%2526%2BEarrings_Flicker%252C%2Bby%2BAleksey%2BGnilekov.jpg ",
"https://th.bing.com/th/id/OIP.NvGTDrw802Kl8jjaJ8ORXQHaI-?rs=1&pid=ImgDetMain ",
"https://th.bing.com/th/id/R.9dca298a630edf15c16e5db00ef759f5?rik=BDtFuMLur6tvRg&pid=ImgRaw&r=0 ",
"https://th.bing.com/th/id/R.639331aa7d9c8df1e0f4bd038c71f65d?rik=%2fb%2fUgsz77EokTQ&pid=ImgRaw&r=0 ",
" https://cdn.mos.cms.futurecdn.net/7X5ZVbVjwAtJYgEc4ZhfaU-1200-80.jpg ",
"https://th.bing.com/th/id/OIP.Oyg_jp3biEga-On5QqjBewHaHa?rs=1&pid=ImgDetMain ",
"https://www.psanalytical.com/images/misc_images/marb.jpg ",
"https://www.e-firstaidsupplies.com/blog/wp-content/uploads/2022/11/iodine-810x500.jpg ",
"https://www.gasworld.com/wp-content/files/80726/1019003__ABS-3A-on-orbit_Photo-courtesy-of-Boeing.jpg ",
"https://www.army-technology.com/wp-content/uploads/sites/3/2023/06/Image-1-High-Energy-Laser-Weapon-System-1.jpg ",
"https://i.etsystatic.com/10453897/r/il/58fd01/1992865401/il_570xN.1992865401_4b93.jpg ",
"https://upload.wikimedia.org/wikipedia/commons/e/ef/Projecteur_cin%C3%A9matographique_35mm.jpg ",
"https://graphics.averydennison.eu/content/grs-responsive/eu/en/home/graphics-products/window-film/architectural-window-films-1/spectrally-selective/_jcr_content/center_parsys/image.img.jpg/1570094942618.jpg ",
"https://images.collegedunia.com/public/image/bb931a54da22545701b1803ed3a82bfb.png ",
"https://th.bing.com/th/id/R.6e72c4be55ae200d7390e6da3dc9514c?rik=F5zoD04e1XSsyg&pid=ImgRaw&r=0 ",
"https://th.bing.com/th/id/OIP.fCpgaBVkAO10lWQfEaa3nwHaFj?rs=1&pid=ImgDetMain ",
"https://th.bing.com/th/id/OIP.FP5FMsbEA4-h1atHcOenyQHaD4?rs=1&pid=ImgDetMain ",
"https://www.chemicool.com/elements/images/300-europium-montage.jpg ",
"https://th.bing.com/th/id/R.c22739c65a4a9d3d9cfce1c7b62ad1f0?rik=kv%2fEnQ0HGyDnaQ&riu=http%3a%2f%2frxrecall.com%2fwp-content%2fuploads%2f2011%2f04%2fGadolinium.jpg&ehk=B2yPQlNy%2fAr%2befNFzZwQzrLsbZr3OgQ5BvdXIGViedU%3d&risl=&pid=ImgRaw&r=0 ",
"https://th.bing.com/th/id/R.973db93db4e8f915a43ce07c195a913a?rik=cxdddwqT%2fQK62g&riu=http%3a%2f%2fcdn.zmescience.com%2fwp-content%2fuploads%2f2015%2f08%2ftumblr_m6epmfWK451ra1x6yo1_r1_1280.jpg&ehk=txfQLrcoujjjTARqo1gtEpRsmkeR2rc0Jw7ZEGizRec%3d&risl=&pid=ImgRaw&r=0 ",
"https://th.bing.com/th/id/OIP.5xADnOeXCxZ3pKi3YWIz3AAAAA?rs=1&pid=ImgDetMain ",
"https://th.bing.com/th/id/R.7ca4ffddc5435eb48a17b55b30e6ab97?rik=4MtwuXkKTRGQcQ&riu=http%3a%2f%2fperiodictable.com%2fSamples%2f067.x1%2fs13.JPG&ehk=0T%2bfj7H8gmZEDMoc6y37gfcXktjLJyItLkfVyT7zdxc%3d&risl=&pid=ImgRaw&r=0 ",
"https://th.bing.com/th/id/R.450f19530d9515a73bc9c18393b68788?rik=8HYKNi6YYhIY1Q&riu=http%3a%2f%2fpreciouserbium.weebly.com%2fuploads%2f4%2f7%2f0%2f7%2f47079503%2f113744.jpg&ehk=zVG0Xxd2Ohsl3%2bHHMNm1rgyCnUjNqg868yl0BuVUddo%3d&risl=&pid=ImgRaw&r=0 ",
"https://th.bing.com/th/id/OIP.VYRBGkoO3Vb0mFKRQoZEfwAAAA?w=295&h=224&rs=1&pid=ImgDetMain ",
"https://th.bing.com/th/id/OIP.1tdjYjaf_ZWNkC-Yk86LaQHaFj?rs=1&pid=ImgDetMain ",
"https://viraltrench.com/wp-content/uploads/2019/12/17210578927_5bc4b934cf_c-min.jpg ",
" https://botland.store/img/art/inne/filamenty3.jpg ",
"https://i.pinimg.com/originals/f8/cf/d7/f8cfd78a32e087e312b058a087d702ff.jpg ",
" https://www.matsusada.com/column/uploads/xray_tube.jpg ",
"https://www.oncobeta.com/fileadmin/user_upload/Auftragung_2.png ",
"https://s39569.pcdn.co/wp-content/uploads/2023/07/digital-fingerprint-on-black-screen.jpg ",
"https://www.lamy.com/fileadmin/redaktion/Produkte/Federspitzen/Premium-Feder-LAMYdialog3-BM01.jpg ",
"https://platinum.sepvergara.com/wp-content/uploads/2023/09/1-2.png ",
"https://www.verywellhealth.com/thmb/wOBPtfLoJn9ugF3cQf3bT7Evk98=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/cropped-hands-of-doctor-filling-syringe-against-blue-background-755740217-5aedd88421c84dfabdabd2740c14b799.jpg ",
"https://media.post.rvohealth.io/wp-content/uploads/2020/10/thermometers-1200x628-facebook-1200x628.jpg ",
"https://www.thespruce.com/thmb/7DwR0o-CNGQpAJMp1BYBH-fZZaw=/fit-in/1500x2667/filters:no_upscale():max_bytes(150000):strip_icc()/spr-tier-3-detail-off-active-insect-repellent-ebrockob-001-1-c9d031216ec54f02a2f518f6d47ed50b.jpeg ",
"https://autoimage.capitalone.com/cms/Auto/assets/images/2444-hero-car-battery-types.jpg ",
"https://thuocdantoc.vn/wp-content/uploads/2019/02/Bismuth-1.jpg ",
"https://media.defense.gov/2005/Dec/18/2000575185/-1/-1/0/050401-F-1234P-008.JPG ",
"https://www.pancreaticcancer.org.uk/wp-content/uploads/2020/09/iStock-180064922-intravaneous-drip-e1601478788485.jpg ",
"https://upload.wikimedia.org/wikipedia/commons/5/51/Fluorescent_lamps_artistic.jpg ",
"https://www.voxco.com/wp-content/uploads/2021/03/MicrosoftTeams-image-3-1.jpg ",
"https://lighting.co.za/cdn/shop/products/Screenshot2022-12-02084852.jpg?v=1669963761 ",
"https://medicaltravelmarket.com/wp-content/uploads/2021/01/AdobeStock_325209017-scaled.jpeg ",
"https://media.istockphoto.com/id/847857634/photo/jet-engine.jpg?s=612x612&w=0&k=20&c=ex2yAKj4RATAjxv16OiMJXJUO03unzenWeSjEJg4oqM= ",
"https://capitalresin.com/wp-content/uploads/2023/01/CapitalResinCorporation-215114-Importance-Chemical-Research-blogbanner1-1000x500.jpg ",
"https://www.berrysmfg.com/pub/blogimages/20230228091749_iStock1342809618.jpg ",
"https://www.liveabout.com/thmb/E0ACe84HSwDGC8ew7-av79CSOzE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/scientist-analyzing-medical-sample-in-laboratory-1175270464-2b3edeb79370435a811b08d88645b233.jpg ",
"https://www.futuroprossimo.it/wp-content/uploads/2023/02/razzo-energia-nucleare.jpg ",
"https://www.bruninglegal.com/wp-content/uploads/2016/07/ionization-smoke-detectors.jpg ",
"https://spaceanddefense.io/wp-content/uploads/2021/06/shutterstock_1420252922-540x388-1.jpg ",
"https://medlineplus.gov/images/RadiationTherapynew_share.jpg ",
"https://www.ukdj.co.uk/images/mercury-standard-ground-searching-metal-detector-with-headphone-connection-p2853-29257_image.jpg ",
"https://nte.com.ua/assets/gallery/12/homepage-01__large.jpg ",
"https://www.mpq.mpg.de/6419267/teaser-1612444624.jpg?t=eyJ3aWR0aCI6MTIwMCwiaGVpZ2h0IjpudWxsLCJmaXQiOm51bGwsIm9ial9pZCI6NjQxOTI2N30%3D--255940fe618606212a9ad241a2b4a8dc051070df ",
"https://media.istockphoto.com/id/1213724568/photo/micorscope-is-used-by-researcher-who-use-her-hands-holding-and-adjusting.jpg?s=612x612&w=0&k=20&c=dWAiuptYNEC8Re2EuyjlX1KfFFcTg97d70Qyjy3Cjck= ",
"https://www.wealthmanagement.com/sites/wealthmanagement.com/files/lab-scientific-research-TS_1.jpg ",
"https://miro.medium.com/v2/resize:fit:1400/1*UWT41cc2xyK9shdEVf25fg.jpeg ",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7O3XTUo9lqsfCzddF4YtWGygpahTZT852IGsXiKqWwAm91F5XFzG8T6efm3oiE5bCAAA&usqp=CAU ",
"https://static.vecteezy.com/ti/photos-gratuite/p2/6774539-gros-plan-de-microscope-equipement-medical-et-arriere-plan-flou-colore-copie-espace-gratuit-photo.jpg ",
"https://www.mentaldaily.com/wp-content/uploads/2020/09/655793658795.jpg ",
"https://mendeleyblog.files.wordpress.com/2017/12/chemistryresearch.jpg ",
"https://static6.depositphotos.com/1010555/639/i/450/depositphotos_6390061-stock-photo-research.jpg ",
"https://nationalpress.org/wp-content/uploads/2020/10/Confidence-in-Scientists.jpg ",
"https://d2jx2rerrg6sh3.cloudfront.net/images/Article_Images/ImageForArticle_22572_16533781526443229.jpg ",
"https://www.thepublicdiscourse.com/wp-content/uploads/2021/06/AdobeStock_432393649-1024x682.jpeg ",
"https://engineering.kennesaw.edu/nuclear-studies/images/nuclear-engineering.jpg  ",
"https://www.oecd-nea.org/upload/docs/image/jpeg/2020-10/2900.jpg ",
" https://compote.slate.com/images/812c8d20-a472-4d1a-82a3-ba3d33b46af5.jpg?width=1200 ",
"https://www.jamesgmartin.center/wp-content/uploads/2020/05/AdobeStock_336129654-1200x800.jpeg ",
"https://www.newscientist.com/nsj/getasset/e6a0e7da-7202-4cff-a947-6492fbc45bfc/ ",
"https://www.enago.com/academy/wp-content/uploads/2020/09/Clinical-Research-Hot-Career-choice.jpg ",
"https://med.miami.edu/-/media/millerschool/research/decorative-images/lab-technician-examines-microscope.ashx?h=644&iar=0&w=1006&rev=ef0a799cb1fe44a5842c80fc80b80a47&hash=4B06EA283363D47F28B0F823610C299D ",
]

function getElectronConfiguration(item) {
    let x = elelist.indexOf(item);
    document.write(electronConfiguration[x]);      
}
              
function getApplyImage(item) {
    let x = elelist.indexOf(item);
    var image = document.createElement("img");
    image.src = applyImages[x];
    let div = document.getElementById("image2"); 
    div.appendChild(image);
}
function getAtomicNumber(item) {
    let x = elelist.indexOf(item);
    document.write(atomicNumber[x]);
}
function getPeriod(item) {
    let x = elelist.indexOf(item);
    document.write(period[x]);
}
function getGroup(item) {
    let x = elelist.indexOf(item);
    document.write(group[x]);
}
function getNeutronNumber(item) {
    let x = elelist.indexOf(item);
    document.write(neutronNumber[x]);
}
function getProtonNumber(item) {
    let x = elelist.indexOf(item);
    document.write(protonNumber[x]);
}
function getElectronNumber(item) {
    let x = elelist.indexOf(item);
    document.write(electronNumber[x]);
}
function getAtomicMass(item) {
    let x = elelist.indexOf(item);
    document.write(atomicMass[x]);
}
function getValenceNumber(item) {
    let x = elelist.indexOf(item);
    document.write(valenceNumber[x]);
}
function getElectronegativityValues(item) {
    let x = elelist.indexOf(item);
    document.write(electronegativityValues[x]);
}
function getOxidationStates(item) {
    let x = elelist.indexOf(item);
    document.write(oxidationStates[x]);
}
function getDensity(item) {
    let x = elelist.indexOf(item);
    document.write(density[x]);
}
function getConditions(item) {
    let x = elelist.indexOf(item);
    document.write(conditions[x]);
}
function getMeltingPoints(item) {
    let x = elelist.indexOf(item);
    document.write(MeltingPoints[x]);
}
function getBoilingPoints(item) {
    let x = elelist.indexOf(item);
    document.write(BoilingPoints[x]);
}
function getYearFound(item) {
    let x = elelist.indexOf(item);
    document.write(YearFound[x]);
}
function getDiscoverer(item) {
    let x = elelist.indexOf(item);
    document.write(Discoverer[x]);
}
function getPercentInEarthsCrust(item) {
    let x = elelist.indexOf(item);
    document.write(percentInEarthsCrust[x]);
}


