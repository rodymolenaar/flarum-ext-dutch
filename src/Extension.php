<?php
/*
 * This file is part of Flarum.
 *
 * (c) Toby Zerner <toby.zerner@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Holland;

use Flarum\Support\Extension as BaseExtension;
use Illuminate\Events\Dispatcher;
use Flarum\Events\RegisterLocales;

class Extension extends BaseExtension
{
    public function listen(Dispatcher $events)
    {
        $events->listen(RegisterLocales::class, function (RegisterLocales $event) {
            $event->addLocale('nl', 'Nederlands');
            $event->addJsFile('nl', __DIR__.'/../locale/core.js');
            $event->addConfig('nl', __DIR__.'/../locale/core.php');
            $event->addTranslations('nl', __DIR__.'/../locale/core.yml');
            $event->addTranslations('nl', __DIR__.'/../locale/flags.yml');
            $event->addTranslations('nl', __DIR__.'/../locale/likes.yml');
            $event->addTranslations('nl', __DIR__.'/../locale/lock.yml');
            $event->addTranslations('nl', __DIR__.'/../locale/mentions.yml');
            $event->addTranslations('nl', __DIR__.'/../locale/pusher.yml');
            $event->addTranslations('nl', __DIR__.'/../locale/reports.yml');
            $event->addTranslations('nl', __DIR__.'/../locale/sticky.yml');
            $event->addTranslations('nl', __DIR__.'/../locale/subscriptions.yml');
            $event->addTranslations('nl', __DIR__.'/../locale/tags.yml');
        });
    }
}
