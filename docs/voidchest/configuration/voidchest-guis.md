---
id: voidchest-guis-configuration
title: VoidChest GUIs Configuration
sidebar_label: VoidChest GUIs
sidebar_position: 6
description: Configuration guides for VoidChest GUI menus.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# VoidChest Menu Configurations

<Tabs>
<TabItem value="voidchest-menu" label="VoidChest Menu">

```yaml title="gui/type/<voidchest_type>.yml"
VoidChestMenu:
  title: "&a&l%voidchest% VoidChest Menu"
  rows: 6
  animation: true
  defaultAction: voidchest:nothing
  # ... (rest of the VoidChestMenu configuration)
```

</TabItem>

<TabItem value="filters-menu" label="Filters Menu">

```yaml title="gui/filters.yml"
FiltersMenu:
  title: "&a&l%filter% Filter Menu (%type%)"
  rows: 6
  animation: true
  defaultAction: voidchest:remove_filter
  # ... (rest of FiltersMenu configuration)
```

</TabItem>

<TabItem value="links-menu" label="Links Menu">

```yaml title="gui/links.yml"
LinksMenu:
  title: "&a&l%voidchest%'s VoidChest Links Menu"
  rows: 6
  animation: true
  defaultAction: voidchest:links
  # ... (rest of LinksMenu configuration)
```

</TabItem>

<TabItem value="shop-menu" label="Shop Menu">

```yaml title="gui/shop.yml"
ShopMenu:
  title: "&a&l%voidchest% Shop Menu"
  rows: 6
  animation: true
  defaultAction: voidchest:nothing
  # ... (rest of ShopMenu configuration)
```

</TabItem>

<TabItem value="upgrades-menu" label="Upgrades Menu">

```yaml title="gui/upgrades.yml"
UpgradesMenu:
  title: "&a&l%voidchest% VoidChest Menu"
  rows: 6
  animation: true
  defaultAction: voidchest:nothing
  # ... (rest of UpgradesMenu configuration)
```

</TabItem>

<TabItem value="voidchests-menu" label="VoidChests Menu">

```yaml title="gui/voidchests.yml"
VoidChestsMenu:
  title: "&a&l%player%'s VoidChests Menu"
  rows: 6
  animation: true
  defaultAction: voidchest:voidchests
  # ... (rest of VoidChestsMenu configuration)
```

</TabItem>
</Tabs>

## Key Configuration Notes:
1. Placeholder variables like `%voidchest%` and `%player%` are dynamically replaced at runtime
2. Menu positions are defined using slot numbers (0-53 for 6-row inventories)
3. Animation types ("wave") and color gradients can be customized
4. Actions starting with `voidchest:` trigger plugin-specific functionality
5. Player head textures use Base64 encoded skull properties

:::tip Pro Tip
Use the `defaultAction` parameter to define fallback behavior for unconfigured slots, and `bottomInventoryAction` to handle player inventory interactions.
:::
:::danger Caution
Please avoid using item specific actions in the `defaultAction` or `bottomInventoryAction` parameters, as they may break the menu functionality.
:::
:::danger Caution
Please avoid using item/menu specific actions in different menus, as they may break the menu functionality.
:::
:::info Animations
`fade`
`wave`
`rainbow`
`pulse`
`typing`
`sparkle`
`glitch`

:::

Remember to maintain proper indentation in YAML files and test menu configurations after making changes.