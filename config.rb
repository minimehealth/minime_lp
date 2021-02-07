# Activate and configure extensions
# https://middlemanapp.com/advanced/configuration/#configuring-extensions

activate :autoprefixer do |prefix|
  prefix.browsers = "last 2 versions"
end

activate :livereload
activate :directory_indexes  #Removes .html from file
# activate :sprockets
# activate :i18n, langs: [:de]

# activate :external_pipeline,
#   name: :webpack,
#   command: build? ? './node_modules/webpack/bin/webpack.js --bail' : './node_modules/webpack/bin/webpack.js --watch --d',
#   source: ".tmp/dist",
#   latency: 1,

# Layouts
# https://middlemanapp.com/basics/layouts/

# Per-page layout changes
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# With alternative layout
# page '/path/to/file.html', layout: 'other_layout'

# Proxy pages
# https://middlemanapp.com/advanced/dynamic-pages/

# proxy(
#   '/this-page-has-no-template.html',
#   '/template-file.html',
#   locals: {
#     which_fake_page: 'Rendering a fake page with a local variable'
#   },
# )

# Helpers
# Methods defined in the helpers block are available in templates
# https://middlemanapp.com/basics/helper-methods/

# helpers do
#   def some_helper
#     'Helping'
#   end
# end

activate :s3_sync do |s3_sync|
  s3_sync.bucket                = 'minime.health'
  s3_sync.region                = 'eu-central-1'
  s3_sync.aws_access_key_id     = ENV["AWS_ACCESS_KEY_ID"]
  s3_sync.aws_secret_access_key = ENV["AWS_SECRET_ACCESS_KEY"]
end

# Build-specific configuration
# https://middlemanapp.com/advanced/configuration/#environment-specific-settings

configure :build do
  activate :minify_css
  activate :minify_javascript
end

# #------------------------------------------------------------------------
# # Configuration variables specific to each project
# #------------------------------------------------------------------------
# SITE_NAME                       = 'minime'
# URL_ROOT                        = 'https://minime.health'
# AWS_BUCKET                      = 'minime-lp'
# AWS_CLOUDFRONT_DISTRIBUTION_ID  = 'xxxxxxxxxxxx'

# activate :directory_indexes  #Removes .html from file

# AWS_ACCESS_KEY= ENV['AWS_ACCESS_KEY']
# AWS_SECRET= ENV['AWS_SECRET']

# # https://github.com/fredjean/middleman-s3_sync
# activate :s3_sync do |s3_sync|
#   s3_sync.bucket                     = AWS_BUCKET # The name of the S3 bucket you are targeting. This is globally unique.
#   # s3_sync.region                     = 'us-east-1'     # The AWS region for your bucket. (S3 no longer requires this, dummy input?)
#   s3_sync.aws_access_key_id          = AWS_ACCESS_KEY
#   s3_sync.aws_secret_access_key      = AWS_SECRET
#   s3_sync.delete                     = false # We delete stray files by default.
#   # s3_sync.after_build                = false # We do not chain after the build step by default.
#   # s3_sync.prefer_gzip                = true
#   # s3_sync.path_style                 = true
#   # s3_sync.reduced_redundancy_storage = false
#   # s3_sync.acl                        = 'public-read'
#   # s3_sync.encryption                 = false
#   # s3_sync.prefix                     = ''
#   # s3_sync.version_bucket             = false
# end

# # https://github.com/andrusha/middleman-cloudfront
# activate :cloudfront do |cf|
#   cf.access_key_id                    = AWS_ACCESS_KEY
#   cf.secret_access_key                = AWS_SECRET
#   cf.distribution_id                  = AWS_CLOUDFRONT_DISTRIBUTION_ID
#   # cf.filter = /\.html$/i
# end

