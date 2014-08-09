// Compiled by ClojureScript 0.0-2156
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.utils');
goog.require('dommy.utils');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, ["polyline",null,"rect",null,"svg",null,"path",null,"g",null,"text",null,"circle",null,"textPath",null,"line",null,"clipPath",null,"polygon",null], null), null);
dommy.template.PElement = (function (){var obj5627 = {};return obj5627;
})();
dommy.template._elem = (function _elem(this$){if((function (){var and__3391__auto__ = this$;if(and__3391__auto__)
{return this$.dommy$template$PElement$_elem$arity$1;
} else
{return and__3391__auto__;
}
})())
{return this$.dommy$template$PElement$_elem$arity$1(this$);
} else
{var x__4030__auto__ = (((this$ == null))?null:this$);return (function (){var or__3403__auto__ = (dommy.template._elem[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (dommy.template._elem["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"PElement.-elem",this$);
}
}
})().call(null,this$);
}
});
/**
* index of css character (#,.) in base-element. bottleneck
*/
dommy.template.next_css_index = (function next_css_index(s,start_idx){var id_idx = s.indexOf("#",start_idx);var class_idx = s.indexOf(".",start_idx);var idx = Math.min(id_idx,class_idx);if((idx < 0))
{return Math.max(id_idx,class_idx);
} else
{return idx;
}
});
/**
* dom element from css-style keyword like :a.class1 or :span#my-span.class
*/
dommy.template.base_element = (function base_element(node_key){var node_str = dommy.utils.as_str.call(null,node_key);var base_idx = dommy.template.next_css_index.call(null,node_str,0);var tag = (((base_idx > 0))?node_str.substring(0,base_idx):(((base_idx === 0))?"div":((new cljs.core.Keyword(null,"else","else",1017020587))?node_str:null)));var node = (cljs.core.truth_(dommy.template._PLUS_svg_tags_PLUS_.call(null,tag))?document.createElementNS(dommy.template._PLUS_svg_ns_PLUS_,tag):document.createElement(tag));if((base_idx >= 0))
{var str_5630 = node_str.substring(base_idx);while(true){
var next_idx_5631 = dommy.template.next_css_index.call(null,str_5630,1);var frag_5632 = (((next_idx_5631 >= 0))?str_5630.substring(0,next_idx_5631):str_5630);var G__5629_5633 = frag_5632.charAt(0);if(cljs.core._EQ_.call(null,"#",G__5629_5633))
{node.setAttribute("id",frag_5632.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__5629_5633))
{dommy.attrs.add_class_BANG_.call(null,node,frag_5632.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_5632.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_5631 >= 0))
{{
var G__5634 = str_5630.substring(next_idx_5631);
str_5630 = G__5634;
continue;
}
} else
{}
break;
}
} else
{}
return node;
});
dommy.template.throw_unable_to_make_node = (function throw_unable_to_make_node(node_data){throw [cljs.core.str("Don't know how to make node from: "),cljs.core.str(cljs.core.pr_str.call(null,node_data))].join('');
});
/**
* take data and return a document fragment
*/
dommy.template.__GT_document_fragment = (function() {
var __GT_document_fragment = null;
var __GT_document_fragment__1 = (function (data){return __GT_document_fragment.call(null,document.createDocumentFragment(),data);
});
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__5640 = data;if(G__5640)
{var bit__4053__auto__ = null;if(cljs.core.truth_((function (){var or__3403__auto__ = bit__4053__auto__;if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return G__5640.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__5640.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__5640);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__5640);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__5641_5645 = cljs.core.seq.call(null,data);var chunk__5642_5646 = null;var count__5643_5647 = 0;var i__5644_5648 = 0;while(true){
if((i__5644_5648 < count__5643_5647))
{var child_5649 = cljs.core._nth.call(null,chunk__5642_5646,i__5644_5648);__GT_document_fragment.call(null,result_frag,child_5649);
{
var G__5650 = seq__5641_5645;
var G__5651 = chunk__5642_5646;
var G__5652 = count__5643_5647;
var G__5653 = (i__5644_5648 + 1);
seq__5641_5645 = G__5650;
chunk__5642_5646 = G__5651;
count__5643_5647 = G__5652;
i__5644_5648 = G__5653;
continue;
}
} else
{var temp__4092__auto___5654 = cljs.core.seq.call(null,seq__5641_5645);if(temp__4092__auto___5654)
{var seq__5641_5655__$1 = temp__4092__auto___5654;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5641_5655__$1))
{var c__4151__auto___5656 = cljs.core.chunk_first.call(null,seq__5641_5655__$1);{
var G__5657 = cljs.core.chunk_rest.call(null,seq__5641_5655__$1);
var G__5658 = c__4151__auto___5656;
var G__5659 = cljs.core.count.call(null,c__4151__auto___5656);
var G__5660 = 0;
seq__5641_5645 = G__5657;
chunk__5642_5646 = G__5658;
count__5643_5647 = G__5659;
i__5644_5648 = G__5660;
continue;
}
} else
{var child_5661 = cljs.core.first.call(null,seq__5641_5655__$1);__GT_document_fragment.call(null,result_frag,child_5661);
{
var G__5662 = cljs.core.next.call(null,seq__5641_5655__$1);
var G__5663 = null;
var G__5664 = 0;
var G__5665 = 0;
seq__5641_5645 = G__5662;
chunk__5642_5646 = G__5663;
count__5643_5647 = G__5664;
i__5644_5648 = G__5665;
continue;
}
}
} else
{}
}
break;
}
return result_frag;
} else
{if((data == null))
{return result_frag;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return dommy.template.throw_unable_to_make_node.call(null,data);
} else
{return null;
}
}
}
}
});
__GT_document_fragment = function(result_frag,data){
switch(arguments.length){
case 1:
return __GT_document_fragment__1.call(this,result_frag);
case 2:
return __GT_document_fragment__2.call(this,result_frag,data);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_document_fragment.cljs$core$IFn$_invoke$arity$1 = __GT_document_fragment__1;
__GT_document_fragment.cljs$core$IFn$_invoke$arity$2 = __GT_document_fragment__2;
return __GT_document_fragment;
})()
;
/**
* take data and return DOM node if it satisfies PElement and tries to
* make a document fragment otherwise
*/
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__5667 = data;if(G__5667)
{var bit__4053__auto__ = null;if(cljs.core.truth_((function (){var or__3403__auto__ = bit__4053__auto__;if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return G__5667.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__5667.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__5667);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__5667);
}
})())
{return dommy.template._elem.call(null,data);
} else
{return dommy.template.__GT_document_fragment.call(null,data);
}
});
/**
* element with either attrs or nested children [:div [:span "Hello"]]
*/
dommy.template.compound_element = (function compound_element(p__5668){var vec__5688 = p__5668;var tag_name = cljs.core.nth.call(null,vec__5688,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__5688,1,null);var children = cljs.core.nthnext.call(null,vec__5688,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__5690 = maybe_attrs;if(G__5690)
{var bit__4053__auto__ = null;if(cljs.core.truth_((function (){var or__3403__auto__ = bit__4053__auto__;if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return G__5690.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__5690.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__5690);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__5690);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__5691_5707 = cljs.core.seq.call(null,attrs);var chunk__5692_5708 = null;var count__5693_5709 = 0;var i__5694_5710 = 0;while(true){
if((i__5694_5710 < count__5693_5709))
{var vec__5695_5711 = cljs.core._nth.call(null,chunk__5692_5708,i__5694_5710);var k_5712 = cljs.core.nth.call(null,vec__5695_5711,0,null);var v_5713 = cljs.core.nth.call(null,vec__5695_5711,1,null);var G__5696_5714 = k_5712;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__5696_5714))
{var seq__5697_5715 = cljs.core.seq.call(null,v_5713);var chunk__5698_5716 = null;var count__5699_5717 = 0;var i__5700_5718 = 0;while(true){
if((i__5700_5718 < count__5699_5717))
{var c_5719 = cljs.core._nth.call(null,chunk__5698_5716,i__5700_5718);dommy.attrs.add_class_BANG_.call(null,n,c_5719);
{
var G__5720 = seq__5697_5715;
var G__5721 = chunk__5698_5716;
var G__5722 = count__5699_5717;
var G__5723 = (i__5700_5718 + 1);
seq__5697_5715 = G__5720;
chunk__5698_5716 = G__5721;
count__5699_5717 = G__5722;
i__5700_5718 = G__5723;
continue;
}
} else
{var temp__4092__auto___5724 = cljs.core.seq.call(null,seq__5697_5715);if(temp__4092__auto___5724)
{var seq__5697_5725__$1 = temp__4092__auto___5724;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5697_5725__$1))
{var c__4151__auto___5726 = cljs.core.chunk_first.call(null,seq__5697_5725__$1);{
var G__5727 = cljs.core.chunk_rest.call(null,seq__5697_5725__$1);
var G__5728 = c__4151__auto___5726;
var G__5729 = cljs.core.count.call(null,c__4151__auto___5726);
var G__5730 = 0;
seq__5697_5715 = G__5727;
chunk__5698_5716 = G__5728;
count__5699_5717 = G__5729;
i__5700_5718 = G__5730;
continue;
}
} else
{var c_5731 = cljs.core.first.call(null,seq__5697_5725__$1);dommy.attrs.add_class_BANG_.call(null,n,c_5731);
{
var G__5732 = cljs.core.next.call(null,seq__5697_5725__$1);
var G__5733 = null;
var G__5734 = 0;
var G__5735 = 0;
seq__5697_5715 = G__5732;
chunk__5698_5716 = G__5733;
count__5699_5717 = G__5734;
i__5700_5718 = G__5735;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__5696_5714))
{dommy.attrs.add_class_BANG_.call(null,n,v_5713);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_5712,v_5713);
} else
{}
}
}
{
var G__5736 = seq__5691_5707;
var G__5737 = chunk__5692_5708;
var G__5738 = count__5693_5709;
var G__5739 = (i__5694_5710 + 1);
seq__5691_5707 = G__5736;
chunk__5692_5708 = G__5737;
count__5693_5709 = G__5738;
i__5694_5710 = G__5739;
continue;
}
} else
{var temp__4092__auto___5740 = cljs.core.seq.call(null,seq__5691_5707);if(temp__4092__auto___5740)
{var seq__5691_5741__$1 = temp__4092__auto___5740;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5691_5741__$1))
{var c__4151__auto___5742 = cljs.core.chunk_first.call(null,seq__5691_5741__$1);{
var G__5743 = cljs.core.chunk_rest.call(null,seq__5691_5741__$1);
var G__5744 = c__4151__auto___5742;
var G__5745 = cljs.core.count.call(null,c__4151__auto___5742);
var G__5746 = 0;
seq__5691_5707 = G__5743;
chunk__5692_5708 = G__5744;
count__5693_5709 = G__5745;
i__5694_5710 = G__5746;
continue;
}
} else
{var vec__5701_5747 = cljs.core.first.call(null,seq__5691_5741__$1);var k_5748 = cljs.core.nth.call(null,vec__5701_5747,0,null);var v_5749 = cljs.core.nth.call(null,vec__5701_5747,1,null);var G__5702_5750 = k_5748;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__5702_5750))
{var seq__5703_5751 = cljs.core.seq.call(null,v_5749);var chunk__5704_5752 = null;var count__5705_5753 = 0;var i__5706_5754 = 0;while(true){
if((i__5706_5754 < count__5705_5753))
{var c_5755 = cljs.core._nth.call(null,chunk__5704_5752,i__5706_5754);dommy.attrs.add_class_BANG_.call(null,n,c_5755);
{
var G__5756 = seq__5703_5751;
var G__5757 = chunk__5704_5752;
var G__5758 = count__5705_5753;
var G__5759 = (i__5706_5754 + 1);
seq__5703_5751 = G__5756;
chunk__5704_5752 = G__5757;
count__5705_5753 = G__5758;
i__5706_5754 = G__5759;
continue;
}
} else
{var temp__4092__auto___5760__$1 = cljs.core.seq.call(null,seq__5703_5751);if(temp__4092__auto___5760__$1)
{var seq__5703_5761__$1 = temp__4092__auto___5760__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5703_5761__$1))
{var c__4151__auto___5762 = cljs.core.chunk_first.call(null,seq__5703_5761__$1);{
var G__5763 = cljs.core.chunk_rest.call(null,seq__5703_5761__$1);
var G__5764 = c__4151__auto___5762;
var G__5765 = cljs.core.count.call(null,c__4151__auto___5762);
var G__5766 = 0;
seq__5703_5751 = G__5763;
chunk__5704_5752 = G__5764;
count__5705_5753 = G__5765;
i__5706_5754 = G__5766;
continue;
}
} else
{var c_5767 = cljs.core.first.call(null,seq__5703_5761__$1);dommy.attrs.add_class_BANG_.call(null,n,c_5767);
{
var G__5768 = cljs.core.next.call(null,seq__5703_5761__$1);
var G__5769 = null;
var G__5770 = 0;
var G__5771 = 0;
seq__5703_5751 = G__5768;
chunk__5704_5752 = G__5769;
count__5705_5753 = G__5770;
i__5706_5754 = G__5771;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__5702_5750))
{dommy.attrs.add_class_BANG_.call(null,n,v_5749);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_5748,v_5749);
} else
{}
}
}
{
var G__5772 = cljs.core.next.call(null,seq__5691_5741__$1);
var G__5773 = null;
var G__5774 = 0;
var G__5775 = 0;
seq__5691_5707 = G__5772;
chunk__5692_5708 = G__5773;
count__5693_5709 = G__5774;
i__5694_5710 = G__5775;
continue;
}
}
} else
{}
}
break;
}
n.appendChild(dommy.template.__GT_node_like.call(null,children__$1));
return n;
});
(dommy.template.PElement["string"] = true);
(dommy.template._elem["string"] = (function (this$){if((this$ instanceof cljs.core.Keyword))
{return dommy.template.base_element.call(null,this$);
} else
{return document.createTextNode([cljs.core.str(this$)].join(''));
}
}));
(dommy.template.PElement["number"] = true);
(dommy.template._elem["number"] = (function (this$){return document.createTextNode([cljs.core.str(this$)].join(''));
}));
cljs.core.PersistentVector.prototype.dommy$template$PElement$ = true;
cljs.core.PersistentVector.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return dommy.template.compound_element.call(null,this$__$1);
});
Text.prototype.dommy$template$PElement$ = true;
Text.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
Comment.prototype.dommy$template$PElement$ = true;
Comment.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
Element.prototype.dommy$template$PElement$ = true;
Element.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
if(typeof HTMLElement !== 'undefined')
{HTMLElement.prototype.dommy$template$PElement$ = true;
HTMLElement.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
} else
{}
if(typeof DocumentFragment !== 'undefined')
{DocumentFragment.prototype.dommy$template$PElement$ = true;
DocumentFragment.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
} else
{}
if(typeof Document !== 'undefined')
{Document.prototype.dommy$template$PElement$ = true;
Document.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
} else
{}
if(typeof HTMLDocument !== 'undefined')
{HTMLDocument.prototype.dommy$template$PElement$ = true;
HTMLDocument.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
} else
{}
if(typeof SVGElement !== 'undefined')
{SVGElement.prototype.dommy$template$PElement$ = true;
SVGElement.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
} else
{}
if(typeof Window !== 'undefined')
{Window.prototype.dommy$template$PElement$ = true;
Window.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
} else
{}
dommy.template.node = (function node(data){if((function (){var G__5777 = data;if(G__5777)
{var bit__4053__auto__ = null;if(cljs.core.truth_((function (){var or__3403__auto__ = bit__4053__auto__;if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return G__5777.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__5777.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__5777);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__5777);
}
})())
{return dommy.template._elem.call(null,data);
} else
{return dommy.template.throw_unable_to_make_node.call(null,data);
}
});
dommy.template.html__GT_nodes = (function html__GT_nodes(html){var parent = document.createElement("div");parent.insertAdjacentHTML("beforeend",html);
return cljs.core.seq.call(null,Array.prototype.slice.call(parent.childNodes));
});
