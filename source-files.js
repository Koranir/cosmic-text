var sourcesIndex = JSON.parse('{\
"aliasable":["",[],["boxed.rs","lib.rs","mut_ref.rs","string.rs","vec.rs"]],\
"bitflags":["",[],["lib.rs"]],\
"bytemuck":["",[],["allocation.rs","anybitpattern.rs","checked.rs","contiguous.rs","internal.rs","lib.rs","no_uninit.rs","offset_of.rs","pod.rs","pod_in_option.rs","transparent.rs","zeroable.rs","zeroable_in_option.rs"]],\
"cosmic_text":["",[["edit",[],["editor.rs","mod.rs"]],["font",[["fallback",[],["mod.rs","unix.rs"]],["system",[],["mod.rs","std.rs"]]],["mod.rs"]]],["attrs.rs","buffer.rs","buffer_line.rs","cache.rs","layout.rs","lib.rs","shape.rs","swash.rs"]],\
"fontdb":["",[],["lib.rs"]],\
"libc":["",[["unix",[["linux_like",[["linux",[["arch",[["generic",[],["mod.rs"]]],["mod.rs"]],["gnu",[["b64",[["x86_64",[],["align.rs","mod.rs","not_x32.rs"]]],["mod.rs"]]],["align.rs","mod.rs"]]],["align.rs","mod.rs","non_exhaustive.rs"]]],["mod.rs"]]],["align.rs","mod.rs"]]],["fixed_width_ints.rs","lib.rs","macros.rs"]],\
"libm":["",[["math",[],["acos.rs","acosf.rs","acosh.rs","acoshf.rs","asin.rs","asinf.rs","asinh.rs","asinhf.rs","atan.rs","atan2.rs","atan2f.rs","atanf.rs","atanh.rs","atanhf.rs","cbrt.rs","cbrtf.rs","ceil.rs","ceilf.rs","copysign.rs","copysignf.rs","cos.rs","cosf.rs","cosh.rs","coshf.rs","erf.rs","erff.rs","exp.rs","exp10.rs","exp10f.rs","exp2.rs","exp2f.rs","expf.rs","expm1.rs","expm1f.rs","expo2.rs","fabs.rs","fabsf.rs","fdim.rs","fdimf.rs","fenv.rs","floor.rs","floorf.rs","fma.rs","fmaf.rs","fmax.rs","fmaxf.rs","fmin.rs","fminf.rs","fmod.rs","fmodf.rs","frexp.rs","frexpf.rs","hypot.rs","hypotf.rs","ilogb.rs","ilogbf.rs","j0.rs","j0f.rs","j1.rs","j1f.rs","jn.rs","jnf.rs","k_cos.rs","k_cosf.rs","k_expo2.rs","k_expo2f.rs","k_sin.rs","k_sinf.rs","k_tan.rs","k_tanf.rs","ldexp.rs","ldexpf.rs","lgamma.rs","lgamma_r.rs","lgammaf.rs","lgammaf_r.rs","log.rs","log10.rs","log10f.rs","log1p.rs","log1pf.rs","log2.rs","log2f.rs","logf.rs","mod.rs","modf.rs","modff.rs","nextafter.rs","nextafterf.rs","pow.rs","powf.rs","rem_pio2.rs","rem_pio2_large.rs","rem_pio2f.rs","remainder.rs","remainderf.rs","remquo.rs","remquof.rs","rint.rs","rintf.rs","round.rs","roundf.rs","scalbn.rs","scalbnf.rs","sin.rs","sincos.rs","sincosf.rs","sinf.rs","sinh.rs","sinhf.rs","sqrt.rs","sqrtf.rs","tan.rs","tanf.rs","tanh.rs","tanhf.rs","tgamma.rs","tgammaf.rs","trunc.rs","truncf.rs"]]],["lib.rs","libm_helper.rs"]],\
"log":["",[],["lib.rs","macros.rs"]],\
"memmap2":["",[],["advice.rs","lib.rs","unix.rs"]],\
"rangemap":["",[],["inclusive_map.rs","inclusive_set.rs","lib.rs","map.rs","range_wrapper.rs","set.rs","std_ext.rs"]],\
"rustybuzz":["",[["aat",[],["extended_kerning.rs","feature_mappings.rs","feature_selector.rs","map.rs","metamorphosis.rs","mod.rs","tracking.rs"]],["complex",[],["arabic.rs","arabic_table.rs","hangul.rs","hebrew.rs","indic.rs","indic_machine.rs","indic_table.rs","khmer.rs","khmer_machine.rs","mod.rs","myanmar.rs","myanmar_machine.rs","thai.rs","universal.rs","universal_machine.rs","universal_table.rs","vowel_constraints.rs"]],["ot",[],["apply.rs","contextual.rs","feature.rs","kerning.rs","layout.rs","map.rs","matching.rs","mod.rs","position.rs","substitute.rs"]]],["buffer.rs","common.rs","face.rs","fallback.rs","glyph_set.rs","lib.rs","normalize.rs","plan.rs","shape.rs","tag.rs","tag_table.rs","text_parser.rs","unicode.rs","unicode_norm.rs"]],\
"slotmap":["",[],["basic.rs","dense.rs","hop.rs","lib.rs","secondary.rs"]],\
"smallvec":["",[],["lib.rs"]],\
"swash":["",[["feature",[],["aat.rs","at.rs","mod.rs","util.rs"]],["internal",[],["aat.rs","at.rs","cmap.rs","fixed.rs","glyf.rs","head.rs","mod.rs","parse.rs","var.rs","vorg.rs","xmtx.rs"]],["scale",[["bitmap",[],["mod.rs","png.rs"]],["cff",[],["cff.rs","hint.rs","mod.rs"]],["glyf",[],["cache.rs","hint.rs","mod.rs","proxy.rs","scale.rs","var.rs"]]],["color.rs","image.rs","mod.rs","outline.rs","proxy.rs"]],["shape",[],["aat.rs","at.rs","buffer.rs","cache.rs","cluster.rs","engine.rs","feature.rs","mod.rs","partition.rs"]],["text",[["cluster",[],["char.rs","cluster.rs","complex.rs","info.rs","mod.rs","myanmar.rs","parse.rs","simple.rs","token.rs"]]],["analyze.rs","compose.rs","lang.rs","lang_data.rs","mod.rs","unicode.rs","unicode_data.rs"]]],["attributes.rs","cache.rs","charmap.rs","font.rs","lib.rs","macros.rs","metrics.rs","palette.rs","setting.rs","strike.rs","string.rs","tag.rs","variation.rs"]],\
"sys_locale":["",[],["lib.rs","unix.rs"]],\
"tinyvec":["",[["array",[],["generated_impl.rs"]]],["array.rs","arrayvec.rs","arrayvec_drain.rs","lib.rs","slicevec.rs","tinyvec.rs"]],\
"tinyvec_macros":["",[],["lib.rs"]],\
"ttf_parser":["",[["ggg",[],["chained_context.rs","context.rs","feature_variations.rs","layout_table.rs","lookup.rs","mod.rs"]],["tables",[["cff",[],["argstack.rs","cff1.rs","cff2.rs","charset.rs","charstring.rs","dict.rs","encoding.rs","index.rs","mod.rs","std_names.rs"]],["cmap",[],["format0.rs","format10.rs","format12.rs","format13.rs","format14.rs","format2.rs","format4.rs","format6.rs","mod.rs"]]],["ankr.rs","avar.rs","cbdt.rs","cblc.rs","feat.rs","fvar.rs","gdef.rs","glyf.rs","gpos.rs","gsub.rs","gvar.rs","head.rs","hhea.rs","hmtx.rs","hvar.rs","kern.rs","kerx.rs","loca.rs","math.rs","maxp.rs","mod.rs","morx.rs","mvar.rs","name.rs","os2.rs","post.rs","sbix.rs","svg.rs","trak.rs","vhea.rs","vorg.rs"]]],["aat.rs","language.rs","lib.rs","parser.rs","var_store.rs"]],\
"unicode_bidi":["",[["char_data",[],["mod.rs","tables.rs"]]],["data_source.rs","deprecated.rs","explicit.rs","format_chars.rs","implicit.rs","level.rs","lib.rs","prepare.rs"]],\
"unicode_bidi_mirroring":["",[],["lib.rs"]],\
"unicode_ccc":["",[],["lib.rs"]],\
"unicode_general_category":["",[],["category.rs","lib.rs","tables.rs"]],\
"unicode_linebreak":["",[],["lib.rs","shared.rs"]],\
"unicode_script":["",[],["lib.rs","tables.rs"]],\
"unicode_segmentation":["",[],["grapheme.rs","lib.rs","sentence.rs","tables.rs","word.rs"]],\
"yazi":["",[],["decode.rs","encode.rs","lib.rs"]],\
"zeno":["",[],["command.rs","geometry.rs","hit_test.rs","lib.rs","mask.rs","path_builder.rs","path_data.rs","raster.rs","scratch.rs","segment.rs","stroke.rs","style.rs","svg_parser.rs","traversal.rs"]]\
}');
createSourceSidebar();
