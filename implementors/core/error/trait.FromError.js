(function() {var implementors = {};
implementors['rustc-serialize'] = ["<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/error/trait.FromError.html' title='core::error::FromError'>FromError</a>&lt;<a class='struct' href='http://doc.rust-lang.org/nightly/core/fmt/struct.Error.html' title='core::fmt::Error'>Error</a>&gt; for <a class='enum' href='rustc-serialize/json/enum.EncoderError.html' title='rustc-serialize::json::EncoderError'>EncoderError</a>",];
implementors['hyper'] = ["<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/error/trait.FromError.html' title='core::error::FromError'>FromError</a>&lt;<a class='struct' href='http://doc.rust-lang.org/nightly/std/io/error/struct.Error.html' title='std::io::error::Error'>IoError</a>&gt; for <a class='enum' href='hyper/enum.HttpError.html' title='hyper::HttpError'>HttpError</a>","<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/error/trait.FromError.html' title='core::error::FromError'>FromError</a>&lt;<a class='enum' href='url/parser/enum.ParseError.html' title='url::parser::ParseError'>ParseError</a>&gt; for <a class='enum' href='hyper/enum.HttpError.html' title='hyper::HttpError'>HttpError</a>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
