import express from "express";
import { products } from "./data.js";
  {
    "id": 1,
    "name": "OnePlus N6 5G",
    "description": "5G smartphone with a modern display, high-performance processor, and advanced camera system.",
    "rating": 5.0,
    "price": 26999,
    "image": "https://example.com/images/oneplus-n6-5g.jpg"
  },
  {
    "id": 2,
    "name": "Motorola G45 5G",
    "description": "Affordable 5G smartphone designed for everyday performance, entertainment, and photography.",
    "rating": 5.0,
    "price": 12129,
    "image": "https://example.com/images/motorola-g45-5g.jpg"
  },
  {
    "id": 3,
    "name": "OnePlus Pad Go",
    "description": "Portable Android tablet suitable for entertainment, browsing, reading, and productivity.",
    "rating": 4.6,
    "price": 17999,
    "image": "https://example.com/images/oneplus-pad-go.jpg"
  },
  {
    "id": 4,
    "name": "Samsung Galaxy Book4 Convertible",
    "description": "Convertible laptop offering flexible tablet and laptop modes with a large touchscreen display.",
    "rating": 5.0,
    "price": 92799,
    "image": "https://example.com/images/samsung-galaxy-book4.jpg"
  },
  {
    "id": 5,
    "name": "HP 245 G9",
    "description": "14-inch laptop powered by an AMD Ryzen processor, designed for work, study, and everyday computing.",
    "rating": 5.0,
    "price": 52291,
    "image": "https://example.com/images/hp-245-g9.jpg"
  },
  {
    "id": 6,
    "name": "Redragon K630 Dragonborn",
    "description": "Compact 60% mechanical gaming keyboard with wired connectivity and RGB lighting.",
    "rating": 4.8,
    "price": 2061,
    "image": "https://example.com/images/redragon-k630.jpg"
  },
  {
    "id": 7,
    "name": "Zebronics Max Ninja 61",
    "description": "Compact mechanical keyboard designed for gaming and everyday desktop use.",
    "rating": 4.5,
    "price": 1249,
    "image": "https://example.com/images/zebronics-max-ninja-61.jpg"
  },
  {
    "id": 8,
    "name": "EvoFox Katana X2 FS",
    "description": "Wired mechanical gaming keyboard featuring RGB lighting and gaming-focused controls.",
    "rating": 4.4,
    "price": 1699,
    "image": "https://example.com/images/evofox-katana-x2.jpg"
  },
  {
    "id": 9,
    "name": "V6 Gaming Mouse",
    "description": "Ultra-lightweight gaming mouse with a symmetrical design and high-precision sensor.",
    "rating": 4.9,
    "price": 8741,
    "image": "https://example.com/images/v6-gaming-mouse.jpg"
  },
  {
    "id": 10,
    "name": "AULA S11 Pro RGB Gaming Mouse",
    "description": "RGB wired gaming mouse designed for responsive gaming and everyday computer use.",
    "rating": 5.0,
    "price": 599,
    "image": "https://example.com/images/aula-s11-pro.jpg"
  },
  {
    "id": 11,
    "name": "LG 27UL550-W 4K Monitor",
    "description": "27-inch 4K UHD HDR monitor with an IPS display for detailed visuals and productivity.",
    "rating": 4.4,
    "price": 11471,
    "image": "https://example.com/images/lg-27ul550-w.jpg"
  },
  {
    "id": 12,
    "name": "LG 27UL500 4K Monitor",
    "description": "27-inch 4K UHD IPS monitor with HDR support and gaming-oriented features.",
    "rating": 4.5,
    "price": 9702,
    "image": "https://example.com/images/lg-27ul500.jpg"
  },
  {
    "id": 13,
    "name": "boAt Storm Call 4",
    "description": "Smartwatch with a color display, fitness tracking features, and Type-C charging.",
    "rating": 4.5,
    "price": 1599,
    "image": "https://example.com/images/boat-storm-call-4.jpg"
  },
  {
    "id": 14,
    "name": "Bouncefit D20 Y68",
    "description": "Budget fitness smartwatch with workout modes, touch controls, and water-resistant design.",
    "rating": 4.2,
    "price": 396,
    "image": "https://example.com/images/bouncefit-d20-y68.jpg"
  },
  {
    "id": 15,
    "name": "Realme Buds T200",
    "description": "True wireless earbuds featuring high-resolution audio and a compact charging case.",
    "rating": 4.3,
    "price": 1899,
    "image": "https://example.com/images/realme-buds-t200.jpg"
  },
  {
    "id": 16,
    "name": "OnePlus Nord Buds 3r",
    "description": "Wireless TWS earbuds with long playback, low-latency mode, spatial audio, and dual-device connectivity.",
    "rating": 4.3,
    "price": 1999,
    "image": "https://example.com/images/oneplus-nord-buds-3r.jpg"
  },
  {
    "id": 17,
    "name": "Portronics SoundDrum P",
    "description": "Portable Bluetooth speaker with 20W output and USB Type-C charging.",
    "rating": 4.5,
    "price": 1749,
    "image": "https://example.com/images/portronics-sounddrum-p.jpg"
  },
  {
    "id": 18,
    "name": "EVM EnBolt 10000mAh",
    "description": "10,000mAh power bank supporting 22.5W fast charging with USB Type-C connectivity.",
    "rating": 4.2,
    "price": 699,
    "image": "https://example.com/images/evm-enbolt-10000mah.jpg"
  },
  {
    "id": 19,
    "name": "Portronics Kinetics 8K Power Bank",
    "description": "Compact portable power bank designed to provide additional battery capacity for mobile devices.",
    "rating": 4.2,
    "price": 1444,
    "image": "https://example.com/images/portronics-kinetics-8k.jpg"
  },
  {
    "id": 20,
    "name": "Samsung 25W USB-C Travel Adapter",
    "description": "Compact USB Type-C wall charger designed for fast charging compatible smartphones and devices.",
    "rating": 4.4,
    "price": 620,
    "image": "https://example.com/images/samsung-25w-adapter.jpg"
  }
]