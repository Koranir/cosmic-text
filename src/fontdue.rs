use core::fmt::Debug;

use crate::{CacheKey, Color, FontSystem, HashMap};

fn fontdue_image(
    font_system: &mut FontSystem,
    cache_key: CacheKey,
) -> Option<(fontdue::Metrics, Vec<u8>)> {
    let font = match font_system.get_font(cache_key.font_id) {
        Some(some) => some,
        None => {
            log::warn!("did not find font {:?}", cache_key.font_id);
            return None;
        }
    };

    Some(
        // TODO: Expose fontdue's text offsets
        font.fontdue()
            .rasterize_indexed(cache_key.glyph_id, f32::from_bits(cache_key.font_size_bits)),
    )
}

pub struct FontdueCache {
    cache: HashMap<CacheKey, Option<(fontdue::Metrics, Vec<u8>)>>,
}

impl Debug for FontdueCache {
    fn fmt(&self, f: &mut core::fmt::Formatter<'_>) -> core::fmt::Result {
        f.pad("FontdueCache { .. }")
    }
}

impl FontdueCache {
    pub fn new() -> Self {
        Self {
            cache: HashMap::default(),
        }
    }

    pub fn get_data_uncached(
        &self,
        font_system: &mut FontSystem,
        cache_key: CacheKey,
    ) -> Option<(fontdue::Metrics, Vec<u8>)> {
        fontdue_image(font_system, cache_key)
    }

    pub fn get_data(
        &mut self,
        font_system: &mut FontSystem,
        cache_key: CacheKey,
    ) -> &Option<(fontdue::Metrics, Vec<u8>)> {
        self.cache
            .entry(cache_key)
            .or_insert_with(|| fontdue_image(font_system, cache_key))
    }

    pub fn with_pixels<F: FnMut(i32, i32, Color)>(
        &mut self,
        font_system: &mut FontSystem,
        cache_key: CacheKey,
        base: Color,
        mut f: F,
    ) {
        if let Some((metrics, data)) = self.get_data(font_system, cache_key) {
            let x = metrics.xmin;
            let y = -(metrics.ymin + metrics.height as i32);

            let mut i = 0;
            for off_y in 0..metrics.height as i32 {
                for off_x in 0..metrics.width as i32 {
                    //TODO: blend base alpha?
                    f(
                        x + off_x,
                        y + off_y,
                        Color(((data[i] as u32) << 24) | base.0 & 0xFF_FF_FF),
                    );
                    i += 1;
                }
            }
        }
    }
}

impl crate::backend::Backend for FontdueCache {
    fn with_pixels<F: FnMut(i32, i32, Color)>(
        &mut self,
        font_system: &mut FontSystem,
        cache_key: CacheKey,
        base: Color,
        f: F,
    ) {
        self.with_pixels(font_system, cache_key, base, f);
    }
}
