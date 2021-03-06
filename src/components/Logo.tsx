import type { FC } from 'react';
import { Theme } from '@material-ui/core';
import { experimentalStyled } from '@material-ui/core/styles';
import type { SxProps } from '@material-ui/system';

interface LogoProps {
  sx?: SxProps<Theme>;
}

const LogoRoot = experimentalStyled('svg')``;

const Logo: FC<LogoProps> = (props) => (
  <LogoRoot
    height="15vh"
    version="1.1"
    width="18vh"
    {...props}
  >
    <title>Elibrary</title>
    <g
      transform="translate(0.000000,125.000000) scale(0.050000,-0.050000)"
      fill="#741b47"
      stroke="none"
    >
      <path
        d="M1460 2228 c-172 -30 -337 -117 -445 -235 -108 -119 -27 -148 95 -35 264 243 703 237 907 -11 55 -66 143 -84 143 -28 0 137 -477 347 -700 309z"
      />
      <path
        d="M1450 2021 c-90 -22 -214 -91 -267 -147 -79 -85 9 -93 125 -11 161 114 345 102 557 -36 80 -52 121 -8 57 61 -91 97 -338 167 -472 133z"
      />
      <path
        d="M1425 1801 c-47 -21 -85 -48 -85 -59 0 -30 81 -49 106 -24 29 29 199 29 228 0 24 -24 106 -6 106 23 0 71 -242 112 -355 60z"
      />
      <path
        d="M1124 1455 l6 -305 175 -91 c184 -95 326 -203 165 -124 -44 21 -154 68 -244 104 l-164 65 3 263 c2 145 -4 275 -12 289 -39 62 -53 -20 -53 -296 l0 -297 110 -42 c61 -22 162 -60 225 -84 63 -23 129 -55 147 -70 40 -35 116 -35 156 1 18 16 127 64 242 107 l210 79 10 305 c6 168 5 308 -1 312 -43 26 -58 -44 -63 -300 l-6 -278 -186 -76 c-271 -109 -253 -108 -322 -32 -34 37 -124 97 -201 135 l-141 68 0 236 0 237 142 -72 c79 -40 165 -94 193 -122 l49 -50 30 42 c22 33 196 136 331 198 8 3 15 -101 15 -231 l0 -238 -140 -68 c-128 -62 -239 -148 -218 -168 4 -5 98 39 208 96 l200 105 4 294 c2 176 -4 293 -16 293 -43 0 -342 -164 -381 -210 l-43 -48 -39 50 c-22 27 -120 90 -218 139 l-178 90 5 -306z"
      />
      <path
        d="M1550 1340 c-20 -22 -31 -46 -23 -53 7 -8 -5 -26 -27 -41 -79 -56 -27 -132 58 -87 49 26 55 61 11 61 -17 0 -26 -8 -20 -18 6 -10 -3 -23 -19 -29 -18 -7 -30 0 -30 18 0 17 24 39 54 51 44 16 49 24 25 38 -25 16 -23 24 9 54 21 20 32 25 24 12 -7 -13 -4 -28 6 -35 20 -12 45 39 27 57 -22 23 -59 12 -95 -28z"
      />
      <path
        d="M1413 647 c-28 -42 -57 -102 -64 -133 -8 -30 -31 -64 -51 -75 -43 -23 -47 -13 -16 44 35 67 3 66 -53 0 -92 -110 -121 -76 -39 45 61 90 88 181 49 168 -38 -12 -101 -143 -114 -236 -11 -84 11 -103 55 -50 22 27 28 27 50 -4 22 -29 31 -30 58 -8 26 22 38 22 62 2 34 -28 76 -4 112 63 15 28 12 37 -11 37 -17 0 -31 -13 -31 -29 0 -31 -36 -61 -53 -44 -6 6 23 65 64 132 89 144 72 226 -18 88z"
      />
      <path
        d="M1041 651 c-26 -27 -41 -62 -35 -79 8 -19 -3 -35 -27 -42 -69 -22 -76 -150 -9 -150 56 0 145 95 104 111 -21 8 -47 4 -60 -11 -19 -21 -16 -23 14 -12 32 11 34 8 12 -18 -32 -39 -80 -39 -80 0 0 17 25 41 55 54 76 33 78 36 44 57 -22 13 -24 26 -8 52 31 49 69 57 69 15 0 -27 6 -30 23 -13 27 27 8 85 -29 85 -15 0 -48 -22 -73 -49z"
      />
      <path
        d="M1505 490 c-60 -92 -56 -115 7 -40 l50 60 -13 -53 c-14 -60 19 -92 60 -58 20 17 29 17 35 -2 6 -16 22 -19 47 -8 22 10 57 15 78 12 24 -3 59 18 86 52 l47 57 -13 -53 c-13 -57 15 -89 56 -64 14 9 42 16 63 16 21 1 43 14 48 29 6 18 1 22 -17 12 -19 -12 -22 -7 -12 17 37 93 31 97 -37 23 -40 -44 -68 -64 -62 -43 22 66 -39 127 -69 70 -41 -77 -103 -106 -86 -40 18 66 -48 66 -123 0 -58 -51 -70 -55 -67 -24 11 123 -14 135 -78 37z"
      />
      <path
        d="M2081 503 c-11 -21 -14 -43 -8 -50 7 -6 -11 -39 -39 -72 -55 -65 -85 -137 -66 -156 20 -20 90 57 115 125 13 36 49 80 80 99 31 18 57 43 57 54 0 12 -21 8 -48 -10 -45 -29 -47 -29 -38 8 13 50 -26 51 -53 2z"
      />
    </g>
  </LogoRoot>
);

export default Logo;
