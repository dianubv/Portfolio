<template>
    <div>
        <!-- Display the content of the selected project here -->
        <h1>{{ project }}</h1>
        <!-- You can fetch the content from the corresponding .md file here -->
    </div>
</template>

<script>
export default {
    computed: {
        project() {
            return this.$route.params.project;
        }
    }
};
</script>
