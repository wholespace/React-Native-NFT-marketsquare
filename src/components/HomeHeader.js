import { View, Text, TextInput, Image } from "react-native";
import React from "react";
import { COLORS, FONTS, SHADOWS, SIZES, assets } from "../constants";

export default function HomeHeader({ OnSearch }) {
  return (
    <View
      style={{
        backgroundColor: COLORS.primary,
        padding: SIZES.font,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Image
          source={assets.logo}
          resizeMode="contain"
          style={{ width: 90, height: 95 }}
        />

        <View style={{ width: 45, height: 45 }}>
          <Image
            source={assets.person01}
            resizeMode="contain"
            style={{ width: "100%", height: "100%" }}
          />

          <Image
            source={assets.badge}
            resizeMode="contain"
            style={{
              width: 15,
              height: 15,
              position: "absolute",
              bottom: 0,
              right: 0,
            }}
          />
        </View>
      </View>

      <View
        style={{
          marginVertical: SIZES.font,
        }}
      >
        <Text
          style={{
            fontSize: SIZES.small,
            fontFamily: FONTS.regular,
            color: COLORS.white,
          }}
        >
          Hello World ✊
        </Text>

        <Text
          style={{
            fontSize: SIZES.large,
            fontFamily: FONTS.bold,
            color: COLORS.white,
            marginTop: SIZES.base / 2,
          }}
        >
          Lets get started 👽 !
        </Text>
      </View>

      <View style={{ marginTop: SIZES.font }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: COLORS.gray,
            paddingHorizontal: SIZES.font,
            paddingVertical: SIZES.small - 2,
            borderRadius: SIZES.font,
          }}
        >
          <Image
            source={assets.search}
            resizeMode="contain"
            style={{ width: 20, height: 20, marginRight: SIZES.base }}
          />

          <TextInput
            placeholder="search NFT"
            onChangeText={OnSearch}
            style={{
              fontSize: SIZES.font,
              flex: 1,
              fontFamily: FONTS.regular,
              color: COLORS.white,
              borderRadius: SIZES.base,

              marginTop: SIZES.base / 2,
            }}
          />
        </View>
      </View>
    </View>
  );
}
