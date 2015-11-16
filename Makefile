
#Build JS / CSS

#JS entry point
SOURCE_APP = ./src/app/app.js
SOURCE_BG = ./src/app/background.js
SOURCE_STYL = ./src/stylus/base.styl

#JS exit point
TARGET_APP = ./public/javascripts/app.min.js
TARGET_BG = ./public/javascripts/background.min.js
TARGET_STYL = ./public/styles/style.css -w -c

#JS transforms
TRANSFORMS = babelify

#Binaries
WATCHIFY = ./node_modules/.bin/watchify
STYLUS = ./node_modules/.bin/stylus

watchjs:
	$(WATCHIFY) $(SOURCE_APP) -t $(TRANSFORMS) -o $(TARGET_APP) --verbose \
	& $(WATCHIFY) $(SOURCE_BG) -t $(TRANSFORMS) -o $(TARGET_BG) --verbose
	
watchcss:
	$(STYLUS) $(SOURCE_STYL) -o  $(TARGET_STYL) -w -c

dev:
	make watchjs \
	& make watchcss