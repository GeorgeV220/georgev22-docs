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
```
Enables or disables debug mode. Use `true` to enable detailed logging for troubleshooting.

---

### Secret
```yaml
secret: "SECRET HERE"
```
A secret key used internally by the plugin. Keep this value confidential.

---

### Locale
```yaml
locale: "en_US"
```
Sets the plugin language. Use locale codes such as `en_US`, `fr_FR`, etc.

---

### Load Delay
```yaml
load delay: 5
```

**⚠️ WARNING:** Only change this if you're experiencing issues with voidchests disappearing after a restart.

This option defines the delay (in seconds) before the plugin loads data like voidchests and player data. This ensures that all worlds are fully loaded before voidchests are initialized.

- Recommended: between `1` and `10`.
- Any value `< 1` disables the delay (not recommended).

---

### Experimental Features
```yaml
experimental features: false
```
Enable or disable experimental features. Use with caution.

---

### Metrics
```yaml
metrics: true
```
Toggle anonymous plugin usage metrics reporting.

---

### Discord Integration
```yaml
discord: false
```
Enables Discord integration if applicable.

---

### Updater
```yaml
updater:
  enabled: true
```
Controls automatic update checks.

---

## Commands
```yaml
commands:
  voidchest: true
  voidchest admin: true
```
Enable or disable individual plugin commands.

---

## Database Configuration

Select the database backend and configure connection settings.

```yaml
database:
  type: "File" # File, SQLite, MySQL, PostgreSQL, MongoDB
```

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
  ...
```

Customizes the time units used in messages and interfaces.

---

## Money Format
```yaml
money format: "##.####"
```
Controls how currency values are displayed.

---

## Economy Integration

```yaml
economy:
  charge: "Vault"
  upgrades: "Vault"
  payout: "Vault"
```

Supported options: `Vault`, `TheNewEconomy`, `VoidChest`, `Custom`

---

### VoidChest Economy Mode
```yaml
void chest economy mode: "EXP"
```

- `EXP`: Use experience points
- `LEVELS`: Use player levels

---

## Stacker Plugin Support
```yaml
stacker: "None"
```
Supported: `WildStacker`, `UltimateStacker`, `SpaceStacker`, etc.

---

## Bank Plugin Support
```yaml
bank: "None"
bank tnt: "None"
```
Supported: `SuperiorSkyblock2`, `SaberFactions`, `RoyaleEconomy`, etc.

---

## Holograms
```yaml
hologram:
  plugin: "None"
  update interval: 20
```
Supports: `HolographicDisplays`, `CMI`, `DecentHolograms`, etc.

---

## Item Filtering

### Ignore Item Meta
```yaml
ignore item meta: true
```
If true, item meta (like enchantments/lore) is ignored during filtering.

### Filter Mode
```yaml
filter mode: "ALLOW"
```
- `ALLOW`: Only listed items are allowed
- `DENY`: Listed items are blocked

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
Visual effect for chunk boundaries, useful for debugging or setup.

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

Controls whether sell messages appear in chat and when players join.

---

## Final Notes

Be sure to restart or reload the plugin after modifying the config file. Incorrect configuration may result in plugin errors or undesired behavior.