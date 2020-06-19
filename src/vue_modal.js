import Promise from 'bluebird';
import Vue from 'vue';
import jQuery from 'jquery';

function vue_modal(props)
{
    let promise_shown = null;
    let promise_hidden = null;

    let promise_resolve;
    let promise_destroyed_resolve;
    const promise = new Promise(resolve => promise_resolve = resolve);
    const promise_destroyed = new Promise(resolve => promise_destroyed_resolve = resolve);

    return new Vue({
        el: document.body.appendChild(document.createElement('DIV')),
        mixins: [props],
        provide: function () {
            return {modal: this};
        },
        methods: {
            hide: function () {
                if (promise_hidden) {
                    return this;
                }
                promise_shown = null;
                promise_hidden = new Promise(resolve => jQuery(this.$el).stop().fadeOut('fast', resolve));
                return this;
            },
            show: function () {
                if (promise_shown) {
                    return this;
                }
                promise_shown = new Promise(resolve => jQuery(this.$el).stop().fadeIn('fast', resolve));
                promise_hidden = null;
                return this;
            },
            show_if_pending: function () {
                return promise_resolve ? this.show() : undefined;
            },
            end: function (retval) {
                if (!promise_resolve) {
                    // XXX Simulate old behavior when `end` fn was able to call several times
                    return;
                }
                // XXX Deprecated in favor of `return`
                return this.return(retval);
            },
            return: function (retval) {
                // This method should be called no more than one time
                promise_resolve(retval);
                promise_resolve = null;
                // `this.$destroy` cannot be called without this
                // Uncaught TypeError: Cannot read property 'beforeDestroy' of undefined
                jQuery(this.$el).fadeOut('fast', () => this.$destroy());
                return this;
            },
            promise: function () {
                return promise;
            },
            promise_destroyed: function () {
                return promise_destroyed;
            },
        },
        mounted: function () {
            // Case when component calls `this.modal.hide()` from its `created` method.
            if (promise_hidden) {
                jQuery(this.$el).hide();
                return;
            }
            try { document.activeElement.blur(); } catch (error) {}
            jQuery(this.$el).hide().fadeIn('fast', () => autofocus(this.$el));
        },
        beforeDestroy: function () {
            jQuery(this.$el).remove();
            if (promise_resolve) {
                promise_resolve();
                promise_resolve = null;
            }
            promise_destroyed_resolve(promise);
            promise_destroyed_resolve = null;
        },
    });
}

function autofocus(parent)
{
    return jQuery(parent).andSelf().find('[autofocus]a, [autofocus] a, [autofocus]button, [autofocus] button, [autofocus]input, [autofocus] input, [autofocus]textarea, [autofocus] textarea').filter(':visible').first().focus().select();
}

export default vue_modal;
