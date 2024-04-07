import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Search } from "./Search";
import { Weather } from "./Weather";

const Api = () => {
  return (
    <>
      <Search />
      <Weather />
    </>
  );
};

const styles = StyleSheet.create({});

export default Api;
