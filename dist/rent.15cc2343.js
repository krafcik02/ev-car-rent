// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"Zv7Dz":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "994d2f5515cc2343";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id1][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"dfRjQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Ako user si chcem vytvorit rezervaciu na auto
 * Ako user si chcem pozriet kolko krat som si pozical auto za posledny polrok
 * Ako user si chcem pozicat auto na zaklade mojej polohy
 *
 *
 */ parcelHelpers.export(exports, "currentUser", ()=>currentUser);
"use strict";
class Car {
    constructor(brand, model, color, pricePerDay, acc, topSpeed, range, peakPower){
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.pricePerDay = pricePerDay;
        this.acc = acc;
        this.topSpeed = topSpeed;
        this.range = range;
        this.peakPower = peakPower;
    }
    buildHTML() {
        let modelEdited;
        if (this.brand === "tesla") modelEdited = `${this.model[0].toUpperCase()}${this.model.slice(1, -1)} ${this.model.slice(-1)}`;
        return `
    <div class="used-cars-item flex">
      <div class="used-car-box grid grid--3-cols">
        <img class="used-car-img flex" src="./img/cars/${this.model}.png" alt="#" />
        <div class="used-car-description flex flex-dir--column">
          <h3 class="car-description-header">${this.brand[0].toUpperCase()}${this.brand.slice(1)} ${modelEdited}</h3>
          <div class="car-desciption-items flex">
            <span class="car-description-item flex flex-dir--column"
              >0-100 km/h
              <span class="description-sub-item">${this.acc}sec</span></span
            ><span class="car-description-item flex flex-dir--column"
              >Top Speed
              <span class="description-sub-item">${this.topSpeed}km/h</span></span
            ><span class="car-description-item flex flex-dir--column"
              >Range(WLTP)
              <span class="description-sub-item">${this.range}km</span></span
            ><span class="car-description-item flex flex-dir--column"
              >Peak Power
              <span class="description-sub-item">${this.peakPower}kw</span></span
            >
          </div>
        </div>
        <div class="buy-used-car flex flex-dir--column">
          <h3>${this.pricePerDay}€/day</h3>
          <a href="#">Select</a>
        </div>
      </div>
    </div>
    `;
    }
    introduceMe() {
        console.log(this.brand = brand, this.model = model, this.color = color, this.pricePerDay = pricePerDay, this.acc = acc, this.topSpeed = topSpeed, this.range = range, this.peakPower = peakPower);
    }
}
const cars = [
    new Car("tesla", "model3", "white", 150, 3.5, 250, 400, 357),
    new Car("tesla", "modelS", "red", 200, 3.3, 250, 450, 457),
    new Car("tesla", "modelX", "white", 250, 4, 220, 480, 357),
    new Car("tesla", "modelX", "white", 250, 4, 220, 480, 357), 
];
///////////////////
// Login check
///////////////////
const inputUsername = document.getElementById("username");
const inputPassword = document.getElementById("password");
const formLogin = document.querySelector(".container--login-inner");
const loginScreen = document.querySelector(".container--login-outer");
const spanUsername = document.querySelector(".box-username span");
const spanCredits = document.querySelector(".box-credits h2 span");
const loggedUsername = document.querySelector(".logged-user-name");
const contentBox = document.querySelector(".content-box-main");
const navRent = document.querySelector(".nav-link-rent");
const navMain = document.querySelector(".nav-link-main");
const navSide = document.querySelector(".side-nav-tabs");
const user = {
    userName: "Kristian_02",
    name: "Kristian",
    login: "user",
    password: "user",
    credits: 5000,
    rides: [
        10,
        50,
        10,
        20,
        10,
        20
    ]
};
// loggedUsername.textContent = user.userName;
let currentUser = user;
const hideLogin = function() {
    console.log(`Welcome ${user.name}`);
    loginScreen.classList.add("opacity-zero");
    setTimeout(function() {
        loginScreen.classList.add(".hidden");
    }, 100);
    setTimeout(function() {}, 100);
};
const checkUserLogin = function(e) {
    e.preventDefault();
    console.log(e.target);
    if (!inputUsername.value === user.login) return;
    if (!inputPassword.value === user.password) return;
    currentUser = user;
    //   e.target.submit();
    hideLogin();
};
formLogin.addEventListener("submit", checkUserLogin);
/////////////////////////////////////////////////////////
// Main content area
/////////////////////////////////////////////////////////
/**
 *
 * @param {String} currentUser
 * @returns String for Main content area
 */ const getMainContent = function(currentUser1) {
    // Vytvorenie grafu tu!
    return `<div class="box-text box-username flex flex-dir--column">
  <h2>Welcome back <span>${currentUser1.name}</span>!</h2>
  <a>Rent EV now!</a>
</div>
<div class="box-text box-credits flex flex-dir--column">
  <h2>You have <span>${currentUser1.credits}</span> credits</h2>
  <p>100 credit = 1€</p>
  <a href="#">How to earn credit?</a>
</div>
<div class="box-text chart-rides">
  <canvas id="myChart" ></canvas>
</div>`;
};
navMain.addEventListener("click", function() {});
/**
 *
 * @param {String} currentUser
 * @returns String for Main content area
 */ const getRentContent = function(user) {
    console.log(`Rent`);
    let htmlBegin = `
  <div class="box-cars">
    <div class="used-cars-box">
      <div class="used-cars-inner flex flex-dir--column">
      `;
    let htmlEnd = ` 
      </div>
    </div>
  </div>
`;
    let html = htmlBegin;
    cars.forEach((car)=>{
        html = html + car.buildHTML();
    });
    html = html + htmlEnd;
    return html;
};
/**
 *
 * @param {String} currentUser
 * @returns String for Main content area
 */ const getTripsContent = function(user) {
    console.log(`Trip`);
};
/**
 *
 * @param {String} currentUser
 * @returns String for Main content area
 */ const getStatsContent = function(user) {
    console.log(`Stats`);
};
/**
 *
 * @param {String} currentUser
 * @returns String for Main content area
 */ const getPointsContent = function(user) {
    console.log(`Points`);
};
/**
 * Event listener on parent element listening for click event
 * Creating and choosing the content for Main Content Box
 * */ navSide.addEventListener("click", function(e) {
    if (!e.target.dataset.set) return;
    const data = e.target.dataset.set;
    let html;
    if (data === "main") html = getMainContent(currentUser);
    if (data === "rent") html = getRentContent(currentUser);
    if (data === "trips") html = getTripsContent(currentUser);
    if (data === "stats") html = getStatsContent(currentUser);
    if (data === "points") html = getPointsContent(currentUser);
    contentBox.innerHTML = "";
    contentBox.insertAdjacentHTML("beforeend", html);
});
/////////////////////////////////////////////////////////
// Rent content area
/////////////////////////////////////////////////////////
let userLocation; // const selectLocation = document.getElementById("location");
 // selectLocation.addEventListener("change", function (e) {
 //   console.log(selectLocation.value);
 //   if (selectLocation.value === "empty") return;
 //   if (selectLocation.value === "getLocation") return;
 //   userLocation = selectLocation.value;
 //   console.log(`Choosen location ${userLocation}`);
 // });
 // import {
 //   Chart,
 //   ArcElement,
 //   LineElement,
 //   BarElement,
 //   PointElement,
 //   BarController,
 //   BubbleController,
 //   DoughnutController,
 //   LineController,
 //   PieController,
 //   PolarAreaController,
 //   RadarController,
 //   ScatterController,
 //   CategoryScale,
 //   LinearScale,
 //   LogarithmicScale,
 //   RadialLinearScale,
 //   TimeScale,
 //   TimeSeriesScale,
 //   Decimation,
 //   Filler,
 //   Legend,
 //   Title,
 //   Tooltip,
 //   SubTitle,
 // } from "chart.js";
 // Chart.register(
 //   ArcElement,
 //   LineElement,
 //   BarElement,
 //   PointElement,
 //   BarController,
 //   BubbleController,
 //   DoughnutController,
 //   LineController,
 //   PieController,
 //   PolarAreaController,
 //   RadarController,
 //   ScatterController,
 //   CategoryScale,
 //   LinearScale,
 //   LogarithmicScale,
 //   RadialLinearScale,
 //   TimeScale,
 //   TimeSeriesScale,
 //   Decimation,
 //   Filler,
 //   Legend,
 //   Title,
 //   Tooltip,
 //   SubTitle
 // );
 // const ctx = document.getElementById("myChart").getContext("2d");
 // const myChart = new Chart(ctx, {
 //   type: "bar",
 //   data: {
 //     labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
 //     datasets: [
 //       {
 //         label: "Number of rides in month",
 //         data: user.rides,
 //         backgroundColor: [
 //           // "rgba(255, 99, 132, 0.2)",
 //           "rgba(54, 162, 235, 0.2)",
 //           // "rgba(255, 206, 86, 0.2)",
 //           // "rgba(75, 192, 192, 0.2)",
 //           // "rgba(153, 102, 255, 0.2)",
 //           // "rgba(255, 159, 64, 0.2)",
 //         ],
 //         borderColor: [
 //           // "rgba(255, 99, 132, 1)",
 //           "rgba(54, 162, 235, 1)",
 //           // "rgba(255, 206, 86, 1)",
 //           // "rgba(75, 192, 192, 1)",
 //           // "rgba(153, 102, 255, 1)",
 //           // "rgba(255, 159, 64, 1)",
 //         ],
 //         borderWidth: 2,
 //       },
 //     ],
 //   },
 //   options: {
 //     scales: {
 //       y: {
 //         beginAtZero: true,
 //       },
 //     },
 //   },
 // });
 /*

                <div class="used-cars-item flex">
                  <div class="used-car-box grid grid--3-cols">
                    <img class="used-car-img" src="./img/cars/model3.png" alt="" />
                    <div class="used-car-description flex flex-dir--column">
                      <h3 class="car-description-header">Model 3 Long Range</h3>
                      <div class="car-desciption-items flex">
                        <span class="car-description-item flex flex-dir--column"
                          >0-100 km/h
                          <span class="description-sub-item">4.4sec</span></span
                        ><span class="car-description-item flex flex-dir--column"
                          >Top Speed
                          <span class="description-sub-item">230km/h</span></span
                        ><span class="car-description-item flex flex-dir--column"
                          >Range(WLTP)
                          <span class="description-sub-item">430km</span></span
                        ><span class="car-description-item flex flex-dir--column"
                          >Peak Power
                          <span class="description-sub-item">324kw</span></span
                        >
                      </div>

                    </div>
                    <div class="buy-used-car flex flex-dir--column">
                      <h3>150€/day</h3>
                      <a href="#">Select</a>
                    </div>
                  </div>
                </div>
                <div class="used-cars-item flex">
                  <div class="used-car-box grid grid--3-cols">
                    <img class="used-car-img" src="./img/cars/modelS.png" alt="" />
                    <div class="used-car-description flex flex-dir--column">
                      <h3 class="car-description-header">Model S PD 75</h3>
                      <div class="car-desciption-items flex">
                        <span class="car-description-item flex flex-dir--column"
                          >0-100 km/h
                          <span class="description-sub-item">4.4sec</span></span
                        ><span class="car-description-item flex flex-dir--column"
                          >Top Speed
                          <span class="description-sub-item">230km/h</span></span
                        ><span class="car-description-item flex flex-dir--column"
                          >Range(WLTP)
                          <span class="description-sub-item">430km</span></span
                        ><span class="car-description-item flex flex-dir--column"
                          >Peak Power
                          <span class="description-sub-item">324kw</span></span
                        >
                      </div>

                    </div>
                    <div class="buy-used-car flex flex-dir--column">
                      <h3>200€/day</h3>
                      <a href="#">Select</a>
                    </div>
                  </div>
                </div>

                <div class="used-cars-item flex">
                  <div class="used-car-box grid grid--3-cols">
                    <img class="used-car-img" src="./img/cars/modelX.png" alt="" />
                    <div class="used-car-description flex flex-dir--column">
                      <h3 class="car-description-header">Model X</h3>
                      <div class="car-desciption-items flex">
                        <span class="car-description-item flex flex-dir--column"
                          >0-100 km/h
                          <span class="description-sub-item">4.4sec</span></span
                        ><span class="car-description-item flex flex-dir--column"
                          >Top Speed
                          <span class="description-sub-item">230km/h</span></span
                        ><span class="car-description-item flex flex-dir--column"
                          >Range(WLTP)
                          <span class="description-sub-item">430km</span></span
                        ><span class="car-description-item flex flex-dir--column"
                          >Peak Power
                          <span class="description-sub-item">324kw</span></span
                        >
                      </div>
                    </div>
                    <div class="buy-used-car flex flex-dir--column">
                      <h3>250€/day</h3>

                      <a href="#">Select</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          */ 

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["Zv7Dz","dfRjQ"], "dfRjQ", "parcelRequiredbd5")

//# sourceMappingURL=rent.15cc2343.js.map
