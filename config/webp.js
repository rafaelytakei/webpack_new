const imagemin = require( "imagemin-keep-folder" )
const webp = require( "imagemin-webp" )

imagemin( ['src/assets/images/**/*.{jpg,png}'], {
    plugins: [
        webp( { quality: 100 } )
    ]
} )