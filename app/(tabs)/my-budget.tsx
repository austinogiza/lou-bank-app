import React, { useMemo, useState } from "react"
import { View, Text, Dimensions, Pressable, SafeAreaView } from "react-native"
import tw from "twrnc"
import Svg, { Path, Circle } from "react-native-svg"
import * as d3 from "d3-shape"

const { width: SCREEN_W } = Dimensions.get("window")

const DATA = [
  { label: "Apr", value: 760 },
  { label: "May", value: 540 },
  { label: "Jun", value: 1345 }, // selected in mock
  { label: "Jul", value: 880 },
  { label: "Aug", value: 1500 },
  { label: "Sep", value: 1090 },
]

const C = {
  bg: "#0b0c10",
  panel: "#14161a",
  card: "#1a1d22",
  text: "#e5e7eb",
  sub: "#9ca3af",
  line: "#2b2f36",
  lineActive: "#b6ffde",
  dot: "#9bd1be",
  money: "#e9fff6",
}

function currency(n: number) {
  return `$${n.toLocaleString()}`
}

export default function BudgetScreen() {
  const [activeIndex, setActiveIndex] = useState(2) // “Jun”
  const active = DATA[activeIndex]

  const CHART_W = SCREEN_W - 32
  const CHART_H = 180
  const PADDING_X = 12
  const PADDING_Y = 18

  const min = Math.min(...DATA.map((d) => d.value))
  const max = Math.max(...DATA.map((d) => d.value))
  const y = (v: number) =>
    PADDING_Y +
    (1 - (v - min) / Math.max(1, max - min)) * (CHART_H - PADDING_Y * 2)
  const x = (i: number) =>
    PADDING_X + (i / (DATA.length - 1)) * (CHART_W - PADDING_X * 2)

  const path = useMemo(() => {
    const line = d3
      .line<[number, number]>()
      .x(([ix]) => x(ix))
      .y(([_, v]) => y(v))
      .curve(d3.curveCatmullRom.alpha(0.5))

    const pts: [number, number][] = DATA.map((d, i) => [i, d.value])
    return line(pts) || ""
  }, [DATA, CHART_W, CHART_H])

  const handleTouch = (evt: any) => {
    const gx = evt.nativeEvent.locationX
    // map x to nearest index
    const step = (CHART_W - PADDING_X * 2) / (DATA.length - 1)
    const idx = Math.round((gx - PADDING_X) / step)
    const clamped = Math.max(0, Math.min(DATA.length - 1, idx))
    setActiveIndex(clamped)
  }

  return (
    <SafeAreaView style={[tw`flex-1`, { backgroundColor: C.bg }]}>
      {/* Header */}
      <View style={tw`px-4 pt-2 pb-4 flex-row items-center justify-between`}>
        <Pressable style={tw`p-2 rounded-full`} onPress={() => {}}>
          {/* <Ionicons name="chevron-back" size={22} color={C.text} /> */}
        </Pressable>
        <Text style={tw`text-base text-white font-semibold`}>My budget</Text>
        <Pressable style={tw`p-2 rounded-full`} onPress={() => {}}>
          {/* <Ionicons name="filter" size={18} color={C.text} /> */}
        </Pressable>
      </View>

      {/* Stat card */}
      <View
        style={[tw`mx-4 rounded-3xl p-4 mb-4`, { backgroundColor: C.card }]}
      >
        <View style={tw`flex-row justify-between items-start`}>
          <View>
            <Text style={[tw`text-3xl font-bold`, { color: C.money }]}>
              {currency(1345)}
            </Text>
            <Text style={[tw`mt-1`, { color: C.sub }]}>
              September forecast {currency(2010)}
            </Text>
          </View>
          <View style={tw`bg-black/30 px-3 py-2 rounded-2xl`}>
            <Text style={[tw`text-xs`, { color: C.text }]}>June, 2020</Text>
          </View>
        </View>
      </View>

      {/* Chart */}
      <View style={tw`mx-4 mb-3`}>
        <View
          onStartShouldSetResponder={() => true}
          onMoveShouldSetResponder={() => true}
          onResponderMove={handleTouch}
          onResponderGrant={handleTouch}
          style={[
            tw`rounded-3xl overflow-hidden`,
            { height: CHART_H, backgroundColor: C.panel },
          ]}
        >
          <Svg width={CHART_W} height={CHART_H}>
            {/* base grid line */}
            <Path
              d={`M0 ${y(min)} H ${CHART_W}`}
              stroke={C.line}
              strokeWidth={1}
              opacity={0.4}
            />
            {/* trend line */}
            <Path d={path} stroke={C.line} strokeWidth={2} fill="none" />
            {/* active dot */}
            <Circle
              cx={x(activeIndex)}
              cy={y(active.value)}
              r={7}
              fill={C.lineActive}
              stroke={C.bg}
              strokeWidth={2}
            />
          </Svg>

          {/* Tooltip bubble */}
          <View
            pointerEvents="none"
            style={[
              tw`absolute items-center`,
              {
                left: Math.max(
                  12,
                  Math.min(CHART_W - 120, x(activeIndex) - 60)
                ),
                top: Math.max(8, y(active.value) - 36),
                width: 120,
              },
            ]}
          >
            <View
              style={[
                tw`px-3 py-2 rounded-2xl`,
                { backgroundColor: "#17191d" },
              ]}
            >
              <Text
                style={[
                  tw`text-center text-sm font-semibold`,
                  { color: C.text },
                ]}
              >
                − {currency(active.value)}
              </Text>
              <Text
                style={[tw`text-center text-[10px] mt-1`, { color: C.sub }]}
              >
                {active.label} 15, 2020
              </Text>
            </View>
          </View>

          {/* month labels */}
          <View style={tw`absolute bottom-2 left-0 right-0`}>
            <View style={tw`flex-row justify-between px-3`}>
              {DATA.map((d, i) => (
                <Text
                  key={d.label}
                  style={[
                    tw`text-[10px]`,
                    { color: i === activeIndex ? C.text : "#6b7280" },
                  ]}
                >
                  {d.label}
                </Text>
              ))}
            </View>
          </View>
        </View>
      </View>

      {/* Transactions sheet */}
      <View
        style={[
          tw`flex-1 rounded-t-3xl px-4 pt-4`,
          { backgroundColor: C.panel },
        ]}
      >
        <Text style={[tw`text-sm mb-4`, { color: C.text }]}>June 15, 2020</Text>

        <TxnItem
          title="Webflow"
          subtitle="Outgoing transfer"
          amount={-45}
          badge="W"
          badgeBg="#4f46e5"
        />
        <TxnItem
          title="Sketch"
          subtitle="Annual withdrawal of funds"
          amount={-79}
          badge="S"
          badgeBg="#f59e0b"
        />
        <TxnItem
          title="Youtube"
          subtitle="Annual withdrawal of funds"
          amount={-15}
          badge="▶"
          badgeBg="#ef4444"
        />
        <TxnItem
          title="Unsplash"
          subtitle="—"
          amount={-9}
          badge="U"
          badgeBg="#10b981"
        />
      </View>
    </SafeAreaView>
  )
}

function TxnItem({
  title,
  subtitle,
  amount,
  badge,
  badgeBg,
}: {
  title: string
  subtitle: string
  amount: number
  badge: string
  badgeBg: string
}) {
  return (
    <View style={tw`flex-row items-center justify-between py-3`}>
      <View style={tw`flex-row items-center`}>
        <View
          style={[
            tw`h-10 w-10 rounded-full items-center justify-center mr-3`,
            { backgroundColor: badgeBg },
          ]}
        >
          <Text style={tw`text-white font-bold`}>{badge}</Text>
        </View>
        <View>
          <Text style={[tw`text-white`]}>{title}</Text>
          <Text style={[tw`text-xs mt-0.5`, { color: "#9ca3af" }]}>
            {subtitle}
          </Text>
        </View>
      </View>
      <Text style={[tw`text-white font-semibold`]}>
        -{currency(Math.abs(amount))}
      </Text>
    </View>
  )
}
