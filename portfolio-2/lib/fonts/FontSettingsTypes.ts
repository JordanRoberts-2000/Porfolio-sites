export type FontSettings = 
({
    name: "eb_garamond",
    weights: ("400" | "500" | "600" | "700" | "800")[],
    italicWeights?: ("400" | "500" | "600" | "700" | "800")[]
} | {
    name: "dm_mono",
    weights: ("300" | "400" | "500")[],
    italicWeights?: ("300" | "400" | "500")[]
} | {
    name: "dm_serif_display",
    weights: ("400")[],
    italicWeights?: ("400")[]
} | {
    name: "dancing script",
    weights: ("400" | "500" | "600" | "700")[],
    italicWeights?: null
} | {
    name: "inter",
    weights: ("100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900")[],
    italicWeights?: null
} | {
    name: "libre_baskerville",
    weights: ("400" | "700")[],
    italicWeights?: ("400")[]
} | {
    name: "manrope",
    weights: ("200" | "300" | "400" | "500" | "600" | "700" | "800")[],
    italicWeights?: null
} | {
    name: "montserrat",
    weights: ("100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900")[],
    italicWeights?: ("100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900")[]
} | {
    name: "open_sans",
    weights: ("300" | "400" | "500" | "600" | "700" | "800")[],
    italicWeights?: ("300" | "400" | "500" | "600" | "700" | "800")[]
} | {
    name: "oswald",
    weights: ("200" | "300" | "400" | "500" | "600" | "700")[],
    italicWeights?: null
} | {
    name: "poppins",
    weights: ("100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900")[],
    italicWeights?: ("100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900")[]
} | {
    name: "roboto_mono",
    weights: ("100" | "200" | "300" | "400" | "500" | "600" | "700")[],
    italicWeights?: ("100" | "200" | "300" | "400" | "500" | "600" | "700")[]
} | {
    name: "roboto_slab",
    weights: ("100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900")[],
    italicWeights?: null
} | {
    name: "roboto",
    weights: ("100" | "300" | "400" | "500" | "700" | "900")[],
    italicWeights?: ("100" | "300" | "400" | "500" | "700" | "900")[]
} | {
    name: "space_mono",
    weights: ("400" | "700")[],
    italicWeights?: ("400" | "700")[]
} | {
    name: "yellowtail",
    weights: ("400")[],
    italicWeights?: null
} | {
    name: "orbitron",
    weights: ("400" | "500" | "600" | "700" | "800" | "900")[],
    italicWeights?: null
} | {
    name: "bebas_neue",
    weights: ("400")[],
    italicWeights?: null
} | {
    name: "anton",
    weights: ("400")[],
    italicWeights?: null
} | {
    name: "playfair_display",
    weights: ("400" | "500" | "600" | "700" | "800" | "900")[],
    italicWeights?: ("400" | "500" | "600" | "700" | "800" | "900")[]
})[]