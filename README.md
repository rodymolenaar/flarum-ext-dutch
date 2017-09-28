# Dutch Language Pack for [Flarum](http://flarum.org/)

Extension to localize the Flarum forum software and its official extensions into Dutch.

## Information

### Compatibility

This language pack is compatible with:

- [Flarum](https://github.com/flarum/core) (Core) v0.1.0-beta.7
  - Bundled extensions:
	  - [Akismet](https://github.com/flarum/flarum-ext-akismet) v0.1.0-beta.6
	  - [Approval](https://github.com/flarum/flarum-ext-approval) v0.1.0-beta.7
	  - [Facebook Auth](https://github.com/flarum/flarum-ext-auth-facebook) v0.1.0-beta.6
	  - [Flags](https://github.com/flarum/flarum-ext-flags) v0.1.0-beta.7
	  - [Github Auth](https://github.com/flarum/flarum-ext-auth-github) v0.1.0-beta.6
	  - [Likes](https://github.com/flarum/flarum-ext-likes) v0.1.0-beta.6
	  - [Lock](https://github.com/flarum/flarum-ext-lock) v0.1.0-beta.7
	  - [Mentions](https://github.com/flarum/flarum-ext-mentions) v0.1.0-beta.7
	  - [Pusher](https://github.com/flarum/flarum-ext-pusher) v0.1.0-beta.6
	  - [Sticky](https://github.com/flarum/flarum-ext-sticky) v0.1.0-beta.7
	  - [Subscriptions](https://github.com/flarum/flarum-ext-subscriptions) v0.1.0-beta.6
	  - [Suspend](https://github.com/flarum/flarum-ext-suspend) v0.1.0-beta.7
	  - [Tags](https://github.com/flarum/flarum-ext-tags) v0.1.0-beta.8
	  - [Twitter Auth](https://github.com/flarum/flarum-ext-auth-twitter) v0.1.0-beta.6
  - Bundled libraries:
      - [Laravel](https://github.com/laravel/laravel)'s Validation [5.5.0](https://github.com/laravel/laravel/releases/tag/v5.1.11)
      - [Moment.js](https://github.com/moment/moment) [2.18.1](https://github.com/moment/moment/releases/tag/2.18.1)

## Installation

### Using Composer

Flarum uses Composer to manage its dependencies and extensions. The Dutch language pack, available [on Packagist](https://packagist.org/packages/rodymolenaar/flarum-ext-dutch), is also manageable with Composer. Make sure that [Composer](https://getcomposer.org/) is installed on your machine, then run the following command in the location where Flarum is installed:

```
composer require rodymolenaar/flarum-ext-dutch
```

### Manual Installation

You can also manually ADD the Dutch language pack as Flarum's dependency. Open the *composer.json* file located at the root of your Flarum installation (not the language pack one!) with [a text editor](https://en.wikipedia.org/wiki/Comparison_of_text_editors), then add to the list of Flarum's dependencies (which are listed below the `"require"` property) the following line in a new line:

```
        "rodymolenaar/flarum-ext-dutch": "^1.0"
```

### License

Released under the MIT License. Please see the [LICENSE](https://github.com/rodymolenaar/Flarum-nl-NL/blob/master/LICENSE) file.

## Contributing

Thank you a lot to wish to contribute. It means a lot. Using and enjoying the localization is already a huge support. Best other ways to contribute are, among other things:

- Open [issues](https://github.com/rodymolenaar/Flarum-nl-NL/issues) on GitHub. Because the localization will be better with your feedbacks.
- Open pull requests on GitHub. Submit fixes and improvements and be listed as [contributor](https://github.com/rodymolenaar/Flarum-nl-NL/graphs/contributors)!
- [Join the discussion about the extension](http://discuss.flarum.org/d/758-dutch-translation) on the Flarum community.
- [Follow me on Twitter](https://twitter.com/rodymolenaar).
