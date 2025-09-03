export const convertNumber = (n?: any) => {
  if (!n || n === undefined || n === null) return
  var sign = +n < 0 ? "-" : "",
    toStr = n.toString()
  if (!/e/i.test(toStr)) {
    return n
  }
  var [lead, decimal, pow] = n
    .toString()
    .replace(/^-/, "")
    .replace(/^([0-9]+)(e.*)/, "$1.$2")
    .split(/e|\./)
  return +pow < 0
    ? sign +
        "0." +
        "0".repeat(Math.max(Math.abs(pow) - 1 || 0, 0)) +
        lead +
        decimal
    : sign +
        lead +
        (+pow >= decimal.length
          ? decimal + "0".repeat(Math.max(+pow - decimal.length || 0, 0))
          : decimal.slice(0, +pow) + "." + decimal.slice(+pow))
}

export const toSignificantDigits = (
  fig: any,
  precision = 6,
  roundInput = false,
  trimToDecimals = 0 // can also set to 18 safely
): any => {
  const convertToSignificant = () => {
    if (fig === undefined || fig === null || fig === 0) return "0"

    try {
      if (trimToDecimals > 0) fig = fig.toFixed(trimToDecimals)
    } catch {}

    if (roundInput) {
      const originalNumber = Number(fig)
      let sigFigures = fig.toString().split(".")[0]
      if (originalNumber < 1) {
        const lead = (fig.toString().split(".")[1] || "").match(/^0*/)[0].length
        sigFigures = "0." + "0".repeat(lead)
      }

      const sigDigits = sigFigures.length + (originalNumber >= 1 ? 1 : 0)
      if (sigDigits < precision) {
        let unroundedDec = String(convertNumber(fig))
          .replace(/^0+|0+$/g, "")
          .split(".")[1]
        unroundedDec = unroundedDec === undefined ? "" : unroundedDec

        let leadingDecimalZeros =
          unroundedDec.length - unroundedDec.replace(/^0+|0+$/g, "").length
        leadingDecimalZeros = Number(fig) >= 1 ? 0 : leadingDecimalZeros
        const integerNonZeroDigits = Math.max(
          0,
          Math.floor(Math.log10(Number(fig))) + 1
        )

        const roundPrecision =
          10 ** (precision + leadingDecimalZeros - integerNonZeroDigits)
        fig = Math.round(Number(fig) * roundPrecision) / roundPrecision
        fig = fig === Math.floor(fig) ? String(fig + ".") : fig
      }
    }

    let [intValue, decimalValue] = String(convertNumber(fig))
      .replace(/^0+|0+$/g, "")
      .split(".")
    if (decimalValue === undefined || decimalValue === "") {
      return intValue === "" ? "0" : String(convertNumber(fig)).split(".")[0]
    }

    let leadingDecimalZeros =
      decimalValue.length - decimalValue.replace(/^0+|0+$/g, "").length
    if (intValue === "") {
      intValue = "0"
      leadingDecimalZeros += 1
    } else if (intValue.length >= precision) {
      return intValue
    }
    const significantPrecision =
      precision - intValue.length + leadingDecimalZeros
    const trimmedValue = (
      intValue +
      "." +
      decimalValue.slice(0, significantPrecision)
    )
      .replace(/^|0+$/g, "")
      .replace(/\.$/, "")
    return trimmedValue === "" ? "0" : trimmedValue
  }

  const convertedFig = convertToSignificant()
  let decimalsFig = Number((convertedFig.split(".")[1] || "").length)
  if (decimalsFig === undefined || decimalsFig < 0 || decimalsFig > 20)
    decimalsFig = 3 // more info: https://w3schools.com/jsref/jsref_tolocalestring_number.asp

  return trimToDecimals > 0
    ? parseFloat(convertedFig).toLocaleString("en-US", {
        // maximumFractionDigits: decimalsFig,
        minimumFractionDigits: decimalsFig,
      })
    : convertToSignificant()
}

export const toApproxMin = (
  minRange: any,
  precision = 12,
  roundRange = true,
  showApproxSymbol = false,
  useScientificNotation = false
): any => {
  const APPROX_ZERO = 1e-20 // 1e-20
  if (minRange < APPROX_ZERO) {
    const uiMinRange = showApproxSymbol ? "≈0" : "0"
    return uiMinRange
  } else {
    const uiMinRange = toSignificantDigits(minRange, precision, roundRange)
    return String(useScientificNotation ? Number(uiMinRange) : uiMinRange)
  }
}

export const toApproxMax = (
  maxRange: any,
  precision = 12,
  roundRange = true,
  approximateAlsoForZero = false,
  useScientificNotation = false
): any => {
  const APPROX_INFINITY = 1e20 // 1e25
  if (
    maxRange > APPROX_INFINITY ||
    (approximateAlsoForZero && maxRange < 1 / APPROX_INFINITY)
  ) {
    const uiMaxRange = "∞"
    return uiMaxRange
  } else {
    const uiMaxRange = toSignificantDigits(maxRange, precision, roundRange)
    return String(useScientificNotation ? Number(uiMaxRange) : uiMaxRange)
  }
}
