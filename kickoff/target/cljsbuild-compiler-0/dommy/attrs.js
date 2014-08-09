// Compiled by ClojureScript 0.0-2156
goog.provide('dommy.attrs');
goog.require('cljs.core');
goog.require('dommy.utils');
goog.require('dommy.utils');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* does class-name string have class starting at index idx.
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_match_QMARK_ = (function class_match_QMARK_(class_name,class$,idx){var and__3391__auto__ = ((idx === 0)) || ((" " === class_name.charAt((idx - 1))));if(and__3391__auto__)
{var total_len = class_name.length;var stop = (idx + class$.length);if((stop <= total_len))
{return ((stop === total_len)) || ((" " === class_name.charAt(stop)));
} else
{return null;
}
} else
{return and__3391__auto__;
}
});
/**
* Finds the index of class in a space-delimited class-name
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_index = (function class_index(class_name,class$){var start_from = 0;while(true){
var i = class_name.indexOf(class$,start_from);if((i >= 0))
{if(dommy.attrs.class_match_QMARK_.call(null,class_name,class$,i))
{return i;
} else
{{
var G__5778 = (i + class$.length);
start_from = G__5778;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Does an HTML element have a class. Uses Element::classList if
* available and otherwise does fast parse of className string
*/
dommy.attrs.has_class_QMARK_ = (function has_class_QMARK_(elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = dommy.utils.as_str.call(null,class$);var temp__4090__auto__ = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto__))
{var class_list = temp__4090__auto__;return class_list.contains(class$__$1);
} else
{var temp__4092__auto__ = elem__$1.className;if(cljs.core.truth_(temp__4092__auto__))
{var class_name = temp__4092__auto__;var temp__4092__auto____$1 = dommy.attrs.class_index.call(null,class_name,class$__$1);if(cljs.core.truth_(temp__4092__auto____$1))
{var i = temp__4092__auto____$1;return (i >= 0);
} else
{return null;
}
} else
{return null;
}
}
});
/**
* add class to element
* @param {...*} var_args
*/
dommy.attrs.add_class_BANG_ = (function() {
var add_class_BANG_ = null;
var add_class_BANG___2 = (function (elem,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var classes__$1 = clojure.string.trim.call(null,dommy.utils.as_str.call(null,classes));if(cljs.core.seq.call(null,classes__$1))
{var temp__4090__auto___5803 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___5803))
{var class_list_5804 = temp__4090__auto___5803;var seq__5791_5805 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__5792_5806 = null;var count__5793_5807 = 0;var i__5794_5808 = 0;while(true){
if((i__5794_5808 < count__5793_5807))
{var class_5809 = cljs.core._nth.call(null,chunk__5792_5806,i__5794_5808);class_list_5804.add(class_5809);
{
var G__5810 = seq__5791_5805;
var G__5811 = chunk__5792_5806;
var G__5812 = count__5793_5807;
var G__5813 = (i__5794_5808 + 1);
seq__5791_5805 = G__5810;
chunk__5792_5806 = G__5811;
count__5793_5807 = G__5812;
i__5794_5808 = G__5813;
continue;
}
} else
{var temp__4092__auto___5814 = cljs.core.seq.call(null,seq__5791_5805);if(temp__4092__auto___5814)
{var seq__5791_5815__$1 = temp__4092__auto___5814;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5791_5815__$1))
{var c__4151__auto___5816 = cljs.core.chunk_first.call(null,seq__5791_5815__$1);{
var G__5817 = cljs.core.chunk_rest.call(null,seq__5791_5815__$1);
var G__5818 = c__4151__auto___5816;
var G__5819 = cljs.core.count.call(null,c__4151__auto___5816);
var G__5820 = 0;
seq__5791_5805 = G__5817;
chunk__5792_5806 = G__5818;
count__5793_5807 = G__5819;
i__5794_5808 = G__5820;
continue;
}
} else
{var class_5821 = cljs.core.first.call(null,seq__5791_5815__$1);class_list_5804.add(class_5821);
{
var G__5822 = cljs.core.next.call(null,seq__5791_5815__$1);
var G__5823 = null;
var G__5824 = 0;
var G__5825 = 0;
seq__5791_5805 = G__5822;
chunk__5792_5806 = G__5823;
count__5793_5807 = G__5824;
i__5794_5808 = G__5825;
continue;
}
}
} else
{}
}
break;
}
} else
{var seq__5795_5826 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__5796_5827 = null;var count__5797_5828 = 0;var i__5798_5829 = 0;while(true){
if((i__5798_5829 < count__5797_5828))
{var class_5830 = cljs.core._nth.call(null,chunk__5796_5827,i__5798_5829);var class_name_5831 = elem__$1.className;if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_5831,class_5830)))
{} else
{elem__$1.className = (((class_name_5831 === ""))?class_5830:[cljs.core.str(class_name_5831),cljs.core.str(" "),cljs.core.str(class_5830)].join(''));
}
{
var G__5832 = seq__5795_5826;
var G__5833 = chunk__5796_5827;
var G__5834 = count__5797_5828;
var G__5835 = (i__5798_5829 + 1);
seq__5795_5826 = G__5832;
chunk__5796_5827 = G__5833;
count__5797_5828 = G__5834;
i__5798_5829 = G__5835;
continue;
}
} else
{var temp__4092__auto___5836 = cljs.core.seq.call(null,seq__5795_5826);if(temp__4092__auto___5836)
{var seq__5795_5837__$1 = temp__4092__auto___5836;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5795_5837__$1))
{var c__4151__auto___5838 = cljs.core.chunk_first.call(null,seq__5795_5837__$1);{
var G__5839 = cljs.core.chunk_rest.call(null,seq__5795_5837__$1);
var G__5840 = c__4151__auto___5838;
var G__5841 = cljs.core.count.call(null,c__4151__auto___5838);
var G__5842 = 0;
seq__5795_5826 = G__5839;
chunk__5796_5827 = G__5840;
count__5797_5828 = G__5841;
i__5798_5829 = G__5842;
continue;
}
} else
{var class_5843 = cljs.core.first.call(null,seq__5795_5837__$1);var class_name_5844 = elem__$1.className;if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_5844,class_5843)))
{} else
{elem__$1.className = (((class_name_5844 === ""))?class_5843:[cljs.core.str(class_name_5844),cljs.core.str(" "),cljs.core.str(class_5843)].join(''));
}
{
var G__5845 = cljs.core.next.call(null,seq__5795_5837__$1);
var G__5846 = null;
var G__5847 = 0;
var G__5848 = 0;
seq__5795_5826 = G__5845;
chunk__5796_5827 = G__5846;
count__5797_5828 = G__5847;
i__5798_5829 = G__5848;
continue;
}
}
} else
{}
}
break;
}
}
} else
{}
return elem__$1;
});
var add_class_BANG___3 = (function() { 
var G__5849__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__5799_5850 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__5800_5851 = null;var count__5801_5852 = 0;var i__5802_5853 = 0;while(true){
if((i__5802_5853 < count__5801_5852))
{var c_5854 = cljs.core._nth.call(null,chunk__5800_5851,i__5802_5853);add_class_BANG_.call(null,elem__$1,c_5854);
{
var G__5855 = seq__5799_5850;
var G__5856 = chunk__5800_5851;
var G__5857 = count__5801_5852;
var G__5858 = (i__5802_5853 + 1);
seq__5799_5850 = G__5855;
chunk__5800_5851 = G__5856;
count__5801_5852 = G__5857;
i__5802_5853 = G__5858;
continue;
}
} else
{var temp__4092__auto___5859 = cljs.core.seq.call(null,seq__5799_5850);if(temp__4092__auto___5859)
{var seq__5799_5860__$1 = temp__4092__auto___5859;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5799_5860__$1))
{var c__4151__auto___5861 = cljs.core.chunk_first.call(null,seq__5799_5860__$1);{
var G__5862 = cljs.core.chunk_rest.call(null,seq__5799_5860__$1);
var G__5863 = c__4151__auto___5861;
var G__5864 = cljs.core.count.call(null,c__4151__auto___5861);
var G__5865 = 0;
seq__5799_5850 = G__5862;
chunk__5800_5851 = G__5863;
count__5801_5852 = G__5864;
i__5802_5853 = G__5865;
continue;
}
} else
{var c_5866 = cljs.core.first.call(null,seq__5799_5860__$1);add_class_BANG_.call(null,elem__$1,c_5866);
{
var G__5867 = cljs.core.next.call(null,seq__5799_5860__$1);
var G__5868 = null;
var G__5869 = 0;
var G__5870 = 0;
seq__5799_5850 = G__5867;
chunk__5800_5851 = G__5868;
count__5801_5852 = G__5869;
i__5802_5853 = G__5870;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var G__5849 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__5849__delegate.call(this,elem,classes,more_classes);};
G__5849.cljs$lang$maxFixedArity = 2;
G__5849.cljs$lang$applyTo = (function (arglist__5871){
var elem = cljs.core.first(arglist__5871);
arglist__5871 = cljs.core.next(arglist__5871);
var classes = cljs.core.first(arglist__5871);
var more_classes = cljs.core.rest(arglist__5871);
return G__5849__delegate(elem,classes,more_classes);
});
G__5849.cljs$core$IFn$_invoke$arity$variadic = G__5849__delegate;
return G__5849;
})()
;
add_class_BANG_ = function(elem,classes,var_args){
var more_classes = var_args;
switch(arguments.length){
case 2:
return add_class_BANG___2.call(this,elem,classes);
default:
return add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,classes, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_class_BANG_.cljs$lang$maxFixedArity = 2;
add_class_BANG_.cljs$lang$applyTo = add_class_BANG___3.cljs$lang$applyTo;
add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = add_class_BANG___2;
add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return add_class_BANG_;
})()
;
dommy.attrs.remove_class_str = (function remove_class_str(init_class_name,class$){var class_name = init_class_name;while(true){
var class_len = class_name.length;var temp__4090__auto__ = dommy.attrs.class_index.call(null,class_name,class$);if(cljs.core.truth_(temp__4090__auto__))
{var i = temp__4090__auto__;{
var G__5872 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__5872;
continue;
}
} else
{return class_name;
}
break;
}
});
/**
* remove class from and returns `elem`
* @param {...*} var_args
*/
dommy.attrs.remove_class_BANG_ = (function() {
var remove_class_BANG_ = null;
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = dommy.utils.as_str.call(null,class$);var temp__4090__auto___5881 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___5881))
{var class_list_5882 = temp__4090__auto___5881;class_list_5882.remove(class$__$1);
} else
{var class_name_5883 = elem__$1.className;var new_class_name_5884 = dommy.attrs.remove_class_str.call(null,class_name_5883,class$__$1);if((class_name_5883 === new_class_name_5884))
{} else
{elem__$1.className = new_class_name_5884;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__5885__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__5877 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__5878 = null;var count__5879 = 0;var i__5880 = 0;while(true){
if((i__5880 < count__5879))
{var c = cljs.core._nth.call(null,chunk__5878,i__5880);remove_class_BANG_.call(null,elem__$1,c);
{
var G__5886 = seq__5877;
var G__5887 = chunk__5878;
var G__5888 = count__5879;
var G__5889 = (i__5880 + 1);
seq__5877 = G__5886;
chunk__5878 = G__5887;
count__5879 = G__5888;
i__5880 = G__5889;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__5877);if(temp__4092__auto__)
{var seq__5877__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5877__$1))
{var c__4151__auto__ = cljs.core.chunk_first.call(null,seq__5877__$1);{
var G__5890 = cljs.core.chunk_rest.call(null,seq__5877__$1);
var G__5891 = c__4151__auto__;
var G__5892 = cljs.core.count.call(null,c__4151__auto__);
var G__5893 = 0;
seq__5877 = G__5890;
chunk__5878 = G__5891;
count__5879 = G__5892;
i__5880 = G__5893;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__5877__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__5894 = cljs.core.next.call(null,seq__5877__$1);
var G__5895 = null;
var G__5896 = 0;
var G__5897 = 0;
seq__5877 = G__5894;
chunk__5878 = G__5895;
count__5879 = G__5896;
i__5880 = G__5897;
continue;
}
}
} else
{return null;
}
}
break;
}
};
var G__5885 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__5885__delegate.call(this,elem,class$,classes);};
G__5885.cljs$lang$maxFixedArity = 2;
G__5885.cljs$lang$applyTo = (function (arglist__5898){
var elem = cljs.core.first(arglist__5898);
arglist__5898 = cljs.core.next(arglist__5898);
var class$ = cljs.core.first(arglist__5898);
var classes = cljs.core.rest(arglist__5898);
return G__5885__delegate(elem,class$,classes);
});
G__5885.cljs$core$IFn$_invoke$arity$variadic = G__5885__delegate;
return G__5885;
})()
;
remove_class_BANG_ = function(elem,class$,var_args){
var classes = var_args;
switch(arguments.length){
case 2:
return remove_class_BANG___2.call(this,elem,class$);
default:
return remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,class$, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_class_BANG_.cljs$lang$maxFixedArity = 2;
remove_class_BANG_.cljs$lang$applyTo = remove_class_BANG___3.cljs$lang$applyTo;
remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_class_BANG___2;
remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return remove_class_BANG_;
})()
;
/**
* (toggle-class! elem class) will add-class! if elem does not have class
* and remove-class! otherwise.
* (toggle-class! elem class add?) will add-class! if add? is truthy,
* otherwise it will remove-class!
*/
dommy.attrs.toggle_class_BANG_ = (function() {
var toggle_class_BANG_ = null;
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = dommy.utils.as_str.call(null,class$);var temp__4090__auto___5899 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___5899))
{var class_list_5900 = temp__4090__auto___5899;class_list_5900.toggle(class$__$1);
} else
{toggle_class_BANG_.call(null,elem__$1,class$__$1,!(dommy.attrs.has_class_QMARK_.call(null,elem__$1,class$__$1)));
}
return elem__$1;
});
var toggle_class_BANG___3 = (function (elem,class$,add_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(add_QMARK_)
{dommy.attrs.add_class_BANG_.call(null,elem__$1,class$);
} else
{dommy.attrs.remove_class_BANG_.call(null,elem__$1,class$);
}
return elem__$1;
});
toggle_class_BANG_ = function(elem,class$,add_QMARK_){
switch(arguments.length){
case 2:
return toggle_class_BANG___2.call(this,elem,class$);
case 3:
return toggle_class_BANG___3.call(this,elem,class$,add_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_class_BANG___2;
toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = toggle_class_BANG___3;
return toggle_class_BANG_;
})()
;
dommy.attrs.style_str = (function style_str(x){if(typeof x === 'string')
{return x;
} else
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__5903){var vec__5904 = p__5903;var k = cljs.core.nth.call(null,vec__5904,0,null);var v = cljs.core.nth.call(null,vec__5904,1,null);return [cljs.core.str(dommy.utils.as_str.call(null,k)),cljs.core.str(":"),cljs.core.str(dommy.utils.as_str.call(null,v)),cljs.core.str(";")].join('');
}),x));
}
});
/**
* @param {...*} var_args
*/
dommy.attrs.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (elem,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__5911_5917 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__5912_5918 = null;var count__5913_5919 = 0;var i__5914_5920 = 0;while(true){
if((i__5914_5920 < count__5913_5919))
{var vec__5915_5921 = cljs.core._nth.call(null,chunk__5912_5918,i__5914_5920);var k_5922 = cljs.core.nth.call(null,vec__5915_5921,0,null);var v_5923 = cljs.core.nth.call(null,vec__5915_5921,1,null);style.setProperty(dommy.utils.as_str.call(null,k_5922),v_5923);
{
var G__5924 = seq__5911_5917;
var G__5925 = chunk__5912_5918;
var G__5926 = count__5913_5919;
var G__5927 = (i__5914_5920 + 1);
seq__5911_5917 = G__5924;
chunk__5912_5918 = G__5925;
count__5913_5919 = G__5926;
i__5914_5920 = G__5927;
continue;
}
} else
{var temp__4092__auto___5928 = cljs.core.seq.call(null,seq__5911_5917);if(temp__4092__auto___5928)
{var seq__5911_5929__$1 = temp__4092__auto___5928;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5911_5929__$1))
{var c__4151__auto___5930 = cljs.core.chunk_first.call(null,seq__5911_5929__$1);{
var G__5931 = cljs.core.chunk_rest.call(null,seq__5911_5929__$1);
var G__5932 = c__4151__auto___5930;
var G__5933 = cljs.core.count.call(null,c__4151__auto___5930);
var G__5934 = 0;
seq__5911_5917 = G__5931;
chunk__5912_5918 = G__5932;
count__5913_5919 = G__5933;
i__5914_5920 = G__5934;
continue;
}
} else
{var vec__5916_5935 = cljs.core.first.call(null,seq__5911_5929__$1);var k_5936 = cljs.core.nth.call(null,vec__5916_5935,0,null);var v_5937 = cljs.core.nth.call(null,vec__5916_5935,1,null);style.setProperty(dommy.utils.as_str.call(null,k_5936),v_5937);
{
var G__5938 = cljs.core.next.call(null,seq__5911_5929__$1);
var G__5939 = null;
var G__5940 = 0;
var G__5941 = 0;
seq__5911_5917 = G__5938;
chunk__5912_5918 = G__5939;
count__5913_5919 = G__5940;
i__5914_5920 = G__5941;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var set_style_BANG_ = function (elem,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_style_BANG___delegate.call(this,elem,kvs);};
set_style_BANG_.cljs$lang$maxFixedArity = 1;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__5942){
var elem = cljs.core.first(arglist__5942);
var kvs = cljs.core.rest(arglist__5942);
return set_style_BANG___delegate(elem,kvs);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
dommy.attrs.style = (function style(elem,k){if(cljs.core.truth_(k))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"k","k",-1640531420,null)))].join('')));
}
return (window.getComputedStyle(dommy.template.__GT_node_like.call(null,elem))[cljs.core.name.call(null,k)]);
});
/**
* @param {...*} var_args
*/
dommy.attrs.set_px_BANG_ = (function() { 
var set_px_BANG___delegate = function (elem,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__5949_5955 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__5950_5956 = null;var count__5951_5957 = 0;var i__5952_5958 = 0;while(true){
if((i__5952_5958 < count__5951_5957))
{var vec__5953_5959 = cljs.core._nth.call(null,chunk__5950_5956,i__5952_5958);var k_5960 = cljs.core.nth.call(null,vec__5953_5959,0,null);var v_5961 = cljs.core.nth.call(null,vec__5953_5959,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_5960,[cljs.core.str(v_5961),cljs.core.str("px")].join(''));
{
var G__5962 = seq__5949_5955;
var G__5963 = chunk__5950_5956;
var G__5964 = count__5951_5957;
var G__5965 = (i__5952_5958 + 1);
seq__5949_5955 = G__5962;
chunk__5950_5956 = G__5963;
count__5951_5957 = G__5964;
i__5952_5958 = G__5965;
continue;
}
} else
{var temp__4092__auto___5966 = cljs.core.seq.call(null,seq__5949_5955);if(temp__4092__auto___5966)
{var seq__5949_5967__$1 = temp__4092__auto___5966;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5949_5967__$1))
{var c__4151__auto___5968 = cljs.core.chunk_first.call(null,seq__5949_5967__$1);{
var G__5969 = cljs.core.chunk_rest.call(null,seq__5949_5967__$1);
var G__5970 = c__4151__auto___5968;
var G__5971 = cljs.core.count.call(null,c__4151__auto___5968);
var G__5972 = 0;
seq__5949_5955 = G__5969;
chunk__5950_5956 = G__5970;
count__5951_5957 = G__5971;
i__5952_5958 = G__5972;
continue;
}
} else
{var vec__5954_5973 = cljs.core.first.call(null,seq__5949_5967__$1);var k_5974 = cljs.core.nth.call(null,vec__5954_5973,0,null);var v_5975 = cljs.core.nth.call(null,vec__5954_5973,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_5974,[cljs.core.str(v_5975),cljs.core.str("px")].join(''));
{
var G__5976 = cljs.core.next.call(null,seq__5949_5967__$1);
var G__5977 = null;
var G__5978 = 0;
var G__5979 = 0;
seq__5949_5955 = G__5976;
chunk__5950_5956 = G__5977;
count__5951_5957 = G__5978;
i__5952_5958 = G__5979;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var set_px_BANG_ = function (elem,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_px_BANG___delegate.call(this,elem,kvs);};
set_px_BANG_.cljs$lang$maxFixedArity = 1;
set_px_BANG_.cljs$lang$applyTo = (function (arglist__5980){
var elem = cljs.core.first(arglist__5980);
var kvs = cljs.core.rest(arglist__5980);
return set_px_BANG___delegate(elem,kvs);
});
set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_px_BANG___delegate;
return set_px_BANG_;
})()
;
dommy.attrs.px = (function px(elem,k){var pixels = dommy.attrs.style.call(null,dommy.template.__GT_node_like.call(null,elem),k);if(cljs.core.seq.call(null,pixels))
{return parseInt(pixels);
} else
{return null;
}
});
/**
* Sets dom attributes on and returns `elem`.
* Attributes without values will be set to "true":
* 
* (set-attr! elem :disabled)
* 
* With values, the function takes variadic kv pairs:
* 
* (set-attr! elem :id "some-id"
* :name "some-name")
* @param {...*} var_args
*/
dommy.attrs.set_attr_BANG_ = (function() {
var set_attr_BANG_ = null;
var set_attr_BANG___2 = (function (elem,k){return set_attr_BANG_.call(null,dommy.template.__GT_node_like.call(null,elem),k,"true");
});
var set_attr_BANG___3 = (function (elem,k,v){if(cljs.core.truth_(v))
{if(cljs.core.fn_QMARK_.call(null,v))
{var G__5989 = dommy.template.__GT_node_like.call(null,elem);(G__5989[dommy.utils.as_str.call(null,k)] = v);
return G__5989;
} else
{var G__5990 = dommy.template.__GT_node_like.call(null,elem);G__5990.setAttribute(dommy.utils.as_str.call(null,k),((cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__5990;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__5997__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__5991_5998 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__5992_5999 = null;var count__5993_6000 = 0;var i__5994_6001 = 0;while(true){
if((i__5994_6001 < count__5993_6000))
{var vec__5995_6002 = cljs.core._nth.call(null,chunk__5992_5999,i__5994_6001);var k_6003__$1 = cljs.core.nth.call(null,vec__5995_6002,0,null);var v_6004__$1 = cljs.core.nth.call(null,vec__5995_6002,1,null);set_attr_BANG_.call(null,elem__$1,k_6003__$1,v_6004__$1);
{
var G__6005 = seq__5991_5998;
var G__6006 = chunk__5992_5999;
var G__6007 = count__5993_6000;
var G__6008 = (i__5994_6001 + 1);
seq__5991_5998 = G__6005;
chunk__5992_5999 = G__6006;
count__5993_6000 = G__6007;
i__5994_6001 = G__6008;
continue;
}
} else
{var temp__4092__auto___6009 = cljs.core.seq.call(null,seq__5991_5998);if(temp__4092__auto___6009)
{var seq__5991_6010__$1 = temp__4092__auto___6009;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5991_6010__$1))
{var c__4151__auto___6011 = cljs.core.chunk_first.call(null,seq__5991_6010__$1);{
var G__6012 = cljs.core.chunk_rest.call(null,seq__5991_6010__$1);
var G__6013 = c__4151__auto___6011;
var G__6014 = cljs.core.count.call(null,c__4151__auto___6011);
var G__6015 = 0;
seq__5991_5998 = G__6012;
chunk__5992_5999 = G__6013;
count__5993_6000 = G__6014;
i__5994_6001 = G__6015;
continue;
}
} else
{var vec__5996_6016 = cljs.core.first.call(null,seq__5991_6010__$1);var k_6017__$1 = cljs.core.nth.call(null,vec__5996_6016,0,null);var v_6018__$1 = cljs.core.nth.call(null,vec__5996_6016,1,null);set_attr_BANG_.call(null,elem__$1,k_6017__$1,v_6018__$1);
{
var G__6019 = cljs.core.next.call(null,seq__5991_6010__$1);
var G__6020 = null;
var G__6021 = 0;
var G__6022 = 0;
seq__5991_5998 = G__6019;
chunk__5992_5999 = G__6020;
count__5993_6000 = G__6021;
i__5994_6001 = G__6022;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var G__5997 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__5997__delegate.call(this,elem,k,v,kvs);};
G__5997.cljs$lang$maxFixedArity = 3;
G__5997.cljs$lang$applyTo = (function (arglist__6023){
var elem = cljs.core.first(arglist__6023);
arglist__6023 = cljs.core.next(arglist__6023);
var k = cljs.core.first(arglist__6023);
arglist__6023 = cljs.core.next(arglist__6023);
var v = cljs.core.first(arglist__6023);
var kvs = cljs.core.rest(arglist__6023);
return G__5997__delegate(elem,k,v,kvs);
});
G__5997.cljs$core$IFn$_invoke$arity$variadic = G__5997__delegate;
return G__5997;
})()
;
set_attr_BANG_ = function(elem,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 2:
return set_attr_BANG___2.call(this,elem,k);
case 3:
return set_attr_BANG___3.call(this,elem,k,v);
default:
return set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic(elem,k,v, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_attr_BANG_.cljs$lang$maxFixedArity = 3;
set_attr_BANG_.cljs$lang$applyTo = set_attr_BANG___4.cljs$lang$applyTo;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = set_attr_BANG___2;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = set_attr_BANG___3;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic;
return set_attr_BANG_;
})()
;
/**
* @param {...*} var_args
*/
dommy.attrs.remove_attr_BANG_ = (function() {
var remove_attr_BANG_ = null;
var remove_attr_BANG___2 = (function (elem,k){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",1108647146),null,new cljs.core.Keyword(null,"classes","classes",1867525016),null], null), null).call(null,k)))
{elem__$1.className = "";
} else
{elem__$1.removeAttribute(dommy.utils.as_str.call(null,k));
}
return elem__$1;
});
var remove_attr_BANG___3 = (function() { 
var G__6032__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__6028_6033 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__6029_6034 = null;var count__6030_6035 = 0;var i__6031_6036 = 0;while(true){
if((i__6031_6036 < count__6030_6035))
{var k_6037__$1 = cljs.core._nth.call(null,chunk__6029_6034,i__6031_6036);remove_attr_BANG_.call(null,elem__$1,k_6037__$1);
{
var G__6038 = seq__6028_6033;
var G__6039 = chunk__6029_6034;
var G__6040 = count__6030_6035;
var G__6041 = (i__6031_6036 + 1);
seq__6028_6033 = G__6038;
chunk__6029_6034 = G__6039;
count__6030_6035 = G__6040;
i__6031_6036 = G__6041;
continue;
}
} else
{var temp__4092__auto___6042 = cljs.core.seq.call(null,seq__6028_6033);if(temp__4092__auto___6042)
{var seq__6028_6043__$1 = temp__4092__auto___6042;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6028_6043__$1))
{var c__4151__auto___6044 = cljs.core.chunk_first.call(null,seq__6028_6043__$1);{
var G__6045 = cljs.core.chunk_rest.call(null,seq__6028_6043__$1);
var G__6046 = c__4151__auto___6044;
var G__6047 = cljs.core.count.call(null,c__4151__auto___6044);
var G__6048 = 0;
seq__6028_6033 = G__6045;
chunk__6029_6034 = G__6046;
count__6030_6035 = G__6047;
i__6031_6036 = G__6048;
continue;
}
} else
{var k_6049__$1 = cljs.core.first.call(null,seq__6028_6043__$1);remove_attr_BANG_.call(null,elem__$1,k_6049__$1);
{
var G__6050 = cljs.core.next.call(null,seq__6028_6043__$1);
var G__6051 = null;
var G__6052 = 0;
var G__6053 = 0;
seq__6028_6033 = G__6050;
chunk__6029_6034 = G__6051;
count__6030_6035 = G__6052;
i__6031_6036 = G__6053;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var G__6032 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__6032__delegate.call(this,elem,k,ks);};
G__6032.cljs$lang$maxFixedArity = 2;
G__6032.cljs$lang$applyTo = (function (arglist__6054){
var elem = cljs.core.first(arglist__6054);
arglist__6054 = cljs.core.next(arglist__6054);
var k = cljs.core.first(arglist__6054);
var ks = cljs.core.rest(arglist__6054);
return G__6032__delegate(elem,k,ks);
});
G__6032.cljs$core$IFn$_invoke$arity$variadic = G__6032__delegate;
return G__6032;
})()
;
remove_attr_BANG_ = function(elem,k,var_args){
var ks = var_args;
switch(arguments.length){
case 2:
return remove_attr_BANG___2.call(this,elem,k);
default:
return remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,k, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_attr_BANG_.cljs$lang$maxFixedArity = 2;
remove_attr_BANG_.cljs$lang$applyTo = remove_attr_BANG___3.cljs$lang$applyTo;
remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_attr_BANG___2;
remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return remove_attr_BANG_;
})()
;
dommy.attrs.attr = (function attr(elem,k){if(cljs.core.truth_(k))
{return dommy.template.__GT_node_like.call(null,elem).getAttribute(dommy.utils.as_str.call(null,k));
} else
{return null;
}
});
dommy.attrs.toggle_attr_BANG_ = (function() {
var toggle_attr_BANG_ = null;
var toggle_attr_BANG___2 = (function (elem,k){return toggle_attr_BANG_.call(null,elem,k,cljs.core.boolean$.call(null,dommy.attrs.attr.call(null,elem,k)));
});
var toggle_attr_BANG___3 = (function (elem,k,add_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(add_QMARK_)
{return dommy.attrs.set_attr_BANG_.call(null,elem__$1,k);
} else
{return dommy.attrs.remove_attr_BANG_.call(null,elem__$1,k);
}
});
toggle_attr_BANG_ = function(elem,k,add_QMARK_){
switch(arguments.length){
case 2:
return toggle_attr_BANG___2.call(this,elem,k);
case 3:
return toggle_attr_BANG___3.call(this,elem,k,add_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_attr_BANG___2;
toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = toggle_attr_BANG___3;
return toggle_attr_BANG_;
})()
;
dommy.attrs.hidden_QMARK_ = (function hidden_QMARK_(elem){return ("none" === dommy.template.__GT_node_like.call(null,elem).style.display);
});
/**
* Display or hide the given `elem`. Takes an optional boolean `show?`
* indicating whether to show or hide `elem`.
*/
dommy.attrs.toggle_BANG_ = (function() {
var toggle_BANG_ = null;
var toggle_BANG___1 = (function (elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);toggle_BANG_.call(null,elem__$1,dommy.attrs.hidden_QMARK_.call(null,elem__$1));
return elem__$1;
});
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__6056 = dommy.template.__GT_node_like.call(null,elem);G__6056.style.display = ((show_QMARK_)?"":"none");
return G__6056;
});
toggle_BANG_ = function(elem,show_QMARK_){
switch(arguments.length){
case 1:
return toggle_BANG___1.call(this,elem);
case 2:
return toggle_BANG___2.call(this,elem,show_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = toggle_BANG___1;
toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_BANG___2;
return toggle_BANG_;
})()
;
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__6058 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__6058,false);
return G__6058;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__6060 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__6060,true);
return G__6060;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){var r = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"top","top",1014019271),r.top,new cljs.core.Keyword(null,"bottom","bottom",3925642653),r.bottom,new cljs.core.Keyword(null,"left","left",1017222009),r.left,new cljs.core.Keyword(null,"right","right",1122416014),r.right,new cljs.core.Keyword(null,"width","width",1127031096),r.width,new cljs.core.Keyword(null,"height","height",4087841945),r.height], null);
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var top = new cljs.core.Keyword(null,"top","top",1014019271).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});
