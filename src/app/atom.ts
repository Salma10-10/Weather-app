/** @format */
'use client'
import { atom } from "jotai";

// Default city is "Toronto"
export const placeAtom = atom("Toronto");
export const loadingCityAtom = atom(false);
