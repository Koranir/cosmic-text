(function() {var implementors = {
"rangemap":[["impl&lt;K, V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;(<a class=\"struct\" href=\"https://doc.rust-lang.org/1.67.1/core/ops/range/struct.RangeInclusive.html\" title=\"struct core::ops::range::RangeInclusive\">RangeInclusive</a>&lt;K&gt;, V)&gt; for <a class=\"struct\" href=\"rangemap/inclusive_map/struct.RangeInclusiveMap.html\" title=\"struct rangemap::inclusive_map::RangeInclusiveMap\">RangeInclusiveMap</a>&lt;K, V&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"rangemap/trait.StepLite.html\" title=\"trait rangemap::StepLite\">StepLite</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</span>"],["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.67.1/core/ops/range/struct.RangeInclusive.html\" title=\"struct core::ops::range::RangeInclusive\">RangeInclusive</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"rangemap/inclusive_set/struct.RangeInclusiveSet.html\" title=\"struct rangemap::inclusive_set::RangeInclusiveSet\">RangeInclusiveSet</a>&lt;T&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"rangemap/trait.StepLite.html\" title=\"trait rangemap::StepLite\">StepLite</a>,</span>"],["impl&lt;K, V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;(<a class=\"struct\" href=\"https://doc.rust-lang.org/1.67.1/core/ops/range/struct.Range.html\" title=\"struct core::ops::range::Range\">Range</a>&lt;K&gt;, V)&gt; for <a class=\"struct\" href=\"rangemap/map/struct.RangeMap.html\" title=\"struct rangemap::map::RangeMap\">RangeMap</a>&lt;K, V&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</span>"],["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.67.1/core/ops/range/struct.Range.html\" title=\"struct core::ops::range::Range\">Range</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"rangemap/set/struct.RangeSet.html\" title=\"struct rangemap::set::RangeSet\">RangeSet</a>&lt;T&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</span>"]],
"rustybuzz":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"struct\" href=\"rustybuzz/struct.SerializeFlags.html\" title=\"struct rustybuzz::SerializeFlags\">SerializeFlags</a>&gt; for <a class=\"struct\" href=\"rustybuzz/struct.SerializeFlags.html\" title=\"struct rustybuzz::SerializeFlags\">SerializeFlags</a>"]],
"slotmap":[["impl&lt;K:&nbsp;<a class=\"trait\" href=\"slotmap/trait.Key.html\" title=\"trait slotmap::Key\">Key</a>, V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.67.1/core/primitive.tuple.html\">(K, V)</a>&gt; for <a class=\"struct\" href=\"slotmap/struct.SecondaryMap.html\" title=\"struct slotmap::SecondaryMap\">SecondaryMap</a>&lt;K, V&gt;"]],
"smallvec":[["impl&lt;A:&nbsp;<a class=\"trait\" href=\"smallvec/trait.Array.html\" title=\"trait smallvec::Array\">Array</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.1/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;&lt;A as <a class=\"trait\" href=\"smallvec/trait.Array.html\" title=\"trait smallvec::Array\">Array</a>&gt;::<a class=\"associatedtype\" href=\"smallvec/trait.Array.html#associatedtype.Item\" title=\"type smallvec::Array::Item\">Item</a>&gt; for <a class=\"struct\" href=\"smallvec/struct.SmallVec.html\" title=\"struct smallvec::SmallVec\">SmallVec</a>&lt;A&gt;"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()