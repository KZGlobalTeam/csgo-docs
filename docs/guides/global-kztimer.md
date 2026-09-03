---
title: KZTimer global whitelist guide
description: Guide for KZTimer on how to get your server globally whitelisted
---

# Requirements

- Server owners cannot be globally banned or have a previous global ban.
- Must not be a LAN or locally-hosted server. Regardless of whether it's open to the public.
- If the server is going to be password protected or SteamID/group whitelisted, then replay bot files must be accessible to the Global Team. The Global Team must be able to access the server (add them to the whitelist or share the password).
- You have read, understood and comply with the [Server Owner Rules](https://l.global-kz.net/server-owner-rules).

## Before you begin

1. This guide assumes that you have a working KZTimer server.
2. This guide assumes that you have access to the server files.

::: warning
If you are asked to overwrite files at any point in the guide, accept the overwrites.
:::

::: warning
If you are having trouble with a step, try the **#support** channel in [our Discord server](https://discord.gg/csgokz).
<br>Be sure to mention which step you are having trouble with and include as much information as possible, including the error logs from `csgo/addons/sourcemod/logs/errors_********.log`.
:::

## 1. Install SteamWorks

1. Start by downloading [SteamWorks](http://users.alliedmods.net/~kyles/builds/SteamWorks).

2. Extract the files into your server's `csgo` directory.

3. You should now have SteamWorks installed and working.

::: info Confirm this step
Run the following command in the server console: `sm exts load SteamWorks`.
<br>You should see the following line in the output: `[SM] Loaded extension SteamWorks.ext.so successfully.`.
:::

## 2. Install SMJansson

1. Start by downloading [SMJansson](https://forums.alliedmods.net/showthread.php?t=184604).

::: warning
Be sure to download the file that ends with **binaries**.
:::

2. Extract the files into your server's `csgo/addons/sourcemod/extensions` directory.

3. You should now have SMJansson installed and working.

::: info Confirm this step
Run the following command in the server console: `sm exts load smjansson`.
<br>You should see the following line in the output: `[SM] Loaded extension smjansson.ext.so successfully.`.
:::

## 3. Install GlobalRecords-SMPlugin

1. Start by downloading [GlobalAPI-Core and GlobalAPI-Jumpstats](https://bitbucket.org/kztimerglobalteam/globalrecordssmplugin/downloads).

2. Extract the files into your server's `csgo` directory.

3. You should now have GlobalRecords-SMPlugin installed and working.

::: info Confirm this step
Restart your server and type `sm plugins list` in the server console.
<br>You should see the following line in the output: `GlobalAPI-Core (1.2.1)`.
:::

## 4. Install KZTimer-API

1. Start by downloading [KZTimer-API](https://bitbucket.org/kztimerglobalteam/kztimer-api/downloads).

2. Extract the files into your server's `csgo` directory.

3. You should now have GlobalRecords-SMPlugin installed and working.

::: info Confirm this step
Restart your server and type `sm plugins list` in the server console.
<br>You should see the following line in the output: `KZTimer-API (1.2.2)`.
:::

## 5. Verify installation

Once you have installed the above, type `!globalcheck` in chat.

You should see output being the following:

[<span style="color: #36EE56">KZ-API</span>]
Global Check: API: <span style="color: #FF0B00">X</span> |
Ver: <span style="color: #36EE56">✓</span> |
Settings: <span style="color: #36EE56">✓</span> |
Map: <span style="color: #36EE56">✓</span>

## 6. Verify configuration of the server

Install the [KZ Server Advisor Plugin](https://github.com/KZGlobalTeam/csgo-kz-server-advisor).

Use the `sm_kzserveradvisor_kztimer` command.

Check the log file made in `csgo/addons/sourcemod/logs/L********.log`.

The output must show **OKAY** or **PASS** for all tests.
Rectify any issues and run the command again.

## 7. Apply for an API key

1. Sign in to the [GlobalAPI portal](https://portal.global-api.com/dashboard/servers/owned).
2. After logging in, click "New Server".
3. Fill in your server's details and press "Apply".
4. Once you've applied, you will see the server listed.
5. Note the server's id, you will need it in the next steps.
6. Click on the arrow on the left of the server and copy your API key.
7. Paste the API key as is into `csgo/cfg/sourcemod/globalrecords.cfg`.

## 8. Posting an application

1. Login to the [forums](https://forum.global-kz.net).
2. Follow the instructions on the [CSGO Server Application wizard](https://forum.global-kz.net/w/csgo-global-server-application).

The Global Team will then review your application and advise you further if necessary.
