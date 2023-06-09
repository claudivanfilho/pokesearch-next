import { HTMLAttributes } from "react";

export default function PokemonAnimatedBG({
  color = "default",
  className,
}: {
  color?: string;
} & HTMLAttributes<HTMLDivElement>) {
  const pokemonColorsMap: { [key: string]: { stroke: string[]; bgClass: string } } = {
    default: { stroke: ["#8fa4b3", "#bac8d1", "#ebf1f5"], bgClass: "bg-white-200" },
    green: { stroke: ["#157759", "#53ab8b", "#82dbb8"], bgClass: "bg-green-200" },
    red: { stroke: ["#a12b2b", "#cc4343", "#f57a7a"], bgClass: "bg-red-200" },
    yellow: { stroke: ["#cfcc1d", "#edea45", "#f7f69c"], bgClass: "bg-yellow-200" },
    blue: { stroke: ["#255eba", "#6293e3", "#bbd3fa"], bgClass: "bg-blue-200" },
    pink: { stroke: ["#ad2aa7", "#e36dde", "#f0b4ed"], bgClass: "bg-pink-200" },
    black: { stroke: ["#8fa4b3", "#bac8d1", "#ebf1f5"], bgClass: "bg-white-200" },
    gray: { stroke: ["#8fa4b3", "#bac8d1", "#ebf1f5"], bgClass: "bg-gray-200" },
    brown: { stroke: ["#634325", "#9e6a39", "#e39c59"], bgClass: "bg-yellow-600" },
    purple: { stroke: ["#523882", "#775aad", "#a888e3"], bgClass: "bg-purple-200" },
  };

  const colors = pokemonColorsMap[color] || pokemonColorsMap.default;
  const classColor = colors.bgClass;
  const stroke1 = colors.stroke[0];
  const stroke2 = colors.stroke[1];
  const stroke3 = colors.stroke[2];

  return (
    <>
      <svg className={`relative ${classColor} ${className}`} preserveAspectRatio="xMidYMid">
        <defs>
          <pattern
            id="pid-0.34793511445839975"
            x="0"
            y="0"
            width="197.12"
            height="197.12"
            patternUnits="userSpaceOnUse"
          >
            <g transform="scale(0.77)">
              <g>
                <line
                  x1="62.80916899133181"
                  x2="52.72188636688772"
                  y1="241.9526775577743"
                  y2="252.03996018221838"
                  strokeWidth="30"
                  stroke={stroke1}
                  strokeLinecap="round"
                ></line>
                <line
                  x1="62.80916899133181"
                  x2="52.72188636688772"
                  y1="-270.04732244222566"
                  y2="-259.96003981778165"
                  strokeWidth="30"
                  stroke={stroke1}
                  strokeLinecap="round"
                ></line>
                <line
                  x1="318.80916899133183"
                  x2="308.7218863668877"
                  y1="-270.04732244222566"
                  y2="-259.96003981778165"
                  strokeWidth="30"
                  stroke={stroke1}
                  strokeLinecap="round"
                ></line>
                <line
                  x1="574.8091689913318"
                  x2="564.7218863668877"
                  y1="-270.04732244222566"
                  y2="-259.96003981778165"
                  strokeWidth="30"
                  stroke={stroke1}
                  strokeLinecap="round"
                ></line>
                <line
                  x1="62.80916899133181"
                  x2="52.72188636688772"
                  y1="-14.047322442225692"
                  y2="-3.9600398177816203"
                  strokeWidth="30"
                  stroke={stroke1}
                  strokeLinecap="round"
                ></line>
                <line
                  x1="318.80916899133183"
                  x2="308.7218863668877"
                  y1="-14.047322442225692"
                  y2="-3.9600398177816203"
                  strokeWidth="30"
                  stroke={stroke1}
                  strokeLinecap="round"
                ></line>
                <line
                  x1="574.8091689913318"
                  x2="564.7218863668877"
                  y1="-14.047322442225692"
                  y2="-3.9600398177816203"
                  strokeWidth="30"
                  stroke={stroke1}
                  strokeLinecap="round"
                ></line>
                <line
                  x1="62.80916899133181"
                  x2="52.72188636688772"
                  y1="241.9526775577743"
                  y2="252.03996018221838"
                  strokeWidth="30"
                  stroke={stroke1}
                  strokeLinecap="round"
                ></line>
                <line
                  x1="318.80916899133183"
                  x2="308.7218863668877"
                  y1="241.9526775577743"
                  y2="252.03996018221838"
                  strokeWidth="30"
                  stroke={stroke1}
                  strokeLinecap="round"
                ></line>
                <line
                  x1="574.8091689913318"
                  x2="564.7218863668877"
                  y1="241.9526775577743"
                  y2="252.03996018221838"
                  strokeWidth="30"
                  stroke={stroke1}
                  strokeLinecap="round"
                ></line>
                <animateTransform
                  attributeName="transform"
                  type="translate"
                  values="0 0;-256 256"
                  keyTimes="0;1"
                  repeatCount="indefinite"
                  dur="3.7037037037037033s"
                ></animateTransform>
              </g>
              <g>
                <line
                  x1="33.508758677266506"
                  x2="7.53579368051593"
                  y1="242.2984558342752"
                  y2="268.27142083102575"
                  strokeWidth="30"
                  stroke={stroke2}
                  strokeLinecap="round"
                ></line>
                <line
                  x1="33.508758677266506"
                  x2="7.53579368051593"
                  y1="-269.70154416572484"
                  y2="-243.72857916897425"
                  strokeWidth="30"
                  stroke={stroke2}
                  strokeLinecap="round"
                ></line>
                <line
                  x1="289.5087586772665"
                  x2="263.53579368051595"
                  y1="-269.70154416572484"
                  y2="-243.72857916897425"
                  strokeWidth="30"
                  stroke={stroke2}
                  strokeLinecap="round"
                ></line>
                <line
                  x1="545.5087586772665"
                  x2="519.5357936805159"
                  y1="-269.70154416572484"
                  y2="-243.72857916897425"
                  strokeWidth="30"
                  stroke={stroke2}
                  strokeLinecap="round"
                ></line>
                <line
                  x1="33.508758677266506"
                  x2="7.53579368051593"
                  y1="-13.701544165724812"
                  y2="12.27142083102575"
                  strokeWidth="30"
                  stroke={stroke2}
                  strokeLinecap="round"
                ></line>
                <line
                  x1="289.5087586772665"
                  x2="263.53579368051595"
                  y1="-13.701544165724812"
                  y2="12.27142083102575"
                  strokeWidth="30"
                  stroke={stroke2}
                  strokeLinecap="round"
                ></line>
                <line
                  x1="545.5087586772665"
                  x2="519.5357936805159"
                  y1="-13.701544165724812"
                  y2="12.27142083102575"
                  strokeWidth="30"
                  stroke={stroke2}
                  strokeLinecap="round"
                ></line>
                <line
                  x1="33.508758677266506"
                  x2="7.53579368051593"
                  y1="242.2984558342752"
                  y2="268.27142083102575"
                  strokeWidth="30"
                  stroke={stroke2}
                  strokeLinecap="round"
                ></line>
                <line
                  x1="289.5087586772665"
                  x2="263.53579368051595"
                  y1="242.2984558342752"
                  y2="268.27142083102575"
                  strokeWidth="30"
                  stroke={stroke2}
                  strokeLinecap="round"
                ></line>
                <line
                  x1="545.5087586772665"
                  x2="519.5357936805159"
                  y1="242.2984558342752"
                  y2="268.27142083102575"
                  strokeWidth="30"
                  stroke={stroke2}
                  strokeLinecap="round"
                ></line>
                <animateTransform
                  attributeName="transform"
                  type="translate"
                  values="0 0;-256 256"
                  keyTimes="0;1"
                  repeatCount="indefinite"
                  dur="1.8518518518518516s"
                ></animateTransform>
              </g>
              <g>
                <line
                  x1="192.22666577535017"
                  x2="161.46666697339697"
                  y1="222.3516696115542"
                  y2="253.1116684135074"
                  strokeWidth="30"
                  stroke={stroke3}
                  strokeLinecap="round"
                ></line>
                <line
                  x1="192.22666577535017"
                  x2="161.46666697339697"
                  y1="-289.6483303884458"
                  y2="-258.8883315864926"
                  strokeWidth="30"
                  stroke={stroke3}
                  strokeLinecap="round"
                ></line>
                <line
                  x1="448.22666577535017"
                  x2="417.46666697339697"
                  y1="-289.6483303884458"
                  y2="-258.8883315864926"
                  strokeWidth="30"
                  stroke={stroke3}
                  strokeLinecap="round"
                ></line>
                <line
                  x1="704.2266657753502"
                  x2="673.466666973397"
                  y1="-289.6483303884458"
                  y2="-258.8883315864926"
                  strokeWidth="30"
                  stroke={stroke3}
                  strokeLinecap="round"
                ></line>
                <line
                  x1="192.22666577535017"
                  x2="161.46666697339697"
                  y1="-33.6483303884458"
                  y2="-2.8883315864925976"
                  strokeWidth="30"
                  stroke={stroke3}
                  strokeLinecap="round"
                ></line>
                <line
                  x1="448.22666577535017"
                  x2="417.46666697339697"
                  y1="-33.6483303884458"
                  y2="-2.8883315864925976"
                  strokeWidth="30"
                  stroke={stroke3}
                  strokeLinecap="round"
                ></line>
                <line
                  x1="704.2266657753502"
                  x2="673.466666973397"
                  y1="-33.6483303884458"
                  y2="-2.8883315864925976"
                  strokeWidth="30"
                  stroke={stroke3}
                  strokeLinecap="round"
                ></line>
                <line
                  x1="192.22666577535017"
                  x2="161.46666697339697"
                  y1="222.3516696115542"
                  y2="253.1116684135074"
                  strokeWidth="30"
                  stroke={stroke3}
                  strokeLinecap="round"
                ></line>
                <line
                  x1="448.22666577535017"
                  x2="417.46666697339697"
                  y1="222.3516696115542"
                  y2="253.1116684135074"
                  strokeWidth="30"
                  stroke={stroke3}
                  strokeLinecap="round"
                ></line>
                <line
                  x1="704.2266657753502"
                  x2="673.466666973397"
                  y1="222.3516696115542"
                  y2="253.1116684135074"
                  strokeWidth="30"
                  stroke={stroke3}
                  strokeLinecap="round"
                ></line>
                <animateTransform
                  attributeName="transform"
                  type="translate"
                  values="0 0;-256 256"
                  keyTimes="0;1"
                  repeatCount="indefinite"
                  dur="1.2345679012345678s"
                ></animateTransform>
              </g>
            </g>
          </pattern>
        </defs>
        <rect x="0" y="0" width="1084" height="322" fill="url(#pid-0.34793511445839975)"></rect>
      </svg>
    </>
  );
}
