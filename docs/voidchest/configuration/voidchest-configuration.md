---
id: configuration
title: Plugin Configuration
sidebar_label: Configuration
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This document provides a complete overview of the `config.yml` file used to configure the VoidChest plugin.

---

## Options

### Debug

```yaml
debug: false
````

Enables or disables debug mode. Set to `true` to enable detailed logging for troubleshooting.

---

### Secret

```yaml
secret: "SECRET HERE"
```

A secret key used internally by the plugin. Keep this value private.
:::note
Currently not used.
:::

---

### Locale

```yaml
locale: "en_US"
```

Sets the plugin language. Use valid locale codes (e.g., `en_US`, `fr_FR`).
:::danger
Will be removed in a future release.
:::
---

### Load Delay

```yaml
load delay: 5
```

Delays plugin data loading (voidchests, player data, etc.) to ensure all worlds are fully loaded.

:::info
The delay in **ticks** between plugin data loading and the first interaction with the plugin.
:::
:::tip

* Recommended range: `1` to `10`
* Setting `< 1` disables the delay (not recommended)
  :::

---

### Save Interval

```yaml
save interval: 20
```

:::info
The interval in **seconds** between automatic saves of player and voidchest data. Reduces performance overhead by
batching disk writes.
:::
:::danger
**Note:** Data changes made within the interval are not saved until the next scheduled save. If the server crashes
before that, data may be lost.
:::
---

### Experimental Features

```yaml
experimental features: false
```

Enable or disable experimental plugin features.

---

### Metrics

```yaml
metrics: true
```

Toggles anonymous usage metrics reporting.

---

### Discord Integration

```yaml
discord: false
```

Enable integration with Discord, if supported.
:::note
Currently not used.
:::
---

### Updater

```yaml
updater:
  enabled: true
```

Enables automatic update checks for the plugin.

---

### Commands

```yaml
commands:
  voidchest: true
  voidchest admin: true
```

Enable or disable specific plugin commands.

---

## Database Configuration

Defines the storage backend for plugin data.

```yaml
database:
  type: "File" # Options: File, SQLite, MySQL, PostgreSQL, MongoDB
```

:::warning
SQLite and remote databases are currently disabled due to data corruption.
The code needs refactoring.
:::

<Tabs>
<TabItem value="SQL">

```yaml
SQL:
  host: "localhost"
  port: 3306
  user: "youruser"
  password: "yourpassword"
  database: "VoidChest"
  users table name: "voidchest_users"
  voidchests table name: "voidchest_voidchests"
  SQLite file name: "voidchest"
```

</TabItem>
<TabItem value="MongoDB">

```yaml
MongoDB:
  host: "localhost"
  port: 27017
  user: "youruser"
  password: "yourpassword"
  database: "voidchest"
  users collection: "voidchest_users"
  voidchest collection: "voidchest_voidchests"
```

</TabItem>
</Tabs>

---

## Time Format

```yaml
time format:
  second: second
  seconds: seconds
  minute: minute
  minutes: minutes
  hour: hour
  hours: hours
  day: day
  days: days
  invalid: Invalid
```

Customize how time units are displayed in messages and GUIs.

---

## Money Format

```yaml
money format: "##.####"
```

Define the numeric format for currency values.

---

## Economy Integration

```yaml
economy:
  charge: "Vault"
  upgrades: "Vault"
  payout: "Vault"
```

Supported values: `Vault`, `TheNewEconomy`, `VoidChest`, `Custom`

> `VoidChest` supports EXP only. Use `Custom` for advanced integrations.

---

### VoidChest Economy Mode

```yaml
void chest economy mode: "EXP"
```

Defines how EXP is used in the internal economy.
:::tip

* `EXP`: Raw experience points
* `LEVELS`: Player levels
  :::

---

## Stacker Plugin Support

```yaml
stacker: "None"
```

Integrates with stacker plugins
:::info
Valid values:
`None`
`WildStacker`
`SpaceStacker`
`RoseStacker`
`zItemStacker`
`CloudSpawners`

:::

---

## Bank Plugin Support

```yaml
bank: "None"
bank tnt: "None"
```

Supports various bank plugins. Use `Custom` for manual implementations.
:::info
Valid values:
`None`
`SuperiorSkyblock2`
`FabledSkyBlock`
`SaberFactions`
`MysqlEconomyBank`
`RoyaleEconomy`
`Custom`
:::
---

## Holograms

```yaml
hologram:
  plugin: "None"
  update interval: 1
```

Updates holograms every `update interval` **seconds**.

:::tip
The interval must be at least 1 second.
:::
:::info
Valid values:
`None`
`HolographicDisplays`
`Holograms`
`CMI`
`DecentHolograms`
`FancyHolograms`
:::
---

## Item Filtering

### Ignore Item Meta

```yaml
ignore item meta: true
```

If true, ignores enchantments, custom names, and other item metadata during filtering.

### Filter Mode

```yaml
filter mode: "ALLOW"
```

:::tip

* `ALLOW`: Only items on the filter list are allowed.
* `DENY`: Items on the list are blocked.

:::

---

## Chunk See Feature

```yaml
chunk see:
  Y central: 0
  Y up: 0
  Y down: 0
  effect:
    type: "VILLAGER_HAPPY"
    interval: 20
```

Visual effect to show chunk boundaries—primarily for admin/debug use.

---

## Sell Messages

```yaml
sell message:
  enabled: false
  interval: 60
  offline:
    enabled: false
    message delay: 50
```

Controls the display of sell messages in chat, including when players rejoin.

:::tip
The interval is in **seconds**.
:::

---

## Final Notes

* Always restart or reload the plugin (`./vcadmin reload`) after modifying `config.yml`.
* Incorrect values can cause startup errors or unintended behavior.
* Use default settings unless you're confident in the changes or a developer has advised you to do so.