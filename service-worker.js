/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/2014/02/01/keservicedescriptortable-patching-aka-how-to-hook-win32-api-patching-the-kernel/index.html","6f10578e652c6b3b2858d9e4c15bae1a"],["/2014/02/02/process-introspection-for-fun-and-profit/index.html","46ec0e2e886c036fc4f63ad6a7d9afd8"],["/2014/02/05/termination-and-injection-self-defense-on-windows/index.html","518e122fe1bea0507e54e1a3ab8ed972"],["/2014/02/11/on-windows-syscall-mechanism-and-syscall-numbers-extraction-methods/index.html","b7160d4cc0afc8d2fa1d1ea282c96b73"],["/2014/02/21/libpe-a-fast-pe32pe32-parsing-library/index.html","99c0119be24832f2d4d21154d71563ad"],["/2014/03/11/programmatically-identifying-and-isolating-functions-inside-executables-like-ida-does/index.html","367faf6adeed93de962535bc9232bdf6"],["/2014/03/25/about-redistributing-open-source-apps-dsploit/index.html","36aefd501d0c27155cc2f7421f85d7b4"],["/2014/04/21/why-reinventing-the-wheel-isnt-always-wrong/index.html","bf2a9a16c4a04fe1180160e1973c0d6d"],["/2014/07/15/how-telcos-are-bullying-researchers-an-italian-story/index.html","a5e5a3f054d62f4969644749c9b0e85d"],["/2014/07/17/back-from-the-grave-elf32-universal-command-injector/index.html","e4caa3b22d0d35bb75e22db10912e2ff"],["/2014/09/22/back-from-the-grave-vmware-host-clipboard-grabber/index.html","b5a54ac270c5b68c6599c36eac479b7d"],["/2014/11/03/dsploit-merges-with-zimperium-zanti2/index.html","36ba3e801fd951570e7b97bf2fc15575"],["/2015/01/16/how-to-install-metasploit-on-os-x-mavericks-and-yosemite-an-updated-guide/index.html","8b2d326751a60953384e4160f6b473da"],["/2015/01/29/nike-fuelband-se-ble-protocol-reversed/index.html","90e73ff318a30c80c5edf6bf9b8e1e2d"],["/2015/02/01/huawei-usb-modems-authentication-bypass/index.html","71f5e6e3c520bf9970c25ac9f9fefa89"],["/2015/02/11/hackers-phishing-leakers-a-new-bitcoin-phishing-social-technique/index.html","6a11eaccc2199d910d3b2f796eb6fc7f"],["/2015/02/12/rubertooth-a-complete-ruby-porting-of-the-ubertooth-libraries-and-utilities/index.html","3cda9b8b12779250b0797a1febd8ce01"],["/2015/02/20/superfish-adware-found-inside-x-notifier-extension-code/index.html","3f82252c7e9e9a134808db6010e21cf9"],["/2015/04/30/fuzzing-with-afl-fuzz-a-practical-example-afl-vs-binutils/index.html","1b205469c260c6ff6dcca04709caf945"],["/2015/05/01/dynamically-inject-a-shared-library-into-a-running-process-on-androidarm/index.html","7feeb39d133fb33535d4e2ce80dcd91e"],["/2015/05/02/using-inline-assembly-and-naked-functions-to-fool-disassemblers/index.html","3795cd52d769c62db9b978f762441157"],["/2015/05/04/android-native-api-hooking-with-library-injecto/index.html","13428009efbe42980c47ea707f49c7e4"],["/2015/05/18/introducing-fido-a-minimalistic-cc-project-generator-supporting-templates/index.html","a9ff92f80f0af514da18bacaf5f43db4"],["/2015/06/15/how-to-root-the-lg-watch-urbane-b285/index.html","ae5dd1461658b3eb1f3166bb9255b6f4"],["/2015/07/25/bettercap-a-complete-modular-portable-and-easily-extensible-mitm-framework/index.html","72eba63084c667061d8f124e1784a576"],["/2015/07/27/how-to-use-old-gsm-protocolsencodings-know-if-a-user-is-online-on-the-gsm-network-aka-pingsms-2-0/index.html","d5c5b2ccf1d3ab57490e4dd4425a5b15"],["/2015/10/26/karma-come-lopen-source-ha-cambiato-la-mia-vita/index.html","69d155d90e56cb6163561b868364a2f9"],["/2015/10/27/karma-how-open-source-changed-my-life/index.html","2a6b10cee5aba8ef10b57e1bc48e2290"],["/2015/12/01/past-present-and-future-of-bettercap/index.html","69ae1d37d4562b7101a58a37edcf57a0"],["/2016/01/10/bettercap-and-the-first-real-icmp-redirect-attack/index.html","a70ee05ff0a594b235fdd0360b5549c2"],["/2016/01/18/autopwn-every-android-device-on-your-network-using-bettercap-the-and-addjavascriptinterface-vulnerability/index.html","2fd63cd2f4e9c5baa12c1fa880995444"],["/2016/01/28/why-you-shouldnt-trust-cloudflares-flexible-ssl-and-how-to-bypass-it-with-bettercap/index.html","ec48d5e0bb28eba7c1e3beb8392d40c4"],["/2016/01/30/osx-mass-pwning-using-bettercap-and-the-sparkle-updater-vulnerability/index.html","ea3b5d91b83361deb2609d7b42c5322d"],["/2016/03/31/how-to-build-your-own-rogue-gsm-bts-for-fun-and-profit/index.html","b6d861e149630db8b4f1293583a24661"],["/2016/04/18/how-i-defeated-an-obfuscated-and-anti-tamper-apk-with-some-python-and-a-home-made-smali-emulator/index.html","34270f8d773fddf92c0b9020a2d8ffc2"],["/2016/05/03/is-this-a-declaration-of-cyber-war/index.html","07f19484e6d307d869a2994fcf094195"],["/2016/05/08/Hacking-Yourself-out-of-the-Banking-System-and-Live-only-on-BitCoins/index.html","7a2b2594d1afa01c101f9a4a1f74b205"],["/2016/05/30/Hacking-Yourself-out-of-the-Banking-System-and-Live-only-on-BitCoins-EPISODE-2/index.html","1c265172e905bb7438b789d6e97d16a1"],["/2016/06/19/presenting-openbank-a-safe-and-easy-to-use-btc-tracker/index.html","68e4d930d20a98a608ad61461fd031c0"],["/2016/07/27/How-The-United-Arab-Emirates-Intelligence-Tried-to-Hire-me-to-Spy-on-its-People/index.html","e3e2c5d1c44e3bf3cb27e7ca6b1e4787"],["/2016/08/17/Samsung-Galaxy-Apps-MITM-Vulnerabilities/index.html","5e07c59e036cc43a2e4c0b831c79cbc6"],["/2016/08/24/RCE-against-every-open-source-BTS/index.html","4d18314d41b5ff61a8b1eaad1f2f384b"],["/2016/09/15/WiFi-Pineapple-NANO-OS-X-and-BetterCap-setup/index.html","0cd32a06b38b567b75f58d5c3740793c"],["/2016/10/02/Un-po-di-consigli-per-aspiranti-professionisti-del-settore-della-sicurezza-informatica/index.html","41ca2eb26ddf414d66fa99b48406b669"],["/2016/10/09/IoCOFFEE-Reversing-the-Smarter-Coffee-IoT-machine-protocol-to-make-coffee-using-terminal/index.html","c84a5de842b30cc65d6c24d1a0cabc0b"],["/2017/01/14/Thoughts-on-WhatsApp-E2E-Encryption-AKA-Security-is-real-only-if-it-s-the-default/index.html","47e440e007af795ee89f29957f547403"],["/2017/04/27/Android-Applications-Reversing-101/index.html","9792d62cd9f278bb5a0ae37bc32488c1"],["/2017/05/30/Terramaster-NAS-Unauthenticated-RCE-as-root/index.html","edc38e222ec6e6f36fc941ecfbe76079"],["/2017/06/30/BetterCap-1-6-1-TLS-Server-Name-Indication-and-Why-We-Need-to-Encrypt-It/index.html","04f7f455bd3b4395660b333a45010ddd"],["/2017/08/15/gpd-pocket-7-impressions-gnulinux-installation-and-offensive-setup/index.html","ed64ef5a6db521ff1fae64eb181d3ef2"],["/archives/2014/02/index.html","3cca03704751673956441d29e32fd788"],["/archives/2014/03/index.html","f52759207640fe797efb79e4e6ed7781"],["/archives/2014/04/index.html","51b746cf6e4bf8b3a590bcfa2809a356"],["/archives/2014/07/index.html","ac269f63ede2280b68ba0ea4a8b1e89c"],["/archives/2014/09/index.html","f1622a92a6da15425b5534d2c0175635"],["/archives/2014/11/index.html","37d74df9a5eafecc9dbe4aa7f1217568"],["/archives/2014/index.html","d32d376cbd2f869b7c1224065d70e677"],["/archives/2014/page/2/index.html","1e644d9095f0e95ffdb107511b2c757c"],["/archives/2015/01/index.html","64b09f4b35259c9efef69a64dbea0aad"],["/archives/2015/02/index.html","b2596c4bb91e86e1b65afe9c07066e2b"],["/archives/2015/04/index.html","32a2cd972b79ace9a8ddbd66d33a4fdc"],["/archives/2015/05/index.html","5202777c932d23e171178bf8f353757b"],["/archives/2015/06/index.html","1e3f5842517a30645ea56e32eba1fd79"],["/archives/2015/07/index.html","a58765dd3f7feb14c7c1795bf88d0aa5"],["/archives/2015/10/index.html","e7cba3b7a402d5faa8fd4a0194a0433f"],["/archives/2015/12/index.html","ce2f749363495287e3ce65c764c5d10b"],["/archives/2015/index.html","73142ee5407be8ba50ef505676d8d731"],["/archives/2015/page/2/index.html","33d447795cc3ea2d0dea2fe2317f433c"],["/archives/2016/01/index.html","b7e843dac710284fa8f537d635b9e1ee"],["/archives/2016/03/index.html","bd269decc255230b182e25adc1d9dd0f"],["/archives/2016/04/index.html","f430f6f2bf834936d9b05ff326b7cb33"],["/archives/2016/05/index.html","c75f160056a148e6b1f94df324708380"],["/archives/2016/06/index.html","e1bd8e6913923e0cf333e2ec507d7546"],["/archives/2016/07/index.html","c4cb36a2ae904a0232d73b9901cc9f1e"],["/archives/2016/08/index.html","c0fcea90a9f423a32d703bfca981bad4"],["/archives/2016/09/index.html","1c35d3ce46787f52d5568a988baa6b0b"],["/archives/2016/10/index.html","c009f86c5f9e58f39f24f4f5033122cc"],["/archives/2016/index.html","684ed1a9c1cd542ce50c2456ae3b1063"],["/archives/2016/page/2/index.html","470fcc06dc4a8aa5c5ce05bea1e5e222"],["/archives/2017/01/index.html","93aa456fb00d81f9b0e10f5962e834bb"],["/archives/2017/04/index.html","5d3307f910899a58af7b2c1cfc446ef0"],["/archives/2017/05/index.html","2fa9b3a22cb23271a54758bafaaeb665"],["/archives/2017/06/index.html","11e4e10af6c6df32f138b16319b977cf"],["/archives/2017/08/index.html","b9b730325eecdd136551fa3865cc31b6"],["/archives/2017/index.html","5f938cdf63e9492552a7e5e570955166"],["/archives/index.html","6cba3937c1bed7dd67ebd957e325c556"],["/archives/page/2/index.html","6fc0ab6d5fc1e366d23d4378cca4f33a"],["/archives/page/3/index.html","7cb887fe29ca40d82d5cb1a2605eb496"],["/archives/page/4/index.html","ecb0f7acdfc32287e91357cc238a4704"],["/archives/page/5/index.html","e089f5ecc5dc4ba1f4b0211db87bde5b"],["/blog/index.html","de842b7430804ebacfb64f85eb71cacc"],["/blog/page/2/index.html","893927e13bd23129d9af23e63485ccb5"],["/blog/page/3/index.html","dbefe9e678b7fa5dc9995af1f283b17d"],["/blog/page/4/index.html","4147d292b87d3e1e3acdce5b522a002b"],["/blog/page/5/index.html","ce43770f2f4300807aefd97b04bee3cb"],["/books.html","d4b9e4c21648dd66f3830d3e8a62c2d4"],["/css/fonts/fontawesome-webfont.eot","8b27bc96115c2d24350f0d09e6a9433f"],["/css/fonts/fontawesome-webfont.svg","0a799148a50bb02c6f380eabd8d97559"],["/css/fonts/fontawesome-webfont.ttf","dcb26c7239d850266941e80370e207c1"],["/css/fonts/fontawesome-webfont.woff","3293616ec0c605c7c2db25829a0a509e"],["/css/images/banner.jpg","b3afb546511411b6c8765cf017f0d4a3"],["/css/style.css","81a3e524ddd6cb6e6b7f2cfe716254fd"],["/fancybox/blank.gif","325472601571f31e1bf00674c368d335"],["/fancybox/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/fancybox/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/fancybox/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/fancybox/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/fancybox/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/fancybox/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/fancybox/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/fancybox/helpers/jquery.fancybox-buttons.js","f12190546a9cc3cf28c99ce3839c35ae"],["/fancybox/helpers/jquery.fancybox-media.js","a43c71c37d726096a48b0d6d654dc25c"],["/fancybox/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/fancybox/helpers/jquery.fancybox-thumbs.js","b3d9cb05b56033141ae6f6358df2763f"],["/fancybox/jquery.fancybox.css","fd7de7df5125265bbd78984d637cf90d"],["/fancybox/jquery.fancybox.js","627b3fae16845d1942d3cd4270098111"],["/fancybox/jquery.fancybox.pack.js","b6d0034563763b4bb7da451d54301c9f"],["/images/2014/Feb/259477_hi_tech_rabochij_stol_internet_oboi_super_1920x1080__www_GdeFon_ru_-1.jpg","19c9d7ebe62182001493d1e09df7295f"],["/images/2014/Feb/259477_hi_tech_rabochij_stol_internet_oboi_super_1920x1080__www_GdeFon_ru_.jpg","19c9d7ebe62182001493d1e09df7295f"],["/images/2014/Feb/Hacker_Redux_by_HashBox-1.jpg","f5bdadc4fd186443f3caac134cb92c77"],["/images/2014/Feb/Hacker_Redux_by_HashBox.jpg","f5bdadc4fd186443f3caac134cb92c77"],["/images/2014/Feb/KeServiceDescriptorTable_export.png","4c8c586934595f8f44883e5a0b1d60d9"],["/images/2014/Feb/dump.png","a049942d3ce06c22271ef1a02075b2cc"],["/images/2014/Feb/hidden_module_wow.png","3d6f61ad546d9a5138c1f46dcc832282"],["/images/2014/Feb/mainframe_by_morpheuszero_desktop_1600x1200_hd_wallpaper_694501.jpg","dcae7f332a05f65783fba6a3500d3229"],["/images/2014/Feb/me.jpg","c3f37ab8f1b9d9960b023d3dfaf15dd5"],["/images/2014/Feb/neuromancer___chiba_by_phatandy_d3ivwxv.jpg","8a58145b2d667678daf74e29e627b3be"],["/images/2014/Feb/rounded_corners-1.png","ec0ec992fe7c54c373342c9608e6ecf6"],["/images/2014/Feb/rounded_corners-2.png","2a496c997e0063229a54aa4bf64b7146"],["/images/2014/Feb/rounded_corners.png","ec0ec992fe7c54c373342c9608e6ecf6"],["/images/2014/Feb/rounded_corners_2.png","2a496c997e0063229a54aa4bf64b7146"],["/images/2014/Mar/263644_10151251066869223_1271927000_n.jpg","88a8892aedb5bd35c77d0fa82a667a6c"],["/images/2014/May/10341416_10202688874716644_8522481762679271944_n.jpg","6dcfda794acf9de17f267f2311ac6204"],["/images/2015/01/nikeband-1.jpg","d41d8cd98f00b204e9800998ecf8427e"],["/images/2015/01/nikeband-2.jpg","fc484c2e6639d32c5e6ac50b7471d8a6"],["/images/2015/01/nikeband.jpg","fc484c2e6639d32c5e6ac50b7471d8a6"],["/images/2015/02/Huawei-Logo1422524173-1.jpg","5bf1a3027b038b438bcb8e693c4e8af7"],["/images/2015/02/Huawei-Logo1422524173.jpg","5bf1a3027b038b438bcb8e693c4e8af7"],["/images/2015/02/Schermata-2015-02-11-alle-20-46-29.png","fbeb1cb9d0914b76727861676843f0c9"],["/images/2015/02/Schermata-2015-02-11-alle-20-49-14.png","2286131db9d29148ef78b41b865e8a76"],["/images/2015/02/Schermata-2015-02-11-alle-20-51-35.png","d29329ce061d18f174d51546c303d4cf"],["/images/2015/02/Schermata-2015-02-12-alle-20-25-17.png","f96bb667751db1e3171840958079950d"],["/images/2015/02/Schermata-2015-02-20-alle-18-22-05.png","c7e8d4595811dc1b278c3813d548ce93"],["/images/2015/02/Schermata-2015-02-20-alle-18-22-34.png","8756ddac2329205c55d5dfbfa522f085"],["/images/2015/02/bc39fd77b95c22fff332e8bf38ff78b52c88da48826447d3e7d37579740f2cf7.jpg","4f7b6e18f657530b62724007c888c9c2"],["/images/2015/02/ubertooth.jpg","24873c941a37ab20f43f119ae2db2d80"],["/images/2015/04/lop-1.png","0b890caf54eee3ea7b741c1cb8670d75"],["/images/2015/04/lop.png","0b890caf54eee3ea7b741c1cb8670d75"],["/images/2015/05/116572.jpg","03c618cf4b5f5a35ccd8d5e947acef21"],["/images/2015/05/309252_10150321637414223_2120926431_n.jpg","897f3492a58dc48be434a4635e6b4fd7"],["/images/2015/05/FYG.png","504cdeaa4c94910a8c23ac17025298a5"],["/images/2015/05/download.jpg","1f54a798db23a267d2ef8f6727136a2b"],["/images/2015/05/elf.gif","27218e3d0d14bf2ffc8ec7bee4cae69b"],["/images/2015/05/fido.jpg","e5a6f6320404e4f464395df59b03e6a8"],["/images/2015/05/hopper-1.png","a7493df062e623223d1d73608931bcd3"],["/images/2015/05/hopper.png","a7493df062e623223d1d73608931bcd3"],["/images/2015/05/ida.jpg","ab83eb62bf0d7599115d11ea4aba2d9b"],["/images/2015/05/me.jpg","1e14a2a99b49ce61fb4cf2544a5d087c"],["/images/2015/05/sekSFKj1_400x400.jpg","ecc1cf74560b959fdd262ba3e73547f9"],["/images/2015/05/some.jpg","c2c6f3f47346ecd2403cdfa24d9c6940"],["/images/2015/06/LG-Watch-Urbano-9-1280x914.jpg","57f329216e3b1c5b3a4df82290544400"],["/images/2015/07/11701140_10153376221264223_471566864264972972_n-1.jpg","8a14b46b162521322d7904802bff2bc8"],["/images/2015/07/11701140_10153376221264223_471566864264972972_n.jpg","8a14b46b162521322d7904802bff2bc8"],["/images/2015/07/1O4A0617.jpg","9c426457b9ed64b98ff288f6ed3a2809"],["/images/2015/07/315993-iphone-tracking.jpg","1304d6b756fb35c1d3b27fcb485205d6"],["/images/2015/07/quantum_of_solace_james_bond_roll_parody_rick_astley_rickroll_desktop_1680x1050_wallpaper-249024-1.jpg","d69fda4306cb311cfef4e8b6420d43d5"],["/images/2015/07/quantum_of_solace_james_bond_roll_parody_rick_astley_rickroll_desktop_1680x1050_wallpaper-249024.jpg","d69fda4306cb311cfef4e8b6420d43d5"],["/images/2015/08/11886190_10153603252262053_432376360479522282_o-1.jpg","b0079e96ba5be355aaeb1c3856c5d661"],["/images/2015/08/11886190_10153603252262053_432376360479522282_o.jpg","b0079e96ba5be355aaeb1c3856c5d661"],["/images/2015/10/10418552_10152389867564223_419786986_o.jpg","d5df2712eb21fca4b40994ae9ad34dd9"],["/images/2015/10/201138_10151199203439223_1398967788_o.jpg","d7568c1da7a1d46dbeb3c7722b8e5270"],["/images/2015/10/amsterdam.jpg","d5df2712eb21fca4b40994ae9ad34dd9"],["/images/2015/10/dsploit.jpg","d7568c1da7a1d46dbeb3c7722b8e5270"],["/images/2015/12/homepage-logo.png","8527e16962d716f00170b34ca9008fdc"],["/images/2015/Jan/Schermata-2015-01-29-alle-20-53-25.png","021e1365c83e9997efba7df684885c5d"],["/images/2015/Jan/gatto_guerra.jpg","6c4097099af78bc4ba95af5a91eaeeb0"],["/images/2015/Jan/major-facepalm.jpg","2874b20f0da978901aa16d089378a88b"],["/images/2015/Jan/nikeband.jpg","fc484c2e6639d32c5e6ac50b7471d8a6"],["/images/2016/01/10686838_10152650615809223_6942842188173927627_n.jpg","1e14a2a99b49ce61fb4cf2544a5d087c"],["/images/2016/01/Meme-derp.jpg","cd157e5d182a6ed3ed6442e6515bd056"],["/images/2016/01/Schermata-2016-01-28-alle-18-08-27.png","3d49a6d3d370a29013e827a8c1abbef5"],["/images/2016/01/androidpwn-1.png","e7494030a4203b32ee4edf888178f0dd"],["/images/2016/01/avatar_ninja.png","a85820b9b1394da2b54b6cc7732ba09c"],["/images/2016/01/avatar_ninja_whitebg-1.png","7652928ad2274a610e7e06dd8b7f8fac"],["/images/2016/01/avatar_ninja_whitebg.png","7a9e6c05f96ac87be3d02dd95196ad7a"],["/images/2016/01/banner-772x250.png","e9425e9740668f1adb9085301b9b4e42"],["/images/2016/01/bettercap.png","c7fba4353fe457decc2711d9d597ffcc"],["/images/2016/01/bettercap_cloudflare.png","c1a12b4ebe750e531575e63a6add6e76"],["/images/2016/01/flexiblessl.png","887c8f4ae8c066a67cafba832143bd9c"],["/images/2016/01/hacked-1.jpg","e8d5e6c2dc0a95de4378e9ef313ea038"],["/images/2016/01/hacked.jpg","e8d5e6c2dc0a95de4378e9ef313ea038"],["/images/2016/01/hsts.png","1bee4712fe48aa09511dda9426cb0c6a"],["/images/2016/01/pagerule.png","598097317e0d6e7558251a7f1ce1dbb7"],["/images/2016/01/papel-de-parede-meme-freddie-mercury-136608662.jpg","2fead32d3acf461d5cd69f8abe7ed6ba"],["/images/2016/01/pasha.png","f4db2455939d8d6fb19ed434e5711fa2"],["/images/2016/01/photo.jpg","f0ab8f895fb84f1c90a8bb3357b3dde3"],["/images/2016/03/avatar_rounded_corners-2.png","2a496c997e0063229a54aa4bf64b7146"],["/images/2016/03/nibui-1.png","928ce99e93bbfcd1ec79dd6dde74af8d"],["/images/2016/03/nibui-2.png","7a8f663e2be9b55eb2a1fb0127092847"],["/images/2016/04/Okay-Meme-Gif-05.jpg","d37428477abf83b91881cb212b815e21"],["/images/2016/04/apktool.png","920a2a24e686e21653fce1037c712f2a"],["/images/2016/04/barcellona-1.jpg","897f3492a58dc48be434a4635e6b4fd7"],["/images/2016/04/barcellona.jpg","d41d8cd98f00b204e9800998ecf8427e"],["/images/2016/04/challengeaccepted.jpg","32b671e0261adddb1797e556b3afada9"],["/images/2016/04/phase1.png","d16612829243a5600a0afa0bba608ff8"],["/images/2016/04/pwned.png","49a00a2a9b401e285d7a79dd92461450"],["/images/2016/04/thailand.jpg","8a14b46b162521322d7904802bff2bc8"],["/images/2016/04/victory-1.jpg","635f8fda158f44cf3607f222b8b70165"],["/images/2016/04/victory-2.jpg","daee06d692b32e1c484b6919fba1adec"],["/images/2016/04/victory.jpg","daee06d692b32e1c484b6919fba1adec"],["/images/2016/05/account.png","82feaa9db9961b831bbfe6b7c69a9e92"],["/images/2016/05/bitcoinity.png","6c762be68b5845e894eadf99b841d27b"],["/images/2016/05/bitcoins.jpg","5a69abf036afe427d0b876f51ccdf6a0"],["/images/2016/05/bitwage.png","e500f26161662d27d9419802ccb2cb6e"],["/images/2016/05/bitwala.png","bdc2bff44eca972b0696beae73509862"],["/images/2016/05/btc.png","69b693ec95ef8d8001041f501cc04fc4"],["/images/2016/05/btc_setup.png","d5938ded653caeeef9a69613f558ca67"],["/images/2016/05/giftoff.png","3c91f7478a751c1cd5b4cf7104e722eb"],["/images/2016/05/internet-privacy.jpg","13b96d89a4613ca92de8eaa76548447b"],["/images/2016/05/reddit.png","ffef08b2c72325d165cbd955a879b028"],["/images/2016/05/rome.jpg","424415609043b1a093eae330bf37ae3e"],["/images/2016/05/trezor.jpg","503467fa2a617caefbf764f5ea067b67"],["/images/2016/07/albannai.png","0c0c3e0cc390e4f7a7befa3e0d012091"],["/images/2016/07/marinaplaza.jpg","f7e0318b6403be6ac33dd9c16fb72c45"],["/images/2016/08/androidManifestList.png","9daa8d7b7a95bd4037f2244246c3e32a"],["/images/2016/08/galaxyapps.png","f063b9abdee7fe3b6500e12f0ac8ae00"],["/images/2016/08/mail.png","8d08d8fd83a5bdd3f087bfbf4544b135"],["/images/2016/08/productDetailOverview.png","b3aa0fe756f9fecf5b4ad0ccbab8cae9"],["/images/2016/09/ics.png","e20e3362514b18a7774dbe360e207c3b"],["/images/2016/09/ics_working.png","aa8cf96a6267da857b866e49c75515c5"],["/images/2016/09/ip.png","a1ce2dea06c8188f927c7220c42bda66"],["/images/2016/09/nano.jpg","98c504efd0a5dd4ae2328bac21c212d7"],["/images/2016/09/pineap.png","f81e4da9cf419765df79606a6a43a58c"],["/images/2016/09/setup.jpg","868939c62dd0f1eeda8914e318c0f99b"],["/images/2016/10/cat.jpg","cb5eafb205bc2a1914fe240e5d441cf9"],["/images/2016/10/firmware.jpg","0d43ac7e433be803a61850d9f7f00426"],["/images/2016/10/machine.png","594983fa528ad69bd3016340806d2137"],["/images/2016/10/methods.png","674ec74c150903ad14994ef273a5bda5"],["/images/2016/10/oss.jpg","6e7b8815b6a873ae9f8885cab1d522f3"],["/images/2016/10/pill.jpg","f44cc38af60d86a3f9295fa49b3d58cd"],["/images/2016/10/renzi.jpg","5b5cc1df3e0d0b0feb73c4ef3fe81e1a"],["/images/2016/10/social_life.jpg","176124393c6918796c3495b1af2dd24d"],["/images/2016/10/terminal.png","1264928f2f5e39e516441adcdcdcba7f"],["/images/2016/10/vim.png","ed8ce7be53c44b0a5d84990cee379e04"],["/images/2017/04/androidstudio.png","1c887c79a27d0190f1088a9a3b211272"],["/images/2017/04/apk_header.png","b6a70305b679d41dfa54e2e5a3104cee"],["/images/2017/04/bettercap.png","fe5d793155e92625fdba6796f283794a"],["/images/2017/04/cuckoo.png","774a94d1a7a85b8e0465badfdd1fea23"],["/images/2017/04/hopper.jpg","fd8f3cde56172f74e7b2ca217b88be74"],["/images/2017/04/ida.gif","22e0f5d99199cba41dec84f2f1348761"],["/images/2017/04/idadbg.gif","5bac5ac80934bd637096777c1d7e95d7"],["/images/2017/04/jeb.png","364867580748288af692fd53252c9589"],["/images/2017/04/joe.jpg","430c8b9720c1ad0b5ac2e30e373620ca"],["/images/2017/05/bingo.png","2bd5d26aa8c0d05949d416ba1c618be6"],["/images/2017/05/configure.png","bc7a0102c27b2ff186dc3045ade87252"],["/images/2017/05/exploit.png","d8b2c9fc1bd51d532a12e6baf9498dda"],["/images/2017/05/nas.jpg","57299060836698a23cb94ac936db41d7"],["/images/2017/05/obfuscated.png","5aa6db77891da0a11fe5653ee11d641d"],["/images/2017/05/terramaster.png","382fe7f981a8a17583f5def55321841f"],["/images/2017/07/encrypt.png","ec819de6232e053895b2716ab2663cfa"],["/images/2017/07/sni.png","aa2f7e7314445dd5193ca7a25391515b"],["/images/me.png","9f9ddd98fb429a52ec8ddbd939c19f70"],["/index.html","36d9f6dd841e363f0353e67c71d962b7"],["/js/script.js","7d18beaed09b6fcd56a4a2a5cc4b885c"],["/page/2/index.html","f2d94e06c1aa223e5804b63a4aebada4"],["/page/3/index.html","7033f8603ea56e26c426e36a1815c067"],["/page/4/index.html","1c5111e982e69779058c4b145da8ecd7"],["/page/5/index.html","b0e1fd31b0c85f2b86ba3c37eb60e748"],["/random-facts-about-me.html","948ea36c81bc89f51d6a644e74ad9d25"],["/tags/2007/index.html","15fc5c0bb744b9f5e16dec12daf1ed6c"],["/tags/BLE/index.html","d3df0e3a621b5f3cf89e289ebd65d7c6"],["/tags/Dex2Jar/index.html","1c273de6c1c84d2c64d945cefdea3d1f"],["/tags/Frida/index.html","e750dd90c533a7455497be43fa9ac52a"],["/tags/Hopper/index.html","822b00e7137dc26ca57db9b69e448b3c"],["/tags/IDA/index.html","178bff8dbfdac456a73eb6f299fd6947"],["/tags/JADX/index.html","48563792701d5525fdb8819c9a58a478"],["/tags/JD-GUI/index.html","cf8a1d43c1a9e1aedbb0fd18cc483c22"],["/tags/LG-G-Watch-R/index.html","5a973f8f878d4ee407868ace1864068b"],["/tags/LG-Watch-Urbane/index.html","373afba4c824ed091d62402a91b6c694"],["/tags/ObRegisterCallbacks/index.html","f3a9b17ed4f287dce45634bc763da7dc"],["/tags/SmsManager-sendDataMessage/index.html","5f111937c0de4aabfcb1f38578c5829d"],["/tags/SmsManager/index.html","2a3199abdeac81392c49ec0a59cb7a74"],["/tags/SuperSU/index.html","89d9539a23d1886a4e599ab1d74849ca"],["/tags/TWRP/index.html","6674cd1718ceb113c6806ecbe4b0b819"],["/tags/UAE/index.html","63416dc587209331a8f2ad9d683a51bc"],["/tags/Windows/index.html","3ac996558fb3643d2f4057952a154953"],["/tags/XDA/index.html","bc36d4f2f64cf190355c3456593ecc47"],["/tags/XPosed-Framework/index.html","1e70aeb76d2db92fafd3baf8aab3723d"],["/tags/XPosed/index.html","82a7c095e67c7e116ef9a114278e0463"],["/tags/addJavascriptInterface/index.html","81cd0d133c8f76381a8ef17bde44963b"],["/tags/adv/index.html","e264b7db1639b4508fb955094a17e56f"],["/tags/adware/index.html","957a544fa2601a00fe756ef2c8297105"],["/tags/afl/index.html","54577ef87fec2a2d4971ad464c2c6c86"],["/tags/american-fuzzy-lop/index.html","2af008a361103fd9b32fb7bcdea84ad9"],["/tags/android-wear/index.html","80788dd041e9058a7607936561323ec1"],["/tags/android/index.html","29f1886724f640e0de40b45a1364aa40"],["/tags/api-hooking/index.html","26a618997afa60b71287773139269e3b"],["/tags/apk/index.html","4e30666e1f3be053e214093ed6b7b9a8"],["/tags/apktool/index.html","c8949a6df68d4b806515b2864f78ea75"],["/tags/arm/index.html","416f734f21b0989de40a0659535d9903"],["/tags/arp-poisoning/index.html","01b655119b08652012cf14ce7f7e8e3f"],["/tags/arp-spoofing/index.html","0800dac1766ccd5f6f998a14b7e18f15"],["/tags/assembly/index.html","5d770d0cec31edd5a74fcd4db9b9a717"],["/tags/authentication/index.html","45d99dc912b3d687e4e15d3a95afaf10"],["/tags/backdoor/index.html","0db2e835d74323c40f83fd43e1ffaebf"],["/tags/bank/index.html","6651ff3c8446536193ace4f3896af4e6"],["/tags/banking/index.html","5421b7c14be3500d8f3b9f300b4d0e74"],["/tags/banks/index.html","84173710edf15fe00bb251cb34308480"],["/tags/bettercap/index.html","98b3ac4b8c270d2216bd4d86da70cb9a"],["/tags/binary-instrumentation/index.html","3a1ab623a94365de3d3c68f7331c32ef"],["/tags/binary-protocol/index.html","c14aebffe10d3e6dd3aadf7278dcb242"],["/tags/bitcoin/index.html","e51dbdf8b49fd1d544ebcec5bba0bff8"],["/tags/bladerf-x40/index.html","5b913abbfc1c800a3151b51fef15c549"],["/tags/bladerf/index.html","15ef5af8c635be3742e6339917dbb0a8"],["/tags/blockchain/index.html","2aac03ae4b0d80f0454fb99bf42e1802"],["/tags/bluetooth-low-energy/index.html","dd35a69ee2409c41965b3e844468910b"],["/tags/bluetooth/index.html","45d2e69fbc70293ba4b04336671cfe88"],["/tags/bot/index.html","04a8837083c2a5e47d6d2f2d89d739c6"],["/tags/bots/index.html","f7499929e2eb795276d0030dedbdd260"],["/tags/browser/index.html","c3f0d94b56588c4c2bae6aea1b859b23"],["/tags/btc/index.html","045269d7edfa2dc4a84af4dc8de79127"],["/tags/bts/index.html","66f0af885686caaa007104f5f1d4ea5a"],["/tags/bullying/index.html","29d5e5192cafa1384fcafe0ef065a875"],["/tags/bypass/index.html","d144f3548c505f49ca558088a38c5e28"],["/tags/c/index.html","e1d40ac08060fdc6aeab82c2eeb2a49e"],["/tags/censorship/index.html","9509ff7e80c21161dfc466bc7b7b9b98"],["/tags/changelog/index.html","f0edbbdc9f63bad0972da58f12668f1e"],["/tags/chrome/index.html","1fca2d3657034bc7024e87ca6b305c92"],["/tags/clang/index.html","d9518163176f433fff9684c6a0de1267"],["/tags/clipboard-grabber/index.html","e828648579073b39b18385a24e2234ed"],["/tags/clipboard/index.html","ef58f6c54c719a7e0ca99565ce4f69bf"],["/tags/cloudflare/index.html","ba878af3f99022992c70e4742617f565"],["/tags/coffee/index.html","5d98316d1c916e6a6b149272348729fb"],["/tags/command/index.html","98c11480d327d8a8be5379c94534b9b1"],["/tags/consigli/index.html","180718240553891dbadab59da726ab86"],["/tags/corporate/index.html","692c53c81439f75a66c35aa7521f22b4"],["/tags/cr0/index.html","e10677431e38a03d06d34d9436e344a2"],["/tags/craig-wright/index.html","284561aae9e8f1ebf2f83a76eeedf1bb"],["/tags/crash/index.html","e24721d255f92c683d46af24aeb923dd"],["/tags/cryptography/index.html","0c61fcda2f8e5cfaaddfbea6712524c5"],["/tags/cyberbullying/index.html","7664ad3a0e93de8cc5a25a1a04055e05"],["/tags/dalvik/index.html","f09c6dbf3f96567881485b2ab7560d81"],["/tags/delivery-report/index.html","04a43164a4da7967168dc360120512a9"],["/tags/dex/index.html","3a7ad92745736595c8b5b3364516e49c"],["/tags/disassembler/index.html","c0b445a96a26ed481673753f38819fb5"],["/tags/disclosure/index.html","1233e18dfff722ae39c8154961924b6d"],["/tags/distorm/index.html","a676f64065c91dd792bf5a58a8fb1e6b"],["/tags/double-direct/index.html","b90b396bfb02d789d2c274c04e667896"],["/tags/doubledirect/index.html","3c16771c286d901f680ec8417efa4eba"],["/tags/driver/index.html","ab1880b96466c266088470437b27ef32"],["/tags/dsploit/index.html","3b8ec3da5379263d768db9e67ea33fad"],["/tags/e355/index.html","cd800741f1471a0cc2c9dc46bc6cf034"],["/tags/e587/index.html","28832fc96788978eb23aa38d85b53512"],["/tags/elf-command-injection/index.html","88cb22158f1cfd65a5c162a617f92781"],["/tags/elf-relocation/index.html","884ecf8bbc95c86cfcdf662f97452abd"],["/tags/elf/index.html","a53a6b15576fc6d8548324e7bb85b27d"],["/tags/elf32/index.html","85e8453a5fc8bf9782494c2e34e74184"],["/tags/emulation/index.html","2d6af9274102a2b495d4461763d75224"],["/tags/emulator/index.html","40420c1d5295d7ee84d17452451043d5"],["/tags/encryption/index.html","29193d46605ca8ad8d372030cdff6dc4"],["/tags/end-to-end-encryption/index.html","212a025e215d0dab939b6d1b0fe57c28"],["/tags/equipment/index.html","8e9598b8e3851075f5a85ae81d5d8fb8"],["/tags/ettercap/index.html","25fcd28ae023abd0e2daea674620f20b"],["/tags/evasion/index.html","6f52bc92d238a5697a95266327a47e8d"],["/tags/evilbts/index.html","f43c4af44fddfcf12b761b94822def42"],["/tags/exploit/index.html","70aae57d8c436f03828d36beec2bd391"],["/tags/extension/index.html","5322493b6bd11060c55cd22275e6c974"],["/tags/fido/index.html","ec79b0f9abe518974e398c7b94721d03"],["/tags/firewall/index.html","3dbe07872f96b9cdbac14ca815a3de71"],["/tags/flexible-ssl/index.html","f4eae75660c012839aa8aa80c7016d2e"],["/tags/freedom-of-speech/index.html","2768df69714cc9932fb76b6f822f24e1"],["/tags/freedom/index.html","f93744ea874b8199c07ecf03af64156d"],["/tags/fuelband/index.html","62699b41414715191ee4989a4d36425d"],["/tags/functions/index.html","ff7e9458b9b71ff94651a67ce91cd49d"],["/tags/fuzzer/index.html","a2c86ce60063d4e418c5d0713237cfd1"],["/tags/fuzzing/index.html","e41aa11180857214cc383b040e3cd77c"],["/tags/galaxy/index.html","522011e2da36500d0f51ce3d94ae63bf"],["/tags/gcc/index.html","2afd757b9336be1bfd78de671b2edff4"],["/tags/gem/index.html","b5b8c9b4761d15b34c64259dcb5082fe"],["/tags/generator/index.html","e7f28db863a9bd036e81e1727a9a228d"],["/tags/government/index.html","9634ebad2976dc5f34f5b6bc4e618a34"],["/tags/gpd-pocket-7/index.html","0e69e5017bf99f0b84a8eda293554f98"],["/tags/gpd/index.html","ce1bbb676a5fc51a89ac4150079e1548"],["/tags/gpl/index.html","7341f6f328d6bd9b44960aac6856f0f6"],["/tags/gplv3/index.html","e760a01fdde7b346d973cee17101e45c"],["/tags/gsm-hijacking/index.html","3ae8dde24f744b6324ce5c7d7fadb99d"],["/tags/gsm-intercept/index.html","40ecda23348e2efdf7c5ba8b01bc41eb"],["/tags/gsm-sniffing/index.html","b3d94143ce499726b9117c562b900efc"],["/tags/gsm/index.html","63df32dec28edc3f5df3d8a04fadf3ae"],["/tags/guide/index.html","e1ed8289ca8744d04617c0c67f2dc14a"],["/tags/hack/index.html","9e2b350e472ef60338433b109d864226"],["/tags/hacking/index.html","49f1758f2de2b0cfd2092fdd51f54b29"],["/tags/hardware/index.html","e0cdc35819c095afd9aa3e144140cc2e"],["/tags/hooking/index.html","f4c9cfa26d4ce4135bb87e1ebbe22e03"],["/tags/hopper/index.html","9d273d54d63330b594a20982a9ef0d86"],["/tags/howto/index.html","ec675b92f571706e58addd7caa2d26ef"],["/tags/hsts/index.html","f485cf11268aa6c7302b0bb77c282d2c"],["/tags/http/index.html","fda5976dc99007eb7015574435aaa41c"],["/tags/https/index.html","288a147cfeb1918500c9a88ab7459f98"],["/tags/huawei/index.html","b8bcda72124112a42af020dcb1cadd81"],["/tags/icmp-redirect/index.html","7c85794d11849f5166d92b4bec616304"],["/tags/icmp-spoofing/index.html","6e3e19e53e43631748ee1f6f9fe9d088"],["/tags/icmp/index.html","20c7518bbef2c3833f3b11bc49f7911b"],["/tags/ida/index.html","4ae4df08be526283e490c413d181ddeb"],["/tags/identity/index.html","05e9bca43beb2fa017fe5d4639bf1ec1"],["/tags/illegal/index.html","bfb502c970e3197bf867dc827a593cc7"],["/tags/informatica/index.html","c9dfbbc083410af3f454c7c0361eb484"],["/tags/inject/index.html","7f5542bf2b0586a739fae0c1bfcbd884"],["/tags/injection/index.html","c1c14b22f318890e9cc3231e66d0f710"],["/tags/inline-assembly/index.html","3ea16746a4632c528fbaaf5ec8a9a6e0"],["/tags/inline/index.html","d345da32ca81fd7fa0b801e58f90e0cf"],["/tags/installation/index.html","b370e2cb5bb90bb7d7779e04cd627d1f"],["/tags/int-2e/index.html","4d1fb274ff5a08224ef87108369db1f2"],["/tags/intel/index.html","d9f71bb36d92f2f0f6de5befcb4890ff"],["/tags/internet-connection-sharing/index.html","3706f3b74487f8ed2e8662f4e240a0b8"],["/tags/interrupt/index.html","2471b7187f35f956591682420cb04748"],["/tags/italian/index.html","1303b27e32bf5719f179d87a54e2bf94"],["/tags/italiano/index.html","6bb9b5e4f7e2cafd1e051468f04a4c23"],["/tags/job/index.html","b56c4d8651cbeb755acb99d01290939a"],["/tags/kernel/index.html","474c7f98fdeb5998deecf6ec03ffb5c1"],["/tags/lavoro/index.html","43efab073fe87c1f7d818641cab942a3"],["/tags/law/index.html","f70a080f5ce774937bb40230af0dae00"],["/tags/lawful-interception/index.html","a1cd65ce21be113903a44ff9e699fcf7"],["/tags/lcamtuf/index.html","784be5648392ce7b59fe13e5d84a3d77"],["/tags/ldr/index.html","5d59a6b8cd99ebf2e0a997c640e0ec9e"],["/tags/libpe/index.html","e92785909584d1ebf694b8c58e9e7440"],["/tags/library-injection/index.html","7e2be5baafeef3330d473b41f59c7970"],["/tags/library/index.html","e61e3a5277bccafc693a5cda9e4214ec"],["/tags/license/index.html","fd3b3b73624583ba40bd3d0249b71bec"],["/tags/life/index.html","a15d3233625ca368d552d7c0b999b6ef"],["/tags/linux/index.html","f05ceda422e4b58d0e24fe09c62dbd18"],["/tags/llvm/index.html","9dcf0d1f06fd356912abad9621740126"],["/tags/loader/index.html","7ec0405e4ff5a41f0523df3e8cf95087"],["/tags/malware/index.html","8d4174df009baa8553a19ed30521b84e"],["/tags/man-in-the-middle/index.html","3b1f70e7907af7a4ef6f25c7f282d870"],["/tags/mana/index.html","e34cd29ab7de674e2c48c2a189ba14b6"],["/tags/mavericks/index.html","be32f021cf3e8532c4793a54f1da368a"],["/tags/memory-injection/index.html","7a74f6e8fe8855a8850f43e23404ede4"],["/tags/metasploit/index.html","08cd6f5411fcb7d5fe9929d01a6eb691"],["/tags/microsoft/index.html","2102fbf8b8e32484315a79b00001a8b0"],["/tags/mitm/index.html","2a6c97b188f5c29dd709001d155cbcbc"],["/tags/mms/index.html","58c024a2c4d2277d11c03c92b8e4983d"],["/tags/mobile/index.html","65158f3dbd438337f7c447057ca3dab5"],["/tags/modem/index.html","ef66511488a0c1535d16ac073a568fe0"],["/tags/modems/index.html","51e3ff2e543ae9d28ab3cfe4e95659ca"],["/tags/naked-functions/index.html","e2cc4f86832d201d6f6b3167528dea87"],["/tags/nas/index.html","c89769fc5755a07011e779a478af818f"],["/tags/nerd/index.html","e008f3c8e381a1da6f93c955cd7017d9"],["/tags/nike-fuelband-se/index.html","19901a7041717ddddb84f659f2013595"],["/tags/nike-fuelband/index.html","87758d7f40850548026b935c55e98d29"],["/tags/nike/index.html","7b619bd11ec8a4a451a9fa2657774d6b"],["/tags/nikeband/index.html","beb9aa583462df5645e9b766359422b8"],["/tags/ntdll/index.html","0fb63b71b44e9e709537b5a40819815c"],["/tags/ntoskrnl/index.html","6346d6718c7d94b8812448f2b6673afc"],["/tags/obcallbacks/index.html","85ec33deff6fd13ea0124893aafd238b"],["/tags/obfuscation/index.html","0ac8dd93ef13e5019f9ef5a62ecb6e29"],["/tags/objdump/index.html","1c7337cf553ce32eb6e8aae447872521"],["/tags/omnitel/index.html","67f7e673412de37ac39e66fe495b6387"],["/tags/open-source/index.html","86d95788ca4411f14bed1e9a5a05c051"],["/tags/open/index.html","3ebce1d5945ce7c41bb9433effacdc7f"],["/tags/openbank/index.html","723d1844da3fa3d16c94215aa64c95f5"],["/tags/openbts/index.html","515998401932e1abcd285a29f4a5e875"],["/tags/osmobb/index.html","9208fdb78051276f01fe944a118d56b5"],["/tags/osmobts/index.html","bafb3bcf925b5876ce00e5bfffbf3e27"],["/tags/oss/index.html","2b072cf253574c7fa84aeee0abcccf76"],["/tags/osx/index.html","c56c9dba6edffc317acf7b964c64a10b"],["/tags/parsing/index.html","ffa80c94adc9a1db15ba31f120e7a119"],["/tags/past/index.html","5c2a4e5b693915a536140a73f5f47551"],["/tags/pastebin/index.html","8ea7766356cc57beea8b9c2c145b8d69"],["/tags/pastebot/index.html","07b7216b80320d3319ca880e07b11ec7"],["/tags/pdu/index.html","bc0547d20c41ddf988940044801f59e5"],["/tags/pe/index.html","075127d19a89fdd7cebbea81cf08700a"],["/tags/pe32/index.html","5b47d43c301937a5ed910f3ed25babee"],["/tags/peb/index.html","ccc14db4fc8647d21a31bfc7d747a307"],["/tags/pentest/index.html","a67b0de520828491c4bdf79a010ae6ec"],["/tags/permission-bypass/index.html","107337f191023d5ecc1db57cd235f794"],["/tags/phishing/index.html","6e59fcf2a153c66a35c71601fde2eeef"],["/tags/pineapple-nano/index.html","701bb88949f702118a82b0d5ddb12b9c"],["/tags/ping-sms/index.html","fd3da3ed7097ec7cb851aee50f59b0c7"],["/tags/play-store/index.html","7a7a1f2c1ef2747ef24b49c6bbf21402"],["/tags/plt/index.html","ae3d00d19d9a6bbdca369dc5b4944a91"],["/tags/poc/index.html","ff58146ee80bdda43ab3c53d76d71323"],["/tags/portable-executable/index.html","7ef8910755081066e20f36cb4503b1d2"],["/tags/porting/index.html","7f1861aab831452a44a009a5f7a11538"],["/tags/privacy/index.html","8e0f5a68358295e17a49174ccf634fc6"],["/tags/process-environment-block/index.html","4220b8c873ea1e579e1cc9d253f473c1"],["/tags/process-protection/index.html","443f73534322091c6c8d4731600020e2"],["/tags/professione/index.html","f9452d81d27c7b3268782ee1e009a6a3"],["/tags/progress/index.html","4738c479963bfea329b33c0f19364e21"],["/tags/project-generator/index.html","3edf7c1bc0719923acce8d6c76adfaac"],["/tags/project/index.html","b4fb754c9dc61c989b0c00de8c5fb42a"],["/tags/projects/index.html","1ab4b5b6a6a1b4b241a412f2aed9868c"],["/tags/protocol/index.html","23ec76a153eb8d1ba8cdf1561dc9f8e2"],["/tags/proxy-module/index.html","00011db89e0345d6885b06610ebdc655"],["/tags/proxy/index.html","707824e943534efce351b1fba64dd542"],["/tags/ptrace/index.html","6132e3bffb8612790418be41f13a2e32"],["/tags/python/index.html","ce359d1895ecbb65340b5f829eb1cc66"],["/tags/qemu/index.html","e6c61b23684ac0751a171365bc20d8ed"],["/tags/rce/index.html","091d970937ed5bbdb7abc0f1db1d6ba5"],["/tags/re/index.html","7f2444db3abca4f0cca39809cba2a3dd"],["/tags/reboot/index.html","025b59bc94ff40448b22596f885699f3"],["/tags/red-teaming/index.html","3d8685c980cd028ef329359ef5e65a65"],["/tags/registers/index.html","d99356d869a55a458be191cb4722f45a"],["/tags/relocation-table/index.html","3c67caf532998bea0277ad8fc95db3e3"],["/tags/relocation/index.html","fac386833670b0b7f26f62df9310acb5"],["/tags/remote-injection/index.html","3da5799780a9197e1d68daf90a50a67c"],["/tags/researcher/index.html","fcb9f568b702c8177a3b3af4cdad1d2e"],["/tags/reversed/index.html","7faecb19398cc5eb8f027c9f33913925"],["/tags/reversing/index.html","b5f99c072988e90cccc6beaca7231705"],["/tags/rf/index.html","a20f768ac326c3e53c2e468a0aa9f622"],["/tags/rogue-ap/index.html","1531376f7292af2e9f67ff82f50c8ec3"],["/tags/rogue-bts/index.html","ab53e4994aaab181b74c03e44e3e70cd"],["/tags/root/index.html","88be2624f8a77d09bc850992e8078679"],["/tags/router/index.html","bae0b7c73dd01cd9381d9e257c025a87"],["/tags/routines/index.html","2f29414f353786d1bc4b7d6bf35b1ff7"],["/tags/routing-table/index.html","6405461e96b0587d2f32ca44eccf4023"],["/tags/routing/index.html","366100d1ee8fb96001161afffbbe64bb"],["/tags/rubertooth/index.html","e41b6f328c1e417e326ea18397c82d63"],["/tags/ruby/index.html","20abaf4e57f69f32797b3934f5bbc99d"],["/tags/samsung-galaxy-apps/index.html","c4ee3189babc165352536f74de505659"],["/tags/samsung/index.html","ec8259b89c193419de8ee1a11b30b246"],["/tags/satoshi-nakamoto/index.html","517ac4901d1c86503a752ee951516f6d"],["/tags/sdr/index.html","8ae156e51ebb9ca763a3a80fb0e51959"],["/tags/security/index.html","13b0e65c75cecc66234ea75c854f2149"],["/tags/self-protection/index.html","64a72bcc869a5090b7af4b5368a22445"],["/tags/sendDataMessage/index.html","0b0ce31e8314bfd9b816bdf9883b15de"],["/tags/server-name-indication/index.html","0c86b82f60ecf207bb93cd22a82a0909"],["/tags/session-hijacking/index.html","5e0d939181c52cf304065a186237474f"],["/tags/setup/index.html","598e9f313588a7c5129affe1e5769156"],["/tags/sicurezza-informatica/index.html","79611cfcf34716567b54d7f94dfc3b67"],["/tags/sigint/index.html","f59e953548cb265618f6a8fec5b0dcd4"],["/tags/smali/index.html","7ce73cf4e9bd6aeceb4e79e43a55e4ac"],["/tags/smarter-coffee/index.html","9d521832d85244acfb931dfaacd64134"],["/tags/sms/index.html","a711e45552f78f3a99233d79fb1eca5a"],["/tags/sni/index.html","7a92b81e8df8f030bfac1269a8429676"],["/tags/social/index.html","9274cadfc87094a7307e0122375f8efa"],["/tags/sparkle/index.html","dcd5b07ffd229a87ed69c86956a817b3"],["/tags/spoofer/index.html","ce6ad7b7134d7fdf83aaecccda82b7c7"],["/tags/spoofing/index.html","7b4859adc89bfcb252542794af83a41e"],["/tags/ssdt/index.html","ef73230d6a19b2886c413bfabb5b1e95"],["/tags/ssl-stripping/index.html","78de7a1e2459bb5c556776b3f4dc7d20"],["/tags/ssl/index.html","a0ca76c5af4671812ecd7076dcf773c7"],["/tags/sslstrip/index.html","2999717ca2e1249dffb88f5628cf2837"],["/tags/sslstripping/index.html","d12e567f9345281c42464c87001cc26c"],["/tags/static-analysis/index.html","0a1aeef5554bf7bf36e53de6f9c8a37f"],["/tags/store/index.html","aae4023e7f6607b050a9209020257e53"],["/tags/strtab/index.html","7cf6e4de969fe6c66af0092eefc54217"],["/tags/su/index.html","7d57bf1033db447d8d1112744ccdaa5c"],["/tags/subroutines/index.html","0d85092897b63503c12b1b8ebf26f920"],["/tags/superfish/index.html","835b43a234d592c5b3000a801d974249"],["/tags/symtab/index.html","47c92b3c09de64fb84c13dfc486ccc5a"],["/tags/syscall/index.html","b1f740ad9e8df92034ca69ef3f500c06"],["/tags/sysenter/index.html","2b31280726ac67c9fe95354c3000aa7e"],["/tags/telco/index.html","4648bfe225140ca404cd915ec799d9d1"],["/tags/telcos/index.html","6e9dee329936476d6f7b95fb6d9a99a5"],["/tags/template/index.html","026c580aa08e1a6a980d7b59ce29e83e"],["/tags/terramaster/index.html","1a18cecb8a760817001964a0c2956aee"],["/tags/the-guardian/index.html","b1e31f1e19a3bb78c0c7d250868c8ded"],["/tags/tib/index.html","69c5a5c4c6271b801e63b9f9315115cc"],["/tags/tls/index.html","3309475c5f240e9760e85d1f1ae1171c"],["/tags/transparent-proxy/index.html","d682dd8843a22e2d45086aeb21c3376f"],["/tags/trezor/index.html","3579104208e0eeecc64259dda3e1f374"],["/tags/trick/index.html","3051dcc54867efb14b4ffa7b65238021"],["/tags/ubertooth/index.html","c3f0ca88cadc4ee90155160a386e7a9c"],["/tags/united-arab-emirates/index.html","f5ec5a9492e14fe6e7e442e70efd6c02"],["/tags/update/index.html","fe60fbf8322009a51b6804b9f2ea4274"],["/tags/vita/index.html","9d79eee2a225440cb2f901c328f56627"],["/tags/vm/index.html","ea898e7b32faf604566f43ecbbcb1e94"],["/tags/vmware/index.html","8316faacbb473d2ae309cc7d501ffcf6"],["/tags/vodafone/index.html","e82780c5f5c4750d328ffdf5a71044e5"],["/tags/vulnerability/index.html","775d857d8325ff902c93582ed673033b"],["/tags/wallet/index.html","b48ddffb4a05af7013053ccd7f392c68"],["/tags/wap-push-notifications/index.html","818530e2c028fa84698f3083d18d692b"],["/tags/wap-push/index.html","82798e37b5e4db9b36dd1f795fe7b83e"],["/tags/wap/index.html","8ba1571d1fe4589dbb8d54fbf5065d55"],["/tags/wear/index.html","a6ed86b994761a16b94b56f26f05ff29"],["/tags/whatsapp/index.html","567bd7558b26d6deffba7d431a9f7799"],["/tags/wifi-pentesting/index.html","8bff5ccf7cc41e41f499d8b13d53d8d3"],["/tags/wifi-pineapple/index.html","3a9e3934ef605700c2e50c5110f2f992"],["/tags/win32/index.html","2e505aa1643a193af83cfa81c10c63f7"],["/tags/windows-internals/index.html","5daa4ec5fb06b2cc94b0816aa03b97e1"],["/tags/windows/index.html","09ee1c0520e7dd2d76456a8167217ae1"],["/tags/wireless/index.html","8d62c7d1f9f72a930db928d067c5f9d8"],["/tags/wow64/index.html","6bf94281bf7c30492bfd5d6b0bc993c0"],["/tags/x-notifier/index.html","318b0c67b8db74d6182c79991c0053bc"],["/tags/xnotifier/index.html","0bd8c9780e29d2d3f67315b3186c84a6"],["/tags/xpub/index.html","1573b97b7c0195491dc8f89b11134477"],["/tags/yate/index.html","079348731e591f2f115d5c7e29653f8f"],["/tags/yatebts/index.html","7cf39d19a3f021e1f6d06e850b0bc36d"],["/tags/yosemite/index.html","27d6e3c25c22a5e60682f547da6c8776"],["/tags/zimperium/index.html","37f9d801e5a27bef85a8cbc9491eb79d"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







