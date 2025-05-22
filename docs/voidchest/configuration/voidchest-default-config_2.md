---
id: voidchest-default-config
title: VoidChest Type Configuration
sidebar_label: VoidChest Type (default.yml)
sidebar_position: 2
description: Learn how to configure default settings for a specific type of VoidChest.
---

## 🧾 Overview

Each VoidChest type is defined by a separate YAML file (e.g., `default.yml`) located in:

```
./plugins/VoidChest/voidchests/
```

You can create new types by duplicating and renaming `default.yml` (e.g., `gold.yml`, `diamond.yml`) and adjusting the
configuration as needed.

These configurations allow you to customize VoidChest behavior per type, independently of global plugin settings.

---

## ⚙️ Mechanics

| Option                      | Type    | Description                                                             |
|-----------------------------|---------|-------------------------------------------------------------------------|
| `block`                     | String  | Minecraft block used for the VoidChest                                  |
| `booster`                   | Double  | Boost multiplier for item value (`price * booster * other boosts`)      |
| `shift click open`          | String  | Interaction on shift+right-click (`MENU`, `CHEST`, `NONE`, `CONTAINER`) |
| `right click open`          | String  | Interaction on right-click (`MENU`, `CHEST`, `NONE`, `CONTAINER`)       |
| `enable when owner offline` | Boolean | Whether chest functions while owner is offline                          |
| `links`                     | Boolean | Allow linking to external containers                                    |

---

## 🚫 Prevent Section

Control restrictions related to placement and interaction:

| Option                             | Type    | Description                                         |
|------------------------------------|---------|-----------------------------------------------------|
| `chest near voidchests`            | Boolean | Block placing chests adjacent to VoidChests         |
| `voidchests near chests`           | Boolean | Block placing VoidChests near normal chests         |
| `placing voidchests in same chunk` | Boolean | Restrict multiple VoidChests in the same chunk      |
| `creative mode interaction`        | Boolean | Block interaction in Creative Mode                  |
| `placing other voidchests near`    | Boolean | Block placing VoidChests near other VoidChests      |
| `voidchest from exploding`         | Boolean | Prevent explosion destruction (e.g., TNT, creepers) |

---

## 🪓 Break Section

Configure behavior when VoidChests are broken:

| Option                        | Type    | Description                           |
|-------------------------------|---------|---------------------------------------|
| `failed other`                | Boolean | Block breaking chests owned by others |
| `permission deny`             | Boolean | Block breaking without permission     |
| `successful`                  | Boolean | Notify player on successful break     |
| `store stats`                 | Boolean | Retain stats when broken/replaced     |
| `drop voidchest on explosion` | Boolean | Drop chest if exploded                |

---

## 📦 Placement Options

| Option            | Type    | Description                                    |
|-------------------|---------|------------------------------------------------|
| `permission deny` | Boolean | Block placement without permission             |
| `successful`      | Boolean | Notify player on successful placement          |
| `delay check`     | Boolean | Advanced delay check before allowing placement |
| `limit`           | Integer | Maximum number of chests a player can place    |

---

## 🔧 Default Features

These are **enabled by default** when a new VoidChest is placed:

* `auto sell`: Automatically sells items inside the chest
* `purge items`: Removes invalid/non-sellable items
* `chunk collector`: Collects items from nearby chunks
* `charge`: Enables charge/fuel system
* `hologram`: Enables floating holographic display
* `bank`: Sends income to bank instead of balance

---

## 🔁 Options Section

### Selling & Profit

| Option              | Type    | Description                           |
|---------------------|---------|---------------------------------------|
| `sell interval`     | Integer | Delay in ticks between sell attempts  |
| `profit calculator` | List    | Plugin priority list for item pricing |

Supported plugins: `VoidChest`, `ShopGUIPlus`, `Essentials`, `CMI`, `EconomyShopGUI`, `DynamicShop`, and `Custom`.

---

### Sounds

| Event           | Config Key              |
|-----------------|-------------------------|
| Place           | `sound.place`           |
| Break           | `sound.break`           |
| Upgrade Success | `sound.upgrade.success` |
| Upgrade Failure | `sound.upgrade.failure` |

---

### Links

| Option  | Type    | Description                             |
|---------|---------|-----------------------------------------|
| `links` | Integer | Max containers linked to this VoidChest |

---

### Forced Disable Options

| Option                      | Type    | Description                    |
|-----------------------------|---------|--------------------------------|
| `auto sell force disable`   | Boolean | Globally disables auto selling |
| `purge items force disable` | Boolean | Globally disables item purging |
| `bank force disable`        | Boolean | Globally disables banking      |

---

### Chunk Collector

| Option                   | Type    | Description                         |
|--------------------------|---------|-------------------------------------|
| `mode`                   | String  | `CHUNK` or `BOUNDINGBOX`            |
| `force disable`          | Boolean | Disables chunk collection entirely  |
| `transfer non sellables` | Boolean | Allow collecting non-sellable items |
| `filters`                | Boolean | Enable/disable filtering system     |

---

### Inventory Lore

Customize item tooltips and inventory display:

```yaml
inventory:
  shop item lore:
    - '&7Price:&r &a$%price%'

  filter item lore:
    - "&7Amount:&r &a%amount%"
    - "&7Allow:&r &a%allow%"
    - "&7Ignore Item Metadata:&r &a%ignoreMetadata%"
    - "&7Ignore Item Amount:&r &a%ignoreAmount%"
    - "&8Right Click to Remove"
```

---

### Charge System (Fuel)

| Option                | Type    | Description                                        |
|-----------------------|---------|----------------------------------------------------|
| `force disable`       | Boolean | Disables the charge system                         |
| `break persistent`    | Object  | Save charge data when broken                       |
| `max time`            | Integer | Maximum charge time in seconds                     |
| `renewal time`        | Integer | Seconds added per fuel item                        |
| `price`               | Integer | Cost of renewing fuel                              |
| `hologram.no fuel`    | String  | Placeholder when chest runs out of fuel (hologram) |
| `placeholder.no fuel` | String  | Placeholder when chest runs out of fuel (UI)       |

---

### ✨ Hologram Display

| Option          | Type    | Description                       |
|-----------------|---------|-----------------------------------|
| `force disable` | Boolean | Disables hologram rendering       |
| `height`        | Double  | Vertical offset for floating text |
| `text`          | List    | Lines displayed above the chest   |

Example:

```yaml
text:
  - '&c&l%voidchest% VoidChest'
  - '&fOwner: &c%owner%'
  - '&fBoost: &b%booster%x'
  - '&fMoney made: &a$%money%'
```

---

### 🎁 Item Settings

| Option                        | Type    | Description                                           |
|-------------------------------|---------|-------------------------------------------------------|
| `drop straight to inventory`  | Boolean | Send broken item to inventory instead of dropping     |
| `name`                        | String  | Custom item name                                      |
| `lore`                        | List    | Description shown in item tooltip                     |
| `inventory custom name`       | Boolean | Show custom name in inventory                         |
| `inventory lore`              | List    | Description in chest UI (supports MiniMessage/legacy) |
| `inventory links custom name` | Boolean | Show custom name for links                            |
| `inventory links lore`        | List    | Description in links UI                               |

---

## 🛠 Creating New VoidChest Types

To define other VoidChest types:

1. Duplicate `default.yml`.
2. Rename the file (e.g., `gold.yml`).
3. Customize the contents (e.g., different block, booster, filters, limits).

Each file represents an **independent type** with its own behavior, permissions, and rules.
