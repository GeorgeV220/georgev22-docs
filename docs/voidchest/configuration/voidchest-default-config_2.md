---
id: voidchest-default-config
title: VoidChest Type Configuration
sidebar_label: VoidChest Type (default.yml)
sidebar_position: 2
description: Learn how to configure default settings for a specific type of VoidChest.
---

## Overview

The `default.yml` file (located in `./plugins/VoidChest/voidchests/`) defines the behavior and mechanics of a specific **VoidChest type**. You can create additional types by duplicating and renaming this file.

Each type has its own independent configuration, allowing for powerful customization and variety in how VoidChests behave.

---

## 📦 Mechanics

### `block`
- Type: `String`
- Description: The Minecraft block used as the VoidChest.
- Example: `CHEST`

### `booster`
- Type: `Double`
- Description: Multiplier for total income calculation.
- Formula: `ItemPrice * booster * other boosts`

### `shift click open` / `right click open`
- Type: `String`
- Options: `MENU`, `CHEST`, `NONE`, `CONTAINER`
- Description: Defines how players interact with the chest using right-click or shift-right-click.

### `enable when owner offline`
- Type: `Boolean`
- Description: Allows the chest to operate even when the owner is offline.

### `links`
- Type: `Boolean`
- Description: Enables container linking support.

---

## 🚫 Prevent Section

Define player restrictions and plugin behaviors.

| Option                             | Type    | Description                                      |
|------------------------------------|---------|--------------------------------------------------|
| `chest near voidchests`            | Boolean | Prevent placing chests next to VoidChests        |
| `voidchests near chests`           | Boolean | Prevent placing VoidChests next to normal chests |
| `placing voidchests in same chunk` | Boolean | Restrict multiple VoidChests in one chunk        |
| `creative mode interaction`        | Boolean | Prevent creative players from interacting        |
| `placing other voidchests near`    | Boolean | Block placing VoidChests near other VoidChests   |
| `voidchest from exploding`         | Boolean | Prevent VoidChests from exploding                |

---

## 🪓 Break Section

Control what happens when VoidChests are broken.

| Option                        | Description                      |
|-------------------------------|----------------------------------|
| `failed other`                | Deny breaking others' VoidChests |
| `permission deny`             | Deny if lacking permission       |
| `successful`                  | Notify on successful break       |
| `store stats`                 | Preserve stats if replaced       |
| `drop voidchest on explosion` | Drop chest when exploded         |

---

## 📦 Placement Options

| Option             | Description                                               |
|--------------------|-----------------------------------------------------------|
| `permission deny`  | Deny placement without permission                         |
| `successful`       | Notify on successful placement                            |
| `delay check`      | Delay check for placement (advanced)                      |
| `limit`            | Max chests a player can place                             |

---

## ⚙️ Default Features

These are enabled by default when a chest is placed:

- `auto sell`: Enables automatic item selling
- `purge items`: Automatically clears invalid items
- `chunk collector`: Collects items from surrounding chunks
- `charge`: Enables charge/fuel system
- `hologram`: Enables floating holograms
- `bank`: Stores income into bank instead of balance

---

## 🔁 Options

### `sell interval`
- Frequency (in ticks) to attempt selling items.

### `profit calculator`
- Ordered list of plugins to determine item pricing.

### `sound`
- Custom sounds for events:
- `place`, `break`, `upgrade.success`, `upgrade.failure`

### `links`
- Maximum number of links to containers.

### Force Disable Options
- `auto sell force disable`
- `purge items force disable`
- `bank force disable`

### `chunk collector`
- `mode`: `CHUNK` or `BOUNDINGBOX`
- `force disable`: Prevent usage
- `transfer non sellables`: Allow moving non-sellable items
- `filters`: Enable filtering system

---

## 🧱 Inventory Lore

Customize item descriptions:

```yaml
shop item lore:
  - "&7Price:&r &a$%price%"

filter item lore:
  - "&7Amount:&r &a%amount%"
  - "&7Allow:&r &a%allow%"
  - "&7Ignore Item Metadata:&r &a%ignoreMetadata%"
  - "&7Ignore Item Amount:&r &a%ignoreAmount%"
  - "&8Right Click to Remove"
```

---

## ⚡ Charge System

Control fuel/charge mechanics.

| Option                | Description                                  |
|-----------------------|----------------------------------------------|
| `force disable`       | Disable the charge system                    |
| `break persistent`    | Save charge on item break                    |
| `max time`            | Max charge in seconds (e.g. 172800 = 2 days) |
| `renewal time`        | Seconds added per fuel item                  |
| `price`               | Cost of renewing charge                      |
| `hologram.no fuel`    | Placeholder for no fuel in holograms         |
| `placeholder.no fuel` | Placeholder for no fuel in UI or items       |

---

## ✨ Hologram

| Option          | Description                        |
|-----------------|------------------------------------|
| `force disable` | Prevent hologram from rendering    |
| `height`        | Vertical offset of hologram text   |
| `text`          | Hologram content with placeholders |

---

## 🎁 Item

| Option                       | Description                           |
|------------------------------|---------------------------------------|
| `drop straight to inventory` | If true, drop into inventory on break |
| `name`                       | Custom display name                   |
| `lore`                       | Description shown in item tooltips    |

---

## Creating Other Types

To create new types of VoidChests, duplicate `default.yml`, rename it (e.g. `gold.yml`, `diamond.yml`), and modify the contents as needed. Each file defines an independent VoidChest type with unique behavior.