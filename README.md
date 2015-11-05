# Dutch Language Pack for [Flarum](http://flarum.org/)

Extension to localize the Flarum forum software and its official extensions into Dutch.

## Information

### Compatibility

This language pack is compatible with:

- [Flarum](https://github.com/flarum/core) (Core) v0.1.0-beta.4
  - Bundled extensions:
	  - [Flags](https://github.com/flarum/flags) v0.1.0-beta.4
	  - [Likes](https://github.com/flarum/likes) v0.1.0-beta.3
	  - [Lock](https://github.com/flarum/lock) v0.1.0-beta.3
	  - [Mentions](https://github.com/flarum/mentions) v0.1.0-beta.3
	  - [Pusher](https://github.com/flarum/pusher) v0.1.0-beta.3
	  - [Reports](https://github.com/flarum/reports) v0.1.0-beta.4
	  - [Sticky](https://github.com/flarum/sticky) v0.1.0-beta.3
	  - [Subscriptions](https://github.com/flarum/subscriptions) v0.1.0-beta.4
  	- [Tags](https://github.com/flarum/tags) v0.1.0-beta.4
  - Bundled libraries:
      - [Laravel](https://github.com/laravel/laravel)'s Validation [5.1.11](https://github.com/laravel/laravel/releases/tag/v5.1.11)
      - [Moment.js](https://github.com/moment/moment) [2.10.6](https://github.com/moment/moment/releases/tag/2.10.6)

## Installation

### Using Composer

Flarum uses Composer to manage its dependencies and extensions. The Dutch language pack, available [on Packagist](https://packagist.org/packages/rodymol123/dutch), is also manageable with Composer. Make sure that [Composer](https://getcomposer.org/) is installed on your machine, then run the following command in the location where Flarum is installed:

```
composer require rodymol123/dutch
```

### Manual Installation

1. Download [the latest stable release](https://github.com/rodymol123/Flarum-nl-NL/releases) or [the latest development version](https://github.com/rodymol123/Flarum-nl-NL/archive/master.zip).
2. Unpack the downloaded archive with [a file archiver](https://en.wikipedia.org/wiki/Comparison_of_file_archivers).
3. Log in to your server via [FTP](https://en.wikipedia.org/wiki/File_Transfer_Protocol), [SSH](https://en.wikipedia.org/wiki/Secure_Shell) or your provider's control panel.
4. Navigate to the *extensions/* directory of your Flarum installation.
5. Create a *rodymol123-dutch/* subdirectory into it.
6. Upload all the content in the unpacked folder to this subdirectory.

It's optional, but you can also add manually the Dutch language pack as Flarum's dependency. It allows you to automatically update the Dutch language pack update Flarum's dependencies by using Composer. Open [a text editor](https://en.wikipedia.org/wiki/Comparison_of_text_editors) the *composer.json* file located at the root of your Flarum installation (not the language pack one!) with a texteditor, then add to the list of Flarum's dependencies (which are listed below the `"require"` property) the following line in a new line:

```
        "rodymol123/dutch": "^1.0"
```

Note that you must add a colon at the end of this line if it is the last item of the dependency list, else it will stop the execution due to a parsing error.

### License

Released under the MIT License. Please see the [LICENSE](https://github.com/rodymol123/Flarum-nl-NL/blob/master/LICENSE) file.

## Contributing

Thank you a lot to wish to contribute. It means a lot. Using and enjoying the localization is already a huge support. Best other ways to contribute are, among other things:

- Open [issues](https://github.com/rodymol123/Flarum-nl-NL/issues) on GitHub. Because the localization will be better with your feedbacks.
- Open pull requests on GitHub. Submit fixes and improvements and be listed as [contributor](https://github.com/rodymol123/Flarum-nl-NL/graphs/contributors)!
- [Join the discussion about the extension](http://discuss.flarum.org/d/758-dutch-translation) on the Flarum community.
- [Follow me on Twitter](https://twitter.com/rodymolenaar).
