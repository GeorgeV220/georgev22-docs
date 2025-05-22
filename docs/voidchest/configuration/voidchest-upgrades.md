---
sidebar_label: Upgrades
id: voidchest-upgrades
title: Upgrades
sidebar_position: 5
---

# 🔄 Built-in VoidChest Upgrades Guide

Configure built-in upgrades through these JSON files. Third-party upgrades are handled via API.

---

## 📦 Collection Range Upgrade (`bounding_box.json`)

### 🏷️ File Structure

```json
{
  "levels": [
    {
      "level": 1,
      "price": "0.00",
      "bounding_box": {
        "min": {
          "x": -5,
          "y": -5,
          "z": -5
        },
        "max": {
          "x": 5,
          "y": 5,
          "z": 5
        }
      },
      "display_item": {
        "type": "GRASS_BLOCK",
        "name": "&b&lCollection Range",
        "lore": [
          "Max X: &a&l%maxX%&7"
        ]
      }
    }
  ],
  "voidchest_types": [
    "default"
  ]
}
```

### Key Fields

| Field                | Description                                |
|----------------------|--------------------------------------------|
| `bounding_box`       | 3D collection area (relative to VoidChest) |
| `min/max`            | Coordinates for cube boundaries            |
| `%maxX%` placeholder | Shows current dimension limit              |
| `voidchest_types`    | Applies to specified chest types           |

**Example Progression**:

- Level 1: 11x11x11 block area
- Level 2: 21x21x21 block area
- Level 3: 31x31x31 block area

---

## 🔗 Container Links Upgrade (`links.json`)

### 🏷️ File Structure

```json
{
  "levels": [
    {
      "level": 1,
      "price": "0",
      "links": 0,
      "display_item": {
        "type": "TRAPPED_CHEST",
        "name": "&b&lLinks",
        "lore": [
          "Links: &a&l%links%&7"
        ]
      }
    }
  ],
  "voidchest_types": [
    "default"
  ]
}
```

### Key Features

- `links`: Max connectable containers
- Level 1: 0 links (base)
- Level 2: 2 links ($150)
- Level 3: 3 links ($300)

---

## 💰 Sell Boost Upgrade (`sell_boost.json`)

### 🏷️ File Structure

```json
{
  "levels": [
    {
      "level": 1,
      "price": "0.00",
      "boost": 0.0,
      "display_item": {
        "type": "COAL",
        "name": "&b&lSell Boost",
        "lore": [
          "Sell Boost: &a&l%boost%&7"
        ]
      }
    }
  ],
  "voidchest_types": [
    "default"
  ]
}
```

### Boost Tiers

- Level 1: +0% (free)
- Level 2: +50% ($200)
- Level 3: +100% ($400)

---

## ⚙️ Common Configuration Elements

### 🎨 Display Item Properties

```json
"display_item": {
"type": "GOLD_INGOT",
"name": "&6&lPremium Boost",
"custom_model_data": 1001,
"glow": true,
"lore": [
"Current Level: &a&l%level%",
"Next Price: &e$%nextLevelPrice%"
]
}
```

### 🔄 Dynamic Placeholders

| Placeholder        | Description           |
|--------------------|-----------------------|
| `%level%`          | Current upgrade level |
| `%nextLevel%`      | Next available tier   |
| `%nextLevelPrice%` | Cost for next upgrade |
| `%maxX%`/`%minZ%`  | Bounding box limits   |
| `%links%`          | Max allowed links     |
| `%boost%`          | Multiplier percentage |

---

## 🚀 Implementation Tips

1. **Automatic Generation**  
   Missing type files auto-generate from defaults

2. **Price Formatting**  
   Always use strings for prices: `"250.00"` not `250`

3. **Coordinate System**  
   Negative values = directions opposite chest facing

4. **Multi-Chest Support**  
   Add types to `voidchest_types` array for shared upgrades:
   ```json
   "voidchest_types": ["default", "premium", "industrial"]
   ```

5. **Visual Hierarchy**  
   Use material progression:
   ```json
   "type": "COAL" → "IRON_INGOT" → "GOLD_INGOT"
   ```

```json
// Example Premium Upgrade Tier
{
  "level": 4,
  "price": "1000.00",
  "boost": 2.0,
  "display_item": {
    "type": "NETHERITE_INGOT",
    "name": "<gradient:gold:red>Elite Booster</gradient>",
    "glow": true,
    "lore": [
      "Current Multiplier: <#55FF55>%boost%x</#55FF55>",
      "Next Level: <#FFD700>$%nextLevelPrice%</#FFD700>"
    ]
  }
}
```