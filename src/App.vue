<template>
    <div class="layout">
        <section class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                </div>
            </div>
            <!-- /.container-fluid -->
        </section>
        <div class="content-container">
            <router-view />
        </div>
    </div>
    <PageFooter />
</template>

<script setup lang="js">
import PageFooter from "@/components/PageFooter.vue";

</script>

<style></style>
