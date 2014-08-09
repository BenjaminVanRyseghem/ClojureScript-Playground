// Compiled by ClojureScript 0.0-2156
goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('dommy.template');
goog.require('dommy.template');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('dommy.utils');
goog.require('dommy.utils');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.core.has_class_QMARK_ = dommy.attrs.has_class_QMARK_;
dommy.core.add_class_BANG_ = dommy.attrs.add_class_BANG_;
dommy.core.remove_class_BANG_ = dommy.attrs.remove_class_BANG_;
dommy.core.toggle_class_BANG_ = dommy.attrs.toggle_class_BANG_;
dommy.core.set_attr_BANG_ = dommy.attrs.set_attr_BANG_;
dommy.core.set_style_BANG_ = dommy.attrs.set_style_BANG_;
dommy.core.set_px_BANG_ = dommy.attrs.set_px_BANG_;
dommy.core.px = dommy.attrs.px;
dommy.core.style_str = dommy.attrs.style_str;
dommy.core.style = dommy.attrs.style;
dommy.core.remove_attr_BANG_ = dommy.attrs.remove_attr_BANG_;
dommy.core.toggle_attr_BANG_ = dommy.attrs.toggle_attr_BANG_;
dommy.core.attr = dommy.attrs.attr;
dommy.core.hidden_QMARK_ = dommy.attrs.hidden_QMARK_;
dommy.core.toggle_BANG_ = dommy.attrs.toggle_BANG_;
dommy.core.hide_BANG_ = dommy.attrs.hide_BANG_;
dommy.core.show_BANG_ = dommy.attrs.show_BANG_;
dommy.core.bounding_client_rect = dommy.attrs.bounding_client_rect;
dommy.core.scroll_into_view = dommy.attrs.scroll_into_view;
dommy.core.dissoc_in = dommy.utils.dissoc_in;
dommy.core.__GT_Array = dommy.utils.__GT_Array;
dommy.core.set_html_BANG_ = (function set_html_BANG_(elem,html){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);elem__$1.innerHTML = html;
return elem__$1;
});
dommy.core.html = (function html(elem){return dommy.template.__GT_node_like.call(null,elem).innerHTML;
});
dommy.core.set_text_BANG_ = (function set_text_BANG_(elem,text){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var prop = (cljs.core.truth_(elem__$1.textContent)?"textContent":"innerText");(elem__$1[prop] = text);
return elem__$1;
});
dommy.core.text = (function text(elem){var or__3403__auto__ = elem.textContent;if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return elem.innerText;
}
});
dommy.core.value = (function value(elem){return dommy.template.__GT_node_like.call(null,elem).value;
});
dommy.core.set_value_BANG_ = (function set_value_BANG_(elem,value){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);elem__$1.value = value;
return elem__$1;
});
/**
* append `child` to `parent`. 'parent' and 'child' should be node-like
* (work with dommy.template/->node-like). The node-like projection
* of parent is returned after appending child.
* @param {...*} var_args
*/
dommy.core.append_BANG_ = (function() {
var append_BANG_ = null;
var append_BANG___2 = (function (parent,child){var G__5222 = dommy.template.__GT_node_like.call(null,parent);G__5222.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__5222;
});
var append_BANG___3 = (function() { 
var G__5227__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__5223_5228 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__5224_5229 = null;var count__5225_5230 = 0;var i__5226_5231 = 0;while(true){
if((i__5226_5231 < count__5225_5230))
{var c_5232 = cljs.core._nth.call(null,chunk__5224_5229,i__5226_5231);append_BANG_.call(null,parent__$1,c_5232);
{
var G__5233 = seq__5223_5228;
var G__5234 = chunk__5224_5229;
var G__5235 = count__5225_5230;
var G__5236 = (i__5226_5231 + 1);
seq__5223_5228 = G__5233;
chunk__5224_5229 = G__5234;
count__5225_5230 = G__5235;
i__5226_5231 = G__5236;
continue;
}
} else
{var temp__4092__auto___5237 = cljs.core.seq.call(null,seq__5223_5228);if(temp__4092__auto___5237)
{var seq__5223_5238__$1 = temp__4092__auto___5237;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5223_5238__$1))
{var c__4151__auto___5239 = cljs.core.chunk_first.call(null,seq__5223_5238__$1);{
var G__5240 = cljs.core.chunk_rest.call(null,seq__5223_5238__$1);
var G__5241 = c__4151__auto___5239;
var G__5242 = cljs.core.count.call(null,c__4151__auto___5239);
var G__5243 = 0;
seq__5223_5228 = G__5240;
chunk__5224_5229 = G__5241;
count__5225_5230 = G__5242;
i__5226_5231 = G__5243;
continue;
}
} else
{var c_5244 = cljs.core.first.call(null,seq__5223_5238__$1);append_BANG_.call(null,parent__$1,c_5244);
{
var G__5245 = cljs.core.next.call(null,seq__5223_5238__$1);
var G__5246 = null;
var G__5247 = 0;
var G__5248 = 0;
seq__5223_5228 = G__5245;
chunk__5224_5229 = G__5246;
count__5225_5230 = G__5247;
i__5226_5231 = G__5248;
continue;
}
}
} else
{}
}
break;
}
return parent__$1;
};
var G__5227 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__5227__delegate.call(this,parent,child,more_children);};
G__5227.cljs$lang$maxFixedArity = 2;
G__5227.cljs$lang$applyTo = (function (arglist__5249){
var parent = cljs.core.first(arglist__5249);
arglist__5249 = cljs.core.next(arglist__5249);
var child = cljs.core.first(arglist__5249);
var more_children = cljs.core.rest(arglist__5249);
return G__5227__delegate(parent,child,more_children);
});
G__5227.cljs$core$IFn$_invoke$arity$variadic = G__5227__delegate;
return G__5227;
})()
;
append_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return append_BANG___2.call(this,parent,child);
default:
return append_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
append_BANG_.cljs$lang$maxFixedArity = 2;
append_BANG_.cljs$lang$applyTo = append_BANG___3.cljs$lang$applyTo;
append_BANG_.cljs$core$IFn$_invoke$arity$2 = append_BANG___2;
append_BANG_.cljs$core$IFn$_invoke$arity$variadic = append_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return append_BANG_;
})()
;
/**
* prepend `child` to `parent`, both node-like
* return ->node-like projection of `parent`
* @param {...*} var_args
*/
dommy.core.prepend_BANG_ = (function() {
var prepend_BANG_ = null;
var prepend_BANG___2 = (function (parent,child){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);return parent__$1.insertBefore(dommy.template.__GT_node_like.call(null,child),parent__$1.firstChild);
});
var prepend_BANG___3 = (function() { 
var G__5258__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__5254_5259 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__5255_5260 = null;var count__5256_5261 = 0;var i__5257_5262 = 0;while(true){
if((i__5257_5262 < count__5256_5261))
{var c_5263 = cljs.core._nth.call(null,chunk__5255_5260,i__5257_5262);prepend_BANG_.call(null,parent__$1,c_5263);
{
var G__5264 = seq__5254_5259;
var G__5265 = chunk__5255_5260;
var G__5266 = count__5256_5261;
var G__5267 = (i__5257_5262 + 1);
seq__5254_5259 = G__5264;
chunk__5255_5260 = G__5265;
count__5256_5261 = G__5266;
i__5257_5262 = G__5267;
continue;
}
} else
{var temp__4092__auto___5268 = cljs.core.seq.call(null,seq__5254_5259);if(temp__4092__auto___5268)
{var seq__5254_5269__$1 = temp__4092__auto___5268;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5254_5269__$1))
{var c__4151__auto___5270 = cljs.core.chunk_first.call(null,seq__5254_5269__$1);{
var G__5271 = cljs.core.chunk_rest.call(null,seq__5254_5269__$1);
var G__5272 = c__4151__auto___5270;
var G__5273 = cljs.core.count.call(null,c__4151__auto___5270);
var G__5274 = 0;
seq__5254_5259 = G__5271;
chunk__5255_5260 = G__5272;
count__5256_5261 = G__5273;
i__5257_5262 = G__5274;
continue;
}
} else
{var c_5275 = cljs.core.first.call(null,seq__5254_5269__$1);prepend_BANG_.call(null,parent__$1,c_5275);
{
var G__5276 = cljs.core.next.call(null,seq__5254_5269__$1);
var G__5277 = null;
var G__5278 = 0;
var G__5279 = 0;
seq__5254_5259 = G__5276;
chunk__5255_5260 = G__5277;
count__5256_5261 = G__5278;
i__5257_5262 = G__5279;
continue;
}
}
} else
{}
}
break;
}
return parent__$1;
};
var G__5258 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__5258__delegate.call(this,parent,child,more_children);};
G__5258.cljs$lang$maxFixedArity = 2;
G__5258.cljs$lang$applyTo = (function (arglist__5280){
var parent = cljs.core.first(arglist__5280);
arglist__5280 = cljs.core.next(arglist__5280);
var child = cljs.core.first(arglist__5280);
var more_children = cljs.core.rest(arglist__5280);
return G__5258__delegate(parent,child,more_children);
});
G__5258.cljs$core$IFn$_invoke$arity$variadic = G__5258__delegate;
return G__5258;
})()
;
prepend_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return prepend_BANG___2.call(this,parent,child);
default:
return prepend_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prepend_BANG_.cljs$lang$maxFixedArity = 2;
prepend_BANG_.cljs$lang$applyTo = prepend_BANG___3.cljs$lang$applyTo;
prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = prepend_BANG___2;
prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = prepend_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return prepend_BANG_;
})()
;
/**
* insert `node` before `other`, both node-like,
* `other` must have a parent. return `node`
*/
dommy.core.insert_before_BANG_ = (function insert_before_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);if(cljs.core.truth_(other__$1.parentNode))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,".-parentNode",".-parentNode",499016324,null),new cljs.core.Symbol(null,"other","other",-1534461751,null))))].join('')));
}
other__$1.parentNode.insertBefore(actual_node,other__$1);
return actual_node;
});
/**
* insert `node` after `other`, both node-like,
* `other` must have a parent. return `node`
*/
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___5281 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___5281))
{var next_5282 = temp__4090__auto___5281;parent.insertBefore(actual_node,next_5282);
} else
{parent.appendChild(actual_node);
}
return actual_node;
});
/**
* replace `elem` with `new`, both node-like, return node-like projection of new.
* node-like projection of elem must have parent.
*/
dommy.core.replace_BANG_ = (function replace_BANG_(elem,new$){var new$__$1 = dommy.template.__GT_node_like.call(null,new$);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(cljs.core.truth_(elem__$1.parentNode))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,".-parentNode",".-parentNode",499016324,null),new cljs.core.Symbol(null,"elem","elem",-1637415608,null))))].join('')));
}
elem__$1.parentNode.replaceChild(new$__$1,elem__$1);
return new$__$1;
});
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__5284 = dommy.template.__GT_node_like.call(null,parent);G__5284.innerHTML = "";
dommy.core.append_BANG_.call(null,G__5284,node_like);
return G__5284;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__5286 = elem__$1.parentNode;G__5286.removeChild(elem__$1);
return G__5286;
});
/**
* clears all children from `elem`
*/
dommy.core.clear_BANG_ = (function clear_BANG_(elem){return dommy.template.__GT_node_like.call(null,elem).innerHTML = "";
});
dommy.core.selector = (function selector(data){if(cljs.core.coll_QMARK_.call(null,data))
{return clojure.string.join.call(null," ",cljs.core.map.call(null,selector,data));
} else
{if((typeof data === 'string') || ((data instanceof cljs.core.Keyword)))
{return cljs.core.name.call(null,data);
} else
{return null;
}
}
});
dommy.core.selector_map = (function selector_map(template,key_selectors_map){var container = dommy.template.__GT_node_like.call(null,template);if(!(cljs.core.contains_QMARK_.call(null,key_selectors_map,new cljs.core.Keyword(null,"container","container",602947571))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-2051487815,null),new cljs.core.Symbol(null,"key-selectors-map","key-selectors-map",19054414,null),new cljs.core.Keyword(null,"container","container",602947571)))))].join('')));
}
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container","container",602947571),container], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__5292){var vec__5293 = p__5292;var k = cljs.core.nth.call(null,vec__5293,0,null);var v = cljs.core.nth.call(null,vec__5293,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",1017226334).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){if(typeof dommy.core.t5294 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t5294 = (function (v,k,vec__5293,p__5292,container,key_selectors_map,template,selector_map,meta5295){
this.v = v;
this.k = k;
this.vec__5293 = vec__5293;
this.p__5292 = p__5292;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta5295 = meta5295;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t5294.cljs$lang$type = true;
dommy.core.t5294.cljs$lang$ctorStr = "dommy.core/t5294";
dommy.core.t5294.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"dommy.core/t5294");
});
dommy.core.t5294.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});
dommy.core.t5294.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5296){var self__ = this;
var _5296__$1 = this;return self__.meta5295;
});
dommy.core.t5294.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5296,meta5295__$1){var self__ = this;
var _5296__$1 = this;return (new dommy.core.t5294(self__.v,self__.k,self__.vec__5293,self__.p__5292,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta5295__$1));
});
dommy.core.__GT_t5294 = (function __GT_t5294(v__$1,k__$1,vec__5293__$1,p__5292__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta5295){return (new dommy.core.t5294(v__$1,k__$1,vec__5293__$1,p__5292__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta5295));
});
}
return (new dommy.core.t5294(v,k,vec__5293,p__5292,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], null);
}),key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__5297_SHARP_){return p1__5297_SHARP_.parentNode;
}),dommy.template.__GT_node_like.call(null,elem)));
});
/**
* returns a predicate on nodes that match `selector` at the
* time of this `matches-pred` call (may return outdated results
* if you fuck with the DOM)
*/
dommy.core.matches_pred = (function() {
var matches_pred = null;
var matches_pred__1 = (function (selector){return matches_pred.call(null,document,selector);
});
var matches_pred__2 = (function (base,selector){var matches = dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,dommy.template.__GT_node_like.call(null,base)).querySelectorAll(dommy.core.selector.call(null,selector)));return (function (elem){return (matches.indexOf(elem) >= 0);
});
});
matches_pred = function(base,selector){
switch(arguments.length){
case 1:
return matches_pred__1.call(this,base);
case 2:
return matches_pred__2.call(this,base,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
matches_pred.cljs$core$IFn$_invoke$arity$1 = matches_pred__1;
matches_pred.cljs$core$IFn$_invoke$arity$2 = matches_pred__2;
return matches_pred;
})()
;
/**
* closest ancestor of `node` (up to `base`, if provided)
* that matches `selector`
*/
dommy.core.closest = (function() {
var closest = null;
var closest__2 = (function (elem,selector){return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,selector),dommy.core.ancestor_nodes.call(null,dommy.template.__GT_node_like.call(null,elem))));
});
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__5298_SHARP_){return !((p1__5298_SHARP_ === base__$1));
}),dommy.core.ancestor_nodes.call(null,elem__$1))));
});
closest = function(base,elem,selector){
switch(arguments.length){
case 2:
return closest__2.call(this,base,elem);
case 3:
return closest__3.call(this,base,elem,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
closest.cljs$core$IFn$_invoke$arity$2 = closest__2;
closest.cljs$core$IFn$_invoke$arity$3 = closest__3;
return closest;
})()
;
/**
* is `descendant` a descendant of `ancestor`?
*/
dommy.core.descendant_QMARK_ = (function descendant_QMARK_(descendant,ancestor){var descendant__$1 = dommy.template.__GT_node_like.call(null,descendant);var ancestor__$1 = dommy.template.__GT_node_like.call(null,ancestor);if(cljs.core.truth_(ancestor__$1.contains))
{return ancestor__$1.contains(descendant__$1);
} else
{if(cljs.core.truth_(ancestor__$1.compareDocumentPosition))
{return ((ancestor__$1.compareDocumentPosition(descendant__$1) & (1 << 4)) != 0);
} else
{return null;
}
}
});
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__5299){var vec__5300 = p__5299;var special_mouse_event = cljs.core.nth.call(null,vec__5300,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__5300,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__3403__auto__ = event.selectedTarget;if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return event.currentTarget;
}
})();if(cljs.core.truth_((function (){var and__3391__auto__ = related_target;if(cljs.core.truth_(and__3391__auto__))
{return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else
{return and__3391__auto__;
}
})()))
{return null;
} else
{return f.call(null,event);
}
});
})], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",2027084997),new cljs.core.Keyword(null,"mouseover","mouseover",1601081963),new cljs.core.Keyword(null,"mouseleave","mouseleave",2033263780),new cljs.core.Keyword(null,"mouseout","mouseout",894298107)], null)));
/**
* fires f if event.target is found with `selector`
*/
dommy.core.live_listener = (function live_listener(elem,selector,f){return (function (event){var selected_target = dommy.core.closest.call(null,dommy.template.__GT_node_like.call(null,elem),event.target,selector);if(cljs.core.truth_((function (){var and__3391__auto__ = selected_target;if(cljs.core.truth_(and__3391__auto__))
{return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",1284845038)));
} else
{return and__3391__auto__;
}
})()))
{event.selectedTarget = selected_target;
return f.call(null,event);
} else
{return null;
}
});
});
/**
* Returns a nested map of event listeners on `nodes`
*/
dommy.core.event_listeners = (function event_listeners(elem){var or__3403__auto__ = dommy.template.__GT_node_like.call(null,elem).dommyEventListeners;if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
});
/**
* @param {...*} var_args
*/
dommy.core.update_event_listeners_BANG_ = (function() { 
var update_event_listeners_BANG___delegate = function (elem,f,args){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args);
};
var update_event_listeners_BANG_ = function (elem,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return update_event_listeners_BANG___delegate.call(this,elem,f,args);};
update_event_listeners_BANG_.cljs$lang$maxFixedArity = 2;
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__5301){
var elem = cljs.core.first(arglist__5301);
arglist__5301 = cljs.core.next(arglist__5301);
var f = cljs.core.first(arglist__5301);
var args = cljs.core.rest(arglist__5301);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__5302_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__5302_SHARP_));
}),cljs.core.rest).call(null,elem_sel);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dommy.template.__GT_node_like.call(null,elem_sel),null], null);
}
});
/**
* Adds `f` as a listener for events of type `event-type` on
* `elem-sel`, which must either be a DOM node, or a sequence
* whose first item is a DOM node.
* 
* In other words, the call to `listen!` can take two forms:
* 
* If `elem-sel` is a DOM node, i.e., you're doing something like:
* 
* (listen! elem :click click-handler)
* 
* then `click-handler` will be set as a listener for `click` events
* on the `elem`.
* 
* If `elem-sel` is a sequence:
* 
* (listen! [elem :.selector.for :.some.descendants] :click click-handler)
* 
* then `click-handler` will be set as a listener for `click` events
* on descendants of `elem` that match the selector
* 
* Also accepts any number of event-type and handler pairs for setting
* multiple listeners at once:
* 
* (listen! some-elem :click click-handler :hover hover-handler)
* @param {...*} var_args
*/
dommy.core.listen_BANG_ = (function() { 
var listen_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"type-fs","type-fs",1801297401,null)))))].join('')));
}
var vec__5326_5349 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_5350 = cljs.core.nth.call(null,vec__5326_5349,0,null);var selector_5351 = cljs.core.nth.call(null,vec__5326_5349,1,null);var seq__5327_5352 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__5334_5353 = null;var count__5335_5354 = 0;var i__5336_5355 = 0;while(true){
if((i__5336_5355 < count__5335_5354))
{var vec__5343_5356 = cljs.core._nth.call(null,chunk__5334_5353,i__5336_5355);var orig_type_5357 = cljs.core.nth.call(null,vec__5343_5356,0,null);var f_5358 = cljs.core.nth.call(null,vec__5343_5356,1,null);var seq__5337_5359 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_5357,new cljs.core.PersistentArrayMap.fromArray([orig_type_5357,cljs.core.identity], true, false)));var chunk__5339_5360 = null;var count__5340_5361 = 0;var i__5341_5362 = 0;while(true){
if((i__5341_5362 < count__5340_5361))
{var vec__5344_5363 = cljs.core._nth.call(null,chunk__5339_5360,i__5341_5362);var actual_type_5364 = cljs.core.nth.call(null,vec__5344_5363,0,null);var factory_5365 = cljs.core.nth.call(null,vec__5344_5363,1,null);var canonical_f_5366 = (cljs.core.truth_(selector_5351)?cljs.core.partial.call(null,dommy.core.live_listener,elem_5350,selector_5351):cljs.core.identity).call(null,factory_5365.call(null,f_5358));dommy.core.update_event_listeners_BANG_.call(null,elem_5350,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_5351,actual_type_5364,f_5358], null),canonical_f_5366);
if(cljs.core.truth_(elem_5350.addEventListener))
{elem_5350.addEventListener(cljs.core.name.call(null,actual_type_5364),canonical_f_5366);
} else
{elem_5350.attachEvent(cljs.core.name.call(null,actual_type_5364),canonical_f_5366);
}
{
var G__5367 = seq__5337_5359;
var G__5368 = chunk__5339_5360;
var G__5369 = count__5340_5361;
var G__5370 = (i__5341_5362 + 1);
seq__5337_5359 = G__5367;
chunk__5339_5360 = G__5368;
count__5340_5361 = G__5369;
i__5341_5362 = G__5370;
continue;
}
} else
{var temp__4092__auto___5371 = cljs.core.seq.call(null,seq__5337_5359);if(temp__4092__auto___5371)
{var seq__5337_5372__$1 = temp__4092__auto___5371;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5337_5372__$1))
{var c__4151__auto___5373 = cljs.core.chunk_first.call(null,seq__5337_5372__$1);{
var G__5374 = cljs.core.chunk_rest.call(null,seq__5337_5372__$1);
var G__5375 = c__4151__auto___5373;
var G__5376 = cljs.core.count.call(null,c__4151__auto___5373);
var G__5377 = 0;
seq__5337_5359 = G__5374;
chunk__5339_5360 = G__5375;
count__5340_5361 = G__5376;
i__5341_5362 = G__5377;
continue;
}
} else
{var vec__5345_5378 = cljs.core.first.call(null,seq__5337_5372__$1);var actual_type_5379 = cljs.core.nth.call(null,vec__5345_5378,0,null);var factory_5380 = cljs.core.nth.call(null,vec__5345_5378,1,null);var canonical_f_5381 = (cljs.core.truth_(selector_5351)?cljs.core.partial.call(null,dommy.core.live_listener,elem_5350,selector_5351):cljs.core.identity).call(null,factory_5380.call(null,f_5358));dommy.core.update_event_listeners_BANG_.call(null,elem_5350,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_5351,actual_type_5379,f_5358], null),canonical_f_5381);
if(cljs.core.truth_(elem_5350.addEventListener))
{elem_5350.addEventListener(cljs.core.name.call(null,actual_type_5379),canonical_f_5381);
} else
{elem_5350.attachEvent(cljs.core.name.call(null,actual_type_5379),canonical_f_5381);
}
{
var G__5382 = cljs.core.next.call(null,seq__5337_5372__$1);
var G__5383 = null;
var G__5384 = 0;
var G__5385 = 0;
seq__5337_5359 = G__5382;
chunk__5339_5360 = G__5383;
count__5340_5361 = G__5384;
i__5341_5362 = G__5385;
continue;
}
}
} else
{}
}
break;
}
{
var G__5386 = seq__5327_5352;
var G__5387 = chunk__5334_5353;
var G__5388 = count__5335_5354;
var G__5389 = (i__5336_5355 + 1);
seq__5327_5352 = G__5386;
chunk__5334_5353 = G__5387;
count__5335_5354 = G__5388;
i__5336_5355 = G__5389;
continue;
}
} else
{var temp__4092__auto___5390 = cljs.core.seq.call(null,seq__5327_5352);if(temp__4092__auto___5390)
{var seq__5327_5391__$1 = temp__4092__auto___5390;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5327_5391__$1))
{var c__4151__auto___5392 = cljs.core.chunk_first.call(null,seq__5327_5391__$1);{
var G__5393 = cljs.core.chunk_rest.call(null,seq__5327_5391__$1);
var G__5394 = c__4151__auto___5392;
var G__5395 = cljs.core.count.call(null,c__4151__auto___5392);
var G__5396 = 0;
seq__5327_5352 = G__5393;
chunk__5334_5353 = G__5394;
count__5335_5354 = G__5395;
i__5336_5355 = G__5396;
continue;
}
} else
{var vec__5346_5397 = cljs.core.first.call(null,seq__5327_5391__$1);var orig_type_5398 = cljs.core.nth.call(null,vec__5346_5397,0,null);var f_5399 = cljs.core.nth.call(null,vec__5346_5397,1,null);var seq__5328_5400 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_5398,new cljs.core.PersistentArrayMap.fromArray([orig_type_5398,cljs.core.identity], true, false)));var chunk__5330_5401 = null;var count__5331_5402 = 0;var i__5332_5403 = 0;while(true){
if((i__5332_5403 < count__5331_5402))
{var vec__5347_5404 = cljs.core._nth.call(null,chunk__5330_5401,i__5332_5403);var actual_type_5405 = cljs.core.nth.call(null,vec__5347_5404,0,null);var factory_5406 = cljs.core.nth.call(null,vec__5347_5404,1,null);var canonical_f_5407 = (cljs.core.truth_(selector_5351)?cljs.core.partial.call(null,dommy.core.live_listener,elem_5350,selector_5351):cljs.core.identity).call(null,factory_5406.call(null,f_5399));dommy.core.update_event_listeners_BANG_.call(null,elem_5350,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_5351,actual_type_5405,f_5399], null),canonical_f_5407);
if(cljs.core.truth_(elem_5350.addEventListener))
{elem_5350.addEventListener(cljs.core.name.call(null,actual_type_5405),canonical_f_5407);
} else
{elem_5350.attachEvent(cljs.core.name.call(null,actual_type_5405),canonical_f_5407);
}
{
var G__5408 = seq__5328_5400;
var G__5409 = chunk__5330_5401;
var G__5410 = count__5331_5402;
var G__5411 = (i__5332_5403 + 1);
seq__5328_5400 = G__5408;
chunk__5330_5401 = G__5409;
count__5331_5402 = G__5410;
i__5332_5403 = G__5411;
continue;
}
} else
{var temp__4092__auto___5412__$1 = cljs.core.seq.call(null,seq__5328_5400);if(temp__4092__auto___5412__$1)
{var seq__5328_5413__$1 = temp__4092__auto___5412__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5328_5413__$1))
{var c__4151__auto___5414 = cljs.core.chunk_first.call(null,seq__5328_5413__$1);{
var G__5415 = cljs.core.chunk_rest.call(null,seq__5328_5413__$1);
var G__5416 = c__4151__auto___5414;
var G__5417 = cljs.core.count.call(null,c__4151__auto___5414);
var G__5418 = 0;
seq__5328_5400 = G__5415;
chunk__5330_5401 = G__5416;
count__5331_5402 = G__5417;
i__5332_5403 = G__5418;
continue;
}
} else
{var vec__5348_5419 = cljs.core.first.call(null,seq__5328_5413__$1);var actual_type_5420 = cljs.core.nth.call(null,vec__5348_5419,0,null);var factory_5421 = cljs.core.nth.call(null,vec__5348_5419,1,null);var canonical_f_5422 = (cljs.core.truth_(selector_5351)?cljs.core.partial.call(null,dommy.core.live_listener,elem_5350,selector_5351):cljs.core.identity).call(null,factory_5421.call(null,f_5399));dommy.core.update_event_listeners_BANG_.call(null,elem_5350,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_5351,actual_type_5420,f_5399], null),canonical_f_5422);
if(cljs.core.truth_(elem_5350.addEventListener))
{elem_5350.addEventListener(cljs.core.name.call(null,actual_type_5420),canonical_f_5422);
} else
{elem_5350.attachEvent(cljs.core.name.call(null,actual_type_5420),canonical_f_5422);
}
{
var G__5423 = cljs.core.next.call(null,seq__5328_5413__$1);
var G__5424 = null;
var G__5425 = 0;
var G__5426 = 0;
seq__5328_5400 = G__5423;
chunk__5330_5401 = G__5424;
count__5331_5402 = G__5425;
i__5332_5403 = G__5426;
continue;
}
}
} else
{}
}
break;
}
{
var G__5427 = cljs.core.next.call(null,seq__5327_5391__$1);
var G__5428 = null;
var G__5429 = 0;
var G__5430 = 0;
seq__5327_5352 = G__5427;
chunk__5334_5353 = G__5428;
count__5335_5354 = G__5429;
i__5336_5355 = G__5430;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var listen_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return listen_BANG___delegate.call(this,elem_sel,type_fs);};
listen_BANG_.cljs$lang$maxFixedArity = 1;
listen_BANG_.cljs$lang$applyTo = (function (arglist__5431){
var elem_sel = cljs.core.first(arglist__5431);
var type_fs = cljs.core.rest(arglist__5431);
return listen_BANG___delegate(elem_sel,type_fs);
});
listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = listen_BANG___delegate;
return listen_BANG_;
})()
;
/**
* Removes event listener for the element defined in `elem-sel`,
* which is the same format as listen!.
* 
* The following forms are allowed, and will remove all handlers
* that match the parameters passed in:
* 
* (unlisten! [elem :.selector] :click event-listener)
* 
* (unlisten! [elem :.selector]
* :click event-listener
* :mouseover other-event-listener)
* @param {...*} var_args
*/
dommy.core.unlisten_BANG_ = (function() { 
var unlisten_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"type-fs","type-fs",1801297401,null)))))].join('')));
}
var vec__5455_5478 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_5479 = cljs.core.nth.call(null,vec__5455_5478,0,null);var selector_5480 = cljs.core.nth.call(null,vec__5455_5478,1,null);var seq__5456_5481 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__5463_5482 = null;var count__5464_5483 = 0;var i__5465_5484 = 0;while(true){
if((i__5465_5484 < count__5464_5483))
{var vec__5472_5485 = cljs.core._nth.call(null,chunk__5463_5482,i__5465_5484);var orig_type_5486 = cljs.core.nth.call(null,vec__5472_5485,0,null);var f_5487 = cljs.core.nth.call(null,vec__5472_5485,1,null);var seq__5466_5488 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_5486,new cljs.core.PersistentArrayMap.fromArray([orig_type_5486,cljs.core.identity], true, false)));var chunk__5468_5489 = null;var count__5469_5490 = 0;var i__5470_5491 = 0;while(true){
if((i__5470_5491 < count__5469_5490))
{var vec__5473_5492 = cljs.core._nth.call(null,chunk__5468_5489,i__5470_5491);var actual_type_5493 = cljs.core.nth.call(null,vec__5473_5492,0,null);var __5494 = cljs.core.nth.call(null,vec__5473_5492,1,null);var keys_5495 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_5480,actual_type_5493,f_5487], null);var canonical_f_5496 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_5479),keys_5495);dommy.core.update_event_listeners_BANG_.call(null,elem_5479,dommy.utils.dissoc_in,keys_5495);
if(cljs.core.truth_(elem_5479.removeEventListener))
{elem_5479.removeEventListener(cljs.core.name.call(null,actual_type_5493),canonical_f_5496);
} else
{elem_5479.detachEvent(cljs.core.name.call(null,actual_type_5493),canonical_f_5496);
}
{
var G__5497 = seq__5466_5488;
var G__5498 = chunk__5468_5489;
var G__5499 = count__5469_5490;
var G__5500 = (i__5470_5491 + 1);
seq__5466_5488 = G__5497;
chunk__5468_5489 = G__5498;
count__5469_5490 = G__5499;
i__5470_5491 = G__5500;
continue;
}
} else
{var temp__4092__auto___5501 = cljs.core.seq.call(null,seq__5466_5488);if(temp__4092__auto___5501)
{var seq__5466_5502__$1 = temp__4092__auto___5501;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5466_5502__$1))
{var c__4151__auto___5503 = cljs.core.chunk_first.call(null,seq__5466_5502__$1);{
var G__5504 = cljs.core.chunk_rest.call(null,seq__5466_5502__$1);
var G__5505 = c__4151__auto___5503;
var G__5506 = cljs.core.count.call(null,c__4151__auto___5503);
var G__5507 = 0;
seq__5466_5488 = G__5504;
chunk__5468_5489 = G__5505;
count__5469_5490 = G__5506;
i__5470_5491 = G__5507;
continue;
}
} else
{var vec__5474_5508 = cljs.core.first.call(null,seq__5466_5502__$1);var actual_type_5509 = cljs.core.nth.call(null,vec__5474_5508,0,null);var __5510 = cljs.core.nth.call(null,vec__5474_5508,1,null);var keys_5511 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_5480,actual_type_5509,f_5487], null);var canonical_f_5512 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_5479),keys_5511);dommy.core.update_event_listeners_BANG_.call(null,elem_5479,dommy.utils.dissoc_in,keys_5511);
if(cljs.core.truth_(elem_5479.removeEventListener))
{elem_5479.removeEventListener(cljs.core.name.call(null,actual_type_5509),canonical_f_5512);
} else
{elem_5479.detachEvent(cljs.core.name.call(null,actual_type_5509),canonical_f_5512);
}
{
var G__5513 = cljs.core.next.call(null,seq__5466_5502__$1);
var G__5514 = null;
var G__5515 = 0;
var G__5516 = 0;
seq__5466_5488 = G__5513;
chunk__5468_5489 = G__5514;
count__5469_5490 = G__5515;
i__5470_5491 = G__5516;
continue;
}
}
} else
{}
}
break;
}
{
var G__5517 = seq__5456_5481;
var G__5518 = chunk__5463_5482;
var G__5519 = count__5464_5483;
var G__5520 = (i__5465_5484 + 1);
seq__5456_5481 = G__5517;
chunk__5463_5482 = G__5518;
count__5464_5483 = G__5519;
i__5465_5484 = G__5520;
continue;
}
} else
{var temp__4092__auto___5521 = cljs.core.seq.call(null,seq__5456_5481);if(temp__4092__auto___5521)
{var seq__5456_5522__$1 = temp__4092__auto___5521;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5456_5522__$1))
{var c__4151__auto___5523 = cljs.core.chunk_first.call(null,seq__5456_5522__$1);{
var G__5524 = cljs.core.chunk_rest.call(null,seq__5456_5522__$1);
var G__5525 = c__4151__auto___5523;
var G__5526 = cljs.core.count.call(null,c__4151__auto___5523);
var G__5527 = 0;
seq__5456_5481 = G__5524;
chunk__5463_5482 = G__5525;
count__5464_5483 = G__5526;
i__5465_5484 = G__5527;
continue;
}
} else
{var vec__5475_5528 = cljs.core.first.call(null,seq__5456_5522__$1);var orig_type_5529 = cljs.core.nth.call(null,vec__5475_5528,0,null);var f_5530 = cljs.core.nth.call(null,vec__5475_5528,1,null);var seq__5457_5531 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_5529,new cljs.core.PersistentArrayMap.fromArray([orig_type_5529,cljs.core.identity], true, false)));var chunk__5459_5532 = null;var count__5460_5533 = 0;var i__5461_5534 = 0;while(true){
if((i__5461_5534 < count__5460_5533))
{var vec__5476_5535 = cljs.core._nth.call(null,chunk__5459_5532,i__5461_5534);var actual_type_5536 = cljs.core.nth.call(null,vec__5476_5535,0,null);var __5537 = cljs.core.nth.call(null,vec__5476_5535,1,null);var keys_5538 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_5480,actual_type_5536,f_5530], null);var canonical_f_5539 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_5479),keys_5538);dommy.core.update_event_listeners_BANG_.call(null,elem_5479,dommy.utils.dissoc_in,keys_5538);
if(cljs.core.truth_(elem_5479.removeEventListener))
{elem_5479.removeEventListener(cljs.core.name.call(null,actual_type_5536),canonical_f_5539);
} else
{elem_5479.detachEvent(cljs.core.name.call(null,actual_type_5536),canonical_f_5539);
}
{
var G__5540 = seq__5457_5531;
var G__5541 = chunk__5459_5532;
var G__5542 = count__5460_5533;
var G__5543 = (i__5461_5534 + 1);
seq__5457_5531 = G__5540;
chunk__5459_5532 = G__5541;
count__5460_5533 = G__5542;
i__5461_5534 = G__5543;
continue;
}
} else
{var temp__4092__auto___5544__$1 = cljs.core.seq.call(null,seq__5457_5531);if(temp__4092__auto___5544__$1)
{var seq__5457_5545__$1 = temp__4092__auto___5544__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5457_5545__$1))
{var c__4151__auto___5546 = cljs.core.chunk_first.call(null,seq__5457_5545__$1);{
var G__5547 = cljs.core.chunk_rest.call(null,seq__5457_5545__$1);
var G__5548 = c__4151__auto___5546;
var G__5549 = cljs.core.count.call(null,c__4151__auto___5546);
var G__5550 = 0;
seq__5457_5531 = G__5547;
chunk__5459_5532 = G__5548;
count__5460_5533 = G__5549;
i__5461_5534 = G__5550;
continue;
}
} else
{var vec__5477_5551 = cljs.core.first.call(null,seq__5457_5545__$1);var actual_type_5552 = cljs.core.nth.call(null,vec__5477_5551,0,null);var __5553 = cljs.core.nth.call(null,vec__5477_5551,1,null);var keys_5554 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_5480,actual_type_5552,f_5530], null);var canonical_f_5555 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_5479),keys_5554);dommy.core.update_event_listeners_BANG_.call(null,elem_5479,dommy.utils.dissoc_in,keys_5554);
if(cljs.core.truth_(elem_5479.removeEventListener))
{elem_5479.removeEventListener(cljs.core.name.call(null,actual_type_5552),canonical_f_5555);
} else
{elem_5479.detachEvent(cljs.core.name.call(null,actual_type_5552),canonical_f_5555);
}
{
var G__5556 = cljs.core.next.call(null,seq__5457_5545__$1);
var G__5557 = null;
var G__5558 = 0;
var G__5559 = 0;
seq__5457_5531 = G__5556;
chunk__5459_5532 = G__5557;
count__5460_5533 = G__5558;
i__5461_5534 = G__5559;
continue;
}
}
} else
{}
}
break;
}
{
var G__5560 = cljs.core.next.call(null,seq__5456_5522__$1);
var G__5561 = null;
var G__5562 = 0;
var G__5563 = 0;
seq__5456_5481 = G__5560;
chunk__5463_5482 = G__5561;
count__5464_5483 = G__5562;
i__5465_5484 = G__5563;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var unlisten_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return unlisten_BANG___delegate.call(this,elem_sel,type_fs);};
unlisten_BANG_.cljs$lang$maxFixedArity = 1;
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__5564){
var elem_sel = cljs.core.first(arglist__5564);
var type_fs = cljs.core.rest(arglist__5564);
return unlisten_BANG___delegate(elem_sel,type_fs);
});
unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = unlisten_BANG___delegate;
return unlisten_BANG_;
})()
;
/**
* @param {...*} var_args
*/
dommy.core.listen_once_BANG_ = (function() { 
var listen_once_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"type-fs","type-fs",1801297401,null)))))].join('')));
}
var vec__5572_5579 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_5580 = cljs.core.nth.call(null,vec__5572_5579,0,null);var selector_5581 = cljs.core.nth.call(null,vec__5572_5579,1,null);var seq__5573_5582 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__5574_5583 = null;var count__5575_5584 = 0;var i__5576_5585 = 0;while(true){
if((i__5576_5585 < count__5575_5584))
{var vec__5577_5586 = cljs.core._nth.call(null,chunk__5574_5583,i__5576_5585);var type_5587 = cljs.core.nth.call(null,vec__5577_5586,0,null);var f_5588 = cljs.core.nth.call(null,vec__5577_5586,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_5587,((function (seq__5573_5582,chunk__5574_5583,count__5575_5584,i__5576_5585,vec__5577_5586,type_5587,f_5588){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_5587,this_fn);
return f_5588.call(null,e);
});})(seq__5573_5582,chunk__5574_5583,count__5575_5584,i__5576_5585,vec__5577_5586,type_5587,f_5588))
);
{
var G__5589 = seq__5573_5582;
var G__5590 = chunk__5574_5583;
var G__5591 = count__5575_5584;
var G__5592 = (i__5576_5585 + 1);
seq__5573_5582 = G__5589;
chunk__5574_5583 = G__5590;
count__5575_5584 = G__5591;
i__5576_5585 = G__5592;
continue;
}
} else
{var temp__4092__auto___5593 = cljs.core.seq.call(null,seq__5573_5582);if(temp__4092__auto___5593)
{var seq__5573_5594__$1 = temp__4092__auto___5593;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5573_5594__$1))
{var c__4151__auto___5595 = cljs.core.chunk_first.call(null,seq__5573_5594__$1);{
var G__5596 = cljs.core.chunk_rest.call(null,seq__5573_5594__$1);
var G__5597 = c__4151__auto___5595;
var G__5598 = cljs.core.count.call(null,c__4151__auto___5595);
var G__5599 = 0;
seq__5573_5582 = G__5596;
chunk__5574_5583 = G__5597;
count__5575_5584 = G__5598;
i__5576_5585 = G__5599;
continue;
}
} else
{var vec__5578_5600 = cljs.core.first.call(null,seq__5573_5594__$1);var type_5601 = cljs.core.nth.call(null,vec__5578_5600,0,null);var f_5602 = cljs.core.nth.call(null,vec__5578_5600,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_5601,((function (seq__5573_5582,chunk__5574_5583,count__5575_5584,i__5576_5585,vec__5578_5600,type_5601,f_5602,seq__5573_5594__$1,temp__4092__auto___5593){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_5601,this_fn);
return f_5602.call(null,e);
});})(seq__5573_5582,chunk__5574_5583,count__5575_5584,i__5576_5585,vec__5578_5600,type_5601,f_5602,seq__5573_5594__$1,temp__4092__auto___5593))
);
{
var G__5603 = cljs.core.next.call(null,seq__5573_5594__$1);
var G__5604 = null;
var G__5605 = 0;
var G__5606 = 0;
seq__5573_5582 = G__5603;
chunk__5574_5583 = G__5604;
count__5575_5584 = G__5605;
i__5576_5585 = G__5606;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var listen_once_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return listen_once_BANG___delegate.call(this,elem_sel,type_fs);};
listen_once_BANG_.cljs$lang$maxFixedArity = 1;
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__5607){
var elem_sel = cljs.core.first(arglist__5607);
var type_fs = cljs.core.rest(arglist__5607);
return listen_once_BANG___delegate(elem_sel,type_fs);
});
listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = listen_once_BANG___delegate;
return listen_once_BANG_;
})()
;
/**
* NOTE: ONLY TO BE USED FOR TESTS. May not work at mocking many
* event types or their bubbling behaviours
* 
* Creates an event of type `event-type`, optionally having
* `update-event!` mutate and return an updated event object,
* and fires it on `node`.
* Only works when `node` is in the DOM
* @param {...*} var_args
*/
dommy.core.fire_BANG_ = (function() { 
var fire_BANG___delegate = function (node,event_type,p__5608){var vec__5610 = p__5608;var update_event_BANG_ = cljs.core.nth.call(null,vec__5610,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"descendant?","descendant?",-1886221157,null),new cljs.core.Symbol(null,"node","node",-1637144645,null),new cljs.core.Symbol("js","document.documentElement","js/document.documentElement",-1449696112,null))))].join('')));
}
var update_event_BANG___$1 = (function (){var or__3403__auto__ = update_event_BANG_;if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return cljs.core.identity;
}
})();if(cljs.core.truth_(document.createEvent))
{var event = document.createEvent("Event");event.initEvent(cljs.core.name.call(null,event_type),true,true);
return node.dispatchEvent(update_event_BANG___$1.call(null,event));
} else
{return node.fireEvent([cljs.core.str("on"),cljs.core.str(cljs.core.name.call(null,event_type))].join(''),update_event_BANG___$1.call(null,document.createEventObject()));
}
};
var fire_BANG_ = function (node,event_type,var_args){
var p__5608 = null;if (arguments.length > 2) {
  p__5608 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__5608);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__5611){
var node = cljs.core.first(arglist__5611);
arglist__5611 = cljs.core.next(arglist__5611);
var event_type = cljs.core.first(arglist__5611);
var p__5608 = cljs.core.rest(arglist__5611);
return fire_BANG___delegate(node,event_type,p__5608);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;
