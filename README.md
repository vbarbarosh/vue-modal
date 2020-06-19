An abstraction for working with modals in Vue.

This is an answer to a question "how should I work with modals in Vue?".

In short, for each modal you should create two files: `modal-NAME.vue`
and `modal_NAME.js`. The former would be an ordinary Vue component
with all of HTML, JavaScript, and CSS in it, while the latter is
necessary to represent your modal as a simple function.

## Installation

```sh
npm i @vbarbarosh/vue-modal
```

## Usage

### `modal-hello.vue`

```vue
<template>
    <div>
        <button v-on:click="modal.return(true)">Confirm</button>
        <button v-on:click="modal.return(false)">Cancel</button>
    </div>
</template>

<script>
    const modal_hello = {
        props: ['value'],
        inject: ['modal'],
    };

    export default modal_hello;
</script>
```

### `modal_hello.js`

```javascript
import modal from '@vbarbarosh/vue-modal';

function modal_hello(value)
{
    return modal('<modal-hello v-model="value" />', {data: {value}});
}

export default modal_hello;
```

### `app.js`

```javascript
import Vue from 'vue';
import modal_hello from './modal_hello.js';

Vue({
    el: '#app',
    methods: {
        hello: async function () {
            await modal_hello().promise();
        },
    }
});
```
