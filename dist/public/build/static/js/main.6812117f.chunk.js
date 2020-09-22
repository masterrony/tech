"use strict";

(undefined.webpackJsonpadmin = undefined.webpackJsonpadmin || []).push([[0], { 362: function _(e, t, n) {
    e.exports = n(613);
  }, 613: function _(e, t, n) {
    "use strict";
    n.r(t);var r = n(0),
        a = n.n(r),
        o = n(13),
        c = n.n(o),
        l = n(285),
        s = n.n(l),
        u = n(325),
        i = n.n(u),
        m = n(311),
        d = n(286),
        h = n.n(d),
        E = { login: function login(e) {
        var t = e.username,
            n = e.password;return h.a.post("".concat("http://127.0.0.1:8000/admin", "/auth"), { username: t, password: n }).then(function (e) {
          return e.data.scs ? localStorage.setItem("token", e.data.token) : localStorage.removeItem("token");
        }).catch(function (e) {
          return console.log(e);
        });
      }, logout: function logout() {
        return localStorage.removeItem("token"), Promise.resolve();
      }, checkError: function checkError(e) {
        var t = e.status;return 401 === t || 403 === t ? (localStorage.removeItem("token"), Promise.reject()) : Promise.resolve();
      }, checkAuth: function checkAuth() {
        return localStorage.getItem("token") ? Promise.resolve() : Promise.reject();
      }, getPermissions: function getPermissions() {
        return Promise.resolve();
      } },
        f = n(85),
        p = n(694),
        v = n(693),
        g = n(614),
        k = n(695),
        w = n(701),
        b = n(696),
        I = n(687),
        P = n(688),
        j = n(689),
        S = n(698),
        y = n(697),
        O = n(702),
        x = n(703),
        A = n(705),
        J = function J(e) {
      var t = Object(g.a)(function (e) {
        return e.breakpoints.down("sm");
      });return r.createElement(k.a, Object.assign({}, e, { filters: r.createElement(_, null) }), t ? r.createElement(w.a, { primaryText: function primaryText(e) {
          return e.phone;
        }, secondaryText: function secondaryText(e) {
          return e.allowed;
        }, teritaryText: function teritaryText(e) {
          return e.created_at;
        } }) : r.createElement(b.a, { rowClick: "edit" }, r.createElement(I.a, { source: "id" }), r.createElement(I.a, { source: "deviceId" }), r.createElement(I.a, { source: "phone" }), r.createElement(P.a, { source: "online" }), r.createElement(P.a, { source: "allowed" }), r.createElement(j.a, { source: "created_at" })));
    },
        T = function T(e) {
      return r.createElement(S.a, Object.assign({ title: r.createElement(B, null) }, e), r.createElement(y.a, null, r.createElement(I.a, { label: "deviceId", source: "deviceId" }), r.createElement(I.a, { label: "phone", source: "phone" }), r.createElement(O.a, { label: "Allowed", source: "allowed" })));
    },
        B = function B(e) {
      var t = e.record;return r.createElement("span", null, "User ", t ? "".concat(t.phone) : "");
    },
        _ = function _(e) {
      return r.createElement(x.a, e, r.createElement(A.a, { label: "Search", source: "q", alwaysOn: !0 }));
    },
        q = Object(m.a)("http://127.0.0.1:8000/admin", function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};t.headers || (t.headers = new Headers({ Accept: "application/json" }));var n = localStorage.getItem("token");return t.headers.set("Authorization", "Bearer ".concat(n)), f.a.fetchJson(e, t);
    }),
        z = function z() {
      return r.createElement(p.a, { dataProvider: q, authProvider: E }, r.createElement(v.a, { name: "users", list: J, edit: T, icon: i.a }));
    };s.a.config(), c.a.render(a.a.createElement(z, null), document.getElementById("root"));
  } }, [[362, 1, 2]]]);
//# sourceMappingURL=main.6812117f.chunk.js.map
//# sourceMappingURL=main.6812117f.chunk.js.map