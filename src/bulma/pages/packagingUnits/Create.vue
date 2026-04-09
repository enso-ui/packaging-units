<template>
    <div class="columns is-centered">
        <div class="column is-half-desktop">
            <enso-form class="box form-box"/>
        </div>
    </div>
</template>

<script>
import { EnsoForm } from '@enso-ui/forms/bulma';

export default {
    name: 'Create',

    components: { EnsoForm },
};
</script>
