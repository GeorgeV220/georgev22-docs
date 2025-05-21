---
sidebar_label: Shops
title: Shops
sidebar_position: 4
---

# 🛍️ VoidChest Shop Configuration Guide (`shops/default.json`)

Configure sellable items and prices for your VoidChest type.  
**File Location**: `plugins/VoidChest/shops/<type>.json` (e.g., `default.json`, `premium.json`).

---

## 🏷️ File Structure

```json
{
  "voidchestName": "default",
  "shopItems": [
    {
      "nbtContainer": "{NBT_DATA}",
      "price": "100.0"
    }
  ]
}
```

### Key Fields:

| Field           | Description                                                       |
|-----------------|-------------------------------------------------------------------|
| `voidchestName` | VoidChest type this shop applies to (e.g., `default`, `premium`). |
| `shopItems`     | Array of items that can be sold via this VoidChest type.          |

---

## 🧩 Shop Item Configuration

### `nbtContainer` (Required)

- **Definition**: Item NBT data in Minecraft's SNBT (Stringified NBT) format.
- **Supported Tags**: `id`, `Count`, `tag` (enchantments, custom names, etc.).
- **Example**:
  ```json
  {
    "nbtContainer": "{Count:1b, id:\"minecraft:diamond_sword\", tag:{Enchantments:[{id:\"sharpness\", lvl:5s}]}}"
  }
  ```

### `price` (Required)

- **Format**: String containing a numerical value.
- **Example**: `"500.5"` = $500.50 per item.

---

## 🛠️ Example File

```json
{
  "voidchestName": "default",
  "shopItems": [
    {
      "nbtContainer": "{Count:1b, id:\"minecraft:diamond\"}",
      "price": "100.0"
    },
    {
      "nbtContainer": "{Count:1b, id:\"minecraft:netherite_ingot\", tag:{display:{Name:'{\"text\":\"Epic Ingot\"}'}}",
      "price": "2000.0"
    },
    {
      "nbtContainer": "{Count:16b, id:\"minecraft:golden_apple\"}",
      "price": "50.0"
    }
  ]
}
```

---

## ⚠️ Important Notes

1. **Automatic Generation**:  
   If `<type>.json` is missing (e.g., `premium.json`), it will be auto-generated from `default.json`.

2. **NBT Validation**:  
   Use tools like [MCStacker](https://mcstacker.net/) to generate error-free NBT.

3. **In-Game Management**:  
   Edit via `/voidchestadmin shop` ingame instead of manual file edits to avoid syntax errors.

---

## 🔍 Troubleshooting

| Issue               | Solution                                                                    |
|---------------------|-----------------------------------------------------------------------------|
| Item not selling    | Check NBT matches the exact item in-game or enable/disable ignore-item-meta |
| Price not applying  | Ensure `price` is a string (e.g., `"50"`).                                  |
| File not recognized | Match filename to `voidchestName` exactly.                                  |