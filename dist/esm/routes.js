// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from 'D:/weibo/esite-hook/node_modules/@umijs/runtime';
import { plugin } from './plugin';
export function getRoutes() {
  var routes = [{
    "path": "/~demos/:uuid",
    "layout": false,
    "wrappers": [require('D:/weibo/esite-hook/node_modules/@umijs/preset-dumi/lib/theme/layout').default],
    "component": function component(props) {
      var _require = require('D:/weibo/esite-hook/node_modules/@umijs/preset-dumi/lib/plugins/features/demo/getDemoRenderArgs'),
          getDemoRenderArgs = _require.default;

      var _require2 = require('dumi-theme-default/src/builtins/Previewer.tsx'),
          Previewer = _require2.default;

      var _require3 = require('@@/dumi/demos'),
          demos = _require3.default;

      var _require4 = require('dumi/theme'),
          usePrefersColor = _require4.usePrefersColor;

      var renderArgs = getDemoRenderArgs(props, demos); // for listen prefers-color-schema media change in demo single route

      usePrefersColor();

      switch (renderArgs.length) {
        case 1:
          // render demo directly
          return renderArgs[0];

        case 2:
          // render demo with previewer
          return /*#__PURE__*/React.createElement(Previewer, renderArgs[0], renderArgs[1]);

        default:
          return "Demo ".concat(props.match.params.uuid, " not found :(");
      }
    }
  }, {
    "path": "/_demos/:uuid",
    "redirect": "/~demos/:uuid"
  }, {
    "__dumiRoot": true,
    "layout": false,
    "path": "/",
    "wrappers": [require('D:/weibo/esite-hook/node_modules/@umijs/preset-dumi/lib/theme/layout').default, require('D:/weibo/esite-hook/node_modules/dumi-theme-default/src/layout.tsx').default],
    "routes": [{
      "path": "/use-immutable",
      "component": require('D:/weibo/esite-hook/src/useImmutable/index.md').default,
      "exact": true,
      "meta": {
        "filePath": "src/useImmutable/index.md",
        "updatedTime": 1618475265849,
        "slugs": [],
        "title": "Index",
        "group": {
          "path": "/use-immutable",
          "title": "Use-immutable"
        }
      },
      "title": "Index"
    }, {
      "path": "/use-watch",
      "component": require('D:/weibo/esite-hook/src/useWatch/index.md').default,
      "exact": true,
      "meta": {
        "filePath": "src/useWatch/index.md",
        "updatedTime": 1618484799485,
        "title": "标题内容",
        "slugs": [],
        "group": {
          "path": "/use-watch",
          "title": "Use-watch"
        }
      },
      "title": "标题内容"
    }],
    "title": "esite-hook",
    "component": function component(props) {
      return props.children;
    }
  }]; // allow user to extend routes

  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: {
      routes: routes
    }
  });
  return routes;
}