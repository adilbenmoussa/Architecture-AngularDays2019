/**
@license @nocompile
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
(function() {
  /*

Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
  'use strict';
  var m,
    n =
      'undefined' != typeof window && window === this
        ? this
        : 'undefined' != typeof global && null != global
        ? global
        : this,
    aa =
      'function' == typeof Object.defineProperties
        ? Object.defineProperty
        : function(a, b, c) {
            a != Array.prototype && a != Object.prototype && (a[b] = c.value);
          };
  function ba() {
    ba = function() {};
    n.Symbol || (n.Symbol = ca);
  }
  var ca = (function() {
    var a = 0;
    return function(b) {
      return 'jscomp_symbol_' + (b || '') + a++;
    };
  })();
  function da() {
    ba();
    var a = n.Symbol.iterator;
    a || (a = n.Symbol.iterator = n.Symbol('iterator'));
    'function' != typeof Array.prototype[a] &&
      aa(Array.prototype, a, {
        configurable: !0,
        writable: !0,
        value: function() {
          return ea(this);
        }
      });
    da = function() {};
  }
  function ea(a) {
    var b = 0;
    return fa(function() {
      return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
    });
  }
  function fa(a) {
    da();
    a = { next: a };
    a[n.Symbol.iterator] = function() {
      return this;
    };
    return a;
  }
  function ha(a) {
    da();
    ba();
    da();
    var b = a[Symbol.iterator];
    return b ? b.call(a) : ea(a);
  }
  function ia(a) {
    for (var b, c = []; !(b = a.next()).done; ) c.push(b.value);
    return c;
  }
  function ja() {
    this.Z = this.root = null;
    this.J = !1;
    this.s = this.G = this.O = this.assignedSlot = this.assignedNodes = this.v = null;
    this.childNodes = this.nextSibling = this.previousSibling = this.lastChild = this.firstChild = this.parentNode = this.B = void 0;
    this.U = this.V = !1;
    this.F = {};
  }
  ja.prototype.toJSON = function() {
    return {};
  };
  function q(a) {
    a.__shady || (a.__shady = new ja());
    return a.__shady;
  }
  function r(a) {
    return a && a.__shady;
  }
  var t = window.ShadyDOM || {};
  t.la = !(!Element.prototype.attachShadow || !Node.prototype.getRootNode);
  var ka = Object.getOwnPropertyDescriptor(Node.prototype, 'firstChild');
  t.i = !!(ka && ka.configurable && ka.get);
  t.R = t.force || !t.la;
  t.A = t.noPatch || !1;
  t.Y = t.preferPerformance;
  function v(a) {
    return (a = r(a)) && void 0 !== a.firstChild;
  }
  function w(a) {
    return 'ShadyRoot' === a.ea;
  }
  function la(a) {
    return (a = (a = r(a)) && a.root) && ma(a);
  }
  var x = Element.prototype,
    na =
      x.matches ||
      x.matchesSelector ||
      x.mozMatchesSelector ||
      x.msMatchesSelector ||
      x.oMatchesSelector ||
      x.webkitMatchesSelector,
    oa = document.createTextNode(''),
    pa = 0,
    qa = [];
  new MutationObserver(function() {
    for (; qa.length; )
      try {
        qa.shift()();
      } catch (a) {
        throw ((oa.textContent = pa++), a);
      }
  }).observe(oa, { characterData: !0 });
  function ra(a) {
    qa.push(a);
    oa.textContent = pa++;
  }
  var sa = !!document.contains;
  function ta(a, b) {
    for (; b; ) {
      if (b == a) return !0;
      b = b.__shady_parentNode;
    }
    return !1;
  }
  function ua(a) {
    for (var b = a.length - 1; 0 <= b; b--) {
      var c = a[b],
        d = c.getAttribute('id') || c.getAttribute('name');
      d && 'length' !== d && isNaN(d) && (a[d] = c);
    }
    a.item = function(b) {
      return a[b];
    };
    a.namedItem = function(b) {
      if ('length' !== b && isNaN(b) && a[b]) return a[b];
      for (var c = ha(a), d = c.next(); !d.done; d = c.next())
        if (
          ((d = d.value), (d.getAttribute('id') || d.getAttribute('name')) == b)
        )
          return d;
      return null;
    };
    return a;
  }
  function y(a, b, c, d) {
    c = void 0 === c ? '' : c;
    for (var e in b) {
      var f = b[e];
      if (!(d && 0 <= d.indexOf(e))) {
        f.configurable = !0;
        var g = c + e;
        if (f.value) a[g] = f.value;
        else
          try {
            Object.defineProperty(a, g, f);
          } catch (h) {}
      }
    }
  }
  function z(a) {
    var b = {};
    Object.getOwnPropertyNames(a).forEach(function(c) {
      b[c] = Object.getOwnPropertyDescriptor(a, c);
    });
    return b;
  }
  var A = [],
    va;
  function wa(a) {
    va || ((va = !0), ra(xa));
    A.push(a);
  }
  function xa() {
    va = !1;
    for (var a = !!A.length; A.length; ) A.shift()();
    return a;
  }
  xa.list = A;
  function ya() {
    this.a = !1;
    this.addedNodes = [];
    this.removedNodes = [];
    this.I = new Set();
  }
  function za(a) {
    a.a ||
      ((a.a = !0),
      ra(function() {
        a.flush();
      }));
  }
  ya.prototype.flush = function() {
    if (this.a) {
      this.a = !1;
      var a = this.takeRecords();
      a.length &&
        this.I.forEach(function(b) {
          b(a);
        });
    }
  };
  ya.prototype.takeRecords = function() {
    if (this.addedNodes.length || this.removedNodes.length) {
      var a = [
        { addedNodes: this.addedNodes, removedNodes: this.removedNodes }
      ];
      this.addedNodes = [];
      this.removedNodes = [];
      return a;
    }
    return [];
  };
  function Aa(a, b) {
    var c = q(a);
    c.v || (c.v = new ya());
    c.v.I.add(b);
    var d = c.v;
    return {
      da: b,
      ga: d,
      fa: a,
      takeRecords: function() {
        return d.takeRecords();
      }
    };
  }
  function Ba(a) {
    var b = a && a.ga;
    b && (b.I.delete(a.da), b.I.size || (q(a.fa).v = null));
  }
  function Ca(a, b) {
    var c = b.getRootNode();
    return a
      .map(function(a) {
        var b = c === a.target.getRootNode();
        if (b && a.addedNodes) {
          if (
            ((b = Array.from(a.addedNodes).filter(function(a) {
              return c === a.getRootNode();
            })),
            b.length)
          )
            return (
              (a = Object.create(a)),
              Object.defineProperty(a, 'addedNodes', {
                value: b,
                configurable: !0
              }),
              a
            );
        } else if (b) return a;
      })
      .filter(function(a) {
        return a;
      });
  }
  var Ea = /[&\u00A0"]/g,
    Fa = /[&\u00A0<>]/g;
  function Ga(a) {
    switch (a) {
      case '&':
        return '&amp;';
      case '<':
        return '&lt;';
      case '>':
        return '&gt;';
      case '"':
        return '&quot;';
      case '\u00a0':
        return '&nbsp;';
    }
  }
  function Ha(a) {
    for (var b = {}, c = 0; c < a.length; c++) b[a[c]] = !0;
    return b;
  }
  var Ia = Ha(
      'area base br col command embed hr img input keygen link meta param source track wbr'.split(
        ' '
      )
    ),
    Ja = Ha(
      'style script xmp iframe noembed noframes plaintext noscript'.split(' ')
    );
  function Ka(a, b) {
    'template' === a.localName && (a = a.content);
    for (
      var c = '', d = b ? b(a) : a.childNodes, e = 0, f = d.length, g = void 0;
      e < f && (g = d[e]);
      e++
    ) {
      a: {
        var h = g;
        var k = a,
          l = b;
        switch (h.nodeType) {
          case Node.ELEMENT_NODE:
            k = h.localName;
            for (var p = '<' + k, u = h.attributes, X = 0, Y; (Y = u[X]); X++)
              p += ' ' + Y.name + '="' + Y.value.replace(Ea, Ga) + '"';
            p += '>';
            h = Ia[k] ? p : p + Ka(h, l) + '</' + k + '>';
            break a;
          case Node.TEXT_NODE:
            h = h.data;
            h = k && Ja[k.localName] ? h : h.replace(Fa, Ga);
            break a;
          case Node.COMMENT_NODE:
            h = '\x3c!--' + h.data + '--\x3e';
            break a;
          default:
            throw (window.console.error(h), Error('not implemented'));
        }
      }
      c += h;
    }
    return c;
  }
  var B = t.i,
    La = {
      querySelector: function(a) {
        return this.__shady_native_querySelector(a);
      },
      querySelectorAll: function(a) {
        return this.__shady_native_querySelectorAll(a);
      }
    },
    Ma = {};
  function Na(a) {
    Ma[a] = function(b) {
      return b['__shady_native_' + a];
    };
  }
  function Oa(a, b) {
    y(a, b, '__shady_native_');
    for (var c in b) Na(c);
  }
  function C(a, b) {
    b = void 0 === b ? [] : b;
    for (var c = 0; c < b.length; c++) {
      var d = b[c],
        e = Object.getOwnPropertyDescriptor(a, d);
      e &&
        (Object.defineProperty(a, '__shady_native_' + d, e),
        e.value ? La[d] || (La[d] = e.value) : Na(d));
    }
  }
  var D = document.createTreeWalker(document, NodeFilter.SHOW_ALL, null, !1),
    E = document.createTreeWalker(document, NodeFilter.SHOW_ELEMENT, null, !1),
    Pa = document.implementation.createHTMLDocument('inert');
  function Qa(a) {
    for (var b; (b = a.__shady_native_firstChild); )
      a.__shady_native_removeChild(b);
  }
  var Ra = [
      'firstElementChild',
      'lastElementChild',
      'children',
      'childElementCount'
    ],
    Sa = ['querySelector', 'querySelectorAll'];
  function Ta() {
    var a = ['dispatchEvent', 'addEventListener', 'removeEventListener'];
    window.EventTarget
      ? C(window.EventTarget.prototype, a)
      : (C(Node.prototype, a), C(Window.prototype, a));
    B
      ? C(
          Node.prototype,
          'parentNode firstChild lastChild previousSibling nextSibling childNodes parentElement textContent'.split(
            ' '
          )
        )
      : Oa(Node.prototype, {
          parentNode: {
            get: function() {
              D.currentNode = this;
              return D.parentNode();
            }
          },
          firstChild: {
            get: function() {
              D.currentNode = this;
              return D.firstChild();
            }
          },
          lastChild: {
            get: function() {
              D.currentNode = this;
              return D.lastChild();
            }
          },
          previousSibling: {
            get: function() {
              D.currentNode = this;
              return D.previousSibling();
            }
          },
          nextSibling: {
            get: function() {
              D.currentNode = this;
              return D.nextSibling();
            }
          },
          childNodes: {
            get: function() {
              var a = [];
              D.currentNode = this;
              for (var c = D.firstChild(); c; )
                a.push(c), (c = D.nextSibling());
              return a;
            }
          },
          parentElement: {
            get: function() {
              E.currentNode = this;
              return E.parentNode();
            }
          },
          textContent: {
            get: function() {
              switch (this.nodeType) {
                case Node.ELEMENT_NODE:
                case Node.DOCUMENT_FRAGMENT_NODE:
                  for (
                    var a = document.createTreeWalker(
                        this,
                        NodeFilter.SHOW_TEXT,
                        null,
                        !1
                      ),
                      c = '',
                      d;
                    (d = a.nextNode());

                  )
                    c += d.nodeValue;
                  return c;
                default:
                  return this.nodeValue;
              }
            },
            set: function(a) {
              if ('undefined' === typeof a || null === a) a = '';
              switch (this.nodeType) {
                case Node.ELEMENT_NODE:
                case Node.DOCUMENT_FRAGMENT_NODE:
                  Qa(this);
                  (0 < a.length || this.nodeType === Node.ELEMENT_NODE) &&
                    this.__shady_native_insertBefore(
                      document.createTextNode(a),
                      void 0
                    );
                  break;
                default:
                  this.nodeValue = a;
              }
            }
          }
        });
    C(
      Node.prototype,
      'appendChild insertBefore removeChild replaceChild cloneNode contains'.split(
        ' '
      )
    );
    a = {
      firstElementChild: {
        get: function() {
          E.currentNode = this;
          return E.firstChild();
        }
      },
      lastElementChild: {
        get: function() {
          E.currentNode = this;
          return E.lastChild();
        }
      },
      children: {
        get: function() {
          var a = [];
          E.currentNode = this;
          for (var c = E.firstChild(); c; ) a.push(c), (c = E.nextSibling());
          return ua(a);
        }
      },
      childElementCount: {
        get: function() {
          return this.children ? this.children.length : 0;
        }
      }
    };
    B
      ? (C(Element.prototype, Ra),
        C(Element.prototype, [
          'previousElementSibling',
          'nextElementSibling',
          'innerHTML'
        ]),
        Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'children') &&
          C(HTMLElement.prototype, ['children']),
        Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'innerHTML') &&
          C(HTMLElement.prototype, ['innerHTML']))
      : (Oa(Element.prototype, a),
        Oa(Element.prototype, {
          previousElementSibling: {
            get: function() {
              E.currentNode = this;
              return E.previousSibling();
            }
          },
          nextElementSibling: {
            get: function() {
              E.currentNode = this;
              return E.nextSibling();
            }
          },
          innerHTML: {
            get: function() {
              return Ka(this, function(a) {
                return a.__shady_native_childNodes;
              });
            },
            set: function(a) {
              var b = 'template' === this.localName ? this.content : this;
              Qa(b);
              var d = this.localName || 'div';
              d =
                this.namespaceURI && this.namespaceURI !== Pa.namespaceURI
                  ? Pa.createElementNS(this.namespaceURI, d)
                  : Pa.createElement(d);
              d.innerHTML = a;
              for (
                a = 'template' === this.localName ? d.content : d;
                (d = a.__shady_native_firstChild);

              )
                b.__shady_native_insertBefore(d, void 0);
            }
          }
        }));
    C(
      Element.prototype,
      'setAttribute getAttribute hasAttribute removeAttribute focus blur'.split(
        ' '
      )
    );
    C(Element.prototype, Sa);
    C(HTMLElement.prototype, ['focus', 'blur', 'contains']);
    B && C(HTMLElement.prototype, ['parentElement', 'children', 'innerHTML']);
    window.HTMLTemplateElement &&
      C(window.HTMLTemplateElement.prototype, ['innerHTML']);
    B ? C(DocumentFragment.prototype, Ra) : Oa(DocumentFragment.prototype, a);
    C(DocumentFragment.prototype, Sa);
    B
      ? (C(Document.prototype, Ra), C(Document.prototype, ['activeElement']))
      : Oa(Document.prototype, a);
    C(Document.prototype, ['importNode', 'getElementById']);
    C(Document.prototype, Sa);
  }
  var Ua = z({
      get childNodes() {
        return this.__shady_childNodes;
      },
      get firstChild() {
        return this.__shady_firstChild;
      },
      get lastChild() {
        return this.__shady_lastChild;
      },
      get textContent() {
        return this.__shady_textContent;
      },
      set textContent(a) {
        this.__shady_textContent = a;
      },
      get childElementCount() {
        return this.__shady_childElementCount;
      },
      get children() {
        return this.__shady_children;
      },
      get firstElementChild() {
        return this.__shady_firstElementChild;
      },
      get lastElementChild() {
        return this.__shady_lastElementChild;
      },
      get innerHTML() {
        return this.__shady_innerHTML;
      },
      set innerHTML(a) {
        return (this.__shady_innerHTML = a);
      },
      get shadowRoot() {
        return this.__shady_shadowRoot;
      }
    }),
    Va = z({
      get parentElement() {
        return this.__shady_parentElement;
      },
      get parentNode() {
        return this.__shady_parentNode;
      },
      get nextSibling() {
        return this.__shady_nextSibling;
      },
      get previousSibling() {
        return this.__shady_previousSibling;
      },
      get nextElementSibling() {
        return this.__shady_nextElementSibling;
      },
      get previousElementSibling() {
        return this.__shady_previousElementSibling;
      },
      get className() {
        return this.__shady_className;
      },
      set className(a) {
        return (this.__shady_className = a);
      }
    }),
    Wa;
  for (Wa in Ua) Ua[Wa].enumerable = !1;
  for (var Xa in Va) Va[Xa].enumerable = !1;
  var Ya = t.i || t.A,
    Za = Ya
      ? function() {}
      : function(a) {
          var b = q(a);
          b.V || ((b.V = !0), y(a, Va));
        },
    $a = Ya
      ? function() {}
      : function(a) {
          var b = q(a);
          b.U || ((b.U = !0), y(a, Ua));
        };
  var ab = '__eventWrappers' + Date.now(),
    bb = (function() {
      var a = Object.getOwnPropertyDescriptor(Event.prototype, 'composed');
      return a
        ? function(b) {
            return a.get.call(b);
          }
        : null;
    })(),
    cb = {
      blur: !0,
      focus: !0,
      focusin: !0,
      focusout: !0,
      click: !0,
      dblclick: !0,
      mousedown: !0,
      mouseenter: !0,
      mouseleave: !0,
      mousemove: !0,
      mouseout: !0,
      mouseover: !0,
      mouseup: !0,
      wheel: !0,
      beforeinput: !0,
      input: !0,
      keydown: !0,
      keyup: !0,
      compositionstart: !0,
      compositionupdate: !0,
      compositionend: !0,
      touchstart: !0,
      touchend: !0,
      touchmove: !0,
      touchcancel: !0,
      pointerover: !0,
      pointerenter: !0,
      pointerdown: !0,
      pointermove: !0,
      pointerup: !0,
      pointercancel: !0,
      pointerout: !0,
      pointerleave: !0,
      gotpointercapture: !0,
      lostpointercapture: !0,
      dragstart: !0,
      drag: !0,
      dragenter: !0,
      dragleave: !0,
      dragover: !0,
      drop: !0,
      dragend: !0,
      DOMActivate: !0,
      DOMFocusIn: !0,
      DOMFocusOut: !0,
      keypress: !0
    },
    db = {
      DOMAttrModified: !0,
      DOMAttributeNameChanged: !0,
      DOMCharacterDataModified: !0,
      DOMElementNameChanged: !0,
      DOMNodeInserted: !0,
      DOMNodeInsertedIntoDocument: !0,
      DOMNodeRemoved: !0,
      DOMNodeRemovedFromDocument: !0,
      DOMSubtreeModified: !0
    };
  function eb(a) {
    return a instanceof Node ? a.__shady_getRootNode() : a;
  }
  function fb(a, b) {
    var c = [],
      d = a;
    for (a = eb(a); d; )
      c.push(d),
        d.__shady_assignedSlot
          ? (d = d.__shady_assignedSlot)
          : d.nodeType === Node.DOCUMENT_FRAGMENT_NODE &&
            d.host &&
            (b || d !== a)
          ? (d = d.host)
          : (d = d.__shady_parentNode);
    c[c.length - 1] === document && c.push(window);
    return c;
  }
  function gb(a) {
    a.__composedPath || (a.__composedPath = fb(a.target, !0));
    return a.__composedPath;
  }
  function hb(a, b) {
    if (!w) return a;
    a = fb(a, !0);
    for (var c = 0, d, e = void 0, f, g = void 0; c < b.length; c++)
      if (
        ((d = b[c]),
        (f = eb(d)),
        f !== e && ((g = a.indexOf(f)), (e = f)),
        !w(f) || -1 < g)
      )
        return d;
  }
  function ib(a) {
    function b(b, d) {
      b = new a(b, d);
      b.__composed = d && !!d.composed;
      return b;
    }
    b.__proto__ = a;
    b.prototype = a.prototype;
    return b;
  }
  var jb = { focus: !0, blur: !0 };
  function kb(a) {
    return a.__target !== a.target || a.__relatedTarget !== a.relatedTarget;
  }
  function lb(a, b, c) {
    if ((c = b.__handlers && b.__handlers[a.type] && b.__handlers[a.type][c]))
      for (
        var d = 0, e;
        (e = c[d]) &&
        (!kb(a) || a.target !== a.relatedTarget) &&
        (e.call(b, a), !a.__immediatePropagationStopped);
        d++
      );
  }
  function mb(a) {
    var b = a.composedPath();
    Object.defineProperty(a, 'currentTarget', {
      get: function() {
        return d;
      },
      configurable: !0
    });
    for (var c = b.length - 1; 0 <= c; c--) {
      var d = b[c];
      lb(a, d, 'capture');
      if (a.M) return;
    }
    Object.defineProperty(a, 'eventPhase', {
      get: function() {
        return Event.AT_TARGET;
      }
    });
    var e;
    for (c = 0; c < b.length; c++) {
      d = b[c];
      var f = r(d);
      f = f && f.root;
      if (0 === c || (f && f === e))
        if (
          (lb(a, d, 'bubble'),
          d !== window && (e = d.__shady_getRootNode()),
          a.M)
        )
          break;
    }
  }
  function nb(a, b, c, d, e, f) {
    for (var g = 0; g < a.length; g++) {
      var h = a[g],
        k = h.type,
        l = h.capture,
        p = h.once,
        u = h.passive;
      if (b === h.node && c === k && d === l && e === p && f === u) return g;
    }
    return -1;
  }
  function ob(a, b, c) {
    if (b) {
      var d = typeof b;
      if ('function' === d || 'object' === d)
        if (
          'object' !== d ||
          (b.handleEvent && 'function' === typeof b.handleEvent)
        ) {
          if (db[a]) return this.__shady_native_addEventListener(a, b, c);
          if (c && 'object' === typeof c) {
            var e = !!c.capture;
            var f = !!c.once;
            var g = !!c.passive;
          } else (e = !!c), (g = f = !1);
          var h = (c && c.N) || this,
            k = b[ab];
          if (k) {
            if (-1 < nb(k, h, a, e, f, g)) return;
          } else b[ab] = [];
          k = function(e) {
            f && this.__shady_removeEventListener(a, b, c);
            e.__target || pb(e);
            if (h !== this) {
              var g = Object.getOwnPropertyDescriptor(e, 'currentTarget');
              Object.defineProperty(e, 'currentTarget', {
                get: function() {
                  return h;
                },
                configurable: !0
              });
            }
            e.__previousCurrentTarget = e.currentTarget;
            if (!w(h) || -1 != e.composedPath().indexOf(h))
              if (e.composed || -1 < e.composedPath().indexOf(h))
                if (kb(e) && e.target === e.relatedTarget)
                  e.eventPhase === Event.BUBBLING_PHASE &&
                    e.stopImmediatePropagation();
                else if (
                  e.eventPhase === Event.CAPTURING_PHASE ||
                  e.bubbles ||
                  e.target === h ||
                  h instanceof Window
                ) {
                  var k =
                    'function' === d
                      ? b.call(h, e)
                      : b.handleEvent && b.handleEvent(e);
                  h !== this &&
                    (g
                      ? (Object.defineProperty(e, 'currentTarget', g),
                        (g = null))
                      : delete e.currentTarget);
                  return k;
                }
          };
          b[ab].push({
            node: h,
            type: a,
            capture: e,
            once: f,
            passive: g,
            va: k
          });
          jb[a]
            ? ((this.__handlers = this.__handlers || {}),
              (this.__handlers[a] = this.__handlers[a] || {
                capture: [],
                bubble: []
              }),
              this.__handlers[a][e ? 'capture' : 'bubble'].push(k))
            : this.__shady_native_addEventListener(a, k, c);
        }
    }
  }
  function qb(a, b, c) {
    if (b) {
      if (db[a]) return this.__shady_native_removeEventListener(a, b, c);
      if (c && 'object' === typeof c) {
        var d = !!c.capture;
        var e = !!c.once;
        var f = !!c.passive;
      } else (d = !!c), (f = e = !1);
      var g = (c && c.N) || this,
        h = void 0;
      var k = null;
      try {
        k = b[ab];
      } catch (l) {}
      k &&
        ((e = nb(k, g, a, d, e, f)),
        -1 < e && ((h = k.splice(e, 1)[0].va), k.length || (b[ab] = void 0)));
      this.__shady_native_removeEventListener(a, h || b, c);
      h &&
        jb[a] &&
        this.__handlers &&
        this.__handlers[a] &&
        ((a = this.__handlers[a][d ? 'capture' : 'bubble']),
        (h = a.indexOf(h)),
        -1 < h && a.splice(h, 1));
    }
  }
  function rb() {
    for (var a in jb)
      window.__shady_native_addEventListener(
        a,
        function(a) {
          a.__target || (pb(a), mb(a));
        },
        !0
      );
  }
  var sb = z({
    get composed() {
      void 0 === this.__composed &&
        (bb
          ? (this.__composed =
              'focusin' === this.type || 'focusout' === this.type || bb(this))
          : !1 !== this.isTrusted && (this.__composed = cb[this.type]));
      return this.__composed || !1;
    },
    composedPath: function() {
      this.__composedPath ||
        (this.__composedPath = fb(this.__target, this.composed));
      return this.__composedPath;
    },
    get target() {
      return hb(
        this.currentTarget || this.__previousCurrentTarget,
        this.composedPath()
      );
    },
    get relatedTarget() {
      if (!this.__relatedTarget) return null;
      this.__relatedTargetComposedPath ||
        (this.__relatedTargetComposedPath = fb(this.__relatedTarget, !0));
      return hb(
        this.currentTarget || this.__previousCurrentTarget,
        this.__relatedTargetComposedPath
      );
    },
    stopPropagation: function() {
      Event.prototype.stopPropagation.call(this);
      this.M = !0;
    },
    stopImmediatePropagation: function() {
      Event.prototype.stopImmediatePropagation.call(this);
      this.M = this.__immediatePropagationStopped = !0;
    }
  });
  function pb(a) {
    a.__target = a.target;
    a.__relatedTarget = a.relatedTarget;
    if (t.i) {
      var b = Object.getPrototypeOf(a);
      if (!Object.hasOwnProperty(b, '__shady_patchedProto')) {
        var c = Object.create(b);
        c.__shady_sourceProto = b;
        y(c, sb);
        b.__shady_patchedProto = c;
      }
      a.__proto__ = b.__shady_patchedProto;
    } else y(a, sb);
  }
  var tb = ib(Event),
    ub = ib(CustomEvent),
    vb = ib(MouseEvent);
  function wb() {
    if (!bb && Object.getOwnPropertyDescriptor(Event.prototype, 'isTrusted')) {
      var a = function() {
        var a = new MouseEvent('click', {
          bubbles: !0,
          cancelable: !0,
          composed: !0
        });
        this.__shady_dispatchEvent(a);
      };
      Element.prototype.click
        ? (Element.prototype.click = a)
        : HTMLElement.prototype.click && (HTMLElement.prototype.click = a);
    }
  }
  var xb = Object.getOwnPropertyNames(Document.prototype).filter(function(a) {
    return 'on' === a.substring(0, 2);
  });
  function yb(a, b) {
    return { index: a, C: [], H: b };
  }
  function zb(a, b, c, d) {
    var e = 0,
      f = 0,
      g = 0,
      h = 0,
      k = Math.min(b - e, d - f);
    if (0 == e && 0 == f)
      a: {
        for (g = 0; g < k; g++) if (a[g] !== c[g]) break a;
        g = k;
      }
    if (b == a.length && d == c.length) {
      h = a.length;
      for (var l = c.length, p = 0; p < k - g && Ab(a[--h], c[--l]); ) p++;
      h = p;
    }
    e += g;
    f += g;
    b -= h;
    d -= h;
    if (0 == b - e && 0 == d - f) return [];
    if (e == b) {
      for (b = yb(e, 0); f < d; ) b.C.push(c[f++]);
      return [b];
    }
    if (f == d) return [yb(e, b - e)];
    k = e;
    g = f;
    d = d - g + 1;
    h = b - k + 1;
    b = Array(d);
    for (l = 0; l < d; l++) (b[l] = Array(h)), (b[l][0] = l);
    for (l = 0; l < h; l++) b[0][l] = l;
    for (l = 1; l < d; l++)
      for (p = 1; p < h; p++)
        if (a[k + p - 1] === c[g + l - 1]) b[l][p] = b[l - 1][p - 1];
        else {
          var u = b[l - 1][p] + 1,
            X = b[l][p - 1] + 1;
          b[l][p] = u < X ? u : X;
        }
    k = b.length - 1;
    g = b[0].length - 1;
    d = b[k][g];
    for (a = []; 0 < k || 0 < g; )
      0 == k
        ? (a.push(2), g--)
        : 0 == g
        ? (a.push(3), k--)
        : ((h = b[k - 1][g - 1]),
          (l = b[k - 1][g]),
          (p = b[k][g - 1]),
          (u = l < p ? (l < h ? l : h) : p < h ? p : h),
          u == h
            ? (h == d ? a.push(0) : (a.push(1), (d = h)), k--, g--)
            : u == l
            ? (a.push(3), k--, (d = l))
            : (a.push(2), g--, (d = p)));
    a.reverse();
    b = void 0;
    k = [];
    for (g = 0; g < a.length; g++)
      switch (a[g]) {
        case 0:
          b && (k.push(b), (b = void 0));
          e++;
          f++;
          break;
        case 1:
          b || (b = yb(e, 0));
          b.H++;
          e++;
          b.C.push(c[f]);
          f++;
          break;
        case 2:
          b || (b = yb(e, 0));
          b.H++;
          e++;
          break;
        case 3:
          b || (b = yb(e, 0)), b.C.push(c[f]), f++;
      }
    b && k.push(b);
    return k;
  }
  function Ab(a, b) {
    return a === b;
  }
  function Bb(a, b, c) {
    Za(a);
    c = c || null;
    var d = q(a),
      e = q(b),
      f = c ? q(c) : null;
    d.previousSibling = c ? f.previousSibling : b.__shady_lastChild;
    if ((f = r(d.previousSibling))) f.nextSibling = a;
    if ((f = r((d.nextSibling = c)))) f.previousSibling = a;
    d.parentNode = b;
    c
      ? c === e.firstChild && (e.firstChild = a)
      : ((e.lastChild = a), e.firstChild || (e.firstChild = a));
    e.childNodes = null;
  }
  function Cb(a, b, c) {
    $a(b);
    var d = q(b);
    void 0 !== d.firstChild && (d.childNodes = null);
    if (a.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
      d = a.__shady_childNodes;
      for (var e = 0; e < d.length; e++) Bb(d[e], b, c);
      a = q(a);
      b = void 0 !== a.firstChild ? null : void 0;
      a.firstChild = a.lastChild = b;
      a.childNodes = b;
    } else Bb(a, b, c);
  }
  function Db(a, b) {
    var c = q(a);
    b = q(b);
    a === b.firstChild && (b.firstChild = c.nextSibling);
    a === b.lastChild && (b.lastChild = c.previousSibling);
    a = c.previousSibling;
    var d = c.nextSibling;
    a && (q(a).nextSibling = d);
    d && (q(d).previousSibling = a);
    c.parentNode = c.previousSibling = c.nextSibling = void 0;
    void 0 !== b.childNodes && (b.childNodes = null);
  }
  function Eb(a) {
    var b = q(a);
    if (void 0 === b.firstChild) {
      b.childNodes = null;
      var c = (b.firstChild = a.__shady_native_firstChild || null);
      b.lastChild = a.__shady_native_lastChild || null;
      $a(a);
      b = c;
      for (c = void 0; b; b = b.__shady_native_nextSibling) {
        var d = q(b);
        d.parentNode = a;
        d.nextSibling = b.__shady_native_nextSibling || null;
        d.previousSibling = c || null;
        c = b;
        Za(b);
      }
    }
  }
  var Fb = null;
  function F() {
    Fb || (Fb = window.ShadyCSS && window.ShadyCSS.ScopingShim);
    return Fb || null;
  }
  function Gb(a, b) {
    var c = F();
    c && c.unscopeNode(a, b);
  }
  function Hb(a, b) {
    var c = F();
    if (!c) return !0;
    if (a.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
      c = !0;
      a = a.__shady_childNodes;
      for (var d = 0; c && d < a.length; d++) c = c && Hb(a[d], b);
      return c;
    }
    return a.nodeType !== Node.ELEMENT_NODE
      ? !0
      : c.currentScopeForNode(a) === b;
  }
  function Ib(a) {
    if (a.nodeType !== Node.ELEMENT_NODE) return '';
    var b = F();
    return b ? b.currentScopeForNode(a) : '';
  }
  function Jb(a, b) {
    if (a) {
      a.nodeType === Node.ELEMENT_NODE && b(a);
      a = a.__shady_childNodes;
      for (var c = 0, d; c < a.length; c++)
        (d = a[c]), d.nodeType === Node.ELEMENT_NODE && Jb(d, b);
    }
  }
  var Kb = window.document,
    Lb = t.Y,
    Mb = Object.getOwnPropertyDescriptor(Node.prototype, 'isConnected'),
    Nb = Mb && Mb.get;
  function Ob(a) {
    for (var b; (b = a.__shady_firstChild); ) a.__shady_removeChild(b);
  }
  function Pb(a) {
    var b = r(a);
    if (b && void 0 !== b.B) {
      b = a.__shady_childNodes;
      for (var c = 0, d = b.length, e = void 0; c < d && (e = b[c]); c++) Pb(e);
    }
    if ((a = r(a))) a.B = void 0;
  }
  function Qb(a) {
    var b = a;
    a &&
      'slot' === a.localName &&
      (b =
        (b = (b = r(a)) && b.s) && b.length ? b[0] : Qb(a.__shady_nextSibling));
    return b;
  }
  function Rb(a, b, c) {
    if ((a = (a = r(a)) && a.v))
      b && a.addedNodes.push(b), c && a.removedNodes.push(c), za(a);
  }
  var Tb = z({
    get parentNode() {
      var a = r(this);
      a = a && a.parentNode;
      return void 0 !== a ? a : this.__shady_native_parentNode;
    },
    get firstChild() {
      var a = r(this);
      a = a && a.firstChild;
      return void 0 !== a ? a : this.__shady_native_firstChild;
    },
    get lastChild() {
      var a = r(this);
      a = a && a.lastChild;
      return void 0 !== a ? a : this.__shady_native_lastChild;
    },
    get nextSibling() {
      var a = r(this);
      a = a && a.nextSibling;
      return void 0 !== a ? a : this.__shady_native_nextSibling;
    },
    get previousSibling() {
      var a = r(this);
      a = a && a.previousSibling;
      return void 0 !== a ? a : this.__shady_native_previousSibling;
    },
    get childNodes() {
      if (v(this)) {
        var a = r(this);
        if (!a.childNodes) {
          a.childNodes = [];
          for (var b = this.__shady_firstChild; b; b = b.__shady_nextSibling)
            a.childNodes.push(b);
        }
        var c = a.childNodes;
      } else c = this.__shady_native_childNodes;
      c.item = function(a) {
        return c[a];
      };
      return c;
    },
    get parentElement() {
      var a = r(this);
      (a = a && a.parentNode) && a.nodeType !== Node.ELEMENT_NODE && (a = null);
      return void 0 !== a ? a : this.__shady_native_parentElement;
    },
    get isConnected() {
      if (Nb && Nb.call(this)) return !0;
      if (this.nodeType == Node.DOCUMENT_FRAGMENT_NODE) return !1;
      var a = this.ownerDocument;
      if (sa) {
        if (a.__shady_native_contains(this)) return !0;
      } else if (
        a.documentElement &&
        a.documentElement.__shady_native_contains(this)
      )
        return !0;
      for (a = this; a && !(a instanceof Document); )
        a = a.__shady_parentNode || (w(a) ? a.host : void 0);
      return !!(a && a instanceof Document);
    },
    get textContent() {
      if (v(this)) {
        for (var a = [], b = 0, c = this.__shady_childNodes, d; (d = c[b]); b++)
          d.nodeType !== Node.COMMENT_NODE && a.push(d.__shady_textContent);
        return a.join('');
      }
      return this.__shady_native_textContent;
    },
    set textContent(a) {
      if ('undefined' === typeof a || null === a) a = '';
      switch (this.nodeType) {
        case Node.ELEMENT_NODE:
        case Node.DOCUMENT_FRAGMENT_NODE:
          if (!v(this) && t.i) {
            var b = this.__shady_firstChild;
            (b != this.__shady_lastChild ||
              (b && b.nodeType != Node.TEXT_NODE)) &&
              Ob(this);
            this.__shady_native_textContent = a;
          } else
            Ob(this),
              (0 < a.length || this.nodeType === Node.ELEMENT_NODE) &&
                this.__shady_insertBefore(document.createTextNode(a));
          break;
        default:
          this.nodeValue = a;
      }
    },
    insertBefore: function(a, b) {
      if (this.ownerDocument !== Kb && a.ownerDocument !== Kb)
        return this.__shady_native_insertBefore(a, b), a;
      if (a === this)
        throw Error(
          "Failed to execute 'appendChild' on 'Node': The new child element contains the parent."
        );
      if (b) {
        var c = r(b);
        c = c && c.parentNode;
        if (
          (void 0 !== c && c !== this) ||
          (void 0 === c && b.__shady_native_parentNode !== this)
        )
          throw Error(
            "Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node."
          );
      }
      if (b === a) return a;
      var d = [],
        e = (c = G(this)) ? c.host.localName : Ib(this),
        f = a.__shady_parentNode;
      if (f) {
        var g = Ib(a);
        f.__shady_removeChild(a, !!c || !G(a));
      }
      f = !0;
      var h = (!Lb || void 0 === a.__noInsertionPoint) && !Hb(a, e),
        k =
          c &&
          !a.__noInsertionPoint &&
          (!Lb || a.nodeType === Node.DOCUMENT_FRAGMENT_NODE);
      if (k || h)
        h && (g = g || Ib(a)),
          Jb(a, function(a) {
            k && 'slot' === a.localName && d.push(a);
            if (h) {
              var b = g;
              F() && (b && Gb(a, b), (b = F()) && b.scopeNode(a, e));
            }
          });
      if ('slot' === this.localName || d.length)
        d.length &&
          ((c.c = c.c || []),
          (c.a = c.a || []),
          (c.b = c.b || {}),
          c.c.push.apply(c.c, d instanceof Array ? d : ia(ha(d)))),
          c && H(c);
      v(this) &&
        (Cb(a, this, b),
        (c = r(this)),
        la(this) ? (H(c.root), (f = !1)) : c.root && (f = !1));
      f
        ? ((c = w(this) ? this.host : this),
          b
            ? ((b = Qb(b)), c.__shady_native_insertBefore(a, b))
            : c.__shady_native_appendChild(a))
        : a.ownerDocument !== this.ownerDocument &&
          this.ownerDocument.adoptNode(a);
      Rb(this, a);
      return a;
    },
    appendChild: function(a) {
      return this.__shady_insertBefore(a);
    },
    removeChild: function(a, b) {
      b = void 0 === b ? !1 : b;
      if (this.ownerDocument !== Kb) return this.__shady_native_removeChild(a);
      if (a.__shady_parentNode !== this)
        throw Error('The node to be removed is not a child of this node: ' + a);
      var c = G(a),
        d = r(this);
      if (v(this) && (Db(a, this), la(this))) {
        H(d.root);
        var e = !0;
      }
      if (F() && !b && c) {
        var f = Ib(a);
        Jb(a, function(a) {
          Gb(a, f);
        });
      }
      Pb(a);
      if (c) {
        var g = this && 'slot' === this.localName;
        g && (e = !0);
        ((b = Sb(c, a)) || g) && H(c);
      }
      e ||
        ((e = w(this) ? this.host : this),
        ((!d.root && 'slot' !== a.localName) ||
          e === a.__shady_native_parentNode) &&
          e.__shady_native_removeChild(a));
      Rb(this, null, a);
      return a;
    },
    replaceChild: function(a, b) {
      this.__shady_insertBefore(a, b);
      this.__shady_removeChild(b);
      return a;
    },
    cloneNode: function(a) {
      if ('template' == this.localName) return this.__shady_native_cloneNode(a);
      var b = this.__shady_native_cloneNode(!1);
      if (a && b.nodeType !== Node.ATTRIBUTE_NODE) {
        a = this.__shady_childNodes;
        for (var c = 0, d; c < a.length; c++)
          (d = a[c].__shady_cloneNode(!0)), b.__shady_appendChild(d);
      }
      return b;
    },
    getRootNode: function(a) {
      if (this && this.nodeType) {
        var b = q(this),
          c = b.B;
        void 0 === c &&
          (w(this)
            ? ((c = this), (b.B = c))
            : ((c = (c = this.__shady_parentNode)
                ? c.__shady_getRootNode(a)
                : this),
              document.documentElement.__shady_native_contains(this) &&
                (b.B = c)));
        return c;
      }
    },
    contains: function(a) {
      return ta(this, a);
    }
  });
  function Ub(a, b, c) {
    var d = [];
    Vb(a.__shady_childNodes, b, c, d);
    return d;
  }
  function Vb(a, b, c, d) {
    for (var e = 0, f = a.length, g = void 0; e < f && (g = a[e]); e++) {
      var h;
      if ((h = g.nodeType === Node.ELEMENT_NODE)) {
        h = g;
        var k = b,
          l = c,
          p = d,
          u = k(h);
        u && p.push(h);
        l && l(u) ? (h = u) : (Vb(h.__shady_childNodes, k, l, p), (h = void 0));
      }
      if (h) break;
    }
  }
  var I = z({
      get firstElementChild() {
        var a = r(this);
        if (a && void 0 !== a.firstChild) {
          for (
            a = this.__shady_firstChild;
            a && a.nodeType !== Node.ELEMENT_NODE;

          )
            a = a.__shady_nextSibling;
          return a;
        }
        return this.__shady_native_firstElementChild;
      },
      get lastElementChild() {
        var a = r(this);
        if (a && void 0 !== a.lastChild) {
          for (
            a = this.__shady_lastChild;
            a && a.nodeType !== Node.ELEMENT_NODE;

          )
            a = a.__shady_previousSibling;
          return a;
        }
        return this.__shady_native_lastElementChild;
      },
      get children() {
        return v(this)
          ? ua(
              Array.prototype.filter.call(this.__shady_childNodes, function(a) {
                return a.nodeType === Node.ELEMENT_NODE;
              })
            )
          : this.__shady_native_children;
      },
      get childElementCount() {
        var a = this.__shady_children;
        return a ? a.length : 0;
      }
    }),
    Wb = z({
      querySelector: function(a) {
        return (
          Ub(
            this,
            function(b) {
              return na.call(b, a);
            },
            function(a) {
              return !!a;
            }
          )[0] || null
        );
      },
      querySelectorAll: function(a, b) {
        if (b) {
          b = Array.prototype.slice.call(
            this.__shady_native_querySelectorAll(a)
          );
          var c = this.__shady_getRootNode();
          return b.filter(function(a) {
            return a.__shady_getRootNode() == c;
          });
        }
        return Ub(this, function(b) {
          return na.call(b, a);
        });
      }
    }),
    Xb = t.Y ? Object.assign({}, I) : I;
  Object.assign(I, Wb);
  var Yb = z({
    getElementById: function(a) {
      return '' === a
        ? null
        : Ub(
            this,
            function(b) {
              return b.id == a;
            },
            function(a) {
              return !!a;
            }
          )[0] || null;
    }
  });
  var Zb = z({
    get activeElement() {
      var a = t.i
        ? document.__shady_native_activeElement
        : document.activeElement;
      if (!a || !a.nodeType) return null;
      var b = !!w(this);
      if (
        !(
          this === document ||
          (b && this.host !== a && this.host.__shady_native_contains(a))
        )
      )
        return null;
      for (b = G(a); b && b !== this; ) (a = b.host), (b = G(a));
      return this === document ? (b ? null : a) : b === this ? a : null;
    }
  });
  var $b = document.implementation.createHTMLDocument('inert'),
    ac = z({
      get innerHTML() {
        return v(this)
          ? Ka('template' === this.localName ? this.content : this, function(
              a
            ) {
              return a.__shady_childNodes;
            })
          : this.__shady_native_innerHTML;
      },
      set innerHTML(a) {
        if ('template' === this.localName) this.__shady_native_innerHTML = a;
        else {
          Ob(this);
          var b = this.localName || 'div';
          b =
            this.namespaceURI && this.namespaceURI !== $b.namespaceURI
              ? $b.createElementNS(this.namespaceURI, b)
              : $b.createElement(b);
          for (
            t.i ? (b.__shady_native_innerHTML = a) : (b.innerHTML = a);
            (a = b.__shady_firstChild);

          )
            this.__shady_insertBefore(a);
        }
      }
    });
  var bc = z({
    addEventListener: function(a, b, c) {
      'object' !== typeof c && (c = { capture: !!c });
      c.N = this;
      this.host.__shady_addEventListener(a, b, c);
    },
    removeEventListener: function(a, b, c) {
      'object' !== typeof c && (c = { capture: !!c });
      c.N = this;
      this.host.__shady_removeEventListener(a, b, c);
    }
  });
  function cc(a, b) {
    y(a, bc, b);
    y(a, Zb, b);
    y(a, ac, b);
    y(a, I, b);
    t.A && !b ? (y(a, Tb, b), y(a, Yb, b)) : t.i || (y(a, Va), y(a, Ua));
  }
  var dc = {},
    J = t.deferConnectionCallbacks && 'loading' === document.readyState,
    ec;
  function fc(a) {
    var b = [];
    do b.unshift(a);
    while ((a = a.__shady_parentNode));
    return b;
  }
  function gc(a, b, c) {
    if (a !== dc) throw new TypeError('Illegal constructor');
    this.ea = 'ShadyRoot';
    this.host = b;
    this.mode = c && c.mode;
    Eb(b);
    a = q(b);
    a.root = this;
    a.Z = 'closed' !== this.mode ? this : null;
    a = q(this);
    a.firstChild = a.lastChild = a.parentNode = a.nextSibling = a.previousSibling = null;
    a.childNodes = [];
    this.f = this.u = !1;
    this.c = this.b = this.a = null;
    if (t.preferPerformance)
      for (; (a = b.__shady_native_firstChild); )
        b.__shady_native_removeChild(a);
    else H(this);
  }
  function H(a) {
    a.u ||
      ((a.u = !0),
      wa(function() {
        var b = hc(a);
        b && b._renderRoot();
      }));
  }
  function hc(a) {
    for (var b; a; ) {
      a.u && (b = a);
      a: {
        var c = a;
        a = c.host.__shady_getRootNode();
        if (w(a)) {
          c = c.host.__shady_childNodes;
          for (var d = 0, e; d < c.length; d++)
            if (((e = c[d]), 'slot' == e.localName)) break a;
        }
        a = void 0;
      }
    }
    return b;
  }
  function ic(a) {
    (a = hc(a)) && a.u && a._renderRoot();
  }
  gc.prototype._renderRoot = function() {
    var a = J;
    J = !0;
    this.u = !1;
    if (this.a) {
      jc(this);
      for (var b = 0, c; b < this.a.length; b++) {
        c = this.a[b];
        var d = r(c),
          e = d.assignedNodes;
        d.assignedNodes = [];
        d.s = [];
        if ((d.O = e))
          for (d = 0; d < e.length; d++) {
            var f = r(e[d]);
            f.G = f.assignedSlot;
            f.assignedSlot === c && (f.assignedSlot = null);
          }
      }
      for (b = this.host.__shady_firstChild; b; b = b.__shady_nextSibling)
        kc(this, b);
      for (b = 0; b < this.a.length; b++) {
        c = this.a[b];
        e = r(c);
        if (!e.assignedNodes.length)
          for (d = c.__shady_firstChild; d; d = d.__shady_nextSibling)
            kc(this, d, c);
        (d = (d = r(c.__shady_parentNode)) && d.root) &&
          (ma(d) || d.u) &&
          d._renderRoot();
        lc(this, e.s, e.assignedNodes);
        if ((d = e.O)) {
          for (f = 0; f < d.length; f++) r(d[f]).G = null;
          e.O = null;
          d.length > e.assignedNodes.length && (e.J = !0);
        }
        e.J && ((e.J = !1), mc(this, c));
      }
      c = this.a;
      b = [];
      for (e = 0; e < c.length; e++)
        (d = c[e].__shady_parentNode),
          ((f = r(d)) && f.root) || !(0 > b.indexOf(d)) || b.push(d);
      for (c = 0; c < b.length; c++) {
        f = b[c];
        e = f === this ? this.host : f;
        d = [];
        f = f.__shady_childNodes;
        for (var g = 0; g < f.length; g++) {
          var h = f[g];
          if ('slot' == h.localName) {
            h = r(h).s;
            for (var k = 0; k < h.length; k++) d.push(h[k]);
          } else d.push(h);
        }
        f = Array.prototype.slice.call(e.__shady_native_childNodes);
        g = zb(d, d.length, f, f.length);
        k = h = 0;
        for (var l = void 0; h < g.length && (l = g[h]); h++) {
          for (var p = 0, u = void 0; p < l.C.length && (u = l.C[p]); p++)
            u.__shady_native_parentNode === e &&
              e.__shady_native_removeChild(u),
              f.splice(l.index + k, 1);
          k -= l.H;
        }
        k = 0;
        for (l = void 0; k < g.length && (l = g[k]); k++)
          for (h = f[l.index], p = l.index; p < l.index + l.H; p++)
            (u = d[p]), e.__shady_native_insertBefore(u, h), f.splice(p, 0, u);
      }
    }
    if (!t.preferPerformance && !this.f)
      for (b = this.host.__shady_childNodes, c = 0, e = b.length; c < e; c++)
        (d = b[c]),
          (f = r(d)),
          d.__shady_native_parentNode !== this.host ||
            ('slot' !== d.localName && f.assignedSlot) ||
            this.host.__shady_native_removeChild(d);
    this.f = !0;
    J = a;
    ec && ec();
  };
  function kc(a, b, c) {
    var d = q(b),
      e = d.G;
    d.G = null;
    c || (c = (a = a.b[b.__shady_slot || '__catchall']) && a[0]);
    c
      ? (q(c).assignedNodes.push(b), (d.assignedSlot = c))
      : (d.assignedSlot = void 0);
    e !== d.assignedSlot && d.assignedSlot && (q(d.assignedSlot).J = !0);
  }
  function lc(a, b, c) {
    for (var d = 0, e = void 0; d < c.length && (e = c[d]); d++)
      if ('slot' == e.localName) {
        var f = r(e).assignedNodes;
        f && f.length && lc(a, b, f);
      } else b.push(c[d]);
  }
  function mc(a, b) {
    b.__shady_native_dispatchEvent(new Event('slotchange'));
    b = r(b);
    b.assignedSlot && mc(a, b.assignedSlot);
  }
  function jc(a) {
    if (a.c && a.c.length) {
      for (var b = a.c, c, d = 0; d < b.length; d++) {
        var e = b[d];
        Eb(e);
        Eb(e.__shady_parentNode);
        var f = nc(e);
        a.b[f] ? ((c = c || {}), (c[f] = !0), a.b[f].push(e)) : (a.b[f] = [e]);
        a.a.push(e);
      }
      if (c) for (var g in c) a.b[g] = oc(a.b[g]);
      a.c = [];
    }
  }
  function nc(a) {
    var b = a.name || a.getAttribute('name') || '__catchall';
    return (a.ca = b);
  }
  function oc(a) {
    return a.sort(function(a, c) {
      a = fc(a);
      for (var b = fc(c), e = 0; e < a.length; e++) {
        c = a[e];
        var f = b[e];
        if (c !== f)
          return (
            (a = Array.from(c.__shady_parentNode.__shady_childNodes)),
            a.indexOf(c) - a.indexOf(f)
          );
      }
    });
  }
  function Sb(a, b) {
    if (a.a) {
      jc(a);
      var c = a.b,
        d;
      for (d in c)
        for (var e = c[d], f = 0; f < e.length; f++) {
          var g = e[f];
          if (ta(b, g)) {
            e.splice(f, 1);
            var h = a.a.indexOf(g);
            0 <= h && a.a.splice(h, 1);
            f--;
            g = r(g);
            if ((h = g.s))
              for (var k = 0; k < h.length; k++) {
                var l = h[k],
                  p = l.__shady_native_parentNode;
                p && p.__shady_native_removeChild(l);
              }
            g.s = [];
            g.assignedNodes = [];
            h = !0;
          }
        }
      return h;
    }
  }
  function ma(a) {
    jc(a);
    return !(!a.a || !a.a.length);
  }
  (function(a) {
    a.__proto__ = DocumentFragment.prototype;
    cc(a, '__shady_');
    cc(a);
    Object.defineProperties(a, {
      nodeType: { value: Node.DOCUMENT_FRAGMENT_NODE, configurable: !0 },
      nodeName: { value: '#document-fragment', configurable: !0 },
      nodeValue: { value: null, configurable: !0 }
    });
    ['localName', 'namespaceURI', 'prefix'].forEach(function(b) {
      Object.defineProperty(a, b, { value: void 0, configurable: !0 });
    });
    ['ownerDocument', 'baseURI', 'isConnected'].forEach(function(b) {
      Object.defineProperty(a, b, {
        get: function() {
          return this.host[b];
        },
        configurable: !0
      });
    });
  })(gc.prototype);
  if (window.customElements && t.R && !t.preferPerformance) {
    var pc = new Map();
    ec = function() {
      var a = [];
      pc.forEach(function(b, c) {
        a.push([c, b]);
      });
      pc.clear();
      for (var b = 0; b < a.length; b++) {
        var c = a[b][0];
        a[b][1] ? c.aa() : c.ba();
      }
    };
    J &&
      document.addEventListener(
        'readystatechange',
        function() {
          J = !1;
          ec();
        },
        { once: !0 }
      );
    var qc = function(a, b, c) {
        var d = 0,
          e = '__isConnected' + d++;
        if (b || c)
          (a.prototype.connectedCallback = a.prototype.aa = function() {
            J
              ? pc.set(this, !0)
              : this[e] || ((this[e] = !0), b && b.call(this));
          }),
            (a.prototype.disconnectedCallback = a.prototype.ba = function() {
              J
                ? this.isConnected || pc.set(this, !1)
                : this[e] && ((this[e] = !1), c && c.call(this));
            });
        return a;
      },
      define = window.customElements.define;
    Object.defineProperty(window.CustomElementRegistry.prototype, 'define', {
      value: function(a, b) {
        var c = b.prototype.connectedCallback,
          d = b.prototype.disconnectedCallback;
        define.call(window.customElements, a, qc(b, c, d));
        b.prototype.connectedCallback = c;
        b.prototype.disconnectedCallback = d;
      }
    });
  }
  function G(a) {
    a = a.__shady_getRootNode();
    if (w(a)) return a;
  }
  function K(a) {
    this.node = a;
  }
  m = K.prototype;
  m.addEventListener = function(a, b, c) {
    return this.node.__shady_addEventListener(a, b, c);
  };
  m.removeEventListener = function(a, b, c) {
    return this.node.__shady_removeEventListener(a, b, c);
  };
  m.appendChild = function(a) {
    return this.node.__shady_appendChild(a);
  };
  m.insertBefore = function(a, b) {
    return this.node.__shady_insertBefore(a, b);
  };
  m.removeChild = function(a) {
    return this.node.__shady_removeChild(a);
  };
  m.replaceChild = function(a, b) {
    return this.node.__shady_replaceChild(a, b);
  };
  m.cloneNode = function(a) {
    return this.node.__shady_cloneNode(a);
  };
  m.getRootNode = function(a) {
    return this.node.__shady_getRootNode(a);
  };
  m.contains = function(a) {
    return this.node.__shady_contains(a);
  };
  m.dispatchEvent = function(a) {
    return this.node.__shady_dispatchEvent(a);
  };
  m.setAttribute = function(a, b) {
    this.node.__shady_setAttribute(a, b);
  };
  m.getAttribute = function(a) {
    return this.node.__shady_native_getAttribute(a);
  };
  m.removeAttribute = function(a) {
    this.node.__shady_removeAttribute(a);
  };
  m.attachShadow = function(a) {
    return this.node.__shady_attachShadow(a);
  };
  m.focus = function() {
    this.node.__shady_native_focus();
  };
  m.blur = function() {
    this.node.__shady_blur();
  };
  m.importNode = function(a, b) {
    if (this.node.nodeType === Node.DOCUMENT_NODE)
      return this.node.__shady_importNode(a, b);
  };
  m.getElementById = function(a) {
    if (this.node.nodeType === Node.DOCUMENT_NODE)
      return this.node.__shady_getElementById(a);
  };
  m.querySelector = function(a) {
    return this.node.__shady_querySelector(a);
  };
  m.querySelectorAll = function(a, b) {
    return this.node.__shady_querySelectorAll(a, b);
  };
  m.assignedNodes = function(a) {
    if ('slot' === this.node.localName)
      return this.node.__shady_assignedNodes(a);
  };
  n.Object.defineProperties(K.prototype, {
    activeElement: {
      configurable: !0,
      enumerable: !0,
      get: function() {
        if (w(this.node) || this.node.nodeType === Node.DOCUMENT_NODE)
          return this.node.__shady_activeElement;
      }
    },
    _activeElement: {
      configurable: !0,
      enumerable: !0,
      get: function() {
        return this.activeElement;
      }
    },
    host: {
      configurable: !0,
      enumerable: !0,
      get: function() {
        if (w(this.node)) return this.node.host;
      }
    },
    parentNode: {
      configurable: !0,
      enumerable: !0,
      get: function() {
        return this.node.__shady_parentNode;
      }
    },
    firstChild: {
      configurable: !0,
      enumerable: !0,
      get: function() {
        return this.node.__shady_firstChild;
      }
    },
    lastChild: {
      configurable: !0,
      enumerable: !0,
      get: function() {
        return this.node.__shady_lastChild;
      }
    },
    nextSibling: {
      configurable: !0,
      enumerable: !0,
      get: function() {
        return this.node.__shady_nextSibling;
      }
    },
    previousSibling: {
      configurable: !0,
      enumerable: !0,
      get: function() {
        return this.node.__shady_previousSibling;
      }
    },
    childNodes: {
      configurable: !0,
      enumerable: !0,
      get: function() {
        return this.node.__shady_childNodes;
      }
    },
    parentElement: {
      configurable: !0,
      enumerable: !0,
      get: function() {
        return this.node.__shady_parentElement;
      }
    },
    firstElementChild: {
      configurable: !0,
      enumerable: !0,
      get: function() {
        return this.node.__shady_firstElementChild;
      }
    },
    lastElementChild: {
      configurable: !0,
      enumerable: !0,
      get: function() {
        return this.node.__shady_lastElementChild;
      }
    },
    nextElementSibling: {
      configurable: !0,
      enumerable: !0,
      get: function() {
        return this.node.__shady_nextElementSibling;
      }
    },
    previousElementSibling: {
      configurable: !0,
      enumerable: !0,
      get: function() {
        return this.node.__shady_previousElementSibling;
      }
    },
    children: {
      configurable: !0,
      enumerable: !0,
      get: function() {
        return this.node.__shady_children;
      }
    },
    childElementCount: {
      configurable: !0,
      enumerable: !0,
      get: function() {
        return this.node.__shady_childElementCount;
      }
    },
    shadowRoot: {
      configurable: !0,
      enumerable: !0,
      get: function() {
        return this.node.__shady_shadowRoot;
      }
    },
    assignedSlot: {
      configurable: !0,
      enumerable: !0,
      get: function() {
        return this.node.__shady_assignedSlot;
      }
    },
    isConnected: {
      configurable: !0,
      enumerable: !0,
      get: function() {
        return this.node.__shady_isConnected;
      }
    },
    innerHTML: {
      configurable: !0,
      enumerable: !0,
      get: function() {
        return this.node.__shady_innerHTML;
      },
      set: function(a) {
        this.node.__shady_innerHTML = a;
      }
    },
    textContent: {
      configurable: !0,
      enumerable: !0,
      get: function() {
        return this.node.__shady_textContent;
      },
      set: function(a) {
        this.node.__shady_textContent = a;
      }
    },
    slot: {
      configurable: !0,
      enumerable: !0,
      get: function() {
        return this.node.__shady_slot;
      },
      set: function(a) {
        this.node.__shady_slot = a;
      }
    }
  });
  xb.forEach(function(a) {
    Object.defineProperty(K.prototype, a, {
      get: function() {
        return this.node['__shady_' + a];
      },
      set: function(b) {
        this.node['__shady_' + a] = b;
      },
      configurable: !0
    });
  });
  var rc = new WeakMap();
  function sc(a) {
    if (w(a) || a instanceof K) return a;
    var b = rc.get(a);
    b || ((b = new K(a)), rc.set(a, b));
    return b;
  }
  var tc = z({
    dispatchEvent: function(a) {
      xa();
      return this.__shady_native_dispatchEvent(a);
    },
    addEventListener: ob,
    removeEventListener: qb
  });
  var uc = z({
    get assignedSlot() {
      var a = this.__shady_parentNode;
      (a = a && a.__shady_shadowRoot) && ic(a);
      return ((a = r(this)) && a.assignedSlot) || null;
    }
  });
  var vc = window.document;
  function wc(a, b) {
    if ('slot' === b) (a = a.__shady_parentNode), la(a) && H(r(a).root);
    else if ('slot' === a.localName && 'name' === b && (b = G(a))) {
      if (b.a) {
        jc(b);
        var c = a.ca,
          d = nc(a);
        if (d !== c) {
          c = b.b[c];
          var e = c.indexOf(a);
          0 <= e && c.splice(e, 1);
          c = b.b[d] || (b.b[d] = []);
          c.push(a);
          1 < c.length && (b.b[d] = oc(c));
        }
      }
      H(b);
    }
  }
  var xc = z({
    get previousElementSibling() {
      var a = r(this);
      if (a && void 0 !== a.previousSibling) {
        for (
          a = this.__shady_previousSibling;
          a && a.nodeType !== Node.ELEMENT_NODE;

        )
          a = a.__shady_previousSibling;
        return a;
      }
      return this.__shady_native_previousElementSibling;
    },
    get nextElementSibling() {
      var a = r(this);
      if (a && void 0 !== a.nextSibling) {
        for (
          a = this.__shady_nextSibling;
          a && a.nodeType !== Node.ELEMENT_NODE;

        )
          a = a.__shady_nextSibling;
        return a;
      }
      return this.__shady_native_nextElementSibling;
    },
    get slot() {
      return this.getAttribute('slot');
    },
    set slot(a) {
      this.__shady_setAttribute('slot', a);
    },
    get shadowRoot() {
      var a = r(this);
      return (a && a.Z) || null;
    },
    get className() {
      return this.getAttribute('class') || '';
    },
    set className(a) {
      this.__shady_setAttribute('class', a);
    },
    setAttribute: function(a, b) {
      if (this.ownerDocument !== vc) this.__shady_native_setAttribute(a, b);
      else {
        var c;
        (c = F()) && 'class' === a
          ? (c.setElementClass(this, b), (c = !0))
          : (c = !1);
        c || (this.__shady_native_setAttribute(a, b), wc(this, a));
      }
    },
    removeAttribute: function(a) {
      this.__shady_native_removeAttribute(a);
      wc(this, a);
    },
    attachShadow: function(a) {
      if (!this) throw Error('Must provide a host.');
      if (!a) throw Error('Not enough arguments.');
      return new gc(dc, this, a);
    }
  });
  var yc = z({
    blur: function() {
      var a = r(this);
      (a = (a = a && a.root) && a.activeElement)
        ? a.__shady_blur()
        : this.__shady_native_blur();
    }
  });
  xb.forEach(function(a) {
    yc[a] = {
      set: function(b) {
        var c = q(this),
          d = a.substring(2);
        c.F[a] && this.removeEventListener(d, c.F[a]);
        this.__shady_addEventListener(d, b);
        c.F[a] = b;
      },
      get: function() {
        var b = r(this);
        return b && b.F[a];
      },
      configurable: !0
    };
  });
  var zc = z({
    assignedNodes: function(a) {
      if ('slot' === this.localName) {
        var b = this.__shady_getRootNode();
        b && w(b) && ic(b);
        return (b = r(this))
          ? (a && a.flatten ? b.s : b.assignedNodes) || []
          : [];
      }
    }
  });
  var Ac = window.document,
    Bc = z({
      importNode: function(a, b) {
        if (a.ownerDocument !== Ac || 'template' === a.localName)
          return this.__shady_native_importNode(a, b);
        var c = this.__shady_native_importNode(a, !1);
        if (b) {
          a = a.__shady_childNodes;
          b = 0;
          for (var d; b < a.length; b++)
            (d = this.__shady_importNode(a[b], !0)), c.__shady_appendChild(d);
        }
        return c;
      }
    });
  var Cc = z({
    addEventListener: ob.bind(window),
    removeEventListener: qb.bind(window)
  });
  var Dc = {};
  Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'parentElement') &&
    (Dc.parentElement = Tb.parentElement);
  Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'contains') &&
    (Dc.contains = Tb.contains);
  Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'children') &&
    (Dc.children = I.children);
  Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'innerHTML') &&
    (Dc.innerHTML = ac.innerHTML);
  var Ec = {
      EventTarget: [tc],
      Node: [Tb, window.EventTarget ? null : tc],
      Text: [uc],
      Element: [
        xc,
        I,
        uc,
        !t.i || 'innerHTML' in Element.prototype ? ac : null,
        window.HTMLSlotElement ? null : zc
      ],
      HTMLElement: [yc, Dc],
      HTMLSlotElement: [zc],
      DocumentFragment: [Xb, Yb],
      Document: [Bc, Xb, Yb, Zb],
      Window: [Cc]
    },
    Fc = t.i ? null : ['innerHTML', 'textContent'];
  function Gc(a) {
    var b = a ? null : Fc,
      c = {},
      d;
    for (d in Ec)
      (c.L = window[d] && window[d].prototype),
        Ec[d].forEach(
          (function(c) {
            return function(d) {
              return c.L && d && y(c.L, d, a, b);
            };
          })(c)
        ),
        (c = { L: c.L });
  }
  if (t.R) {
    var ShadyDOM = {
      inUse: t.R,
      patch: function(a) {
        $a(a);
        Za(a);
        return a;
      },
      isShadyRoot: w,
      enqueue: wa,
      flush: xa,
      settings: t,
      filterMutations: Ca,
      observeChildren: Aa,
      unobserveChildren: Ba,
      deferConnectionCallbacks: t.deferConnectionCallbacks,
      preferPerformance: t.preferPerformance,
      handlesDynamicScoping: !0,
      wrap: t.A
        ? sc
        : function(a) {
            return a;
          },
      Wrapper: K,
      composedPath: gb,
      noPatch: t.A,
      nativeMethods: La,
      nativeTree: Ma
    };
    window.ShadyDOM = ShadyDOM;
    Ta();
    Gc('__shady_');
    Object.defineProperty(document, '_activeElement', Zb.activeElement);
    y(Window.prototype, Cc, '__shady_');
    t.A || (Gc(), wb());
    rb();
    window.Event = tb;
    window.CustomEvent = ub;
    window.MouseEvent = vb;
    window.ShadowRoot = gc;
  } /*

Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
  function Hc() {
    this.end = this.start = 0;
    this.rules = this.parent = this.previous = null;
    this.cssText = this.parsedCssText = '';
    this.atRule = !1;
    this.type = 0;
    this.parsedSelector = this.selector = this.keyframesName = '';
  }
  function Ic(a) {
    a = a.replace(Jc, '').replace(Kc, '');
    var b = Lc,
      c = a,
      d = new Hc();
    d.start = 0;
    d.end = c.length;
    for (var e = d, f = 0, g = c.length; f < g; f++)
      if ('{' === c[f]) {
        e.rules || (e.rules = []);
        var h = e,
          k = h.rules[h.rules.length - 1] || null;
        e = new Hc();
        e.start = f + 1;
        e.parent = h;
        e.previous = k;
        h.rules.push(e);
      } else '}' === c[f] && ((e.end = f + 1), (e = e.parent || d));
    return b(d, a);
  }
  function Lc(a, b) {
    var c = b.substring(a.start, a.end - 1);
    a.parsedCssText = a.cssText = c.trim();
    a.parent &&
      ((c = b.substring(
        a.previous ? a.previous.end : a.parent.start,
        a.start - 1
      )),
      (c = Mc(c)),
      (c = c.replace(Nc, ' ')),
      (c = c.substring(c.lastIndexOf(';') + 1)),
      (c = a.parsedSelector = a.selector = c.trim()),
      (a.atRule = 0 === c.indexOf('@')),
      a.atRule
        ? 0 === c.indexOf('@media')
          ? (a.type = Oc)
          : c.match(Pc) &&
            ((a.type = Qc), (a.keyframesName = a.selector.split(Nc).pop()))
        : (a.type = 0 === c.indexOf('--') ? Rc : Sc));
    if ((c = a.rules))
      for (var d = 0, e = c.length, f = void 0; d < e && (f = c[d]); d++)
        Lc(f, b);
    return a;
  }
  function Mc(a) {
    return a.replace(/\\([0-9a-f]{1,6})\s/gi, function(a, c) {
      a = c;
      for (c = 6 - a.length; c--; ) a = '0' + a;
      return '\\' + a;
    });
  }
  function Tc(a, b, c) {
    c = void 0 === c ? '' : c;
    var d = '';
    if (a.cssText || a.rules) {
      var e = a.rules,
        f;
      if ((f = e))
        (f = e[0]), (f = !(f && f.selector && 0 === f.selector.indexOf('--')));
      if (f) {
        f = 0;
        for (var g = e.length, h = void 0; f < g && (h = e[f]); f++)
          d = Tc(h, b, d);
      } else
        b
          ? (b = a.cssText)
          : ((b = a.cssText),
            (b = b.replace(Uc, '').replace(Vc, '')),
            (b = b.replace(Wc, '').replace(Xc, ''))),
          (d = b.trim()) && (d = '  ' + d + '\n');
    }
    d &&
      (a.selector && (c += a.selector + ' {\n'),
      (c += d),
      a.selector && (c += '}\n\n'));
    return c;
  }
  var Sc = 1,
    Qc = 7,
    Oc = 4,
    Rc = 1e3,
    Jc = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,
    Kc = /@import[^;]*;/gim,
    Uc = /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,
    Vc = /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,
    Wc = /@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,
    Xc = /[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,
    Pc = /^@[^\s]*keyframes/,
    Nc = /\s+/g;
  var L = !(window.ShadyDOM && window.ShadyDOM.inUse),
    Yc;
  function Zc(a) {
    Yc =
      a && a.shimcssproperties
        ? !1
        : L ||
          !(
            navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/) ||
            !window.CSS ||
            !CSS.supports ||
            !CSS.supports('box-shadow', '0 0 0 var(--foo)')
          );
  }
  var $c;
  window.ShadyCSS &&
    void 0 !== window.ShadyCSS.cssBuild &&
    ($c = window.ShadyCSS.cssBuild);
  window.ShadyCSS && void 0 !== window.ShadyCSS.nativeCss
    ? (Yc = window.ShadyCSS.nativeCss)
    : window.ShadyCSS
    ? (Zc(window.ShadyCSS), (window.ShadyCSS = void 0))
    : Zc(window.WebComponents && window.WebComponents.flags);
  var M = Yc,
    ad = $c;
  var bd = /(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,
    cd = /(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,
    dd = /(--[\w-]+)\s*([:,;)]|$)/gi,
    ed = /(animation\s*:)|(animation-name\s*:)/,
    fd = /@media\s(.*)/,
    gd = /\{[^}]*\}/g;
  var hd = new Set();
  function N(a, b) {
    if (!a) return '';
    'string' === typeof a && (a = Ic(a));
    b && O(a, b);
    return Tc(a, M);
  }
  function id(a) {
    !a.__cssRules && a.textContent && (a.__cssRules = Ic(a.textContent));
    return a.__cssRules || null;
  }
  function jd(a) {
    return !!a.parent && a.parent.type === Qc;
  }
  function O(a, b, c, d) {
    if (a) {
      var e = !1,
        f = a.type;
      if (d && f === Oc) {
        var g = a.selector.match(fd);
        g && (window.matchMedia(g[1]).matches || (e = !0));
      }
      f === Sc ? b(a) : c && f === Qc ? c(a) : f === Rc && (e = !0);
      if ((a = a.rules) && !e)
        for (e = 0, f = a.length, g = void 0; e < f && (g = a[e]); e++)
          O(g, b, c, d);
    }
  }
  function kd(a, b, c, d) {
    var e = document.createElement('style');
    b && e.setAttribute('scope', b);
    e.textContent = a;
    ld(e, c, d);
    return e;
  }
  var P = null;
  function md(a) {
    a = document.createComment(' Shady DOM styles for ' + a + ' ');
    var b = document.head;
    b.insertBefore(a, (P ? P.nextSibling : null) || b.firstChild);
    return (P = a);
  }
  function ld(a, b, c) {
    b = b || document.head;
    b.insertBefore(a, (c && c.nextSibling) || b.firstChild);
    P
      ? a.compareDocumentPosition(P) === Node.DOCUMENT_POSITION_PRECEDING &&
        (P = a)
      : (P = a);
  }
  function nd(a, b) {
    for (var c = 0, d = a.length; b < d; b++)
      if ('(' === a[b]) c++;
      else if (')' === a[b] && 0 === --c) return b;
    return -1;
  }
  function od(a, b) {
    var c = a.indexOf('var(');
    if (-1 === c) return b(a, '', '', '');
    var d = nd(a, c + 3),
      e = a.substring(c + 4, d);
    c = a.substring(0, c);
    a = od(a.substring(d + 1), b);
    d = e.indexOf(',');
    return -1 === d
      ? b(c, e.trim(), '', a)
      : b(c, e.substring(0, d).trim(), e.substring(d + 1).trim(), a);
  }
  function pd(a, b) {
    L
      ? a.setAttribute('class', b)
      : window.ShadyDOM.nativeMethods.setAttribute.call(a, 'class', b);
  }
  var qd =
    (window.ShadyDOM && window.ShadyDOM.wrap) ||
    function(a) {
      return a;
    };
  function Q(a) {
    var b = a.localName,
      c = '';
    b
      ? -1 < b.indexOf('-') ||
        ((c = b), (b = (a.getAttribute && a.getAttribute('is')) || ''))
      : ((b = a.is), (c = a.extends));
    return { is: b, D: c };
  }
  function rd(a) {
    for (var b = [], c = '', d = 0; 0 <= d && d < a.length; d++)
      if ('(' === a[d]) {
        var e = nd(a, d);
        c += a.slice(d, e + 1);
        d = e;
      } else ',' === a[d] ? (b.push(c), (c = '')) : (c += a[d]);
    c && b.push(c);
    return b;
  }
  function R(a) {
    if (void 0 !== ad) return ad;
    if (void 0 === a.__cssBuild) {
      var b = a.getAttribute('css-build');
      if (b) a.__cssBuild = b;
      else {
        a: {
          b = 'template' === a.localName ? a.content.firstChild : a.firstChild;
          if (
            b instanceof Comment &&
            ((b = b.textContent.trim().split(':')), 'css-build' === b[0])
          ) {
            b = b[1];
            break a;
          }
          b = '';
        }
        if ('' !== b) {
          var c =
            'template' === a.localName ? a.content.firstChild : a.firstChild;
          c.parentNode.removeChild(c);
        }
        a.__cssBuild = b;
      }
    }
    return a.__cssBuild || '';
  }
  function sd(a) {
    a = void 0 === a ? '' : a;
    return '' !== a && M ? (L ? 'shadow' === a : 'shady' === a) : !1;
  }
  function td() {}
  function ud(a, b) {
    vd(S, a, function(a) {
      T(a, b || '');
    });
  }
  function vd(a, b, c) {
    b.nodeType === Node.ELEMENT_NODE && c(b);
    var d;
    'template' === b.localName
      ? (d = (b.content || b._content || b).childNodes)
      : (d = b.children || b.childNodes);
    if (d) for (b = 0; b < d.length; b++) vd(a, d[b], c);
  }
  function T(a, b, c) {
    if (b)
      if (a.classList)
        c
          ? (a.classList.remove('style-scope'), a.classList.remove(b))
          : (a.classList.add('style-scope'), a.classList.add(b));
      else if (a.getAttribute) {
        var d = a.getAttribute('class');
        c
          ? d && ((b = d.replace('style-scope', '').replace(b, '')), pd(a, b))
          : pd(a, (d ? d + ' ' : '') + 'style-scope ' + b);
      }
  }
  function wd(a, b, c) {
    vd(S, a, function(a) {
      T(a, b, !0);
      T(a, c);
    });
  }
  function xd(a, b) {
    vd(S, a, function(a) {
      T(a, b || '', !0);
    });
  }
  function yd(a, b, c, d, e) {
    var f = S;
    e = void 0 === e ? '' : e;
    '' === e &&
      (L || 'shady' === (void 0 === d ? '' : d)
        ? (e = N(b, c))
        : ((a = Q(a)), (e = zd(f, b, a.is, a.D, c) + '\n\n')));
    return e.trim();
  }
  function zd(a, b, c, d, e) {
    var f = Ad(c, d);
    c = c ? '.' + c : '';
    return N(b, function(b) {
      b.c || ((b.selector = b.h = Bd(a, b, a.b, c, f)), (b.c = !0));
      e && e(b, c, f);
    });
  }
  function Ad(a, b) {
    return b ? '[is=' + a + ']' : a;
  }
  function Bd(a, b, c, d, e) {
    var f = rd(b.selector);
    if (!jd(b)) {
      b = 0;
      for (var g = f.length, h = void 0; b < g && (h = f[b]); b++)
        f[b] = c.call(a, h, d, e);
    }
    return f
      .filter(function(a) {
        return !!a;
      })
      .join(',');
  }
  function Cd(a) {
    return a.replace(Dd, function(a, c, d) {
      -1 < d.indexOf('+')
        ? (d = d.replace(/\+/g, '___'))
        : -1 < d.indexOf('___') && (d = d.replace(/___/g, '+'));
      return ':' + c + '(' + d + ')';
    });
  }
  function Ed(a) {
    for (var b = [], c; (c = a.match(Fd)); ) {
      var d = c.index,
        e = nd(a, d);
      if (-1 === e) throw Error(c.input + " selector missing ')'");
      c = a.slice(d, e + 1);
      a = a.replace(c, '\ue000');
      b.push(c);
    }
    return { T: a, matches: b };
  }
  function Gd(a, b) {
    var c = a.split('\ue000');
    return b.reduce(function(a, b, f) {
      return a + b + c[f + 1];
    }, c[0]);
  }
  td.prototype.b = function(a, b, c) {
    var d = !1;
    a = a.trim();
    var e = Dd.test(a);
    e &&
      ((a = a.replace(Dd, function(a, b, c) {
        return ':' + b + '(' + c.replace(/\s/g, '') + ')';
      })),
      (a = Cd(a)));
    var f = Fd.test(a);
    if (f) {
      var g = Ed(a);
      a = g.T;
      g = g.matches;
    }
    a = a.replace(Hd, ':host $1');
    a = a.replace(Id, function(a, e, f) {
      d || ((a = Jd(f, e, b, c)), (d = d || a.stop), (e = a.ia), (f = a.value));
      return e + f;
    });
    f && (a = Gd(a, g));
    e && (a = Cd(a));
    return a;
  };
  function Jd(a, b, c, d) {
    var e = a.indexOf('::slotted');
    0 <= a.indexOf(':host')
      ? (a = Kd(a, d))
      : 0 !== e && (a = c ? Ld(a, c) : a);
    c = !1;
    0 <= e && ((b = ''), (c = !0));
    if (c) {
      var f = !0;
      c &&
        (a = a.replace(Md, function(a, b) {
          return ' > ' + b;
        }));
    }
    a = a.replace(Nd, function(a, b, c) {
      return '[dir="' + c + '"] ' + b + ', ' + b + '[dir="' + c + '"]';
    });
    return { value: a, ia: b, stop: f };
  }
  function Ld(a, b) {
    a = a.split(/(\[.+?\])/);
    for (var c = [], d = 0; d < a.length; d++)
      if (1 === d % 2) c.push(a[d]);
      else {
        var e = a[d];
        if ('' !== e || d !== a.length - 1)
          (e = e.split(':')), (e[0] += b), c.push(e.join(':'));
      }
    return c.join('');
  }
  function Kd(a, b) {
    var c = a.match(Od);
    return (c = (c && c[2].trim()) || '')
      ? c[0].match(Pd)
        ? a.replace(Od, function(a, c, f) {
            return b + f;
          })
        : c.split(Pd)[0] === b
        ? c
        : 'should_not_match'
      : a.replace(':host', b);
  }
  function Qd(a) {
    ':root' === a.selector && (a.selector = 'html');
  }
  td.prototype.c = function(a) {
    return a.match(':host')
      ? ''
      : a.match('::slotted')
      ? this.b(a, ':not(.style-scope)')
      : Ld(a.trim(), ':not(.style-scope)');
  };
  n.Object.defineProperties(td.prototype, {
    a: {
      configurable: !0,
      enumerable: !0,
      get: function() {
        return 'style-scope';
      }
    }
  });
  var Dd = /:(nth[-\w]+)\(([^)]+)\)/,
    Id = /(^|[\s>+~]+)((?:\[.+?\]|[^\s>+~=[])+)/g,
    Pd = /[[.:#*]/,
    Hd = /^(::slotted)/,
    Od = /(:host)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,
    Md = /(?:::slotted)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,
    Nd = /(.*):dir\((?:(ltr|rtl))\)/,
    Fd = /:(?:matches|any|-(?:webkit|moz)-any)/,
    S = new td();
  function Rd(a, b, c, d, e) {
    this.o = a || null;
    this.b = b || null;
    this.S = c || [];
    this.w = null;
    this.cssBuild = e || '';
    this.D = d || '';
    this.a = this.j = this.m = null;
  }
  function U(a) {
    return a ? a.__styleInfo : null;
  }
  function Sd(a, b) {
    return (a.__styleInfo = b);
  }
  Rd.prototype.c = function() {
    return this.o;
  };
  Rd.prototype._getStyleRules = Rd.prototype.c;
  function Td(a) {
    var b =
      this.matches ||
      this.matchesSelector ||
      this.mozMatchesSelector ||
      this.msMatchesSelector ||
      this.oMatchesSelector ||
      this.webkitMatchesSelector;
    return b && b.call(this, a);
  }
  var Ud = navigator.userAgent.match('Trident');
  function Vd() {}
  function Wd(a) {
    var b = {},
      c = [],
      d = 0;
    O(
      a,
      function(a) {
        Xd(a);
        a.index = d++;
        a = a.g.cssText;
        for (var c; (c = dd.exec(a)); ) {
          var e = c[1];
          ':' !== c[2] && (b[e] = !0);
        }
      },
      function(a) {
        c.push(a);
      }
    );
    a.b = c;
    a = [];
    for (var e in b) a.push(e);
    return a;
  }
  function Xd(a) {
    if (!a.g) {
      var b = {},
        c = {};
      Yd(a, c) && ((b.l = c), (a.rules = null));
      b.cssText = a.parsedCssText.replace(gd, '').replace(bd, '');
      a.g = b;
    }
  }
  function Yd(a, b) {
    var c = a.g;
    if (c) {
      if (c.l) return Object.assign(b, c.l), !0;
    } else {
      c = a.parsedCssText;
      for (var d; (a = bd.exec(c)); ) {
        d = (a[2] || a[3]).trim();
        if ('inherit' !== d || 'unset' !== d) b[a[1].trim()] = d;
        d = !0;
      }
      return d;
    }
  }
  function Zd(a, b, c) {
    b &&
      (b =
        0 <= b.indexOf(';')
          ? $d(a, b, c)
          : od(b, function(b, e, f, g) {
              if (!e) return b + g;
              (e = Zd(a, c[e], c)) && 'initial' !== e
                ? 'apply-shim-inherit' === e && (e = 'inherit')
                : (e = Zd(a, c[f] || f, c) || f);
              return b + (e || '') + g;
            }));
    return (b && b.trim()) || '';
  }
  function $d(a, b, c) {
    b = b.split(';');
    for (var d = 0, e, f; d < b.length; d++)
      if ((e = b[d])) {
        cd.lastIndex = 0;
        if ((f = cd.exec(e))) e = Zd(a, c[f[1]], c);
        else if (((f = e.indexOf(':')), -1 !== f)) {
          var g = e.substring(f);
          g = g.trim();
          g = Zd(a, g, c) || g;
          e = e.substring(0, f) + g;
        }
        b[d] =
          e && e.lastIndexOf(';') === e.length - 1 ? e.slice(0, -1) : e || '';
      }
    return b.join(';');
  }
  function ae(a, b) {
    var c = {},
      d = [];
    O(
      a,
      function(a) {
        a.g || Xd(a);
        var e = a.h || a.parsedSelector;
        b &&
          a.g.l &&
          e &&
          Td.call(b, e) &&
          (Yd(a, c),
          (a = a.index),
          (e = parseInt(a / 32, 10)),
          (d[e] = (d[e] || 0) | (1 << a % 32)));
      },
      null,
      !0
    );
    return { l: c, key: d };
  }
  function be(a, b, c, d) {
    b.g || Xd(b);
    if (b.g.l) {
      var e = Q(a);
      a = e.is;
      e = e.D;
      e = a ? Ad(a, e) : 'html';
      var f = b.parsedSelector,
        g = ':host > *' === f || 'html' === f,
        h = 0 === f.indexOf(':host') && !g;
      'shady' === c &&
        ((g = f === e + ' > *.' + e || -1 !== f.indexOf('html')),
        (h = !g && 0 === f.indexOf(e)));
      if (g || h)
        (c = e),
          h &&
            (b.h || (b.h = Bd(S, b, S.b, a ? '.' + a : '', e)), (c = b.h || e)),
          d({ T: c, na: h, wa: g });
    }
  }
  function ce(a, b, c) {
    var d = {},
      e = {};
    O(
      b,
      function(b) {
        be(a, b, c, function(c) {
          Td.call(a._element || a, c.T) && (c.na ? Yd(b, d) : Yd(b, e));
        });
      },
      null,
      !0
    );
    return { pa: e, ma: d };
  }
  function de(a, b, c, d) {
    var e = Q(b),
      f = Ad(e.is, e.D),
      g = new RegExp(
        '(?:^|[^.#[:])' +
          (b.extends ? '\\' + f.slice(0, -1) + '\\]' : f) +
          '($|[.:[\\s>+~])'
      ),
      h = U(b);
    e = h.o;
    h = h.cssBuild;
    var k = ee(e, d);
    return yd(
      b,
      e,
      function(b) {
        var e = '';
        b.g || Xd(b);
        b.g.cssText && (e = $d(a, b.g.cssText, c));
        b.cssText = e;
        if (!L && !jd(b) && b.cssText) {
          var h = (e = b.cssText);
          null == b.X && (b.X = ed.test(e));
          if (b.X)
            if (null == b.K) {
              b.K = [];
              for (var l in k)
                (h = k[l]), (h = h(e)), e !== h && ((e = h), b.K.push(l));
            } else {
              for (l = 0; l < b.K.length; ++l) (h = k[b.K[l]]), (e = h(e));
              h = e;
            }
          b.cssText = h;
          b.h = b.h || b.selector;
          e = '.' + d;
          l = rd(b.h);
          h = 0;
          for (var Y = l.length, Da = void 0; h < Y && (Da = l[h]); h++)
            l[h] = Da.match(g) ? Da.replace(f, e) : e + ' ' + Da;
          b.selector = l.join(',');
        }
      },
      h
    );
  }
  function ee(a, b) {
    a = a.b;
    var c = {};
    if (!L && a)
      for (var d = 0, e = a[d]; d < a.length; e = a[++d]) {
        var f = e,
          g = b;
        f.f = new RegExp('\\b' + f.keyframesName + '(?!\\B|-)', 'g');
        f.a = f.keyframesName + '-' + g;
        f.h = f.h || f.selector;
        f.selector = f.h.replace(f.keyframesName, f.a);
        c[e.keyframesName] = fe(e);
      }
    return c;
  }
  function fe(a) {
    return function(b) {
      return b.replace(a.f, a.a);
    };
  }
  function ge(a, b) {
    var c = he,
      d = id(a);
    a.textContent = N(d, function(a) {
      var d = (a.cssText = a.parsedCssText);
      a.g &&
        a.g.cssText &&
        ((d = d.replace(Uc, '').replace(Vc, '')), (a.cssText = $d(c, d, b)));
    });
  }
  n.Object.defineProperties(Vd.prototype, {
    a: {
      configurable: !0,
      enumerable: !0,
      get: function() {
        return 'x-scope';
      }
    }
  });
  var he = new Vd();
  var V = {},
    ie = window.customElements;
  if (ie && !L) {
    var je = ie.define;
    ie.define = function(a, b, c) {
      V[a] || (V[a] = md(a));
      je.call(ie, a, b, c);
    };
  }
  function ke() {
    this.cache = {};
  }
  ke.prototype.store = function(a, b, c, d) {
    var e = this.cache[a] || [];
    e.push({ l: b, styleElement: c, j: d });
    100 < e.length && e.shift();
    this.cache[a] = e;
  };
  function le() {}
  var me = new RegExp(S.a + '\\s*([^\\s]*)');
  function ne(a) {
    return (a = (a.classList && a.classList.value
      ? a.classList.value
      : a.getAttribute('class') || ''
    ).match(me))
      ? a[1]
      : '';
  }
  function oe(a) {
    var b = qd(a).getRootNode();
    return b === a || b === a.ownerDocument ? '' : (a = b.host) ? Q(a).is : '';
  }
  function pe(a) {
    for (var b = 0; b < a.length; b++) {
      var c = a[b];
      if (c.target !== document.documentElement && c.target !== document.head)
        for (var d = 0; d < c.addedNodes.length; d++) {
          var e = c.addedNodes[d];
          if (e.nodeType === Node.ELEMENT_NODE) {
            var f = e.getRootNode(),
              g = ne(e);
            if (
              g &&
              f === e.ownerDocument &&
              (('style' !== e.localName && 'template' !== e.localName) ||
                '' === R(e))
            )
              xd(e, g);
            else if (f instanceof ShadowRoot)
              for (
                f = oe(e),
                  f !== g && wd(e, g, f),
                  e = window.ShadyDOM.nativeMethods.querySelectorAll.call(
                    e,
                    ':not(.' + S.a + ')'
                  ),
                  g = 0;
                g < e.length;
                g++
              ) {
                f = e[g];
                var h = oe(f);
                h && T(f, h);
              }
          }
        }
    }
  }
  if (!(L || (window.ShadyDOM && window.ShadyDOM.handlesDynamicScoping))) {
    var qe = new MutationObserver(pe),
      re = function(a) {
        qe.observe(a, { childList: !0, subtree: !0 });
      };
    if (
      window.customElements &&
      !window.customElements.polyfillWrapFlushCallback
    )
      re(document);
    else {
      var se = function() {
        re(document.body);
      };
      window.HTMLImports
        ? window.HTMLImports.whenReady(se)
        : requestAnimationFrame(function() {
            if ('loading' === document.readyState) {
              var a = function() {
                se();
                document.removeEventListener('readystatechange', a);
              };
              document.addEventListener('readystatechange', a);
            } else se();
          });
    }
    le = function() {
      pe(qe.takeRecords());
    };
  }
  var te = le;
  var ue = {};
  var ve = Promise.resolve();
  function we(a) {
    if ((a = ue[a]))
      (a._applyShimCurrentVersion = a._applyShimCurrentVersion || 0),
        (a._applyShimValidatingVersion = a._applyShimValidatingVersion || 0),
        (a._applyShimNextVersion = (a._applyShimNextVersion || 0) + 1);
  }
  function xe(a) {
    return a._applyShimCurrentVersion === a._applyShimNextVersion;
  }
  function ye(a) {
    a._applyShimValidatingVersion = a._applyShimNextVersion;
    a._validating ||
      ((a._validating = !0),
      ve.then(function() {
        a._applyShimCurrentVersion = a._applyShimNextVersion;
        a._validating = !1;
      }));
  }
  var ze = {},
    Ae = new ke();
  function W() {
    this.W = {};
    this.c = document.documentElement;
    var a = new Hc();
    a.rules = [];
    this.f = Sd(this.c, new Rd(a));
    this.P = !1;
    this.b = this.a = null;
  }
  m = W.prototype;
  m.flush = function() {
    te();
  };
  m.ka = function(a) {
    return id(a);
  };
  m.ta = function(a) {
    return N(a);
  };
  m.prepareTemplate = function(a, b, c) {
    this.prepareTemplateDom(a, b);
    this.prepareTemplateStyles(a, b, c);
  };
  m.prepareTemplateStyles = function(a, b, c) {
    if (!a._prepared) {
      L || V[b] || (V[b] = md(b));
      a._prepared = !0;
      a.name = b;
      a.extends = c;
      ue[b] = a;
      var d = R(a),
        e = sd(d);
      c = { is: b, extends: c };
      for (
        var f = [], g = a.content.querySelectorAll('style'), h = 0;
        h < g.length;
        h++
      ) {
        var k = g[h];
        if (k.hasAttribute('shady-unscoped')) {
          if (!L) {
            var l = k.textContent;
            hd.has(l) ||
              (hd.add(l), (l = k.cloneNode(!0)), document.head.appendChild(l));
            k.parentNode.removeChild(k);
          }
        } else f.push(k.textContent), k.parentNode.removeChild(k);
      }
      f = f.join('').trim() + (ze[b] || '');
      Be(this);
      if (!e) {
        if ((g = !d))
          (g = cd.test(f) || bd.test(f)),
            (cd.lastIndex = 0),
            (bd.lastIndex = 0);
        h = Ic(f);
        g && M && this.a && this.a.transformRules(h, b);
        a._styleAst = h;
      }
      g = [];
      M || (g = Wd(a._styleAst));
      if (!g.length || M)
        (h = L ? a.content : null),
          (b = V[b] || null),
          (d = yd(c, a._styleAst, null, d, e ? f : '')),
          (d = d.length ? kd(d, c.is, h, b) : null),
          (a._style = d);
      a.a = g;
    }
  };
  m.oa = function(a, b) {
    ze[b] = a.join(' ');
  };
  m.prepareTemplateDom = function(a, b) {
    var c = R(a);
    L ||
      'shady' === c ||
      a._domPrepared ||
      ((a._domPrepared = !0), ud(a.content, b));
  };
  function Ce(a) {
    var b = Q(a),
      c = b.is;
    b = b.D;
    var d = V[c] || null,
      e = ue[c];
    if (e) {
      c = e._styleAst;
      var f = e.a;
      e = R(e);
      b = new Rd(c, d, f, b, e);
      Sd(a, b);
      return b;
    }
  }
  function De(a) {
    !a.b &&
      window.ShadyCSS &&
      window.ShadyCSS.CustomStyleInterface &&
      ((a.b = window.ShadyCSS.CustomStyleInterface),
      (a.b.transformCallback = function(b) {
        a.$(b);
      }),
      (a.b.validateCallback = function() {
        requestAnimationFrame(function() {
          (a.b.enqueued || a.P) && a.flushCustomStyles();
        });
      }));
  }
  function Be(a) {
    !a.a &&
      window.ShadyCSS &&
      window.ShadyCSS.ApplyShim &&
      ((a.a = window.ShadyCSS.ApplyShim), (a.a.invalidCallback = we));
    De(a);
  }
  m.flushCustomStyles = function() {
    Be(this);
    if (this.b) {
      var a = this.b.processStyles();
      if (this.b.enqueued && !sd(this.f.cssBuild)) {
        if (M) {
          if (!this.f.cssBuild)
            for (var b = 0; b < a.length; b++) {
              var c = this.b.getStyleForCustomStyle(a[b]);
              if (c && M && this.a) {
                var d = id(c);
                Be(this);
                this.a.transformRules(d);
                c.textContent = N(d);
              }
            }
        } else {
          Ee(this, this.c, this.f);
          for (b = 0; b < a.length; b++)
            (c = this.b.getStyleForCustomStyle(a[b])) && ge(c, this.f.m);
          this.P && this.styleDocument();
        }
        this.b.enqueued = !1;
      }
    }
  };
  m.styleElement = function(a, b) {
    var c = U(a) || Ce(a);
    if (c)
      if (
        (a !== this.c && (this.P = !0),
        b && ((c.w = c.w || {}), Object.assign(c.w, b)),
        M)
      ) {
        b = Q(a).is;
        if (c.w) {
          var d = c.w,
            e;
          for (e in d)
            null === e
              ? a.style.removeProperty(e)
              : a.style.setProperty(e, d[e]);
        }
        if (
          !((!(e = ue[b]) && a !== this.c) || (e && '' !== R(e))) &&
          e &&
          e._style &&
          !xe(e)
        ) {
          if (
            xe(e) ||
            e._applyShimValidatingVersion !== e._applyShimNextVersion
          )
            Be(this),
              this.a && this.a.transformRules(e._styleAst, b),
              (e._style.textContent = yd(a, c.o)),
              ye(e);
          L &&
            (b = a.shadowRoot) &&
            (b = b.querySelector('style')) &&
            (b.textContent = yd(a, c.o));
          c.o = e._styleAst;
        }
      } else if ((this.flush(), Ee(this, a, c), c.S && c.S.length)) {
        b = Q(a).is;
        a: {
          if ((e = Ae.cache[b]))
            for (d = e.length - 1; 0 <= d; d--) {
              var f = e[d];
              b: {
                var g = c.S;
                for (var h = 0; h < g.length; h++) {
                  var k = g[h];
                  if (f.l[k] !== c.m[k]) {
                    g = !1;
                    break b;
                  }
                }
                g = !0;
              }
              if (g) {
                e = f;
                break a;
              }
            }
          e = void 0;
        }
        g = e ? e.styleElement : null;
        d = c.j;
        (f = e && e.j) ||
          ((f = this.W[b] = (this.W[b] || 0) + 1), (f = b + '-' + f));
        c.j = f;
        f = c.j;
        h = he;
        h = g ? g.textContent || '' : de(h, a, c.m, f);
        k = U(a);
        var l = k.a;
        l &&
          !L &&
          l !== g &&
          (l._useCount--,
          0 >= l._useCount && l.parentNode && l.parentNode.removeChild(l));
        L
          ? k.a
            ? ((k.a.textContent = h), (g = k.a))
            : h && (g = kd(h, f, a.shadowRoot, k.b))
          : g
          ? g.parentNode ||
            (Ud && -1 < h.indexOf('@media') && (g.textContent = h),
            ld(g, null, k.b))
          : h && (g = kd(h, f, null, k.b));
        g &&
          ((g._useCount = g._useCount || 0),
          k.a != g && g._useCount++,
          (k.a = g));
        f = g;
        L ||
          ((g = c.j),
          (k = h = a.getAttribute('class') || ''),
          d &&
            (k = h.replace(
              new RegExp('\\s*x-scope\\s*' + d + '\\s*', 'g'),
              ' '
            )),
          (k += (k ? ' ' : '') + 'x-scope ' + g),
          h !== k && pd(a, k));
        e || Ae.store(b, c.m, f, c.j);
      }
  };
  function Fe(a, b) {
    return (b = qd(b).getRootNode().host)
      ? U(b) || Ce(b)
        ? b
        : Fe(a, b)
      : a.c;
  }
  function Ee(a, b, c) {
    var d = Fe(a, b),
      e = U(d),
      f = e.m;
    d === a.c || f || (Ee(a, d, e), (f = e.m));
    a = Object.create(f || null);
    d = ce(b, c.o, c.cssBuild);
    b = ae(e.o, b).l;
    Object.assign(a, d.ma, b, d.pa);
    b = c.w;
    for (var g in b) if ((e = b[g]) || 0 === e) a[g] = e;
    g = he;
    b = Object.getOwnPropertyNames(a);
    for (e = 0; e < b.length; e++) (d = b[e]), (a[d] = Zd(g, a[d], a));
    c.m = a;
  }
  m.styleDocument = function(a) {
    this.styleSubtree(this.c, a);
  };
  m.styleSubtree = function(a, b) {
    var c = qd(a),
      d = c.shadowRoot;
    (d || a === this.c) && this.styleElement(a, b);
    if ((a = d && (d.children || d.childNodes)))
      for (c = 0; c < a.length; c++) this.styleSubtree(a[c]);
    else if ((c = c.children || c.childNodes))
      for (a = 0; a < c.length; a++) this.styleSubtree(c[a]);
  };
  m.$ = function(a) {
    var b = this,
      c = R(a);
    c !== this.f.cssBuild && (this.f.cssBuild = c);
    if (!sd(c)) {
      var d = id(a);
      O(d, function(a) {
        if (L) Qd(a);
        else {
          var d = S;
          a.selector = a.parsedSelector;
          Qd(a);
          a.selector = a.h = Bd(d, a, d.c, void 0, void 0);
        }
        M && '' === c && (Be(b), b.a && b.a.transformRule(a));
      });
      M ? (a.textContent = N(d)) : this.f.o.rules.push(d);
    }
  };
  m.getComputedStyleValue = function(a, b) {
    var c;
    M || (c = (U(a) || U(Fe(this, a))).m[b]);
    return (c = c || window.getComputedStyle(a).getPropertyValue(b))
      ? c.trim()
      : '';
  };
  m.sa = function(a, b) {
    var c = qd(a).getRootNode();
    b = b ? b.split(/\s/) : [];
    c = c.host && c.host.localName;
    if (!c) {
      var d = a.getAttribute('class');
      if (d) {
        d = d.split(/\s/);
        for (var e = 0; e < d.length; e++)
          if (d[e] === S.a) {
            c = d[e + 1];
            break;
          }
      }
    }
    c && b.push(S.a, c);
    M || ((c = U(a)) && c.j && b.push(he.a, c.j));
    pd(a, b.join(' '));
  };
  m.ha = function(a) {
    return U(a);
  };
  m.ra = function(a, b) {
    T(a, b);
  };
  m.ua = function(a, b) {
    T(a, b, !0);
  };
  m.qa = function(a) {
    return oe(a);
  };
  m.ja = function(a) {
    return ne(a);
  };
  W.prototype.flush = W.prototype.flush;
  W.prototype.prepareTemplate = W.prototype.prepareTemplate;
  W.prototype.styleElement = W.prototype.styleElement;
  W.prototype.styleDocument = W.prototype.styleDocument;
  W.prototype.styleSubtree = W.prototype.styleSubtree;
  W.prototype.getComputedStyleValue = W.prototype.getComputedStyleValue;
  W.prototype.setElementClass = W.prototype.sa;
  W.prototype._styleInfoForNode = W.prototype.ha;
  W.prototype.transformCustomStyleForDocument = W.prototype.$;
  W.prototype.getStyleAst = W.prototype.ka;
  W.prototype.styleAstToString = W.prototype.ta;
  W.prototype.flushCustomStyles = W.prototype.flushCustomStyles;
  W.prototype.scopeNode = W.prototype.ra;
  W.prototype.unscopeNode = W.prototype.ua;
  W.prototype.scopeForNode = W.prototype.qa;
  W.prototype.currentScopeForNode = W.prototype.ja;
  W.prototype.prepareAdoptedCssText = W.prototype.oa;
  Object.defineProperties(W.prototype, {
    nativeShadow: {
      get: function() {
        return L;
      }
    },
    nativeCss: {
      get: function() {
        return M;
      }
    }
  });
  var Z = new W(),
    Ge,
    He;
  window.ShadyCSS &&
    ((Ge = window.ShadyCSS.ApplyShim),
    (He = window.ShadyCSS.CustomStyleInterface));
  window.ShadyCSS = {
    ScopingShim: Z,
    prepareTemplate: function(a, b, c) {
      Z.flushCustomStyles();
      Z.prepareTemplate(a, b, c);
    },
    prepareTemplateDom: function(a, b) {
      Z.prepareTemplateDom(a, b);
    },
    prepareTemplateStyles: function(a, b, c) {
      Z.flushCustomStyles();
      Z.prepareTemplateStyles(a, b, c);
    },
    styleSubtree: function(a, b) {
      Z.flushCustomStyles();
      Z.styleSubtree(a, b);
    },
    styleElement: function(a) {
      Z.flushCustomStyles();
      Z.styleElement(a);
    },
    styleDocument: function(a) {
      Z.flushCustomStyles();
      Z.styleDocument(a);
    },
    flushCustomStyles: function() {
      Z.flushCustomStyles();
    },
    getComputedStyleValue: function(a, b) {
      return Z.getComputedStyleValue(a, b);
    },
    nativeCss: M,
    nativeShadow: L,
    cssBuild: ad
  };
  Ge && (window.ShadyCSS.ApplyShim = Ge);
  He && (window.ShadyCSS.CustomStyleInterface = He);
}.call(this));

//# sourceMappingURL=webcomponents-sd.js.map